import { ResearchView, SelectedTopic } from "@/types";

interface ResearchFocusSectionProps {
  currentView: ResearchView;
  selectedTopic: SelectedTopic;
  setSelectedTopic: (topic: SelectedTopic) => void;
}

export default function ResearchFocusSection({
  currentView,
  selectedTopic,
  setSelectedTopic,
}: ResearchFocusSectionProps) {
  if (currentView !== "selection") return null;

  return (
    <div className="space-y-8 md:space-y-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
        Select Your Research Focus
      </h2>

      {/* Collapsed Topic Cards */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
        {/* Aging Research Card */}
        <div
          className={`border rounded-lg p-4 md:p-6 hover:border-gray-600 transition-colors cursor-pointer ${
            selectedTopic === "aging"
              ? "border-yellow-400 bg-yellow-400/5"
              : "border-gray-700"
          }`}
          onClick={() => setSelectedTopic("aging")}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg md:text-xl">💛</span>
            </div>
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-bold">Aging</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Longevity research
              </p>
            </div>
            <button className="px-3 py-1.5 md:px-4 md:py-2 bg-yellow-400 text-black text-sm font-medium rounded hover:bg-yellow-300 transition-colors">
              Choose
            </button>
          </div>
        </div>

        {/* Space Research Card */}
        <div
          className={`border rounded-lg p-4 md:p-6 hover:border-gray-600 transition-colors cursor-pointer ${
            selectedTopic === "space"
              ? "border-gray-500 bg-gray-500/5"
              : "border-gray-700"
          }`}
          onClick={() => setSelectedTopic("space")}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg md:text-xl">🚀</span>
            </div>
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-bold">Space</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Propulsion & habitats
              </p>
            </div>
            <button className="px-3 py-1.5 md:px-4 md:py-2 border border-gray-600 text-gray-400 text-sm font-medium rounded cursor-not-allowed">
              Choose
            </button>
          </div>
        </div>

        {/* Education Research Card */}
        <div
          className={`border rounded-lg p-4 md:p-6 hover:border-gray-600 transition-colors cursor-pointer ${
            selectedTopic === "education"
              ? "border-gray-500 bg-gray-500/5"
              : "border-gray-700"
          }`}
          onClick={() => setSelectedTopic("education")}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg md:text-xl">🎓</span>
            </div>
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-bold">Education</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Learning & cognition
              </p>
            </div>
            <button className="px-3 py-1.5 md:px-4 md:py-2 border border-gray-600 text-gray-400 text-sm font-medium rounded cursor-not-allowed">
              Choose
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
