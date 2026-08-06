import type { Metadata } from 'next'

const BASE_URL = 'https://www.theetherealcharm.com'

export const metadata: Metadata = {
  title: 'Creators & Rewards',
  description: 'Review Ethereal Charm, create content or refer a friend and earn rewards. Open to customers, UGC creators, micro-influencers and referral partners — no large following required.',
  alternates: { canonical: `${BASE_URL}/creators` },
  openGraph: {
    title: 'Creators & Rewards — Ethereal Charm',
    description: 'Share the scent, earn rewards. A simple program for reviewers, content creators and referral partners.',
    url: `${BASE_URL}/creators`,
    type: 'website',
    images: [{ url: '/images/bottle.png', width: 1200, height: 630, alt: 'Ethereal Charm Parfum' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creators & Rewards — Ethereal Charm',
    description: 'Share the scent, earn rewards. A simple program for reviewers, content creators and referral partners.',
    images: ['/images/bottle.png'],
  },
}

export default function CreatorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
