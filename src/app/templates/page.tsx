import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplateGallery from "@/components/TemplateGallery";

export const metadata: Metadata = {
  title: "Quote Card Templates for Social Media | Meigen AI",
  description:
    "Browse quote card templates for Instagram, X, LinkedIn, and newsletters. Customize colors, logos, formats, and export polished visuals fast.",
  openGraph: {
    title: "Quote Card Templates for Social Media | Meigen AI",
    description:
      "Browse quote card templates for Instagram, X, LinkedIn, and newsletters. Customize colors, logos, formats, and export polished visuals fast.",
  },
};

export default function TemplatesPage() {
  return (
    <main>
      <Header />
      <div className="pt-24">
        <section className="px-6 md:px-12 pt-10 max-w-[980px] mx-auto text-[#a09b94] leading-relaxed">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#f5f0e8] font-semibold mb-5">
            Quote Card Templates for Every Channel
          </h1>
          <p>
            Explore layouts made specifically for readable quotes, not
            repurposed social graphics. These designs help you keep typography,
            spacing, contrast, and brand accents consistent across square,
            portrait, and widescreen exports.
          </p>
          <p className="mt-5">
            Each layout is built around a quote-first hierarchy: clear headline
            rhythm, restrained decoration, and export sizes that fit common
            publishing channels. Pick a visual direction, apply your colors, add
            a logo when needed, and reuse the same system for campaigns,
            newsletters, launch posts, and evergreen thought-leadership content.
            The gallery also helps compare mood, contrast, and composition before
            committing to a final export, so teams can keep a consistent visual
            language across campaigns without opening a separate design tool.
          </p>
        </section>
        <TemplateGallery />
      </div>
      <Footer />
    </main>
  );
}
