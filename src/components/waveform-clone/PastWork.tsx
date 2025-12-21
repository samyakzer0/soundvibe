"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const works = [
  {
    title: "TV COMMERCIAL EDIT",
    services: ["Audio Mixing", "Sound Design"],
    duration: "30s",
    date: "2025-01-15",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "SCI-FI SHORT FILM",
    services: ["VFX Studio", "Sound Design"],
    duration: "12m",
    date: "2024-12-10",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "FASHION BRAND CAMPAIGN",
    services: ["Color Grading", "Video Editing"],
    duration: "1m 15s",
    date: "2024-11-22",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "INDEPENDENT FEATURE",
    services: ["Audio Mixing", "Sound Editing"],
    duration: "94m",
    date: "2024-10-05",
    image: "https://images.unsplash.com/photo-1514525253342-b0bb0d8a5991?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "MUSIC VIDEO - 'NEON'",
    services: ["VFX Studio", "Color Grading"],
    duration: "3m 45s",
    date: "2024-09-18",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "DOCUMENTARY TEASER",
    services: ["Audio Mixing", "Video Editing"],
    duration: "2m",
    date: "2024-08-30",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop",
  },
];

export function PastWork() {
  return (
    <section id="work" className="py-24 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
          <div className="space-y-4 max-w-sm">
            <div className="w-12 h-[1px] bg-border-secondary" />
            <h2 className="text-4xl font-bold tracking-tighter uppercase">PORTFOLIO</h2>
          </div>
          <p className="text-text-secondary max-w-sm text-sm">
            Studio-grade precision and creative energy delivered across 100+ projects in music, film, and digital media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-bg-secondary border border-border-secondary rounded-[6px] p-4 transition-all hover:glow-medium-cyan"
            >
              <div className="relative aspect-video rounded-[4px] overflow-hidden mb-4 bg-bg-tertiary">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full bg-primary-cyan/80 flex items-center justify-center text-bg-primary">
                     <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                     </svg>
                   </div>
                </div>
              </div>
              
              <h4 className="text-[16px] font-semibold text-text-primary mb-2 truncate group-hover:text-primary-cyan transition-colors">
                {work.title}
              </h4>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {work.services.map((service, i) => (
                  <span key={i} className="text-[11px] font-semibold px-2 py-0.5 rounded-[2px] bg-bg-tertiary text-primary-cyan border border-primary-cyan/20">
                    {service}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center mb-6 mono-text text-text-secondary">
                <span>DUR: {work.duration}</span>
                <span>DATE: {work.date}</span>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 h-7 text-[11px] label-control border-border-primary text-primary-cyan hover:bg-primary-cyan hover:text-bg-primary">
                  VIEW
                </Button>
                <Button variant="outline" className="flex-1 h-7 text-[11px] label-control border-border-primary text-primary-cyan hover:bg-primary-cyan hover:text-bg-primary">
                  LISTEN
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
