"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ResearchView } from "@/types";
import ResearchFocusSection from "./ResearchFocusSection";
import AgingResearchSection from "./AgingResearchSection";

interface ResearchApplicationSectionProps {
  currentView: ResearchView;
  setCurrentView: (view: ResearchView) => void;
}

export default function ResearchApplicationSection({
  currentView,
  setCurrentView,
}: ResearchApplicationSectionProps) {
  return (
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
              <ResearchFocusSection
                currentView={currentView}
                setCurrentView={setCurrentView}
              />
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
              <AgingResearchSection
                currentView={currentView}
                setCurrentView={setCurrentView}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
