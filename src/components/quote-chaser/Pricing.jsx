import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Cash & Rep",
    price: "$249/mo",
    tagline: "For businesses with full books who still bleed time on admin.",
    bullets: [
      "Overdue invoice nudges - polite, persistent, under your name",
      "Google review requests after every completed job",
      "Monthly one-page report",
    ],
    popular: false,
  },
  {
    name: "Chase+",
    price: "$549/mo",
    tagline: "Everything in Cash & Rep, plus:",
    bullets: [
      "Every quote chased: 3 touches over 10 days",
      "Replies handled and forwarded to you same-day",
      "Lost-job intel: why you didn't win the ones that went quiet",
      "Covers up to 100 quotes a month",
    ],
    popular: true,
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`relative rounded-2xl p-8 border ${
                plan.popular
                  ? "border-[#b3475c] bg-white"
                  : "border-[#e5e5e5] bg-white"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b3475c] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
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
          ))}
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