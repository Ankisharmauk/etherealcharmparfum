'use client'

import { getProductBySlug, products } from '@/data/products'
import GoldParticles from '@/components/GoldParticles'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState, use } from 'react'
import { ShoppingBag, Check } from 'lucide-react'

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  if (!product) notFound()

  const handleAdd = () => {
    add(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <section className="pt-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-[#0D0B07] flex items-center justify-center sticky top-24">
            <GoldParticles count={30} />
            <div className="relative z-10 w-2/3 h-4/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            {product.badge && (
              <span className="absolute top-4 right-4 z-20 text-[10px] tracking-widest uppercase text-[#C9A84C] border border-[#C9A84C]/40 px-3 py-1 bg-[#0A0806]/80" style={{ fontFamily: 'var(--font-sans)' }}>
                {product.badge}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="py-4">
            <Link href="/shop" className="text-[#F5F0E8]/25 text-xs tracking-widest uppercase hover:text-[#C9A84C] transition-colors mb-8 inline-block" style={{ fontFamily: 'var(--font-sans)' }}>
              ← Back to Shop
            </Link>

            <p className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs mb-3 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
              {product.subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-[#F5F0E8] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-[#C9A84C] text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                ${product.price}
              </span>
              {product.comparePrice && (
                <span className="text-[#F5F0E8]/25 text-lg line-through">${product.comparePrice}</span>
              )}
              {product.comparePrice && (
                <span className="text-xs bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 px-2 py-0.5" style={{ fontFamily: 'var(--font-sans)' }}>
                  Save ${product.comparePrice - product.price}
                </span>
              )}
            </div>

            <p className="text-[#F5F0E8]/45 leading-relaxed mb-10 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              {product.longDescription}
            </p>

            {/* Scent Notes */}
            <div className="mb-10 border border-white/5 p-6 space-y-4">
              <p className="text-[#F5F0E8]/30 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-sans)' }}>Scent Profile</p>
              {product.notes.map(({ type, items }) => (
                <div key={type} className="flex gap-4">
                  <span className="text-[#C9A84C]/60 text-xs uppercase tracking-widest w-16 shrink-0 pt-0.5 capitalize" style={{ fontFamily: 'var(--font-sans)' }}>
                    {type}
                  </span>
                  <span className="text-[#F5F0E8]/60 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                    {items.join(' · ')}
                  </span>
                </div>
              ))}
            </div>

            {/* Details */}
            <ul className="space-y-2 mb-10">
              {product.details.map((detail) => (
                <li key={detail} className="flex items-center gap-3 text-[#F5F0E8]/45 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
                added
                  ? 'bg-[#1A1712] text-[#C9A84C] border border-[#C9A84C]/30'
                  : 'bg-[#C9A84C] text-[#0A0806] hover:bg-[#E8C876]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {added ? (
                <><Check size={14} /> Added to Bag</>
              ) : (
                <><ShoppingBag size={14} /> Add to Bag</>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Related */}
      {products.filter((p) => p.id !== product.id).length > 0 && (
        <section className="py-20 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <p className="text-[#F5F0E8]/30 text-xs tracking-widest uppercase mb-10 text-center" style={{ fontFamily: 'var(--font-sans)' }}>You may also like</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.filter((p) => p.id !== product.id).map((p) => (
                <Link
                  key={p.id}
                  href={`/shop/${p.slug}`}
                  className="group border border-white/5 hover:border-[#C9A84C]/30 p-6 flex items-center gap-5 bg-[#111009] hover:bg-[#16140A] transition-all duration-400"
                >
                  <div className="relative w-16 h-20 shrink-0">
                    <Image src={p.image} alt={p.name} fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-[#F5F0E8] font-light mb-1" style={{ fontFamily: 'var(--font-display)' }}>{p.name}</p>
                    <p className="text-[#C9A84C] text-sm">${p.price}</p>
                  </div>
                  <span className="ml-auto text-[#C9A84C]/30 group-hover:text-[#C9A84C] transition-colors">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
