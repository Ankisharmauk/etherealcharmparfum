import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ethereal Charm',
  description: 'Privacy Policy for Ethereal Charm (ABN 77 564 307 579). How we collect, use, and protect your personal information under the Australian Privacy Act 1988.',
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

        <Section title="1. About This Policy">
          <P>
            Ethereal Charm (ABN 77 564 307 579) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and disclose personal information in accordance with the <strong style={{ color: CREAM }}>Australian Privacy Act 1988</strong> (Cth) and the Australian Privacy Principles (APPs).
          </P>
          <P>
            We operate the website at{' '}
            <a href="https://www.theetherealcharm.com" style={{ color: GOLD }}>www.theetherealcharm.com</a>.
            For any privacy-related enquiries, please contact us at{' '}
            <a href="mailto:info@theetherealcharm.com" style={{ color: GOLD }}>info@theetherealcharm.com</a>.
          </P>
        </Section>

        <Section title="2. What Personal Information We Collect">
          <P>We may collect the following types of personal information:</P>
          <UL>
            <LI><strong style={{ color: CREAM }}>Identity information</strong> — your name, as provided at checkout.</LI>
            <LI><strong style={{ color: CREAM }}>Contact information</strong> — your email address and delivery address.</LI>
            <LI><strong style={{ color: CREAM }}>Transaction information</strong> — details of products you purchase and order confirmation. We do not store payment card details — all card processing is handled by Stripe.</LI>
            <LI><strong style={{ color: CREAM }}>Marketing preferences</strong> — your email address if you voluntarily subscribe to our mailing list.</LI>
            <LI><strong style={{ color: CREAM }}>Technical information</strong> — IP address, browser type, device type, and pages visited, collected automatically via cookies and analytics tools.</LI>
          </UL>
          <P>
            We only collect personal information that is reasonably necessary for our business functions. You may choose not to provide certain information, but this may limit our ability to process your order or respond to your enquiry.
          </P>
        </Section>

        <Section title="3. How We Collect Personal Information">
          <P>We collect personal information:</P>
          <UL>
            <LI>Directly from you when you place an order, create an account, contact us, or subscribe to our mailing list.</LI>
            <LI>Automatically through cookies and analytics when you browse our website.</LI>
            <LI>From third-party payment processors (Stripe) in connection with your purchase.</LI>
          </UL>
        </Section>

        <Section title="4. How We Use Your Personal Information">
          <P>We use your personal information to:</P>
          <UL>
            <LI>Process and fulfil your orders, including sending order confirmations and shipping updates.</LI>
            <LI>Send marketing communications if you have opted in — you may unsubscribe at any time.</LI>
            <LI>Respond to your enquiries and provide customer support.</LI>
            <LI>Improve our website and understand how visitors use it.</LI>
            <LI>Comply with our legal obligations.</LI>
          </UL>
          <P>
            We will not use or disclose your personal information for purposes other than those described in this policy without your consent, unless required or authorised by law.
          </P>
        </Section>

        <Section title="5. Disclosure of Personal Information">
          <P>We may disclose your personal information to the following third-party service providers who assist us in operating our business:</P>
          <UL>
            <LI><strong style={{ color: CREAM }}>Stripe</strong> — secure payment processing. Stripe does not share your card details with us and is PCI-DSS compliant.</LI>
            <LI><strong style={{ color: CREAM }}>Brevo (Sendinblue)</strong> — email marketing and transactional emails.</LI>
            <LI><strong style={{ color: CREAM }}>Vercel</strong> — website hosting and infrastructure.</LI>
          </UL>
          <P>
            These providers are authorised to use your information only as necessary to provide services to us. We do not sell your personal information to any third party.
          </P>
          <P>
            Some of our service providers are located outside Australia (including the United States and Europe). By using our website and providing your information, you consent to your information being stored and processed in these countries, which may have different privacy protections than Australia.
          </P>
        </Section>

        <Section title="6. Cookies">
          <P>
            Our website uses cookies — small text files stored on your device — to provide a functional and improved experience. We use:
          </P>
          <UL>
            <LI><strong style={{ color: CREAM }}>Essential cookies</strong> — required for the site to function correctly (e.g., shopping cart).</LI>
            <LI><strong style={{ color: CREAM }}>Analytics cookies</strong> — to understand how visitors use the site and improve it. Data is anonymised where possible.</LI>
          </UL>
          <P>You can disable cookies via your browser settings, though this may affect site functionality.</P>
        </Section>

        <Section title="7. Data Security">
          <P>
            We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorised access, modification, or disclosure. All transactions are encrypted via SSL. Payment data is handled exclusively by Stripe and never stored on our servers.
          </P>
          <P>
            While we take all reasonable precautions, no data transmission over the internet can be guaranteed as fully secure. You provide your information at your own risk.
          </P>
        </Section>

        <Section title="8. Data Retention">
          <P>
            We retain your personal information for as long as necessary to fulfil the purposes described in this policy, or as required by law. Order and transaction data is retained for 7 years to comply with applicable tax and accounting obligations. Marketing data is retained until you unsubscribe or request deletion.
          </P>
        </Section>

        <Section title="9. Your Rights">
          <P>Under the Australian Privacy Act 1988, you have the right to:</P>
          <UL>
            <LI><strong style={{ color: CREAM }}>Access</strong> — request access to the personal information we hold about you.</LI>
            <LI><strong style={{ color: CREAM }}>Correction</strong> — request that we correct any personal information that is inaccurate, out of date, incomplete, or misleading.</LI>
            <LI><strong style={{ color: CREAM }}>Complaint</strong> — make a complaint if you believe we have breached the Australian Privacy Principles.</LI>
          </UL>
          <P>
            To make a request or enquiry about your personal information, contact us at{' '}
            <a href="mailto:info@theetherealcharm.com" style={{ color: GOLD }}>info@theetherealcharm.com</a>.
            We will respond within a reasonable time (generally within 30 days).
          </P>
        </Section>

        <Section title="10. Privacy Complaints">
          <P>
            If you believe we have not handled your personal information in accordance with the Australian Privacy Principles, please contact us first at{' '}
            <a href="mailto:info@theetherealcharm.com" style={{ color: GOLD }}>info@theetherealcharm.com</a>{' '}
            so we can attempt to resolve the matter.
          </P>
          <P>
            If you are not satisfied with our response, you may lodge a complaint with the{' '}
            <strong style={{ color: CREAM }}>Office of the Australian Information Commissioner (OAIC)</strong> at{' '}
            <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>oaic.gov.au</a>.
          </P>
        </Section>

        <Section title="11. Changes to This Policy">
          <P>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically to stay informed about how we protect your information.
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
