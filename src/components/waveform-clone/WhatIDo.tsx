"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "AUDIO MIXING",
    description: "Multi-track balancing, spatial positioning, and frequency clarity for professional music and film projects.",
    color: "#31b8c6",
    glowClass: "glow-subtle-cyan",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "SOUND DESIGN",
    description: "Original sound effects, synthesized atmospheres, and sonic branding for games, film, and digital media.",
    color: "#b4f12d",
    glowClass: "glow-subtle-lime",
    image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "SOUND EDITING",
    description: "Dialogue cleanup, noise reduction, and precise synchronization for podcasts and broadcast standards.",
    color: "#06ffa5",
    glowClass: "glow-subtle-cyan", // Using cyan as secondary as per spec
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "VFX STUDIO",
    description: "High-end visual effects integration, particle systems, and dynamic compositions for immersive visuals.",
    color: "#8b5cf6",
    glowClass: "glow-subtle-purple",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "COLOR GRADING",
    description: "Cinematic color correction and stylistic grading to define the mood and tone of your visual projects.",
    color: "#ff006e",
    glowClass: "glow-strong-pink",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "VIDEO EDITING",
    description: "Narrative pacing, rhythmic cuts, and modern storytelling for commercials, documentaries, and social content.",
    color: "#06b6d4",
    glowClass: "glow-subtle-cyan",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop",
  },
];

export function WhatIDo() {
  return (
    <section id="services" className="py-24 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="w-12 h-[1px] bg-border-secondary mx-auto mb-6" />
          <h2 className="text-4xl font-bold tracking-tighter">STUDIO SERVICES</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 bg-bg-secondary border border-border-secondary rounded-subtle hover:border-border-primary transition-all flex flex-col gap-6"
            >
              <div className="h-40 w-full overflow-hidden rounded-subtle">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="space-y-4">
                <span className="label-control" style={{ color: service.color }}>{service.title}</span>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className={`w-full rounded-button border-border-secondary group-hover:border-primary-cyan transition-all label-control`}
                  style={{ '--hover-glow': service.color } as any}
                >
                  Book Session
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
