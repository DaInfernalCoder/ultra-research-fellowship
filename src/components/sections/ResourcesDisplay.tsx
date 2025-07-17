import { motion, AnimatePresence } from "framer-motion";
import { SelectedTopic, ThemeColors } from "@/types";
import AgingResourcesContent from "./AgingResourcesContent";
import ComingSoonContent from "./ComingSoonContent";

interface ResourcesDisplayProps {
  selectedTopic: SelectedTopic;
  triggerConfetti: () => void;
}

// Theme color mapping based on research area
const getThemeColors = (topic: SelectedTopic): ThemeColors => {
  switch (topic) {
    case "aging":
      return {
        primary: "text-[#00d2a0]",
        secondary: "text-[#33deb3]",
        accent: "bg-[#00d2a0]",
        accentHover: "hover:bg-[#33deb3]",
        gradient: "from-[#00d2a0] to-[#66e6c6]",
        gradientHover: "hover:from-[#33deb3] hover:to-[#80ebd1]",
        icon: "text-[#00d2a0]",
        button: "bg-[#00d2a0] hover:bg-[#33deb3]",
        buttonText: "text-black",
      };
    case "space":
      return {
        primary: "text-blue-400",
        secondary: "text-blue-300",
        accent: "bg-blue-400",
        accentHover: "hover:bg-blue-300",
        gradient: "from-blue-400 to-blue-200",
        gradientHover: "hover:from-blue-300 hover:to-blue-100",
        icon: "text-blue-400",
        button: "bg-blue-400 hover:bg-blue-300",
        buttonText: "text-black",
      };
    case "education":
      return {
        primary: "text-yellow-400",
        secondary: "text-yellow-300",
        accent: "bg-yellow-400",
        accentHover: "hover:bg-yellow-300",
        gradient: "from-yellow-400 to-yellow-200",
        gradientHover: "hover:from-yellow-300 hover:to-yellow-100",
        icon: "text-yellow-400",
        button: "bg-yellow-400 hover:bg-yellow-300",
        buttonText: "text-black",
      };
    default:
      return {
        primary: "text-gray-400",
        secondary: "text-gray-300",
        accent: "bg-gray-400",
        accentHover: "hover:bg-gray-300",
        gradient: "from-gray-400 to-gray-200",
        gradientHover: "hover:from-gray-300 hover:to-gray-100",
        icon: "text-gray-400",
        button: "bg-gray-400 hover:bg-gray-300",
        buttonText: "text-black",
      };
  }
};

export default function ResourcesDisplay({
  selectedTopic,
  triggerConfetti,
}: ResourcesDisplayProps) {
  const themeColors = getThemeColors(selectedTopic);

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
            <AgingResourcesContent
              themeColors={themeColors}
              triggerConfetti={triggerConfetti}
            />
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
              themeColors={themeColors}
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
              themeColors={themeColors}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
