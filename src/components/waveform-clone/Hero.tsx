"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <div className="w-6 h-6 rounded-full overflow-hidden bg-muted">
            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop" alt="Producer" />
          </div>
          <span className="text-sm font-medium">Music Producer, New York</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]"
        >
          I TURN IDEAS <br /> INTO RECORDS
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto"
        >
          Your ideas deserve more than a demo. Let's turn them into records that last.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-white text-black hover:bg-white/90">
            Let's Talk Music
          </Button>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm text-muted-foreground italic"
        >
          Worked with 200+ musicians
        </motion.p>
      </div>
      
      <div className="mt-20 flex justify-center items-center gap-2 h-32">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 10 + Math.random() * 40 }}
            animate={{ 
              height: [10 + Math.random() * 40, 40 + Math.random() * 60, 10 + Math.random() * 40] 
            }}
            transition={{ 
              duration: 1 + Math.random(), 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="waveform-bar"
          />
        ))}
      </div>
    </section>
  );
}
