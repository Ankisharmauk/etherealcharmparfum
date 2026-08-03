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

const WAYS_TO_PARTICIPATE = [
  { title: 'Written Review', body: 'Share an honest review of your Ethereal Charm experience.' },
  { title: 'Photo or UGC', body: 'Create product-focused content. Showing your face is optional.' },
  { title: 'Video Review', body: 'Film the bottle, unboxing, spray or your fragrance experience.' },
  { title: 'Social Content', body: 'Share Ethereal Charm on Instagram, TikTok, YouTube or a blog.' },
  { title: 'Refer a Friend', body: 'Share a personal referral link or discount code and earn when someone purchases.' },
]

const HOW_IT_WORKS = [
  { num: '01', title: 'Apply', body: 'Apply, or submit your review or content.' },
  { num: '02', title: 'Get approved', body: 'Receive a personal referral link or code if approved.' },
  { num: '03', title: 'Earn', body: 'Earn rewards from qualifying purchases or approved contributions.' },
]

const REWARDS = [
  'Exclusive discount codes',
  'Complimentary samples',
  'Store credit',
  'Commission on qualifying referred sales',
  'Early access to launches and collaborations',
]

const PARTICIPATION_OPTIONS = ['Customer review', 'UGC creator', 'Social creator', 'Referral partner', 'Other']

