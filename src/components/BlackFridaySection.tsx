import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'
import { BLACK_FRIDAY, unitPrice } from '@/data/promotion'
import PriceTag from '@/components/PriceTag'

// The Black Friday Week feature on the homepage, directly under the hero. Server-rendered, and shown only while the sale is active (the caller passes the server-clock answer), so after the
// end time it is simply not in the page. Built from the site's own palette: espresso black, champagne gold hairlines and the existing bottle photography. No flashing, no sticker graphics.

const GOLD = '#C9920E'
const CHAMPAGNE = '#E8C876'
const CREAM = '#F5DFA0'

export default function BlackFridaySection({ active }: { active: boolean }) {
  if (!active) return null
  const featured = products.filter((p) => BLACK_FRIDAY.items[p.id])

  return (
    <section
      id="black-friday"
      aria-labelledby="black-friday-heading"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080502 0%, #130A03 55%, #0C0703 100%)', borderTop: '1px solid rgba(232,200,118,0.28)', borderBottom: '1px solid rgba(201,146,14,0.18)' }}
    >
      <style>{`
        @keyframes bf-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .bf-rise { animation: bf-rise 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
        .bf-rise-2 { animation-delay: 0.12s; }
        .bf-rise-3 { animation-delay: 0.24s; }
        .bf-card { transition: border-color 0.5s ease, background 0.5s ease; }
        .bf-card:hover { border-color: rgba(232,200,118,0.5); background: rgba(201,146,14,0.07); }
        .bf-cta { transition: background 0.4s ease, color 0.4s ease, letter-spacing 0.4s ease; }
        .bf-cta:hover { background: ${CHAMPAGNE}; letter-spacing: 0.28em; }
        @media (prefers-reduced-motion: reduce) { .bf-rise, .bf-card, .bf-cta { animation: none; transition: none; } }
      `}</style>

      {/* A faint champagne glow behind the heading */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{ top: '-10%', left: '50%', width: '70%', height: '70%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse 50% 50% at 50% 40%, rgba(232,200,118,0.12), transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="text-center">
          <p className="bf-rise inline-flex items-center gap-4 uppercase" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.38em', color: CHAMPAGNE }}>
            <span aria-hidden="true" style={{ width: 36, height: 1, background: 'rgba(232,200,118,0.55)' }} />
            Black Friday Week
            <span aria-hidden="true" style={{ width: 36, height: 1, background: 'rgba(232,200,118,0.55)' }} />
          </p>
          <h2
            id="black-friday-heading"
            className="bf-rise bf-rise-2 font-light mt-6 mb-5"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 6vw, 68px)', lineHeight: 1.08, color: CREAM, textWrap: 'balance' }}
          >
            Your Signature Scent, <span style={{ color: CHAMPAGNE, fontStyle: 'italic' }}>For Less.</span>
          </h2>
          <p className="bf-rise bf-rise-3 mx-auto" style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.7, color: 'rgba(245,223,160,0.66)', maxWidth: 470 }}>
            Discover your next signature scent. Limited-time offers on Ethereal Charm parfum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-14">
          {featured.map((p, i) => (
            <Link
              key={p.id}
              href={`/shop/${p.slug}`}
              className={`bf-card bf-rise ${i === 0 ? 'bf-rise-2' : 'bf-rise-3'} group relative flex items-center gap-6 p-7`}
              style={{ background: 'rgba(201,146,14,0.04)', border: '1px solid rgba(232,200,118,0.2)' }}
            >
              <div
                className="relative shrink-0 flex items-center justify-center"
                style={{ width: 96, height: 132, background: 'linear-gradient(160deg, #1C0E02 0%, #2A1500 55%, #130900 100%)' }}
              >
                <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 62%, rgba(201,146,14,0.25), transparent)' }} />
                <div className="relative w-16 h-24">
                  <Image src={p.image} alt={p.name} fill className="object-contain" sizes="64px" />
                </div>
              </div>
              <div className="min-w-0">
                <p className="uppercase" style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(245,223,160,0.5)' }}>{p.subtitle}</p>
                <p className="font-light mt-1 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: CREAM }}>{p.name}</p>
                <PriceTag unit={unitPrice(p, true)} size="lg" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="bf-cta bf-rise bf-rise-3 inline-block uppercase font-medium"
            style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.22em', padding: '16px 40px', background: GOLD, color: '#0D0804' }}
          >
            Shop Black Friday
          </Link>
          <p className="mt-5" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.06em', color: 'rgba(245,223,160,0.38)' }}>
            Offer ends 30 November 2026, 11:59 pm AEDT. Australian orders. Prices in AUD.
          </p>
        </div>
      </div>
    </section>
  )
}
