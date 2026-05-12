import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing for Meigen AI. Free, Pro, and Team plans. Start free and upgrade when you need more power.",
  openGraph: {
    title: "Pricing — Meigen AI",
    description:
      "Simple pricing for Meigen AI. Free, Pro, and Team plans. Start free and upgrade when you need more power.",
  },
};

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div className="pt-24">
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}
