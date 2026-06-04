import type { Metadata } from 'next'

const BASE_URL = 'https://www.theetherealcharm.com'

export const metadata: Metadata = {
  title: 'About — The Story Behind Ethereal Charm',
  description: 'Discover the story behind Ethereal Charm — a gender-neutral luxury parfum born from a Kiwi\'s love affair with London. Crafted with precision, care, and an uncompromising commitment to quality.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'About Ethereal Charm — Luxury Parfum Made in London',
    description: 'The story behind Ethereal Charm — a gender-neutral parfum crafted in small batches in London with intention and care.',
    url: `${BASE_URL}/about`,
    type: 'website',
    images: [{ url: '/images/bottle.png', width: 1200, height: 630, alt: 'Ethereal Charm Parfum' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ethereal Charm — Luxury Parfum Made in London',
    description: 'The story behind Ethereal Charm — a gender-neutral parfum crafted in small batches in London.',
    images: ['/images/bottle.png'],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
