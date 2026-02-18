import React from "react";
import { motion } from "framer-motion";

const roles = [
  {
    title: "Consultant",
    description: "Analyses and recommends, then exits. You're left to execute.",
    color: "#666",
  },
  {
    title: "Contractor",
    description: "Executes against a brief. Rarely owns strategic direction.",
    color: "#666",
  },
  {
    title: "Fractional",
    description: "Owns specific commercialisation decisions and outputs, end-to-end. Strategy and execution, delivered fast.",
    color: "#E91E8C",
    highlight: true,
  },
];

export default function FractionalCompare() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            The Difference
          </p>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Why Fractional Product Commercialisation?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative p-8 rounded-2xl border ${
                role.highlight
                  ? "bg-[#111] border-[#E91E8C]/30"
                  : "bg-[#0d0d0d] border-white/5"
              }`}
            >
              {role.highlight && (
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#E91E8C] to-transparent" />
              )}
              <h3
                className="font-['Space_Grotesk'] text-xl font-semibold mb-3"
                style={{ color: role.color }}
              >
                {role.title}
              </h3>
              <p className="text-[#999] text-sm leading-relaxed">{role.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-[#999] text-sm mt-8 max-w-xl">
          You get A-player expertise at fractional cost — without the six-figure salary, equity, 
          or long-term commitment of a full-time hire.
        </p>
      </div>
    </section>
  );
}