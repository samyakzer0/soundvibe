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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-md border-b border-border/50"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
        </div>
        <span className="font-bold text-xl tracking-tighter">WAVEFORM</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <Link href="#services" className="hover:text-white transition-colors">Services</Link>
        <Link href="#about" className="hover:text-white transition-colors">About</Link>
        <Link href="#work" className="hover:text-white transition-colors">Work</Link>
        <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
      
      <Button variant="outline" className="rounded-full px-6 border-white/20 hover:bg-white hover:text-black transition-all">
        Get in touch
      </Button>
    </motion.nav>
  );
}
