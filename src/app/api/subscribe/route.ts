import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID

  if (!apiKey || !listId) {
    console.error('[Subscribe] Missing BREVO_API_KEY or BREVO_LIST_ID')
    return NextResponse.json({ ok: true }) // Fail silently on frontend
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [parseInt(listId, 10)],
        updateEnabled: true, // won't error if email already exists
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('[Subscribe] Brevo error:', err)
    } else {
      console.log('[Subscribe] Added to Brevo list:', email)
    }
  } catch (err) {
    console.error('[Subscribe] Network error:', err)
  }

  // Always return ok — don't expose internal errors to the visitor
  return NextResponse.json({ ok: true })
}
