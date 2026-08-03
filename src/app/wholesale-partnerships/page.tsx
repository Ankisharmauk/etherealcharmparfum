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

const TARGET_AUDIENCES = [
  'Boutiques', 'Beauty & Lifestyle Retailers', 'Gift Businesses', 'Event Organisers',
  'Membership Communities', 'Corporate Partners', 'Distributors',
]

const OPPORTUNITIES = [
  { title: 'Wholesale Stocking', body: 'Purchase products at an agreed wholesale rate and earn a retail margin.' },
  { title: 'Trial Placement', body: 'Begin with a limited quantity to test customer response before scaling.' },
  { title: 'Revenue Share', body: 'Explore commission or margin-based arrangements where appropriate.' },
  { title: 'Event & Community Partnerships', body: 'Introduce Ethereal Charm through curated events, member experiences or campaigns.' },
  { title: 'Bespoke Gifting', body: 'Fragrance gifts for clients, teams, launches and special occasions.' },
]

const WHY_ETHEREAL_CHARM = [
  'Signature gender-neutral parfum',
  'Developed and made in London',
  'Founder-led emerging brand based in Sydney',
  'Flexible trial opportunities',
  'Suitable for premium gifting and experiential retail',
]

const BUSINESS_TYPES = ['Boutique', 'Beauty or lifestyle retailer', 'Gift business', 'Event organiser', 'Membership community', 'Corporate partner', 'Distributor', 'Other']
const OPPORTUNITY_OPTIONS = OPPORTUNITIES.map(o => o.title).concat('Other')

