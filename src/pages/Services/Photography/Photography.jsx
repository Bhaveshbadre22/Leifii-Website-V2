import React, { useEffect } from "react";
import Photo from "./photo";
import Trail from "../../../components/Trail/MyTrail";
// import BackButton from "../../components/BackButton.jsx/backButton.jsx";
import { useNavStore } from "../../../store/navStore";

const Photography = () => {
  const setIsNavbarBlack = useNavStore((state) => state.setIsNavbarBlack);

  useEffect(() => {
    setIsNavbarBlack(true);

    return () => {
      setIsNavbarBlack(false); // optional reset
    };
  }, [setIsNavbarBlack]);

  return (
    <div className="bg bg-black pt-16 sm:pt-10">
      <Photo />
      {/* <div className="h-[100vh] bg-gradient-to-b from-[black] to-[#333a91]" /> */}

      <Trail />
    </div>
  );
};

export default Photography;
