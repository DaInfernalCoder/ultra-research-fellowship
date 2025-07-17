"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ConfettiProps {
  isActive: boolean;
  onComplete?: () => void;
}

interface ConfettiParticle {
  id: number;
  color: string;
  size: number;
  startX: number;
  delay: number;
  rotation: number;
  shape: "circle" | "square";
  drift: number; // horizontal drift amount
}

const colors = [
  "#00d2a0", // Primary green
  "#33deb3", // Secondary green
  "#66e6c6", // Light green
  "#4f46e5", // Blue
  "#06b6d4", // Cyan
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#8b5cf6", // Purple
  "#ec4899", // Pink
];

const generateConfettiParticles = (count: number): ConfettiParticle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 12 + 6, // 6-18px (increased size)
    startX: Math.random() * 110 - 5, // -5% to 105% across screen (starts slightly off-screen)
    delay: Math.random() * 1.5, // 0-1500ms delay (even more spread)
    rotation: Math.random() * 360,
    shape: Math.random() > 0.3 ? "circle" : "square", // More circles than squares
    drift: (Math.random() - 0.5) * 40, // -20 to +20 horizontal drift
  }));
};

export default function Confetti({ isActive, onComplete }: ConfettiProps) {
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);

  useEffect(() => {
    if (isActive) {
      setParticles(generateConfettiParticles(120)); // Increased from 50 to 120 particles

      // Auto-complete after 4 seconds (slightly longer for more particles)
      const timer = setTimeout(() => {
        setParticles([]);
        onComplete?.();
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      setParticles([]);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: `${particle.startX}vw`,
              y: "-20px",
              rotate: particle.rotation,
              opacity: 1,
            }}
            animate={{
              x: `${particle.startX + particle.drift}vw`,
              y: "120vh",
              rotate: particle.rotation + 720, // Double rotation for more spin
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 4 + Math.random() * 2, // 4-6 seconds for varied fall speeds
              delay: particle.delay,
              ease: "easeIn",
            }}
            style={{
              position: "absolute",
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              borderRadius: particle.shape === "circle" ? "50%" : "0%",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
