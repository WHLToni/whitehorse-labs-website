import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    border: "var(--accent)",
    label: "One-off project",
    title: "Compliance and Conversion Fix",
    bullets: [
      "Privacy policy gaps, coordinated with your lawyer",
      "Collection notices on every form",
      "Ahpra and TGA review of your site copy and images",
      "A clear call to action and booking path",
    ],
    price: "From $3,500",
  },
  {
    border: "var(--ink)",
    label: "Monthly, 3-month minimum",
    title: "Fractional Marketing Lead",
    bullets: [
      "Strategy and a monthly plan",
      "Compliant copy and post briefs for your team",
      "Website upkeep and patient email",
      "Enquiry follow-up and monthly reporting",
      "A compliance check on everything that goes out",
    ],
    price: "From $4,000 a month",
  },
  {
    border: "var(--accent)",
    label: "Workshop and setup",
    title: "AI in your practice, safely",
    bullets: [
      "Half-day session for the doctor and front office",
      "What AI is good for, and what never goes into it",
      "Claude set up with practice-specific skills",
      "Ready for the 10 December privacy changes",
    ],
    price: "From $1,500",
  },
];

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function WhatIDo() {
  return (
    <section className="ds-band">
      <div className="ds-wrap">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ds-display text-[clamp(26px,4vw,40px)] mb-12 max-w-2xl"
        >
          Three ways to work together
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-[var(--line)] rounded-md p-7 flex flex-col"
              style={{ borderTopWidth: "4px", borderTopColor: c.border }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-3">
                {c.label}
              </p>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-4">{c.title}</h3>
              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {c.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2.5">
                    <span
                      className="w-1.5 h-1.5 bg-[var(--accent)] flex-shrink-0 mt-2"
                      aria-hidden="true"
                    />
                    <span className="text-[#3a4649] text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-bold text-[var(--ink)] mb-4">{c.price}</p>
              <a href="#contact" onClick={scrollTo("contact")} className="ds-textlink text-sm">
                Talk to me about this
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}