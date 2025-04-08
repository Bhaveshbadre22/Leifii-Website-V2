import React from "react";
import Photo from "./photo";
import Trail from "../../../components/Trail/MyTrail";
// import BackButton from "../../components/BackButton.jsx/backButton.jsx";

const Photography = () => {
  return (
    <div>
      <Photo />
      {/* <div className="h-[100vh] bg-gradient-to-b from-[black] to-[#333a91]" /> */}

      <Trail />
    </div>
  );
};

export default Photography;
