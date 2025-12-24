"use client";

import React from "react";
import { Quote } from "lucide-react";
import { ScalingSlidingCards } from "@/components/ui/scaling-sliding-cards";

const testimonials = [
  {
    id: 1,
    quote: "SoundVibe turned our vision into reality. The mixing precision is unmatched.",
    author: "Alex Rivera",
    role: "Music Producer",
  },
  {
    id: 2,
    quote: "Professional, fast, and incredibly creative. The team elevated our entire project.",
    author: "Sarah Chen",
    role: "Director",
  },
  {
    id: 3,
    quote: "The sound design completely changed the emotional impact of our film.",
    author: "Mike Ross",
    role: "Filmmaker",
  },
  {
    id: 4,
    quote: "I've worked with many studios, but SoundVibe brings a unique artistic touch.",
    author: "Jessica Pearson",
    role: "Artist",
  },
  {
    id: 5,
    quote: "A seamless experience from start to finish. Highly recommended for serious creators.",
    author: "Harvey Specter",
    role: "Label Manager",
  },
  {
    id: 6,
    quote: "They understood exactly what we needed before we even articulated it.",
    author: "Louis Litt",
    role: "Creative Director",
  },
  {
    id: 7,
    quote: "World-class quality. The spatial audio work they did for us was mind-blowing.",
    author: "Donna Paulsen",
    role: "VR Developer",
  },
];

export function Testimonials() {
  const cards = testimonials.map((t) => ({
    id: t.id,
    content: (
      <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-[30px] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-500">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] group-hover:bg-cyan-500/10 transition-colors" />

        {/* Quote Icon */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
          <div className="text-5xl md:text-6xl font-bold leading-none text-cyan-400 opacity-50 rotate-180" style={{ fontFamily: 'Georgia, serif' }}>,,</div>
        </div>

        {/* Quote Text */}
        <div className="relative z-10 pt-16 md:pt-20">
          <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-tight text-gray-200">
            {t.quote}
          </p>
        </div>

        {/* Author */}
        <div className="relative z-10">
          <div className="w-12 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent mb-4" />
          <h4 className="text-lg font-bold uppercase tracking-wider text-white">{t.author}</h4>
          <p className="text-sm font-bold tracking-widest text-cyan-500/70 mt-1">{t.role}</p>
        </div>
      </div>
    )
  }));

  return (
    <section className="bg-[#050505] relative z-10 pb-20">
      <div className="text-center py-20 px-6">
        <div className="w-12 h-[1px] bg-white/20 mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">Client Stories</h2>
      </div>

      <ScalingSlidingCards cards={cards} />
    </section>
  );
}
