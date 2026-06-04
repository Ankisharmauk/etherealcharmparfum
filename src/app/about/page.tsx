'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const DARK = '#0D0804'
const GOLD = '#C9920E'
const CREAM = '#F5DFA0'

export default function AboutPage() {
  const [formData, setFormData] = useState({ first: '', last: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  // Scroll-reveal: attach observer once on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ background: DARK }}>

      {/* ── FOUNDER MESSAGE ───────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 130% 100% at 50% 0%, #2A1500 0%, #0D0804 65%)' }}
      >
        <div className="gold-shimmer-overlay" />

        {/* Corner brackets */}
        <div className="absolute top-28 left-8 md:left-16" style={{ width: 32, height: 32, borderTop: '1px solid rgba(201,146,14,0.35)', borderLeft: '1px solid rgba(201,146,14,0.35)' }} />
        <div className="absolute top-28 right-8 md:right-16" style={{ width: 32, height: 32, borderTop: '1px solid rgba(201,146,14,0.35)', borderRight: '1px solid rgba(201,146,14,0.35)' }} />
        <div className="absolute bottom-12 left-8 md:left-16" style={{ width: 32, height: 32, borderBottom: '1px solid rgba(201,146,14,0.35)', borderLeft: '1px solid rgba(201,146,14,0.35)' }} />
        <div className="absolute bottom-12 right-8 md:right-16" style={{ width: 32, height: 32, borderBottom: '1px solid rgba(201,146,14,0.35)', borderRight: '1px solid rgba(201,146,14,0.35)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 text-center pt-32 pb-28">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-10" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            A Message from the Founder
          </p>

          <div className="reveal flex items-center justify-center gap-4 mb-10" style={{ transitionDelay: '0.1s' }}>
            <div style={{ height: '1px', width: 48, background: 'rgba(201,146,14,0.45)' }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, opacity: 0.7 }} />
            <div style={{ height: '1px', width: 48, background: 'rgba(201,146,14,0.45)' }} />
          </div>

          <blockquote
            className="reveal font-light italic leading-relaxed mb-10"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 3.5vw, 36px)',
              color: 'rgba(245,223,160,0.92)',
              lineHeight: 1.55,
              transitionDelay: '0.2s',
            }}
          >
            &ldquo;Ethereal Charm was born from a Kiwi&apos;s love affair with London. The craft, the precision, the refusal to settle. Every bottle is made here, with intention.&rdquo;
          </blockquote>

          <div className="reveal flex items-center justify-center gap-4 mb-10" style={{ transitionDelay: '0.3s' }}>
            <div style={{ height: '1px', width: 48, background: 'rgba(201,146,14,0.45)' }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, opacity: 0.7 }} />
            <div style={{ height: '1px', width: 48, background: 'rgba(201,146,14,0.45)' }} />
          </div>

          <p className="reveal tracking-[0.25em] uppercase" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'rgba(245,223,160,0.5)', transitionDelay: '0.4s' }}>
            — Founder, Ethereal Charm
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,146,14,0.35) 40%, rgba(201,146,14,0.35) 60%, transparent)' }} />
      </section>

      {/* ── THE STORY ─────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg, #0D0804 0%, #160C04 60%, #0D0804 100%)', padding: '112px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div
            className="reveal-left relative order-2 md:order-1"
            style={{
              aspectRatio: '3/4',
              overflow: 'hidden',
              background: 'linear-gradient(160deg, #1C0E02 0%, #2A1500 55%, #130900 100%)',
            }}
          >
            {/* Gold glow */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 60%, rgba(201,146,14,0.2), transparent)' }} />
            {/* Bottle — lying/resting display */}
            <div className="relative z-10 h-full flex items-center justify-center py-10 px-12">
              <div className="relative w-full h-full">
                <Image
                  src="/images/bottle.png"
                  alt="Ethereal Charm Parfum — crafted in London"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {/* Gold border */}
            <div className="absolute inset-0 border border-[#C9920E]/22 pointer-events-none" />
          </div>

          <div className="order-1 md:order-2">
            <p className="reveal tracking-[0.3em] uppercase font-light mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
              Our Story
            </p>
            <h2
              className="reveal font-light leading-tight mb-10"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', color: CREAM, transitionDelay: '0.1s' }}
            >
              The Story of<br />Ethereal Charm
            </h2>
            <div className="space-y-6">
              {[
                'Ethereal Charm was born not in a laboratory, but from a feeling. The unmistakable warmth of walking through a London market on a cold morning, the silk of a well-worn leather book, the quiet confidence of a room that smells extraordinary.',
                'Our founder, a New Zealander who found her creative home in London, spent years searching for a fragrance that felt both timeless and alive. When she could not find it, she made it herself. The first bottle was made on a Mother\'s Day in London — a fitting beginning for something born out of love.',
                'Every bottle is handcrafted in small batches in London. No shortcuts. No mass production. The formula is a high-concentration parfum, more oil, less filler, so it lasts on the skin for hours without re-application.',
                'Ethereal Charm is designed to be worn by anyone who refuses to be ordinary. It does not ask what gender you are. It only asks how you want to feel.',
              ].map((para, i) => (
                <p
                  key={i}
                  className="reveal"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    lineHeight: '26px',
                    color: 'rgba(245,223,160,0.62)',
                    textAlign: 'justify',
                    transitionDelay: `${0.15 + i * 0.08}s`,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CRAFTED FOR PRESENCE ──────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0C00 0%, #0D0804 40%, #1F1000 100%)', padding: '120px 0' }}
      >
        <div className="gold-shimmer-overlay" />

        {/* Watermark */}
        <p
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none hidden md:block"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(80px, 12vw, 160px)', color: 'rgba(201,146,14,0.04)', whiteSpace: 'nowrap', fontWeight: 300, letterSpacing: '0.12em' }}
        >
          PRESENCE
        </p>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="reveal tracking-[0.35em] uppercase font-light mb-8" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
              Distinctive Scent
            </p>
            <h2
              className="reveal font-light leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: CREAM, transitionDelay: '0.1s' }}
            >
              Crafted<br />for Presence
            </h2>
            <p
              className="reveal leading-relaxed mb-10 max-w-sm"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(245,223,160,0.58)', textAlign: 'justify', transitionDelay: '0.2s' }}
            >
              A scent is the most intimate thing a person can wear. Ethereal Charm is built to become part of you, not to overpower a room, but to linger in it long after you have left.
            </p>
            <Link
              href="/shop"
              className="reveal inline-flex items-center gap-3 group"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, borderBottom: '1px solid rgba(201,146,14,0.4)', paddingBottom: '4px', transitionDelay: '0.3s' }}
            >
              Shop the Collection
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="reveal-right flex justify-center md:justify-end" style={{ transitionDelay: '0.15s' }}>
            <div className="relative" style={{ width: 280, height: 380 }}>
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 60%, rgba(201,146,14,0.15), transparent)', filter: 'blur(20px)' }}
              />
              <Image src="/images/bottle.png" alt="Ethereal Charm Parfum" fill className="object-contain relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE STAND FOR ─────────────────────────────────────── */}
      <section
        style={{ background: '#100904', borderTop: '1px solid rgba(201,146,14,0.12)', borderBottom: '1px solid rgba(201,146,14,0.12)', padding: '100px 0' }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-16 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            What We Stand For
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Crafted in London', body: 'Every drop is made in small batches in London using premium, carefully chosen ingredients. Handcrafted with care and never mass-produced.', delay: '0s' },
              { num: '02', title: 'Gender-Neutral', body: 'Fragrance has no gender. Ethereal Charm is designed for anyone who wants to wear something truly beautiful and completely their own.', delay: '0.12s' },
              { num: '03', title: 'Long-Lasting', body: 'Our high-concentration parfum formula ensures 8 to 12 hours of presence on the skin. One application. All day.', delay: '0.24s' },
            ].map(({ num, title, body, delay }) => (
              <div
                key={num}
                className="reveal"
                style={{ background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.15)', padding: '40px 32px', position: 'relative', overflow: 'hidden', transitionDelay: delay }}
              >
                <p className="absolute top-4 right-6 select-none pointer-events-none" style={{ fontFamily: 'var(--font-display)', fontSize: '64px', color: 'rgba(201,146,14,0.07)', fontWeight: 300, lineHeight: 1 }}>
                  {num}
                </p>
                <div style={{ width: 24, height: 1, background: 'rgba(201,146,14,0.5)', marginBottom: 24 }} />
                <h3 className="font-light mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: CREAM, lineHeight: 1.25 }}>
                  {title}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '22px', color: 'rgba(245,223,160,0.5)', textAlign: 'justify' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', background: DARK }}>
        <div className="max-w-xl mx-auto px-6 md:px-12">
          <p className="reveal tracking-[0.35em] uppercase font-light mb-4 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            Get in Touch
          </p>
          <h2 className="reveal font-light text-center mb-12" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: CREAM, transitionDelay: '0.1s' }}>
            Contact
          </h2>

          {sent ? (
            <div className="text-center py-12 reveal">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div style={{ height: '1px', width: 40, background: 'rgba(201,146,14,0.4)' }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD }} />
                <div style={{ height: '1px', width: 40, background: 'rgba(201,146,14,0.4)' }} />
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: CREAM, fontWeight: 300 }}>Message received.</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.5)', marginTop: 10 }}>We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal space-y-5" style={{ transitionDelay: '0.15s' }}>
              <div className="grid grid-cols-2 gap-5">
                {[{ label: 'First Name', key: 'first' }, { label: 'Last Name', key: 'last' }].map(({ label, key }) => (
                  <div key={key}>
                    <label className="block tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.4)' }}>{label}</label>
                    <input
                      type="text"
                      value={formData[key as keyof typeof formData]}
                      onChange={e => setFormData(d => ({ ...d, [key]: e.target.value }))}
                      style={{ width: '100%', background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.2)', color: CREAM, fontFamily: 'var(--font-sans)', fontSize: '13px', padding: '12px 16px', outline: 'none' }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.55)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.2)')}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.4)' }}>Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                  style={{ width: '100%', background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.2)', color: CREAM, fontFamily: 'var(--font-sans)', fontSize: '13px', padding: '12px 16px', outline: 'none' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.55)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.2)')}
                />
              </div>
              <div>
                <label className="block tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.4)' }}>Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                  style={{ width: '100%', background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.2)', color: CREAM, fontFamily: 'var(--font-sans)', fontSize: '13px', padding: '12px 16px', outline: 'none', resize: 'none' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.55)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.2)')}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 transition-all duration-300"
                style={{ background: 'rgba(201,146,14,0.08)', border: '1px solid rgba(201,146,14,0.4)', color: GOLD, fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,146,14,0.18)'; e.currentTarget.style.borderColor = 'rgba(201,146,14,0.7)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,146,14,0.08)'; e.currentTarget.style.borderColor = 'rgba(201,146,14,0.4)' }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0D0804 0%, #1A0C00 100%)', borderTop: '1px solid rgba(201,146,14,0.12)', padding: '80px 0', textAlign: 'center' }}
      >
        <div className="gold-shimmer-overlay" />
        <div className="relative z-10">
          <p className="reveal mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(245,223,160,0.45)', letterSpacing: '0.1em' }}>
            Ready to experience Ethereal Charm?
          </p>
          <Link
            href="/shop"
            className="reveal inline-block transition-all duration-300"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#0D0804', background: GOLD, padding: '16px 40px', transitionDelay: '0.1s' }}
          >
            Explore the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
