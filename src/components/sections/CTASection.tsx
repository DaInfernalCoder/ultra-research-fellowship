interface CTASectionProps {
  onApplyClick: () => void;
}

export default function CTASection({ onApplyClick }: CTASectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 md:py-32 px-12 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Start Your Research Journey
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Join the Ultra Research Fellowship and work on problems that matter.
        </p>

        <button
          onClick={onApplyClick}
          className="bg-yellow-400 text-black font-medium py-4 px-8 rounded text-lg hover:bg-yellow-300 transition-colors"
        >
          Apply Now
        </button>
      </div>
    </section>
  );
}
