"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white pt-32 pb-12 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-16">
          {/* Left Side: Brand Name */}
          <div className="flex items-center gap-6">
            <h2 className="text-5xl md:text-[12rem] font-black tracking-tighter leading-[0.75] select-none flex flex-col">
              <span><span className="text-blue-600">S</span>OUND</span>
              <span>VIBE</span>
            </h2>
          </div>

          {/* Right Side: Links */}
          <div className="flex flex-col items-end gap-2 w-full md:w-auto">
            {[
              { label: "LINKEDIN", href: "#" },
              { label: "INSTAGRAM", href: "#" },
              { label: "FACEBOOK", href: "#" },
              { label: "EMAIL US", href: "mailto:hello@waveform.com" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-4 text-xl md:text-5xl font-bold transition-all duration-300 hover:tracking-widest"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-6 h-6 md:w-12 md:h-12 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm md:text-base font-medium">
            © {currentYear} SoundVibe. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-0 right-0 transform translate-y-1/2 opacity-[0.02] pointer-events-none hidden lg:block">
        <span className="text-[30rem] font-black whitespace-nowrap">
          SOUNDVIBE
        </span>
      </div>
    </footer>
  );
}
