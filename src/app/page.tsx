"use client";

import { useState } from "react";
import { ResearchView } from "@/types";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Confetti from "@/components/ui/Confetti";

import PartnerLabsSection from "@/components/sections/PartnerLabsSection";
import ResearchApplicationSection from "@/components/sections/ResearchApplicationSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  const [currentView, setCurrentView] = useState<ResearchView>("selection");
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
  };

  const scrollToApply = () => {
    setCurrentView("selection");
    document.getElementById("research-focus")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Confetti */}
      <Confetti
        isActive={showConfetti}
        onComplete={() => setShowConfetti(false)}
      />

      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen flex flex-col">
        <Header onApplyClick={scrollToApply} />
        <HeroSection onApplyClick={scrollToApply} />
      </section>

      {/* Researchers Section */}
      <PartnerLabsSection />

      {/* Research Focus Selection */}
      <ResearchApplicationSection
        currentView={currentView}
        setCurrentView={setCurrentView}
        triggerConfetti={triggerConfetti}
      />

      {/* CTA Section */}
      <CTASection onApplyClick={scrollToApply} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
