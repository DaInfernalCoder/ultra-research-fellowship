"use client";

import { useState } from "react";
import { ResearchView } from "@/types";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyResearchSection from "@/components/sections/WhyResearchSection";
import PartnerLabsSection from "@/components/sections/PartnerLabsSection";
import ResearchApplicationSection from "@/components/sections/ResearchApplicationSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  const [currentView, setCurrentView] = useState<ResearchView>("selection");

  const scrollToApply = () => {
    setCurrentView("selection");
    document.getElementById("research-focus")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen flex flex-col">
        <Header onApplyClick={scrollToApply} />
        <HeroSection onApplyClick={scrollToApply} />
      </section>

      {/* Why Research Section */}
      <WhyResearchSection />

      {/* Researchers Section */}
      <PartnerLabsSection />

      {/* Research Focus Selection */}
      <ResearchApplicationSection
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {/* CTA Section */}
      <CTASection onApplyClick={scrollToApply} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
