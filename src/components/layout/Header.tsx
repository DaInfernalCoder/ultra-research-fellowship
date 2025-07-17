"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onApplyClick: () => void;
}

export default function Header({ onApplyClick }: HeaderProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleApplyClick = () => {
    onApplyClick();
    closeMobileMenu();
  };

  return (
    <header className="flex items-center justify-between px-6 md:px-12 lg:px-16 xl:px-20 py-6 md:py-8 relative">
      <div className="flex items-center">
        <Image
          src="/Ultra White Logo.png"
          alt="Ultra Research Fellowship"
          width={240}
          height={60}
          priority
          className="h-6 md:h-8 w-auto"
        />
      </div>

      {/* Desktop Navigation */}
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
          Choose a Topic
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 z-50"
        aria-label="Toggle mobile menu"
      >
        <motion.div
          animate={
            isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
          }
          className="w-6 h-0.5 bg-white transition-all"
        />
        <motion.div
          animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-0.5 bg-white transition-all"
        />
        <motion.div
          animate={
            isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
          }
          className="w-6 h-0.5 bg-white transition-all"
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-80 bg-black border-l border-gray-800 z-50 md:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="flex flex-col space-y-6">
                {/* Contact Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Contact</h3>
                  <div className="pl-4 space-y-3">
                    <a
                      href="mailto:oliver@tryultra.org"
                      className="block text-gray-300 hover:text-white transition-colors"
                      onClick={closeMobileMenu}
                    >
                      oliver@tryultra.org
                    </a>
                    <a
                      href="https://cal.com/oliver-zou-xyqehl/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-300 hover:text-white transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Book Counseling Session
                    </a>
                    <a
                      href="https://discord.com/invite/nwxDvHrQS2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-300 hover:text-white transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Join Discord
                    </a>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={handleApplyClick}
                  className="w-full border border-white text-white py-3 px-6 rounded hover:bg-white hover:text-black transition-colors mt-8"
                >
                  Choose a Topic
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
