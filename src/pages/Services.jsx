import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { ArrowRight, Download, ShoppingCart } from "lucide-react";
import ServiceCard from "../components/shared/ServiceCard";

const services = [
  {
    title: "Foundation Sprint",
    price: "$6,000",
    duration: "2 Weeks",
    description: "Market segmentation, ICP definition, and competitive positioning. For teams that need commercial foundations before scaling.",
    deliverables: [
      "Market segmentation model with target prioritisation",
      "Ideal Customer Profile (ICP) definition — firmographic, behavioural, and psychographic criteria",
      "Competitive positioning analysis and landscape map",
      "Populated Launch System portal with your research",
      "Strategy document and presentation",
    ],
    bestFor: "Funded startups building commercial foundations, or pre-exit owners tightening positioning before a sale.",
    ctaLabel: "Book Foundation Sprint",
    accentColor: "#E91E8C",
  },
  {
    title: "GTM Blueprint",
    price: "$12,000",
    duration: "4 Weeks",
    description: "Complete go-to-market strategy — positioning, messaging, sales narrative, and channel recommendations.",
    deliverables: [
      "Everything in Foundation Sprint",
      "Positioning statement and messaging framework",
      "Value proposition architecture with proof points",
      "Sales narrative and talk tracks",
      "GTM strategy with channel recommendations",
      "Sales deck outline",
    ],
    bestFor: "Startups preparing for launch, scale-ups entering new markets, or innovation teams building internal alignment.",
    ctaLabel: "Book GTM Blueprint",
    accentColor: "#7B5FB5",
  },
  {
    title: "Launch Ready Package",
    price: "$20,000",
    duration: "6 Weeks",
    description: "Full GTM strategy plus execution assets — sales deck, hero marketing piece, brand direction.",
    deliverables: [
      "Everything in GTM Blueprint",
      "Flagship sales deck (designed, ready to present)",
      "One hero asset (whitepaper, case study, or landing page)",
      "Brand guide (voice, tone, visual direction)",
      "Launch execution plan",
    ],
    bestFor: "Funded startups preparing for a major launch, pre-exit owners modernising their brand, or corporate innovation units launching new products.",
    ctaLabel: "Book Launch Ready Package",
    accentColor: "#4BA4D8",
  },
  {
    title: "Pre-Exit Readiness",
    price: "Custom",
    duration: "8-12 Weeks",
    description: "Strategic audit, digitisation roadmap, GTM modernisation, and buyer-ready materials for business owners planning to sell.",
    deliverables: [
      "Exit readiness audit (product, GTM, operations, brand)",
      "Digitisation and AI integration roadmap",
      "GTM modernisation (positioning, messaging, sales materials)",
      "Buyer-facing materials (investment deck, executive summary, case studies)",
    ],
    bestFor: "Business owners planning to sell or step back in the next 3-5 years. Particularly valuable for owners who need to digitise, systemise, and strengthen the brand to increase valuation.",
    ctaLabel: "Book a Discovery Call",
    accentColor: "#00C4E0",
  },
];

const roles = [
  { title: "Consultant", desc: "Analyses and recommends, then exits. You're left to execute.", dark: false },
  { title: "Contractor", desc: "Executes against a brief. Rarely owns strategic direction.", dark: false },
  { title: "Fractional", desc: "Owns specific commercialisation decisions and outputs, end-to-end. Strategy and execution. A-player expertise at fractional cost.", dark: true },
];

const steps = [
  { num: "01", title: "Book Your Package", desc: "Choose your service, confirm scope." },
  { num: "02", title: "Kickoff", desc: "You get access to a Notion client portal with all frameworks and project tracking." },
  { num: "03", title: "Execution", desc: "Structured sprints with regular check-ins. No daily standups." },
  { num: "04", title: "Delivery", desc: "Final deliverables, populated portal, handoff plan." },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">Services & Pricing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl text-[#0a0a0a]">
              Fixed-Scope Commercialisation Services
            </h1>
            <p className="text-lg text-[#666] max-w-2xl leading-relaxed">
              No discovery phases that go nowhere. No hourly billing. Just commercial strategy work,
              delivered in weeks — not months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-24 md:pb-32 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-6 pt-12">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* How Fractional Differs */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">The Model</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">Why Work Fractionally?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`p-8 rounded-2xl border ${r.dark ? "bg-[#0a0a0a] border-transparent" : "bg-[#f7f7f8] border-[#e5e5e5]"}`}
              >
                <h3 className={`text-xl font-bold mb-3 ${r.dark ? "text-[#E91E8C]" : "text-[#888]"}`}>{r.title}</h3>
                <p className={`text-sm leading-relaxed ${r.dark ? "text-[#ccc]" : "text-[#666]"}`}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">Clear Process, No Surprises</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white border border-[#e5e5e5]"
              >
                <span className="gradient-text-simple text-3xl font-bold">{s.num}</span>
                <h3 className="text-lg font-bold mt-4 mb-2 text-[#0a0a0a]">{s.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-[#888] text-sm mt-8">
            Payment: 50% upfront, 50% on delivery.
          </p>
        </div>
      </section>

      {/* Not Ready CTA */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
            Not Ready to Commit?
          </h2>
          <p className="text-[#999] text-base mb-10 max-w-xl mx-auto">
            Start with the $149 Launch System — the same frameworks and portals I use with clients.
            DIY your commercialisation, then hire me later if you need execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={createPageUrl("LaunchSystem")} className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm">
              <ShoppingCart className="w-4 h-4" />
              Buy the Launch System
            </Link>
            <Link to={createPageUrl("ICPFramework")} className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm border border-white/20 hover:border-white/40 transition-colors">
              <Download className="w-4 h-4" />
              Download Free ICP Framework
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}