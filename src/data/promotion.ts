// Black Friday Week 2026: the ONE place the promotion is defined. The storefront sells in Australia only (AUD, shipping limited to AU in the checkout routes), so there is no
// separate international price to protect. Pure and dependency-free so the server (page renders, the checkout route) and the browser use exactly the same rules.
//
// Verified before this was written (2026-11-24): the catalog prices in src/data/products.ts (A$59 and A$119) are what the checkout route charges today (it builds the Stripe line item
// from the same catalog price), and they have been the selling prices since 2026-09-24 (commit aa0f31b; before that 10ml was A$25 and 25ml was A$66). The sale shows a comparison
// price and a percentage ONLY while the catalog price still equals the verified regular price below, so a later price change can never leave a false "was" price on the site.
//
// Expiry is decided by the SERVER clock: every page is rendered per request with the current time, and the checkout route recomputes the price when the customer pays. A browser clock
// can neither extend nor cut the sale. After the end time the regular catalog price applies everywhere again, with no deploy and nothing to switch off.
//
// AEDT is UTC+11 (Australia/Sydney observes daylight saving in November).

export const BLACK_FRIDAY = {
  id: 'black-friday-2026',
  label: 'Black Friday Week',
  /** 24 November 2026, 12:00 am AEDT. */
  startsAt: '2026-11-24T00:00:00+11:00',
  /** 30 November 2026, 11:59 pm AEDT (the last instant of the 30th). */
  endsAt: '2026-11-30T23:59:59.999+11:00',
  /** Product id -> the verified regular price and the Black Friday price, in whole Australian dollars. */
  items: {
    'mini-ethereal-charm': { regular: 59, sale: 35 },
    'ethereal-charm-25ml': { regular: 119, sale: 79 },
  } as Record<string, { regular: number; sale: number }>,
} as const

/** Is the promotion running at this moment? */
export function isPromoActive(now: Date = new Date()): boolean {
  const t = now.getTime()
  return t >= Date.parse(BLACK_FRIDAY.startsAt) && t <= Date.parse(BLACK_FRIDAY.endsAt)
}

export interface UnitPrice {
  /** What the customer pays for one unit, in dollars. */
  price: number
  /** The regular price to show crossed out, only when the sale applies. */
  regularPrice: number | null
  onSale: boolean
  /** Whole-number percentage saved, only when the sale applies. */
  percentOff: number | null
}

/** The unit price of a product while the promotion is (or is not) active. `catalogPrice` is the product's normal price from the catalog. */
export function unitPrice(product: { id: string; price: number }, active: boolean): UnitPrice {
  const item = BLACK_FRIDAY.items[product.id]
  // Only a verified regular price can be shown as the comparison: if the catalog price has changed, the sale quietly steps aside.
  if (!active || !item || product.price !== item.regular) {
    return { price: product.price, regularPrice: null, onSale: false, percentOff: null }
  }
  return { price: item.sale, regularPrice: item.regular, onSale: true, percentOff: Math.round((1 - item.sale / item.regular) * 100) }
}

/** The state handed to the browser: only whether it is active and when it ends. */
export interface PromoState { active: boolean; endsAt: string }
export function promoState(now: Date = new Date()): PromoState {
  return { active: isPromoActive(now), endsAt: BLACK_FRIDAY.endsAt }
}

/** The lowest Black Friday price, for the announcement strip ("Parfum from A$35"). */
export const lowestSalePrice = (): number => Math.min(...Object.values(BLACK_FRIDAY.items).map((i) => i.sale))
