import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Forward us the paperwork.",
    body: "Quote sent, invoice overdue, or job finished - forward the email to us. That's your entire involvement, and it takes ten seconds.",
  },
  {
    num: "02",
    title: "We do the chasing.",
    body: "Quotes get three polite touches over ten days. Overdue invoices get nudged until they're paid. Finished jobs get a review request while the customer's still happy. All of it by text and email, under your business name, written like a human - and nobody ever gets hassled. The last message always says it's the last one.",
  },
  {
    num: "03",
    title: "You win the work and see the results.",
    body: "Replies land with you same-day. Every recovered job, paid invoice and new review goes into a one-page monthly report - so you'll know exactly what your quote book is doing, for the first time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#b3475c] mb-4">
          How It Works
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0a0a0a] mb-10">
          Three steps. You do one of them.
        </h2>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex gap-5 bg-[#F0F7FA] rounded-xl p-6 md:p-8 border border-[#e5e5e5]"
            >
              <div className="text-3xl font-bold text-[#b3475c] flex-shrink-0">{step.num}</div>
              <div>
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-2">{step.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}