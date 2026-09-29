import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";

const engagements = [
  {
    title: "Go-To-Market Planning & Commercial Expansion",
    meta: "4-Week Engagement · From AUD $12,000",
    description:
      "A dedicated 4-week engagement for technical teams preparing for an initial market launch, expanding into new commercial sectors, or repositioning an existing product for enterprise adoption.",
    bullets: [
      {
        label: "Customer & Market Validation",
        text: "Structured customer discovery to establish willingness-to-pay, buyer authority, and procurement pathways.",
      },
      {
        label: "Category Positioning & Value Proposition",
        text: "Articulating complex technical capabilities into clear commercial value for commercial buyers and technical evaluators.",
      },
      {
        label: "Commercial Models & Pricing Strategy",
        text: "Contract structures, licensing models, pilot agreements, and pricing tiers.",
      },
      {
        label: "Execution Roadmap",
        text: "A documented commercialization plan detailing sales motions, operational milestones, and timelines.",
      },
    ],
    cta: "Discuss an Engagement",
  },
  {
    title: "Interim Commercial Lead / Ongoing Advisory",
    meta: "Monthly Engagement · From AUD $6,000 / month",
    description:
      "Direct strategic oversight alongside technical founders, executive leadership, or the board.",
    bullets: [
      {
        label: "Commercial Governance",
        text: "Active steering of customer pilot progress, pipeline conversion, and go-to-market milestones.",
      },
      {
        label: "Roadmap & Market Alignment",
        text: "Ensuring engineering milestones directly support commercial adoption and enterprise customer requirements.",
      },
      {
        label: "Negotiation & Strategy Support",
        text: "Direct support in commercial partner discussions, pilot terms, and sales strategy.",
      },
    ],
    cta: "Explore Advisory",
  },
];

export default function ChoosePath() {
  return (
    <section id="engagement-models" className="ds-band bg-[#E7F0E3]">
      <div className="ds-wrap relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h2 className="ds-display text-[clamp(28px,4vw,44px)] text-[var(--ink)] mt-4 mb-5">
            Commercial Engagement Models
          </h2>
          <p className="text-[#3a4649] text-base leading-relaxed max-w-2xl">
            Direct advisory and commercial execution structured around business milestones, available as a focused project or embedded leadership.
          </p>
        </div>

        {/* Engagement cards */}
        <div className="space-y-6">
          {engagements.map((eng, i) => (
            <motion.div
              key={eng.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="bg-white border border-[var(--line)] rounded-md px-7 py-7"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8 gap-3 mb-5">
                <h3 className="text-lg font-bold text-[var(--ink)] max-w-2xl">{eng.title}</h3>
                <span className="inline-flex items-center whitespace-nowrap text-xs font-semibold text-[#C13B54] border border-[#C13B54]/30 bg-[#C13B54]/5 px-3 py-1.5 rounded-full">
                  {eng.meta}
                </span>
              </div>
              <p className="text-[#3a4649] text-sm leading-relaxed mb-6 max-w-3xl">
                {eng.description}
              </p>
              <ul className="space-y-3 mb-6">
                {eng.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-[3px] self-stretch rounded-full bg-[#C13B54]/50 flex-shrink-0 mt-1.5" />
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      <span className="font-semibold text-[var(--ink)]">{b.label}:</span>{" "}
                      {b.text}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                to={createPageUrl("Contact")}
                className="ds-btn ds-btn-outline inline-flex items-center gap-2"
              >
                {eng.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}