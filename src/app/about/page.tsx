import GoldParticles from '@/components/GoldParticles'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Ethereal Charm',
  description: 'The story behind Ethereal Charm — a luxury gender-neutral parfum crafted in London.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero quote */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <GoldParticles count={40} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs mb-10 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
            A Message from the Founder
          </p>
          <blockquote
            className="text-2xl md:text-3xl font-light text-[#F5F0E8]/80 leading-relaxed italic mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            &ldquo;Indulge your loved ones with a luxurious scent, meticulously crafted in London using the finest local ingredients. Our exclusive fragrance is designed for all genders, ensuring everyone can enjoy its captivating aroma.&rdquo;
          </blockquote>
          <p className="text-[#C9A84C]/70 text-sm tracking-widest" style={{ fontFamily: 'var(--font-sans)' }}>
            — Founder, Ethereal Charm
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0806] to-transparent" />
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs mb-6 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-[#F5F0E8] mb-8 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              The Story of<br />Ethereal Charm
            </h1>
            <div className="space-y-5 text-[#F5F0E8]/45 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
              <p>
                Ethereal Charm is a luxurious fragrance that embodies the owner&apos;s deep passion for scents. Crafted with a perfect blend of scientific precision and creative artistry, this sophisticated scent leaves a memorable mark on the senses.
              </p>
              <p>
                Ethereal Charm promises a long-lasting and captivating experience which reflects the essence of its creator — a scent that transforms the everyday into something extraordinary. Discover the allure of this unique fragrance and let it elevate your everyday moments.
              </p>
              <p>
                Every bottle is handcrafted in London, where we source only the finest local and international ingredients to create a fragrance that is truly timeless.
              </p>
            </div>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1614963048453-bd159b9b0049?w=800&q=80"
              alt="Perfume crafting"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 border border-[#C9A84C]/10" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs mb-12 text-center font-light" style={{ fontFamily: 'var(--font-sans)' }}>
            What We Stand For
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Crafted in London', body: 'Every drop is made in London using locally sourced, premium-quality ingredients with care and intention.' },
              { title: 'Gender-Neutral', body: 'Fragrance has no gender. Ethereal Charm is designed for anyone who wants to wear something truly beautiful.' },
              { title: 'Long-Lasting', body: 'Our high-concentration parfum formula ensures 8 to 12 hours of presence on the skin — no reapplication needed.' },
            ].map(({ title, body }) => (
              <div key={title} className="border border-white/5 p-8 bg-[#111009]">
                <h3 className="text-[#F5F0E8] text-xl font-light mb-4" style={{ fontFamily: 'var(--font-display)' }}>{title}</h3>
                <p className="text-[#F5F0E8]/40 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <p className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs mb-6 text-center font-light" style={{ fontFamily: 'var(--font-sans)' }}>
            Get in Touch
          </p>
          <h2 className="text-4xl font-light text-[#F5F0E8] mb-10 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Contact
          </h2>
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-[#F5F0E8]/30 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-sans)' }}>First Name</label>
                <input type="text" className="w-full bg-transparent border border-white/10 text-[#F5F0E8] px-4 py-3 text-sm placeholder:text-[#F5F0E8]/15 focus:outline-none focus:border-[#C9A84C]/50" />
              </div>
              <div>
                <label className="block text-[#F5F0E8]/30 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-sans)' }}>Last Name</label>
                <input type="text" className="w-full bg-transparent border border-white/10 text-[#F5F0E8] px-4 py-3 text-sm placeholder:text-[#F5F0E8]/15 focus:outline-none focus:border-[#C9A84C]/50" />
              </div>
            </div>
            <div>
              <label className="block text-[#F5F0E8]/30 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-sans)' }}>Email</label>
              <input type="email" required className="w-full bg-transparent border border-white/10 text-[#F5F0E8] px-4 py-3 text-sm placeholder:text-[#F5F0E8]/15 focus:outline-none focus:border-[#C9A84C]/50" />
            </div>
            <div>
              <label className="block text-[#F5F0E8]/30 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-sans)' }}>Message</label>
              <textarea rows={5} className="w-full bg-transparent border border-white/10 text-[#F5F0E8] px-4 py-3 text-sm placeholder:text-[#F5F0E8]/15 focus:outline-none focus:border-[#C9A84C]/50 resize-none" />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#C9A84C] text-[#0A0806] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E8C876] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5 text-center">
        <Link
          href="/shop"
          className="inline-block px-10 py-5 bg-[#C9A84C] text-[#0A0806] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E8C876] transition-colors"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Explore the Collection
        </Link>
      </section>
    </>
  )
}
