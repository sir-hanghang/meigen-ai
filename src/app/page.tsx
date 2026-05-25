import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import TemplateGallery from "@/components/TemplateGallery";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Quote Generator for Branded Cards | Meigen AI",
  description:
    "Use Meigen AI as an AI quote generator to create original quotes, design branded quote cards, and export social-ready visuals in minutes today.",
  alternates: { canonical: "https://meigenai.org" },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="px-6 md:px-12 py-16 max-w-[980px] mx-auto text-[#a09b94] leading-relaxed">
        <p className="text-lg">
          Meigen AI is an AI quote generator built for creators, brands, coaches,
          and teams that need original quote content without wrestling with blank
          documents or generic templates.
        </p>
        <p className="mt-5">
          Use the AI quote generator to turn a topic into polished copy, choose a
          readable card layout, and export social-ready visuals for Instagram,
          X, LinkedIn, newsletters, and presentations. The AI quote generator keeps
          your brand voice, colors, and format consistent from draft to download.
          Unlike a generic caption tool, this AI quote generator focuses on short,
          memorable lines that remain readable after design export. Teams can use
          the AI quote generator to keep daily quote content aligned with brand
          tone without rebuilding each card from scratch.
        </p>
      </section>
      <HowItWorks />
      <UseCases />
      <TemplateGallery />
      <Pricing />
      <FAQ />
      <FooterCTA />
      <Footer />
    </main>
  );
}
