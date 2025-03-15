import React from "react";
import Cube from "../../components/Cube/cube";

const Philosophy = () => {
  return (
    <div className="h-[850px] border rounded-t-3xl">
      <div className="h-[300px]">
        <h1 className="font-[questrial] text-[140px] m-20 my-0">Our</h1>
        <h1 className="text-[150px] italic m-20 mt-0 font-light">philosophy</h1>
      </div>
      <div className="h-[350px] mt-20 flex flex-row">
        {" "}
        <div className="w-[50%]">
          {/* <Cube /> */}
          <video
            src="//cdn.cuberto.com/cb/home/summary/2.mp4?3"
            preload="auto"
            autoPlay
            playsInline
            loop
            muted
            className="object-contain w-full h-full align-middle"
          ></video>
        </div>
        <div className="w-[50%] font-[questrial] text-xl py-0 px-20 pt-10 font-medium">
          In our team, developers work alongside designers, strategists and
          analysts. Leifii doesn't do cookie-cutter solutions and we build
          products exactly as they were during the design phase, no short cuts
          or simplifications.<br></br> <br />
          We're driven by user‑centered design that drives productivity and
          increases revenue. Our expertise and ingenuity are remarkable, yet we
          always strive to outdo and outperform our previous achievements.
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
