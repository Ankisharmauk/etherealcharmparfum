import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Ethereal Charm. Questions about a fragrance, an order, or a collaboration — we would love to hear from you.',
  alternates: { canonical: 'https://www.theetherealcharm.com/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
