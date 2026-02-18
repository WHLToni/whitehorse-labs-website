import React from "react";
import { motion } from "framer-motion";

const roles = [
  {
    title: "Consultant",
    description: "Analyses and recommends, then exits. You're left to execute.",
    highlight: false,
  },
  {
    title: "Contractor",
    description: "Executes against a brief. Rarely owns strategic direction.",
    highlight: false,
  },
  {
    title: "Fractional",
    description: "Owns specific commercialisation decisions and outputs, end-to-end. Strategy and execution, delivered fast.",
    highlight: true,
  },
];

export default function FractionalCompare() {
  return (
    <section className="py-24 md:py-32 bg-[#f7f7f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            The Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">
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
              className={`p-8 rounded-2xl border ${
                role.highlight
                  ? "bg-[#0a0a0a] border-transparent"
                  : "bg-white border-[#e5e5e5]"
              }`}
            >
              <h3 className={`text-xl font-bold mb-3 ${role.highlight ? "text-[#E91E8C]" : "text-[#888]"}`}>
                {role.title}
              </h3>
              <p className={`text-sm leading-relaxed ${role.highlight ? "text-[#ccc]" : "text-[#666]"}`}>
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-[#888] text-sm mt-8 max-w-xl">
          You get A-player expertise at fractional cost — without the six-figure salary, equity,
          or long-term commitment of a full-time hire.
        </p>
      </div>
    </section>
  );
}