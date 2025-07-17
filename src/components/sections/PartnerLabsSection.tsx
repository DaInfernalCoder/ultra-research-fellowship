import Image from "next/image";

export default function PartnerLabsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 md:py-32 px-12 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Partner Labs */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16">
            Our Partner Labs
          </h2>

          {/* Lab Logos */}
          <div className="flex items-center justify-center gap-16 md:gap-24">
            <div className="flex items-center">
              <a
                href="https://age1.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/Age1.png"
                  alt="Age1"
                  width={200}
                  height={80}
                  className="h-16 md:h-20 lg:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://norn.group/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/Norn Group Transparent Logo.png"
                  alt="Norn Group"
                  width={200}
                  height={80}
                  className="h-16 md:h-20 lg:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            How It Works
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Stop wasting time cold-emailing thousands of professors. Start
            becoming an expert in your field.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-xl mb-4 mx-auto">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Choose Your Field</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Select a research area that interests you
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-xl mb-4 mx-auto">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Submit Research Brief
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Create a brief about your specific topic of interest
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-xl mb-4 mx-auto">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Get Matched</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We connect you with a PhD researcher in your field if accepted
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-xl mb-4 mx-auto">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3">Receive Feedback</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get detailed feedback for improvement if not accepted
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
