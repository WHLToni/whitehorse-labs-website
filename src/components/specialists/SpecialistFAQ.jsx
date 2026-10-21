import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  [
    "Do you manage social media?",
    "I develop the strategy, brief the content and review it for compliance before publication. Production is handled by your team or by designers I engage.",
  ],
  [
    "Can you work with our existing agency?",
    "Yes. Many practices already have an agency. I can complete the review and hand the findings to your agency to implement, or provide ongoing compliance review of what they produce.",
  ],
  [
    "Do you need access to patient records?",
    "No. My work is limited to your marketing and website. I do not require access to clinical systems or patient data.",
  ],
  [
    "Where are you based?",
    "I am based on the Gold Coast and work with practices across Australia, primarily by video conference.",
  ],
];

export default function SpecialistFAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="ds-band ds-band--mist">
      <div className="ds-wrap max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ds-display text-[clamp(26px,4vw,40px)] mb-10"
        >
          Frequently asked questions
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
                    className={`w-5 h-5 flex-shrink-0 text-[var(--pine)] transition-transform duration-200 ${
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