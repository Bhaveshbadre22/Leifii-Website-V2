import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import cubeFaceImages from "../../assets/Cube/index";

const Cube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textures = useTexture(cubeFaceImages);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Auto-rotate when not interacting
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      {textures.map((texture, index) => (
        <meshBasicMaterial
          key={index}
          map={texture}
          attach={`material-${index}`}
        />
      ))}
    </mesh>
  );
};

const ThreeCube = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Suspense fallback={null}>
          <Cube />
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            rotateSpeed={0.5}
            minDistance={1.5}
            maxDistance={3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeCube;
