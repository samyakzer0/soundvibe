"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "#services", color: "#00f2ff" }, // Synth Cyan
  { name: "About", href: "#about", color: "#ff00d4" },    // FX Magenta
  { name: "Work", href: "#work", color: "#ffdd00" },      // Lead Yellow
  { name: "Contact", href: "#contact", color: "#00ff88" }, // Rhythm Green
];

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-xl border-b border-white/5"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
          </div>
          <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="font-bold text-xl tracking-tighter text-white">SOUNDVIBE</span>
      </Link>

      <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative py-2 transition-colors hover:text-white"
          >
            {link.name}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px]"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    backgroundColor: link.color,
                    boxShadow: `0 0 15px ${link.color}, 0 0 30px ${link.color}66`
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}
            </AnimatePresence>
          </Link>
        ))}
      </div>

      <Button variant="outline" className="rounded-full px-6 border-white/10 hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 font-bold uppercase text-[10px] tracking-widest">
        Get in touch
      </Button>
    </motion.nav>
  );
}
