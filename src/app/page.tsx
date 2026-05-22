import { Header } from "@/components/Header";
import { BusinessValueSection } from "@/components/BusinessValueSection";
import { CasesSection } from "@/components/CasesSection";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { TrustLogos } from "@/components/TrustLogos";
import { WhyUsSection } from "@/components/WhyUsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustLogos />
        <BusinessValueSection />
        <CasesSection />
        <ProcessSection />
        <ServicesSection />
        <WhyUsSection />
        <ResultsSection />
        <TechnologiesSection />
      </main>
    </>
  );
}
