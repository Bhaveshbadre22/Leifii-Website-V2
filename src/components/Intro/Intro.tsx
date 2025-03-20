import React, { useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import zeroTree from "./zeroTree.json"; // Make sure to provide the correct path
import "./intro.scss"; // Ensure this contains your custom styles
import { Link } from "react-router-dom";

const Intro = () => {
  const constraintRef = useRef(null);

  return (
    <div className="h-auto flex flex-col md:flex-row justify-center items-center p-4 pb-0 md:pb-[4rem] md:h-[700px]  pt-0 md:pt-[10rem]">
      <div className="w-full md:w-[50%] flex justify-center mb-0 md:mb-0">
        <div className="align-middle flex items-center justify-center p-4 md:p-[20px] rounded-3xl h-[20rem] md:h-[35rem] mt-[2rem] md:mt-0">
          <Lottie
            animationData={zeroTree}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="w-full md:w-[50%] flex flex-col justify-center items-start">
        <div className="info text-[1.2rem] md:text-3xl font-[questrial] m-4  md:m-10 text-left">
          A comprehensive Marketing, Advertisement, and Design agency dedicated
          to respecting the intelligence of its audiences.
        </div>
        <motion.div
          ref={constraintRef}
          className="my-10 mx-4 md:my-20 md:mx-10 flex items-center justify-start rounded-3xl w-full pl-2"
        >
          <div className="button-container-3">
            <span className="mas text-[2rem] md:text-[2rem] text-black p-4 md:p-7">
              Know More
            </span>
            <Link to="/about" data-cursor-text="Hi" data-cursor="-inverse">
              <button type="button" name="Hover">
                Know More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
