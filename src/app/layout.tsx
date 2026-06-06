import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import CartDrawer from '@/components/CartDrawer'
import Footer from '@/components/Footer'
import ContactChat from '@/components/ContactChat'

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

const BASE_URL = 'https://www.theetherealcharm.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Ethereal Charm — Luxury Gender-Neutral Parfum Made in London',
    template: '%s — Ethereal Charm',
  },
  description:
    'Ethereal Charm is a high-concentration gender-neutral parfum handcrafted in London. Long-lasting, sophisticated, and unlike anything mass-produced.',
  keywords: [
    'luxury perfume London',
    'gender neutral parfum',
    'gender neutral perfume',
    'long lasting perfume',
    'small batch perfume UK',
    'artisan perfume London',
    'oud perfume',
    'unisex parfum',
    'extrait de parfum',
    'London made perfume',
    'Ethereal Charm',
  ],
  authors: [{ name: 'Ethereal Charm', url: BASE_URL }],
  creator: 'Ethereal Charm',
  publisher: 'Ethereal Charm',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Ethereal Charm — Luxury Gender-Neutral Parfum Made in London',
    description: 'A high-concentration gender-neutral parfum handcrafted in London. Long-lasting, sophisticated, unmistakable.',
    url: BASE_URL,
    siteName: 'Ethereal Charm',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/bottle.png',
        width: 1200,
        height: 630,
        alt: 'Ethereal Charm — Luxury Gender-Neutral Parfum',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethereal Charm — Luxury Gender-Neutral Parfum Made in London',
    description: 'A high-concentration gender-neutral parfum handcrafted in London.',
    images: ['/images/bottle.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ethereal Charm',
  url: BASE_URL,
  logo: `${BASE_URL}/images/bottle.png`,
  description: 'A luxury gender-neutral parfum handcrafted in London.',
  foundingLocation: { '@type': 'Place', name: 'London, United Kingdom' },
  taxID: '77 564 307 579',
  sameAs: [
    'https://www.instagram.com/etherealcharmofficial',
    'https://www.tiktok.com/@etherealcharmperfume',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@theetherealcharm.com',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ethereal Charm',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/shop?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#0A0806]" style={{ fontFamily: 'var(--font-sans), sans-serif' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactChat />
        </CartProvider>
        {/* Tawk.to — hide default bubble; custom button in ContactChat opens it */}
        <Script id="tawk-to" strategy="afterInteractive">{`
          var Tawk_API = Tawk_API || {};
          Tawk_API.onLoad = function() {
            Tawk_API.hideWidget();
          };
          Tawk_API.onStatusChange = function() {
            Tawk_API.hideWidget();
          };
          var Tawk_LoadStart = new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6a216a3ea7b9da1c346301d3/1jq98e1ud';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}</Script>
      </body>
    </html>
  )
}
