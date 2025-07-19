import Image from "next/image";

export default function PartnerLabsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20 mx-auto w-full">
      {/* How It Works */}
      <div className="w-full text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
          How It Works
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Stop wasting time cold-emailing thousands of professors. Start
          becoming an expert in your field.
        </p>

        {/* Funnel */}
        <div className="relative w-full mx-auto">
          <Image
            src="/space_funnel.png"
            alt="Research Process Funnel"
            width={4000}
            height={4000}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
