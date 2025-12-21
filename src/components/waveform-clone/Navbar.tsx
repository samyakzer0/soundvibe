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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-xl border-b border-white/5"
    >
      <Link href="/" className="flex items-center gap-2 group z-50">
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

      <div className="flex items-center gap-4">
        <Button variant="outline" className="hidden md:flex rounded-full px-6 border-white/10 hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 font-bold uppercase text-[10px] tracking-widest">
          Get in touch
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white block origin-center transition-all"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-white block transition-all"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white block origin-center transition-all"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 px-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold uppercase tracking-tighter">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 border-b border-white/10 text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 py-4 text-center bg-white text-black rounded-full"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
