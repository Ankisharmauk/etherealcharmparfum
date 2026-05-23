'use client'

import Link from 'next/link'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const { count, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 border-b border-white/5 bg-[#0A0806]/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[#C9A84C] tracking-[0.25em] uppercase text-sm font-light">
            Ethereal Charm
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[['Home', '/'], ['Shop', '/shop'], ['About', '/about']].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-[#F5F0E8]/60 hover:text-[#C9A84C] tracking-widest uppercase text-xs transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#C9A84C] text-[#0A0806] text-[10px] font-bold flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          <button
            className="md:hidden text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0806] flex flex-col items-center justify-center gap-10 md:hidden">
          <button
            className="absolute top-5 right-6 text-[#F5F0E8]/60"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {[['Home', '/'], ['Shop', '/shop'], ['About', '/about']].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F5F0E8] tracking-[0.3em] uppercase text-2xl font-light hover:text-[#C9A84C] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
