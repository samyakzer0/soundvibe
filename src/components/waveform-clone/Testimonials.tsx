"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "SoundVibe transformed our TV campaign with a mix that feels both powerful and perfectly balanced. Their studio precision is unmatched.",
    author: "MARCUS CHEN",
    service: "AUDIO MIXING",
    color: "#31b8c6",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "The VFX work on our latest independent feature caught everyone's eye. Creative energy meets technical excellence in every frame.",
    author: "SARAH LANGE",
    service: "VFX STUDIO",
    color: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "Incredible attention to detail in the sound design. They didn't just add sound; they built an immersive world for our project.",
    author: "ELIXA RAY",
    service: "SOUND DESIGN",
    color: "#b4f12d",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="w-12 h-[1px] bg-border-secondary mx-auto" />
          <h2 className="text-4xl font-bold tracking-tighter uppercase">CLIENT FEEDBACK</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-bg-secondary border border-border-secondary rounded-[6px] p-8 space-y-8 flex flex-col items-center text-center relative hover:border-border-primary transition-all duration-300"
            >
              <div 
                className="absolute top-0 left-0 w-full h-1" 
                style={{ backgroundColor: t.color }}
              />
              
              <div className="relative w-32 h-32 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-border-secondary group-hover:border-primary-cyan">
                <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
              </div>
              
              <div className="space-y-4">
                <span className="label-control" style={{ color: t.color }}>{t.service}</span>
                <p className="text-[14px] text-text-secondary leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="pt-4">
                  <p className="text-xs font-bold text-text-primary uppercase tracking-widest">— {t.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
