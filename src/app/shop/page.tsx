import { products } from '@/data/products'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

const BASE_URL = 'https://www.theetherealcharm.com'

export const metadata: Metadata = {
  title: 'Shop — Luxury Parfum Collection',
  description: 'Shop the Ethereal Charm parfum collection. Choose from the 10ml Mini or the 25ml signature bottle. Gender-neutral, long-lasting, crafted in London.',
  alternates: { canonical: `${BASE_URL}/shop` },
  openGraph: {
    title: 'Shop Ethereal Charm — Luxury Parfum Collection',
    description: 'Choose from the 10ml Mini or the 25ml signature bottle. Gender-neutral, long-lasting, crafted in London.',
    url: `${BASE_URL}/shop`,
    type: 'website',
    images: [{ url: '/images/bottle.png', width: 1200, height: 630, alt: 'Ethereal Charm Parfum Collection' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop Ethereal Charm — Luxury Parfum Collection',
    description: 'Gender-neutral, long-lasting parfum crafted in London. 10ml and 25ml available.',
    images: ['/images/bottle.png'],
  },
}

const GOLD = '#C9920E'
const CREAM = '#F5DFA0'

export default function ShopPage() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          background: 'radial-gradient(ellipse 130% 80% at 50% 0%, #2A1500 0%, #0D0804 70%)',
          paddingTop: '144px',
          paddingBottom: '72px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(201,146,14,0.12)',
        }}
      >
        <p className="tracking-[0.3em] uppercase font-light mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
          The Collection
        </p>
        <h1 className="font-light" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(42px, 6vw, 72px)', color: CREAM }}>
          Shop
        </h1>
      </section>

      {/* Product grid */}
      <section style={{ background: '#0D0804', padding: '80px 0 120px' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group overflow-hidden transition-all duration-500"
              style={{
                background: 'rgba(201,146,14,0.04)',
                border: '1px solid rgba(201,146,14,0.16)',
              }}
            >
              {/* Image panel */}
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  height: '288px',
                  background: 'linear-gradient(160deg, #1C0E02 0%, #2A1500 55%, #130900 100%)',
                }}
              >
                {/* Gold glow */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,146,14,0.2), transparent)' }}
                />
                <div className="relative z-10 w-40 h-56">
                  <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-2xl" />
                </div>
                {product.badge && (
                  <span
                    className="absolute top-4 right-4 z-20 text-[10px] tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-sans)', color: GOLD, border: '1px solid rgba(201,146,14,0.4)', padding: '4px 12px', background: 'rgba(13,8,4,0.7)' }}
                  >
                    {product.badge}
                  </span>
                )}
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'rgba(201,146,14,0.06)' }}
                />
              </div>

              {/* Info */}
              <div className="p-8" style={{ borderTop: '1px solid rgba(201,146,14,0.1)' }}>
                <p className="tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'rgba(245,223,160,0.38)' }}>
                  {product.subtitle}
                </p>
                <h2 className="font-light mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: CREAM }}>
                  {product.name}
                </h2>
                <p className="leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.5)', textAlign: 'justify' }}>
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-3">
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: GOLD }}>
                      ${product.price}
                    </span>
                    {product.comparePrice && (
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(245,223,160,0.25)', textDecoration: 'line-through' }}>
                        ${product.comparePrice}
                      </span>
                    )}
                  </div>
                  <span
                    className="tracking-widest uppercase group-hover:translate-x-1 transition-transform duration-300"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}
                  >
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
