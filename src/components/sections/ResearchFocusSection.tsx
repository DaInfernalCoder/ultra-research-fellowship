import { ResearchView, SelectedTopic, ThemeColors } from "@/types";

interface ResearchFocusSectionProps {
  currentView: ResearchView;
  selectedTopic: SelectedTopic;
  setSelectedTopic: (topic: SelectedTopic) => void;
}

// Theme color mapping for each research area
const getThemeColors = (
  topic: "aging" | "space" | "education"
): ThemeColors => {
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
  }
};

export default function ResearchFocusSection({
  currentView,
  selectedTopic,
  setSelectedTopic,
}: ResearchFocusSectionProps) {
  if (currentView !== "selection") return null;

  const agingTheme = getThemeColors("aging");
  const spaceTheme = getThemeColors("space");
  const educationTheme = getThemeColors("education");

  return (
    <div className="space-y-8 md:space-y-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
        Select Your Research Focus
      </h2>

      {/* Collapsed Topic Cards */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mx-2 md:mx-4">
        {/* Aging Research Card */}
        <div
          className={`border rounded-lg p-4 md:p-6 hover:border-[#699000] transition-colors cursor-pointer flex-1 ${
            selectedTopic === "aging"
              ? "border-[#699000] bg-[#699000]/5"
              : "border-gray-700"
          }`}
          onClick={() => setSelectedTopic("aging")}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${agingTheme.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-lg md:text-xl">🧬</span>
            </div>
            <div className="flex-1">
              <h3
                className={`text-base md:text-lg font-bold ${agingTheme.primary}`}
              >
                Aging
              </h3>
              <p className="text-xs md:text-sm text-gray-400">
                Longevity research
              </p>
            </div>
            <button
              className={`px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r ${agingTheme.gradient} ${agingTheme.buttonText} text-sm font-medium rounded ${agingTheme.gradientHover} transition-all`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTopic("aging");
              }}
            >
              Choose
            </button>
          </div>
        </div>

        {/* Space Research Card */}
        <div
          className={`border rounded-lg p-4 md:p-6 hover:border-[#004eb1] transition-colors cursor-pointer flex-1 ${
            selectedTopic === "space"
              ? `border-[#004eb1] bg-[#004eb1]/5`
              : "border-gray-700"
          }`}
          onClick={() => {
            setSelectedTopic("space");
          }}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${spaceTheme.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-lg md:text-xl">🚀</span>
            </div>
            <div className="flex-1">
              <h3
                className={`text-base md:text-lg font-bold ${spaceTheme.primary}`}
              >
                Space
              </h3>
              <p className="text-xs md:text-sm text-gray-400">
                Propulsion & habitats
              </p>
            </div>
            <button
              className={`px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r ${spaceTheme.gradient} ${spaceTheme.buttonText} text-sm font-medium rounded ${spaceTheme.gradientHover} transition-all`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTopic("space");
              }}
            >
              Choose
            </button>
          </div>
        </div>

        {/* Education Research Card */}
        <div
          className={`border rounded-lg p-4 md:p-6 hover:border-[#bc8034] transition-colors cursor-pointer flex-1 ${
            selectedTopic === "education"
              ? `border-[#bc8034] bg-[#bc8034]/5`
              : "border-gray-700"
          }`}
          onClick={() => {
            setSelectedTopic("education");
          }}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${educationTheme.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-lg md:text-xl">🎓</span>
            </div>
            <div className="flex-1">
              <h3
                className={`text-base md:text-lg font-bold ${educationTheme.primary}`}
              >
                Education
              </h3>
              <p className="text-xs md:text-sm text-gray-400">
                Learning & cognition
              </p>
            </div>
            <button
              className={`px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r ${educationTheme.gradient} ${educationTheme.buttonText} text-sm font-medium rounded ${educationTheme.gradientHover} transition-all`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTopic("education");
              }}
            >
              Choose
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
