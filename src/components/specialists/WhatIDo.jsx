import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    border: "var(--accent)",
    label: "Fixed-scope project",
    title: "Compliance and Conversion Review",
    text: "A review of the website against Ahpra, TGA and privacy requirements, followed by implementation. This includes briefing your lawyer on the privacy policy, revising non-compliant copy and improving the enquiry process to increase booked consultations.",
    price: "From $3,500",
  },
  {
    border: "var(--ink)",
    label: "Monthly, three-month minimum",
    title: "Fractional Marketing Lead",
    text: "Senior marketing leadership without a full-time appointment. This covers strategy and quarterly planning, compliant copy and creative briefs for your team, patient communications, enquiry management and reporting on consultations booked.",
    price: "From $4,000 per month",
  },
  {
    border: "var(--accent)",
    label: "Workshop and implementation",
    title: "AI Adoption for Practices",
    text: "A half-day workshop for the specialist and administrative team covering appropriate uses of AI in a specialist practice, the information that should never be entered into AI tools, and the new privacy policy disclosure requirements. Optional implementation of Claude, configured for your practice's templates and workflows.",
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
          Services
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
              <p className="text-[#3a4649] text-sm leading-relaxed mb-6 flex-1">{c.text}</p>
              <p className="text-lg font-bold text-[var(--ink)] mb-4">{c.price}</p>
              <a href="#contact" onClick={scrollTo("contact")} className="ds-textlink text-sm">
                Discuss this service
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}