import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import Fillar from "../components/Fillar/Fillar";
import Video from "../components/Video/Video";
import Intro from "../components/Intro/Intro";
import Parallax from "../components/Parallax/parallax";
import Showcase from "../components/Showcase/Showcase";
import Element from "../components/Element/Element";

const LandingPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="h-20"></div>

        <HeroSection />

        <Fillar />
        <div className="w-full overflow-hidden">
          <Video />
        </div>
        <Intro />
        <div className="hidden md:block">
          <Parallax />
        </div>
        <div className="block md:hidden">
          <Showcase />
        </div>
        <Element />
        {/*
        <div className="bg-black text-white pt-1.5">
          <div className="text-[2.5rem] md:text-[40px] lg:text-[4rem] p-4 sm:p-10 pb-0 flex justify-center font-[Questrial]">
            Why us?
          </div>

          <div className="flex flex-col sm:flex-row w-full h-screen sm:h-[85vh] justify-center pl-4 sm:pl-10">
            <div className="w-full sm:w-[75%] md:w-[60%] lg:w-[50%]">
              <Cube />
            </div>
          </div>

          <div className="flex justify-center pb-0 mb-0">
            <Lottie
              animationData={drag}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
            />
          </div>
        </div>
        <div>
          <Testimonials />
        </div>
        <BlogList />

        <div className="h-[55vh] flex justify-center items-center">
          <Videoend />
        </div> */}
      </div>
    </>
  );
};

export default LandingPage;
