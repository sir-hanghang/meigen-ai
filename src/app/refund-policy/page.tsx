import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy for Meigen AI.",
};

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-[#f5f0e8]">
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-24">
        <Link href="/" className="inline-block mb-12 text-sm text-[#a09b94] hover:text-[#d4a853] transition-colors">
          ← Back to Home
        </Link>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold mb-8">Refund Policy</h1>
        <p className="text-[#a09b94] mb-12">Last updated: May 12, 2026</p>
        <div className="space-y-10 text-[#a09b94] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">1. Eligibility</h2>
            <p>First-time Pro or Team plan purchases qualify for a full refund within 7 days of purchase, provided you have used less than 20% of your monthly quota.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">2. Non-Refundable</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Renewal charges after the first billing cycle</li>
              <li>Gift cards or promotional credits</li>
              <li>Accounts terminated due to Terms of Service violations</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">3. How to Request</h2>
            <p>Email <a href="mailto:support@meigenai.org" className="text-[#d4a853] hover:underline">support@meigenai.org</a> with your account email and reason. We process refunds within 5-10 business days.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
