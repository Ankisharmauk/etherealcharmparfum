import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shipping & Returns — Ethereal Charm',
  description: 'Shipping information and returns policy for Ethereal Charm. All sales are final — no refunds or exchanges.',
  robots: { index: true, follow: true },
}

const GOLD = '#C9920E'
const CREAM = '#F5DFA0'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(20px, 2.5vw, 26px)',
          color: CREAM,
          fontWeight: 300,
          marginBottom: '16px',
          paddingBottom: '10px',
          borderBottom: '1px solid rgba(201,146,14,0.18)',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          lineHeight: '26px',
          color: 'rgba(245,223,160,0.65)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4">{children}</p>
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 space-y-1.5 pl-4">{children}</ul>
}

function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD, flexShrink: 0, display: 'inline-block', marginTop: '10px' }} />
      <span>{children}</span>
    </li>
  )
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-6 p-6"
      style={{
        background: 'rgba(201,146,14,0.05)',
        border: '1px solid rgba(201,146,14,0.25)',
        borderLeft: '3px solid rgba(201,146,14,0.6)',
      }}
    >
      {children}
    </div>
  )
}

export default function ShippingPage() {
  return (
    <div style={{ background: '#0D0804', minHeight: '100vh' }}>

      {/* Header */}
      <section
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #2A1500 0%, #0D0804 70%)',
          padding: '140px 0 72px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(201,146,14,0.12)',
        }}
      >
        <p className="tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: GOLD }}>
          Orders
        </p>
        <h1 className="font-light" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', color: CREAM }}>
          Shipping &amp; Returns
        </h1>
        <p className="mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(245,223,160,0.38)', letterSpacing: '0.05em' }}>
          Last updated: June 2026
        </p>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">

        <Section title="Order Processing">
          <P>
            All orders are processed within <strong style={{ color: CREAM }}>1–3 business days</strong> of payment confirmation. Orders placed on weekends or UK public holidays will be processed on the next business day.
          </P>
          <P>
            Once your order has been dispatched, you will receive a confirmation email with tracking information where available.
          </P>
        </Section>

        <Section title="UK Shipping">
          <InfoBox>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', color: CREAM, fontWeight: 300, marginBottom: '6px' }}>
              Standard Delivery — United Kingdom
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.6)' }}>
              Estimated delivery: <strong style={{ color: CREAM }}>3–5 business days</strong> after dispatch.
            </p>
          </InfoBox>
          <P>
            All UK orders are sent via Royal Mail or an equivalent tracked courier. Delivery estimates are provided by the carrier and are not guaranteed. Ethereal Charm is not liable for delays caused by the carrier or circumstances beyond our control.
          </P>
        </Section>

        <Section title="International Shipping">
          <InfoBox>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', color: CREAM, fontWeight: 300, marginBottom: '6px' }}>
              International Delivery
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(245,223,160,0.6)' }}>
              Estimated delivery: <strong style={{ color: CREAM }}>7–14 business days</strong> after dispatch, depending on destination.
            </p>
          </InfoBox>
          <P>
            International orders may be subject to customs duties, import taxes, or fees imposed by the destination country. These charges are the sole responsibility of the customer. Ethereal Charm has no control over these charges and cannot predict or reimburse them.
          </P>
          <P>
            Please note that fragrance products are classified as hazardous goods under international shipping regulations. Certain destinations may not accept fragrance shipments by air. We will contact you if we are unable to fulfil an international order to your destination.
          </P>
        </Section>

        <Section title="No Refund Policy">
          <InfoBox>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: CREAM, fontWeight: 300, marginBottom: '8px' }}>
              All sales are final.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '22px', color: 'rgba(245,223,160,0.65)' }}>
              We do not accept returns or offer refunds or exchanges on any orders, including unopened products. This policy exists because fragrance is a personal care product and we cannot guarantee the integrity of returned goods.
            </p>
          </InfoBox>
          <P>
            We encourage you to consider our <strong style={{ color: CREAM }}>10ml Mini</strong> as an introduction to Ethereal Charm before purchasing the 25ml bottle. It contains the identical formula at a fraction of the commitment.
          </P>
          <P>
            By placing an order, you acknowledge and agree that you have read and understood our no-refund policy.
          </P>
        </Section>

        <Section title="Damaged or Defective Items">
          <P>
            While we take every care in packaging your order, if your item arrives damaged or defective, please contact us within <strong style={{ color: CREAM }}>48 hours</strong> of delivery at{' '}
            <a href="mailto:info@theetherealcharm.com" style={{ color: GOLD }}>info@theetherealcharm.com</a>.
          </P>
          <P>Please include:</P>
          <UL>
            <LI>Your order number</LI>
            <LI>A clear photograph of the damaged item and packaging</LI>
            <LI>A brief description of the issue</LI>
          </UL>
          <P>
            We will assess each case individually and, where damage is confirmed, will arrange a replacement at no additional cost. We are unable to process claims for damage reported more than 48 hours after delivery.
          </P>
        </Section>

        <Section title="Lost or Missing Orders">
          <P>
            If your order has not arrived within the estimated delivery window, please first check your tracking information. If tracking shows delivery but you have not received your parcel, please check with neighbours and any safe places that may have been used.
          </P>
          <P>
            If you believe your order is genuinely lost, contact us at{' '}
            <a href="mailto:info@theetherealcharm.com" style={{ color: GOLD }}>info@theetherealcharm.com</a>{' '}
            and we will investigate with the carrier. We will not reship or refund orders that are still within the carrier&apos;s estimated window.
          </P>
        </Section>

        <Section title="Incorrect Address">
          <P>
            Please ensure your delivery address is entered correctly at checkout. Ethereal Charm is not responsible for orders dispatched to an incorrect address provided by the customer. If you notice an error in your address immediately after placing an order, contact us as soon as possible — we may be able to amend it before dispatch, but this cannot be guaranteed.
          </P>
        </Section>

        <Section title="Contact Us">
          <P>
            For any questions about your order, shipping, or this policy, please reach out at{' '}
            <a href="mailto:info@theetherealcharm.com" style={{ color: GOLD }}>info@theetherealcharm.com</a>.
            We aim to respond to all enquiries within one business day.
          </P>
        </Section>

        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(201,146,14,0.12)' }}>
          <Link
            href="/"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,223,160,0.4)' }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
