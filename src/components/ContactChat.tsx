'use client'

import { MessageCircle } from 'lucide-react'

export default function ContactChat() {
  function openChat() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const api = (window as any).Tawk_API
    if (api?.maximize) {
      api.maximize()
    } else if (api?.toggle) {
      api.toggle()
    }
  }

  return (
    <button
      onClick={openChat}
      aria-label="Open live chat"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 h-14 rounded-full text-white text-sm font-light tracking-wide transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
      style={{
        backgroundColor: '#6B3600',
        border: '1px solid rgba(201,146,14,0.5)',
        boxShadow: '0 4px 20px rgba(107,54,0,0.5), 0 0 0 1px rgba(201,146,14,0.15)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <MessageCircle size={20} strokeWidth={1.5} />
      Let&apos;s Chat!
    </button>
  )
}
