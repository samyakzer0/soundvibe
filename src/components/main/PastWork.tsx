"use client";

import React from "react";
import { motion } from "framer-motion";

const works = [
  {
    title: "NOVA KANE - MIDNIGHT DRIVE",
    tags: "Production, Mixing",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "LILA RAY - HEART ON REPEAT",
    tags: "Production, Vocal Recording, Mixing",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "KAIRO - LOST IN ECHOES",
    tags: "Production, Sound Design, Mastering",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "ZAYNEX - PRESSURE",
    tags: "Beat Production, Mixing",
    image: "https://images.unsplash.com/photo-1514525253342-b0bb0d8a5991?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "AYA V - GLITTER TEARS",
    tags: "Production, Vocal Tuning, Mastering",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "JAXON REE - NO SIGNAL",
    tags: "Production, Mixing, Mastering",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop",
  },
];

export function PastWork() {
  return (
    <section id="work" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
          <div className="space-y-4 max-w-sm">
            <div className="w-12 h-[1px] bg-white/20" />
            <h2 className="text-5xl font-bold tracking-tighter">PAST WORK</h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            From underground talents to established names, I've shaped tracks that connect with listeners on a deeper level, bringing each artist's vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-muted border border-white/5">
                <div className="absolute inset-x-0 top-0 z-10 p-4 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-xs font-bold text-white uppercase tracking-wider">
                     {work.title}
                   </div>
                </div>
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                />
              </div>
              <h4 className="text-sm font-bold tracking-wide uppercase mb-1">{work.title}</h4>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">{work.tags}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
