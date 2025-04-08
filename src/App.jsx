import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import CustomCursor from "./utils/CustomCursor/CustomCursor";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Nav/Navbar/index";
import LandingPage from "./pages/LandingPage";
import Preloader from "./components/Preloader/Preloader";
import Photography from "./pages/Services/Photography/Photography";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  });

  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden">
        {!isMobile && <CustomCursor />}
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services/photography" element={<Photography />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
