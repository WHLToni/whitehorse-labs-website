import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { ArrowRight, Download, ShoppingCart, Quote } from "lucide-react";

const testimonials = [
  "You turn complex information into compelling stories — customer materials, investor decks, internal enablement.",
  "You bring an exceptionally commercial lens to every conversation.",
  "How do you know so much? I would never have thought of that.",
  "A-player expertise.",
];

const credentials = [
  "MBA (Entrepreneurship & Innovation, UTS) + Strategy (Paris Graduate School of Management)",
  "20+ years across product management, product marketing, and sales",
  "Trained in the frameworks big consulting firms use: PESTEL, Porter's 5 Forces, JTBD, VRIO, pricing models, segmentation strategies",
  "International launches: APAC, US, Europe — navigating regulatory environments and multi-market GTM",
  "Two years of AI experimentation: figuring out how to partner with AI for research, analysis, and execution",
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">About</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#0a0a0a]">
              Product + Marketing + 20 Years ={" "}
              <span className="gradient-text-simple">A Rare Combination</span>
            </h1>
            <p className="text-lg text-[#666] leading-relaxed">
              I'm one of the few people who can work across both sides of the product spectrum —
              upstream product management and downstream product marketing. That combination, plus
              two decades of launches in regulated industries, is what makes this work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Backstory */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">The Backstory</p>
              <div className="space-y-4 text-[#666] text-sm leading-relaxed">
                <p>I've spent 20+ years launching complex products in environments where you can't just "move fast and break things" — healthtech, medtech, veterinary tech, fintech, construction tech, SaaS. Regulated industries where commercialisation requires compliance fluency, not just speed.</p>
                <p>By year two, teams in these industries realise product commercialisation isn't creative chaos. It needs the same rigour as finance or HR — frameworks, segmentation models, competitive analysis, positioning architecture, launch systems.</p>
                <p>The problem: product management and product marketing are rare skills. Rarer when combined. Add an MBA, 20 years of pattern recognition across regulated markets, and two years of AI experimentation — and you've got something that's hard to replicate.</p>
                <p className="text-[#0a0a0a] font-semibold">That's what Whitehorse Labs is: the intersection of product, marketing, AI, and decades of commercial discipline.</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">What Makes This Different</p>
              <div className="space-y-4 text-[#666] text-sm leading-relaxed">
                <p className="text-[#0a0a0a] font-semibold">I don't run workshops and hand you a deck. I bring systems.</p>
                <p>Over the past two years, I've built AI-accelerated frameworks for every stage of product commercialisation — market research, segmentation, competitive analysis, positioning, messaging, brand strategy, launch execution. These aren't theoretical. They're the same systems I've used to launch products for IDEXX (Innovation Award for Digital Pathology launch), Equifax (PPSR, Debtor IQ, Alerts across APAC), and multiple health-tech and SaaS startups.</p>
                <p>What used to take three months in a corporate environment now takes weeks because I've systematised it and use AI to accelerate research, synthesis, and asset creation.</p>
                <p className="text-[#0a0a0a]">You get the impact of a cross-functional team, delivered by one expert, at a fraction of the cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Experience */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">Operating Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">Seed → IPO</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stage: "Pre-revenue", desc: "Startups figuring out product-market fit" },
              { stage: "Series B Scale-ups", desc: "Entering new markets (Prospection — US launch)" },
              { stage: "Public Companies", desc: "Global brands (Procore IPO, Equifax, IDEXX Laboratories)" },
            ].map((item, i) => (
              <motion.div key={item.stage} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-[#f7f7f8] border border-[#e5e5e5]">
                <h3 className="text-lg font-bold mb-2 text-[#0a0a0a]">{item.stage}</h3>
                <p className="text-[#666] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-[#888] text-sm mt-8 max-w-xl">
            I've operated with multi-million dollar marketing budgets and near-zero budgets.
            I know how to move fast with limited resources, and how to scale when capital is available.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-8">Credentials</p>
          <div className="space-y-0">
            {credentials.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 py-5 border-b border-[#e5e5e5]">
                <div className="w-6 h-6 rounded-full bg-[#E91E8C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]" />
                </div>
                <p className="text-[#555] text-sm leading-relaxed">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="p-8 md:p-12 rounded-2xl border border-[#E91E8C]/20 bg-gradient-to-br from-[#E91E8C]/5 to-transparent">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">Recent Work</p>
            <p className="text-[#0a0a0a] text-lg md:text-xl leading-relaxed max-w-2xl">
              Took a small tech startup from "backyard vibes" to US soft-launch ready in under
              6 weeks. Complete rebrand, GTM strategy, sales deck, launch materials, regulatory
              review. They launched with positioning and assets that looked like a Series A company.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-[#0a0a0a]">Let's Work</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={createPageUrl("Services")} className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm">
              View Services & Pricing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to={createPageUrl("LaunchSystem")} className="inline-flex items-center gap-2 text-[#0a0a0a] font-semibold px-8 py-4 rounded-lg text-sm border-2 border-[#e5e5e5] hover:border-[#E91E8C]/40 transition-colors">
              <ShoppingCart className="w-4 h-4" />Buy Launch System — $149
            </Link>
          </div>
          <Link to={createPageUrl("ICPFramework")} className="inline-flex items-center gap-2 text-[#888] hover:text-[#0a0a0a] text-sm mt-6 transition-colors">
            <Download className="w-4 h-4" />Or download the Free ICP Framework
          </Link>
        </div>
      </section>
    </div>
  );
}