import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "The Diagnostic",
    price: "$6K · 2 weeks",
    description:
      "Market research, segmentation, ICP definition, competitive analysis and problem definition. Optional: customer and prospect interviews including hypothesis design, question writing and insight analysis.",
    output: "A clear picture of your market, your buyer and where you fit.",
  },
  {
    name: "GTM Strategy",
    price: "$12K · 4 weeks",
    description:
      "Everything in The Diagnostic, plus positioning framework, messaging framework and brand foundations.",
    output: "You know who you're selling to, what you're saying and how you're showing up.",
  },
  {
    name: "Launch Architecture",
    price: "$20K · 6 weeks",
    description:
      "Everything in GTM Strategy, plus sales enablement tools — pitch deck, competitive battlecards, talk tracks and persona cards — and a full launch plan.",
    output: "You're ready to go to market.",
  },
  {
    name: "Pre-Exit Readiness",
    price: "Custom",
    description:
      "Commercial systems, brand refresh, digital foundations and sales enablement built for acquisition readiness. Priced on scope.",
    output: null,
  },
];

export default function ChoosePath() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            The Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-5">
            Choose How You Want to Start
          </h2>
          <p className="text-[#666] text-base leading-relaxed max-w-2xl">
            You've built something. Now you need to commercialise it. Fixed scope, fixed price, delivered in weeks. No hourly billing, no discovery phases that go nowhere.
          </p>
        </div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[#e5e5e5] overflow-hidden"
          style={{ boxShadow: "0 4px 40px rgba(233,30,140,0.07), 0 1px 12px rgba(0,0,0,0.05)" }}
        >
          {/* Stack label */}
          <div className="px-8 pt-7 pb-5 border-b border-[#f0f0f0] bg-[#fafafa]">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#999]">
              The Commercialisation Stack
            </p>
          </div>

          {/* Tiers */}
          {tiers.map((tier, i) => (
            <div key={tier.name} className={`px-8 py-6 ${i < tiers.length - 1 ? "border-b border-[#f0f0f0]" : ""}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <span className="text-[15px] font-bold text-[#0a0a0a]">{tier.name}</span>
                <span className="text-sm font-semibold text-[#E91E8C] shrink-0">{tier.price}</span>
              </div>
              <p className="text-[#666] text-sm leading-relaxed">{tier.description}</p>
              {tier.output && (
                <p className="text-xs text-[#aaa] italic mt-2">
                  <span className="not-italic font-medium text-[#bbb]">Output:</span> {tier.output}
                </p>
              )}
            </div>
          ))}

          {/* CTA row */}
          <div className="px-8 py-6 bg-[#fafafa] border-t border-[#f0f0f0]">
            <Link
              to={createPageUrl("Contact")}
              className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-2.5 rounded-lg text-sm"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="relative flex items-center my-8">
          <div className="flex-1 border-t border-[#ececec]" />
          <span className="mx-4 text-[10px] font-semibold uppercase tracking-widest text-[#ccc]">
            Also Available
          </span>
          <div className="flex-1 border-t border-[#ececec]" />
        </div>

        {/* Pre-Build card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[#e5e5e5] overflow-hidden"
          style={{ boxShadow: "0 4px 40px rgba(233,30,140,0.07), 0 1px 12px rgba(0,0,0,0.05)" }}
        >
          <div className="px-8 pt-7 pb-5 border-b border-[#f0f0f0] bg-[#fafafa]">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#999]">
              Pre-Build
            </p>
          </div>

          <div className="px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <span className="text-[15px] font-bold text-[#0a0a0a]">The MVP Sprint</span>
              <span className="text-sm font-semibold text-[#E91E8C] shrink-0">Custom</span>
            </div>
            <p className="text-[#666] text-sm leading-relaxed">
              You have a problem worth solving but no product yet. I'll help you define the problem, design the solution and build a working proof of concept using rapid prototyping — ready for real-world validation in weeks, not months.
            </p>
          </div>

          <div className="px-8 py-6 bg-[#fafafa] border-t border-[#f0f0f0]">
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 text-[#E91E8C] font-semibold px-6 py-2.5 rounded-lg text-sm border border-[#E91E8C]/40 hover:border-[#E91E8C] transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>

        {/* Footer line */}
        <p className="mt-8 text-xs text-[#bbb] italic">
          Not ready for a full engagement? The frameworks I use with every client are available for $149.{" "}
          <Link to={createPageUrl("LaunchSystem")} className="text-[#E91E8C] hover:underline not-italic font-medium">
            →
          </Link>
        </p>

      </div>
    </section>
  );
}