"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ContactCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "0% 50%",
          end: "100% 0%",
          scrub: 0.5,
        }
      });

      // Parallax layers
      const layers = [
        { layer: "1", yPercent: 50 },  // Background (moves most)
        { layer: "2", yPercent: 35 },  // Text (mid)
        { layer: "3", yPercent: 15 },  // Microphone (moves least - foreground)
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          `[data-cta-layer="${layerObj.layer}"]`,
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
    <section
      id="contact"
      ref={containerRef}
      className="relative min-h-[90vh] overflow-hidden pb-32 mb-20"
    >
      {/* Layer 1: Acoustic Foam Background (moves most) */}
      <div
        data-cta-layer="1"
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: 'url("/textures/acoustic_foam.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px',
          top: '-20%',
          height: '140%',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      {/* Layer 2: Text Content (mid layer) */}
      <div
        data-cta-layer="2"
        className="relative z-10 pt-16 md:pt-24 pb-8 md:pb-48"
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center px-4">
          <div className="w-12 h-[1px] bg-white/20 mb-8" />

          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:leading-none uppercase mb-4">
            LET'S GET <br /> IN TOUCH
          </h2>
        </div>
      </div>

      {/* Layer 3: Microphone Image (foreground - covers lower text, moves least) */}
      <div
        data-cta-layer="3"
        className="absolute left-0 w-full z-20 pointer-events-none flex justify-center top-[20%] md:top-[30%]"
      >
        <img
          src="/textures/microphone.png"
          alt="Professional Microphone"
          className="w-[80%] max-w-sm md:w-full md:max-w-lg h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* CTA Button - positioned below microphone layer */}
      <div className="relative z-30 pb-12 md:pb-24 pt-40 md:pt-0 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="rounded-full px-8 md:px-12 h-14 md:h-16 text-lg md:text-xl bg-white text-black hover:bg-white/90 shadow-2xl">
            Let's talk
          </Button>
        </motion.div>
      </div>

      {/* Spotlight effect at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] aspect-square bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05)_0%,transparent_50%)] rounded-full blur-3xl pointer-events-none z-[5]" />
      {/* Bottom fade gradient for smooth blend to next section */}
      <div
        className="absolute bottom-0 left-0 w-full h-48 z-[25] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 100%)'
        }}
      />
    </section>
  );
}
