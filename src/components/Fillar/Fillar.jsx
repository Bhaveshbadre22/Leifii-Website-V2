import React from "react";
import SvgLine from "../../components/SvgLine/svgLine"; // Ensure this path is correct
import leafVid from "../../assets/videos/leaf.mp4";
import StaggerDiv from "../StaggerDiv/StaggerDiv";

const Fillar = () => {
  return (
    <div>
      <div className="h-[120vh] w-full bg-white overflow-hidden">
        {/* Other sections of the layout */}
        <div className="h-[65%] w-full flex flex-col md:flex-row items-center">
          <StaggerDiv className="order-2 md:order-1 w-full lg:w-[90%] text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-questrial mt-[2rem] lg:mt-[8rem] ml-[2rem] lg:ml-[5rem] items-center">
            <div>DESIGNING </div>
            <div>YOUR LEAVES</div>
          </StaggerDiv>
          <div className="order-1 md:order-2 w-full lg:w-[30%] h-full mt-[2rem] lg:mt-[6rem] lg:pt-[0rem] lg:mr-[8rem] flex items-center justify-center">
            <div className="bg-slate-600 h-[12rem] md:h-[14rem] lg:h-[18rem] w-[18rem] md:w-[14rem] lg:w-[30rem] rounded-full overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src={leafVid}
                autoPlay
                playsInline
                loop
                muted
              ></video>
            </div>
          </div>
        </div>

        <div className="w-full">
          <SvgLine />
        </div>

        {/* The quote section */}
        <div className="w-[80%] mx-auto flex justify-center items-center mt-8">
          <div className="w-full flex flex-col text-center text-[1.25rem] md:text-[1.75rem] lg:text-[2rem] mx-3 sm:mx-0 sm:px-10 tracking-wide uppercase grow-line pr-0">
            Together we will grow businesses and build brands that make a
            difference
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fillar;
