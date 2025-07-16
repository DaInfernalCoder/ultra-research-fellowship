import Image from "next/image";
import { ResearchView } from "@/types";

interface ResearchFocusSectionProps {
  currentView: ResearchView;
  setCurrentView: (view: ResearchView) => void;
}

export default function ResearchFocusSection({
  currentView,
  setCurrentView,
}: ResearchFocusSectionProps) {
  if (currentView !== "selection") return null;

  return (
    <div>
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
              Breakthrough research in longevity, cellular aging, and life
              extension technologies.
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
              <span className="text-sm text-gray-300">Available Now</span>
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
              <span className="text-sm text-gray-400">Coming Soon</span>
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
              Revolutionary approaches to learning, cognitive enhancement, and
              educational technology.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Coming Soon</span>
            </div>
            <button className="w-full border border-gray-600 text-gray-400 font-medium py-3 px-6 rounded cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