export default function WholesalePartnershipsPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', businessType: '', website: '', location: '', quantity: '', opportunity: '', message: '',
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
      `Company: ${formData.company}`,
      `Business type: ${formData.businessType || 'Not specified'}`,
      `Website / social link: ${formData.website || 'Not provided'}`,
      `Location: ${formData.location}`,
      `Estimated quantity or trial size: ${formData.quantity || 'Not specified'}`,
      `Opportunity of interest: ${formData.opportunity || 'Not specified'}`,
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
          subject: `New Wholesale & Partnership enquiry from ${formData.name || formData.email}`,
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
            Wholesale &amp; Partnerships
          </p>
          <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 300, color: CREAM, lineHeight: 1.1, marginBottom: '24px', transitionDelay: '0.1s' }}>
            Partner with<br />Ethereal Charm
          </h1>
          <p className="reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(245,223,160,0.6)', lineHeight: 1.75, maxWidth: '440px', margin: '0 auto 40px', transitionDelay: '0.2s' }}>
            Introduce a distinctive London-made parfum to your customers, clients or community through flexible commercial partnerships.
          </p>
          <a
            href="#enquire"
            className="reveal inline-block transition-all duration-300"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#0D0804', background: GOLD, padding: '16px 40px', transitionDelay: '0.3s' }}
          >
            Discuss a Partnership
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,146,14,0.3) 40%, rgba(201,146,14,0.3) 60%, transparent)' }} />
      </section>

      {/* ── TARGET AUDIENCES ───────────────────────────────────────── */}
      <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(201,146,14,0.12)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="reveal tracking-[0.3em] uppercase font-light mb-8 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'rgba(245,223,160,0.4)' }}>
            Built for
          </p>
          <div className="reveal flex flex-wrap justify-center gap-3">
            {TARGET_AUDIENCES.map(label => (
              <span
                key={label}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.05em', color: 'rgba(245,223,160,0.7)', border: '1px solid rgba(201,146,14,0.25)', padding: '9px 18px', background: 'rgba(201,146,14,0.03)' }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── A. PARTNERSHIP OPPORTUNITIES ──────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg, #0D0804 0%, #160C04 60%, #0D0804 100%)', padding: '100px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-4 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            Ways to Work Together
          </p>
          <h2 className="reveal font-light text-center mb-16" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: CREAM, transitionDelay: '0.1s' }}>
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {OPPORTUNITIES.map(({ title, body }, i) => (
              <div
                key={title}
                className="reveal"
                style={{ background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.15)', padding: '20px 16px', transitionDelay: `${i * 0.08}s` }}
              >
                <div style={{ width: 20, height: 1, background: 'rgba(201,146,14,0.5)', marginBottom: 14 }} />
                <h3 className="font-light mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(15px, 2vw, 19px)', color: CREAM, lineHeight: 1.3 }}>
                  {title}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '20px', color: 'rgba(245,223,160,0.55)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── B. WHY ETHEREAL CHARM ─────────────────────────────────── */}
      <section style={{ background: '#100904', borderTop: '1px solid rgba(201,146,14,0.12)', borderBottom: '1px solid rgba(201,146,14,0.12)', padding: '100px 0' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-16 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            Why Ethereal Charm
          </p>
          <div className="reveal space-y-3">
            {WHY_ETHEREAL_CHARM.map(item => (
              <div key={item} className="flex items-center gap-4 px-6 py-4" style={{ background: 'rgba(201,146,14,0.03)', border: '1px solid rgba(201,146,14,0.12)' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.75)' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. ENQUIRY FORM ────────────────────────────────────────── */}
      <section id="enquire" style={{ padding: '100px 24px 120px', scrollMarginTop: '80px' }}>
        <div className="max-w-xl mx-auto">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-4 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            Enquire
          </p>
          <h2 className="reveal font-light text-center mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: CREAM, transitionDelay: '0.1s' }}>
            Start a Conversation
          </h2>
          <p className="reveal text-center mb-12" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '22px', color: 'rgba(245,223,160,0.4)', fontStyle: 'italic', transitionDelay: '0.15s' }}>
            Commercial terms, including wholesale pricing, are discussed individually with each partner.
          </p>

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
                  Thank you for your interest in partnering with Ethereal Charm. We will be in touch to discuss next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="wp-name" style={labelStyle}>Name</label>
                    <input id="wp-name" type="text" required value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                  </div>
                  <div>
                    <label htmlFor="wp-email" style={labelStyle}>Email</label>
                    <input id="wp-email" type="email" required value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                  </div>
                </div>
                <div>
                  <label htmlFor="wp-company" style={labelStyle}>Company</label>
                  <input id="wp-company" type="text" required value={formData.company} onChange={e => setFormData(d => ({ ...d, company: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                </div>
                <div>
                  <label htmlFor="wp-business-type" style={labelStyle}>Business Type</label>
                  <select id="wp-business-type" required value={formData.businessType} onChange={e => setFormData(d => ({ ...d, businessType: e.target.value }))} style={fieldStyle} {...focusHandlers()}>
                    <option value="" disabled>Select an option</option>
                    {BUSINESS_TYPES.map(opt => <option key={opt} value={opt} style={{ background: DARK }}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="wp-website" style={labelStyle}>Website / Social Link</label>
                  <input id="wp-website" type="text" value={formData.website} onChange={e => setFormData(d => ({ ...d, website: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="wp-location" style={labelStyle}>Location</label>
                    <input id="wp-location" type="text" required value={formData.location} onChange={e => setFormData(d => ({ ...d, location: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                  </div>
                  <div>
                    <label htmlFor="wp-quantity" style={labelStyle}>Estimated Quantity / Trial Size</label>
                    <input id="wp-quantity" type="text" value={formData.quantity} onChange={e => setFormData(d => ({ ...d, quantity: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                  </div>
                </div>
                <div>
                  <label htmlFor="wp-opportunity" style={labelStyle}>Opportunity of Interest</label>
                  <select id="wp-opportunity" required value={formData.opportunity} onChange={e => setFormData(d => ({ ...d, opportunity: e.target.value }))} style={fieldStyle} {...focusHandlers()}>
                    <option value="" disabled>Select an option</option>
                    {OPPORTUNITY_OPTIONS.map(opt => <option key={opt} value={opt} style={{ background: DARK }}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="wp-message" style={labelStyle}>Message</label>
                  <textarea id="wp-message" rows={4} required value={formData.message} onChange={e => setFormData(d => ({ ...d, message: e.target.value }))} style={{ ...fieldStyle, resize: 'none' }} {...focusHandlers()} />
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
