"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "MUSIC PRODUCTION",
    description: "From sketch to full arrangement — we create original beats, compose melodies, and build complete productions that fit your unique sound. Every track is crafted to match your style and artistic vision.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "MIXING",
    description: "We carefully blend vocals, instruments, and effects to achieve clarity, balance, and depth. The goal is a professional, radio-ready mix where every element has its space and the energy of the song comes through.",
    image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "MASTERING",
    description: "The final step that makes your music shine across all platforms. We give your tracks loudness, consistency, and polish so they sound powerful on Spotify, in clubs, and on the radio.",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "RECORDING SESSIONS",
    description: "Guided recording sessions for vocals or instruments in a professional environment. We'll make sure performances are captured with the right energy, emotion, and technical quality for a strong final result.",
    image: "https://images.unsplash.com/photo-1466428996249-73bd00fc545d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "VIDEO COLOR GRADING",
    description: "Coming Soon: Enhance the visual mood and consistency of your footage with our professional color grading services.",
    image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "VFX & EDITING",
    description: "Coming Soon: Full-service video editing and visual effects to bring your visual narratives to life alongside our audio expertise.",
    image: "https://images.unsplash.com/photo-1574717432707-c25c8587a3ee?q=80&w=1000&auto=format&fit=crop",
  }
];

export function WhatIDo() {
  return (
    <section id="services" className="relative py-12 md:py-16 px-6 md:px-8 bg-black">
      
      <div className="max-w-6xl mx-auto relative pt-12 md:pt-16">
        <div className="text-center mb-16 md:mb-20">
          <div className="w-12 h-[1px] bg-white/20 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">SERVICES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <div className="w-12 h-[1px] bg-white/20" />
                <h3 className="text-xl md:text-2xl font-bold tracking-tighter">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
                <Button variant="outline" size="sm" className="rounded-full border-white/20 hover:bg-white hover:text-black transition-all">
                  Contact me
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
