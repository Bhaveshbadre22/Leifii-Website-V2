import React, { useRef, useEffect } from "react";
import "./svgLine.css";

const SvgLine = () => {
  const path = useRef(null);
  const svgRef = useRef(null); // Add ref for SVG
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
    window.addEventListener("resize", () => setPath(progress));
    return () => window.removeEventListener("resize", () => setPath(progress));
  }, []);

  const setPath = (progress) => {
    if (!path.current || !svgRef.current) return;

    const svgWidth = svgRef.current.clientWidth;
    const pathWidth = svgWidth * 0.8; // Adjust this value for desired line length
    const startX = (svgWidth - pathWidth) / 2; // Calculate centered position

    path.current.setAttributeNS(
      null,
      "d",
      `M${startX} 250 Q${startX + pathWidth * x} ${250 + progress}, ${
        startX + pathWidth
      } 250`
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
    <div className="flex mt-5 md:mt-2 lg:mt-2 h-[10vh] w-full items-center justify-center bg-white">
      <div className="bodu">
        <div className="line">
          <div
            onMouseEnter={manageMouseEnter}
            onMouseMove={manageMouseMove}
            onMouseLeave={manageMouseLeave}
            className="box"
          ></div>
          <svg ref={svgRef} className="w-full">
            {" "}
            {/* Add ref here */}
            <path ref={path}></path> {/* Remove ml-20 from here */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SvgLine;
