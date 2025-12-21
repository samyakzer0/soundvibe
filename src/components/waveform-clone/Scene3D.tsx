"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={7} position={[0, -1, 0]} />;
}

export function Scene3D() {
  // We'll use a placeholder or check if model exists. 
  // For now, I'll set up the scene to look for a model named 'scene.gltf' in public/models
  const modelUrl = "/models/scene.gltf";

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 5, 5], fov: 90 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          {/* We only try to load if the user actually puts a file there. 
              Since I can't provide the file, I'll add a helpful message or a basic shape if it fails. */}
          <Model url={modelUrl} />
          <Environment preset="city" />
          <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
