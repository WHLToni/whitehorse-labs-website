import React, { useState } from "react";
import { motion } from "framer-motion";

const audiences = [
  {
    num: "01",
    title: "Funded Startups (Seed to Series B)",
    description: "You've raised capital and need to build commercial foundations — segmentation, positioning, GTM strategy — without hiring a full team or paying agency retainers.",
  },
  {
    num: "02",
    title: "Pre-Exit Business Owners",
    description: "You're planning to sell in the next 3–5 years. You need to digitise, tighten the brand, and build systems that increase valuation and make the business attractive to buyers.",
  },
  {
    num: "03",
    title: "In-House Product Teams",
    description: "You're operating like a well-funded startup inside a larger organisation, with regulatory and stakeholder complexity. You need someone who understands both startup speed and enterprise rigour.",
  },
  {
    num: "04",
    title: "Pre-MVP Founders",
    description: "You've built an MVP — with or without a development team. You don't know how to position it, who to sell it to, or how to launch it. You need a commercialisation framework, not a $20K consultant.",
  },
];

export default function WhoIWorkWith() {
  return (
    <section className="py-24 md:py-32 bg-[#f7f7f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            Clients
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">
            Who I Work With
          </h2>
        </div>

        <div className="max-w-3xl">
          {audiences.map((a, i) => (
            <motion.div
              key={a.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {i > 0 && <div className="border-t border-[#e5e5e5]" />}
              <div className="flex gap-10 py-8">
                <span className="text-sm font-light text-[#bbb] w-8 shrink-0 pt-0.5">{a.num}</span>
                <div>
                  <h3 className="text-base font-bold text-[#0a0a0a] mb-2">{a.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{a.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}