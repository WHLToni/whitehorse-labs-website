import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { usePricing } from "../shared/usePricing";

const tiers = [
  {
    name: "The Diagnostic",
    price: "$6K",
    duration: "2 weeks",
    description:
      "Market research, segmentation, ICP definition, competitive analysis and problem definition. Optional: customer interviews including hypothesis design and insight analysis.",
    output: "A clear picture of your market, your buyer and where you fit.",
  },
  {
    name: "GTM Strategy",
    price: "$12K",
    duration: "4 weeks",
    description:
      "Everything in The Diagnostic, plus positioning framework, messaging framework and brand foundations.",
    output: "You know who you're selling to, what you're saying and how you're showing up.",
  },
  {
    name: "Launch Architecture",
    price: "$20K",
    duration: "6 weeks",
    description:
      "Everything in GTM Strategy, plus sales enablement tools — pitch deck, competitive battlecards, talk tracks and persona cards — and a full launch plan.",
    output: "You're ready to go to market.",
  },
  {
    name: "Pre-Exit Readiness",
    price: "Custom",
    duration: null,
    description:
      "Commercial systems, brand refresh, digital foundations and sales enablement built for acquisition readiness.",
    output: "Priced on scope.",
  },
];

export default function ChoosePath() {
  const pricing = usePricing();
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "#111110",
      }}
    >
      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(233,30,140,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">
            The Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-5">
            Choose Your Starting Point
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-2xl">
            You've built something and now you need to commercialise it. I deliver fixed scope, fixed price GTM expertise delivered in weeks.
          </p>
        </div>

        {/* Stack label */}
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white mb-6">
          The Commercialisation Stack
        </p>

        {/* Tiers */}
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`px-7 py-6 flex flex-col sm:flex-row sm:gap-8 gap-3 ${
                i < tiers.length - 1 ? "border-b border-white/[0.07]" : ""
              }`}
            >
              {/* Left */}
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-bold text-white mb-1.5">{tier.name}</p>
                <p className="text-white/50 text-sm leading-relaxed">{tier.description}</p>
                {tier.output && (
                  <p className="text-xs mt-2 leading-relaxed" style={{ color: "#d44d6e" }}>
                    ↳ {tier.output}
                  </p>
                )}
              </div>
              {/* Right — price */}
              <div className="sm:text-right shrink-0 sm:pt-0.5">
                <p className="text-white font-semibold text-sm">From {tier.price}</p>
                {tier.duration && (
                  <p className="text-white/30 text-xs mt-0.5">{tier.duration}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Book a Call — primary */}
        <div className="mt-7">
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-2.5 rounded-lg text-sm"
            style={{
              background: "#e8195a",
              boxShadow: "0 4px 24px rgba(232,25,90,0.35)",
            }}
          >
            Book a Call →
          </Link>
        </div>

        {/* Divider */}
        <div className="relative flex items-center my-10">
          <div className="flex-1 border-t border-white/[0.08]" />
          <span className="mx-4 text-[10px] font-semibold uppercase tracking-widest text-white">
            Also Available
          </span>
          <div className="flex-1 border-t border-white/[0.08]" />
        </div>

        {/* Pre-Build label */}
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white mb-6">
          Pre-Build
        </p>

        {/* MVP Sprint */}
         <motion.div
           initial={{ opacity: 0, y: 14 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.45 }}
           className="border border-white/10 rounded-2xl px-7 py-6 flex flex-col sm:flex-row sm:gap-8 gap-3"
         >
           <div className="flex-1 min-w-0">
             <p className="text-[15px] font-bold text-white mb-1.5">The MVP Sprint <span className="text-[#999] text-xs font-normal">(Tech Products Only)</span></p>
             <p className="text-white/50 text-sm leading-relaxed">
               You have a problem worth solving but no product yet. I'll help you define the problem, design the solution and build a working proof of concept using AI-assisted rapid prototyping — ready for real-world validation in weeks, not months.
             </p>
             <p className="text-xs text-white/40 mt-3">
               Current toolstack: Base44, Replit, Figma, Relume, Notion (for documentation)
             </p>
           </div>
           <div className="sm:text-right shrink-0 sm:pt-0.5">
             <p className="text-white font-semibold text-sm">From $3,000</p>
             <p className="text-white/30 text-xs mt-0.5">1 week</p>
           </div>
         </motion.div>

        {/* Book a Call — secondary */}
        <div className="mt-7">
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-2.5 rounded-lg text-sm border border-white/25 hover:border-white/50 transition-colors"
          >
            Book a Call →
          </Link>
        </div>

        {/* Footer line */}
        <p className="mt-10 text-sm text-white italic">
          Not ready for a full engagement?{" "}
          <Link
            to={createPageUrl("GetTheFrameworks")}
            className="text-white/40 hover:text-[#e8195a] transition-colors not-italic"
          >
            Get the Frameworks{pricing ? ` — from ${pricing.from}` : ""} →
          </Link>
        </p>

      </div>
    </section>
  );
}