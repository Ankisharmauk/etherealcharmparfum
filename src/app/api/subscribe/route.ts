import { NextRequest, NextResponse } from 'next/server'

// Simple subscriber log — replace with Mailchimp/Klaviyo/Resend integration when ready.
// To connect Mailchimp: add MAILCHIMP_API_KEY + MAILCHIMP_LIST_ID to Vercel env vars
// and use the Mailchimp Marketing API to add members.

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  // Log for now (visible in Vercel function logs under your dashboard)
  console.log('[Subscribe]', { email, at: new Date().toISOString() })

  // ── Mailchimp integration (uncomment when ready) ──────────────────
  // const listId = process.env.MAILCHIMP_LIST_ID
  // const apiKey = process.env.MAILCHIMP_API_KEY          // e.g. 'abc123-us1'
  // const datacentre = apiKey?.split('-')[1]              // e.g. 'us1'
  // await fetch(`https://${datacentre}.api.mailchimp.com/3.0/lists/${listId}/members`, {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `apikey ${apiKey}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ email_address: email, status: 'subscribed' }),
  // })

  return NextResponse.json({ ok: true })
}
