import { ThemeColors } from "@/types";

interface ComingSoonContentProps {
  topic: string;
  icon: string;
  description: string;
  themeColors: ThemeColors;
}

export default function ComingSoonContent({
  topic,
  icon,
  description,
  themeColors,
}: ComingSoonContentProps) {
  return (
    <div className="text-center py-8 md:py-12">
      <div className="max-w-2xl mx-auto">
        <div
          className={`w-12 h-12 md:w-16 md:h-16 ${themeColors.accent} rounded-lg flex items-center justify-center mx-auto mb-4 md:mb-6`}
        >
          <span className="text-2xl md:text-3xl">{icon}</span>
        </div>

        <h2
          className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 ${themeColors.primary}`}
        >
          {topic} Research
        </h2>

        <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
          {description}
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gray-800 rounded-lg">
          <div className={`w-2 h-2 ${themeColors.accent} rounded-full`}></div>
          <span
            className={`${themeColors.secondary} font-medium text-sm md:text-base`}
          >
            Coming Soon
          </span>
        </div>

        <p className="text-gray-500 text-xs md:text-sm mt-4 md:mt-6">
          This research track will be available in the near future. Check back
          soon!
        </p>
      </div>
    </div>
  );
}
