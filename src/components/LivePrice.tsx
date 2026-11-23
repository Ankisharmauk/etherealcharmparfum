'use client'

import type { Product } from '@/data/products'
import { usePrice } from '@/context/PromoContext'
import PriceTag from '@/components/PriceTag'

// The price of ONE unit of a product right now, for client components (cart, checkout, product page). The multiplied line total on the checkout page is computed from the same unit price.
export default function LivePrice({
  product,
  size,
  decimals,
  tone,
}: {
  product: Pick<Product, 'id' | 'price'>
  size?: 'sm' | 'md' | 'lg'
  decimals?: boolean
  tone?: 'dark' | 'light'
}) {
  return <PriceTag unit={usePrice(product)} size={size} decimals={decimals} tone={tone} />
}
