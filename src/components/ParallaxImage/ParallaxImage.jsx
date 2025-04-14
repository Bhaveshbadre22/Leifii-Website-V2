import React from "react";
import SimpleParallax from "simple-parallax-js";

const ParallaxImage = ({ className, src, direction = "down" }) => {
  return (
    <div className={`${className ? className : ""} h-fit overflow-hidden`}>
      <SimpleParallax scale={1.3} orientation={direction}>
        <img src={src} alt="image" />
      </SimpleParallax>
    </div>
  );
};

export default ParallaxImage;
