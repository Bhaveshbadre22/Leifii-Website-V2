import React, { useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import down from "./downarrow.json";
import Lottie from "lottie-react";
import { isMobile } from "react-device-detect";
import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
} from "../../assets/photography";

const HeroSection = () => {
  const { scrollY } = useScroll();

  const horiScrollRef = useRef(null);
  const longDivRef = useRef(null);
  const { scrollYProgress: horiScrollY } = useScroll({
    target: horiScrollRef,
    offset: ["start", "end"],
  });
  const { scrollYProgress: longDivScrollY } = useScroll({
    target: longDivRef,
    offset: ["start", "end"],
  });

  // Define scaleDot and xText transformations
  const scaleDot = useTransform(
    scrollY,
    isMobile ? [10, 300] : [10, 300],
    isMobile ? ["0.1", "15"] : ["0.1", "8"]
  );
  const yDot = useTransform(
    longDivScrollY,
    [0, 0.2, 0.5],
    isMobile ? ["0%", "-100%", "100%"] : ["0%", "-10%", "20%"]
  );
  useMotionValueEvent(yDot, "change", (val) => {
    console.log(val);
  });
  const xText = useTransform(
    horiScrollY,
    [0, 1],
    isMobile ? ["35vw", "-100%"] : ["50vw", "-100%"]
  );

  // Define transformations for imagesClass
  const xImages = useTransform(horiScrollY, [0.2, 1], ["100%", "-230%"]);
  const opacityImages = useTransform(scrollY, [0, 0.8, 1], [0, 0, 1]);

  // Define yDot transformation for vertical movement of the dot
  // const yDot = useTransform(scrollY, [0, 50], ["0%", "-30%"]); // Adjust the range and values as needed
  // const yDot = useTransform(
  //   scrollY,
  //   isMobile ? [0, 50] : [0, 80, ],
  //   isMobile ? ["0%", "-20%"] : ["0%", "-100%"]
  // );

  return (
    <div className="relative w-screen" ref={horiScrollRef}>
      <div className="absolute top-0 w-full h-screen z-[1]">
        <motion.div
          className="textClass fixed top-[35%] md:top-[25%] -translate-y-[50%] bottom-0 z-[2] text-white text-[8rem] md:text-[10rem] lg:text-[15rem] flex space-x-[2rem] md:space-x-[2rem] lg:space-x-[4rem] list-none gap-1 md:gap-4 lg:gap-10"
          style={{ x: xText }}
        >
          <li>THIS</li>
          <li>IS</li>
          <li>HOW</li>
          <li>WE</li>
          <li>CAN</li>
          <li>GROW.</li>
        </motion.div>

        <motion.div
          className="imagesClass h-[50rem] fixed top-[25%] md:top-0 lg:top-[10%] z-[3] text-white flex space-x-[2rem] list-none gap-[20rem]"
          style={{ x: xImages, opacity: opacityImages }}
        >
          <motion.img
            src={carousel1}
            alt="Image 1"
            className="h-[10rem] w-[15rem] md:h-[10rem] md:w-[15rem] lg:h-[15rem] lg:w-[20rem] object-cover"
            style={{ filter: "grayscale(100%)" }}
            whileHover={{
              filter: "grayscale(0%)",
              scale: 1.1,
              borderRadius: "10%",
              rotate: "-5deg",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={carousel2}
            alt="Image 2"
            className="h-[10rem] w-[15rem] md:h-[10rem] md:w-[15rem] lg:h-[15rem] lg:w-[20rem] mt-[15rem] md:mt-[20rem] lg:mt-[25rem]   object-cover"
            style={{ filter: "grayscale(100%)" }}
            whileHover={{
              filter: "grayscale(0%)",
              scale: 1.1,
              borderRadius: "10%",
              rotate: "5deg",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={carousel3}
            alt="Image 3"
            className="h-[10rem] w-[15rem] md:h-[10rem] md:w-[15rem] lg:h-[15rem] lg:w-[20rem] object-cover"
            style={{ filter: "grayscale(100%)" }}
            whileHover={{
              filter: "grayscale(0%)",
              scale: 1.1,
              borderRadius: "10%",
              rotate: "-5deg",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={carousel4}
            alt="Image 4"
            className="h-[10rem] w-[15rem] md:h-[10rem] md:w-[15rem] lg:h-[15rem] lg:w-[20rem] mt-[15rem] md:mt-[20rem] lg:mt-[25rem]   object-cover"
            style={{ filter: "grayscale(100%)" }}
            whileHover={{
              filter: "grayscale(0%)",
              scale: 1.1,
              borderRadius: "10%",
              rotate: "5deg",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={carousel5}
            alt="Image 5"
            className="h-[10rem] w-[15rem] md:h-[10rem] md:w-[15rem] lg:h-[15rem] lg:w-[20rem] object-cover"
            style={{ filter: "grayscale(100%)" }}
            whileHover={{
              filter: "grayscale(0%)",
              scale: 1.1,
              borderRadius: "10%",
              rotate: "-5deg",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={carousel6}
            alt="Image 6"
            className="h-[10rem] w-[15rem] md:h-[10rem] md:w-[15rem] lg:h-[15rem] lg:w-[20rem] mt-[15rem] md:mt-[20rem] lg:mt-[25rem]   object-cover"
            style={{ filter: "grayscale(100%)" }}
            whileHover={{
              filter: "grayscale(0%)",
              scale: 1.1,
              borderRadius: "10%",
              rotate: "5deg",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
      <div className="flex relative items-center justify-center h-[300vh] w-full bg-white overflow-hidden">
        <div className="absolute flex flex-col justify-center items-center w-full h-screen top-0">
          <div className="font-[questrial] my-5 text-center  text-[1.6rem] md:text-[3rem] lg:text-[5rem] mx-[1rem] lg:mx-0 tracking-widest bg-gradient-to-r from-[#06F53A] via-[#0829C2] to-[#131313] text-transparent bg-clip-text">
            THIS IS YOUR BUSINESS
          </div>

          <div className="">
            <Lottie
              animationData={down}
              className="h-[8rem] md:h-[12rem] lg:h-[15rem] w-20"
            />
          </div>
        </div>

        <motion.div
          className="dot bg-black h-[10rem] w-[10rem] md:h-[30rem] md:w-[30rem] rounded-full overflow-hidden"
          style={{ scale: scaleDot, y: yDot }} // Apply yDot here
        />
      </div>
    </div>
  );
};

export default HeroSection;
