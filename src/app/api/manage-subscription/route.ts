import { NextRequest, NextResponse } from 'next/server'

// Sends customers to Stripe's hosted customer portal login page, where they
// enter their email and receive a secure link to cancel, change size or
// frequency, and update payment or address. The URL is read at request time
// (not build time), so changing the env var needs no code change.
export async function GET(req: NextRequest) {
  const portal = process.env.STRIPE_PORTAL_LOGIN_URL
  if (!portal) {
    return NextResponse.redirect(new URL('/contact', req.url))
  }
  return NextResponse.redirect(portal)
}
