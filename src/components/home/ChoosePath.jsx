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
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            The Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-5">
            Choose How You Want to Start
          </h2>
          <p className="text-[#666] text-base leading-relaxed">
            You've built something. Now you need to commercialise it. Fixed scope, fixed price, delivered in weeks. No hourly billing, no discovery phases that go nowhere.
          </p>
        </div>

        {/* Commercialisation Stack */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-6">
            The Commercialisation Stack
          </p>

          <div className="bg-white rounded-2xl border border-[#e5e5e5] px-8 py-2"
            style={{ boxShadow: "0 4px 40px rgba(233,30,140,0.08), 0 1px 12px rgba(0,0,0,0.06)" }}>
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                {i > 0 && <div className="border-t border-[#e5e5e5]" />}
                <div className="py-7">
                  <p className="text-sm font-bold text-[#0a0a0a] mb-2">
                    {tier.name}{" "}
                    <span className="font-normal text-[#E91E8C]">· {tier.price}</span>
                  </p>
                  <p className="text-[#666] text-sm leading-relaxed mb-2">{tier.description}</p>
                  {tier.output && (
                    <p className="text-xs text-[#aaa] italic">Output: {tier.output}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to={createPageUrl("Contact")}
              className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm"
            >
              Book a Call
            </Link>
          </div>

          {/* Divider */}
          <div className="relative flex items-center my-12">
            <div className="flex-1 border-t border-[#e5e5e5]" />
            <span className="mx-4 text-[10px] font-semibold uppercase tracking-widest text-[#bbb]">
              Also Available
            </span>
            <div className="flex-1 border-t border-[#e5e5e5]" />
          </div>

          {/* Pre-Build */}
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-6">
            Pre-Build
          </p>

          <div className="bg-white rounded-2xl border border-[#e5e5e5] px-8 py-7"
            style={{ boxShadow: "0 4px 40px rgba(233,30,140,0.08), 0 1px 12px rgba(0,0,0,0.06)" }}>
            <p className="text-sm font-bold text-[#0a0a0a] mb-2">
              The MVP Sprint{" "}
              <span className="font-normal text-[#E91E8C]">· Custom</span>
            </p>
            <p className="text-[#666] text-sm leading-relaxed">
              You have a problem worth solving but no product yet. I'll help you define the problem, design the solution and build a working proof of concept using rapid prototyping — ready for real-world validation in weeks, not months.
            </p>
          </div>

          <div className="mt-6">
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 text-[#E91E8C] font-semibold px-6 py-3 rounded-lg text-sm border border-[#E91E8C]/40 hover:border-[#E91E8C] transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* Footer line */}
          <p className="mt-10 text-xs text-[#aaa] italic">
            Not ready for a full engagement? The frameworks I use with every client are available for $149.{" "}
            <Link to={createPageUrl("LaunchSystem")} className="text-[#E91E8C] hover:underline not-italic">
              →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}