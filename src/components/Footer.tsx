'use client'

import Link from 'next/link'
import { useState } from 'react'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
    </svg>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <footer className="bg-[#6B3600] border-t border-[#C9920E]/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <p className="text-[#F5DFA0] tracking-[0.25em] uppercase text-sm font-light mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              Ethereal Charm
            </p>
            <p className="text-[#F5DFA0]/70 text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-sans)' }}>
              A luxurious, gender-neutral parfum. Crafted in London.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-[#F5DFA0]/60 hover:text-[#F5DFA0] transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="text-[#F5DFA0]/60 hover:text-[#F5DFA0] transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[#F5DFA0]/70 tracking-widest uppercase text-xs mb-6" style={{ fontFamily: 'var(--font-sans)' }}>Navigate</p>
            <ul className="space-y-3">
              {[['Home', '/'], ['Shop', '/shop'], ['About', '/about']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#F5DFA0]/65 text-sm hover:text-[#F5DFA0] transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#F5DFA0]/70 tracking-widest uppercase text-xs mb-6" style={{ fontFamily: 'var(--font-sans)' }}>Join the list</p>
            <p className="text-[#F5DFA0]/60 text-sm mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              Exclusive offers &amp; new fragrance launches.
            </p>
            {submitted ? (
              <p className="text-[#F5DFA0] text-sm tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>You&apos;re on the list.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-transparent border border-[#C9920E]/30 text-[#F5DFA0] text-sm px-4 py-2.5 placeholder:text-[#F5DFA0]/25 focus:outline-none focus:border-[#C9920E]/60"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
                <button type="submit"
                  className="px-5 py-2.5 bg-[#C9920E] text-white text-xs tracking-widest uppercase font-medium hover:bg-[#E8A820] transition-colors shrink-0"
                  style={{ fontFamily: 'var(--font-sans)' }}>
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-[#C9920E]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F5DFA0]/50 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
            © {new Date().getFullYear()} Ethereal Charm. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[['Terms & Conditions', '/terms'], ['Privacy Policy', '/privacy'], ['Shipping & Returns', '/shipping']].map(([label, href]) => (
              <Link key={href} href={href}
                className="text-[#F5DFA0]/50 text-xs hover:text-[#F5DFA0] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
