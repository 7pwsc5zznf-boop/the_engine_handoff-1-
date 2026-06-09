import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import HeroSection from "@/components/sections/hero-section";
import RecognitionSection from "@/components/sections/recognition-section";
import BreakdownSection from "@/components/sections/breakdown-section";
import WhySection from "@/components/sections/why-section";
import CredibilitySection from "@/components/sections/credibility-section";
import WhoWeWorkWithSection from "@/components/sections/who-we-work-with-section";
import ConsequencesSection from "@/components/sections/consequences-section";
import EngineSection from "@/components/sections/engine-section";
import CtaSection from "@/components/sections/cta-section";
import ContactSection from "@/components/sections/contact-section";

export default function LandingPage() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <SiteHeader />
      <main>
        <HeroSection />
        <RecognitionSection />
        <BreakdownSection />
        <WhySection />
        <CredibilitySection />
        <WhoWeWorkWithSection />
        <ConsequencesSection />
        <EngineSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
