import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Meigen AI. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-[#f5f0e8]">
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-24">
        <Link
          href="/"
          className="inline-block mb-12 text-sm text-[#a09b94] hover:text-[#d4a853] transition-colors"
        >
          ← Back to Home
        </Link>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold mb-8">
          Privacy Policy
        </h1>
        <p className="text-[#a09b94] mb-12">Last updated: May 12, 2026</p>

        <div className="space-y-10 text-[#a09b94] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">
              1. Introduction
            </h2>
            <p>
              Meigen AI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-[#f5f0e8]">Account data:</strong> email
                address, password hash, and optional profile information.
              </li>
              <li>
                <strong className="text-[#f5f0e8]">Usage data:</strong> quotes
                generated, templates selected, export counts, and feature
                interactions.
              </li>
              <li>
                <strong className="text-[#f5f0e8]">Payment data:</strong>{" "}
                processed securely by Stripe. We do not store full credit card
                numbers.
              </li>
              <li>
                <strong className="text-[#f5f0e8]">Brand assets:</strong>{" "}
                uploaded logos, color preferences, and font selections for
                template rendering.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process payments and manage subscriptions</li>
              <li>To improve our AI models and template recommendations</li>
              <li>To communicate product updates and billing information</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">
              4. Data Sharing
            </h2>
            <p>
              We do not sell your personal data. We share data only with:
              trusted service providers (Stripe for payments, Cloudflare for
              hosting), and when required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">
              5. Your Rights (GDPR / CCPA)
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Access, correct, or delete your personal data</li>
              <li>Export your data in a portable format</li>
              <li>Object to certain processing activities</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:support@meigenai.org"
                className="text-[#d4a853] hover:underline"
              >
                support@meigenai.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">
              6. Data Retention
            </h2>
            <p>
              We retain your data for as long as your account is active or as
              needed to provide services. Upon account deletion, we remove
              personal data within 30 days, except where retention is required
              by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">
              7. Cookies
            </h2>
            <p>
              We use essential cookies for authentication and functional
              cookies for preferences. We use analytics cookies only with your
              consent. See our{" "}
              <Link
                href="/cookie-policy"
                className="text-[#d4a853] hover:underline"
              >
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">
              8. Contact Us
            </h2>
            <p>
              For privacy-related questions, email{" "}
              <a
                href="mailto:support@meigenai.org"
                className="text-[#d4a853] hover:underline"
              >
                support@meigenai.org
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
