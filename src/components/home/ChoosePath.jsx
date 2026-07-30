import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { usePricing } from "../shared/usePricing";

const tiers = [
  { name: "The Diagnostic", price: "AUD $6K", duration: "2 weeks", description: "Market research, segmentation, ICP definition, competitive analysis and problem definition. Optional: customer interviews including hypothesis design and insight analysis.", output: "A clear picture of your market, your buyer and where you fit." },
  { name: "GTM Strategy", price: "AUD $12K", duration: "4 weeks", description: "Everything in The Diagnostic, plus positioning framework, messaging framework and brand foundations.", output: "You know who you're selling to, what you're saying and how you're showing up." },
  { name: "Launch Architecture", price: "AUD $20K", duration: "6 weeks", description: "Everything in GTM Strategy, plus sales enablement tools — pitch deck, competitive battlecards, talk tracks and persona cards — and a full launch plan.", output: "You're ready to go to market.", recommended: true },
  { name: "Pre-Exit Readiness", price: "Custom", duration: null, description: "Commercial systems, brand refresh, digital foundations and sales enablement built for acquisition readiness.", output: "Priced on scope." },
];

export default function ChoosePath() {
  const pricing = usePricing();
  return (
    <section className="ds-band bg-[#E7F0E3]">
      <div className="ds-wrap relative z-10">
        {/* Header */}
        <div className="mb-12">
          <span className="ds-eyebrow mb-4 block">The Work</span>
          <h2 className="ds-display text-[clamp(28px,4vw,44px)] text-[var(--ink)] mt-4 mb-5">
            Choose Your Starting Point
          </h2>
          <p className="text-[#3a4649] text-base leading-relaxed max-w-2xl">
            You've built something and now you need to commercialise it. I deliver fixed scope, fixed price GTM expertise delivered in weeks.
          </p>
        </div>

        {/* Stack label */}
        <p className="ds-eyebrow grey mb-6 block">The Commercialisation Stack</p>

        {/* Tiers */}
        <div className="space-y-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`bg-white border rounded-md px-7 py-6 flex flex-col sm:flex-row sm:gap-8 gap-3 ${tier.recommended ? "border-[#C13B54]" : "border-[var(--line)]"}`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-bold text-[var(--ink)] mb-1.5">{tier.name}</p>
                {tier.output && <p className="text-sm mt-2 leading-relaxed text-[#3a4649]">{tier.output}</p>}
                <Link to={createPageUrl("Services")} className="ds-textlink inline-flex items-center gap-1 text-xs mt-2.5">
                  See details
                </Link>
              </div>
              <div className="sm:text-right shrink-0 sm:pt-0.5">
                <p className="font-bold text-[var(--ink)] text-sm">From {tier.price}</p>
                {tier.duration && <p className="text-[var(--muted)] text-xs mt-0.5">{tier.duration}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bootstrap budget nudge */}
        <div className="mt-4 px-7 py-4 border border-[var(--line)] bg-white rounded-md flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[var(--muted)] text-sm italic">On a bootstrap budget?</p>
          <a href="https://icp-builder-tool.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[var(--ink)] hover:text-[#C13B54] border border-[var(--line)] hover:border-[#C13B54] px-4 py-1.5 rounded-md transition-colors">
            Get the Free ICP Framework
          </a>
        </div>

        <div className="mt-7">
          <Link to={createPageUrl("Contact")} className="ds-btn ds-btn-solid inline-flex items-center gap-2">
            Book a Call
          </Link>
        </div>

        {/* Divider */}
        <div className="relative flex items-center my-10">
          <div className="flex-1 border-t border-[var(--line)]" />
          <span className="mx-4 ds-eyebrow grey">Also Available</span>
          <div className="flex-1 border-t border-[var(--line)]" />
        </div>

        <p className="ds-eyebrow grey mb-6 block">Pre-Build</p>

        {/* MVP Sprint */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-white border border-[var(--line)] rounded-md px-7 py-6 flex flex-col sm:flex-row sm:gap-8 gap-3"
        >
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-bold text-[var(--ink)] mb-1.5">The MVP Sprint <span className="text-[var(--muted)] text-xs font-normal">(Tech Products Only)</span></p>
            <p className="text-[#3a4649] text-sm leading-relaxed">
              You have a problem worth solving but no product yet. I'll help you define the problem, design the solution and build a working proof of concept using an AI-augmented toolstack, compressing months of build time into weeks — and ready for real-world validation faster than a traditional development approach.
            </p>
            <p className="text-xs text-[var(--muted)] mt-3">Current toolstack: Base44, Replit, Figma, Relume, Notion (for documentation)</p>
          </div>
          <div className="sm:text-right shrink-0 sm:pt-0.5">
            <p className="font-bold text-[var(--ink)] text-sm">From AUD $3,000</p>
            <p className="text-[var(--muted)] text-xs mt-0.5">1 week</p>
          </div>
        </motion.div>

        <div className="mt-7">
          <Link to={createPageUrl("Contact")} className="ds-btn ds-btn-solid inline-flex items-center gap-2">
            Book a Call
          </Link>
        </div>

        <div className="relative flex items-center my-10">
          <div className="flex-1 border-t border-[var(--line)]" />
        </div>

        <p className="ds-eyebrow grey mb-6 block">Fractional Leadership</p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-white border border-[var(--line)] rounded-md px-7 py-6 flex flex-col sm:flex-row sm:gap-8 gap-3"
        >
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-bold text-[var(--ink)] mb-1.5">Fractional GTM Leadership</p>
            <p className="text-[#3a4649] text-sm leading-relaxed">
              For founders and teams who need senior GTM leadership on an ongoing basis — not a one-off engagement. I embed as a fractional head of product marketing or GTM, working across strategy and execution on a part-time basis. Engagements are bespoke and availability is limited — get in touch to discuss whether this is the right fit.
            </p>
          </div>
          <div className="sm:text-right shrink-0 sm:pt-0.5">
            <p className="font-bold text-[var(--ink)] text-sm">Ongoing</p>
            <p className="text-[var(--muted)] text-xs mt-0.5">Availability dependent</p>
          </div>
        </motion.div>

        <div className="mt-7">
          <Link to={createPageUrl("Contact")} className="ds-btn ds-btn-solid inline-flex items-center gap-2">
            Book a Call
          </Link>
        </div>

        <p className="mt-10 text-sm text-[var(--muted)] italic">
          Not ready for a full engagement?{" "}
          <Link to={createPageUrl("BuyTheFrameworks")} className="ds-textlink not-italic">
            The Builder Suite{pricing ? ` — from ${pricing.from}` : ""}
          </Link>
        </p>
      </div>
    </section>
  );
}