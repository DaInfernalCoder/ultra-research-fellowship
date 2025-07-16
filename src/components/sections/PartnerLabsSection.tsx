import Image from "next/image";

export default function PartnerLabsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 md:py-32 px-12 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
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
    </section>
  );
}
