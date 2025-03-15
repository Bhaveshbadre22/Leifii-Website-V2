import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Videoend = () => {
  const { scrollY } = useViewportScroll();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" }); // Tailwind's sm breakpoint

  const scale = useTransform(
    scrollY,
    [0, 1000],
    isMobile ? [0.9, 1.2] : [0.8, 1.2]
  );

  return (
    <motion.div className=" w-full  transform-gpu overflow-hidden ">
      <motion.video
        className={`video_section ${
          isMobile
            ? "h-[250px] overflow-hidden"
            : "h-[250px] sm:h-[250px] md:h-auto"
        } w-[100%] md:w-[95%] object-cover border rounded-3xl`}
        src="/lastvid.mp4"
        playsInline
        autoPlay
        loop
        muted
        style={{ scale }} // Apply the scaling based on scroll
      ></motion.video>
    </motion.div>
  );
};

export default Videoend;
