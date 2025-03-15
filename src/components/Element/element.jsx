import React from "react";
import Lottie from "lottie-react";
import design2 from "./design2.json";
import strategy from "./strategy.json";
import marketing from "./marketing.json";
import cam from "./cam.json";
import { Link } from "react-router-dom";
import "./element.scss";
const Element = () => {
  return (
    <div className="h-auto bg-[#fff] flex flex-col px-1 sm:px-8 lg:px-16">
      <div className="text-container ml-[2rem] md:ml-[0rem] flex flex-col lg:flex-row items-center pb-10 pt-16">
        <p className="text-[2.3rem] md:text-4xl lg:text-6xl w-full lg:w-1/2 lg:pl-[1.5rem] mt-5 lg:mt-0">
          Designing your
          <br /> leaves with
        </p>
        <div className="flex flex-col w-full lg:w-1/2 mt-8 lg:mt-20 space-y-[2rem]">
          <p className="text-[1.2rem] md:text-lg lg:text-xl">
            We can help you grow those leaves to reach all the right people, and
            make sure they understand what sets you apart from the competition
          </p>

          {/* <div>
            <Link to="/services">
              <button className="bg-black text-white rounded-full py-6 px-10 md:py-3 md:px-6 lg:py-4 lg:px-8 mt-10 font-[Questrial] text-[1rem] md:text-base lg:text-lg">
                Explore Services 👀
              </button>
            </Link>
          </div> */}

          <div className="button-container-33">
            <span className="mass md:text-[2rem] text-black py-6 px-10 md:py-3 md:px-6 lg:py-4 lg:px-8 mt-10 font-[Questrial]">
              Explore Services 👀
            </span>
            <Link to="/services">
              <button type="button" className="text-[1rem]" name="Hover">
                Explore Services 👀
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-auto md:mt-20 mb-20 ">
        <div className="h-auto w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-4 lg:pl-8 flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">001</div>
          <div className="flex items-start py-5 pr-4 lg:pr-10">
            <Lottie
              animationData={design2}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="text-lg lg:text-xl">Design</div>
          <div className="text-[hsla(0,0%,7%,.7)] text-sm lg:text-base">
            The clue is in the name: we realise your visual concept at pace.
          </div>
        </div>
        <div className="h-auto w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-4 lg:pl-8 flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">002</div>
          <div className="flex items-start py-5 pr-4 lg:pr-10">
            <Lottie
              animationData={marketing}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="text-lg lg:text-xl">Marketing</div>
          <div className="text-[hsla(0,0%,7%,.7)] text-sm lg:text-base">
            We solve problems with strategic design. Lorem ipsum, dolor sit amet
            consectetu
          </div>
        </div>
        <div className="h-auto w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-4 lg:pl-8 flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">003</div>
          <div className="flex items-start py-5 pr-4 lg:pr-10">
            <Lottie
              animationData={strategy}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="text-lg lg:text-xl">Strategy</div>
          <div className="text-[hsla(0,0%,7%,.7)] text-sm lg:text-base">
            We tactically expand your brand into the digital world.
          </div>
        </div>
        <div className="h-auto w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-4 lg:pl-8 flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">004</div>
          <div className="flex items-start py-5 pr-4 lg:pr-10">
            <Lottie
              animationData={cam}
              style={{
                width: "100px",
                height: "100px",
                transform: "scale(1.5)",
              }}
            />
          </div>
          <div className="text-lg lg:text-xl">Content</div>
          <div className="text-[hsla(0,0%,7%,.7)] text-sm lg:text-base">
            We facilitate workshops that fast track discovery of your brand’s
            identity
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element;
