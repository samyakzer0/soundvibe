"use client";


import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, Float } from "@react-three/drei";


function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  // Positioned lower and scaled to feel massive like the reference image
  return <primitive object={scene} scale={4} position={[0, 0, 0]} rotation={[0.3, 0, 0]}  />;
}


export function ContactModel() {
  const modelUrl = "/models/scene.gltf";


  return (
    <div className="w-full h-[600px] mt-[-100px] relative">
      <Canvas camera={{ position: [0, 0.5, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={1}>
            <Model url={modelUrl} />
          </Float>
          <Environment preset="night" />
          <ContactShadows position={[0, -0.5, 0]} opacity={0.6} scale={10} blur={2} far={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}