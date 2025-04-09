import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ImageScrollItem = ({ service, index }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const direction = index % 2 === 0 ? -1 : 1;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [`${-100 * direction}vw`, "0vw", `${100 * direction}vw`]
  );

  return (
    <motion.div
      ref={ref}
      className="h-[100vh] flex items-center justify-center pointer-events-none"
    >
      <Link to={service.link}>
        <motion.img
          src={service.image}
          alt={service.text}
          className="h-72 md:h-96 object-contain pointer-events-auto"
          style={{ x }} // Apply linear transform directly
        />
      </Link>
    </motion.div>
  );
};

export default ImageScrollItem;
