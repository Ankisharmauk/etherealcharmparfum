'use client'

import { useState } from 'react'
import Link from 'next/link'

const DARK = '#0D0804'
const GOLD = '#C9920E'
const CREAM = '#F5DFA0'

export default function ContactPage() {
  const [formData, setFormData] = useState({ first: '', last: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.first,
          lastName: formData.last,
          email: formData.email,
          message: formData.message,
        }),
      })
    } catch { /* fail silently */ }
    setSending(false)
    setSent(true)
  }

  return (
    <div style={{ background: DARK, minHeight: '100vh' }}>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 130% 100% at 50% 0%, #2A1500 0%, #0D0804 65%)',
          padding: '140px 24px 80px',
          textAlign: 'center',
        }}
      >
        <div className="gold-shimmer-overlay" />

        {/* Corner brackets */}
        <div className="absolute top-28 left-8 md:left-16" style={{ width: 28, height: 28, borderTop: '1px solid rgba(201,146,14,0.3)', borderLeft: '1px solid rgba(201,146,14,0.3)' }} />
        <div className="absolute top-28 right-8 md:right-16" style={{ width: 28, height: 28, borderTop: '1px solid rgba(201,146,14,0.3)', borderRight: '1px solid rgba(201,146,14,0.3)' }} />

        <div className="relative z-10 max-w-xl mx-auto">
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD, letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Get in Touch
          </p>
          <h1
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 300, color: CREAM, lineHeight: 1.1, marginBottom: '20px' }}
          >
            Contact Us
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(245,223,160,0.55)', lineHeight: 1.75, maxWidth: '380px', margin: '0 auto' }}>
            We would love to hear from you. Whether you have a question about a fragrance, an order, or simply want to say hello — reach out below.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,146,14,0.3) 40%, rgba(201,146,14,0.3) 60%, transparent)' }} />
      </section>

      {/* ── FORM + INFO ────────────────────────────────────────────── */}
      <section style={{ padding: '80px 24px 120px' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — contact info */}
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '24px' }}>
              Reach Us Directly
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 300, color: CREAM, lineHeight: 1.2, marginBottom: '32px' }}>
              We are here<br />to help
            </h2>

            <div className="space-y-8">
              <div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.38)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Email
                </p>
                <a
                  href="mailto:info@theetherealcharm.com"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: GOLD, textDecoration: 'none' }}
                >
                  info@theetherealcharm.com
                </a>
              </div>

              <div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.38)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Response Time
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.6)', lineHeight: 1.7 }}>
                  We aim to respond within 1 to 2 business days.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.38)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  For Media Enquiries
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.6)', lineHeight: 1.7 }}>
                  Press, editorial, and partnership requests —{' '}
                  <Link href="/media" style={{ color: GOLD, textDecoration: 'none' }}>visit our media page</Link>.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.38)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Follow Us
                </p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href="https://www.instagram.com/etherealcharmofficial" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(245,223,160,0.55)', textDecoration: 'none', letterSpacing: '0.05em' }}>
                    Instagram
                  </a>
                  <a href="https://www.tiktok.com/@etherealcharmperfume" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(245,223,160,0.55)', textDecoration: 'none', letterSpacing: '0.05em' }}>
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative divider */}
            <div style={{ marginTop: '48px', height: '1px', background: 'linear-gradient(90deg, rgba(201,146,14,0.3), transparent)' }} />
          </div>

          {/* Right — form */}
          <div style={{ border: '1px solid rgba(201,146,14,0.15)', padding: '40px', background: 'rgba(201,146,14,0.02)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(201,146,14,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <span style={{ color: GOLD, fontSize: '20px' }}>✓</span>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: CREAM, fontWeight: 300, marginBottom: '12px' }}>
                  Message received
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.55)', lineHeight: 1.7 }}>
                  Thank you for reaching out. We will be in touch within 1 to 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {[
                    { key: 'first', label: 'First Name' },
                    { key: 'last', label: 'Last Name' },
                  ].map(({ key, label }) => (
                    <div key={key}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.4)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
                        {label}
                      </label>
                      <input
                        type="text"
                        value={formData[key as keyof typeof formData]}
                        onChange={e => setFormData(d => ({ ...d, [key]: e.target.value }))}
                        style={{ width: '100%', background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.2)', color: CREAM, fontFamily: 'var(--font-sans)', fontSize: '13px', padding: '12px 16px', outline: 'none', boxSizing: 'border-box' }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.55)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.2)')}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.4)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                    style={{ width: '100%', background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.2)', color: CREAM, fontFamily: 'var(--font-sans)', fontSize: '13px', padding: '12px 16px', outline: 'none', boxSizing: 'border-box' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.55)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.2)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.4)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                    style={{ width: '100%', background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.2)', color: CREAM, fontFamily: 'var(--font-sans)', fontSize: '13px', padding: '12px 16px', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.55)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.2)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{ width: '100%', padding: '16px', background: 'rgba(201,146,14,0.08)', border: '1px solid rgba(201,146,14,0.4)', color: GOLD, fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: sending ? 'not-allowed' : 'pointer', opacity: sending ? 0.5 : 1, transition: 'all 0.3s' }}
                  onMouseEnter={e => { if (!sending) { e.currentTarget.style.background = 'rgba(201,146,14,0.18)'; e.currentTarget.style.borderColor = 'rgba(201,146,14,0.7)' } }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,146,14,0.08)'; e.currentTarget.style.borderColor = 'rgba(201,146,14,0.4)' }}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
