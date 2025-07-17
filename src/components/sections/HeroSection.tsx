interface HeroSectionProps {
  onApplyClick: () => void;
}

export default function HeroSection({ onApplyClick }: HeroSectionProps) {
  return (
    <main className="flex-1 flex flex-col items-start justify-start pt-12 md:pt-16 px-12 md:px-16 lg:px-20 max-w-6xl mx-auto w-full">
      {/* Descriptive text */}
      <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl leading-relaxed">
        The Ultra Research Fellowship directly connects the top 1% of ambitious
        high school students with top PhD researchers to conduct research in
        select fields.
      </p>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
        Work on the world&apos;s
        <br />
        most talent-starved
        <br />
        <span className="relative">
          problems.
          <div className="absolute -bottom-1 left-0 right-2 h-1 bg-yellow-400"></div>
        </span>
      </h1>

      <button
        onClick={onApplyClick}
        className="inline-flex items-center text-lg md:text-xl font-medium hover:text-gray-300 transition-colors group"
      >
        Apply Now
        <span className="ml-2 group-hover:translate-x-1 transition-transform">
          →
        </span>
      </button>
    </main>
  );
}
