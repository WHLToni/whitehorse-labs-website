import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plan = {
  name: "Quote Chaser",
  price: "$549/mo",
  tagline: "Everything your quote book needs, done for you:",
  bullets: [
    "Every quote chased: 3 polite touches over 10 days, under your business name",
    "Replies handled and forwarded to you same-day",
    "Lost-job intel: why you didn't win the ones that went quiet",
    "Overdue invoice nudges - polite, persistent, professional",
    "Google review requests after every completed job",
    "A monthly one-page report: what was chased, what was won, what it was worth",
    "Covers up to 100 quotes a month",
  ],
};

export default function Pricing() {
  return (
    <section className="py-16 md:py-20 bg-[#F0F7FA]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#b3475c] mb-4 text-center">
          Pricing
        </p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-10 text-center">
          Fixed monthly fee. No surprises.
        </h2>
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl p-8 border border-[#b3475c] bg-white"
          >
            <h3 className="text-xl font-bold text-[#0a0a0a] mb-1">{plan.name}</h3>
            <p className="text-2xl font-bold text-[#b3475c] mb-3">{plan.price}</p>
            <p className="text-sm text-[#666] leading-relaxed mb-6">{plan.tagline}</p>
            <ul className="space-y-3">
              {plan.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-sm text-[#555] leading-relaxed">
                  <Check className="w-4 h-4 text-[#b3475c] flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <p className="text-xs text-[#999] leading-relaxed mt-8 max-w-2xl mx-auto text-center">
          Fixed monthly fee. No lock-in - 30 days notice, and your customer data is always yours.
          90-day review: if we haven't recovered you a single job by then, that's exactly the
          conversation we'll have.
        </p>
      </div>
    </section>
  );
}