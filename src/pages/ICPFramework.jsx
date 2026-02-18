import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Download, Check, ArrowRight, ShoppingCart } from "lucide-react";

const includes = [
  "ICP definition worksheet (firmographic, demographic, psychographic, behavioural criteria)",
  "Interview question bank (50+ questions across discovery, pain points, buying behaviour, decision-making)",
  "Interview synthesis template (how to extract patterns and insights from 5-10 interviews)",
  "ICP validation checklist (test if your ICP is real or just hypothesis)",
];

const whoFor = [
  "Founders who've built an MVP and need to figure out who to sell it to",
  "Product managers defining target segments",
  "Marketers sharpening positioning",
  "Vibe coders who've never done customer research",
];

const steps = [
  { num: "01", title: "Download the framework", desc: "Instant access." },
  { num: "02", title: "Use it", desc: "Run 5-10 ICP interviews, synthesise insights, define your Ideal Customer." },
  { num: "03", title: "Get follow-up insights", desc: "Emails with insights on product commercialisation." },
  { num: "04", title: "Upgrade (optional)", desc: "Get the full Launch System ($149) for complete commercialisation frameworks." },
];

export default function ICPFramework() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-[500px] h-[400px] rounded-full bg-[#00C4E0]/5 blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00C4E0] mb-4">Free Resource</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#0a0a0a]">
              The ICP Interview{" "}
              <span className="gradient-text-simple">Framework</span>
            </h1>
            <p className="text-lg text-[#666] leading-relaxed mb-10">
              Define, research, and validate your Ideal Customer Profile.
              Know exactly who to build and sell for.
            </p>
            <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-base">
              <Download className="w-5 h-5" />Download the Free Framework
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[#0a0a0a]">Early-stage founders try to sell to everyone.</h2>
            <div className="space-y-3 mb-8">
              {['"Our product is for small businesses."', '"We\'re targeting millennials."', '"Anyone who needs X can use this."'].map((q, i) => (
                <div key={i} className="text-[#aaa] text-sm italic pl-4 border-l-2 border-[#e5e5e5]">{q}</div>
              ))}
            </div>
            <p className="text-[#0a0a0a] text-sm font-semibold mb-4">That's not an ICP. That's a guess.</p>
            <p className="text-[#666] text-sm leading-relaxed">
              Here's what happens: your messaging is generic, your marketing dollars get wasted,
              your product roadmap gets messy, your sales team doesn't know who to call. The fix:
              a real ICP — specific, research-backed, validated through interviews.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">What You Get</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {includes.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-6 rounded-xl bg-[#f7f7f8] border border-[#e5e5e5]">
                <Check className="w-5 h-5 mt-0.5 text-[#E91E8C] flex-shrink-0" />
                <span className="text-[#555] text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-[#aaa] text-xs mt-4">Format: Notion template.</p>
        </div>
      </section>

      {/* Why + Who */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">Why This Works</p>
              <p className="text-[#666] text-sm leading-relaxed">
                This framework is built on 20 years of product and marketing launches across regulated industries. I've used it to define ICPs for healthtech startups entering the US, fintech products targeting SMBs in APAC, SaaS tools for enterprise procurement, and veterinary platforms for multi-location clinics. It's rigorous, structured, repeatable.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">Who This Is For</p>
              <div className="space-y-3">
                {whoFor.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E91E8C] mt-2 flex-shrink-0" />
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">What Happens Next</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {steps.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-[#f7f7f8] border border-[#e5e5e5]">
                <span className="gradient-text-simple text-2xl font-bold">{s.num}</span>
                <h3 className="text-base font-bold mt-3 mb-2 text-[#0a0a0a]">{s.title}</h3>
                <p className="text-[#666] text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Ready to Stop Guessing?</h2>
          <p className="text-[#999] text-base mb-10">Get the ICP Interview Framework and start building your customer profile today.</p>
          <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-lg text-base mb-6">
            <Download className="w-5 h-5" />Download Now
          </button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to={createPageUrl("LaunchSystem")} className="text-[#999] hover:text-white text-sm transition-colors inline-flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />Or get the full Launch System — $149
            </Link>
            <Link to={createPageUrl("Services")} className="text-[#999] hover:text-white text-sm transition-colors inline-flex items-center gap-2">
              View Services & Pricing<ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}