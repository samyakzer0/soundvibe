"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP plugin
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const triggerElement = containerRef.current;
      if (!triggerElement) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0,
        }
      });

      // Parallax layers: background moves faster, text moves slower
      const layers = [
        { layer: "1", yPercent: 70 },  // Background (moves most)
        { layer: "2", yPercent: 550 },  // Gradient overlay
        { layer: "3", yPercent: 40 },  // Text (moves least)
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          `[data-parallax-layer="${layerObj.layer}"]`,
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full relative overflow-hidden" ref={containerRef}>
      <section className="relative flex min-h-[100svh] items-center justify-center z-[2] bg-black">

        {/* Parallax Visuals Container */}
        <div className="absolute top-0 left-0 w-full h-[120%]">

          {/* Bottom line for clean edge */}
          <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-black z-20"></div>

          {/* Parallax Layers */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden" data-parallax-layers>

            {/* Layer 1: Acoustic Foam Background (Deepest - moves most) */}
            <div
              data-parallax-layer="1"
              className="pointer-events-none absolute top-[-17.5%] left-0 h-[117.5%] w-full opacity-80"
              style={{
                backgroundImage: 'url("/textures/acoustic_foam.png")',
                backgroundRepeat: 'repeat',
                backgroundSize: '400px',
              }}
            />

            {/* Layer 2: Gradient Overlay (Mid) */}
            <div
              data-parallax-layer="2"
              className="pointer-events-none absolute top-[-17.5%] left-0 h-[117.5%] w-full bg-gradient-to-t from-background via-transparent to-transparent"
            />

            {/* Layer 3: Content Layout (Closest - moves least) */}
            <div
              data-parallax-layer="3"
              className="absolute top-0 left-0 flex h-[100svh] w-full items-center pointer-events-none"
            >
              <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 md:gap-12">
                {/* Hero Text */}
                <div className="flex-1 w-full max-w-2xl">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white opacity-90 mix-blend-overlay leading-[0.8] text-center lg:text-left">
                    SOUND<br />VIBE
                  </h1>
                </div>

                {/* Hero Image */}
                <div className="flex flex-1 justify-center lg:justify-end items-center w-full">
                  <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-lg aspect-square">
                    <img 
                      src="/assets/hero.png" 
                      alt="Hero" 
                      className="w-full h-full object-contain opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fade Gradient at Bottom */}
          <div
            className="absolute bottom-0 left-0 h-[20%] w-full z-30 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.738) 19%, rgba(0, 0, 0, 0.541) 34%, transparent 100%)'
            }}
          />
        </div>
      </section>
    </div>
  );
}
