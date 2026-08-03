'use client'

import { useEffect, useState } from 'react'

const DARK = '#0D0804'
const GOLD = '#C9920E'
const CREAM = '#F5DFA0'

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: '9px',
  color: 'rgba(245,223,160,0.4)',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  marginBottom: '8px',
}

const fieldStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(201,146,14,0.04)',
  border: '1px solid rgba(201,146,14,0.2)',
  color: CREAM,
  fontFamily: 'var(--font-sans)',
  fontSize: '13px',
  padding: '12px 16px',
  outline: 'none',
  boxSizing: 'border-box',
}

function focusHandlers() {
  return {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.55)'),
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.2)'),
  }
}

const HOSPITALITY_OPPORTUNITIES = [
  'VIP guest gifting', 'Premium-suite welcome gifts', 'Guest loyalty or celebration gifts',
  'Curated retail placement', 'Spa and wellness gifting', 'Event and conference gift bags',
]

const CORPORATE_GIFTING = [
  'Client appreciation', 'Employee recognition', 'Executive gifts',
  'Launch events', 'Holiday and milestone gifting', 'Bespoke bulk orders',
]

const AREA_OF_INTEREST_OPTIONS = [...HOSPITALITY_OPPORTUNITIES, ...CORPORATE_GIFTING, 'Other']
const PROPERTY_TYPES = ['Hotel', 'Resort', 'Spa or wellness centre', 'Event or conference venue', 'Corporate office', 'Membership club', 'Other']

