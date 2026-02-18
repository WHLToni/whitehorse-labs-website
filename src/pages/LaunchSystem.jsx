import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { ArrowRight, Download, Check, X, ShoppingCart, Zap, Code, Package } from "lucide-react";
import FAQItem from "../components/shared/FAQItem";

const portal1Items = [
  "Market research & sizing templates",
  "Segmentation & targeting model",
  "Nailing your Ideal Customer Profile—ICP template, hypotheses and assumptions template and guide, & interview guide",
  "Competitive analysis matrix",
  "Positioning & messaging architecture",
  "Brand strategy foundations and a guide to essential brand elements",
  "Launch planning frameworks",
];

const portal2Items = [
  "Technical architecture templates",
  "Engineering standards & code quality guidelines",
  "Documentation frameworks",
  "Testing & QA protocols",
  "Session management & context tracking",
  "Debugging & refactoring workflows",
  "Security best practices",
];

const problemQuestions = [
  "Who is this actually for?",
  "How do I validate before wasting months building the wrong thing?",
  "How do I vibe code an MVP without creating a mess I'll regret later?",
  "How do I position this against competitors?",
  "What's my GTM strategy?",
  "How do I launch without burning cash on guesswork?",
];

const faqs = [
  { q: "Are these Notion templates?", a: "Yes. Two separate Notion portals you can duplicate into your workspace." },
  { q: "Can I use these if I'm not technical?", a: "GTM Foundations is designed for non-technical founders. Vibe Coding System is for builders (but you don't need to be a professional developer)." },
  { q: "What if I need help?", a: "The systems are self-guided. If you want execution support, upgrade to a productised service." },
  { q: "Do you offer both as a bundle?", a: "Yes. $249 for both (save $49)." },
  { q: "Refunds?", a: "No refunds. Digital products with instant access. Download the free ICP Framework first if you're unsure of the quality." },
];

const whoFor1 = [
  "You have an idea but haven't validated it yet",
  "You built something but don't know who it's for or how to position it",
  "You're a vibe coder who can build but can't commercialise",
  "You need professional GTM frameworks without hiring a $12K consultant",
];

const whoFor2 = [
  "You're about to vibe code your first MVP and want to do it right",
  "You've vibe-coded before and it turned into spaghetti code",
  "You want to build fast but also build clean",
  "You plan to hand off to a dev team eventually and need proper foundations",
];

const whoForBoth = [
  "You're taking a product idea from zero to launch",
  "You want to validate, build, and commercialise properly",
  "You're a non-technical founder building your own MVP",
];

const steps = [
  { num: "01", title: "Purchase", desc: "Instant access to Notion portal(s)." },
  { num: "02", title: "Duplicate", desc: "Copy into your own Notion workspace." },
  { num: "03", title: "Follow the frameworks", desc: "Work through the templates and guides." },
  { num: "04", title: "Build and launch", desc: "Use the systems to validate, build, and go to market." },
];

