"use client";

import React from "react";
import { motion } from "framer-motion";

export function Quote() {
  return (
    <section className="py-32 px-6 bg-bg-primary">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="w-12 h-[1px] bg-border-secondary mx-auto" />
        <motion.h2 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight uppercase"
        >
          STUDIO-GRADE PRECISION. <br />
          <span className="text-text-secondary">RHYTHM-BASED MOTION. NEON AESTHETICS. SYNTHWAVE AUDIO-NATIVE WORKFLOWS.</span>
        </motion.h2>
        <div className="flex justify-center gap-4 mt-8 opacity-20">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="w-8 h-1 bg-primary-cyan glow-subtle-cyan" />
          ))}
        </div>
      </div>
    </section>
  );
}
