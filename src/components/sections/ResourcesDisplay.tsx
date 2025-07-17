import { motion, AnimatePresence } from "framer-motion";
import { SelectedTopic } from "@/types";
import AgingResourcesContent from "./AgingResourcesContent";
import ComingSoonContent from "./ComingSoonContent";

interface ResourcesDisplayProps {
  selectedTopic: SelectedTopic;
}

export default function ResourcesDisplay({
  selectedTopic,
}: ResourcesDisplayProps) {
  return (
    <div className="min-h-[300px] md:min-h-[400px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {selectedTopic === null && (
          <motion.div
            key="choose-option"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              Choose an option above to see resources
            </p>
          </motion.div>
        )}

        {selectedTopic === "aging" && (
          <motion.div
            key="aging-resources"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <AgingResourcesContent />
          </motion.div>
        )}

        {selectedTopic === "space" && (
          <motion.div
            key="space-resources"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <ComingSoonContent
              topic="Space"
              icon="🚀"
              description="Advanced propulsion, space habitats, and interplanetary exploration technologies."
            />
          </motion.div>
        )}

        {selectedTopic === "education" && (
          <motion.div
            key="education-resources"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <ComingSoonContent
              topic="Education"
              icon="🎓"
              description="Revolutionary approaches to learning, cognitive enhancement, and educational technology."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
