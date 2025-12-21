"use client";

import React from "react";
import { Navbar } from "@/components/waveform-clone/Navbar";
import { Hero } from "@/components/waveform-clone/Hero";
import { LogoCloud } from "@/components/waveform-clone/LogoCloud";
import { WhatIDo } from "@/components/waveform-clone/WhatIDo";
import { Quote } from "@/components/waveform-clone/Quote";
import { PastWork } from "@/components/waveform-clone/PastWork";
import { AboutMe } from "@/components/waveform-clone/AboutMe";
import { Testimonials } from "@/components/waveform-clone/Testimonials";
import { FAQ } from "@/components/waveform-clone/FAQ";
import { ContactCTA } from "@/components/waveform-clone/ContactCTA";
import { Footer } from "@/components/waveform-clone/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <LogoCloud />
      <WhatIDo />
      <Quote />
      <PastWork />
      <AboutMe />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
