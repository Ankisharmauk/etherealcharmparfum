import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Media Enquiries — Ethereal Charm',
  description: 'Media and press enquiries for Ethereal Charm. For interview requests, product information, and brand assets, contact info@theetherealcharm.com.',
}

const GOLD = '#C9920E'
const CREAM = '#F5DFA0'

export default function MediaPage() {
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
        <p className="tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
          Press
        </p>
        <h1 className="font-light" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', color: CREAM }}>
          Media Enquiries
        </h1>
        <p className="mt-5 max-w-md mx-auto px-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '22px', color: 'rgba(245,223,160,0.5)' }}>
          For all press, editorial, and media enquiries, please reach out directly.
        </p>
      </section>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 md:px-12 py-24">

        {/* Contact block */}
        <div
          className="mb-16 p-10 text-center"
          style={{
            background: 'rgba(201,146,14,0.04)',
            border: '1px solid rgba(201,146,14,0.2)',
          }}
        >
          <div style={{ width: 32, height: 1, background: 'rgba(201,146,14,0.5)', margin: '0 auto 24px' }} />
          <p className="mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,223,160,0.45)' }}>
            Contact
          </p>
          <a
            href="mailto:info@theetherealcharm.com"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 3vw, 28px)',
              color: GOLD,
              fontWeight: 300,
              letterSpacing: '0.02em',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            info@theetherealcharm.com
          </a>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(245,223,160,0.35)' }}>
            We aim to respond to all media enquiries within two business days.
          </p>
          <div style={{ width: 32, height: 1, background: 'rgba(201,146,14,0.5)', margin: '24px auto 0' }} />
        </div>

        {/* What we handle */}
        <div className="mb-16">
          <p className="tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
            We welcome enquiries about
          </p>
          <div className="space-y-4">
            {[
              { title: 'Interview Requests', body: 'Founder interviews, brand story, and the philosophy behind Ethereal Charm.' },
              { title: 'Product Information', body: 'Fragrance details, concentration, and the London craftsmanship behind each bottle.' },
              { title: 'Editorial & Review Samples', body: 'Sample requests for editorial features, fragrance reviews, and gift guides.' },
              { title: 'Brand Assets', body: 'High-resolution images, logos, and product photography for editorial use.' },
              { title: 'Partnerships & Collaborations', body: 'Creative collaborations, editorial partnerships, and brand alignment opportunities.' },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="flex gap-5 p-5"
                style={{ background: 'rgba(201,146,14,0.03)', border: '1px solid rgba(201,146,14,0.12)' }}
              >
                <div style={{ width: 3, flexShrink: 0, background: 'rgba(201,146,14,0.4)', borderRadius: 2, marginTop: 2 }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', color: CREAM, fontWeight: 300, marginBottom: '4px' }}>
                    {title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '22px', color: 'rgba(245,223,160,0.55)' }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About the brand — quick context for journalists */}
        <div
          className="p-8 mb-16"
          style={{ background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(201,146,14,0.15)', borderLeft: '2px solid rgba(201,146,14,0.5)' }}
        >
          <p className="tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(245,223,160,0.38)' }}>
            About Ethereal Charm
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: CREAM, fontWeight: 300, lineHeight: 1.7, fontStyle: 'italic' }}>
            Ethereal Charm is a luxury gender-neutral parfum crafted in small batches in London. High-concentration, long-lasting, and made without compromise. ABN 77 564 307 579.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,223,160,0.4)' }}
          >
            ← Back to Home
          </Link>
          <Link
            href="/about"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,223,160,0.4)' }}
          >
            Our Story →
          </Link>
        </div>
      </div>
    </div>
  )
}
