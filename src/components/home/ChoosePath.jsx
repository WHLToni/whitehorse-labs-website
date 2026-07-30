import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { usePricing } from "../shared/usePricing";

const tiers = [
  { name: "The Diagnostic", price: "AUD $6K", duration: "2 weeks", description: "Market research, segmentation, ICP definition, competitive analysis and problem definition. Optional: customer interviews including hypothesis design and insight analysis.", output: "A clear picture of your market, your buyer and where you fit." },
  { name: "GTM Strategy", price: "AUD $12K", duration: "4 weeks", description: "Everything in The Diagnostic, plus positioning framework, messaging framework and brand foundations.", output: "You know who you're selling to, what you're saying and how you're showing up." },
  { name: "Launch Architecture", price: "AUD $20K", duration: "6 weeks", description: "Everything in GTM Strategy, plus sales enablement tools — pitch deck, competitive battlecards, talk tracks and persona cards — and a full launch plan.", output: "You're ready to go to market." },
  { name: "Pre-Exit Readiness", price: "Custom", duration: null, description: "Commercial systems, brand refresh, digital foundations and sales enablement built for acquisition readiness.", output: "Priced on scope." },
];

export default function ChoosePath() {
  const pricing = usePricing();
  return (
    <section className="ds-band ds-band--paper ds-grid-dark relative overflow-hidden" style={{ background: "#0e0e0e" }}>
      <div className="ds-wrap relative z-10">
        {/* Header */}
        <div className="mb-12">
          <span className="ds-eyebrow mb-4 block">The Work</span>
          <h2 className="ds-display text-[clamp(28px,4vw,44px)] text-white mt-4 mb-5">
            Choose Your Starting Point
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-2xl">
            You've built something and now you need to commercialise it. I deliver fixed scope, fixed price GTM expertise delivered in weeks.
          </p>
        </div>

        {/* Stack label */}
        <p className="ds-eyebrow text-white mb-6 block">The Commercialisation Stack</p>

        {/* Tiers */}
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`px-7 py-6 flex flex-col sm:flex-row sm:gap-8 gap-3 ${i < tiers.length - 1 ? "border-b border-white/[0.07]" : ""}`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-bold text-white mb-1.5">{tier.name}</p>
                {tier.output && <p className="text-sm mt-2 leading-relaxed text-white">↳ {tier.output}</p>}
                <Link to={createPageUrl("Services")} className="ds-textlink inline-flex items-center gap-1 text-xs mt-2.5" style={{ color: "#d4657a" }}>
                  See details →
                </Link>
              </div>
              <div className="sm:text-right shrink-0 sm:pt-0.5">
                <p className="text-white font-semibold text-sm">From {tier.price}</p>
                {tier.duration && <p className="text-white/30 text-xs mt-0.5">{tier.duration}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bootstrap budget nudge */}
        <div className="mt-4 px-7 py-4 border border-white/10 rounded-xl flex items-center justify-between gap-4 flex-wrap">
          <p className="text-white/40 text-sm italic">On a bootstrap budget?</p>
          <a href="https://icp-builder-tool.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-4 py-1.5 rounded-lg transition-colors">
            Get the Free ICP Framework →
          </a>
        </div>

        <div className="mt-7">
          <Link to={createPageUrl("Contact")} className="ds-btn ds-btn-solid inline-flex items-center gap-2">
            Book a Call →
          </Link>
        </div>

        {/* Divider */}
        <div className="relative flex items-center my-10">
          <div className="flex-1 border-t border-white/[0.08]" />
          <span className="mx-4 ds-eyebrow text-white">Also Available</span>
          <div className="flex-1 border-t border-white/[0.08]" />
        </div>

        <p className="ds-eyebrow text-white mb-6 block">Pre-Build</p>

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
              You have a problem worth solving but no product yet. I'll help you define the problem, design the solution and build a working proof of concept using an AI-augmented toolstack, compressing months of build time into weeks — and ready for real-world validation faster than a traditional development approach.
            </p>
            <p className="text-xs text-white/40 mt-3">Current toolstack: Base44, Replit, Figma, Relume, Notion (for documentation)</p>
          </div>
          <div className="sm:text-right shrink-0 sm:pt-0.5">
            <p className="text-white font-semibold text-sm">From AUD $3,000</p>
            <p className="text-white/30 text-xs mt-0.5">1 week</p>
          </div>
        </motion.div>

        <div className="mt-7">
          <Link to={createPageUrl("Contact")} className="ds-btn ds-btn-outline inline-flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,.25)", color: "#fff" }}>
            Book a Call →
          </Link>
        </div>

        <div className="relative flex items-center my-10">
          <div className="flex-1 border-t border-white/[0.08]" />
        </div>

        <p className="ds-eyebrow text-white mb-6 block">Fractional Leadership</p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="border border-white/10 rounded-2xl px-7 py-6 flex flex-col sm:flex-row sm:gap-8 gap-3"
        >
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-bold text-white mb-1.5">Fractional GTM Leadership</p>
            <p className="text-white/50 text-sm leading-relaxed">
              For founders and teams who need senior GTM leadership on an ongoing basis — not a one-off engagement. I embed as a fractional head of product marketing or GTM, working across strategy and execution on a part-time basis. Engagements are bespoke and availability is limited — get in touch to discuss whether this is the right fit.
            </p>
          </div>
          <div className="sm:text-right shrink-0 sm:pt-0.5">
            <p className="text-white font-semibold text-sm">Ongoing</p>
            <p className="text-white/30 text-xs mt-0.5">Availability dependent</p>
          </div>
        </motion.div>

        <div className="mt-7">
          <Link to={createPageUrl("Contact")} className="ds-btn ds-btn-outline inline-flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,.25)", color: "#fff" }}>
            Book a Call →
          </Link>
        </div>

        <p className="mt-10 text-sm text-white italic">
          Not ready for a full engagement?{" "}
          <Link to={createPageUrl("BuyTheFrameworks")} className="text-white/40 hover:text-[var(--accent)] transition-colors not-italic">
            The Builder Suite{pricing ? ` — from ${pricing.from}` : ""} →
          </Link>
        </p>
      </div>
    </section>
  );
}