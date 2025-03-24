import React from "react";
import projShowcaseVids from "../../assets/Showcase/index";
import websiteHeader from "../../assets/Showcase/websiteHeader.mp4";

const Showcase = () => {
  return (
    <div className="h-[300vh] bg-black font-[questrial] px-9">
      <div className="pb-[20px]">
        <div className="text-white text-[3.5rem] pt-[66px] pb-1">Featured</div>
        <div className="text-white text-[3.5rem]  flex flex-row items-center">
          <div className="h-[3.5rem] w-[7rem] rounded-full bg-slate-600 overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src={websiteHeader}
              autoPlay
              playsInline
              loop
              muted
            />
          </div>
          <span className=" px-2">Projects</span>
        </div>
      </div>

      <div>
        <div className="bg-slate-600 h-[50vh] w-full mt-10 rounded-2xl overflow-hidden">
          {" "}
          <video
            className="w-full h-full object-cover"
            src={projShowcaseVids[0]}
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
        <div className="text-white text-[1.3rem] mt-[2rem] mb-[4rem]">
          Blind Media
        </div>
      </div>

      <div>
        <div className="bg-slate-600 h-[50vh] w-full mt-10 rounded-2xl overflow-hidden">
          {" "}
          <video
            className="w-full h-full object-cover"
            src={projShowcaseVids[1]}
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
        <div className="text-white text-[1.3rem] mt-[2rem] mb-[4rem]">
          Sony LIV
        </div>
      </div>

      <div>
        <div className="bg-slate-600 h-[50vh] w-full mt-10 rounded-2xl overflow-hidden">
          {" "}
          <video
            className="w-full h-full object-cover"
            src={projShowcaseVids[2]}
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
        <div className="text-white text-[1.3rem] mt-[2rem] mb-[4rem]">
          Kaka Halwai
        </div>
      </div>

      <div>
        <div className="bg-slate-600 h-[50vh] w-full mt-10 rounded-2xl overflow-hidden">
          <video
            className="w-full h-full object-cover "
            src={projShowcaseVids[3]}
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
        <div className="text-white text-[1.3rem] mt-[2rem] mb-[4rem]">
          Karmara
        </div>
      </div>
    </div>
  );
};

export default Showcase;
