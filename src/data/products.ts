export interface Product {
  id: string
  slug: string
  name: string
  subtitle: string
  price: number
  comparePrice?: number
  size: string
  description: string
  longDescription: string
  notes: { type: 'top' | 'heart' | 'base'; items: string[] }[]
  details: string[]
  image: string
  stripePriceId: string
  badge?: string
}

export const products: Product[] = [
  {
    id: 'mini-ethereal-charm',
    slug: 'mini-ethereal-charm',
    name: 'The Mini Ethereal Charm',
    subtitle: 'Parfum · 10 ml',
    price: 25,
    size: '10ml',
    description: 'A pocket-sized introduction to the world of Ethereal Charm.',
    longDescription:
      'The Mini is your gateway into the Ethereal Charm universe — the same long-lasting, gender-neutral parfum in a sleek 10ml format. Perfect for travel, gifting, or discovering your new signature scent before committing to the full bottle.',
    notes: [
      { type: 'top', items: ['Bergamot', 'Pink Pepper', 'Cardamom'] },
      { type: 'heart', items: ['Rose Absolute', 'Jasmine Sambac', 'Iris'] },
      { type: 'base', items: ['Sandalwood', 'Amber', 'Musk', 'Vetiver'] },
    ],
    details: [
      'Gender-neutral Parfum',
      'Crafted in London',
      'Long-lasting formula — 8 to 12 hours',
      '10 ml spray bottle',
    ],
    image: '/images/bottle.png',
    stripePriceId: process.env.STRIPE_PRICE_MINI ?? '',
    badge: 'Best for gifting',
  },
  {
    id: 'ethereal-charm-25ml',
    slug: 'ethereal-charm-25ml',
    name: 'The Ethereal Charm',
    subtitle: 'Parfum · 25 ml',
    price: 66,
    comparePrice: 110,
    size: '25ml',
    description: 'The full expression. A luxurious, long-lasting parfum made in London.',
    longDescription:
      'Ethereal Charm is a quintessential, long-lasting gender-neutral parfum that awakens the mind and thrills the senses. Experience the aliveness of transformation with this luxurious, modern scent — masterfully crafted in London using the finest local ingredients.',
    notes: [
      { type: 'top', items: ['Bergamot', 'Pink Pepper', 'Cardamom'] },
      { type: 'heart', items: ['Rose Absolute', 'Jasmine Sambac', 'Iris'] },
      { type: 'base', items: ['Sandalwood', 'Amber', 'Musk', 'Vetiver'] },
    ],
    details: [
      'Gender-neutral Parfum',
      'Crafted in London',
      'Long-lasting formula — 8 to 12 hours',
      '25 ml spray bottle',
    ],
    image: '/images/bottle.png',
    stripePriceId: process.env.STRIPE_PRICE_25ML ?? '',
    badge: 'Limited offer',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
