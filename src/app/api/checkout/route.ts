import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })

  const stripe = new Stripe(key, { apiVersion: '2026-04-22.dahlia' })

  const { items } = await req.json()

  if (!items?.length) {
    return NextResponse.json({ error: 'No items' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map((item: { priceId: string; quantity: number }) => ({
      price: item.priceId,
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/order-success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/checkout`,
    shipping_address_collection: {
      allowed_countries: ['AU', 'GB', 'US', 'NZ', 'CA'],
    },
  })

  return NextResponse.json({ url: session.url })
}
