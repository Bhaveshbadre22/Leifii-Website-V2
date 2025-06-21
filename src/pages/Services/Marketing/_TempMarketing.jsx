import React, { useEffect } from "react";
import MarketingHero from "./marketingHero";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./swiperr.css";
import BackButton from "../../../components/Button/BackButton";
import Lottie from "lottie-react";
import dragBlack from "./dragBlack.json";
import { useNavStore } from "../../../store/navStore";
import {
  project1,
  project2,
  project3,
  project4,
  project6,
  project8,
  project9,
} from "../../../assets/projImages";
import blob3 from "../../../assets/blob3.png";
import PageLoader from "../../../components/PageLoader/pageLoader";

const Marketing = () => {
  const setIsNavbarBlack = useNavStore((state) => state.setIsNavbarBlack);

  useEffect(() => {
    setIsNavbarBlack(false);

    return () => {
      setIsNavbarBlack(true); // optional reset
    };
  }, [setIsNavbarBlack]);

  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });
  const [ref4, inView4] = useInView({ threshold: 0.1 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <>
      <PageLoader />
      {/* <Navbar /> */}
      <div className="pt-[2rem] pl-[2rem] md:pt-[4rem] md:pl-[4rem] mt-10">
        {/* <BackButton /> */}
      </div>

      <MarketingHero />
      <div className="flex flex-col bg-[#fafafa] pb-8">
        <div className="flex justify-center py-4">
          <h2 className="text-[2rem] md:text-[3rem] font-medium my-[20px] md:my-[50px]">
            Recent Projects
          </h2>
        </div>

        <div className="flex flex-wrap justify-center px-6">
          <motion.div
            className="w-full h-[40rem] sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <img
              src={project1}
              alt="Your Image"
              className="w-full h-2/3 sm:h-[20rem] md:h-[23rem]"
            />
            <p className="text-black font-medium py-4 mt-2 pb-2">
              Marketing & Design for Karmara Enterprises Solution Co
            </p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              adipisicing elit. adipisicing <br /> elit adipisicing lorem....
            </p>
          </motion.div>

          <motion.div
            className="w-full h-[40rem] sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <img
              src={project2}
              alt="Your Image"
              className="w-full h-2/3 sm:h-[20rem] md:h-[23rem]"
            />
            <p className="text-black font-medium py-4 mt-2 pb-2">
              Product Marketing for Veerali Enterprises Solution
            </p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              adipisicing elit. adipisicing <br /> elit adipisicing lorem....
            </p>
          </motion.div>

          <motion.div
            className="w-full h-[40rem] sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <img
              src={project3}
              alt="Your Image"
              className="w-full h-2/3 sm:h-[20rem] md:h-[23rem]"
            />
            <p className="text-black font-medium py-4 mt-2 pb-2">
              Product Marketing & Design for KHS Enterprises Solution
            </p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              adipisicing elit. adipisicing <br /> elit adipisicing lorem....
            </p>
          </motion.div>

          <motion.div
            className="w-full h-[40rem] sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            ref={ref4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <img
              src={project4}
              alt="Your Image"
              className="w-full h-2/3 sm:h-[20rem] md:h-[23rem]"
            />
            <p className="text-black font-medium py-4 mt-2 pb-2">
              Product Marketing & Design for KHS Solution Enterprises
            </p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              adipisicing elit. adipisicing <br /> elit adipisicing lorem....
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mt-[20px] md:mt-[100px]">
        <div className="flex justify-center">
          <div className="flex px-10 pt-4 flex-col">
            <h2 className="text-[2rem] md:text-[3rem] font-medium mt-10 ">
              Recent Work
            </h2>
            <div className="bg-black h-[2px]  w-[200px] md:w-[280px] mt-5"></div>
          </div>
        </div>

        <Swiper
          spaceBetween={120}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            // Adjust these breakpoints as per your design requirements
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          // data-cursor="-inverse"
          data-cursor-text="Drag"
        >
          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src={blob3}
                className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src={project4}
                className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src={blob3}
                className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src={project6}
                className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src={blob3}
                className="w-60 h-60 md:w-80 md:h-80  transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src={project8}
                className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src={blob3}
                className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src={project9}
                className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlide components as needed */}
        </Swiper>

        <div className="text-black flex justify-end pr-10 align-middle items-center">
          <div className="">
            <Lottie
              animationData={dragBlack}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          Drag to explore ➡
        </div>
      </div>
    </>
  );
};

export default Marketing;
