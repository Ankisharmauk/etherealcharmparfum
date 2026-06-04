'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

type FormState = { name: string; email: string; message: string }

export default function ContactChat() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [error, setError] = useState('')

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setError('Something went wrong — please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  function handleClose() {
    setOpen(false)
    setTimeout(() => setSent(false), 400)
  }

  return (
    <>
      {/* Floating trigger button — matches Figma: olive #B9B89C, pill, white icon + text */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open contact form"
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

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 bg-black/20 backdrop-blur-sm"
          onClick={e => e.target === e.currentTarget && handleClose()}
        >
          {/* Panel */}
          <div className="w-full max-w-sm bg-[#111009] border border-white/10 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b border-white/5"
              style={{ backgroundColor: '#6B3600', borderBottom: '1px solid rgba(201,146,14,0.2)' }}
            >
              <div>
                <p
                  className="text-white text-sm tracking-[0.2em] uppercase font-light"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Let&apos;s Chat
                </p>
                <p className="text-white/70 text-xs mt-0.5" style={{ fontFamily: 'var(--font-sans)' }}>
                  We&apos;ll reply within 24 hours
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              {sent ? (
                <div className="text-center py-10">
                  <p
                    className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Message Sent
                  </p>
                  <p className="text-[#F5F0E8]/40 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                    Thank you — we&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={set('name')}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-[#F5F0E8] text-sm placeholder:text-[#F5F0E8]/25 focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-[#F5F0E8] text-sm placeholder:text-[#F5F0E8]/25 focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                  <textarea
                    placeholder="Your message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-[#F5F0E8] text-sm placeholder:text-[#F5F0E8]/25 focus:border-[#C9A84C]/50 focus:outline-none transition-colors resize-none"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                  {error && (
                    <p className="text-red-400/70 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#3D2810] hover:bg-[#5C3D18] text-[#F5F0E8] text-xs tracking-[0.2em] uppercase py-3.5 transition-colors disabled:opacity-50"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {submitting ? (
                      'Sending…'
                    ) : (
                      <>
                        <Send size={13} strokeWidth={1.5} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
