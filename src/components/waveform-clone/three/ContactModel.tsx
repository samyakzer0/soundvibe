"use client";

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, Float } from "@react-three/drei";
import { useInView } from "framer-motion";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={3} position={[0, -0.8, 0]} rotation={[0.4, -0.2, 0]}  />;
}

export function ContactModel() {
  const modelUrl = "/models/scene.gltf";
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <div ref={containerRef} className="w-full h-[500px] relative">
      {isInView && (
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ 
            antialias: false, // Disabling antialias can help with context creation errors on some GPUs
            alpha: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false,
            preserveDrawingBuffer: false,
            desynchronized: true
          }}
          dpr={1} // Keep it simple to avoid context stress
          performance={{ min: 0.5 }}
        >
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
      )}
    </div>
  );
}
