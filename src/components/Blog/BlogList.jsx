import React from "react";
import { ThreeDCardDemo } from "../3DCard/ThreeDCardDemo";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";
import dragSide from "./dragSide.json";
import blogData from "./blogData.jsx";
import StaggerDiv from "../StaggerDiv/StaggerDiv";

const BlogList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 4, // Default for large screens
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536, // Large desktops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280, // Laptops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Tablets in landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Tablets in portrait
        settings: {
          slidesToShow: 1.5, // Shows half of the next slide
        },
      },
      {
        breakpoint: 640, // Mobile landscape
        settings: {
          slidesToShow: 1.2, // Slightly shows next slide
        },
      },
      {
        breakpoint: 480, // Small phones
        settings: {
          slidesToShow: 1, // Single slide for best readability
        },
      },
    ],
  };

  return (
    <div className="bg-black pb-20 px-10" data-cursor="-inverse">
      <div className="bg-white h-[1px] w-[80%] mx-auto"></div>
      <div className="overflow-hidden flex flex-col items-center justify-center">
        <StaggerDiv className="text-center">
          <h1 className="text-[2.5rem] md:text-[40px] text-white ml-5 pt-[3rem] mt-12 mr-5 mb-3 font-[Questrial]">
            Resources
          </h1>
          <h1 className="text-[1.5rem] md:text-[55px] text-white ml-5 pt-5 mr-5 mb-5 font-[Questrial]">
            The Latest from LEIFII Co
          </h1>
        </StaggerDiv>
      </div>
      <div className="" data-cursor-text="Drag">
        <Slider {...settings} className="flex flex-wrap justify-center">
          {blogData.map((blog) => (
            <ThreeDCardDemo key={blog.id} blog={blog} />
          ))}
        </Slider>
      </div>
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
