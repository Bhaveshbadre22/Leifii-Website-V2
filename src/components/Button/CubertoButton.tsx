import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CubertoButtonProps {
  text: string;
  href?: string;
  className?: string;
  hoverText?: string;
}

const CubertoButton: React.FC<CubertoButtonProps> = ({
  text,
  href,
  className,
  hoverText,
}) => {
  const navigate = useNavigate();

  const btnVariants = {
    initial: { scale: 1 },
    hover: {
      scaleX: 1.03,
      transition: {
        duration: 0.4,
        ease: [0.34, 5.56, 0.64, 1],
      },
    },
  };

  const fillVariants = {
    initial: { translateY: "100%", borderRadius: "50% 50% 0 0" },
    hover: {
      translateY: "0%",
      borderRadius: "0%",
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0, 1],
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, translateY: 10 },
    hover: {
      opacity: 1,
      translateY: 0,
      transition: { delay: 0.1, duration: 0.2 },
    },
  };

  return (
    <motion.button
      className={`relative overflow-hidden border border-black px-16 py-12 text-black text-2xl font-medium rounded-[1000px] ${className}`}
      onClick={() => href && navigate(href)}
      variants={btnVariants}
      initial="initial"
      whileHover="hover"
      data-cursor-text={hoverText ? hoverText : ""}
    >
      {/* Background fill animation */}
      <motion.span
        className="absolute inset-0 bg-black cb-btn_cta-ripple"
        variants={fillVariants}
      />

      {/* Default text */}
      <span className="relative" data-text={text}>
        {text}
      </span>

      {/* Hover text (white) */}
      <motion.span
        className="absolute inset-0 flex justify-center items-center text-white"
        data-text={text}
        data-cursor="-inverse"
        variants={textVariants}
      >
        {text}
      </motion.span>
    </motion.button>
  );
};

export default CubertoButton;
