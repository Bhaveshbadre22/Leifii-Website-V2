import React from "react";
import Cube from "../../components/Cube/cube.jsx";
import Lottie from "lottie-react";
import drag from "./dragWhite.json";

const WhyUs = () => {
  return (
    <div className=" bg-black ">
      <div className="text-white text-[45px] p-10 pb-0 flex justify-center font-[Questrial]">
        Why us?
      </div>

      <div className="flex flex-row w-full h-screen justify-center pl-10">
        <div className="w-[50%]">
          <Cube />
        </div>
        {/* <div className="w-[50%]">
      <Cube />
    </div> */}
      </div>

      <div className="text-white text-[35px] flex justify-center pb-10 font-[Questrial]">
        Drag meee
      </div>
    </div>
  );
};

export default WhyUs;
