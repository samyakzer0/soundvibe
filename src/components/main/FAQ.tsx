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
    question: "DO YOU OFFER REVISIONS?",
    answer: "Yes, I offer up to 2 rounds of revisions for mixing and production to ensure you're completely happy with the results.",
  },
  {
    question: "WHAT DO I GET WITH DELIVERY?",
    answer: "You'll receive high-quality WAV and MP3 files, along with tracked-out stems if requested for mixing or production services.",
  },
  {
    question: "HOW LONG DOES A PROJECT TAKE?",
    answer: "Timeline depends on the scope. Mixing usually takes 3-5 days, while full production can take 2-4 weeks.",
  },
  {
    question: "WHAT GENRES DO YOU WORK IN?",
    answer: "I specialize in Hip-Hop, R&B, Pop, and Electronic music, but I'm always open to exploring new sounds.",
  },
  {
    question: "HOW DOES THE PROCESS WORK?",
    answer: "We start with a briefing, then I create a first draft. We refine it through revisions, and finally, I deliver the polished master.",
  },
];

export function FAQ() {
  return (
    <section className="pt-32 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="w-12 h-[1px] bg-white/20 mx-auto" />
          <h2 className="text-4xl font-bold tracking-tighter uppercase">GOT QUESTIONS?</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AccordionItem value={`item-${i}`} className="border-white/5 bg-[#0a0a0a] rounded-2xl px-6">
                <AccordionTrigger className="text-sm font-bold tracking-widest hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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
