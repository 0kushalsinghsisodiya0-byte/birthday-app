// src/components/Decorations.js
import React from "react";

/**
 * Decorative background accents (confetti sprinkles + ribbons).
 * These are purely visual (aria-hidden).
 * Place inside your page container (just before the card).
 */
export default function Decorations() {
  return (
    <svg
      className="decorations-svg"
      aria-hidden="true"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Pastel confetti dots */}
      <circle cx="60" cy="80" r="6" fill="#ffb3ba" opacity="0.8" />
      <circle cx="720" cy="140" r="7" fill="#bae1ff" opacity="0.8" />
      <circle cx="120" cy="540" r="5" fill="#baffc9" opacity="0.8" />
      <circle cx="680" cy="460" r="6" fill="#ffffba" opacity="0.8" />
      <circle cx="400" cy="40" r="8" fill="#ffdfba" opacity="0.8" />

      {/* Curvy ribbons */}
      <path
        d="M100 100 C120 80, 160 120, 180 100"
        stroke="#ff7a7a"
        strokeWidth="4"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M640 480 C660 500, 700 460, 720 480"
        stroke="#66d4ff"
        strokeWidth="4"
        fill="none"
        opacity="0.6"
      />

      {/* Dotted swirl */}
      <path
        d="M400 300 q20 -40 40 0 t40 0"
        stroke="#ffd27f"
        strokeWidth="3"
        fill="none"
        strokeDasharray="4 6"
        opacity="0.5"
      />
    </svg>
  );
}