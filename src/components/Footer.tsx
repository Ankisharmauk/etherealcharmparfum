'use client'

import Link from 'next/link'
import { useState } from 'react'
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
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
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-[#0A0806] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <p className="text-[#C9A84C] tracking-[0.25em] uppercase text-sm font-light mb-4">
              Ethereal Charm
            </p>
            <p className="text-[#F5F0E8]/40 text-sm leading-relaxed max-w-xs">
              A luxurious, gender-neutral parfum. Crafted in London.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F0E8]/30 hover:text-[#C9A84C] transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F0E8]/30 hover:text-[#C9A84C] transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[#F5F0E8]/50 tracking-widest uppercase text-xs mb-6">Navigate</p>
            <ul className="space-y-3">
              {[['Home', '/'], ['Shop', '/shop'], ['About', '/about']].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#F5F0E8]/30 text-sm hover:text-[#C9A84C] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#F5F0E8]/50 tracking-widest uppercase text-xs mb-6">
              Join the list
            </p>
            <p className="text-[#F5F0E8]/30 text-sm mb-4">
              Exclusive offers & new fragrance launches.
            </p>
            {submitted ? (
              <p className="text-[#C9A84C] text-sm tracking-wider">You&apos;re on the list.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-transparent border border-white/10 text-[#F5F0E8] text-sm px-4 py-2.5 placeholder:text-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A84C]/50"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#C9A84C] text-[#0A0806] text-xs tracking-widest uppercase font-medium hover:bg-[#E8C876] transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F0E8]/20 text-xs">
            © {new Date().getFullYear()} Ethereal Charm. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[['Terms & Conditions', '/terms'], ['Privacy Policy', '/privacy'], ['Shipping & Returns', '/shipping']].map(([label, href]) => (
              <Link key={href} href={href} className="text-[#F5F0E8]/20 text-xs hover:text-[#C9A84C] transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
