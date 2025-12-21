"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "MUSIC PRODUCTION",
    description: "From sketch to full arrangement — I create original beats, compose melodies, and build complete productions that fit your unique sound. Every track is crafted to match your style and artistic vision.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "MIXING",
    description: "I carefully blend vocals, instruments, and effects to achieve clarity, balance, and depth. The goal is a professional, radio-ready mix where every element has its space and the energy of the song comes through.",
    image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "MASTERING",
    description: "The final step that makes your music shine across all platforms. I give your tracks loudness, consistency, and polish so they sound powerful on Spotify, in clubs, and on the radio.",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "RECORDING SESSIONS",
    description: "Guided recording sessions for vocals or instruments in a professional environment. I'll make sure performances are captured with the right energy, emotion, and technical quality for a strong final result.",
    image: "https://images.unsplash.com/photo-1466428996249-73bd00fc545d?q=80&w=1000&auto=format&fit=crop",
  },
];

export function WhatIDo() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="w-12 h-[1px] bg-white/20 mx-auto mb-6" />
          <h2 className="text-4xl font-bold tracking-tighter">WHAT I DO</h2>
        </div>
        
        <div className="grid gap-20">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div className="w-12 h-[1px] bg-white/20" />
                <h3 className="text-3xl font-bold tracking-tighter">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {service.description}
                </p>
                <Button variant="outline" className="rounded-full border-white/20 hover:bg-white hover:text-black transition-all">
                  Contact me
                </Button>
              </div>
              <div className="flex-1 w-full aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
