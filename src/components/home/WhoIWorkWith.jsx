import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";

const audiences = [
  {
    title: "Funded Startups (Seed to Series B)",
    description: "You've raised capital and need to build commercial foundations - segmentation, positioning, GTM strategy - without hiring a full team or paying agency retainers.",
  },
  {
    title: "Pre-Exit Business Owners",
    description: "You're planning to sell in the next 3–5 years. You need to digitise, tighten the brand, and build systems that increase valuation and make the business attractive to buyers.",
  },
  {
    title: "In-House Product Teams",
    description: "You're operating like a well-funded startup inside a larger organisation, with regulatory and stakeholder complexity. You need someone who understands both startup speed and enterprise rigour.",
  },
  {
    title: "Pre-MVP Founders",
    description: "You've built an MVP, with or without a development team. You're not sure how to position it, who to sell it to or how to launch it and don't have budget for a marketing consultant. You need a guided tool that will help you build your own GTM.",
  },
];

export default function WhoIWorkWith() {
  return (
    <section className="py-24 md:py-32 bg-[#f7f7f8]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#b3475c] mb-4">
            Are We a Good Fit?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">
            I deliver the best results for:
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="bg-white rounded-2xl p-7 border border-[#e8e8e8] transition-colors duration-200 hover:border-[#b3475c]/30"
            >
              <h3 className="text-base font-bold text-[#0a0a0a] mb-3">{a.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{a.description}</p>
              {a.title === "Pre-MVP Founders" && (
                <a
                  href="https://icp-builder-tool.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#b3475c] mt-3 hover:underline"
                >
                  Start with the Free ICP Tool →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}