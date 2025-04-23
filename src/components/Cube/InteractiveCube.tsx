import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import cubeFaceImages from "../../assets/Cube/index";

const InteractiveCube = () => {
  const [isDragging, setIsDragging] = useState(false);
  const cubeRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 20 });

  // Smooth spring animation for rotation
  const springConfig = { stiffness: 100, damping: 20 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !cubeRef.current) return;

    const rect = cubeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Reduce sensitivity for smoother rotation
    rotateX.set(deltaY * 0.1);
    rotateY.set(deltaX * 0.1);
  };

  // Handle touch movement
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !cubeRef.current) return;

    const touch = e.touches[0];
    const rect = cubeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = touch.clientX - centerX;
    const deltaY = touch.clientY - centerY;

    // Reduce sensitivity for smoother rotation
    rotateX.set(deltaY * 0.1);
    rotateY.set(deltaX * 0.1);
  };

  // Auto-rotate when not interacting
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      rotateY.set(rotateY.get() + 0.2); // Slower auto-rotation
    }, 50);

    return () => clearInterval(interval);
  }, [isDragging, rotateY]);

  return (
    <div className="w-full h-full flex items-center justify-center perspective-1000">
      <motion.div
        ref={cubeRef}
        className="relative w-64 h-64 preserve-3d"
        style={{
          transformStyle: "preserve-3d",
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* Front face */}
        <motion.div
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${cubeFaceImages[0]})`,
            transform: "translateZ(128px)",
            backfaceVisibility: "hidden",
          }}
        />

        {/* Back face */}
        <motion.div
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${cubeFaceImages[1]})`,
            transform: "translateZ(-128px) rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        />

        {/* Top face */}
        <motion.div
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${cubeFaceImages[2]})`,
            transform: "translateY(-128px) rotateX(90deg)",
            backfaceVisibility: "hidden",
          }}
        />

        {/* Bottom face */}
        <motion.div
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${cubeFaceImages[3]})`,
            transform: "translateY(128px) rotateX(-90deg)",
            backfaceVisibility: "hidden",
          }}
        />

        {/* Left face */}
        <motion.div
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${cubeFaceImages[4]})`,
            transform: "translateX(-128px) rotateY(-90deg)",
            backfaceVisibility: "hidden",
          }}
        />

        {/* Right face */}
        <motion.div
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${cubeFaceImages[5]})`,
            transform: "translateX(128px) rotateY(90deg)",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>
    </div>
  );
};

export default InteractiveCube;
