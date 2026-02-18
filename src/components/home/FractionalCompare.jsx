import React from "react";
import { motion } from "framer-motion";


const roles = [
  {
    title: "Consultant",
    description: "Analyses your situation, provides recommendations, then exits. Implementation is up to you.",
    highlight: false,
  },
  {
    title: "Contractor",
    description: "Executes defined tasks to spec. No strategic input, no outcome ownership.",
    highlight: false,
  },
  {
    title: "Fractional",
    description: "Embedded expert with decision-making authority. Owns specific commercialisation outcomes end-to-end — strategy, execution, and results. Works part-time (typically 1 day/week or project-based sprints), but operates like your head of product marketing.",
boldFooter: "You get senior-level expertise without the six-figure salary, equity, or long-term commitment of a full-time executive hire.",
    highlight: true,
  },
];

export default function FractionalCompare() {
  return (
    <section className="py-24 md:py-32 bg-[#f7f7f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column — comparison */}
          <div>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
                The Difference
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">
                Fractional GTM vs. Consultant vs. Contractor
              </h2>
            </div>

            <div className="flex flex-col gap-6">
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
                  <p className={`text-sm leading-relaxed whitespace-pre-line ${role.highlight ? "text-[#ccc]" : "text-[#666]"}`}>
                    {role.description}
                  </p>
                  {role.boldFooter && (
                    <p className="text-sm font-bold text-white mt-3">{role.boldFooter}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}