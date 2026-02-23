import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Wrench, Zap, ChevronDown } from "lucide-react";

const roles = [
  {
    title: "Consultant",
    icon: Lightbulb,
    tag: "Recommends",
    description: "Analyses your situation, provides recommendations, then exits. Implementation is up to you.",
    bullets: ["Provides advice only", "No execution ownership", "Leaves after delivery"],
    highlight: false,
    iconColor: "#888",
  },
  {
    title: "Contractor",
    icon: Wrench,
    tag: "Executes",
    description: "Executes defined tasks to spec. No strategic input, no outcome ownership.",
    bullets: ["Task-based delivery", "No strategic direction", "Bounded by the brief"],
    highlight: false,
    iconColor: "#888",
  },
  {
    title: "Fractional GTM",
    icon: Zap,
    tag: "Owns Outcomes",
    description: "Embedded expert with decision-making authority. Owns specific commercialisation outcomes end-to-end — strategy, execution, and results.",
    bullets: ["Strategy + execution", "Outcome ownership", "Senior expertise, fractional cost"],
    boldFooter: "You get senior-level expertise without the six-figure salary, equity, or long-term commitment.",
    highlight: true,
    iconColor: "#E91E8C",
  },
];

function AccordionCard({ role, isOpen, onToggle }) {
  const Icon = role.icon;
  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        role.highlight
          ? "bg-gradient-to-br from-[#1a0a14] via-[#0a0a0a] to-[#0a0a18] border-[#E91E8C]/40"
          : "bg-white border-[#e5e5e5]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
            role.highlight ? "bg-[#E91E8C]/15" : "bg-[#f0f0f0]"
          }`}>
            <Icon className="w-5 h-5" style={{ color: role.iconColor }} />
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-lg font-bold ${role.highlight ? "text-white" : "text-[#0a0a0a]"}`}>
              {role.title}
            </span>
            <span className={`hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              role.highlight ? "bg-[#E91E8C]/20 text-[#E91E8C]" : "bg-[#f0f0f0] text-[#888]"
            }`}>
              {role.tag}
            </span>
            {role.highlight && (
              <span className="hidden sm:inline-flex bg-gradient-to-r from-[#E91E8C] to-[#7B5FB5] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                Best Value
              </span>
            )}
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
            role.highlight ? "text-[#E91E8C]" : "text-[#aaa]"
          } ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`px-6 pb-6 border-t ${role.highlight ? "border-white/10" : "border-[#f0f0f0]"}`}>
              <p className={`text-sm leading-relaxed mt-4 mb-4 ${role.highlight ? "text-[#bbb]" : "text-[#666]"}`}>
                {role.description}
              </p>
              <ul className="space-y-2">
                {role.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      role.highlight ? "bg-[#E91E8C]" : "bg-[#ccc]"
                    }`} />
                    <span className={`text-sm ${role.highlight ? "text-[#ccc]" : "text-[#777]"}`}>{b}</span>
                  </li>
                ))}
              </ul>
              {role.boldFooter && (
                <p className="text-sm font-semibold text-white mt-5 pt-4 border-t border-white/10 leading-relaxed">
                  {role.boldFooter}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FractionalCompareV3() {
  const [openIndex, setOpenIndex] = useState(2); // Fractional open by default

  return (
    <section className="py-24 md:py-32 bg-[#f7f7f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            The Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">
            Fractional GTM vs. Consultant vs. Contractor
          </h2>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-3">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AccordionCard
                role={role}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>

        {/* Desktop: Horizontal Cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative p-8 rounded-2xl flex flex-col cursor-default transition-all duration-300 ${
                  role.highlight
                    ? "bg-gradient-to-br from-[#1a0a14] via-[#0a0a0a] to-[#0a0a18] border-2 border-[#E91E8C]/40 shadow-[0_0_40px_rgba(233,30,140,0.15)] hover:shadow-[0_0_60px_rgba(233,30,140,0.25)] hover:border-[#E91E8C]/70"
                    : "bg-white border border-[#e5e5e5] shadow-sm hover:shadow-md hover:border-[#d0d0d0]"
                }`}
              >
                {role.highlight && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-gradient-to-r from-[#E91E8C] to-[#7B5FB5] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Best Value
                    </span>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  role.highlight ? "bg-[#E91E8C]/15" : "bg-[#f0f0f0]"
                }`}>
                  <Icon className="w-7 h-7" style={{ color: role.iconColor }} />
                </div>

                <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-3 self-start ${
                  role.highlight ? "bg-[#E91E8C]/20 text-[#E91E8C]" : "bg-[#f0f0f0] text-[#888]"
                }`}>
                  {role.tag}
                </div>

                <h3 className={`text-2xl font-bold mb-3 ${role.highlight ? "text-white" : "text-[#0a0a0a]"}`}>
                  {role.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${role.highlight ? "text-[#bbb]" : "text-[#666]"}`}>
                  {role.description}
                </p>

                <ul className="space-y-2 mt-auto">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        role.highlight ? "bg-[#E91E8C]" : "bg-[#ccc]"
                      }`} />
                      <span className={`text-sm ${role.highlight ? "text-[#ccc]" : "text-[#777]"}`}>{b}</span>
                    </li>
                  ))}
                </ul>

                {role.boldFooter && (
                  <p className="text-sm font-semibold text-white mt-6 pt-5 border-t border-white/10 leading-relaxed">
                    {role.boldFooter}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}