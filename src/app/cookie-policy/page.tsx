import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Meigen AI.",
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-[#f5f0e8]">
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-24">
        <Link href="/" className="inline-block mb-12 text-sm text-[#a09b94] hover:text-[#d4a853] transition-colors">
          ← Back to Home
        </Link>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold mb-8">Cookie Policy</h1>
        <p className="text-[#a09b94] mb-12">Last updated: May 12, 2026</p>
        <div className="space-y-10 text-[#a09b94] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">1. What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help us provide and improve our services.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">2. How We Use Cookies</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-[#f5f0e8]">Essential:</strong> Required for the site to function (authentication, security)</li>
              <li><strong className="text-[#f5f0e8]">Preferences:</strong> Remember your settings and choices</li>
              <li><strong className="text-[#f5f0e8]">Analytics:</strong> Help us understand how visitors interact with our site (with your consent)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#f5f0e8] mb-4">3. Managing Cookies</h2>
            <p>You can control cookies through your browser settings. Note that disabling essential cookies may affect site functionality.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
