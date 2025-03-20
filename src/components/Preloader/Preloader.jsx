import React from "react";
import "./preloader.scss";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { opacity, slideUp } from "./variants";

const words = [
  "Looking For",
  "Growth",
  "Creativity",
  "Leads",
  "Network",
  "Influencers",
  "Reach",
  "Engagement",
  "Design",
  "Leif it to us...",
];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [hasPageLoaded, setHasPageLoaded] = useState(false);

  useEffect(() => {
    // Event listener for the page load event
    const handlePageLoad = () => {
      setHasPageLoaded(true); // Hide preloader once the page is loaded
    };
    console.log("Page loaded");

    // Check if the page is already loaded
    if (document.readyState === "complete") {
      console.log("Page loaded");
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad, false); // Add listener for page load
    }

    // Cleanup the event listener
    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 300
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {!hasPageLoaded && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className="introduction"
        >
          {dimension.width > 0 && (
            <>
              <motion.p variants={opacity} initial="initial" animate="enter">
                <span></span>
                {words[index]}
              </motion.p>
              <svg>
                <motion.path
                  variants={curve}
                  initial="initial"
                  exit="exit"
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
