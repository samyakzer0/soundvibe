"use client";

import React from "react";
import { Navbar } from "@/components/main/Navbar";
import { Hero } from "@/components/main/Hero";
import { InteractivePiano } from "@/components/main/InteractivePiano";
import { LogoCloud } from "@/components/main/LogoCloud";
import { WhatIDo } from "@/components/main/WhatIDo";
import { Quote } from "@/components/main/Quote";
import { PastWork } from "@/components/main/PastWork";
import { CubeSection } from "@/components/main/three/CubeSection";
import { Testimonials } from "@/components/main/Testimonials";
import { FAQ } from "@/components/main/FAQ";
import { ContactCTA } from "@/components/main/ContactCTA";
import { Footer } from "@/components/main/Footer";
import { ParallaxWrapper } from "@/components/main/ParallaxWrapper";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar />
      <Hero />

      <InteractivePiano />

      <ParallaxWrapper>
        <LogoCloud />
      </ParallaxWrapper>

        <WhatIDo />
     

      <ParallaxWrapper>
        <Quote />
      </ParallaxWrapper>

     
        <PastWork />
    

      {/* CubeSection has its own scroll-based animation, so no wrapper */}
      <CubeSection />

      <ParallaxWrapper>
        <Testimonials />
      </ParallaxWrapper>

      <ParallaxWrapper>
        <FAQ />
      </ParallaxWrapper>

      <ParallaxWrapper>
        <ContactCTA />
      </ParallaxWrapper>

      <ParallaxWrapper>
        <Footer />
      </ParallaxWrapper>
    </main>
  );
}
