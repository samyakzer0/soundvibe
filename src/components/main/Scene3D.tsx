"use client";

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { useInView } from "framer-motion";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={7} position={[0, -1, 0]} />;
}

export function Scene3D() {
  const modelUrl = "/models/scene.gltf";
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      {isInView && (
        <Canvas 
          camera={{ position: [0, 5, 5], fov: 90 }}
          gl={{ 
            antialias: false,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false,
            desynchronized: true
          }}
          dpr={1}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Suspense fallback={null}>
            <Model url={modelUrl} />
            <Environment preset="city" />
            <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={2} far={4} />
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      )}
    </div>
  );
}
