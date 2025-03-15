import React from "react";
import Photo from "../Photo/photo";
import Trail from "../Trial/trail.jsx";
import BackButton from "../../components/BackButton.jsx/backButton.jsx";

const Photography = () => {
  return (
    <div>
      <Photo />
      <div className="h-[100vh] bg-gradient-to-b from-[black] to-[#333a91]"></div>

      <Trail />
    </div>
  );
};

export default Photography;
