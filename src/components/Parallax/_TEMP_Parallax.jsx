import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./parallax.scss";
import projParallaxImages from "../../assets/homeProjectParallax/index";

const Parallax = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    // const lenis = new Lenis();

    // const raf = (time) => {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    // requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="main" data-cursor="-inverse">
      <div ref={gallery} className="galleryy">
        <Column
          images={[
            projParallaxImages[0],
            projParallaxImages[1],
            projParallaxImages[2],
          ]}
          y={y}
        />
        <Column
          images={[
            projParallaxImages[3],
            projParallaxImages[4],
            projParallaxImages[5],
          ]}
          y={y2}
        />
        <Column
          images={[
            projParallaxImages[6],
            projParallaxImages[7],
            projParallaxImages[8],
          ]}
          y={y3}
        />
        <Column
          images={[
            projParallaxImages[9],
            projParallaxImages[10],
            projParallaxImages[11],
          ]}
          y={y4}
        />
      </div>
      {/* <div className="spacer"></div> */}
    </main>
  );
};

const Column = ({ images, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className="imageContainer" data-cursor-text="Explore">
          <Link reloadDocument to={`/projects/project${i + 1}`}>
            <img src={src} alt={`image ${i}`} fill draggable={false} />
          </Link>
        </div>
      ))}
    </motion.div>
  );
};

export default Parallax;
