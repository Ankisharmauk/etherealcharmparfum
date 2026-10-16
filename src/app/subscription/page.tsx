import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manage Subscription | Ethereal Charm',
  description: 'Cancel, change size or change delivery frequency for your Ethereal Charm subscription.',
  robots: { index: false, follow: true },
}

const GOLD = '#C9920E'
const CREAM = '#F5DFA0'

export default function ManageSubscriptionPage() {
  return (
    <div style={{ background: '#0D0804', minHeight: '100vh' }}>
      <section
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #2A1500 0%, #0D0804 70%)',
          padding: '140px 0 70px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(201,146,14,0.12)',
        }}
      >
        <p className="tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
          Subscription
        </p>
        <h1 className="font-light" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', color: CREAM }}>
          Manage Your Subscription
        </h1>
      </section>

      <div className="max-w-2xl mx-auto px-6 md:px-12 py-20">
        <p className="mb-8" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '24px', color: 'rgba(245,223,160,0.6)' }}>
          Enter the email you subscribed with and Stripe will send you a secure link. From there you can:
        </p>
        <ul className="space-y-3 mb-10">
          {[
            'Cancel your subscription at any time. It ends at the close of your current period, with no further charges.',
            'Change between the 10 ml and 25 ml sizes.',
            'Change how often you receive it: every month, every 2 months or every 3 months.',
            'Update your payment method and delivery address.',
          ].map((t) => (
            <li key={t} className="flex gap-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '22px', color: 'rgba(245,223,160,0.7)' }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD, flexShrink: 0, marginTop: 9 }} />
              {t}
            </li>
          ))}
        </ul>

        <a
          href="/api/manage-subscription"
          className="inline-block px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium"
          style={{ fontFamily: 'var(--font-sans)', background: GOLD, color: '#0D0804' }}
        >
          Manage my subscription
        </a>

        <p className="mt-10" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '20px', color: 'rgba(245,223,160,0.45)' }}>
          To skip or pause a delivery, or if you have any trouble, email{' '}
          <a href="mailto:info@theetherealcharm.com" style={{ color: GOLD }}>info@theetherealcharm.com</a>{' '}
          before your renewal date and we will help.
        </p>

        <div className="mt-12">
          <Link href="/shop" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,223,160,0.4)' }}>
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  )
}
