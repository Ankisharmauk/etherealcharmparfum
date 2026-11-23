// Black Friday Week 2026 checks. Plain Node, no network: the real promotion rules and the REAL checkout and promo routes are run, with Stripe replaced by a stand-in that records
// exactly what would be charged, and the clock replaced so every moment around the start and the end can be tested.
// Run: node scripts/test-black-friday.cjs
const path = require('path')
const fs = require('fs')
const Module = require('module')

const root = path.join(__dirname, '..')
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8')
let failed = 0
const ok = (cond, message, detail) => {
  if (!cond) { failed++; console.error('FAIL', message, detail !== undefined ? JSON.stringify(detail).slice(0, 400) : '') } else console.log('ok  ', message)
}

const jiti = require('jiti')(__filename, { alias: { '@': path.join(root, 'src') }, interopDefault: true })
const promo = jiti('../src/data/promotion.ts')
const { products } = jiti('../src/data/products.ts')

// ── the clock ────────────────────────────────────────────────────────────────
const RealDate = Date
function at(iso, fn) {
  const fixed = RealDate.parse(iso)
  class MockDate extends RealDate {
    constructor(...args) { if (args.length === 0) super(fixed); else super(...args) }
    static now() { return fixed }
  }
  global.Date = MockDate
  try { return fn() } finally { global.Date = RealDate }
}
async function atAsync(iso, fn) {
  const fixed = RealDate.parse(iso)
  class MockDate extends RealDate {
    constructor(...args) { if (args.length === 0) super(fixed); else super(...args) }
    static now() { return fixed }
  }
  global.Date = MockDate
  try { return await fn() } finally { global.Date = RealDate }
}

// ── Stripe stand-in: records the session it is asked to create ───────────────
const created = []
class FakeStripe {
  constructor() { this.checkout = { sessions: { create: async (args) => { created.push(args); return { url: 'https://checkout.stripe.test/session' } } } } }
}
const stripePath = require.resolve('stripe', { paths: [root] })
const stub = new Module(stripePath)
stub.filename = stripePath
stub.loaded = true
stub.exports = FakeStripe
require.cache[stripePath] = stub
process.env.STRIPE_SECRET_KEY = 'sk_test_offline'
process.env.NEXT_PUBLIC_URL = 'https://www.theetherealcharm.com'

