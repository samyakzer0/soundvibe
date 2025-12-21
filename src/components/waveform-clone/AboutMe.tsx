"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const equipment = [
  { category: "CONSOLES", name: "Solid State Logic AWS 948", spec: "48-Channel Hybrid" },
  { category: "MONITORS", name: "Barefoot Sound Footprint01", spec: "3-Way Active" },
  { category: "MICROPHONES", name: "Neumann U87 Ai", spec: "Large Diaphragm Condenser" },
  { category: "OUTBOARD", name: "Universal Audio LA-2A", spec: "Tube Opto Leveler" },
];

export function AboutMe() {
  return (
    <section id="about" className="py-24 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="w-12 h-[1px] bg-border-secondary mx-auto" />
          <h2 className="text-4xl font-bold tracking-tighter uppercase">STUDIO SETUP</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold tracking-tighter text-primary-cyan">PROFESSIONAL GRADE ENVIRONMENT</h3>
            <p className="text-text-secondary leading-relaxed">
              SoundVibe is equipped with industry-standard hardware and calibrated acoustics, providing a precision-focused workspace for high-end audio and visual production.
            </p>
            
            <div className="space-y-6">
              {equipment.map((item, i) => (
                <div key={i} className="flex justify-between border-b border-border-secondary pb-4">
                  <div className="space-y-1">
                    <span className="label-control text-border-primary">{item.category}</span>
                    <p className="text-text-primary font-semibold">{item.name}</p>
                  </div>
                  <span className="mono-text text-text-muted self-end">{item.spec}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" className="rounded-button px-8 border-border-primary text-primary-cyan hover:bg-primary-cyan hover:text-bg-primary glow-subtle-cyan transition-all label-control">
              TOUR STUDIO
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-[4px] overflow-hidden border border-border-secondary bg-bg-secondary glow-dual"
          >
             <img 
               src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop" 
               alt="Studio Console" 
               className="w-full h-full object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 border-t border-border-secondary pt-12">
           {[
             { label: "RECORDING HRS", value: "5000+" },
             { label: "STUDIO TRACKS", value: "200+" },
             { label: "MIX PROJECTS", value: "350+" },
             { label: "VFX RENDER", value: "100+" }
           ].map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="text-center space-y-1"
             >
               <h4 className="text-4xl font-bold tracking-tighter text-text-primary mono-text">{stat.value}</h4>
               <p className="label-control text-text-muted">{stat.label}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
