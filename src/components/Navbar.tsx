'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const { count, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 border-b border-[#C9920E]/25 bg-[#7A4800]/95 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Ethereal Charm"
            width={52}
            height={52}
            className="rounded-full shrink-0"
            style={{ objectFit: 'cover', boxShadow: '0 0 0 1.5px rgba(201,146,14,0.45)' }}
          />
          <span
            className="hidden sm:block tracking-[0.22em] uppercase text-[#F5DFA0] font-light"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.22em' }}
          >
            Ethereal Charm
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[['Home', '/'], ['Shop', '/shop'], ['Blog', '/blog'], ['About', '/about']].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-[#F5DFA0]/70 hover:text-[#F5DFA0] tracking-widest uppercase text-xs transition-colors duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative text-[#F5DFA0]/70 hover:text-[#F5DFA0] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#C9920E] text-white text-[10px] font-bold flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          <button
            className="md:hidden text-[#F5DFA0]/70 hover:text-[#F5DFA0] transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#7A4800] flex flex-col items-center justify-center gap-10 md:hidden">
          <button
            className="absolute top-5 right-6 text-[#F5DFA0]/60"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {[['Home', '/'], ['Shop', '/shop'], ['Blog', '/blog'], ['About', '/about']].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F5DFA0] tracking-[0.3em] uppercase text-2xl font-light hover:text-[#E8C876] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
