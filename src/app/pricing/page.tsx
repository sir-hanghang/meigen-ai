import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "AI Quote Generator Pricing Plans | Meigen AI",
  description:
    "Compare AI quote generator pricing for Free, Pro, and Team plans. Choose the right Meigen AI plan for quote cards, exports, and creative teams.",
  openGraph: {
    title: "AI Quote Generator Pricing Plans | Meigen AI",
    description:
      "Compare AI quote generator pricing for Free, Pro, and Team plans. Choose the right Meigen AI plan for quote cards, exports, and teams.",
  },
};

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div className="pt-24">
        <section className="px-6 md:px-12 pt-10 max-w-[980px] mx-auto text-[#a09b94] leading-relaxed">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#f5f0e8] font-semibold mb-5">
            AI Quote Generator Pricing for Creators and Teams
          </h1>
          <p>
            Compare plans across Free, Pro, and Team options. Meigen AI keeps
            pricing simple so you can start with basic quote cards, then upgrade
            when you need more exports, brand controls, and collaboration.
          </p>
          <p className="mt-5">
            The plan structure is designed for gradual adoption: test the core
            workflow, validate output quality with your audience, then move to a
            paid tier when higher volume, shared assets, and team review become
            part of the publishing process.
          </p>
        </section>
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}
