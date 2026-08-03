import type { Metadata } from 'next'

const BASE_URL = 'https://www.theetherealcharm.com'

export const metadata: Metadata = {
  title: 'Hotels, Spas & Corporate Gifting — Ethereal Charm',
  description: 'Elevate guest stays, client relationships and special moments with Ethereal Charm. VIP gifting, spa placements and bespoke corporate gifting, starting with a trial.',
  alternates: { canonical: `${BASE_URL}/hospitality-gifting` },
  openGraph: {
    title: 'Hotels, Spas & Corporate Gifting — Ethereal Charm',
    description: 'A memorable fragrance experience for guest stays, client relationships and special moments.',
    url: `${BASE_URL}/hospitality-gifting`,
    type: 'website',
    images: [{ url: '/images/bottle.png', width: 1200, height: 630, alt: 'Ethereal Charm Parfum' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotels, Spas & Corporate Gifting — Ethereal Charm',
    description: 'A memorable fragrance experience for guest stays, client relationships and special moments.',
    images: ['/images/bottle.png'],
  },
}

export default function HospitalityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
