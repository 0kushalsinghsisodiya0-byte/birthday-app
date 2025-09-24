// src/App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import StartPage from "./components/StartPage";
import SurprisePrompt from "./components/SurprisePrompt";
import VideoPage from "./components/VideoPage";
import SlideshowPage from "./components/SlideshowPage";
import QuestionPage from "./components/QuestionPage";
import LetterPage from "./components/LetterPage";

/*
  App sets up routes and wraps with AnimatePresence for route transitions.
  All routes are declared here for clarity.
*/

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StartPage />} />
        <Route path="/surprise" element={<SurprisePrompt />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/slideshow" element={<SlideshowPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/letter" element={<LetterPage />} />
      </Routes>
    </AnimatePresence>
  );
}