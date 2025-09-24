// src/components/QuestionPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Balloon from "./Balloon";

export default function QuestionPage() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [shake, setShake] = useState(false);
  const [error, setError] = useState("");

  const correctAnswer = "necklace";

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalized = (answer || "").trim().toLowerCase();
    if (normalized === correctAnswer) {
      navigate("/letter");
    } else {
      setError("Try again");
      setShake(true);
      setTimeout(() => setShake(false), 650);
    }
  };

  return (
    <div
      className="app-page bg-gradient-1"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background confetti */}
      <Confetti
        className="confetti-canvas"
        recycle={true}
        numberOfPieces={120}
      />

      {/* Balloons everywhere */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Balloon color="red" left="8%" top="72%" size={78} floatDuration={16} delay={0.6} />
        <Balloon color="blue" left="76%" top="74%" size={74} floatDuration={18} delay={1.1} />
        <Balloon color="green" left="20%" top="80%" size={68} floatDuration={20} delay={0.8} />
        <Balloon color="pink" left="65%" top="85%" size={64} floatDuration={22} delay={1.5} />
        <Balloon color="purple" left="40%" top="70%" size={72} floatDuration={19} delay={1.2} />
        <Balloon color="orange" left="12%" top="60%" size={70} floatDuration={21} delay={1.8} />
        <Balloon color="yellow" left="82%" top="65%" size={66} floatDuration={23} delay={0.9} />
        <Balloon color="green" left="60%" top="82%" size={86} floatDuration={20} delay={2.4} />
        <Balloon color="pink" left="30%" top="15%" size={80} floatDuration={22} delay={2.4} />
        <Balloon color="purple" left="83%" top="25%" size={80} floatDuration={22} delay={3.1} />
        <Balloon color="blue" left="60%" top="7%" size={80} floatDuration={22} delay={3.1} />
        <Balloon color="orange" left="10%" top="25%" size={80} floatDuration={22} delay={3.1} />

      </div>

      {/* Emoji clusters in all corners */}
      <div style={{ position: "absolute", top: "10%", left: "5%", fontSize: "2.2rem", zIndex: 2 }}>
        🎉✨⭐
      </div>
      <div style={{ position: "absolute", bottom: "12%", right: "8%", fontSize: "2.2rem", zIndex: 2 }}>
        🎈💖🌟
      </div>
      <div style={{ position: "absolute", top: "15%", right: "12%", fontSize: "2rem", zIndex: 2 }}>
        🎀⭐🎊
      </div>
      <div style={{ position: "absolute", bottom: "15%", left: "8%", fontSize: "2rem", zIndex: 2 }}>
        💝🎂🎇
      </div>

      {/* Foreground question card */}
      <motion.div
        className="card card-bg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        style={{
          width: "100%",
          maxWidth: 500,
          padding: "2rem",
          textAlign: "center",
          zIndex: 3,
          position: "relative",
        }}
      >
        <h2 className="title" style={{ marginBottom: "1.5rem" }}>
          What is the best gift you got today?
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.65 }}
        >
          <input
            className="input"
            placeholder="Type your answer..."
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
              setError("");
            }}
            autoFocus
            style={{
              textAlign: "center",
              marginBottom: "1rem",
              width: "100%",
            }}
          />

          <button type="submit" className="btn" style={{ width: "40%" }}>
            Submit
          </button>

          {error && (
            <div className="error" style={{ marginTop: 10 }}>
              {error}
            </div>
          )}
        </motion.form>
      </motion.div>
    </div>
  );
}