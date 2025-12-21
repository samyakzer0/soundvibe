"use client";

import React from "react";
import { motion } from "framer-motion";

export function Quote() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="w-12 h-[1px] bg-white/20 mx-auto" />
        <motion.h2 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight uppercase"
        >
          SOUND LIKE YOUR BEST SELF. <br />
          <span className="text-muted-foreground">EFFICIENT SESSIONS. HONEST FEEDBACK. TAILORED PRODUCTION. CLEAR NEXT STEPS.</span>
        </motion.h2>
      </div>
    </section>
  );
}
