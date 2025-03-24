import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGesture } from "@use-gesture/react";
import { useTexture } from "@react-three/drei";
import cubeFaceImages from "../../assets/Cube/index";

const Cube = ({ images }) => {
  const cubeRef = useRef();
  const [front, back, top, bottom, left, right] = useTexture(images);

  // Handle rotation with gestures
  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      cubeRef.current.rotation.y = x * 0.005;
      cubeRef.current.rotation.x = y * 0.005;
    },
    onWheel: ({ offset: [, y] }) => {
      cubeRef.current.rotation.y += y * 0.0005;
    },
  });

  // Smooth rotation animation
  useFrame(() => {
    cubeRef.current.rotation.y += 0.002; // Auto-spin effect
  });

  return (
    <mesh {...bind()} ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial attach="material-0" map={right} />
      <meshStandardMaterial attach="material-1" map={left} />
      <meshStandardMaterial attach="material-2" map={top} />
      <meshStandardMaterial attach="material-3" map={bottom} />
      <meshStandardMaterial attach="material-4" map={front} />
      <meshStandardMaterial attach="material-5" map={back} />
    </mesh>
  );
};

// Canvas with Lighting
export default function CubeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Cube images={cubeFaceImages} />
    </Canvas>
  );
}
