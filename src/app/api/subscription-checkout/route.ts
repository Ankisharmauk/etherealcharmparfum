import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { products } from '@/data/products'
import {
  SUBSCRIPTION_INTERVALS,
  isSubscriptionMonths,
  subscriptionLookupKey,
} from '@/data/subscription'

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })

  const stripe = new Stripe(key, { apiVersion: '2026-04-22.dahlia' })

  const { productId, months } = await req.json()

  const product = products.find((p) => p.id === productId)
  if (!product || !isSubscriptionMonths(months)) {
    return NextResponse.json({ error: 'Invalid subscription' }, { status: 400 })
  }

  const interval = SUBSCRIPTION_INTERVALS.find((i) => i.months === months)!

  // Look the recurring Price up by its lookup key (created by scripts/stripe-setup-subscriptions.mjs).
  const prices = await stripe.prices.list({
    lookup_keys: [subscriptionLookupKey(product.id, months)],
    active: true,
    limit: 1,
  })
  const price = prices.data[0]
  if (!price) {
    return NextResponse.json({ error: 'Subscription not available yet' }, { status: 503 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: price.id, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/subscription-success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/shop/${product.slug}`,
    shipping_address_collection: {
      allowed_countries: ['AU'],
    },
    custom_text: {
      submit: {
        message: `You are subscribing to ${product.name} (${product.subtitle}), delivered ${interval.short}. You will be charged today and then ${interval.short} until you cancel. Cancel any time from the Manage Subscription page on our website.`,
      },
    },
  })

  return NextResponse.json({ url: session.url })
}
