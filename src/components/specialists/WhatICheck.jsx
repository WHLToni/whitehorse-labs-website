import React from "react";
import { motion } from "framer-motion";

const items = [
  ["Privacy policy", "Present, current, and covering health information, forms and tracking."],
  ["Collection notices", "A short notice wherever a form collects patient details."],
  ["Tracking pixels", "Meta and Google tags on pages where patients describe their health."],
  ["Ahpra advertising", "Testimonials, before and after images, titles and claims."],
  ["TGA rules", "Prescription medicine names and wording on injectables pages."],
  ["Cosmetic surgery requirements", "Registration details, GP referral and cooling-off information."],
  ["Conversion", "A clear call to action, an easy booking path and a site that works on a phone."],
  ["Accessibility", "Contrast, headings, form labels and image descriptions."],
];

export default function WhatICheck() {
  return (
    <section className="ds-band ds-band--mist">
      <div className="ds-wrap">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ds-display text-[clamp(26px,4vw,40px)] mb-5 max-w-2xl"
        >
          What I look at on a practice website
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#3a4649] text-lg leading-relaxed mb-10 max-w-2xl"
        >
          Most of the gaps I find are small. They're also the first things a regulator, or a
          careful patient, notices.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
          {items.map(([title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <p className="font-bold text-[var(--ink)] text-base mb-1">{title}</p>
              <p className="text-[#3a4649] text-base leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}