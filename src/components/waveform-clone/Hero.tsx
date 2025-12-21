"use client";

import React from "react";

export function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-background">
      {/* Acoustic Foam Background */}
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: 'url("/textures/acoustic_foam.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px', // Adjust size as needed for realistic scale
        }}
      />
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        {/* Placeholder for content or future 3D model */}
        <h1 className="text-5xl md:text-9xl font-black tracking-tighter text-white opacity-90 mix-blend-overlay text-center">
          SOUND<br />VIBE
        </h1>
      </div>
    </section>
  );
}
