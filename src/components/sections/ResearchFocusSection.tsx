import { ResearchView, SelectedTopic, ThemeColors } from "@/types";

interface ResearchFocusSectionProps {
  currentView: ResearchView;
  selectedTopic: SelectedTopic;
  setSelectedTopic: (topic: SelectedTopic) => void;
  triggerConfetti: () => void;
}

// Theme color mapping for each research area
const getThemeColors = (
  topic: "aging" | "space" | "education"
): ThemeColors => {
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
  }
};

export default function ResearchFocusSection({
  currentView,
  selectedTopic,
  setSelectedTopic,
  triggerConfetti,
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
          className={`border rounded-lg p-4 md:p-6 hover:border-[#00d2a0] transition-colors cursor-pointer flex-1 ${
            selectedTopic === "aging"
              ? "border-[#00d2a0] bg-[#00d2a0]/5"
              : "border-gray-700"
          }`}
          onClick={() => setSelectedTopic("aging")}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${agingTheme.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-lg md:text-xl">💛</span>
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
                triggerConfetti();
              }}
            >
              Choose
            </button>
          </div>
        </div>

        {/* Space Research Card */}
        <div
          className={`border rounded-lg p-4 md:p-6 hover:border-blue-400 transition-colors cursor-pointer flex-1 ${
            selectedTopic === "space"
              ? `border-blue-400 bg-blue-400/5`
              : "border-gray-700"
          }`}
          onClick={() => {
            setSelectedTopic("space");
            triggerConfetti();
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
                triggerConfetti();
              }}
            >
              Choose
            </button>
          </div>
        </div>

        {/* Education Research Card */}
        <div
          className={`border rounded-lg p-4 md:p-6 hover:border-yellow-400 transition-colors cursor-pointer flex-1 ${
            selectedTopic === "education"
              ? `border-yellow-400 bg-yellow-400/5`
              : "border-gray-700"
          }`}
          onClick={() => {
            setSelectedTopic("education");
            triggerConfetti();
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
                triggerConfetti();
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
