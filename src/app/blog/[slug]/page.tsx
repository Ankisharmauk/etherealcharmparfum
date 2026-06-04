import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { blogPosts, getBlogPost } from '../posts'

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

const BASE_URL = 'https://www.etherealcharmparfum.com'
const GOLD = '#C9920E'
const CREAM = '#F5DFA0'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Ethereal Charm`,
    description: post.excerpt,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: 'Ethereal Charm',
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    inLanguage: 'en',
    articleSection: post.category,
    keywords: [post.category, 'luxury perfume', 'gender-neutral fragrance', 'parfum', 'Ethereal Charm', 'Made in London'].join(', '),
    author: {
      '@type': 'Organization',
      name: 'Ethereal Charm',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ethereal Charm',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/logo.jpg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${post.slug}` },
    isPartOf: {
      '@type': 'Blog',
      '@id': `${BASE_URL}/blog`,
      name: 'Ethereal Charm Journal',
      url: `${BASE_URL}/blog`,
    },
    about: {
      '@type': 'Product',
      name: 'Ethereal Charm Parfum',
      brand: { '@type': 'Brand', name: 'Ethereal Charm' },
      description: 'A luxury gender-neutral parfum crafted in London.',
      url: `${BASE_URL}/shop`,
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/blog/${post.slug}` },
    ],
  }

  return (
    <main style={{ background: '#0D0804', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero image */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(260px, 40vw, 460px)', marginTop: 0 }}>
        <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,8,4,0.2) 0%, rgba(13,8,4,0.75) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 pb-10 pt-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
          <p className="tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            {post.category} · {post.readTime}
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 4vw, 48px)',
              color: 'white',
              fontWeight: 300,
              lineHeight: 1.2,
              maxWidth: '720px',
            }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-8 pb-2">
        <Link
          href="/blog"
          style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(245,223,160,0.45)', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Meta row */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-6" style={{ borderBottom: '1px solid rgba(201,146,14,0.12)' }}>
        <div className="flex flex-wrap items-center gap-6">
          {[
            { label: 'Published', value: post.date },
            { label: 'Category', value: post.category },
            { label: 'Reading Time', value: post.readTime },
            { label: 'Author', value: post.author },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.35)', letterSpacing: '1px', textTransform: 'uppercase' }}>{label}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: CREAM }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Excerpt / intro */}
        <p
          className="mb-12"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(17px, 2vw, 20px)',
            color: 'rgba(245,223,160,0.8)',
            lineHeight: 1.65,
            fontStyle: 'italic',
            borderLeft: `2px solid ${GOLD}`,
            paddingLeft: '20px',
          }}
        >
          {post.excerpt}
        </p>

        {post.content.map((section, i) => (
          <div key={i} className="mb-10">
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(19px, 2.5vw, 26px)',
                color: CREAM,
                fontWeight: 300,
                lineHeight: 1.3,
                marginBottom: '14px',
              }}
            >
              {section.heading}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                lineHeight: '28px',
                color: 'rgba(245,223,160,0.65)',
                textAlign: 'justify',
              }}
            >
              {section.body}
            </p>

            {/* Mid-article CTA after 3rd section */}
            {i === 2 && (
              <div
                className="my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                style={{
                  background: 'rgba(201,146,14,0.06)',
                  border: '1px solid rgba(201,146,14,0.28)',
                  borderRadius: '2px',
                  padding: '22px 24px',
                }}
              >
                <div>
                  <p style={{ color: CREAM, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '17px', marginBottom: '4px' }}>
                    Experience Ethereal Charm
                  </p>
                  <p style={{ color: 'rgba(245,223,160,0.5)', fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '20px' }}>
                    A high-concentration parfum crafted in London. Gender-neutral. Long-lasting.
                  </p>
                </div>
                <Link
                  href="/shop"
                  style={{
                    flexShrink: 0,
                    background: GOLD,
                    color: '#0D0804',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: '10px',
                    padding: '12px 24px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  Shop Now →
                </Link>
              </div>
            )}
          </div>
        ))}
      </article>

      {/* Related posts */}
      <section style={{ background: '#100904', borderTop: '1px solid rgba(201,146,14,0.1)', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="tracking-[0.35em] uppercase font-light mb-10" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            More from the Edit
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map(p => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden"
                style={{ background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.13)' }}
              >
                <div className="relative overflow-hidden" style={{ height: 160 }}>
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                  <div className="absolute inset-0" style={{ background: 'rgba(13,8,4,0.25)' }} />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: GOLD, letterSpacing: '1px', textTransform: 'uppercase' }}>{p.category}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', color: CREAM, fontWeight: 300, lineHeight: 1.35 }}>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
