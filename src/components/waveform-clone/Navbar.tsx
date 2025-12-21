"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "#services", color: "#00ffff" }, // Cyan
  { name: "About", href: "#about", color: "#ff00ff" },    // Magenta
  { name: "Work", href: "#work", color: "#ffff00" },      // Yellow
  { name: "Contact", href: "#contact", color: "#39ff14" }, // Neon Green
];

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-md border-b border-border/50"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
        </div>
        <span className="font-bold text-xl tracking-tighter">WAVEFORM</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        {navLinks.map((link, index) => (
          <Link 
            key={link.name} 
            href={link.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative py-1 transition-colors hover:text-white"
          >
            {link.name}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ 
                    backgroundColor: link.color,
                    boxShadow: `0 0 12px ${link.color}, 0 0 6px ${link.color}`
                  }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </AnimatePresence>
          </Link>
        ))}
      </div>
      
      <Button variant="outline" className="rounded-full px-6 border-white/20 hover:bg-white hover:text-black transition-all">
        Get in touch
      </Button>
    </motion.nav>
  );
}
