// src/components/StartPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Balloon from "./Balloon";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="app-page bg-golden-gradient">
      <Confetti className="confetti-canvas" recycle={true} numberOfPieces={120} />
      <Balloon color="red" left="6%" top="72%" size={92} floatDuration={16} delay={0} />
      <Balloon color="blue" left="30%" top="78%" size={78} floatDuration={18} delay={1.2} />
      <Balloon color="green" left="60%" top="82%" size={86} floatDuration={20} delay={2.4} />
      <Balloon color="yellow" left="82%" top="72%" size={80} floatDuration={22} delay={3.1} />
      <Balloon color="orange" left="10%" top="25%" size={80} floatDuration={22} delay={3.1} />
      <Balloon color="pink" left="30%" top="15%" size={80} floatDuration={22} delay={2.4} />
      <Balloon color="blue" left="60%" top="7%" size={80} floatDuration={22} delay={3.1} />
      <Balloon color="yellow" left="82%" top="72%" size={80} floatDuration={22} delay={3.1} />
      <Balloon color="purple" left="83%" top="25%" size={80} floatDuration={22} delay={3.1} />
      <Balloon color="red" left="5%" top="10%" size={70} floatDuration={18} delay={0.5} />
      <Balloon color="blue" left="85%" top="15%" size={75} floatDuration={20} delay={1.0} />
      <Balloon color="green" left="10%" top="85%" size={80} floatDuration={22} delay={1.5} />
      <Balloon color="pink" left="80%" top="80%" size={78} floatDuration={19} delay={2.0} />
      <Balloon color="orange" left="2%" top="50%" size={72} floatDuration={21} delay={2.5} />
      <Balloon color="purple" left="90%" top="50%" size={75} floatDuration={20} delay={1.8} />
      <Balloon color="orange" left="45%" top="16%" size={75} floatDuration={20} delay={1.8} />
      <Balloon color="purple" left="43%" top="75%" size={75} floatDuration={20} delay={1.8} />

      <img
  src={require("../assets/banner.png")}
  alt="Happy Birthday Banner"
  className="birthday-banner-img"
/>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.45 }}
        className="card card-bg"
      >
        <h1 className="title">Happy Birthday, it's your special day madam ji 🎉</h1>
        <p className="small">Wishing you joy, love and many smiles today — enjoy your surprise!</p>

        <div className="controls">
          <motion.button
            className="btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/surprise")}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}