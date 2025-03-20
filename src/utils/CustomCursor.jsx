import React, { useEffect } from "react";
import "mouse-follower/src/scss/index.scss";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

const CustomCursor = ({}) => {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
      speed: 0.4, // Adjust speed
      ease: "expo.out",
      container: document.body,
      skewing: 0.5,
    });

    return () => {
      cursor.destroy();
    };
  }, []);
  return null;
};

export default CustomCursor;
