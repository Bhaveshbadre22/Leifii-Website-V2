import React, { useRef, useEffect } from "react";
import "./svgLine.css";

const SvgLine = () => {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
    window.addEventListener("resize", setPath.bind(null, progress)); // Handle resize
    return () =>
      window.removeEventListener("resize", setPath.bind(null, progress));
  }, []);

  const setPath = (progress) => {
    const width =
      path.current?.parentElement?.offsetWidth || window.innerWidth * 0.85;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className="flex lg:pl-10 mt-5 md:mt-2 lg:mt-2 h-[10vh] w-full items-center justify-center bg-white">
      <div className="bodu">
        <div className="line pl-6 lg:pl-12 ">
          <div
            onMouseEnter={manageMouseEnter}
            onMouseMove={manageMouseMove}
            onMouseLeave={manageMouseLeave}
            className="box"
          ></div>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SvgLine;
