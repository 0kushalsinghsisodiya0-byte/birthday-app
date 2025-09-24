// src/components/LetterPage.js
import React from "react";
import { motion } from "framer-motion";
import Balloon from "./Balloon";

function makeLetterOfLength(len = 1266) {
  const seed = `Dear You,

Today I celebrate the wonderful person you are. I thought about the warmth of your smile, the patience in your voice, the small kindnesses that make ordinary days extraordinary. I wrote this note to remind you how deeply you are loved and appreciated. Every memory with you is a treasure — from laughter over little things to the quiet, meaningful moments that say more than words ever could.

You are brave, kind, and endlessly beautiful in spirit. The world is better because you are in it, and I hope this day returns all the joy you bring. Keep shining, keep laughing, and keep being exactly who you are.

With all my heart,
Someone who adores you.

`;
  let out = "";
  while (out.length < len) out += seed;
  return out.slice(0, len);
}

export default function LetterPage() {
  const letter = makeLetterOfLength(1266);

  return (
    <div
      className="app-page"
      style={{
        background: "linear-gradient(180deg, rgba(255, 202, 222, 1) 0%, #ffaccf 100%)", // darker pink gradient
      }}
    >
      {/* Balloons */}
      <Balloon color="green" left="6%" top="74%" size={80} floatDuration={20} delay={0.5} />
      <Balloon color="yellow" left="84%" top="74%" size={76} floatDuration={22} delay={1.3} />

      {/* Emoji decorations */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "2.2rem",
          zIndex: 2,
        }}
      >
        🎈✨🎉💖
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          fontSize: "2rem",
          zIndex: 2,
        }}
      >
        🎂🎀🌟💌
      </div>

      <motion.div
        className="card"
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        style={{ maxWidth: 980, zIndex: 4, position: "relative" }}
      >
        <h2 className="title" style={{ color: "#900048" }}> {/* darker title pink */}
          A little letter for you
        </h2>

        <div
          className="paper"
          style={{
            marginTop: 12,
            background: "linear-gradient(180deg, #ffc1dd 0%, #ff9fcf 100%)", // darker pink paper
            color: "#3b0a2a",
            border: "1px solid rgba(255,130,180,0.4)",
          }}
        >
          <pre style={{ fontFamily: "inherit", whiteSpace: "pre-wrap", margin: 0 }}>
            {letter}
          </pre>
        </div>

        <div style={{ marginTop: 12 }}>
          <div className="small">(This card contains exactly 1266 characters.)</div>
        </div>
      </motion.div>
    </div>
  );
}