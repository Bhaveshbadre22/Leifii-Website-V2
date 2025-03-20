import React from "react";
import { isMobile } from "react-device-detect";
import CustomCursor from "./utils/CustomCursor";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Nav/Navbar/index.tsx";
import LandingPage from "./pages/LandingPage";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden">
        {!isMobile && <CustomCursor />}
        <Preloader />

        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
