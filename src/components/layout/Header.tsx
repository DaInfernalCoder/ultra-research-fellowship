"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onApplyClick: () => void;
}

export default function Header({ onApplyClick }: HeaderProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node)
      ) {
        setIsContactOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between px-12 md:px-16 lg:px-20 py-8">
      <div className="flex items-center">
        <Image
          src="/Ultra White Logo.png"
          alt="Ultra Research Fellowship"
          width={240}
          height={60}
          priority
          className="h-8 w-auto"
        />
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <div className="relative" ref={contactRef}>
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </button>

          <AnimatePresence>
            {isContactOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50"
              >
                <div className="px-4 py-2">
                  <div className="text-sm text-gray-600 mb-1">
                    Support email:
                  </div>
                  <a
                    href="mailto:oliver@tryultra.org"
                    className="text-sm text-gray-900 hover:text-blue-600 transition-colors block"
                  >
                    oliver@tryultra.org
                  </a>
                </div>

                <div className="border-t border-gray-100 my-2"></div>

                <a
                  href="https://cal.com/oliver-zou-xyqehl/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Book Counseling Session
                </a>

                <a
                  href="https://discord.com/invite/nwxDvHrQS2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Join Discord
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          onClick={onApplyClick}
          className="border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
        >
          Apply
        </button>
      </nav>
    </header>
  );
}