export default function CreatorsPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', location: '', social: '', participation: '', owns: '', message: '',
  })
  const [consent, setConsent] = useState(false)
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
    if (!consent) return
    setSending(true)
    const message = [
      `Location: ${formData.location || 'Not provided'}`,
      `Social link: ${formData.social || 'Not provided'}`,
      `How they would like to participate: ${formData.participation || 'Not specified'}`,
      `Already owns Ethereal Charm: ${formData.owns || 'Not specified'}`,
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
          subject: `New Creators & Rewards application from ${formData.name || formData.email}`,
        }),
      })
    } catch { /* fail silently — applicant still sees confirmation */ }
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
            Creators &amp; Rewards
          </p>
          <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 300, color: CREAM, lineHeight: 1.1, marginBottom: '24px', transitionDelay: '0.1s' }}>
            Share the Scent.<br />Earn Rewards.
          </h1>
          <p className="reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(245,223,160,0.6)', lineHeight: 1.75, maxWidth: '440px', margin: '0 auto 40px', transitionDelay: '0.2s' }}>
            Review Ethereal Charm, create content or refer someone you know — and receive rewards when your contribution helps the brand grow.
          </p>
          <a
            href="#apply"
            className="reveal inline-block transition-all duration-300"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#0D0804', background: GOLD, padding: '16px 40px', transitionDelay: '0.3s' }}
          >
            Join the Program
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,146,14,0.3) 40%, rgba(201,146,14,0.3) 60%, transparent)' }} />
      </section>

      {/* ── A. WAYS TO PARTICIPATE ────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg, #0D0804 0%, #160C04 60%, #0D0804 100%)', padding: '100px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-4 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            Get Involved
          </p>
          <h2 className="reveal font-light text-center mb-16" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: CREAM, transitionDelay: '0.1s' }}>
            Ways to Participate
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {WAYS_TO_PARTICIPATE.map(({ title, body }, i) => (
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

      {/* ── B. HOW REWARDS WORK ───────────────────────────────────── */}
      <section style={{ background: '#100904', borderTop: '1px solid rgba(201,146,14,0.12)', borderBottom: '1px solid rgba(201,146,14,0.12)', padding: '100px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-16 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            How Rewards Work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map(({ num, title, body }, i) => (
              <div
                key={num}
                className="reveal"
                style={{ background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.15)', padding: '40px 32px', position: 'relative', overflow: 'hidden', transitionDelay: `${i * 0.12}s` }}
              >
                <p className="absolute top-4 right-6 select-none pointer-events-none" style={{ fontFamily: 'var(--font-display)', fontSize: '64px', color: 'rgba(201,146,14,0.07)', fontWeight: 300, lineHeight: 1 }}>
                  {num}
                </p>
                <div style={{ width: 24, height: 1, background: 'rgba(201,146,14,0.5)', marginBottom: 24 }} />
                <h3 className="font-light mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: CREAM, lineHeight: 1.25 }}>
                  {title}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '22px', color: 'rgba(245,223,160,0.5)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. REWARDS ────────────────────────────────────────────── */}
      <section style={{ padding: '100px 0' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-4 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            What You Can Earn
          </p>
          <h2 className="reveal font-light text-center mb-12" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: CREAM, transitionDelay: '0.1s' }}>
            Rewards
          </h2>
          <div className="reveal space-y-3 mb-10">
            {REWARDS.map((item) => (
              <div key={item} className="flex items-center gap-4 px-6 py-4" style={{ background: 'rgba(201,146,14,0.03)', border: '1px solid rgba(201,146,14,0.12)' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.75)' }}>{item}</p>
              </div>
            ))}
          </div>
          <p className="reveal text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '22px', color: 'rgba(245,223,160,0.4)', fontStyle: 'italic' }}>
            Rewards, commission rates and eligibility may vary by campaign and will be confirmed before participation.
          </p>
        </div>
      </section>

      {/* ── D. NO-FACE CONTENT CLARIFICATION ──────────────────────── */}
      <section style={{ padding: '0 24px 100px' }}>
        <div
          className="reveal max-w-3xl mx-auto p-8 md:p-10"
          style={{ background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.15)', borderLeft: '2px solid rgba(201,146,14,0.5)' }}
        >
          <p className="tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.38)' }}>
            A Note for Camera-Shy Creators
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.5vw, 24px)', color: CREAM, fontWeight: 300, lineHeight: 1.5, marginBottom: '12px' }}>
            No camera confidence required.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '24px', color: 'rgba(245,223,160,0.55)' }}>
            Participants may create faceless content using product shots, hands, voiceovers, text overlays, unboxings and fragrance storytelling.
          </p>
        </div>
      </section>

      {/* ── E. APPLICATION FORM ───────────────────────────────────── */}
      <section id="apply" style={{ padding: '0 24px 120px', scrollMarginTop: '80px' }}>
        <div className="max-w-xl mx-auto">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-4 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            Apply
          </p>
          <h2 className="reveal font-light text-center mb-12" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: CREAM, transitionDelay: '0.1s' }}>
            Join the Program
          </h2>

          <div className="reveal" style={{ border: '1px solid rgba(201,146,14,0.15)', padding: '40px', background: 'rgba(201,146,14,0.02)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(201,146,14,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <span style={{ color: GOLD, fontSize: '20px' }}>✓</span>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: CREAM, fontWeight: 300, marginBottom: '12px' }}>
                  Application received
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.55)', lineHeight: 1.7 }}>
                  Thank you for your interest in the Ethereal Charm program. We review applications by hand and will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="cr-name" style={labelStyle}>Full Name</label>
                  <input id="cr-name" type="text" required value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                </div>
                <div>
                  <label htmlFor="cr-email" style={labelStyle}>Email</label>
                  <input id="cr-email" type="email" required value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                </div>
                <div>
                  <label htmlFor="cr-location" style={labelStyle}>Location</label>
                  <input id="cr-location" type="text" required value={formData.location} onChange={e => setFormData(d => ({ ...d, location: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                </div>
                <div>
                  <label htmlFor="cr-social" style={labelStyle}>Instagram / TikTok / YouTube / Blog Link (optional)</label>
                  <input id="cr-social" type="text" value={formData.social} onChange={e => setFormData(d => ({ ...d, social: e.target.value }))} style={fieldStyle} {...focusHandlers()} />
                </div>
                <div>
                  <label htmlFor="cr-participation" style={labelStyle}>How would you like to participate?</label>
                  <select id="cr-participation" required value={formData.participation} onChange={e => setFormData(d => ({ ...d, participation: e.target.value }))} style={fieldStyle} {...focusHandlers()}>
                    <option value="" disabled>Select an option</option>
                    {PARTICIPATION_OPTIONS.map(opt => <option key={opt} value={opt} style={{ background: DARK }}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Do you already own Ethereal Charm?</label>
                  <div className="flex gap-6" style={{ paddingTop: '4px' }}>
                    {['Yes', 'No'].map(opt => (
                      <label key={opt} className="flex items-center gap-2" style={{ cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="owns"
                          value={opt}
                          checked={formData.owns === opt}
                          onChange={e => setFormData(d => ({ ...d, owns: e.target.value }))}
                          required
                          style={{ accentColor: GOLD }}
                        />
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.7)' }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="cr-message" style={labelStyle}>Brief Message</label>
                  <textarea id="cr-message" rows={4} required value={formData.message} onChange={e => setFormData(d => ({ ...d, message: e.target.value }))} style={{ ...fieldStyle, resize: 'none' }} {...focusHandlers()} />
                </div>
                <label className="flex items-start gap-3" style={{ cursor: 'pointer' }}>
                  <input type="checkbox" required checked={consent} onChange={e => setConsent(e.target.checked)} style={{ accentColor: GOLD, marginTop: '3px' }} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '20px', color: 'rgba(245,223,160,0.55)' }}>
                    I consent to Ethereal Charm contacting me about this application and the Creators &amp; Rewards program.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={sending || !consent}
                  style={{ width: '100%', padding: '16px', background: 'rgba(201,146,14,0.08)', border: '1px solid rgba(201,146,14,0.4)', color: GOLD, fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: sending || !consent ? 'not-allowed' : 'pointer', opacity: sending || !consent ? 0.5 : 1, transition: 'all 0.3s' }}
                  onMouseEnter={e => { if (!sending && consent) { e.currentTarget.style.background = 'rgba(201,146,14,0.18)'; e.currentTarget.style.borderColor = 'rgba(201,146,14,0.7)' } }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,146,14,0.08)'; e.currentTarget.style.borderColor = 'rgba(201,146,14,0.4)' }}
                >
                  {sending ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
