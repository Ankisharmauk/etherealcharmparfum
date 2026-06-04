import GoldParticles from '@/components/GoldParticles'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      {/* Hero — actual bokeh video background */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#C08810]">

        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/videos/bokeh.mp4" type="video/mp4" />
        </video>

        {/* Subtle overlay to keep text readable */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(20, 10, 2, 0.18)', zIndex: 1 }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-24 pb-16">
          <div>
            <p className="text-[#5C3D0E]/80 tracking-[0.3em] uppercase text-xs mb-6 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
              Signature Parfum
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2C1A06] leading-[1.05] mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Discover<br />
              The Essence of<br />
              Ethereal Charm
            </h1>
            <p className="text-[#3D2810]/70 text-base leading-relaxed mb-10 max-w-sm" style={{ fontFamily: 'var(--font-sans)', textAlign: 'justify' }}>
              Ethereal Charm is a refined gender-neutral parfum crafted to leave a lasting impression through depth, warmth, and understated elegance. Blending modern sophistication with timeless character, the fragrance is designed for those drawn to quiet luxury and distinctive presence.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/shop"
                className="inline-block px-8 py-4 bg-[#2C1A06] text-[#F5F0E8] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#3D2810] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="text-[#3D2810]/60 text-xs tracking-[0.2em] uppercase hover:text-[#3D2810] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Our Story →
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-72 h-96 md:w-80 md:h-[440px]">
              <Image
                src="/images/bottle.png"
                alt="Ethereal Charm Parfum"
                fill
                className="object-contain relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Captivating Fragrance */}
      <section className="py-28 bg-[#FBF4E3]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
              alt="Luxury perfume with rose petals"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-[#C9920E]/20" />
          </div>
          <div>
            <p className="text-[#C9920E] tracking-[0.3em] uppercase text-xs mb-6 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
              Irresistible Aromas
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#2C1A06] leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Captivating<br />Fragrance
            </h2>
            <p className="text-[#2C1A06]/55 leading-relaxed mb-10 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              Immerse yourself in a symphony of alluring notes, masterfully crafted to elevate the senses and leave a lasting impression. Each spray is an invitation to a world of refined luxury.
            </p>
            <Link
              href="/shop"
              className="inline-block border border-[#C9920E] text-[#C9920E] text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#C9920E] hover:text-white transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Discover the Fragrance
            </Link>
          </div>
        </div>
      </section>

      {/* Scent Notes */}
      <section className="py-20 bg-[#F5E8C8] border-y border-[#C9920E]/15">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-[#C9920E] tracking-[0.3em] uppercase text-xs mb-12 text-center font-light" style={{ fontFamily: 'var(--font-sans)' }}>
            The Notes
          </p>
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { label: 'Top Notes', items: ['Bergamot', 'Pink Pepper', 'Cardamom'] },
              { label: 'Heart Notes', items: ['Rose Absolute', 'Jasmine Sambac', 'Iris'] },
              { label: 'Base Notes', items: ['Sandalwood', 'Amber', 'Musk'] },
            ].map(({ label, items }) => (
              <div key={label}>
                <p className="text-[#2C1A06]/40 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-sans)' }}>{label}</p>
                <div className="space-y-2">
                  {items.map((item) => (
                    <p key={item} className="text-[#2C1A06]/75 text-sm" style={{ fontFamily: 'var(--font-display)' }}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="relative py-32 overflow-hidden bg-[#C8900A]">
        <GoldParticles count={30} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-[#F5DFA0]/80 tracking-[0.3em] uppercase text-xs mb-6 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
            Our Commitment
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Crafting Unforgettable<br />Experiences
          </h2>
          <p className="text-white/60 leading-relaxed max-w-2xl mx-auto text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
            At Ethereal Charm, we prioritise the art of fragrance-making to deliver exceptional experiences. Our commitment lies in creating timeless and evocative scents that resonate with individuality and sophistication.
          </p>
        </div>
      </section>

      {/* Blog — Stories & Insights */}
      <section className="py-24 bg-[#0D0804]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#C9920E] tracking-[0.3em] uppercase text-xs mb-3 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
                From the Edit
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-[#F5DFA0]" style={{ fontFamily: 'var(--font-display)' }}>
                Stories &amp; Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-[#C9920E] text-xs tracking-[0.15em] uppercase hover:gap-3 transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              View All <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: '/blog/the-art-of-wearing-perfume',
                category: 'Guide',
                title: 'The Art of Wearing Perfume',
                excerpt: 'Where you apply your fragrance changes everything. A guide to making your scent last from morning to midnight.',
                date: 'June 2026',
                image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80',
              },
              {
                href: '/blog/why-gender-neutral-fragrance-is-the-future',
                category: 'Perspectives',
                title: 'Why Gender-Neutral Fragrance Is the Future',
                excerpt: 'The best scents have never belonged to a gender. Here is why modern perfumery is finally catching up.',
                date: 'May 2026',
                image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80',
              },
              {
                href: '/blog/crafted-in-london',
                category: 'Craft',
                title: 'Crafted in London: What It Really Means',
                excerpt: 'Not just a label. A commitment to sourcing, skill, and small-batch quality that mass production cannot replicate.',
                date: 'April 2026',
                image: 'https://images.unsplash.com/photo-1614963048453-bd159b9b0049?w=600&q=80',
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex flex-col overflow-hidden"
                style={{
                  background: 'rgba(201,146,14,0.04)',
                  border: '1px solid rgba(201,146,14,0.14)',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'rgba(13,8,4,0.25)' }} />
                </div>
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className="tracking-widest uppercase"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: '#C9920E' }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'rgba(245,223,160,0.35)' }}>
                      {post.date}
                    </span>
                  </div>
                  <h3
                    className="font-light leading-snug"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: '#F5DFA0' }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="flex-1"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '20px', color: 'rgba(245,223,160,0.5)', textAlign: 'justify' }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9920E' }}
                  >
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/blog"
              className="inline-block text-[#C9920E] text-xs tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              View All Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-24 bg-[#FBF4E3]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-[#C9920E] tracking-[0.3em] uppercase text-xs mb-10 text-center font-light" style={{ fontFamily: 'var(--font-sans)' }}>The Collection</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'The Mini Ethereal Charm', size: '10 ml', price: '$25', href: '/shop/mini-ethereal-charm', badge: 'Perfect gift' },
              { name: 'The Ethereal Charm', size: '25 ml', price: '$66', comparePrice: '$110', href: '/shop/ethereal-charm-25ml', badge: 'Limited offer' },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group relative border border-[#C9920E]/20 hover:border-[#C9920E]/60 p-8 flex items-center gap-6 transition-all duration-500 bg-[#FFFCF5] hover:bg-[#FFF8EE]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9920E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-20 h-28 shrink-0">
                  <Image src="/images/bottle.png" alt={p.name} fill className="object-contain" />
                </div>
                <div className="relative">
                  {p.badge && (
                    <span className="inline-block text-[10px] tracking-widest uppercase text-[#C9920E] border border-[#C9920E]/30 px-2 py-0.5 mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
                      {p.badge}
                    </span>
                  )}
                  <p className="text-[#2C1A06] text-xl font-light mb-1" style={{ fontFamily: 'var(--font-display)' }}>{p.name}</p>
                  <p className="text-[#2C1A06]/40 text-xs mb-3" style={{ fontFamily: 'var(--font-sans)' }}>{p.size} · Parfum</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#C9920E] text-lg" style={{ fontFamily: 'var(--font-display)' }}>{p.price}</span>
                    {p.comparePrice && (
                      <span className="text-[#2C1A06]/25 text-sm line-through">{p.comparePrice}</span>
                    )}
                  </div>
                </div>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#C9920E]/40 group-hover:text-[#C9920E] transition-colors text-xl">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
