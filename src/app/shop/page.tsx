import { products } from '@/data/products'
import GoldParticles from '@/components/GoldParticles'
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
      <section className="relative pt-40 pb-20 overflow-hidden">
        <GoldParticles count={35} />
        <div className="relative z-10 text-center">
          <p className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs mb-4 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
            The Collection
          </p>
          <h1 className="text-5xl md:text-6xl font-light text-[#F5F0E8]" style={{ fontFamily: 'var(--font-display)' }}>
            Shop
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0806] to-transparent" />
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group border border-white/5 hover:border-[#C9A84C]/30 bg-[#111009] hover:bg-[#16140A] transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-72 flex items-center justify-center overflow-hidden bg-[#0D0B07]">
                <GoldParticles count={20} />
                <div className="relative z-10 w-40 h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                {product.badge && (
                  <span className="absolute top-4 right-4 z-20 text-[10px] tracking-widest uppercase text-[#C9A84C] border border-[#C9A84C]/40 px-3 py-1 bg-[#0A0806]/80" style={{ fontFamily: 'var(--font-sans)' }}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-8">
                <p className="text-[#F5F0E8]/30 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                  {product.subtitle}
                </p>
                <h2 className="text-2xl font-light text-[#F5F0E8] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {product.name}
                </h2>
                <p className="text-[#F5F0E8]/40 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[#C9A84C] text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                      ${product.price}
                    </span>
                    {product.comparePrice && (
                      <span className="text-[#F5F0E8]/25 text-sm line-through">${product.comparePrice}</span>
                    )}
                  </div>
                  <span className="text-xs tracking-widest uppercase text-[#C9A84C]/50 group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
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
