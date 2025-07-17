import Image from "next/image";

export default function PartnerLabsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20 max-w-6xl mx-auto w-full">
      {/* How It Works */}
      <div className="w-full text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
          How It Works
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
          Stop wasting time cold-emailing thousands of professors. Start
          becoming an expert in your field.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-400 to-white text-black font-bold rounded-full flex items-center justify-center text-lg md:text-xl mb-4 md:mb-6 mx-auto">
              1
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Choose Your Field
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Select a research area that interests you
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-400 to-white text-black font-bold rounded-full flex items-center justify-center text-lg md:text-xl mb-4 md:mb-6 mx-auto">
              2
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Submit Research Brief
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Create a brief about your specific topic of interest
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-400 to-white text-black font-bold rounded-full flex items-center justify-center text-lg md:text-xl mb-4 md:mb-6 mx-auto">
              3
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Get Matched
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
              We connect you with a PhD researcher in your field if accepted
            </p>

            {/* Our Partner Labs under Get Matched */}
            <div className="flex flex-col items-center gap-2 mt-3">
              <p className="text-xs text-gray-500 mb-1">Our Partner Labs:</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://age1.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/Age1.png"
                    alt="Age1"
                    width={60}
                    height={24}
                    className="h-6 w-auto"
                  />
                </a>
                <a
                  href="https://norn.group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/Norn Group Transparent Logo.png"
                    alt="Norn Group"
                    width={60}
                    height={24}
                    className="h-6 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-400 to-white text-black font-bold rounded-full flex items-center justify-center text-lg md:text-xl mb-4 md:mb-6 mx-auto">
              4
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Receive Feedback
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Get detailed feedback for improvement if not accepted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
