"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-bg-primary/80 backdrop-blur-xl border-b border-border-secondary"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          {[0.4, 0.7, 1, 0.6, 0.3].map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: [`${h * 20}px`, `${h * 10}px`, `${h * 20}px`] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
              className="w-1 bg-primary-cyan rounded-full glow-subtle-cyan"
            />
          ))}
        </div>
        <span className="font-bold text-xl tracking-widest text-primary-cyan">SOUNDVIBE</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 label-control text-text-secondary">
        <Link href="#services" className="hover:text-primary-cyan transition-all hover:glow-subtle-cyan">Services</Link>
        <Link href="#about" className="hover:text-secondary-lime transition-all">Studio</Link>
        <Link href="#work" className="hover:text-accent-purple transition-all">Projects</Link>
        <Link href="#contact" className="hover:text-accent-pink transition-all">Book</Link>
      </div>
      
      <Button variant="outline" className="rounded-button px-6 border-border-primary text-primary-cyan hover:bg-primary-cyan hover:text-bg-primary glow-subtle-cyan transition-all label-control">
        Session Login
      </Button>
    </motion.nav>
  );
}
