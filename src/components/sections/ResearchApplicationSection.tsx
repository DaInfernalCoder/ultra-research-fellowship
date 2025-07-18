"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResearchView, SelectedTopic } from "@/types";
import ResearchFocusSection from "./ResearchFocusSection";
import ResourcesDisplay from "./ResourcesDisplay";
import AgingResearchSection from "./AgingResearchSection";

interface ResearchApplicationSectionProps {
  currentView: ResearchView;
  setCurrentView: (view: ResearchView) => void;
}

export default function ResearchApplicationSection({
  currentView,
  setCurrentView,
}: ResearchApplicationSectionProps) {
  const [selectedTopic, setSelectedTopic] = useState<SelectedTopic>("aging");

  return (
    <section
      id="research-focus"
      className="min-h-screen py-16 md:py-24 px-6 md:px-12 lg:px-16 xl:px-20 max-w-6xl mx-auto w-full"
    >
      <AnimatePresence mode="wait">
        {currentView === "selection" && (
          <motion.div
            key="selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="space-y-8 md:space-y-12"
          >
            <ResearchFocusSection
              currentView={currentView}
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
            />

            <ResourcesDisplay selectedTopic={selectedTopic} />
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
    </section>
  );
}
