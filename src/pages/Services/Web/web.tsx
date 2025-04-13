import React, { useEffect } from "react";
import { HeroParallaxDemo } from "../../../components/HeroParallaxDemo/HeroParallaxDemo";
import { MacbookScrollDemo } from "../../../components/MacBookDemo/MacbookScrollDemo";
import { ContainerScrollDemo } from "../../../components/ContainerScroll/ContainerScrollDemo";
import { LampDemo } from "../../../components/Lamp/LampDemo";
import { FlipWordsDemo } from "../../../components/FlipWord/FlipWordsDemo";
import BackButton from "../../../components/Button/BackButton";
import { useNavStore } from "../../../store/navStore";

const Web = () => {
  // const setIsNavbarBlack = useNavStore((state) => state.setIsNavbarBlack);

  // useEffect(() => {
  //   setIsNavbarBlack(false);

  //   return () => {
  //     setIsNavbarBlack(true); // optional reset
  //   };
  // }, [setIsNavbarBlack]);
  return (
    <>
      <div>
        <MacbookScrollDemo />
        <FlipWordsDemo />
        <HeroParallaxDemo />
        <ContainerScrollDemo />
      </div>
    </>
  );
};

export default Web;
