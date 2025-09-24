// src/components/VideoPage.js
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Balloon from "./Balloon";
import videoSrc from "../assets/video.mp4";

export default function VideoPage() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [ended, setEnded] = useState(false);

  return (
    <div className="app-page bg-gradient-1">
      <Confetti className="confetti-canvas" recycle={false} numberOfPieces={120} />
      <Balloon color="red" left="6%" top="70%" size={86} floatDuration={16} delay={0.4} />

      <motion.div
        className="card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="title">A little something ✨</h2>

        <div className="video-wrap" style={{ marginTop: "1rem" }}>
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            onEnded={() => setEnded(true)}
            playsInline
            // muted is intentionally left off so user can hear audio if present.
          />
        </div>

        <div className="controls" style={{ marginTop: "1rem" }}>
          {!ended ? (
            <div className="small">Please watch the full video to unlock the next step.</div>
          ) : (
            <motion.button
              className="btn"
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate("/slideshow")}
            >
              Next
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
}