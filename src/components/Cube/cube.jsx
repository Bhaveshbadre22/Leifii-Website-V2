"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import "./cube.scss";
import { OrbitControls } from "@react-three/drei";
import {
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { motion } from "framer-motion-3d";

const Cube = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Continuous rotation: Multiply scroll progress by a larger factor for infinite feel
  const rotationX = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 10]); // 5 full rotations (adjust multiplier as needed)
  const rotationY = useTransform(scrollYProgress, [0, 2], [0, Math.PI * 10]);

  // Smooth the rotations
  const smoothRotationX = useSpring(rotationX, { damping: 20 });
  const smoothRotationY = useSpring(rotationY, { damping: 20 });

  return (
    <div className="main" ref={container}>
      <div className="cube w-[600px]">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={1.0} />
          <directionalLight intensity={1.0} position={[0.8, 0.8, 0.8]} />
          <MyCube rotationX={smoothRotationX} rotationY={smoothRotationY} />
        </Canvas>
      </div>
    </div>
  );
};

export default Cube;

function MyCube({ rotationX, rotationY }) {
  const mesh = useRef(null);
  const texture_1 = useLoader(TextureLoader, "/assets/Web 1.jpg");
  const texture_2 = useLoader(TextureLoader, "/assets/Web 2.jpg");
  const texture_3 = useLoader(TextureLoader, "/assets/Web 3.jpg");
  const texture_4 = useLoader(TextureLoader, "/assets/Web 4.jpg");
  const texture_5 = useLoader(TextureLoader, "/assets/Web 5.jpg");
  const texture_6 = useLoader(TextureLoader, "/assets/Web 6.jpg"); 

  return (
    <motion.mesh
      ref={mesh}
      rotation-x={rotationX}
      rotation-y={rotationY}
    >
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </motion.mesh>
  );
}



// "use client";
// import React, { useEffect, useRef } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
// import "./cube.scss";
// import { OrbitControls } from "@react-three/drei";
// import {
//   useMotionValue,
//   useSpring,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { motion } from "framer-motion-3d";

// const Cube = () => {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });
//   const progress = useTransform(scrollYProgress, [0, 1], [0, 5]);
//   const smoothProgress = useSpring(progress, { damping: 20 });

//   return (
//     <div className="main">
//       <div className="cube w-[600px]">
//         <Canvas>
//           <OrbitControls enableZoom={false} enablePan={false} />
//           <ambientLight intensity={2} />
//           <directionalLight position={[1, 1, 1]} />
//           <MyCube progress={smoothProgress} />
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default Cube;

// function MyCube({ progress }) {
//   const mesh = useRef(null);

//   const texture_1 = useLoader(TextureLoader, "/assets/Side 1.png");
//   const texture_2 = useLoader(TextureLoader, "/assets/Side 2.png");
//   const texture_3 = useLoader(TextureLoader, "/assets/Side 3.png");
//   const texture_4 = useLoader(TextureLoader, "/assets/Side 4.png");
//   const texture_5 = useLoader(TextureLoader, "/assets/Side 5.png");
//   const texture_6 = useLoader(TextureLoader, "/assets/Side 6.png");

//   return (
//     <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
//       <boxGeometry args={[2.5, 2.5, 2.5]} />
//       <meshStandardMaterial map={texture_1} attach="material-0" />
//       <meshStandardMaterial map={texture_2} attach="material-1" />
//       <meshStandardMaterial map={texture_3} attach="material-2" />
//       <meshStandardMaterial map={texture_4} attach="material-3" />
//       <meshStandardMaterial map={texture_5} attach="material-4" />
//       <meshStandardMaterial map={texture_6} attach="material-5" />
//     </motion.mesh>
//   );
// }


// "use client";
// import React, { useEffect, useRef } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
// import { OrbitControls } from "@react-three/drei";
// import { useScroll, useMotionValue } from "framer-motion";
// import { motion } from "framer-motion-3d";
// import "./cube.scss";

// const Cube = () => {
//   return (
//     <div className="main flex items-center justify-center min-h-screen">
//       <div className="cube w-[600px] h-[600px]">
//         <CubeComponent />
//       </div>
//     </div>
//   );
// };

// export default Cube;

// function CubeComponent() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   const rotationX = useMotionValue(0);
//   const rotationY = useMotionValue(0);

//   useEffect(() => {
//     scrollYProgress.onChange((latest) => {
//       rotationX.set(latest * Math.PI * 10);
//       rotationY.set(latest * Math.PI * 10);
//     });
//   }, [scrollYProgress]);

//   return (
//     <div ref={container}>
//       <Canvas camera={{ position: [0, 0, 6] }}>
//         <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
//         <ambientLight intensity={1.2} />
//         <directionalLight intensity={1.0} position={[2, 2, 2]} />
//         <group position={[0, 0, 0]}>
//           <MyCube rotationX={rotationX} rotationY={rotationY} />
//         </group>
//       </Canvas>
//     </div>
//   );
// }

// function MyCube({ rotationX, rotationY }) {
//   const mesh = useRef(null);

//   const textures = useLoader(TextureLoader, [
//     "/assets/Web 1.jpg",
//     "/assets/Web 2.jpg",
//     "/assets/Web 3.jpg",
//     "/assets/Web 4.jpg",
//     "/assets/Web 5.jpg",
//     "/assets/Web 6.jpg",
//   ]);

//   return (
//     <motion.mesh ref={mesh} rotation-x={rotationX} rotation-y={rotationY}>
//       <boxGeometry args={[4, 4, 4]} /> {/* Increased size */}
//       {textures.map((texture, index) => (
//         <meshStandardMaterial key={index} map={texture} attach={`material-${index}`} />
//       ))}
//     </motion.mesh>
//   );
// }


