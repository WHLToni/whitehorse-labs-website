import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  [
    "Are you a lawyer?",
    "No. I'm a marketer with medical advertising training. Your lawyer drafts the privacy policy; I find the gaps, coordinate the work and fit it into your website.",
  ],
  [
    "Will you post on our social media?",
    "No. I plan the content and write the briefs, and your team or a designer publishes them. I check everything before it goes out.",
  ],
  [
    "We already have an agency. Can you still help?",
    "Yes. Agencies are usually strong on design and ads. I add the medical compliance check and the strategy on top.",
  ],
  [
    "Do you need access to patient records?",
    "No. I work on your website and marketing, never your clinical systems.",
  ],
  [
    "Where are you based?",
    "On the Gold Coast. I work with practices across Australia by video call and phone.",
  ],
];

export default function SpecialistFAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="ds-band">
      <div className="ds-wrap max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ds-display text-[clamp(26px,4vw,40px)] mb-10"
        >
          Questions specialists ask
        </motion.h2>
        <div className="border-t border-[var(--line)]">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[var(--line)]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-bold text-[var(--ink)] text-base md:text-lg">{q}</span>
                  <Plus
                    className={`w-5 h-5 flex-shrink-0 text-[var(--accent)] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#3a4649] text-base leading-relaxed pb-5 pr-8">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}