"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VinylRecord } from "./VinylRecord";
import { ToneArm } from "./ToneArm";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-black/50 to-black text-white pt-16 md:pt-24 pb-8 md:pb-12 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-16">
          {/* Left Side: Brand Name with Vinyl */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="font-black tracking-tighter leading-[0.75] select-none flex flex-col" style={{ fontSize: 'clamp(2.5rem, 10vw, 12rem)' }}>
              <span>SOUND</span>
              <span className="flex items-center">
                VIBE
                {/* Vinyl Record with ToneArm - sized to match text height */}
                <span className="relative w-[0.6em] h-[0.6em] ml-2 inline-block overflow-visible">
                  <VinylRecord />
                  <ToneArm />
                </span>
              </span>
            </h2>

            {/* Mobile Copyright (Visible only on mobile) */}
            <p className="text-gray-500/80 text-xs md:text-sm font-medium block md:hidden mt-2">
              © {currentYear} SoundVibe. All rights reserved.
            </p>
          </div>

          {/* Right Side: Links */}
          <div className="flex flex-col items-start md:items-end gap-3 md:gap-2 w-full md:w-auto">
            {[
              { label: "LINKEDIN", href: "#" },
              { label: "INSTAGRAM", href: "#" },
              { label: "FACEBOOK", href: "#" },
              { label: "EMAIL US", href: "mailto:hello@waveform.com" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-3 md:gap-4 font-black uppercase tracking-tighter transition-all duration-300 hover:tracking-widest"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 3rem)' }}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-5 h-5 md:w-12 md:h-12 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 md:mt-20 lg:mt-32 pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          {/* Desktop Copyright (Hidden on mobile) */}
          <p className="text-gray-500 text-xs md:text-sm lg:text-base font-medium hidden md:block">
            © {currentYear} SoundVibe. All rights reserved.
          </p>
          <div className="flex gap-6 md:gap-8 text-xs md:text-sm text-gray-400">
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
