import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import cubeFaceImages from "../../assets/Cube/index";

const Cube = ({ size = 1.5 }: { size?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textures = useTexture(cubeFaceImages);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[size, size, size]} />
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
  const [cubeSize, setCubeSize] = useState(2);
  const [cameraZ, setCameraZ] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Adjust cube size and camera position based on viewport size
      const isMobile = window.innerWidth < 768;
      const newSize = isMobile ? 1.2 : 2;
      const newCameraZ = isMobile ? 2.5 : 3.5;

      setCubeSize(newSize);
      setCameraZ(newCameraZ);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, cameraZ] }}>
        <Suspense fallback={null}>
          <Cube size={cubeSize} />
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            rotateSpeed={0.5}
            minDistance={cameraZ * 0.8} // Dynamic min distance
            maxDistance={cameraZ * 1.5} // Dynamic max distance
            enableZoom={false}
            enablePan={false}
          />
          <ambientLight intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeCube;
