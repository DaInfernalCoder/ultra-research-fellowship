export default function WhyResearchSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 md:py-32 px-12 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Why Research?
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-16">2 Reasons</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Reason 1: College Applications */}
          <div className="text-left">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-8 h-8 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-lg flex-shrink-0">
                1
              </div>
              <h3 className="text-xl md:text-2xl font-bold">
                To improve your college applications
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed ml-12">
                <strong>It&apos;s not meritocratic anymore:</strong> Being
                exceptionally talented (&quot;cracked&quot;) doesn&apos;t
                guarantee admission.
              </p>

              <p className="text-gray-300 leading-relaxed ml-12">
                <strong>Here&apos;s what colleges really want:</strong>
              </p>

              <ul className="text-gray-300 space-y-2 ml-12">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-lg">•</span>
                  <span>
                    Intellectual pursuit: Show you&apos;re a valuable addition
                    through research or adding to the school&apos;s reputation
                    (most T20 colleges are research universities).
                  </span>
                </li>
              </ul>

              <p className="text-gray-300 leading-relaxed ml-12">
                <strong>The way to do this in your essays:</strong>
              </p>

              <ul className="text-gray-300 space-y-2 ml-12">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-lg">•</span>
                  <span>
                    Demonstrate deep passion through a topic you&apos;ve heavily
                    researched through our program
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-lg">•</span>
                  <span>
                    Use it to frame your goals as world-changing or frontier-pushing.
                  </span>
                </li>
              </ul>

              <p className="text-gray-400 text-sm mt-6 italic ml-12">
                *This mostly applies to T20 schools
              </p>
            </div>
          </div>

          {/* Reason 2: Career */}
          <div className="text-left">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-8 h-8 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-lg flex-shrink-0">
                2
              </div>
              <h3 className="text-xl md:text-2xl font-bold">For your career</h3>
            </div>

            <div className="space-y-4">
              <ul className="text-gray-300 space-y-3 ml-12">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-lg">•</span>
                  <span className="leading-relaxed">
                    Employers look for depth, not breadth and researching a
                    specific topic trains you for that
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-lg">•</span>
                  <span className="leading-relaxed">
                    The math, science, researching, and soft skills become
                    indispensable to your career
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
