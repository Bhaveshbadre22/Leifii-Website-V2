import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CubertoButtonProps {
  text: string;
  href?: string;
  className?: string;
  hoverText?: string;
  innerPadding?: string;
  variant?: string;
}

const CubertoButton: React.FC<CubertoButtonProps> = ({
  text,
  href,
  className,
  hoverText,
  innerPadding,
  variant = "dark",
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
    initial: {
      translateY: "100%",
      borderRadius: "50% 50% 0 0",
      transition: {
        duration: 0.3, // Slow return
        ease: [1, 0.5, 0.5, 0.4],
      },
    },
    hover: {
      translateY: "0%",
      borderRadius: "0%",
      transition: {
        duration: 0.5, // Faster entry
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
      className={` ${className} relative overflow-hidden border w-auto ${
        variant == "dark" ? "border-black" : "border-white"
      } ${innerPadding ? innerPadding : "px-16 py-12"} ${
        variant == "dark" ? "text-black" : "text-white"
      } text-2xl font-medium rounded-[1000px] flex justify-center items-center`}
      onClick={() => href && (window.location.href = href)}
      variants={btnVariants}
      initial="initial"
      whileHover="hover"
      animate="initial"
      onHoverEnd={() => {}}
      data-cursor-text={hoverText ? hoverText : ""}
    >
      {/* Background fill animation */}
      <motion.span
        className={`absolute inset-0 ${
          variant == "dark" ? "bg-black" : "bg-white"
        } cb-btn_cta-ripple`}
        variants={fillVariants}
      />

      {/* Default text */}
      <span className="relative" data-text={text}>
        {text}
      </span>

      {/* Hover text (white) */}
      <motion.span
        className={`absolute inset-0 z-[2] flex justify-center items-center ${
          variant == "dark" ? "text-white" : "text-black"
        }`}
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
