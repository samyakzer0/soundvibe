"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  "LOGO IPSUM", "LOGO", "LOGO IPSUM", "LOGOIPSUM", "IPSUM", "LOGOIPSUM"
];

export function LogoCloud() {
  return (
    <div className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-30 grayscale invert">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-xl font-black tracking-tighter"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
