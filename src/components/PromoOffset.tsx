'use client'

import { usePromo } from '@/context/PromoContext'

// The page content sits in <main>. While the Black Friday Week strip is showing, the fixed navbar moves down by the strip's height, so the content moves down by the same amount and keeps
// exactly the spacing it always had under the navbar. When the sale ends the offset goes with the strip.
export const STRIP_HEIGHT = 32

export default function PromoOffset({ children }: { children: React.ReactNode }) {
  const { active } = usePromo()
  return (
    <main className="flex-1" style={{ paddingTop: active ? STRIP_HEIGHT : 0 }}>
      {children}
    </main>
  )
}
