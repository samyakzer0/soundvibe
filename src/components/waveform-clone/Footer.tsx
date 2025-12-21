"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-primary-cyan/10 bg-bg-primary">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-6 max-w-xs">
             <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[0.4, 0.7, 1].map((h, i) => (
                    <div key={i} className="w-1 h-6 bg-primary-cyan rounded-full glow-cyan" />
                  ))}
                </div>
                <span className="font-bold text-lg tracking-widest text-primary-cyan">SOUNDVIBE</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                SynthWave audio-native design system for professional mixing, VFX, and creative studio workflows.
              </p>
              <div className="space-y-2 pt-4">
                <p className="text-[10px] mono-text text-text-muted uppercase tracking-tighter">
                  EST. 2025 | v1.0 | 44.1kHz / 24-bit
                </p>
                <p className="text-xs text-text-muted">
                  Created by <span className="text-text-primary">SoundVibe Studios</span>
                </p>
              </div>
          </div>
          
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-text-primary uppercase">Studio Map</h4>
              <nav className="flex flex-col gap-2 text-sm text-text-muted mono-text uppercase text-[12px]">
                <Link href="#services" className="hover:text-primary-cyan transition-colors hover:glow-cyan">Services</Link>
                <Link href="#about" className="hover:text-secondary-lime transition-colors">Equipment</Link>
                <Link href="#work" className="hover:text-accent-purple transition-colors">Portfolio</Link>
                <Link href="#contact" className="hover:text-accent-pink transition-colors">Booking</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-text-primary uppercase">Frequencies</h4>
              <nav className="flex flex-col gap-2 text-sm text-text-muted mono-text uppercase text-[12px]">
                <Link href="#" className="hover:text-primary-cyan transition-colors">Instagram</Link>
                <Link href="#" className="hover:text-accent-purple transition-colors">Vimeo</Link>
                <Link href="#" className="hover:text-accent-pink transition-colors">Mixcloud</Link>
                <Link href="#" className="hover:text-text-primary transition-colors">LinkedIn</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
