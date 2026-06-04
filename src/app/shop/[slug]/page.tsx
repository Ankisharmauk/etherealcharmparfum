'use client'

import { getProductBySlug, products } from '@/data/products'
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
    <div className="bg-[#FBF4E3] min-h-screen">
      <section className="pt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-[#F5E8C8] flex items-center justify-center sticky top-24 border border-[#C9920E]/15">
            <div className="relative z-10 w-2/3 h-4/5">
              <Image src={product.image} alt={product.name} fill className="object-contain" priority />
            </div>
            {product.badge && (
              <span className="absolute top-4 right-4 z-20 text-[10px] tracking-widest uppercase text-[#C9920E] border border-[#C9920E]/40 px-3 py-1 bg-[#FBF4E3]/80" style={{ fontFamily: 'var(--font-sans)' }}>
                {product.badge}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="py-4">
            <Link href="/shop" className="text-[#2C1A06]/35 text-xs tracking-widest uppercase hover:text-[#C9920E] transition-colors mb-8 inline-block" style={{ fontFamily: 'var(--font-sans)' }}>
              ← Back to Shop
            </Link>

            <p className="text-[#C9920E] tracking-[0.3em] uppercase text-xs mb-3 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
              {product.subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-[#2C1A06] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-[#C9920E] text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                ${product.price}
              </span>
              {product.comparePrice && (
                <span className="text-[#2C1A06]/30 text-lg line-through">${product.comparePrice}</span>
              )}
              {product.comparePrice && (
                <span className="text-xs bg-[#C9920E]/10 text-[#C9920E] border border-[#C9920E]/25 px-2 py-0.5" style={{ fontFamily: 'var(--font-sans)' }}>
                  Save ${product.comparePrice - product.price}
                </span>
              )}
            </div>

            <p className="text-[#2C1A06]/55 leading-relaxed mb-10 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              {product.longDescription}
            </p>

            {/* Scent profile */}
            <div className="mb-10 border border-[#C9920E]/20 p-6 space-y-4 bg-[#FFFCF5]">
              <p className="text-[#2C1A06]/35 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-sans)' }}>Scent Profile</p>
              {product.notes.map(({ type, items }) => (
                <div key={type} className="flex gap-4">
                  <span className="text-[#C9920E]/70 text-xs uppercase tracking-widest w-16 shrink-0 pt-0.5 capitalize" style={{ fontFamily: 'var(--font-sans)' }}>
                    {type}
                  </span>
                  <span className="text-[#2C1A06]/65 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                    {items.join(' · ')}
                  </span>
                </div>
              ))}
            </div>

            {/* Details */}
            <ul className="space-y-2 mb-10">
              {product.details.map((detail) => (
                <li key={detail} className="flex items-center gap-3 text-[#2C1A06]/50 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  <span className="w-1 h-1 rounded-full bg-[#C9920E] shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
                added
                  ? 'bg-[#F5E8C8] text-[#C9920E] border border-[#C9920E]/40'
                  : 'bg-[#2C1A06] text-[#F5DFA0] hover:bg-[#3D2810]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {added ? <><Check size={14} /> Added to Bag</> : <><ShoppingBag size={14} /> Add to Bag</>}
            </button>
          </div>
        </div>
      </section>

      {/* Related */}
      {products.filter(p => p.id !== product.id).length > 0 && (
        <section className="py-20 border-t border-[#C9920E]/15 bg-[#F5E8C8]">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <p className="text-[#2C1A06]/35 text-xs tracking-widest uppercase mb-10 text-center" style={{ fontFamily: 'var(--font-sans)' }}>You may also like</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.filter(p => p.id !== product.id).map(p => (
                <Link
                  key={p.id}
                  href={`/shop/${p.slug}`}
                  className="group border border-[#C9920E]/20 hover:border-[#C9920E]/50 p-6 flex items-center gap-5 bg-[#FFFCF5] hover:bg-[#FFF8EE] transition-all duration-300"
                >
                  <div className="relative w-16 h-20 shrink-0">
                    <Image src={p.image} alt={p.name} fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-[#2C1A06] font-light mb-1" style={{ fontFamily: 'var(--font-display)' }}>{p.name}</p>
                    <p className="text-[#C9920E] text-sm">${p.price}</p>
                  </div>
                  <span className="ml-auto text-[#C9920E]/35 group-hover:text-[#C9920E] transition-colors">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
