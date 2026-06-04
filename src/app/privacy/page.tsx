import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ethereal Charm',
  description: 'Privacy Policy for Ethereal Charm. Learn how we collect, use, and protect your personal data in accordance with UK GDPR.',
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

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(245,223,160,0.38)', letterSpacing: '0.05em' }}>
          Last updated: June 2026
        </p>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">

        <Section title="1. Who We Are">
          <P>
            Ethereal Charm (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a luxury fragrance brand based in London, United Kingdom. We operate the website at{' '}
            <a href="https://www.theetherealcharm.com" style={{ color: GOLD }}>www.theetherealcharm.com</a>.
          </P>
          <P>
            If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at{' '}
            <a href="mailto:info@theetherealcharm.com" style={{ color: GOLD }}>info@theetherealcharm.com</a>.
          </P>
        </Section>

        <Section title="2. Data We Collect">
          <P>We collect the following categories of personal data:</P>
          <UL>
            <LI><strong style={{ color: CREAM }}>Identity data</strong> — your name, as provided during checkout.</LI>
            <LI><strong style={{ color: CREAM }}>Contact data</strong> — your email address and delivery address.</LI>
            <LI><strong style={{ color: CREAM }}>Transaction data</strong> — details of products purchased and payment confirmation. We do not store card details — all payment processing is handled by Stripe.</LI>
            <LI><strong style={{ color: CREAM }}>Marketing data</strong> — your email address if you voluntarily subscribe to our mailing list.</LI>
            <LI><strong style={{ color: CREAM }}>Technical data</strong> — IP address, browser type, device type, and pages visited, collected automatically via cookies and analytics tools.</LI>
          </UL>
        </Section>

        <Section title="3. How We Use Your Data">
          <P>We use your personal data for the following purposes:</P>
          <UL>
            <LI>To process and fulfil your orders, including sending order confirmations and shipping updates.</LI>
            <LI>To send marketing emails if you have subscribed — you may unsubscribe at any time via the link in any email.</LI>
            <LI>To improve our website and understand how visitors use it.</LI>
            <LI>To comply with legal and regulatory obligations.</LI>
          </UL>
          <P>
            We will never sell your personal data to third parties or use it for any purpose beyond what is described above.
          </P>
        </Section>

        <Section title="4. Legal Basis for Processing">
          <P>Under UK GDPR, we process your data on the following legal bases:</P>
          <UL>
            <LI><strong style={{ color: CREAM }}>Contract</strong> — processing your order and communicating about it.</LI>
            <LI><strong style={{ color: CREAM }}>Consent</strong> — sending marketing emails (you can withdraw consent at any time).</LI>
            <LI><strong style={{ color: CREAM }}>Legitimate interests</strong> — improving our website and preventing fraud.</LI>
          </UL>
        </Section>

        <Section title="5. Third-Party Processors">
          <P>We share your data only with trusted third-party service providers who process it on our behalf:</P>
          <UL>
            <LI><strong style={{ color: CREAM }}>Stripe</strong> — payment processing. Stripe is PCI-DSS compliant and does not share your card data with us.</LI>
            <LI><strong style={{ color: CREAM }}>Brevo (Sendinblue)</strong> — email marketing and transactional emails.</LI>
            <LI><strong style={{ color: CREAM }}>Vercel</strong> — website hosting and infrastructure.</LI>
          </UL>
          <P>All processors are contractually obligated to protect your data and use it only as instructed by us.</P>
        </Section>

        <Section title="6. Cookies">
          <P>
            Our website uses cookies to function correctly and to help us understand how visitors use the site. Cookies are small text files stored on your device. We use:
          </P>
          <UL>
            <LI><strong style={{ color: CREAM }}>Essential cookies</strong> — required for the site to work (e.g., shopping cart session).</LI>
            <LI><strong style={{ color: CREAM }}>Analytics cookies</strong> — to understand traffic patterns and improve the site. Data is anonymised where possible.</LI>
          </UL>
          <P>You can disable cookies via your browser settings, though this may affect site functionality.</P>
        </Section>

        <Section title="7. Data Retention">
          <P>
            We retain your personal data for as long as necessary to fulfil the purposes described above. Order data is retained for 7 years to comply with UK tax and accounting regulations. Marketing data is retained until you unsubscribe.
          </P>
        </Section>

        <Section title="8. Your Rights">
          <P>Under UK GDPR, you have the following rights regarding your personal data:</P>
          <UL>
            <LI><strong style={{ color: CREAM }}>Access</strong> — request a copy of the data we hold about you.</LI>
            <LI><strong style={{ color: CREAM }}>Rectification</strong> — request correction of inaccurate data.</LI>
            <LI><strong style={{ color: CREAM }}>Erasure</strong> — request deletion of your data (&quot;right to be forgotten&quot;), subject to legal obligations.</LI>
            <LI><strong style={{ color: CREAM }}>Restriction</strong> — request that we limit how we use your data.</LI>
            <LI><strong style={{ color: CREAM }}>Portability</strong> — request your data in a structured, machine-readable format.</LI>
            <LI><strong style={{ color: CREAM }}>Objection</strong> — object to processing based on legitimate interests.</LI>
            <LI><strong style={{ color: CREAM }}>Withdraw consent</strong> — unsubscribe from marketing at any time.</LI>
          </UL>
          <P>
            To exercise any of these rights, email us at{' '}
            <a href="mailto:info@theetherealcharm.com" style={{ color: GOLD }}>info@theetherealcharm.com</a>.
            We will respond within 30 days.
          </P>
        </Section>

        <Section title="9. Complaints">
          <P>
            If you believe we have handled your data incorrectly, you have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at{' '}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>ico.org.uk</a>.
          </P>
        </Section>

        <Section title="10. Changes to This Policy">
          <P>
            We may update this Privacy Policy from time to time. Any material changes will be posted on this page with an updated date. We encourage you to review this page periodically.
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
