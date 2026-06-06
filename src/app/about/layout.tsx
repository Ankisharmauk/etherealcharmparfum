import type { Metadata } from 'next'

const BASE_URL = 'https://www.theetherealcharm.com'

export const metadata: Metadata = {
  title: 'About — The Story Behind Ethereal Charm',
  description: 'The story of Ethereal Charm — a luxury gender-neutral parfum born from a Kiwi\'s love of London, made with precision and an uncompromising eye for quality.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'About Ethereal Charm — Luxury Parfum Made in London',
    description: 'The story behind Ethereal Charm — a gender-neutral parfum handcrafted in London with intention and care.',
    url: `${BASE_URL}/about`,
    type: 'website',
    images: [{ url: '/images/bottle.png', width: 1200, height: 630, alt: 'Ethereal Charm Parfum' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ethereal Charm — Luxury Parfum Made in London',
    description: 'The story behind Ethereal Charm — a gender-neutral parfum handcrafted in London.',
    images: ['/images/bottle.png'],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Founder of Ethereal Charm',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Ethereal Charm',
    url: BASE_URL,
  },
  nationality: {
    '@type': 'Country',
    name: 'New Zealand',
  },
  homeLocation: {
    '@type': 'Place',
    name: 'Australia',
  },
  description: 'Founder of Ethereal Charm, an independent luxury gender-neutral parfum brand handcrafted in London. A New Zealander with a deep passion for precision, craft, and the transformative art of fine fragrance.',
  url: `${BASE_URL}/about`,
  sameAs: [
    'https://www.instagram.com/etherealcharmofficial',
    'https://www.tiktok.com/@etherealcharmperfume',
  ],
}

const brandSchema = {
  '@context': 'https://schema.org',
  '@type': 'Brand',
  name: 'Ethereal Charm',
  url: BASE_URL,
  logo: `${BASE_URL}/images/bottle.png`,
  description: 'Ethereal Charm is an independent luxury parfum brand. Gender-neutral, high-concentration, handcrafted in London.',
  slogan: 'Discover the Essence of Ethereal Charm',
  founder: {
    '@type': 'Person',
    name: 'Founder of Ethereal Charm',
    nationality: 'New Zealander',
    homeLocation: 'Australia',
  },
  foundingLocation: {
    '@type': 'Place',
    name: 'London, United Kingdom',
  },
  areaServed: ['AU', 'NZ', 'GB', 'US', 'CA'],
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }} />
      {children}
    </>
  )
}
