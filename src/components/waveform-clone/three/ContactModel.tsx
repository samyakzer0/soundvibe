"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, Float } from "@react-three/drei";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  // Centered and scaled for balanced composition
  return <primitive object={scene} scale={3} position={[0, -0.8, 0]} rotation={[0.4, -0.2, 0]}  />;
}

export function ContactModel() {
  const modelUrl = "/models/scene.gltf";

  return (
    <div className="w-full h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
            <Model url={modelUrl} />
          </Float>
          <Environment preset="city" />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
