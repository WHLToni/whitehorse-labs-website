import React from "react";
import { motion } from "framer-motion";

const steps = [
  "A 15-minute call about your practice and your goals.",
  "I review your website against Ahpra, TGA and privacy rules.",
  "You get a plain-English fix list and a fixed quote.",
  "We fix it, then decide together if ongoing support makes sense.",
];

export default function HowItWorks() {
  return (
    <section className="ds-band ds-band--mist" id="how-it-works">
      <div className="ds-wrap">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ds-display text-[clamp(26px,4vw,40px)] mb-12"
        >
          How it works
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <p className="ds-display text-[var(--accent)] text-5xl md:text-6xl mb-4">
                {i + 1}
              </p>
              <p className="text-[#3a4649] text-base leading-relaxed">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}