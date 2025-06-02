import React, { useEffect, useState } from "react";
import { ThreeDCardDemo } from "../../components/ui/ThreeDCardDemo.tsx";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";
import dragSide from "./dragSide.json";
import { FaArrowAltCircleRight } from "react-icons/fa"; // Import the right arrow icon from Font Awesome
import { useNavStore } from "../../store/navStore.js";

const Blog = () => {
  const setHasPreloaderAnimationEnded = useNavStore(
    (state) => state.setHasPreloaderAnimationEnded
  );

  useEffect(() => {
    setHasPreloaderAnimationEnded(true);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" bg-black pb-20 px-10">
      <div className="bg-white h-[1px] w-[80%] mx-auto"></div>
      <div className="overflow-hidden flex flex-col items-center justify-center">
        <motion.h1
          className="text-[40px] text-white ml-5 mt-12 mr-5 mb-3 font-[Questrial] "
          // initial={{ opacity: 0, x: -200 }}
          // whileInView={{ opacity: 1, x: 20 }}
          // whileHover={{ scale: 1.05, x: 30 }}
          // transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        >
          Resources
        </motion.h1>
        <motion.h1
          className="text-[55px] text-white ml-5 pt-5 mr-5 mb-5 font-[Questrial]"
          // initial={{ opacity: 0, x: -200 }}
          // whileInView={{ opacity: 1, x: 20 }}
          // whileHover={{ scale: 1.05, x: 30 }}
          // transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        >
          The Latest from LEIFII Co
        </motion.h1>
      </div>

      <Slider {...settings}>
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        {/* Add more ThreeDCardDemo components here */}
      </Slider>

      <div className="text-white flex justify-end pr-5 align-middle items-center ">
        <div className="mr-2 pt-5">
          {" "}
          <Lottie
            animationData={dragSide}
            style={{ width: "60px", height: "60px" }}
          />
        </div>
        Drag to explore ➡
      </div>
      {/* <div className="flex justify-center">
        <button className="text-black bg-white rounded-full px-5 py-4">
          Explore More
        </button>
      </div> */}
    </div>
  );
};

export default Blog;