export default function HospitalityGiftingPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', organisation: '', propertyType: '', location: '', website: '', areaOfInterest: '', quantity: '', timing: '', message: '',
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    const message = [
      `Organisation: ${formData.organisation}`,
      `Property / business type: ${formData.propertyType || 'Not specified'}`,
      `Location: ${formData.location}`,
      `Website: ${formData.website || 'Not provided'}`,
      `Area of interest: ${formData.areaOfInterest || 'Not specified'}`,
      `Approximate quantity: ${formData.quantity || 'Not specified'}`,
      `Desired timing: ${formData.timing || 'Not specified'}`,
      '',
      'Message:',
      formData.message || '(none)',
    ].join('\n')

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message,
          subject: `New Hospitality & Corporate Gifting enquiry from ${formData.name || formData.email}`,
        }),
      })
    } catch { /* fail silently — enquirer still sees confirmation */ }
    setSending(false)
    setSent(true)
  }

  return (
    <div style={{ background: DARK }}>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 130% 100% at 50% 0%, #2A1500 0%, #0D0804 65%)', padding: '140px 24px 96px', textAlign: 'center' }}
      >
        <div className="gold-shimmer-overlay" />
        <div className="absolute top-28 left-8 md:left-16" style={{ width: 28, height: 28, borderTop: '1px solid rgba(201,146,14,0.3)', borderLeft: '1px solid rgba(201,146,14,0.3)' }} />
        <div className="absolute top-28 right-8 md:right-16" style={{ width: 28, height: 28, borderTop: '1px solid rgba(201,146,14,0.3)', borderRight: '1px solid rgba(201,146,14,0.3)' }} />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD, letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Hotels, Spas &amp; Corporate Gifting
          </p>
          <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 300, color: CREAM, lineHeight: 1.1, marginBottom: '24px', transitionDelay: '0.1s' }}>
            A Memorable<br />Fragrance Experience
          </h1>
          <p className="reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(245,223,160,0.6)', lineHeight: 1.75, maxWidth: '440px', margin: '0 auto 40px', transitionDelay: '0.2s' }}>
            Elevate guest stays, client relationships and special moments with Ethereal Charm.
          </p>
          <a
            href="#enquire"
            className="reveal inline-block transition-all duration-300"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#0D0804', background: GOLD, padding: '16px 40px', transitionDelay: '0.3s' }}
          >
            Explore a Trial
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,146,14,0.3) 40%, rgba(201,146,14,0.3) 60%, transparent)' }} />
      </section>

      {/* ── A. HOSPITALITY OPPORTUNITIES ──────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg, #0D0804 0%, #160C04 60%, #0D0804 100%)', padding: '100px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-4 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            For Guests
          </p>
          <h2 className="reveal font-light text-center mb-16" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: CREAM, transitionDelay: '0.1s' }}>
            Hospitality Opportunities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {HOSPITALITY_OPPORTUNITIES.map((title, i) => (
              <div
                key={title}
                className="reveal"
                style={{ background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.15)', padding: '24px 16px', textAlign: 'center', transitionDelay: `${i * 0.06}s` }}
              >
                <div style={{ width: 20, height: 1, background: 'rgba(201,146,14,0.5)', margin: '0 auto 14px' }} />
                <p className="font-light" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 2vw, 17px)', color: CREAM, lineHeight: 1.35 }}>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── B. CORPORATE GIFTING ──────────────────────────────────── */}
      <section style={{ background: '#100904', borderTop: '1px solid rgba(201,146,14,0.12)', borderBottom: '1px solid rgba(201,146,14,0.12)', padding: '100px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-4 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            For Clients &amp; Teams
          </p>
          <h2 className="reveal font-light text-center mb-16" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: CREAM, transitionDelay: '0.1s' }}>
            Corporate Gifting
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {CORPORATE_GIFTING.map((title, i) => (
              <div
                key={title}
                className="reveal"
                style={{ background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.15)', padding: '24px 16px', textAlign: 'center', transitionDelay: `${i * 0.06}s` }}
              >
                <div style={{ width: 20, height: 1, background: 'rgba(201,146,14,0.5)', margin: '0 auto 14px' }} />
                <p className="font-light" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 2vw, 17px)', color: CREAM, lineHeight: 1.35 }}>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. START WITH A TRIAL ─────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ padding: '110px 24px' }}>
        <div className="gold-shimmer-overlay" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="reveal flex items-center justify-center gap-4 mb-10">
            <div style={{ height: '1px', width: 48, background: 'rgba(201,146,14,0.45)' }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, opacity: 0.7 }} />
            <div style={{ height: '1px', width: 48, background: 'rgba(201,146,14,0.45)' }} />
          </div>
          <p className="reveal tracking-[0.3em] uppercase font-light mb-8" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD, transitionDelay: '0.1s' }}>
            Start With a Trial
          </p>
          <blockquote
            className="reveal font-light italic leading-relaxed"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 32px)', color: 'rgba(245,223,160,0.92)', lineHeight: 1.55, transitionDelay: '0.2s' }}
          >
            &ldquo;Begin with a carefully selected trial quantity, gather feedback and explore a wider rollout only when the experience is right for your guests or clients.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── D. COMMERCIAL MODEL ───────────────────────────────────── */}
      <section style={{ padding: '0 24px 100px' }}>
        <div
          className="reveal max-w-3xl mx-auto p-8 md:p-10"
          style={{ background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.15)', borderLeft: '2px solid rgba(201,146,14,0.5)' }}
        >
          <p className="tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.38)' }}>
            Commercial Model
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '24px', color: 'rgba(245,223,160,0.55)' }}>
            Partnerships may operate through wholesale pricing, an agreed retail margin, commission-based sales or bespoke gifting arrangements depending on the opportunity.
          </p>
        </div>
      </section>

      {/* ── E. ENQUIRY FORM ────────────────────────────────────────── */}
      <section id="enquire" style={{ padding: '0 24px 120px', scrollMarginTop: '80px' }}>
        <div className="max-w-xl mx-auto">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-4 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            Enquire
          </p>
          <h2 className="reveal font-light text-center mb-12" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: CREAM, transitionDelay: '0.1s' }}>
            Explore a Trial
          </h2>

          <div className="reveal" style={{ border: '1px solid rgba(201,146,14,0.15)', padding: '40px', background: 'rgba(201,146,14,0.02)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(201,146,14,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <span style={{ color: GOLD, fontSize: '20px' }}>✓</span>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: CREAM, fontWeight: 300, marginBottom: '12px' }}>
                  Enquiry received
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.55)', lineHeight: 1.7 }}>
                  Thank you for your interest. We will be in touch to discuss a trial suited to your guests or clients.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="hg-name" style={labelStyle}>Full Name</label>
                    <input id="hg-name" type="text" required value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                  </div>
                  <div>
                    <label htmlFor="hg-email" style={labelStyle}>Email</label>
                    <input id="hg-email" type="email" required value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                  </div>
                </div>
                <div>
                  <label htmlFor="hg-organisation" style={labelStyle}>Organisation</label>
                  <input id="hg-organisation" type="text" required value={formData.organisation} onChange={e => setFormData(d => ({ ...d, organisation: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                </div>
                <div>
                  <label htmlFor="hg-property-type" style={labelStyle}>Property / Business Type</label>
                  <select id="hg-property-type" required value={formData.propertyType} onChange={e => setFormData(d => ({ ...d, propertyType: e.target.value }))} style={fieldStyle} {...focusHandlers()}>
                    <option value="" disabled>Select an option</option>
                    {PROPERTY_TYPES.map(opt => <option key={opt} value={opt} style={{ background: DARK }}>{opt}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="hg-location" style={labelStyle}>Location</label>
                    <input id="hg-location" type="text" required value={formData.location} onChange={e => setFormData(d => ({ ...d, location: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                  </div>
                  <div>
                    <label htmlFor="hg-website" style={labelStyle}>Website</label>
                    <input id="hg-website" type="text" value={formData.website} onChange={e => setFormData(d => ({ ...d, website: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                  </div>
                </div>
                <div>
                  <label htmlFor="hg-area" style={labelStyle}>Area of Interest</label>
                  <select id="hg-area" required value={formData.areaOfInterest} onChange={e => setFormData(d => ({ ...d, areaOfInterest: e.target.value }))} style={fieldStyle} {...focusHandlers()}>
                    <option value="" disabled>Select an option</option>
                    {AREA_OF_INTEREST_OPTIONS.map(opt => <option key={opt} value={opt} style={{ background: DARK }}>{opt}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="hg-quantity" style={labelStyle}>Approximate Quantity</label>
                    <input id="hg-quantity" type="text" value={formData.quantity} onChange={e => setFormData(d => ({ ...d, quantity: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                  </div>
                  <div>
                    <label htmlFor="hg-timing" style={labelStyle}>Desired Timing</label>
                    <input id="hg-timing" type="text" value={formData.timing} onChange={e => setFormData(d => ({ ...d, timing: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                  </div>
                </div>
                <div>
                  <label htmlFor="hg-message" style={labelStyle}>Message</label>
                  <textarea id="hg-message" rows={4} required value={formData.message} onChange={e => setFormData(d => ({ ...d, message: e.target.value }))} style={{ ...fieldStyle, resize: 'none' }} {...focusHandlers()} />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{ width: '100%', padding: '16px', background: 'rgba(201,146,14,0.08)', border: '1px solid rgba(201,146,14,0.4)', color: GOLD, fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: sending ? 'not-allowed' : 'pointer', opacity: sending ? 0.5 : 1, transition: 'all 0.3s' }}
                  onMouseEnter={e => { if (!sending) { e.currentTarget.style.background = 'rgba(201,146,14,0.18)'; e.currentTarget.style.borderColor = 'rgba(201,146,14,0.7)' } }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,146,14,0.08)'; e.currentTarget.style.borderColor = 'rgba(201,146,14,0.4)' }}
                >
                  {sending ? 'Submitting...' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
