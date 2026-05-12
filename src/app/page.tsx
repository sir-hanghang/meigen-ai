import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import TemplateGallery from "@/components/TemplateGallery";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
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
