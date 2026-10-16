import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import Stripe from 'stripe'
import { products } from '@/data/products'
import {
  SUBSCRIPTION_INTERVALS,
  subscriptionLookupKey,
  subscriptionUnitAmount,
} from '@/data/subscription'

// One-time setup: creates the recurring Stripe products and prices and the
// customer portal configuration, using the STRIPE_SECRET_KEY already set on
// the server. It does nothing unless SETUP_TOKEN is set as an env variable
// AND the request supplies the same value. Remove SETUP_TOKEN once finished
// and this route goes back to returning 404. Safe to run more than once.

const PORTAL_METADATA_KEY = 'ec_subscriptions'

function tokenMatches(supplied: string | null, expected: string): boolean {
  if (!supplied) return false
  const a = Buffer.from(supplied)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

export async function GET(req: NextRequest) {
  const expected = process.env.SETUP_TOKEN
  if (!expected) return new NextResponse('Not found', { status: 404 })
  if (!tokenMatches(req.nextUrl.searchParams.get('token'), expected)) {
    return new NextResponse('Not found', { status: 404 })
  }

  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return NextResponse.json({ error: 'STRIPE_SECRET_KEY is not set' }, { status: 500 })

  const stripe = new Stripe(key, { apiVersion: '2026-04-22.dahlia' })
  const mode = key.startsWith('sk_test_') ? 'test' : 'live'
  const log: string[] = []
  const portalProducts: { product: string; prices: string[] }[] = []

  try {
    for (const p of products) {
      let productId: string | undefined
      const priceIds: string[] = []
      const amount = subscriptionUnitAmount(p)

      for (const { months } of SUBSCRIPTION_INTERVALS) {
        const lookup = subscriptionLookupKey(p.id, months)
        const existing = await stripe.prices.list({ lookup_keys: [lookup], active: true, limit: 1 })
        if (existing.data[0]) {
          const found = existing.data[0]
          productId = typeof found.product === 'string' ? found.product : found.product.id
          priceIds.push(found.id)
          log.push(`exists: ${lookup}`)
          continue
        }
        if (!productId) {
          const product = await stripe.products.create({
            name: `${p.name} (${p.size.replace('ml', ' ml')}) Subscription`,
            metadata: { ec_product_id: p.id },
          })
          productId = product.id
          log.push(`created product: ${product.name}`)
        }
        const price = await stripe.prices.create({
          product: productId,
          currency: 'aud',
          unit_amount: amount,
          recurring: { interval: 'month', interval_count: months },
          lookup_key: lookup,
          nickname: months === 1 ? 'Every month' : `Every ${months} months`,
        })
        priceIds.push(price.id)
        log.push(`created price: ${lookup} (A$${(amount / 100).toFixed(2)})`)
      }
      portalProducts.push({ product: productId!, prices: priceIds })
    }

    const baseUrl = process.env.NEXT_PUBLIC_URL ?? req.nextUrl.origin
    const features: Stripe.BillingPortal.ConfigurationCreateParams['features'] = {
      subscription_cancel: { enabled: true, mode: 'at_period_end' },
      subscription_update: {
        enabled: true,
        default_allowed_updates: ['price'],
        proration_behavior: 'none',
        products: portalProducts,
      },
      payment_method_update: { enabled: true },
      customer_update: { enabled: true, allowed_updates: ['email', 'name', 'phone', 'shipping'] },
      invoice_history: { enabled: true },
    }

    const configs = await stripe.billingPortal.configurations.list({ limit: 100 })
    const ours = configs.data.find((c) => c.metadata?.[PORTAL_METADATA_KEY] === '1' && c.active)

    const params = {
      business_profile: { headline: 'Manage your Ethereal Charm subscription' },
      default_return_url: `${baseUrl}/subscription`,
      login_page: { enabled: true },
      metadata: { [PORTAL_METADATA_KEY]: '1' },
      features,
    }
    const config = ours
      ? await stripe.billingPortal.configurations.update(ours.id, params)
      : await stripe.billingPortal.configurations.create(params)
    log.push(ours ? 'updated customer portal configuration' : 'created customer portal configuration')

    return NextResponse.json({
      ok: true,
      stripeMode: mode,
      steps: log,
      portalLoginUrl: config.login_page?.url ?? null,
      next: 'Now delete the SETUP_TOKEN env variable in Vercel and redeploy.',
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ ok: false, stripeMode: mode, steps: log, error: message }, { status: 500 })
  }
}
