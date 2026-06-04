import { products } from '@/data/products'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop — Ethereal Charm',
  description: 'Shop the Ethereal Charm parfum collection. Gender-neutral luxury fragrance made in London.',
}

export default function ShopPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-16 bg-[#C8900A] text-center">
        <p className="text-[#F5DFA0]/70 tracking-[0.3em] uppercase text-xs mb-4 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
          The Collection
        </p>
        <h1 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: 'var(--font-display)' }}>
          Shop
        </h1>
      </section>

      {/* Product grid */}
      <section className="py-20 bg-[#FBF4E3]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group border border-[#C9920E]/20 hover:border-[#C9920E]/50 bg-[#FFFCF5] hover:bg-[#FFF8EE] transition-all duration-500 overflow-hidden"
            >
              {/* Image panel */}
              <div className="relative h-72 flex items-center justify-center overflow-hidden bg-[#F5E8C8]">
                <div className="relative z-10 w-40 h-56">
                  <Image src={product.image} alt={product.name} fill className="object-contain" />
                </div>
                {product.badge && (
                  <span className="absolute top-4 right-4 z-20 text-[10px] tracking-widest uppercase text-[#C9920E] border border-[#C9920E]/40 px-3 py-1 bg-[#FBF4E3]/80" style={{ fontFamily: 'var(--font-sans)' }}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-8">
                <p className="text-[#2C1A06]/35 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                  {product.subtitle}
                </p>
                <h2 className="text-2xl font-light text-[#2C1A06] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {product.name}
                </h2>
                <p className="text-[#2C1A06]/50 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[#C9920E] text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                      ${product.price}
                    </span>
                    {product.comparePrice && (
                      <span className="text-[#2C1A06]/25 text-sm line-through">${product.comparePrice}</span>
                    )}
                  </div>
                  <span className="text-xs tracking-widest uppercase text-[#C9920E]/50 group-hover:text-[#C9920E] transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
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
