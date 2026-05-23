import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import CartDrawer from '@/components/CartDrawer'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Ethereal Charm — Luxury Parfum Made in London',
  description:
    'Discover Ethereal Charm, a quintessential long-lasting gender-neutral parfum crafted in London. Experience the aliveness of transformation.',
  openGraph: {
    title: 'Ethereal Charm — Luxury Parfum Made in London',
    description: 'A luxurious, gender-neutral parfum crafted in London.',
    url: 'https://theetherealcharm.com',
    siteName: 'Ethereal Charm',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#0A0806]" style={{ fontFamily: 'var(--font-sans), sans-serif' }}>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
