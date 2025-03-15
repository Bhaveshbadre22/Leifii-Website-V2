import React from "react";
import { HeroParallaxDemo } from "../../components/ui/HeroParallaxDemo.tsx";
import { MacbookScrollDemo } from "../../components/ui/MacbookScrollDemo.tsx";
import { ContainerScrollDemo } from "../../components/ui/ContainerScrollDemo.tsx";
import { LampDemo } from "../../components/ui/LampDemo.tsx";
import { FlipWordsDemo } from "../../components/ui/FlipWordsDemo.tsx";
import { Footer } from "../Footer/index.tsx";
import CursorProvider from "../../lib/context/cursorContext.tsx";
import BackButton from "../../components/BackButton.jsx/backButton.jsx";

const Web = () => {
  return (
    <CursorProvider>
      <div>
        <MacbookScrollDemo />
        <FlipWordsDemo />
        <HeroParallaxDemo />
        <ContainerScrollDemo />
        <Footer />
      </div>
    </CursorProvider>
  );
};

export default Web;
