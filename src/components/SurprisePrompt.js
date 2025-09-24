// src/components/SurprisePrompt.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Balloon from "./Balloon";

export default function SurprisePrompt() {
  const navigate = useNavigate();
  const [noVisible, setNoVisible] = useState(true);

  return (
    <div className="app-page bg-golden-gradient">
      <Confetti className="confetti-canvas" recycle={true} numberOfPieces={110} />
      <Balloon color="blue" left="8%" top="68%" size={78} floatDuration={18} delay={0.6} />
      <Balloon color="yellow" left="70%" top="65%" size={84} floatDuration={20} delay={1.2} />
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
            <Balloon color="green" left="25%" top="85%" size={80} floatDuration={22} delay={1.5} />
            <Balloon color="blue" left="55%" top="775%" size={80} floatDuration={22} delay={1.5} />

      <motion.div
        className="card card-bg"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="title">I made something for you. Wanna see them?</h2>

        <div className="controls">
          <motion.button
            className="btn"
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/video")}
          >
            Yes
          </motion.button>

          <AnimatePresence>
            {noVisible ? (
              <motion.button
                className="btn secondary"
                key="no"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, rotate: [0, -8, 8, -6, 6, 0] }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.9 }}
                onClick={() => {
                  setNoVisible(false);
                }}
              >
                No
              </motion.button>
            ) : null}
          </AnimatePresence>
        </div>

        {!noVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="small"
            style={{ color: "#b04545", marginTop: "0.7rem" }}
          >
            (No worries — surprises are for later 😉)
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}