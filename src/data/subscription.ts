import type { Product } from './products'

// Subscribers save 10% on the one-time price. Same discount for every frequency.
export const SUBSCRIPTION_DISCOUNT_PERCENT = 10

export const SUBSCRIPTION_INTERVALS = [
  { months: 1, label: 'Every month', short: 'every month' },
  { months: 2, label: 'Every 2 months', short: 'every 2 months' },
  { months: 3, label: 'Every 3 months', short: 'every 3 months' },
] as const

export type SubscriptionMonths = (typeof SUBSCRIPTION_INTERVALS)[number]['months']

export const DEFAULT_SUBSCRIPTION_MONTHS: SubscriptionMonths = 1

export function isSubscriptionMonths(value: unknown): value is SubscriptionMonths {
  return SUBSCRIPTION_INTERVALS.some((i) => i.months === value)
}

// Price in cents, so it matches Stripe exactly. A$59 -> 5310, A$119 -> 10710.
export function subscriptionUnitAmount(product: Product): number {
  return Math.round(product.price * 100 * (100 - SUBSCRIPTION_DISCOUNT_PERCENT) / 100)
}

export function subscriptionPrice(product: Product): number {
  return subscriptionUnitAmount(product) / 100
}

// Stripe Price lookup keys. The setup script creates prices with these keys,
// and the checkout route resolves them at request time, so no Price IDs need
// to live in env vars and test/live mode each just use their own matching set.
export function subscriptionLookupKey(productId: string, months: SubscriptionMonths): string {
  return `ec_sub_${productId}_${months}m`
}
