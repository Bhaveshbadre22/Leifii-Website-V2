import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" }); // Tailwind's `sm` breakpoint

  return (
    <>
      {isMobile ? (
        <div className="text-black h-[200px] w-full flex flex-col mt-[120px]">
          {/* Alternate layout for mobile */}
          <div className="mb-0 mt-3 flex flex-col items-center px-[1rem] w-full">
            <h1 className="text-[2.8rem] font-medium py-3 text-left w-full">
              Only Creativity
            </h1>
            <div className="flex flex-row justify-between items-center w-full">
              <motion.div
                className="rounded-full rounded-tr-[0] rounded-bl-[0] overflow-hidden w-[80px] h-[40px]"
                initial={{ x: 10 }}
                animate={{ x: 50 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0.1,
                }}
              >
                <video
                  className=""
                  src="websitesHeader.mp4"
                  autoPlay
                  playsInline
                  loop
                  muted
                ></video>
              </motion.div>
              <div className="text-[2.8rem] pr-[3rem] font-extralight italic">
                Makes
              </div>
            </div>
            <h1 className="font-medium mb-0 pt-3 text-[2.8rem] pb-0 text-left w-full">
              The Eyes Grow
            </h1>
          </div>
        </div>
      ) : (
        <div className="text-black h-[400px] w-full flex flex-col mt-[100px] sm:mt-[130px] md:mt-[180px] lg:mt-[250px]">
          {/* Original layout for larger screens */}
          <div className="mx-4 sm:mx-10 mb-0 mt-3 flex flex-col sm:flex-row items-center sm:items-start">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <motion.h1
                  initial={{ x: -20 }}
                  animate={{ x: 10 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 0.1,
                  }}
                  className="text-[60px] md:text-[60px] lg:text-[80px] font-extralight py-3 mb-5"
                >
                  Only Creativity
                </motion.h1>

                <motion.div
                  className="ml-0 sm:ml-[30px] mt-[10px] rounded-full overflow-hidden rounded-tr-[0] rounded-bl-[0] w-[100px] h-[60px] lg:w-[150px] lg:h-[80px]"
                  initial={{ x: 200 }}
                  animate={{ x: 10 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 0.1,
                  }}
                >
                  <video
                    className="text-xl"
                    src="websitesHeader.mp4"
                    autoPlay
                    playsInline
                    loop
                    muted
                  ></video>
                </motion.div>
              </div>
              <motion.h1
                initial={{ x: 400 }}
                animate={{ x: 10 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="font-medium mb-0 text-[60px] lg:text-[80px] pb-0 text-center sm:text-left"
              >
                Makes the eyes grow
              </motion.h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
