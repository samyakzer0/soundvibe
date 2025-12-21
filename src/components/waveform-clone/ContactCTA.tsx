"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ContactModel } from "./three/ContactModel";

export function ContactCTA() {
  return (
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <div className="w-12 h-[1px] bg-white/20 mb-8" />
          
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase mb-4">
            LET'S GET <br /> IN TOUCH
          </h2>
          
            <div className="w-full mt-4 -mb-8">
              <ContactModel />
            </div>
    
            <motion.div
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="relative z-30"
            >
            <Button size="lg" className="rounded-full px-12 h-16 text-xl bg-white text-black hover:bg-white/90 shadow-2xl">
              Let's talk
            </Button>
          </motion.div>
        </div>
      
      <div className="mt-12 flex justify-center opacity-20 group">
        <div className="relative w-full max-w-lg h-64">
           {/* Spot light effect */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] aspect-square bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
