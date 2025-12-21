"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-6 max-w-xs">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-sm rotate-45" />
                </div>
                <span className="font-bold text-lg tracking-tighter">WAVEFORM</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your ideas deserve more than a demo. Let's turn them into records that last.
              </p>
              <p className="text-xs text-muted-foreground pt-4">
                Created by <span className="text-white">Sebadam</span>
              </p>
          </div>
          
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-white uppercase">Navigation</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="#services" className="hover:text-white transition-colors">Services</Link>
                <Link href="#about" className="hover:text-white transition-colors">About</Link>
                <Link href="#work" className="hover:text-white transition-colors">Work</Link>
                <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
                <Link href="/404" className="hover:text-white transition-colors">404</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-white uppercase">Socials</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                <Link href="#" className="hover:text-white transition-colors">Youtube</Link>
                <Link href="#" className="hover:text-white transition-colors">Facebook</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
