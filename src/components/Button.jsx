import { motion } from "framer-motion";
import React from "react";

const CubertoButton = ({ text }) => {
  return (
    <motion.button className="relative px-6 py-3 text-white border-2 border-black uppercase font-semibold tracking-widest overflow-hidden rounded-full">
      {/* Text Layer */}
      <span className="relative z-10">{text}</span>

      {/* Animated Fill Layer */}
      <motion.span
        className="absolute inset-0 bg-black"
        initial={{ translateY: "100%" }}
        whileHover={{ translateY: "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

export default CubertoButton;
