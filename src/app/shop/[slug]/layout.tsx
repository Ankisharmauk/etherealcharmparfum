import type { Metadata } from 'next'
import { getProductBySlug } from '@/data/products'

const BASE_URL = 'https://www.theetherealcharm.com'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) return {}

  const title = `${product.name} — ${product.subtitle} | Ethereal Charm`
  const description = product.longDescription

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    image: `${BASE_URL}${product.image}`,
    brand: { '@type': 'Brand', name: 'Ethereal Charm' },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/shop/${product.slug}`,
      priceCurrency: 'GBP',
      price: product.price,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'Ethereal Charm' },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '12',
    },
  }

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/shop/${product.slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/shop/${product.slug}`,
      type: 'website',
      images: [{ url: '/images/bottle.png', width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/bottle.png'],
    },
    other: {
      'product:price:amount': String(product.price),
      'product:price:currency': 'GBP',
    },
  }
}

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) return <>{children}</>

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    image: `${BASE_URL}${product.image}`,
    brand: { '@type': 'Brand', name: 'Ethereal Charm' },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/shop/${product.slug}`,
      priceCurrency: 'GBP',
      price: product.price,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'Ethereal Charm' },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '12',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  )
}
