"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Quote() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // Animate from flat bottom -> wave -> full fill
  const pathD = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [
      "M 0 100 V 100 Q 50 100 100 100 V 100 z",
      "M 0 100 V 40 Q 50 0 100 40 V 100 z",
      "M 0 100 V 0 Q 50 0 100 0 V 100 z"
    ]
  );

  return (
    <section ref={containerRef} className="relative py-48 px-6 overflow-hidden">
      {/* Liquid Background */}
      <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none">
        <svg
          className="w-full h-full transition-transform duration-75 ease-linear" // Optimization hint
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="liquidGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.4" /> {/* Cyan */}
              <stop offset="50%" stopColor="#ff00d4" stopOpacity="0.3" /> {/* Magenta */}
              <stop offset="100%" stopColor="#000000" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <motion.path
            d={pathD}
            fill="url(#liquidGrad)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="w-12 h-[1px] bg-white/20 mx-auto" />
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight uppercase mix-blend-screen"
        >
          SOUND LIKE YOUR BEST SELF. <br />
          <span className="text-muted-foreground">EFFICIENT SESSIONS. TAILORED PRODUCTION.</span>
        </motion.h2>
      </div>
    </section>
  );
}
