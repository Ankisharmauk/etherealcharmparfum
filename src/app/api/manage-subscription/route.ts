import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Sends customers to Stripe's hosted customer portal login page, where they
// enter their email and receive a secure link to cancel, change size or
// frequency, and update payment or address. The login URL is found from the
// portal configuration the setup route created, so no extra env variable is
// needed. STRIPE_PORTAL_LOGIN_URL, if set, takes priority.
export async function GET(req: NextRequest) {
  const override = process.env.STRIPE_PORTAL_LOGIN_URL
  if (override) return NextResponse.redirect(override)

  const key = process.env.STRIPE_SECRET_KEY
  if (key) {
    try {
      const stripe = new Stripe(key, { apiVersion: '2026-04-22.dahlia' })
      const configs = await stripe.billingPortal.configurations.list({ limit: 100 })
      const ours = configs.data.find((c) => c.metadata?.ec_subscriptions === '1' && c.active)
      const url = ours?.login_page?.url
      if (url) return NextResponse.redirect(url)
    } catch {
      // fall through to the contact page
    }
  }
  return NextResponse.redirect(new URL('/contact', req.url))
}
