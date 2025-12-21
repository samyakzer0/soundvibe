"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(49,184,198,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="w-12 h-[1px] bg-border-secondary mx-auto" />
        
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase">
          BOOK YOUR <br /> <span className="text-primary-cyan glow-subtle-cyan">SESSION</span>
        </h2>
        
        <motion.div
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="rounded-button px-12 h-16 text-lg label-control bg-primary-cyan text-bg-primary hover:bg-primary-cyan/90 glow-medium-cyan transition-all">
            START MIXING
          </Button>
          <Button size="lg" variant="outline" className="rounded-button px-12 h-16 text-lg label-control border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white transition-all">
            GET A QUOTE
          </Button>
        </motion.div>
      </div>
      
      <div className="mt-32 flex justify-center opacity-30">
        <div className="relative w-full max-w-lg h-32">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] aspect-square bg-[radial-gradient(circle_at_bottom,rgba(255,0,110,0.1)_0%,transparent_70%)] rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
