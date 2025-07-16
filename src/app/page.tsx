"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ResearchView = "selection" | "aging" | "space" | "education";

export default function Home() {
  const [currentView, setCurrentView] = useState<ResearchView>("selection");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToApply = () => {
    setCurrentView("selection");
    document.getElementById("research-focus")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node)
      ) {
        setIsContactOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-12 md:px-16 lg:px-20 py-8">
          <div className="flex items-center">
            <Image
              src="/Ultra White Logo.png"
              alt="Ultra Research Fellowship"
              width={240}
              height={60}
              priority
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative" ref={contactRef}>
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Contact
              </button>

              <AnimatePresence>
                {isContactOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50"
                  >
                    <div className="px-4 py-2">
                      <div className="text-sm text-gray-600 mb-1">
                        Support email:
                      </div>
                      <a
                        href="mailto:oliver@tryultra.org"
                        className="text-sm text-gray-900 hover:text-blue-600 transition-colors block"
                      >
                        oliver@tryultra.org
                      </a>
                    </div>

                    <div className="border-t border-gray-100 my-2"></div>

                    <a
                      href="https://cal.com/oliver-zou-xyqehl/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      Book Counseling Session
                    </a>

                    <a
                      href="https://discord.com/invite/nwxDvHrQS2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      Join Discord
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={scrollToApply}
              className="border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
            >
              Apply
            </button>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col items-start justify-start pt-12 md:pt-16 px-12 md:px-16 lg:px-20 max-w-6xl mx-auto w-full">
          {/* Descriptive text */}
          <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl leading-relaxed">
            The Ultra Research Fellowship directly connects the top 1% of
            ambitious high school students with top PhD researchers to conduct
            research in select fields. Stop wasting time cold-emailing thousands
            of professors. Start becoming an expert in your field.
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Work on the world&apos;s
            <br />
            most talent-starved
            <br />
            problems.
          </h1>

          {/* Yellow underline accent */}
          <div className="w-24 h-1 bg-yellow-400 mb-12"></div>

          <button
            onClick={scrollToApply}
            className="inline-flex items-center text-lg md:text-xl font-medium hover:text-gray-300 transition-colors group"
          >
            Apply Now For Cohort 1
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </main>
      </section>

      {/* Researchers Section */}
      <section className="min-h-screen flex items-center justify-center py-20 md:py-32 px-12 md:px-16 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16">
            Work with Researchers from groundbreaking labs
          </h2>

          {/* Lab Logos */}
          <div className="flex items-center justify-center gap-16 md:gap-24">
            <div className="flex items-center">
              <a
                href="https://age1.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/Age1.png"
                  alt="Age1"
                  width={200}
                  height={80}
                  className="h-16 md:h-20 lg:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://norn.group/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/Norn Group Transparent Logo.png"
                  alt="Norn Group"
                  width={200}
                  height={80}
                  className="h-16 md:h-20 lg:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Selection */}
      <section
        id="research-focus"
        className="min-h-screen flex items-center justify-center py-20 md:py-32 px-12 md:px-16 lg:px-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            {currentView === "selection" && (
              <motion.div
                key="selection"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-20">
                  Select Your Research Focus
                </h2>

                {/* Research Focus Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Aging Research Card */}
                  <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-600 transition-colors">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">💛</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4">
                        Aging Research
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        Breakthrough research in longevity, cellular aging, and
                        life extension technologies.
                      </p>

                      {/* Working with labs section */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">
                          Working with labs like
                        </p>
                        <div className="flex items-center gap-3">
                          <Image
                            src="/Age1.png"
                            alt="Age1"
                            width={60}
                            height={24}
                            className="h-8 w-auto opacity-60"
                          />
                          <Image
                            src="/Norn Group Transparent Logo.png"
                            alt="Norn Group"
                            width={60}
                            height={24}
                            className="h-8 w-auto opacity-60"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">
                          Available Now
                        </span>
                      </div>
                      <button
                        onClick={() => setCurrentView("aging")}
                        className="w-full bg-yellow-400 text-black font-medium py-3 px-6 rounded hover:bg-yellow-300 transition-colors"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>

                  {/* Space Research Card */}
                  <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-600 transition-colors">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4">
                        Space Research
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        Advanced propulsion, space habitats, and interplanetary
                        exploration technologies.
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <span className="text-sm text-gray-400">
                          Coming Soon
                        </span>
                      </div>
                      <button className="w-full border border-gray-600 text-gray-400 font-medium py-3 px-6 rounded cursor-not-allowed">
                        Coming Soon
                      </button>
                    </div>
                  </div>

                  {/* Education Research Card */}
                  <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-600 transition-colors">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🎓</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4">
                        Education Research
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        Revolutionary approaches to learning, cognitive
                        enhancement, and educational technology.
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <span className="text-sm text-gray-400">
                          Coming Soon
                        </span>
                      </div>
                      <button className="w-full border border-gray-600 text-gray-400 font-medium py-3 px-6 rounded cursor-not-allowed">
                        Coming Soon
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === "aging" && (
              <motion.div
                key="aging"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Back Button */}
                <button
                  onClick={() => setCurrentView("selection")}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Research Focus
                </button>

                {/* Aging Research Application */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Side - Information */}
                  <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                      Aging Research
                      <br />
                      Fellowship
                    </h2>

                    <p className="text-gray-300 mb-8 leading-relaxed">
                      Join the frontier of longevity research. Work on
                      breakthrough approaches to understanding and reversing the
                      aging process.
                    </p>

                    <p className="text-gray-300 mb-12 leading-relaxed">
                      Our aging research track focuses on cellular senescence,
                      regenerative medicine, and life extension technologies
                      that could transform human healthspan.
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">
                        Research Areas Include:
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Cellular reprogramming and rejuvenation</li>
                        <li>• Senescence reversal mechanisms</li>
                        <li>• Regenerative medicine applications</li>
                        <li>• Longevity biomarker development</li>
                        <li>• Anti-aging therapeutic interventions</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Side - Application Form */}
                  <div className="border border-gray-700 rounded-lg p-8">
                    <h3 className="text-2xl font-bold mb-6">Ready to Apply?</h3>

                    <p className="text-gray-300 mb-6">
                      Applications for the Aging Research track are now open.
                      Join researchers working on humanity&apos;s greatest
                      challenge.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-yellow-400"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span className="text-gray-300">
                          $200,000 funding over 2 years
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-yellow-400"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span className="text-gray-300">
                          Expert mentorship network
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-yellow-400"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span className="text-gray-300">
                          Research collaboration opportunities
                        </span>
                      </div>
                    </div>

                    <button className="w-full bg-yellow-400 text-black font-medium py-4 px-6 rounded hover:bg-yellow-300 transition-colors text-lg">
                      Apply for Aging Research
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center py-20 md:py-32 px-12 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Start Your Research Journey
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Join the Ultra Research Fellowship and work on problems that matter.
          </p>

          <button
            onClick={scrollToApply}
            className="bg-yellow-400 text-black font-medium py-4 px-8 rounded text-lg hover:bg-yellow-300 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-12 md:px-16 lg:px-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Ultra, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://useultra.ai/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="https://useultra.ai/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://discord.gg/nwxDvHrQS2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
