"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Darius transformed my rough demo into a track that sounds radio-ready. His attention to detail made all the difference.",
    author: "Nova Kane",
    title: "TURNED MY IDEA INTO A HIT!",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "Working with Darius was smooth from start to finish. Clear communication, fast delivery, and a track that exceeded my expectations.",
    author: "Kairo",
    title: "SUPER FAST, SUPER PROFESSIONAL",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "The mastering gave my track the punch it was missing. It now sounds amazing on Spotify and in the club.",
    author: "Lila Ray",
    title: "MADE MY SONG SHINE",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="w-12 h-[1px] bg-white/20 mx-auto" />
          <h2 className="text-5xl font-bold tracking-tighter uppercase">Testimonials</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 space-y-8 flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-64 rounded-t-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <div className="w-8 h-[1px] bg-white/20 mx-auto" />
                <h4 className="text-xs font-bold tracking-widest uppercase">{t.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{t.quote}"
                </p>
                <p className="text-xs font-bold text-white uppercase">— {t.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
