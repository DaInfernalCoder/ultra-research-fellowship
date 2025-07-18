interface CTASectionProps {
  onApplyClick: () => void;
}

export default function CTASection({ onApplyClick }: CTASectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          Start Your Research Journey
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
          Join the Ultra Research Fellowship and work on problems that matter.
        </p>

        <button
          onClick={onApplyClick}
          className="bg-gradient-to-b from-blue-400 to-white text-black font-medium py-3 md:py-4 px-6 md:px-8 rounded text-base md:text-lg hover:from-blue-300 hover:to-gray-100 transition-all"
        >
          Choose a Topic
        </button>
      </div>
    </section>
  );
}
