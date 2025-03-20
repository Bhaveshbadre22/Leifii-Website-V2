import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import newVideo from "../../assets/videos/newVid.mp4";

const Video = () => {
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" }); // Tailwind's sm breakpoint

  const scale = useTransform(
    scrollY,
    [0, 1000],
    isMobile ? [0.9, 1.2] : [0.8, 1.2]
  );

  return (
    <motion.div className=" w-full  transform-gpu overflow-hidden mt-[5rem] lg:mt-[10rem] md:mt-0">
      <motion.video
        className={`video_section ${
          isMobile
            ? "h-[450px] overflow-hidden"
            : "h-[650px] sm:h-[500px] md:h-[800px]"
        } w-[100%] md:w-[95%] object-cover border rounded-3xl`}
        src={newVideo}
        playsInline
        autoPlay
        loop
        muted
        style={{ scale }} // Apply the scaling based on scroll
      ></motion.video>
    </motion.div>
  );
};

export default Video;
