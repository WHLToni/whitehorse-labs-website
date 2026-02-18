import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { ArrowRight, Download, Check, X, ShoppingCart, Zap, Code } from "lucide-react";
import FAQItem from "../components/shared/FAQItem";

const portal1 = [
  "Market research & sizing (TAM, SAM, SOM, trend analysis, regulatory checklists)",
  "Segmentation & targeting (models, prioritisation matrices, viability analysis)",
  "ICP definition (frameworks, interview guides, synthesis templates)",
  "Competitive analysis (landscape mapping, feature comparison, differentiation tools)",
  "Positioning & messaging (frameworks, architecture, value proposition builder)",
  "Brand strategy (mission, vision, values, personality, tone, asset library)",
  "Launch planning (GTM frameworks, readiness checklists, channel strategy)",
];

const portal2 = [
  "Technical maps (architecture docs, feature dependencies, tech stack decisions)",
  "Brand kit (design systems, component libraries, style guidelines)",
  "Engineering standards (code quality, documentation, version control)",
  "Feature research (user stories, prioritisation, requirements docs)",
  "Development logs (session tracking, bug logs, decision records)",
  "Testing & QA (test libraries, execution logs, bug tracking)",
  "Session management (context for AI coding sessions, prompt examples)",
];

const faqs = [
  { q: "Is this a Notion template?", a: "Yes. Two Notion portals you can duplicate into your workspace." },
  { q: "Can I use this if I'm not technical?", a: "Yes. The GTM portal is for non-technical founders and marketers. The Vibe Coding portal is for builders." },
  { q: "What if I need help?", a: "The system is self-guided. If you want execution, upgrade to a productised service." },
  { q: "Refunds?", a: "No refunds. Digital product with instant access. Download the free ICP Framework first if you're unsure." },
];

export default function LaunchSystem() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/2 w-[600px] h-[400px] rounded-full bg-[#E91E8C]/8 blur-[150px]" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] rounded-full bg-[#00C4E0]/6 blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
              Product
            </p>
            <h1 className="font-['Space_Grotesk'] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The Launch System:{" "}
              <span className="gradient-text-simple">From MVP to Market-Ready</span>
            </h1>
            <p className="text-lg text-[#999] leading-relaxed mb-10">
              The same AI-accelerated commercialisation framework I use with $12K clients — 
              now available as a ready-to-use system for $149.
            </p>
            <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-base">
              <ShoppingCart className="w-5 h-5" />
              Buy Now — $149
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
              The Problem
            </p>
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold tracking-tight mb-6">
              You've built an MVP. Now what?
            </h2>
            <p className="text-[#999] text-sm leading-relaxed mb-6">
              You've built an MVP. It works. You've shown it to a few people and they like it. 
              Now you're stuck:
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Who is this for?",
                "How do I position it against competitors?",
                "What's my GTM strategy?",
                "How do I price it?",
                "What do I say in my pitch deck?",
              ].map((q, i) => (
                <div key={i} className="text-white/70 text-sm pl-4 border-l-2 border-[#E91E8C]/30">
                  {q}
                </div>
              ))}
            </div>
            <p className="text-[#999] text-sm leading-relaxed">
              You could wing it and burn cash figuring it out. You could hire a consultant if 
              you had $15K. Or you could try ChatGPT and get generic advice with no structure. 
              The Launch System gives you structure — the same frameworks I've used to launch 
              20+ products over 20 years.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            What You Get
          </p>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold tracking-tight mb-16">
            Two Complete Portals
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Portal 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl bg-[#0d0d0d] border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#E91E8C]/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#E91E8C]" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold">Portal 1: GTM Foundations</h3>
              </div>
              <div className="space-y-3">
                {portal1.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-[#E91E8C] flex-shrink-0" />
                    <span className="text-[#999] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Portal 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-[#0d0d0d] border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#00C4E0]/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-[#00C4E0]" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold">Portal 2: Vibe Coding System</h3>
              </div>
              <div className="space-y-3">
                {portal2.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-[#00C4E0] flex-shrink-0" />
                    <span className="text-[#999] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who + How */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
                Who This Is For
              </p>
              <div className="space-y-3 text-[#999] text-sm leading-relaxed">
                <p>Vibe coders who've built an MVP and need commercialisation frameworks.</p>
                <p>Bootstrap founders who can't afford a $12K consultant.</p>
                <p>Funded startups (pre-seed, seed) who want to DIY their GTM.</p>
                <p>Product managers building commercial rigour from scratch.</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
                How It Works
              </p>
              <div className="space-y-4">
                {[
                  "Purchase. Instant access to both portals (Notion-based, easy to duplicate).",
                  "Populate the frameworks, fill in the templates, do the research.",
                  "Launch with positioning, messaging, and strategy.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="gradient-text-simple font-['Space_Grotesk'] text-lg font-bold flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[#999] text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#666] text-xs mt-6">
                If you complete the system and want execution later, upgrade to a productised 
                service and get $149 credit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You're NOT Getting */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#666] mb-4">
            Important
          </p>
          <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold tracking-tight mb-8">
            What You're NOT Getting
          </h2>
          <p className="text-[#999] text-sm mb-6">
            This is a framework, not a done-for-you service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-white text-sm font-medium mb-2">You're getting:</p>
              {["The same system I use with clients", "Templates, frameworks, checklists", "AI prompts"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E91E8C]" />
                  <span className="text-[#999] text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-white text-sm font-medium mb-2">You're NOT getting:</p>
              {["Me doing the work", "1-on-1 coaching", "Custom research"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <X className="w-4 h-4 text-[#666]" />
                  <span className="text-[#666] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[#666] text-xs mt-6">
            If you want done-for-you execution:{" "}
            <Link to={createPageUrl("Services")} className="text-[#E91E8C] hover:underline">
              View Services & Pricing
            </Link>
          </p>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div className="gradient-text font-['Space_Grotesk'] text-6xl md:text-7xl font-bold mb-4">
            $149
          </div>
          <p className="text-[#999] text-base mb-2">One-Time Payment. Lifetime Access.</p>
          <p className="text-[#666] text-sm mb-10">
            No subscription. No upsells. Pay once, get instant access, use it forever. 
            Lifetime updates included.
          </p>
          <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-lg text-base">
            <ShoppingCart className="w-5 h-5" />
            Buy Now — $149
          </button>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            FAQs
          </p>
          <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div>
            {faqs.map((f, i) => (
              <FAQItem key={i} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Not Sure */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Still Not Sure?
          </h2>
          <p className="text-[#999] text-base mb-8">
            Download the free ICP Framework — one of the core tools inside the Launch System.
          </p>
          <Link
            to={createPageUrl("ICPFramework")}
            className="btn-outline-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm"
          >
            <Download className="w-4 h-4" />
            Download Free ICP Framework
          </Link>
        </div>
      </section>
    </div>
  );
}