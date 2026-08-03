import type { Metadata } from 'next'

const BASE_URL = 'https://www.theetherealcharm.com'

export const metadata: Metadata = {
  title: 'Wholesale & Partnerships — Ethereal Charm',
  description: 'Partner with Ethereal Charm through wholesale stocking, trial placement, revenue share or bespoke gifting. For boutiques, retailers, event organisers and corporate partners.',
  alternates: { canonical: `${BASE_URL}/wholesale-partnerships` },
  openGraph: {
    title: 'Wholesale & Partnerships — Ethereal Charm',
    description: 'Introduce a distinctive London-made parfum to your customers, clients or community through flexible commercial partnerships.',
    url: `${BASE_URL}/wholesale-partnerships`,
    type: 'website',
    images: [{ url: '/images/bottle.png', width: 1200, height: 630, alt: 'Ethereal Charm Parfum' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale & Partnerships — Ethereal Charm',
    description: 'Introduce a distinctive London-made parfum to your customers, clients or community through flexible commercial partnerships.',
    images: ['/images/bottle.png'],
  },
}

export default function WholesaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
