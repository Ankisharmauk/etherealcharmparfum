import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { products } from '@/data/products'
import { BLACK_FRIDAY, isPromoActive, unitPrice } from '@/data/promotion'

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
  //
  // Black Friday Week (src/data/promotion.ts) is decided HERE, on the server, with the server
  // clock at the moment the customer pays. The browser's idea of the price is never trusted, so
  // the sale can neither outlast its end time nor be claimed early. This checkout has no coupon
  // or promotion code, so nothing can stack on top of the sale price.
  const promoActive = isPromoActive(new Date())
  let anySale = false
  const line_items = items.map((item: { id: string; quantity: number }) => {
    const product = products.find((p) => p.id === item.id)
    if (!product) throw new Error(`Unknown product id: ${item.id}`)
    const unit = unitPrice(product, promoActive)
    if (unit.onSale) anySale = true
    return {
      price_data: {
        currency: 'aud',
        product_data: {
          name: `${product.name} (${product.subtitle})`,
          ...(unit.onSale ? { description: `Black Friday Week price (regular A$${unit.regularPrice})` } : {}),
        },
        unit_amount: Math.round(unit.price * 100),
      },
      quantity: item.quantity,
    }
  })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    ...(anySale ? { metadata: { promotion: BLACK_FRIDAY.id } } : {}),
    success_url: `${process.env.NEXT_PUBLIC_URL}/order-success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/checkout`,
    shipping_address_collection: {
      allowed_countries: ['AU'],
    },
  })

  return NextResponse.json({ url: session.url })
}
