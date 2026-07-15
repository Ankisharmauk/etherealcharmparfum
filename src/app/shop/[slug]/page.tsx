'use client'

import { getProductBySlug, products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState, use } from 'react'
import { ShoppingBag, Check } from 'lucide-react'

const GOLD = '#C9920E'
const CREAM = '#F5DFA0'

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
    <div style={{ background: '#0D0804', minHeight: '100vh' }}>
      <section className="pt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Image panel */}
          <div
            className="relative aspect-square flex items-center justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, #1C0E02 0%, #2A1500 55%, #130900 100%)',
              border: '1px solid rgba(201,146,14,0.18)',
            }}
          >
            {/* Gold radial glow */}
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 62%, rgba(201,146,14,0.22), transparent)' }}
            />
            <div className="relative z-10 w-2/3 h-4/5">
              <Image src={product.image} alt={product.name} fill className="object-contain" priority />
            </div>
            {product.badge && (
              <span
                className="absolute top-4 right-4 z-20 text-[10px] tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-sans)', color: GOLD, border: '1px solid rgba(201,146,14,0.4)', padding: '4px 12px', background: 'rgba(13,8,4,0.7)' }}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="py-4">
            <Link
              href="/shop"
              className="tracking-widest uppercase mb-8 inline-block transition-colors hover:opacity-70"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'rgba(245,223,160,0.4)', letterSpacing: '0.15em' }}
            >
              ← Back to Shop
            </Link>

            <p className="tracking-[0.3em] uppercase mb-3 font-light" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
              {product.subtitle}
            </p>
            <h1 className="font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', color: CREAM }}>
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-8">
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: GOLD }}>
                ${product.price}
              </span>
              {product.comparePrice && (
                <>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', color: 'rgba(245,223,160,0.28)', textDecoration: 'line-through' }}>
                    ${product.comparePrice}
                  </span>
                  <span
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD, border: '1px solid rgba(201,146,14,0.3)', padding: '3px 8px', letterSpacing: '0.1em' }}
                  >
                    Save ${product.comparePrice - product.price}
                  </span>
                </>
              )}
            </div>

            <p className="leading-relaxed mb-10" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(245,223,160,0.58)', textAlign: 'justify' }}>
              {product.longDescription}
            </p>

            {/* Scent hint */}
            <div
              className="mb-10 p-6"
              style={{ background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.18)', borderLeft: '2px solid rgba(201,146,14,0.5)' }}
            >
              <p className="tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.38)' }}>
                The Scent
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: CREAM, fontWeight: 300, lineHeight: 1.7, fontStyle: 'italic' }}>
                &ldquo;Fresh and bright at first touch — a whisper of citrus that opens the senses. Beneath it, the warmth of oud: rare, distinctive, unmistakable. The rest is ours to keep.&rdquo;
              </p>
            </div>

            {/* Details */}
            <ul className="space-y-2 mb-10">
              {product.details.map((detail) => (
                <li key={detail} className="flex items-center gap-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.52)' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD, flexShrink: 0, display: 'inline-block' }} />
                  {detail}
                </li>
              ))}
            </ul>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="w-full py-4 flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300"
              style={{
                fontFamily: 'var(--font-sans)',
                background: added ? 'rgba(201,146,14,0.1)' : GOLD,
                color: added ? GOLD : '#0D0804',
                border: added ? `1px solid rgba(201,146,14,0.4)` : 'none',
              }}
            >
              {added ? <><Check size={14} /> Added to Bag</> : <><ShoppingBag size={14} /> Add to Bag</>}
            </button>
          </div>
        </div>
      </section>

      {/* Related */}
      {products.filter(p => p.id !== product.id).length > 0 && (
        <section
          style={{ borderTop: '1px solid rgba(201,146,14,0.1)', background: '#100904', padding: '80px 0 100px' }}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <p className="tracking-widest uppercase mb-10 text-center" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'rgba(245,223,160,0.38)' }}>
              You may also like
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.filter(p => p.id !== product.id).map(p => (
                <Link
                  key={p.id}
                  href={`/shop/${p.slug}`}
                  className="group p-6 flex items-center gap-5 transition-all duration-300"
                  style={{
                    background: 'rgba(201,146,14,0.04)',
                    border: '1px solid rgba(201,146,14,0.16)',
                  }}
                >
                  <div
                    className="relative shrink-0 flex items-center justify-center"
                    style={{ width: 64, height: 80, background: 'rgba(42,21,0,0.6)' }}
                  >
                    <div className="relative w-full h-full">
                      <Image src={p.image} alt={p.name} fill className="object-contain p-2" />
                    </div>
                  </div>
                  <div>
                    <p className="font-light mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: CREAM }}>{p.name}</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '15px', color: GOLD }}>${p.price}</p>
                  </div>
                  <span
                    className="ml-auto group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: 'rgba(201,146,14,0.4)', fontSize: '18px' }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
