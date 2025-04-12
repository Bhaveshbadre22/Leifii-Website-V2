import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import "./about.css";
import cubes from "./cubes.json";
import leaves from "./leaves.json";
import uiux from "./uiux.json";
import designSprint from "./designSprint.json";
import scroll from "./scroll.json";
import Flipp from "./Flip/flip.jsx";
import { useNavStore } from "../../store/navStore.js";

const About = () => {
  const setIsNavbarBlack = useNavStore((state) => state.setIsNavbarBlack);

  useEffect(() => {
    setIsNavbarBlack(false);

    return () => {
      setIsNavbarBlack(true); // optional reset
    };
  }, [setIsNavbarBlack]);

  const { scrollYProgress } = useScroll();

  // Opacity transforms for each block
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.4, 0.5],
    [0, 0, 1, 1, 0]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4, 0.5],
    [0, 0, 1, 1, 0]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.5],
    [0, 0, 1, 0]
  );

  // State for the description text
  const [description, setDescription] = useState("");
  const scrollRef = useRef();

  // Update description based on scroll position

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.1) {
      setDescription("");
    } else if (v < 0.2) {
      setDescription(
        "The word Leifii symbolizes growth and nurturing in the business context. It draws an analogy to how a business owner plants the seeds of their venture, which can only grow into a successful, fruitful enterprise through the nurturing process akin to photosynthesis in leaves."
      );
    } else if (v < 0.3) {
      setDescription(
        <span>
          "<strong>Leifii</strong> focuses on designing these{" "}
          <strong>leaves</strong> – the principal means through which businesses
          interact with their environment, achieve their goals, and expand their
          horizons. Leifii helps businesses grow by providing strategies,
          design, and marketing solutions that work."
        </span>
      );
    } else if (v < 0.4) {
      setDescription(
        <span>
          "The organization embraces a corporate culture centered on the concept
          of <strong>Brandsynthesis</strong> This concept involves a willingness
          to use the broadest array of tools and techniques to understand,
          develop, and enhance the relationship between a consumer and a brand."
        </span>
      );
    } else if (v < 0.5) {
      setDescription(
        <span>
          <strong>"Leifit 2 us"</strong>
        </span>
      );
    } else setDescription(null);
  });

  return (
    <div>
      <div className="h-[150px] "></div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-screen flex flex-col items-center pt-[10rem]"
      >
        <div className="text-[2rem] font-[questrial] mb-5">Scroll Down</div>
        <div style={{ width: "100px", height: "80px" }}>
          <Lottie
            animationData={scroll}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </motion.div>

      <div ref={scrollRef} className="h-[200vh]">
        <div className="fixed w-full flex justify-center items-center flex-col md:flex-row top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <motion.div
                className="block1 w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] gradient-bg-1 rounded-br-full"
                style={{ opacity: opacity1 }}
              ></motion.div>
              <motion.div
                className="block2 w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] gradient-bg-2 rounded-br-full"
                style={{ opacity: opacity2 }}
              ></motion.div>
            </div>
            <motion.div
              className="block3 w-[16rem] h-[8rem] lg:w-[20rem] lg:h-[10rem] gradient-bg-3 rounded-bl-full rounded-tr-full"
              style={{ opacity: opacity3 }}
            ></motion.div>
          </div>

          <div className="description px-10 mt-10 md:w-[20rem] lg:w-[30rem] font-[questrial] text-justify text-[1rem] md:text-[1rem] lg:text-[1.5rem]">
            {description}
          </div>
        </div>
      </div>

      <div className=" mt-[60rem] md:mt-0 w-full h-[150vh] flex flex-col justify-center">
        <div className="text-[2rem] md:text-[4rem] font-[questrial] text-center p-[2rem] md:p-[5rem]">
          Our Main Bodies
        </div>
        <Flipp />
      </div>

      {/* <Slider /> */}

      <div className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-[questrial] text-center mt-[5rem]">
        Values we built on
        <div
          style={{
            width: "280px",
            height: "2px",
            backgroundColor: "#000",
            margin: "auto",
            marginTop: "15px",
          }}
        ></div>
      </div>

      <div className="pillars h-auto lg:h-[30rem] bg-[#fff] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 lg:gap-x-8 items-end">
        <div className="h-auto lg:h-[70%] w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-4 md:pl-[1.6rem] flex flex-col mb-6 lg:mb-0">
          <div className="text-[hsla(0,0%,7%,.7)]">001</div>
          <div className="h-[12rem] py-5 pr-6 md:pr-10">
            <Lottie
              animationData={designSprint}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="text-[1.25rem] md:text-[1.5rem]">
            Ingeniously Creative
          </div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            Harnessing innovative thinking to develop unique and effective
            solutions for our clients.
          </div>
        </div>
        <div className="h-auto lg:h-[70%] w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-4 md:pl-[1.6rem] flex flex-col mb-6 lg:mb-0">
          <div className="text-[hsla(0,0%,7%,.7)]">002</div>
          <div className="bg-transparent h-[12rem] py-5 pr-6 md:pr-10">
            <Lottie
              animationData={uiux}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="text-[1.25rem] md:text-[1.5rem]">
            Pervasively Competent
          </div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            Demonstrating expertise and skill in all we do, ensuring the highest
            quality and reliability.
          </div>
        </div>
        <div className="h-auto lg:h-[70%] w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-4 md:pl-[1.6rem] flex flex-col mb-6 lg:mb-0">
          <div className="text-[hsla(0,0%,7%,.7)]">003</div>
          <div className="bg-transparent h-[12rem] py-5 pr-6 md:pr-10">
            <Lottie
              animationData={leaves}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="text-[1.25rem] md:text-[1.5rem]">
            Influentially Insightful
          </div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            Using our knowledge and expertise to shape perceptions and drive
            meaningful change.
          </div>
        </div>
        <div className="h-auto lg:h-[70%] w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-4 md:pl-[1.6rem] flex flex-col mb-6 lg:mb-0">
          <div className="text-[hsla(0,0%,7%,.7)]">004</div>
          <div className="bg-transparent h-[12rem] py-5 pr-6 md:pr-10">
            <Lottie
              animationData={cubes}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="text-[1.25rem] md:text-[1.5rem]">
            Resolutely Driven
          </div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            Maintaining a steadfast commitment to achieving our goals and
            delivering exceptional results.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
