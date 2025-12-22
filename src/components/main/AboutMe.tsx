"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const values = [
  {
    number: "1",
    title: "VISION",
    description: "Every record begins with a clear vision. We shape raw ideas into music that feels intentional, timeless, and emotionally powerful.",
  },
  {
    number: "2",
    title: "CRAFT",
    description: "Details matter. From sound design to final polish, we approach every track with precision and care that makes the music shine.",
  },
  {
    number: "3",
    title: "TRUST",
    description: "Collaboration only works with trust. We keep communication open, deadlines tight, and always deliver what we promise without compromise.",
  },
  {
    number: "4",
    title: "ENERGY",
    description: "Music should move people. We focus on creating productions that carry energy — tracks that connect instantly and stay with listeners.",
  }
];

export function AboutMe() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="w-12 h-[1px] bg-white/20 mx-auto" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">ABOUT SOUNDVIBE</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center mb-32">
          <div className="space-y-20">
            {values.slice(0, 2).map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4 text-center md:text-right"
              >
                <span className="text-6xl font-bold text-white/10 block leading-none">{val.number}</span>
                <h3 className="text-2xl font-bold tracking-tighter">{val.title}</h3>
                <p className="text-muted-foreground text-sm max-w-[200px] ml-auto">{val.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1000&auto=format&fit=crop"
              alt="About"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          <div className="space-y-20">
            {values.slice(2, 4).map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4 text-center md:text-left"
              >
                <span className="text-6xl font-bold text-white/10 block leading-none">{val.number}</span>
                <h3 className="text-2xl font-bold tracking-tighter">{val.title}</h3>
                <p className="text-muted-foreground text-sm max-w-[200px] mr-auto">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" className="rounded-full px-8 border-white/20 hover:bg-white hover:text-black transition-all">
            Let's talk
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 border-t border-white/5 pt-12">
          {[
            { label: "Years in music", value: "15+" },
            { label: "Clients served", value: "100+" },
            { label: "Artists collaborated", value: "200+" },
            { label: "Tracks produced", value: "500+" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-1"
            >
              <h4 className="text-5xl font-bold tracking-tighter">{stat.value}</h4>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
