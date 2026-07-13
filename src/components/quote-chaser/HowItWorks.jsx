import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Forward us the quote.",
    body: "That's your entire involvement. One email, done.",
  },
  {
    num: "02",
    title: "We chase it.",
    body: "Three polite touches over ten days - text and email, under your business name, written like a human, not a robot. The last message literally says it's the last one. No hassling, ever.",
  },
  {
    num: "03",
    title: "You win the job or learn why you didn't.",
    body: "Every response logged. Every recovered job reported. You'll know exactly what your quote book is doing for the first time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#b3475c] mb-4">
          How It Works
        </p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-10">
          Three steps. You only do one of them.
        </h2>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex gap-5 bg-[#F0F7FA] rounded-xl p-6 md:p-8 border border-[#e5e5e5]"
            >
              <div className="text-3xl font-bold text-[#b3475c] flex-shrink-0">{step.num}</div>
              <div>
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-2">{step.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}