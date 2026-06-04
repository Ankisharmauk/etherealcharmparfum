import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  // Support both {firstName, lastName} and legacy {name} fields
  const firstName = body.firstName || ''
  const lastName = body.lastName || ''
  const email = body.email || ''
  const message = body.message || ''
  const name = body.name || [firstName, lastName].filter(Boolean).join(' ') || email

  if (!email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY

  if (!apiKey) {
    console.error('[Contact] Missing BREVO_API_KEY')
    return NextResponse.json({ ok: true })
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Ethereal Charm Website',
          email: 'info@theetherealcharm.com',
        },
        to: [{ email: 'info@theetherealcharm.com', name: 'Ethereal Charm' }],
        replyTo: { email, name },
        subject: `New message from ${name}`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#faf7f2;border:1px solid #e8d8b0;">
            <h2 style="color:#C9920E;font-weight:400;margin-bottom:8px;">New Contact Message</h2>
            <p style="color:#888;font-size:13px;margin-bottom:24px;">Received from theetherealcharm.com</p>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr>
                <td style="padding:10px 0;color:#888;width:100px;vertical-align:top;">Name</td>
                <td style="padding:10px 0;color:#1a0d02;font-weight:500;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#888;vertical-align:top;">Email</td>
                <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#C9920E;">${email}</a></td>
              </tr>
              <tr style="border-top:1px solid #e8d8b0;">
                <td style="padding:10px 0;color:#888;vertical-align:top;">Message</td>
                <td style="padding:10px 0;color:#1a0d02;white-space:pre-wrap;">${message}</td>
              </tr>
            </table>
            <p style="margin-top:24px;font-size:12px;color:#bbb;">Hit reply to respond directly to ${name}.</p>
          </div>
        `,
      }),
    })

    const responseText = await res.text()

    if (!res.ok) {
      console.error('[Contact] Brevo error', res.status, responseText)
    } else {
      console.log('[Contact] Email sent successfully to info@theetherealcharm.com from:', email)
    }
  } catch (err) {
    console.error('[Contact] Network error:', err)
  }

  return NextResponse.json({ ok: true })
}
