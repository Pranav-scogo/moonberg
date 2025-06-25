import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StickyNavigation from "@/components/StickyNavigation";
import ValueProposition from "@/components/ValueProposition";
import AISection from "@/components/AISection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import SocialProofSection from "@/components/SocialProofSection";
import GetStartedSection from "@/components/GetStartedSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />

        <StickyNavigation />
        
        <CapabilitiesSection />
        {/* <ValueProposition /> */}
        <AISection />
        <IntegrationsSection />
        <SocialProofSection />
        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
}
