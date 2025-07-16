import Image from "next/image";
import { ResearchView } from "@/types";

interface AgingResearchSectionProps {
  currentView: ResearchView;
  setCurrentView: (view: ResearchView) => void;
}

export default function AgingResearchSection({
  currentView,
  setCurrentView,
}: AgingResearchSectionProps) {
  if (currentView !== "aging") return null;

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={() => setCurrentView("selection")}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to Research Focus
      </button>

      {/* Aging Research Application */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Information */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Aging Research
            <br />
            Fellowship
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Join the frontier of longevity research. Work on breakthrough
            approaches to understanding and reversing the aging process.
          </p>

          <p className="text-gray-300 mb-12 leading-relaxed">
            Our aging research track focuses on cellular senescence,
            regenerative medicine, and life extension technologies that could
            transform human healthspan.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Research Areas Include:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Cellular reprogramming and rejuvenation</li>
              <li>• Senescence reversal mechanisms</li>
              <li>• Regenerative medicine applications</li>
              <li>• Longevity biomarker development</li>
              <li>• Anti-aging therapeutic interventions</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Application Form */}
        <div className="border border-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Ready to Apply?</h3>

          <p className="text-gray-300 mb-4">
            Skip the cold outreach. Submit a research brief that showcases your
            genuine curiosity and investigation into aging research.
          </p>

          <p className="text-gray-300 mb-4">
            Write an ACX-style essay on a topic you&apos;re passionate about -
            raw investigation, not academic formality. The best submissions get
            published on our Substack and connected directly to PhD researchers,
            professors, and labs that match your interests.
          </p>

          <p className="text-gray-300 mb-6">
            <a
              href="https://www.astralcodexten.com/p/your-review-alpha-school"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              Here&apos;s an example
            </a>{" "}
            of a very compelling one but length one, we encourage high quality
            one-pagers.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-gray-300">
                Direct connection to matching PhD researchers & labs
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-gray-300">
                Best submissions published on our Substack
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-gray-300">
                Expert feedback & mentorship opportunities
              </span>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-gray-300 mb-4 text-sm">
              If accepted, you&apos;ll be matched with an expert from one of
              these organizations. Check out their work!
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://age1.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/Age1.png"
                  alt="Age1"
                  width={80}
                  height={32}
                  className="h-10 w-auto"
                />
              </a>
              <a
                href="https://norn.group/"
                target="_blank"
                rel="noopener noreferrer"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/Norn Group Transparent Logo.png"
                  alt="Norn Group"
                  width={80}
                  height={32}
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          <a
            href="https://forms.gle/HMB4AXCAg1NopJ639"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-yellow-400 text-black font-medium py-4 px-6 rounded hover:bg-yellow-300 transition-colors text-lg text-center"
          >
            Apply for Aging Research
          </a>
        </div>
      </div>
    </div>
  );
}
