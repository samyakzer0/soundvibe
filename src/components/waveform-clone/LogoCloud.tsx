"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  "PRO TOOLS", "LOGIC PRO", "ABLETON", "RESOLVE", "PREMIERE", "NUENDO"
];

export function LogoCloud() {
  return (
    <div className="py-20 px-6 overflow-hidden bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-20">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-lg font-bold tracking-widest label-control text-text-primary"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
