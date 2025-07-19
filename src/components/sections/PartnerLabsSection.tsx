"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function PartnerLabsSection() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const age1Description =
    "Age1 is an exciting force in the longevity space, connecting over 40 labs and startups across the aging ecosystem from biotech founders to scientists and investors to accelerate breakthroughs in human healthspan. By bridging the gap between research and commercialization, they have become a central hub for aging innovation.";

  const nornDescription =
    "Norn Group collaborates with over 100 labs worldwide, creating a powerful global network that drives forward radical longevity science. Their strength lies in uniting top researchers, institutions, and companies to push the boundaries of what is possible in aging and health.";

  return (
    <section className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20 mx-auto w-full">
      {/* How It Works */}
      <div className="w-full text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
          How It Works
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Stop wasting time cold-emailing thousands of professors. Start
          becoming an expert in your field.
        </p>

        {/* Funnel */}
        <div className="relative w-full mx-auto">
          <Image
            src="/space_funnel.png"
            alt="Research Process Funnel"
            width={4000}
            height={4000}
            className="w-full h-auto"
            priority
          />

          {/* Partner Labs at the mouth of the funnel */}
          <div className="absolute bottom-[43%] right-[10%] sm:right-[7%] md:right-[6%] lg:right-[15%] flex flex-col items-center gap-2 sm:gap-3">
            <p className="text-xs sm:text-sm md:text-base text-gray-200 font-medium drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]"></p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="https://age1.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredLogo("age1")}
                onMouseLeave={() => setHoveredLogo(null)}
                onMouseMove={handleMouseMove}
              >
                <Image
                  src="/Age1.png"
                  alt="Age1"
                  width={120}
                  height={48}
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] filter brightness-110"
                />
              </a>
              <a
                href="https://norn.group/"
                target="_blank"
                rel="noopener noreferrer"
                className="block opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredLogo("norn")}
                onMouseLeave={() => setHoveredLogo(null)}
                onMouseMove={handleMouseMove}
              >
                <Image
                  src="/Norn Group Transparent Logo.png"
                  alt="Norn Group"
                  width={100}
                  height={40}
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-30 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] filter brightness-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Tooltips */}
      <AnimatePresence>
        {hoveredLogo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed z-50 pointer-events-none"
            style={{
              left: mousePosition.x + 15,
              top: mousePosition.y - 10,
              transform: "translateY(-100%)",
            }}
          >
            <div className="bg-white text-black p-4 rounded-lg shadow-xl max-w-xs text-sm leading-relaxed border border-gray-200">
              <div className="font-semibold mb-2 text-gray-900">
                {hoveredLogo === "age1" ? "Age1" : "Norn Group"}
              </div>
              <div className="text-gray-700">
                {hoveredLogo === "age1" ? age1Description : nornDescription}
              </div>
              {/* Arrow pointing down */}
              <div className="absolute top-full left-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
