'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const DARK = '#0D0804'
const GOLD = '#C9920E'
const CREAM = '#F5DFA0'

export default function AboutPage() {
  const [formData, setFormData] = useState({ first: '', last: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ background: DARK }}>

      {/* ── FOUNDER MESSAGE ───────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 120% 100% at 50% 0%, #2A1500 0%, #0D0804 65%)',
        }}
      >
        {/* Faint gold horizontal rule */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,146,14,0.4) 40%, rgba(201,146,14,0.4) 60%, transparent)' }}
        />

        {/* Decorative corner marks */}
        <div className="absolute top-32 left-8 md:left-16" style={{ width: 32, height: 32, borderTop: '1px solid rgba(201,146,14,0.35)', borderLeft: '1px solid rgba(201,146,14,0.35)' }} />
        <div className="absolute top-32 right-8 md:right-16" style={{ width: 32, height: 32, borderTop: '1px solid rgba(201,146,14,0.35)', borderRight: '1px solid rgba(201,146,14,0.35)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 text-center pt-32 pb-28">
          <p
            className="tracking-[0.35em] uppercase font-light mb-10"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}
          >
            A Message from the Founder
          </p>

          {/* Ornamental line */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div style={{ height: '1px', width: 48, background: `rgba(201,146,14,0.45)` }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, opacity: 0.7 }} />
            <div style={{ height: '1px', width: 48, background: `rgba(201,146,14,0.45)` }} />
          </div>

          <blockquote
            className="font-light italic leading-relaxed mb-10"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 3.5vw, 36px)',
              color: `rgba(245,223,160,0.92)`,
              lineHeight: 1.55,
            }}
          >
            &ldquo;Ethereal Charm was born from a Kiwi&apos;s love affair with London — its craft, its precision, its refusal to settle. Every bottle is made here, with intention.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-4 mb-10">
            <div style={{ height: '1px', width: 48, background: `rgba(201,146,14,0.45)` }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, opacity: 0.7 }} />
            <div style={{ height: '1px', width: 48, background: `rgba(201,146,14,0.45)` }} />
          </div>

          <p
            className="tracking-[0.25em] uppercase"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: `rgba(245,223,160,0.5)` }}
          >
            — Founder, Ethereal Charm
          </p>
        </div>
      </section>

      {/* ── THE STORY ─────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(180deg, #0D0804 0%, #160C04 60%, #0D0804 100%)',
          padding: '112px 0',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative order-2 md:order-1" style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80"
              alt="Perfume crafting in London"
              fill
              className="object-cover"
            />
            {/* Gold border overlay */}
            <div
              className="absolute inset-0"
              style={{ border: '1px solid rgba(201,146,14,0.25)', pointerEvents: 'none' }}
            />
            {/* Bottom gradient fade */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ height: '40%', background: 'linear-gradient(to top, rgba(13,8,4,0.6), transparent)' }}
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p
              className="tracking-[0.3em] uppercase font-light mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}
            >
              Our Story
            </p>
            <h2
              className="font-light leading-tight mb-10"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 52px)',
                color: CREAM,
              }}
            >
              The Story of<br />Ethereal Charm
            </h2>
            <div
              className="space-y-6"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '26px', color: `rgba(245,223,160,0.62)` }}
            >
              <p>
                Ethereal Charm was born not in a laboratory, but from a feeling — the unmistakable warmth of walking through a London market on a cold morning, the silk of a well-worn leather book, the quiet confidence of a room that smells extraordinary.
              </p>
              <p>
                Our founder, a New Zealander who found her creative home in London, spent years searching for a fragrance that felt both timeless and alive. When she couldn&apos;t find it, she made it herself — sourcing botanicals from across the British Isles and blending them with old-world technique.
              </p>
              <p>
                Every bottle is handcrafted in small batches in London. No shortcuts. No mass production. The formula is a high-concentration parfum — more oil, less filler — so it lasts on the skin for hours without re-application.
              </p>
              <p>
                Ethereal Charm is designed to be worn by anyone who refuses to be ordinary. It doesn&apos;t ask what gender you are. It only asks how you want to feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CRAFTED FOR PRESENCE (mid-hero) ───────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1A0C00 0%, #0D0804 40%, #1F1000 100%)',
          padding: '120px 0',
        }}
      >
        {/* Large decorative word */}
        <p
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none hidden md:block"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(80px, 12vw, 160px)',
            color: 'rgba(201,146,14,0.04)',
            whiteSpace: 'nowrap',
            fontWeight: 300,
            letterSpacing: '0.12em',
          }}
        >
          PRESENCE
        </p>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="tracking-[0.35em] uppercase font-light mb-8"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}
            >
              Distinctive Scent
            </p>
            <h2
              className="font-light leading-[1.1] mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                color: CREAM,
              }}
            >
              Crafted<br />for Presence
            </h2>
            <p
              className="leading-relaxed mb-10 max-w-sm"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: `rgba(245,223,160,0.58)` }}
            >
              A scent is the most intimate thing a person can wear. Ethereal Charm is built to become part of you — not to overpower a room, but to linger in it long after you&apos;ve left.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 group"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: GOLD,
                borderBottom: '1px solid rgba(201,146,14,0.4)',
                paddingBottom: '4px',
              }}
            >
              Shop the Collection
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <div
              className="relative"
              style={{ width: 280, height: 380 }}
            >
              {/* Glow behind bottle */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse 60% 70% at 50% 60%, rgba(201,146,14,0.15), transparent)',
                  filter: 'blur(20px)',
                }}
              />
              <Image
                src="/images/bottle.png"
                alt="Ethereal Charm Parfum"
                fill
                className="object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE STAND FOR ─────────────────────────────────────── */}
      <section
        style={{
          background: '#100904',
          borderTop: '1px solid rgba(201,146,14,0.12)',
          borderBottom: '1px solid rgba(201,146,14,0.12)',
          padding: '100px 0',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p
            className="tracking-[0.35em] uppercase font-light mb-16 text-center"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}
          >
            What We Stand For
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Crafted in London',
                body: 'Every drop is made in small batches in London using locally sourced, premium botanicals. Handcrafted with care, never mass-produced.',
              },
              {
                num: '02',
                title: 'Gender-Neutral',
                body: 'Fragrance has no gender. Ethereal Charm is designed for anyone who wants to wear something truly beautiful and completely their own.',
              },
              {
                num: '03',
                title: 'Long-Lasting',
                body: 'Our high-concentration parfum formula ensures 8 to 12 hours of presence on the skin. One application. All day.',
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                style={{
                  background: 'rgba(201,146,14,0.04)',
                  border: '1px solid rgba(201,146,14,0.15)',
                  padding: '40px 32px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Ghost number */}
                <p
                  className="absolute top-4 right-6 select-none pointer-events-none"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '64px',
                    color: 'rgba(201,146,14,0.07)',
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  {num}
                </p>
                <div
                  style={{ width: 24, height: 1, background: `rgba(201,146,14,0.5)`, marginBottom: 24 }}
                />
                <h3
                  className="font-light mb-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    color: CREAM,
                    lineHeight: 1.25,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    lineHeight: '22px',
                    color: `rgba(245,223,160,0.5)`,
                  }}
                >
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
          <p
            className="tracking-[0.35em] uppercase font-light mb-4 text-center"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}
          >
            Get in Touch
          </p>
          <h2
            className="font-light text-center mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: CREAM,
            }}
          >
            Contact
          </h2>

          {sent ? (
            <div className="text-center py-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div style={{ height: '1px', width: 40, background: `rgba(201,146,14,0.4)` }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD }} />
                <div style={{ height: '1px', width: 40, background: `rgba(201,146,14,0.4)` }} />
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: CREAM, fontWeight: 300 }}>
                Message received.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: `rgba(245,223,160,0.5)`, marginTop: 10 }}>
                We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: 'First Name', key: 'first', type: 'text' },
                  { label: 'Last Name', key: 'last', type: 'text' },
                ].map(({ label, key, type }) => (
                  <div key={key}>
                    <label
                      className="block tracking-widest uppercase mb-2"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: `rgba(245,223,160,0.4)` }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      value={formData[key as keyof typeof formData]}
                      onChange={e => setFormData(d => ({ ...d, [key]: e.target.value }))}
                      style={{
                        width: '100%',
                        background: 'rgba(201,146,14,0.04)',
                        border: '1px solid rgba(201,146,14,0.2)',
                        color: CREAM,
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13px',
                        padding: '12px 16px',
                        outline: 'none',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.55)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.2)')}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label
                  className="block tracking-widest uppercase mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: `rgba(245,223,160,0.4)` }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                  style={{
                    width: '100%',
                    background: 'rgba(201,146,14,0.04)',
                    border: '1px solid rgba(201,146,14,0.2)',
                    color: CREAM,
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    padding: '12px 16px',
                    outline: 'none',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.55)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.2)')}
                />
              </div>
              <div>
                <label
                  className="block tracking-widest uppercase mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: `rgba(245,223,160,0.4)` }}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                  style={{
                    width: '100%',
                    background: 'rgba(201,146,14,0.04)',
                    border: '1px solid rgba(201,146,14,0.2)',
                    color: CREAM,
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    padding: '12px 16px',
                    outline: 'none',
                    resize: 'none',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.55)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,146,14,0.2)')}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 transition-all duration-300"
                style={{
                  background: 'rgba(201,146,14,0.08)',
                  border: '1px solid rgba(201,146,14,0.4)',
                  color: GOLD,
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(201,146,14,0.18)'
                  e.currentTarget.style.borderColor = 'rgba(201,146,14,0.7)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(201,146,14,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(201,146,14,0.4)'
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(180deg, #0D0804 0%, #1A0C00 100%)',
          borderTop: '1px solid rgba(201,146,14,0.12)',
          padding: '80px 0',
          textAlign: 'center',
        }}
      >
        <p
          className="mb-4"
          style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: `rgba(245,223,160,0.45)`, letterSpacing: '0.1em' }}
        >
          Ready to experience Ethereal Charm?
        </p>
        <Link
          href="/shop"
          className="inline-block transition-all duration-300"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#0D0804',
            background: GOLD,
            padding: '16px 40px',
          }}
          onMouseEnter={undefined}
        >
          Explore the Collection
        </Link>
      </section>
    </div>
  )
}
