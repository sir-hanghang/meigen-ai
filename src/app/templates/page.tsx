import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplateGallery from "@/components/TemplateGallery";

export const metadata: Metadata = {
  title: "Quote Card Templates",
  description:
    "Browse 20+ brand-ready quote card templates. Instagram, X, LinkedIn, newsletter sizes. Customize with your logo and colors in one click.",
  openGraph: {
    title: "Quote Card Templates — Meigen AI",
    description:
      "Browse 20+ brand-ready quote card templates. Instagram, X, LinkedIn, newsletter sizes.",
  },
};

export default function TemplatesPage() {
  return (
    <main>
      <Header />
      <div className="pt-24">
        <TemplateGallery />
      </div>
      <Footer />
    </main>
  );
}
