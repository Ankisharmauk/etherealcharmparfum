import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stories & Insights — Ethereal Charm',
  description: 'Explore guides, perspectives, and the craft behind Ethereal Charm — a luxury gender-neutral parfum made in London.',
}

const posts = [
  {
    slug: 'the-art-of-wearing-perfume',
    category: 'Guide',
    date: 'June 2026',
    title: 'The Art of Wearing Perfume',
    excerpt: 'Where you apply your fragrance changes everything. A guide to making your scent last from morning to midnight, and how to layer notes for maximum effect.',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80',
  },
  {
    slug: 'why-gender-neutral-fragrance-is-the-future',
    category: 'Perspectives',
    date: 'May 2026',
    title: 'Why Gender-Neutral Fragrance Is the Future of Luxury',
    excerpt: 'The best scents have never belonged to a gender. Here is why modern perfumery is finally catching up with what wearers have always known.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80',
  },
  {
    slug: 'crafted-in-london',
    category: 'Craft',
    date: 'April 2026',
    title: 'Crafted in London: What It Really Means',
    excerpt: 'Not just a label. A commitment to sourcing, skill, and small-batch quality that mass production cannot replicate. Inside the making of Ethereal Charm.',
    image: 'https://images.unsplash.com/photo-1614963048453-bd159b9b0049?w=800&q=80',
  },
]

const GOLD = '#C9920E'
const CREAM = '#F5DFA0'

export default function BlogPage() {
  return (
    <div style={{ background: '#0D0804', minHeight: '100vh' }}>

      {/* Header */}
      <section
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #2A1500 0%, #0D0804 70%)',
          padding: '140px 0 80px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(201,146,14,0.12)',
        }}
      >
        <p className="tracking-[0.35em] uppercase font-light mb-5" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
          From the Edit
        </p>
        <h1 className="font-light" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: CREAM }}>
          Stories &amp; Insights
        </h1>
        <p className="mt-5 max-w-md mx-auto px-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '22px', color: 'rgba(245,223,160,0.5)', textAlign: 'center' }}>
          Guides, perspectives, and the craft behind the scent.
        </p>
      </section>

      {/* Post grid */}
      <section style={{ padding: '80px 0 120px' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden"
                style={{
                  background: 'rgba(201,146,14,0.04)',
                  border: '1px solid rgba(201,146,14,0.14)',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <div className="relative overflow-hidden" style={{ height: 220 }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'rgba(13,8,4,0.22)' }} />
                  <span
                    className="absolute top-4 left-4 tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: GOLD, background: 'rgba(13,8,4,0.7)', padding: '4px 10px', border: '1px solid rgba(201,146,14,0.25)' }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'rgba(245,223,160,0.35)' }}>{post.date}</span>
                  <h2 className="font-light" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: CREAM, lineHeight: 1.35 }}>
                    {post.title}
                  </h2>
                  <p className="flex-1" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '22px', color: 'rgba(245,223,160,0.52)', textAlign: 'justify' }}>
                    {post.excerpt}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300 mt-2"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD }}
                  >
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming soon note */}
          <div
            className="mt-16 text-center"
            style={{ padding: '40px', border: '1px solid rgba(201,146,14,0.12)', background: 'rgba(201,146,14,0.03)' }}
          >
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'rgba(245,223,160,0.35)', letterSpacing: '0.1em' }}>
              More stories coming soon — fragrance guides, ingredient deep-dives, and the world of luxury scent.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
