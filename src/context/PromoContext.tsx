'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { products, type Product } from '@/data/products'
import { unitPrice, type PromoState, type UnitPrice } from '@/data/promotion'

// The browser's copy of "is the promotion running". It starts from the SERVER's answer for this request (the layout renders per request with the server clock) and is then
// re-checked against the server (/api/promo) every minute and whenever the tab becomes visible again, so a page left open flips back to regular prices after the end time.
// The browser's own clock is never used to decide. The checkout route recomputes the price itself, so what is charged never depends on this.
const PromoContext = createContext<PromoState>({ active: false, endsAt: '' })

export function PromoProvider({ initial, children }: { initial: PromoState; children: React.ReactNode }) {
  const [state, setState] = useState<PromoState>(initial)

  useEffect(() => {
    let cancelled = false
    const check = async () => {
      try {
        const res = await fetch('/api/promo', { cache: 'no-store' })
        if (!res.ok) return
        const next = (await res.json()) as PromoState
        if (!cancelled && typeof next.active === 'boolean') setState(next)
      } catch {
        /* offline: keep what the server last said */
      }
    }
    const timer = window.setInterval(check, 60_000)
    const onVisible = () => { if (document.visibilityState === 'visible') check() }
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      cancelled = true
      window.clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  return <PromoContext.Provider value={state}>{children}</PromoContext.Provider>
}

export const usePromo = (): PromoState => useContext(PromoContext)

/** The price for one unit of a product right now. Looks the product up in the CATALOG by id, so a bag saved in the browser before the sale (or after it) is always priced fresh. */
export function usePrice(product: Pick<Product, 'id' | 'price'>): UnitPrice {
  const { active } = usePromo()
  const catalog = products.find((p) => p.id === product.id) ?? product
  return unitPrice(catalog, active)
}
