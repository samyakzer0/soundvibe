"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "WHAT IS STUDIO-GRADE PRECISION?",
    answer: "It means every fader move, VFX particle, and color grade is calibrated to industry standards. We use professional-grade monitors and hardware to ensure your project translates perfectly across all platforms.",
  },
  {
    question: "HOW DO YOU SYNC MOTION TO AUDIO?",
    answer: "Our design system uses rhythm-based motion tokens. Animation durations are synchronized with musical tempos (120 BPM default), aligning visual transitions with the natural beat of the project.",
  },
  {
    question: "CAN I BOOK MULTIPLE SERVICES?",
    answer: "Absolutely. SoundVibe is built for multi-service branding. You can combine Audio Mixing, VFX Studio, and Color Grading for a cohesive end-to-end production experience.",
  },
  {
    question: "DO YOU OFFER REMOTE SESSIONS?",
    answer: "Yes, we use low-latency streaming tools so you can experience high-fidelity audio and real-time visual reviews from anywhere in the world.",
  },
  {
    question: "WHAT IS THE REVISION POLICY?",
    answer: "We offer two standard revision rounds per service. Our goal is to achieve your creative vision while maintaining studio-grade technical standards.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-6 bg-bg-primary">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="w-12 h-[1px] bg-border-secondary mx-auto" />
          <h2 className="text-4xl font-bold tracking-tighter uppercase">TECHNICAL FAQ</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AccordionItem value={`item-${i}`} className="border-border-secondary bg-bg-secondary rounded-none px-6 hover:border-border-primary transition-colors">
                <AccordionTrigger className="label-control text-text-primary hover:no-underline py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
