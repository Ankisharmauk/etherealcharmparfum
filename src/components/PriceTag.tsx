import type { UnitPrice } from '@/data/promotion'

// One price display used everywhere a price is shown (home, shop, product page, cart, checkout). Presentational only, so it works in server and client components.
// Not on sale: the single regular price, exactly as before. On sale: the verified regular price crossed out, the Black Friday price prominent, and a quiet "Save N%" label.
// The regular price and the percentage only ever appear when src/data/promotion.ts has verified them.

const GOLD = '#C9920E'
const CHAMPAGNE = '#E8C876'

const fmt = (n: number, decimals: boolean) => (decimals ? n.toFixed(2) : String(n))

export default function PriceTag({
  unit,
  size = 'md',
  decimals = false,
  tone = 'dark',
}: {
  unit: UnitPrice
  size?: 'sm' | 'md' | 'lg'
  decimals?: boolean
  /** 'dark' sits on the dark shop surfaces (gold on black); 'light' sits on the cream cart and checkout surfaces. */
  tone?: 'dark' | 'light'
}) {
  const main = { sm: 15, md: 22, lg: 32 }[size]
  const was = { sm: 12, md: 14, lg: 18 }[size]
  const priceColor = tone === 'dark' ? (unit.onSale ? CHAMPAGNE : GOLD) : GOLD
  const wasColor = tone === 'dark' ? 'rgba(245,223,160,0.42)' : 'rgba(44,26,6,0.4)'

  if (!unit.onSale) {
    return (
      <span style={{ fontFamily: 'var(--font-display)', fontSize: main, color: GOLD }}>
        A${fmt(unit.price, decimals)}
      </span>
    )
  }

  return (
    <span className="inline-flex flex-wrap items-baseline" style={{ gap: size === 'sm' ? '6px 8px' : '6px 12px' }}>
      <s
        aria-label={`Regular price A$${fmt(unit.regularPrice ?? 0, decimals)}`}
        style={{ fontFamily: 'var(--font-display)', fontSize: was, color: wasColor, textDecorationColor: 'rgba(201,146,14,0.6)' }}
      >
        A${fmt(unit.regularPrice ?? 0, decimals)}
      </s>
      <span aria-label={`Black Friday price A$${fmt(unit.price, decimals)}`} style={{ fontFamily: 'var(--font-display)', fontSize: main, color: priceColor }}>
        A${fmt(unit.price, decimals)}
      </span>
      {unit.percentOff !== null && (
        <span
          className="uppercase"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: size === 'sm' ? 9 : 10,
            letterSpacing: '0.16em',
            color: tone === 'dark' ? CHAMPAGNE : '#7A4800',
            border: `1px solid ${tone === 'dark' ? 'rgba(232,200,118,0.45)' : 'rgba(122,72,0,0.4)'}`,
            padding: '2px 8px',
            whiteSpace: 'nowrap',
          }}
        >
          Save {unit.percentOff}%
        </span>
      )}
    </span>
  )
}
