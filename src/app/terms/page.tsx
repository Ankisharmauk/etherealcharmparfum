import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Ethereal Charm',
  description: 'Terms and Conditions for purchasing from Ethereal Charm. Please read before placing an order.',
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

export default function TermsPage() {
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
          Legal
        </p>
        <h1 className="font-light" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', color: CREAM }}>
          Terms &amp; Conditions
        </h1>
        <p className="mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(245,223,160,0.38)', letterSpacing: '0.05em' }}>
          Last updated: June 2026
        </p>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">

        <Section title="1. About Us">
          <P>
            These Terms and Conditions govern your use of the Ethereal Charm website at{' '}
            <a href="https://www.theetherealcharm.com" style={{ color: GOLD }}>www.theetherealcharm.com</a>{' '}
            and any purchase you make from us. By placing an order, you agree to these terms in full.
          </P>
          <P>
            Ethereal Charm is a luxury fragrance brand based in London, United Kingdom. For enquiries, contact us at{' '}
            <a href="mailto:info@theetherealcharm.com" style={{ color: GOLD }}>info@theetherealcharm.com</a>.
          </P>
        </Section>

        <Section title="2. Use of This Website">
          <P>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</P>
          <UL>
            <LI>Reproduce, duplicate, or copy any content from this website without our written permission.</LI>
            <LI>Use the website to transmit unsolicited commercial communications.</LI>
            <LI>Attempt to gain unauthorised access to any part of the website or its underlying infrastructure.</LI>
            <LI>Use the website in any way that causes or may cause damage to it or impairs its availability.</LI>
          </UL>
        </Section>

        <Section title="3. Products and Pricing">
          <P>
            All products are subject to availability. We reserve the right to discontinue any product at any time without notice.
          </P>
          <P>
            Prices are displayed in GBP (British Pounds Sterling) and are inclusive of any applicable taxes. We reserve the right to change prices at any time, but changes will not affect orders already confirmed.
          </P>
          <P>
            We take care to ensure product descriptions are accurate. However, we do not warrant that descriptions, images, or other content are entirely accurate, complete, or current. Product images are for illustrative purposes and slight variations in appearance may occur.
          </P>
        </Section>

        <Section title="4. Orders and Contract Formation">
          <P>
            Placing an order constitutes an offer to purchase. A binding contract is formed when we confirm your order by email. We reserve the right to decline or cancel any order at our discretion, in which case any payment taken will be fully refunded.
          </P>
          <P>
            You must be at least 18 years of age to purchase from this website. By placing an order, you confirm that you meet this requirement.
          </P>
        </Section>

        <Section title="5. Payment">
          <P>
            All payments are processed securely through Stripe. We accept major credit and debit cards. We do not store your card details — all payment data is handled exclusively by Stripe in accordance with PCI-DSS standards.
          </P>
          <P>
            Your order will not be processed or dispatched until payment has been confirmed.
          </P>
        </Section>

        <Section title="6. Shipping">
          <P>
            Please refer to our{' '}
            <Link href="/shipping" style={{ color: GOLD }}>Shipping &amp; Returns</Link>{' '}
            page for full details of delivery timescales, costs, and our returns policy.
          </P>
        </Section>

        <Section title="7. No Refund Policy">
          <P>
            Due to the nature of our products — luxury fragrance — all sales are final. We do not accept returns or offer refunds except in the case of goods that are damaged or defective on arrival. Please see our{' '}
            <Link href="/shipping" style={{ color: GOLD }}>Shipping &amp; Returns</Link>{' '}
            page for full details.
          </P>
          <P>
            Nothing in this policy excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred by the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010) or any other applicable consumer protection legislation that cannot lawfully be excluded.
          </P>
        </Section>

        <Section title="8. Intellectual Property">
          <P>
            All content on this website — including but not limited to text, images, graphics, logo, brand name, and fragrance formulations — is the intellectual property of Ethereal Charm and is protected by copyright and other applicable laws. Nothing on this website grants you a licence or right to use any intellectual property without our prior written consent.
          </P>
        </Section>

        <Section title="9. Limitation of Liability">
          <P>
            To the fullest extent permitted by law, Ethereal Charm shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or your purchase of our products. Our total liability to you shall not exceed the amount paid for the product(s) in question.
          </P>
          <P>
            Nothing in these Terms limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under applicable law.
          </P>
        </Section>

        <Section title="10. Privacy">
          <P>
            Your use of this website and any data you provide is governed by our{' '}
            <Link href="/privacy" style={{ color: GOLD }}>Privacy Policy</Link>,
            which forms part of these Terms and Conditions.
          </P>
        </Section>

        <Section title="11. Governing Law">
          <P>
            These Terms and Conditions are governed by and construed in accordance with the laws of Australia. Any disputes arising under these Terms shall be subject to the jurisdiction of the courts of Australia.
          </P>
          <P>
            For customers located in Australia, these Terms are subject to the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010), which provides consumer guarantees that cannot be excluded by contract. ABN 77 564 307 579.
          </P>
        </Section>

        <Section title="12. Changes to These Terms">
          <P>
            We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated date. Your continued use of the website following any changes constitutes your acceptance of the revised Terms.
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
