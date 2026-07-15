import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { products } from '@/data/products'

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })

  const stripe = new Stripe(key, { apiVersion: '2026-04-22.dahlia' })

  const { items } = await req.json()

  if (!items?.length) {
    return NextResponse.json({ error: 'No items' }, { status: 400 })
  }

  // Prices are looked up server-side from the product catalog (AUD, in
  // dollars) rather than trusting a client-sent amount or a pre-created
  // Stripe Price ID — the brand currently sells in Australia only.
  const line_items = items.map((item: { id: string; quantity: number }) => {
    const product = products.find((p) => p.id === item.id)
    if (!product) throw new Error(`Unknown product id: ${item.id}`)
    return {
      price_data: {
        currency: 'aud',
        product_data: {
          name: `${product.name} (${product.subtitle})`,
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: item.quantity,
    }
  })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/order-success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/checkout`,
    shipping_address_collection: {
      allowed_countries: ['AU'],
    },
  })

  return NextResponse.json({ url: session.url })
}
