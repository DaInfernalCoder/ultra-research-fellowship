import { motion, AnimatePresence } from "framer-motion";
import { SelectedTopic, ThemeColors } from "@/types";
import AgingResourcesContent from "./AgingResourcesContent";
import ComingSoonContent from "./ComingSoonContent";

interface ResourcesDisplayProps {
  selectedTopic: SelectedTopic;
}

// Theme color mapping based on research area
const getThemeColors = (topic: SelectedTopic): ThemeColors => {
  switch (topic) {
    case "aging":
      return {
        primary: "text-[#699000]",
        secondary: "text-[#7ba300]",
        accent: "bg-[#699000]",
        accentHover: "hover:bg-[#7ba300]",
        gradient: "from-[#699000] to-[#7ba300]",
        gradientHover: "hover:from-[#7ba300] hover:to-[#8db300]",
        icon: "text-[#699000]",
        button: "bg-[#699000] hover:bg-[#7ba300]",
        buttonText: "text-white",
      };
    case "space":
      return {
        primary: "text-[#004eb1]",
        secondary: "text-[#1a65c4]",
        accent: "bg-[#004eb1]",
        accentHover: "hover:bg-[#1a65c4]",
        gradient: "from-[#004eb1] to-[#1a65c4]",
        gradientHover: "hover:from-[#1a65c4] hover:to-[#337cd7]",
        icon: "text-[#004eb1]",
        button: "bg-[#004eb1] hover:bg-[#1a65c4]",
        buttonText: "text-white",
      };
    case "education":
      return {
        primary: "text-[#bc8034]",
        secondary: "text-[#d19447]",
        accent: "bg-[#bc8034]",
        accentHover: "hover:bg-[#d19447]",
        gradient: "from-[#bc8034] to-[#d19447]",
        gradientHover: "hover:from-[#d19447] hover:to-[#e6a85a]",
        icon: "text-[#bc8034]",
        button: "bg-[#bc8034] hover:bg-[#d19447]",
        buttonText: "text-white",
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
            <AgingResourcesContent themeColors={themeColors} />
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