async function main() {
  const checkout = jiti('../src/app/api/checkout/route.ts')
  const promoRoute = jiti('../src/app/api/promo/route.ts')
  const pay = async (iso, items) => atAsync(iso, async () => {
    created.length = 0
    const res = await checkout.POST(new Request('https://www.theetherealcharm.com/api/checkout', { method: 'POST', body: JSON.stringify({ items }) }))
    return { status: res.status, session: created[0] }
  })
  const amounts = (session) => session.line_items.map((l) => l.price_data.unit_amount)

  // ── 1. The agreed prices and the verified regular prices ─────────────────────
  const mini = products.find((p) => p.id === 'mini-ethereal-charm')
  const large = products.find((p) => p.id === 'ethereal-charm-25ml')
  ok(mini.price === 59 && large.price === 119, 'the verified regular prices in the catalog are A$59 (10ml) and A$119 (25ml)')
  ok(promo.BLACK_FRIDAY.items['mini-ethereal-charm'].sale === 35 && promo.BLACK_FRIDAY.items['ethereal-charm-25ml'].sale === 79, 'the agreed Black Friday prices are A$35 (10ml) and A$79 (25ml)')
  const on10 = promo.unitPrice(mini, true), on25 = promo.unitPrice(large, true)
  ok(on10.price === 35 && on10.regularPrice === 59 && on10.percentOff === 41 && on10.onSale, '10ml on sale: A$35, regular A$59 crossed out, 41% saved', on10)
  ok(on25.price === 79 && on25.regularPrice === 119 && on25.percentOff === 34 && on25.onSale, '25ml on sale: A$79, regular A$119 crossed out, 34% saved', on25)
  const off10 = promo.unitPrice(mini, false)
  ok(off10.price === 59 && off10.regularPrice === null && off10.percentOff === null && !off10.onSale, 'off sale: the regular price only, no comparison price and no percentage', off10)

  // ── 2. The guard: a comparison price is shown ONLY while it is the verified regular price ────
  const repriced = promo.unitPrice({ id: 'mini-ethereal-charm', price: 65 }, true)
  ok(!repriced.onSale && repriced.price === 65 && repriced.regularPrice === null, 'if the catalog price ever changes, the sale steps aside (no false "was" price is shown)', repriced)
  const other = promo.unitPrice({ id: 'some-other-product', price: 40 }, true)
  ok(!other.onSale && other.price === 40, 'any other product is never discounted', other)

  // ── 3. The dates (Australia/Sydney, AEDT = UTC+11) ──────────────────────────────
  const active = (iso) => at(iso, () => promo.isPromoActive(new Date()))
  ok(active('2026-11-23T23:59:59.999+11:00') === false, 'not active at 11:59:59 pm on 23 November')
  ok(active('2026-11-24T00:00:00+11:00') === true, 'active from 12:00 am on 24 November')
  ok(active('2026-11-24T14:00:00+11:00') === true && active('2026-11-27T12:00:00+11:00') === true, 'active through the week, including 27 November')
  ok(active('2026-11-30T23:59:59.999+11:00') === true, 'still active at the very last instant of 30 November (11:59 pm AEDT)')
  ok(active('2026-12-01T00:00:00+11:00') === false, 'ended at 12:00 am on 1 December: regular prices again')

  // ── 4. The ACTUAL checkout (server decides the price) ───────────────────────────
  const during = await pay('2026-11-25T10:00:00+11:00', [{ id: 'mini-ethereal-charm', quantity: 1 }, { id: 'ethereal-charm-25ml', quantity: 2 }])
  ok(during.status === 200 && during.session, 'checkout starts during the sale')
  ok(JSON.stringify(amounts(during.session)) === '[3500,7900]', 'Stripe is asked to charge A$35.00 and A$79.00 per unit (cents: 3500 and 7900)', amounts(during.session))
  ok(during.session.line_items.map((l) => l.quantity).join() === '1,2', 'quantities are kept (1 x 10ml and 2 x 25ml: A$35 + A$158 = A$193)')
  ok(during.session.line_items.every((l) => l.price_data.currency === 'aud'), 'every line is in AUD')
  ok(/Black Friday Week price \(regular A\$59\)/.test(during.session.line_items[0].price_data.product_data.description) && /regular A\$119/.test(during.session.line_items[1].price_data.product_data.description), 'the Stripe page tells the customer it is the Black Friday price and the regular price')
  ok(during.session.metadata && during.session.metadata.promotion === 'black-friday-2026', 'the order is tagged promotion=black-friday-2026 for reporting')
  ok(!('discounts' in during.session) && !('allow_promotion_codes' in during.session), 'no coupon or promotion code is applied or allowed, so nothing can stack on the sale price')
  ok(during.session.shipping_address_collection.allowed_countries.join() === 'AU' && during.session.mode === 'payment', 'still Australia-only shipping and a one-time payment (unchanged)')
  ok(during.session.success_url.endsWith('/order-success') && during.session.cancel_url.endsWith('/checkout'), 'success and cancel pages are unchanged')

  const lastInstant = await pay('2026-11-30T23:59:59+11:00', [{ id: 'mini-ethereal-charm', quantity: 1 }])
  ok(JSON.stringify(amounts(lastInstant.session)) === '[3500]', 'a customer paying at 11:59:59 pm on 30 November still gets A$35')
  const afterEnd = await pay('2026-12-01T00:00:01+11:00', [{ id: 'mini-ethereal-charm', quantity: 1 }, { id: 'ethereal-charm-25ml', quantity: 1 }])
  ok(JSON.stringify(amounts(afterEnd.session)) === '[5900,11900]', 'AFTER the end the same checkout charges the regular A$59 and A$119 again (automatic expiry)', amounts(afterEnd.session))
  ok(!afterEnd.session.metadata && !afterEnd.session.line_items.some((l) => l.price_data.product_data.description), 'after the end there is no promotion tag and no sale wording')
  const before = await pay('2026-11-23T09:00:00+11:00', [{ id: 'ethereal-charm-25ml', quantity: 1 }])
  ok(JSON.stringify(amounts(before.session)) === '[11900]', 'before the start the checkout charges the regular price')
  const spoof = await pay('2026-12-02T10:00:00+11:00', [{ id: 'mini-ethereal-charm', quantity: 1, price: 1, unit_amount: 100, promo: true }])
  ok(JSON.stringify(amounts(spoof.session)) === '[5900]', 'a price or flag sent by the browser is ignored: only the product id and quantity count')
  const empty = await pay('2026-11-25T10:00:00+11:00', [])
  ok(empty.status === 400, 'an empty bag is still refused (unchanged)')

  // ── 5. The server's answer to the browser ───────────────────────────────────────
  const state = async (iso) => atAsync(iso, async () => (await promoRoute.GET()).json())
  const s1 = await state('2026-11-26T10:00:00+11:00'), s2 = await state('2026-12-01T10:00:00+11:00')
  ok(s1.active === true && s2.active === false && /2026-11-30T23:59:59/.test(s1.endsAt), '/api/promo reports active during the sale and inactive after it, from the server clock', { s1, s2 })

  // ── 6. What must NOT change ──────────────────────────────────────────────────────
  const sub = read('src/app/api/subscription-checkout/route.ts')
  ok(!/promotion/.test(sub), 'subscriptions are not part of the sale: their checkout is untouched (usual 10% off the regular price)')
  const products_ts = read('src/data/products.ts')
  ok(/price: 59,/.test(products_ts) && /price: 119,/.test(products_ts) && !/price: (35|79),/.test(products_ts), 'the catalog keeps the REGULAR prices: the sale never edits them, so expiry restores them by itself')

  // ── 7. The page wiring ───────────────────────────────────────────────────────────
  const home = read('src/app/page.tsx')
  ok(/<BlackFridaySection active=\{promoActive\} \/>/.test(home) && home.indexOf('<BlackFridaySection') > home.indexOf('</section>') && home.indexOf('<BlackFridaySection') < home.indexOf('Captivating Fragrance */}'), 'the Black Friday section sits directly under the hero, before the existing sections')
  ok(/export const dynamic = 'force-dynamic'/.test(home) && /export const dynamic = 'force-dynamic'/.test(read('src/app/layout.tsx')) && /export const dynamic = 'force-dynamic'/.test(read('src/app/shop/page.tsx')), 'pages render per request, so prices follow the server clock')
  const section = read('src/components/BlackFridaySection.tsx')
  ok(/if \(!active\) return null/.test(section) && /SHOP BLACK FRIDAY|Shop Black Friday/i.test(section) && /Your Signature Scent, /.test(section) && /Discover your next signature scent\. Limited-time offers on Ethereal Charm parfum\./.test(section), 'the section has the approved headline, text and CTA and disappears when the sale is not active')
  const nav = read('src/components/Navbar.tsx')
  ok(/promoActive && \(/.test(nav) && /Black Friday Week/.test(nav) && /Parfum from A\$\{lowestSalePrice\(\)\}/.test(nav) && /Ends 30 November/.test(nav) && /top: promoActive \? STRIP_HEIGHT : 0/.test(nav), 'the announcement strip shows only during the sale and the navbar sits beneath it (never covered)')
  ok(/paddingTop: active \? STRIP_HEIGHT : 0/.test(read('src/components/PromoOffset.tsx')) && /<PromoOffset>\{children\}<\/PromoOffset>/.test(read('src/app/layout.tsx')), 'while the strip shows, page content moves down by the same amount, so existing spacing under the navbar is preserved')
  ok(/lowestSalePrice/.test(read('src/data/promotion.ts')) && promo.lowestSalePrice() === 35, 'the strip says "Parfum from A$35"')
  const slug = read('src/app/shop/[slug]/page.tsx')
  ok(/handleAdd/.test(slug) && /Add to Bag/.test(slug) && /SUBSCRIPTION_INTERVALS/.test(slug) && /product\.details\.map/.test(slug), 'the product page keeps add to bag, the subscription options and the product details')

  // ── 8. The bottle photograph ─────────────────────────────────────────────────────
  const bottlePath = path.join(root, 'public/images/ethereal-charm-bottle.png')
  const header = fs.readFileSync(bottlePath)
  ok(header.readUInt32BE(16) === 458 && header.readUInt32BE(20) === 545 && header[25] === 6, 'the bottle image keeps the old canvas size (458 x 545) with a transparent background (RGBA)')
  ok(!fs.existsSync(path.join(root, 'public/images/bottle.png')), 'the old bottle image file is gone (replaced, not duplicated)')
  const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]))
  const sources = walk(path.join(root, 'src')).filter((f) => /\.(tsx?|css)$/.test(f)).map((f) => fs.readFileSync(f, 'utf8')).join('\n')
  ok(!/\/images\/bottle\.png/.test(sources) && /\/images\/ethereal-charm-bottle\.png/.test(sources), 'every page, product record and share image points at the new bottle file (a new filename, so no cached copy of the old picture can be served)')

  console.log(failed ? `\n${failed} check(s) FAILED` : '\nAll Black Friday checks passed')
  process.exit(failed ? 1 : 0)
}
main().catch((e) => { console.error(e); process.exit(2) })
