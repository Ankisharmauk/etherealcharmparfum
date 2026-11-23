import { NextResponse } from 'next/server'
import { promoState } from '@/data/promotion'

// The server's answer to "is Black Friday running right now?", from the server clock. Never cached, so a page left open can ask again and see the sale end on time.
export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json(promoState(new Date()), { headers: { 'Cache-Control': 'no-store' } })
}
