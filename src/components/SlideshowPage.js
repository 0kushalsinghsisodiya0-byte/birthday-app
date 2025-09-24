// src/components/SlideshowPage.js
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Balloon from "./Balloon";

import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import musicSrc from "../assets/music.mp3";
import ropeLeft from "../assets/rope-left.png";
import ropeRight from "../assets/rope-right.png";

export default function SlideshowPage() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.loop = true;
    a.volume = 0.85;

    const playAttempt = async () => {
      try {
        await a.play();
      } catch (err) {
        // Autoplay is expected to be blocked on mobile/desktop until user gesture.
        console.warn("Autoplay blocked - user gesture needed to play audio", err);
      }
    };
    playAttempt();

    return () => {
      if (a) {
        a.pause();
        a.currentTime = 0;
      }
    };
  }, []);

  const handlePlayGesture = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      await a.play();
    } catch (err) {
      console.warn("Play failed", err);
    }
  };

  const handleNext = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    navigate("/question");
  };

  return (
    <div className="app-page bg-golden-gradient">
      <Confetti className="confetti-canvas" recycle={true} numberOfPieces={100} />
      <Balloon color="green" left="12%" top="78%" size={82} floatDuration={20} delay={0.6} />
      <Balloon color="yellow" left="82%" top="78%" size={78} floatDuration={22} delay={1.8} />
      <Balloon color="pink" left="10%" top="85%" size={80} floatDuration={22} delay={1.5} />
      <Balloon color="orange" left="84%" top="83%" size={78} floatDuration={22} delay={1.8} />
      <Balloon color="pink" left="82%" top="5%" size={78} floatDuration={22} delay={1.8} />
      <Balloon color="blue" left="84%" top="7%" size={78} floatDuration={22} delay={1.8} />
      <Balloon color="red" left="12%" top="5%" size={82} floatDuration={20} delay={0.6} />
      <Balloon color="yellow" left="10%" top="7%" size={80} floatDuration={22} delay={1.5} />

      <img
  src={require("../assets/banner.png")}
  alt="Happy Birthday Banner"
  className="birthday-banner-img"
/>

<img src={ropeLeft} alt="Left Rope" className="decoration-rope-left" />
<img src={ropeRight} alt="Right Rope" className="decoration-rope-right" />

      <motion.div
        className="card card-bg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        style={{ padding: "0.9rem 1rem" }}
      >
        

        <div className="slideshow-stage" style={{ marginTop: "1rem" }}>
          <img src={img1} alt="upper-right" className="slide-img pos-upper-right" loading="lazy" />
          <img src={img2} alt="lower-right" className="slide-img pos-lower-right" loading="lazy" />
          <img src={img3} alt="center" className="slide-img pos-center" loading="lazy" />
          <img src={img4} alt="upper-left" className="slide-img pos-upper-left" loading="lazy" />
          <img src={img5} alt="lower-left" className="slide-img pos-lower-left" loading="lazy" />
        </div>

        <audio ref={audioRef} src={musicSrc} />

        <div className="controls" style={{ marginTop: "0.9rem" }}>
          <motion.button
            className="btn"
            whileHover={{ scale: 1.03 }}
            onClick={handlePlayGesture}
          >
            Play Music (if not playing)
          </motion.button>

          <motion.button
            className="btn"
            whileHover={{ scale: 1.03 }}
            onClick={handleNext}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}