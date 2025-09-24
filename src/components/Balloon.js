// src/components/Balloon.js
import React from "react";

/**
 * SVG Balloon component
 * Props:
 * - color: 'red' | 'blue' | 'green' | 'yellow' | hex
 * - left, top: CSS position (can be percentage strings like '8%')
 * - size: number (base width in px)
 * - floatDuration: seconds (string or number)
 * - delay: seconds (string or number)
 *
 * The component positions itself absolutely (so the parent should be positioned).
 */
export default function Balloon({
  color = "red",
  left = "10%",
  top = "75%",
  size = 88,
  floatDuration = 18,
  delay = 0,
  ariaLabel = "Floating balloon decorative"
}) {
  const colorMap = {
    red: "url(#g-red)",
    blue: "url(#g-blue)",
    green: "url(#g-green)",
    yellow: "url(#g-yellow)",
  };

  // allow passing a hex color directly
  const useGradient = colorMap[color] ? colorMap[color] : null;
  const gradientIdSuffix = Math.random().toString(36).slice(2, 7);

  const style = {
    left,
    top,
    width: `${size}px`,
    height: `${Math.round(size * 1.25)}px`,
    position: "absolute",
    pointerEvents: "none",
    zIndex: 4,
    // CSS custom properties for animation durations/delays
    ["--float-duration"]: `${floatDuration}s`,
    ["--float-delay"]: `${delay}s`,
  };

  return (
    <svg
      aria-hidden="true"
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 120 150"
      style={style}
      className="svg-balloon"
    >
      <defs>
        <linearGradient id={`g-red-${gradientIdSuffix}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff9b9b" />
          <stop offset="100%" stopColor="#ff7a7a" />
        </linearGradient>
        <linearGradient id={`g-blue-${gradientIdSuffix}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#9fe8ff" />
          <stop offset="100%" stopColor="#66d4ff" />
        </linearGradient>
        <linearGradient id={`g-green-${gradientIdSuffix}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#eaffef" />
          <stop offset="100%" stopColor="#7af0a0" />
        </linearGradient>
        <linearGradient id={`g-yellow-${gradientIdSuffix}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff8b2" />
          <stop offset="100%" stopColor="#ffd87b" />
        </linearGradient>
      </defs>

      {/* choose gradient by color name or fallback to supplied color */}
      <ellipse
        cx="60"
        cy="45"
        rx="44"
        ry="56"
        fill={useGradient ? `url(#g-${color}-${gradientIdSuffix})` : color}
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="2"
        opacity="0.98"
      />

      {/* glossy highlight */}
      <path
        d="M36 18c6-8 20-14 34-10"
        stroke="rgba(255,255,255,0.65)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />

      {/* knot */}
      <path
        d="M58 98c2 6 6 8 10 10c4 2 6 0 6 0"
        fill="#fff3e8"
        opacity="0.9"
        transform="translate(-6,0) scale(0.9)"
      />

      {/* string */}
      <path
        d="M60 110 q6 16 0 28"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}