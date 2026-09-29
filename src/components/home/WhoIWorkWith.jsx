import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Customer & Market Validation",
    body: "Establishing whether initial interest represents an exploratory user or a commercial buyer with budget and authority to purchase.",
  },
  {
    title: "Value-Based Pricing Models",
    body: "Structuring licensing, pilot agreements, and contract terms based on commercial return delivered rather than software build cost.",
  },
  {
    title: "Product Positioning & Messaging",
    body: "Articulating complex technical capabilities clearly for commercial buyers, technical evaluators, and procurement teams.",
  },
  {
    title: "Regulatory & Commercial Alignment",
    body: "Factoring market-specific compliance requirements and procurement friction directly into the initial commercial launch.",
  },
];

export default function WhoIWorkWith() {
  return (
    <section className="ds-band ds-band--glass">
      <div className="ds-wrap">
        <div className="mb-12">
          <h2 className="ds-display text-[clamp(28px,4vw,44px)] text-[var(--ink)] mt-4">
            The transition from engineering milestone to commercial adoption.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="bg-white rounded-md p-7 border border-[var(--line)] transition-colors duration-200 hover:border-[var(--accent)]"
            >
              <h3 className="text-base font-bold text-[var(--ink)] mb-3">{c.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}