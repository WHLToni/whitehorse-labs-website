import React from "react";
import { motion } from "framer-motion";

const items = [
  ["Privacy policy (APP 1)", "Whether a policy is published, current, and covers health information, enquiry forms, tracking technologies and, from 10 December, automated decision-making."],
  ["Collection notices (APP 5)", "Whether a notice appears wherever a form collects personal or health information."],
  ["Tracking technologies", "Whether Meta or Google pixels operate on pages where patients disclose health information, the subject of the Privacy Commissioner's 2026 determinations against Monash IVF and Medmate."],
  ["Ahpra advertising (section 133)", "Testimonials, before and after images, protected titles and claims."],
  ["TGA requirements", "References to prescription-only medicines, including indirect terms for injectables."],
  ["Cosmetic surgery guidelines", "Registration details, GP referral, pre-operative consultations and the cooling-off period."],
  ["Conversion", "Calls to action, the booking process, mobile performance and enquiry response times."],
  ["Accessibility", "Contrast, heading structure, form labels and image descriptions, assessed against WCAG 2.2 AA."],
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
          What a website review covers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#3a4649] text-lg leading-relaxed mb-10 max-w-2xl"
        >
          Each review assesses the website against current regulatory requirements, and against how effectively it converts enquiries into consultations.
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