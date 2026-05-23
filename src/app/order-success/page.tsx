'use client'

import { useEffect } from 'react'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import GoldParticles from '@/components/GoldParticles'
import { CheckCircle } from 'lucide-react'

export default function OrderSuccessPage() {
  const { clear } = useCart()

  useEffect(() => {
    clear()
  }, [clear])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GoldParticles count={45} />
      <div className="relative z-10 max-w-md mx-auto px-6 text-center">
        <CheckCircle className="text-[#C9A84C] mx-auto mb-6" size={48} strokeWidth={1} />
        <p className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs mb-4 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
          Order Confirmed
        </p>
        <h1 className="text-4xl md:text-5xl font-light text-[#F5F0E8] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
          Thank You
        </h1>
        <p className="text-[#F5F0E8]/45 text-sm leading-relaxed mb-10" style={{ fontFamily: 'var(--font-sans)' }}>
          Your order has been placed and is being prepared with care. You&apos;ll receive a confirmation email shortly.
        </p>
        <Link
          href="/shop"
          className="inline-block px-10 py-4 bg-[#C9A84C] text-[#0A0806] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E8C876] transition-colors"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  )
}
