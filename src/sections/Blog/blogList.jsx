import React from "react";
import { ThreeDCardDemo } from "../../components/ui/ThreeDCardDemo.tsx";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";
import dragSide from "./dragSide.json";
import blogData from "./blogData";

const BlogList = () => {
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
        breakpoint: 1280, // Small laptops and larger tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Larger tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Small tablets and phones
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black pb-20 px-10">
      <div className="bg-white h-[1px] w-[80%] mx-auto"></div>
      <div className="overflow-hidden flex flex-col items-center justify-center">
        <motion.h1 className="text-[2.5rem] md:text-[40px] text-white ml-5 pt-[3rem] mt-12 mr-5 mb-3 font-[Questrial]">
          Resources
        </motion.h1>
        <motion.h1 className="text-[1.5rem] md:text-[55px] text-white ml-5 pt-5 mr-5 mb-5 font-[Questrial]">
          The Latest from LEIFII Co
        </motion.h1>
      </div>
      <Slider {...settings} className="flex flex-wrap justify-center">
        {blogData.map((blog) => (
          <ThreeDCardDemo key={blog.id} blog={blog} />
        ))}
      </Slider>
      <div className="text-white flex justify-end pr-5 align-middle items-center">
        <div className="mr-2 pt-5">
          <Lottie
            animationData={dragSide}
            style={{ width: "60px", height: "60px" }}
          />
        </div>
        Drag to explore ➡
      </div>
    </div>
  );
};

export default BlogList;