export default function LaunchSystem() {
  return (
    <div>
      {/* Hero - dark */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 w-[600px] h-[400px] rounded-full bg-[#E91E8C]/8 blur-[150px]" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] rounded-full bg-[#00C4E0]/6 blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">Product</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              The Launch System:{" "}
              <span className="gradient-text-simple">Two DIY Portals to Build and Launch Your Product</span>
            </h1>
            <p className="text-lg text-[#999] leading-relaxed mb-10">
              The same frameworks I use with $15K clients—now available as ready-to-use systems for $149 each.
              Validate your idea, build it right, and launch strategically.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm">
                <Zap className="w-4 h-4" />Buy GTM Foundations — $149
              </button>
              <button className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm border border-white/20 hover:border-white/40 transition-colors">
                <Code className="w-4 h-4" />Buy Vibe Coding System — $149
              </button>
              <button className="inline-flex items-center gap-2 text-[#E91E8C] font-semibold px-6 py-3.5 rounded-lg text-sm border border-[#E91E8C]/40 hover:border-[#E91E8C] transition-colors">
                <Package className="w-4 h-4" />Bundle Both — $249
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[#0a0a0a]">You've got an idea. Maybe you've already built something. But now you're stuck:</h2>
            <div className="space-y-3 mb-8">
              {problemQuestions.map((q, i) => (
                <div key={i} className="text-[#555] text-sm pl-4 border-l-2 border-[#E91E8C]/30">{q}</div>
              ))}
            </div>
            <p className="text-[#666] text-sm leading-relaxed">
              You could wing it and learn the hard way. You could hire a consultant if you had $15K. Or you could buy the system I've used to launch 20+ products over 20 years.
            </p>
          </div>
        </div>
      </section>

      {/* The Systems */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">The Systems</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-[#0a0a0a]">Buy Each for $149 or Bundle for $249</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Portal 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl bg-white border border-[#e5e5e5] flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#E91E8C]/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-[#E91E8C]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a0a0a]">GTM Foundations Package</h3>
                  <span className="text-[#E91E8C] font-semibold text-sm">$149</span>
                </div>
              </div>
              <p className="text-[#666] text-sm leading-relaxed mb-2">
                The commercialisation framework I use as the foundation of my work with $15K clients—available as a DIY portal.
              </p>
              <p className="text-[#888] text-xs mb-6">
                <span className="font-semibold text-[#555]">For:</span> Founders validating an idea before building, or founders who built first and need commercial foundations now.
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-3">What's included</p>
              <div className="space-y-2.5 mb-6 flex-1">
                {portal1Items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-[#E91E8C] flex-shrink-0" />
                    <span className="text-[#666] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#aaa] text-xs mb-6">Format: Notion portal, duplicate into your workspace.</p>
              <button className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm w-full">
                <ShoppingCart className="w-4 h-4" />Buy GTM Foundations — $149
              </button>
            </motion.div>

            {/* Portal 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-white border border-[#e5e5e5] flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#00C4E0]/10 flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-[#00C4E0]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a0a0a]">Vibe Coding System</h3>
                  <span className="text-[#00C4E0] font-semibold text-sm">$149</span>
                </div>
              </div>
              <p className="text-[#666] text-sm leading-relaxed mb-2">
                How to build a clean, scalable prototype or MVP without the usual vibe coding pitfalls—spaghetti code, security holes, zero documentation.
              </p>
              <p className="text-[#666] text-sm leading-relaxed mb-2">
                This isn't a heavy enterprise-grade engineering setup—it's a lean system that I used myself to get my vibe-coded application built in a sustainable way, and ready to hand over to a team of professional developers at the next stage of growth.
              </p>
              <p className="text-[#888] text-xs mb-6">
                <span className="font-semibold text-[#555]">For:</span> Founders with a validated idea who want to vibe code their MVP properly from day one.
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-3">What's included</p>
              <div className="space-y-2.5 mb-6 flex-1">
                {portal2Items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-[#00C4E0] flex-shrink-0" />
                    <span className="text-[#666] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#aaa] text-xs mb-6">Format: Notion portal, duplicate into your workspace.</p>
              <button className="inline-flex items-center justify-center gap-2 text-[#0a0a0a] font-semibold px-6 py-3 rounded-lg text-sm w-full border-2 border-[#00C4E0]/40 hover:border-[#00C4E0] transition-colors">
                <ShoppingCart className="w-4 h-4" />Buy Vibe Coding System — $149
              </button>
            </motion.div>
          </div>

          {/* Bundle */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-8 md:p-10 rounded-2xl bg-[#0a0a0a] border border-transparent flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-[#E91E8C]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Bundle Both <span className="text-[#E91E8C]">$249</span> <span className="text-[#666] text-sm font-normal line-through mr-1">$298</span><span className="text-xs bg-[#E91E8C]/20 text-[#E91E8C] px-2 py-0.5 rounded-full font-semibold">Save $49</span></h3>
                <p className="text-[#999] text-sm mt-1">Get the complete system—validate your idea, build it right, and launch strategically.</p>
              </div>
            </div>
            <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-lg text-sm flex-shrink-0">
              <ShoppingCart className="w-4 h-4" />Buy Complete Bundle — $249
            </button>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">Who This Is For</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-[#0a0a0a]">Find Your Fit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-[#E91E8C]" />
                <h3 className="text-base font-bold text-[#0a0a0a]">GTM Foundations is for you if:</h3>
              </div>
              <div className="space-y-3">
                {whoFor1.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E91E8C] mt-1.5 flex-shrink-0" />
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-4 h-4 text-[#00C4E0]" />
                <h3 className="text-base font-bold text-[#0a0a0a]">Vibe Coding System is for you if:</h3>
              </div>
              <div className="space-y-3">
                {whoFor2.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C4E0] mt-1.5 flex-shrink-0" />
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-4 h-4 text-[#7B5FB5]" />
                <h3 className="text-base font-bold text-[#0a0a0a]">Both systems together if:</h3>
              </div>
              <div className="space-y-3">
                {whoForBoth.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7B5FB5] mt-1.5 flex-shrink-0" />
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-[#0a0a0a]">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-[#e5e5e5]">
                <span className="gradient-text-simple text-3xl font-bold">{s.num}</span>
                <h3 className="text-base font-bold mt-4 mb-2 text-[#0a0a0a]">{s.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-[#aaa] text-sm mt-8 max-w-xl">
            If you complete the system and want professional execution later, upgrade to a productised service and get credit for what you've already paid.
          </p>
        </div>
      </section>

      {/* What You're NOT Getting */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-4">Important</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#0a0a0a]">What You're NOT Getting</h2>
          <p className="text-[#666] text-sm mb-8">These are frameworks, not done-for-you services.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-[#0a0a0a] text-sm font-semibold mb-2">You're getting:</p>
              {["The same systems I use with clients", "Templates, frameworks, checklists, guides", "Years of trial-and-error condensed into proven processes"].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#E91E8C] flex-shrink-0 mt-0.5" />
                  <span className="text-[#555] text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-[#0a0a0a] text-sm font-semibold mb-2">You're NOT getting:</p>
              {["Me doing the work for you", "1-on-1 coaching or strategy calls", "Custom research or execution"].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <X className="w-4 h-4 text-[#aaa] flex-shrink-0 mt-0.5" />
                  <span className="text-[#aaa] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[#aaa] text-xs mt-8">If you want done-for-you execution:{" "}
            <Link to={createPageUrl("Services")} className="text-[#E91E8C] hover:underline">View Services & Pricing</Link>
          </p>
        </div>
      </section>

      {/* Pricing CTA - dark */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-white">Simple, One-Time Pricing</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 text-sm">
            <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-[#999] mb-1">GTM Foundations</p>
              <p className="text-white font-bold text-2xl">$149</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-[#999] mb-1">Vibe Coding System</p>
              <p className="text-white font-bold text-2xl">$149</p>
            </div>
            <div className="bg-[#E91E8C]/10 border border-[#E91E8C]/30 rounded-xl px-6 py-4 text-center">
              <p className="text-[#E91E8C] mb-1">Bundle Both <span className="text-xs">(save $49)</span></p>
              <p className="text-white font-bold text-2xl">$249</p>
            </div>
          </div>
          <p className="text-[#666] text-sm mb-10">One-time payment. Lifetime access. No subscription. Lifetime updates included.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm">
              <Zap className="w-4 h-4" />Buy GTM Foundations
            </button>
            <button className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm border border-white/20 hover:border-white/40 transition-colors">
              <Code className="w-4 h-4" />Buy Vibe Coding System
            </button>
            <button className="inline-flex items-center gap-2 text-[#E91E8C] font-semibold px-6 py-3.5 rounded-lg text-sm border border-[#E91E8C]/40 hover:border-[#E91E8C] transition-colors">
              <Package className="w-4 h-4" />Bundle Both
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">FAQs</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-[#0a0a0a]">Frequently Asked Questions</h2>
          {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
        </div>
      </section>

      {/* Still Not Sure */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#0a0a0a]">Still Not Sure?</h2>
          <p className="text-[#666] text-base mb-8">Download the free ICP Framework—one of the core tools inside the GTM Foundations package.</p>
          <Link to={createPageUrl("ICPFramework")} className="inline-flex items-center gap-2 text-[#0a0a0a] font-semibold px-8 py-4 rounded-lg text-sm border-2 border-[#e5e5e5] hover:border-[#E91E8C]/40 transition-colors">
            <Download className="w-4 h-4" />Download Free ICP Framework
          </Link>
        </div>
      </section>
    </div>
  );
}