// Creates the subscription products, recurring prices and customer portal
// configuration in Stripe. Safe to re-run: existing items are reused.
//
// TEST MODE (default, what you should run first):
//   node --env-file=.env.local scripts/stripe-setup-subscriptions.mjs
//
// This script refuses to run with a live key unless you also pass --live,
// which is only for the go-live step after you have approved the test run.

import Stripe from 'stripe'

const key = process.env.STRIPE_SECRET_KEY
const allowLive = process.argv.includes('--live')

if (!key) {
  console.error('STRIPE_SECRET_KEY is not set.')
  process.exit(1)
}
const isTest = key.startsWith('sk_test_')
if (!isTest && !allowLive) {
  console.error('Refusing to run: STRIPE_SECRET_KEY is not a test key (sk_test_...).')
  console.error('Put a test key in .env.local, or pass --live deliberately when going live.')
  process.exit(1)
}
console.log(isTest ? 'Mode: TEST' : 'Mode: LIVE (--live was passed)')

const stripe = new Stripe(key, { apiVersion: '2026-04-22.dahlia' })
const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

// Keep in sync with src/data/products.ts and src/data/subscription.ts.
const PRODUCTS = [
  { id: 'mini-ethereal-charm', name: 'The Mini Ethereal Charm (10 ml) Subscription', cents: 5310 },
  { id: 'ethereal-charm-25ml', name: 'The Ethereal Charm (25 ml) Subscription', cents: 10710 },
]
const MONTHS = [1, 2, 3]

const portalProducts = []

for (const p of PRODUCTS) {
  // Reuse the product if a price with our lookup key already exists.
  let productId
  const priceIds = []
  for (const m of MONTHS) {
    const lookup = `ec_sub_${p.id}_${m}m`
    const existing = await stripe.prices.list({ lookup_keys: [lookup], active: true, limit: 1 })
    if (existing.data[0]) {
      productId = existing.data[0].product
      priceIds.push(existing.data[0].id)
      console.log(`exists  ${lookup} -> ${existing.data[0].id}`)
      continue
    }
    if (!productId) {
      const product = await stripe.products.create({
        name: p.name,
        metadata: { ec_product_id: p.id },
      })
      productId = product.id
      console.log(`created product ${productId} (${p.name})`)
    }
    const price = await stripe.prices.create({
      product: productId,
      currency: 'aud',
      unit_amount: p.cents,
      recurring: { interval: 'month', interval_count: m },
      lookup_key: lookup,
      nickname: m === 1 ? 'Every month' : `Every ${m} months`,
    })
    priceIds.push(price.id)
    console.log(`created ${lookup} -> ${price.id} (A$${(p.cents / 100).toFixed(2)} every ${m} month(s))`)
  }
  portalProducts.push({ product: productId, prices: priceIds })
}

// Customer portal: cancel, change size or frequency, update payment and address.
const config = await stripe.billingPortal.configurations.create({
  business_profile: { headline: 'Manage your Ethereal Charm subscription' },
  default_return_url: `${baseUrl}/subscription`,
  login_page: { enabled: true },
  features: {
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
  },
})

console.log('\nPortal configuration:', config.id)
console.log('Portal login page URL (set this as STRIPE_PORTAL_LOGIN_URL):')
console.log(config.login_page?.url ?? '(none returned)')
