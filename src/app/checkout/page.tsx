'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

export default function CheckoutPage() {
  const { items, total } = useCart()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (items.length === 0) router.push('/shop')
  }, [items.length, router])

  const handleCheckout = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({
            priceId: i.product.stripePriceId,
            quantity: i.quantity,
          })),
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Unable to start checkout. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="pt-28 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-5 gap-16">
        {/* Order summary */}
        <div className="md:col-span-3">
          <p className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs mb-8 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
            Your Order
          </p>
          <div className="space-y-5">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center gap-5 border border-white/5 p-4 bg-[#111009]">
                <div className="relative w-16 h-20 shrink-0 bg-[#0D0B07]">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-2" />
                </div>
                <div className="flex-1">
                  <p className="text-[#F5F0E8] text-sm font-light" style={{ fontFamily: 'var(--font-display)' }}>{product.name}</p>
                  <p className="text-[#F5F0E8]/30 text-xs mt-1" style={{ fontFamily: 'var(--font-sans)' }}>{product.subtitle}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#F5F0E8]/40 text-xs mb-1" style={{ fontFamily: 'var(--font-sans)' }}>Qty: {quantity}</p>
                  <p className="text-[#C9A84C] text-sm" style={{ fontFamily: 'var(--font-display)' }}>${(product.price * quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary + pay */}
        <div className="md:col-span-2">
          <div className="border border-white/5 bg-[#111009] p-8 sticky top-28">
            <p className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs mb-6 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
              Summary
            </p>
            <div className="space-y-3 mb-6 text-sm">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between text-[#F5F0E8]/40">
                  <span style={{ fontFamily: 'var(--font-sans)' }}>{product.name} × {quantity}</span>
                  <span style={{ fontFamily: 'var(--font-display)' }}>${(product.price * quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/5 pt-4 flex justify-between items-baseline mb-8">
              <span className="text-[#F5F0E8]/50 text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-sans)' }}>Total</span>
              <span className="text-[#F5F0E8] text-xl" style={{ fontFamily: 'var(--font-display)' }}>${total.toFixed(2)}</span>
            </div>
            <p className="text-[#F5F0E8]/25 text-xs mb-6 text-center" style={{ fontFamily: 'var(--font-sans)' }}>Shipping & taxes calculated by Stripe</p>
            {error && <p className="text-red-400 text-xs mb-4 text-center">{error}</p>}
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full py-4 bg-[#C9A84C] text-[#0A0806] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E8C876] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {loading ? <><Loader2 size={14} className="animate-spin" /> Processing…</> : 'Pay with Stripe →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
