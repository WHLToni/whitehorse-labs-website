import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import FAQItem from "../components/shared/FAQItem";

const problemQuestions = [
  "Who is this product actually for?",
  "How do I validate my idea before wasting months building the wrong thing?",
  "How do I position this against competitors?",
  "What's my GTM strategy?",
  "How do I vibe code an MVP without creating a mess I'll regret later?",
  "How do I launch without burning cash on guesswork?",
];

const gtmItems = [
  "Market research and sizing templates",
  "Segmentation and targeting model",
  "Ideal Customer Profile (ICP) template — including hypotheses, assumptions and interview guide",
  "Competitive analysis matrix",
  "Positioning and messaging architecture",
  "Brand strategy foundations and essential brand elements guide",
  "Launch planning frameworks",
  "AI prompts throughout to guide your thinking",
];

const buildItems = [
  "Technical architecture templates",
  "Engineering standards and code quality guidelines",
  "Documentation frameworks",
  "Testing and QA protocols",
  "Session management and context tracking",
  "Debugging and refactoring workflows",
  "Security best practices",
  "AI prompts throughout to guide your build",
];

const whoForGTM = [
  "You have an idea but haven't validated it yet",
  "You built something but don't know who it's for or how to position it",
  "You need professional GTM frameworks without the $15K consultant price tag",
  "You want to do the commercial groundwork yourself before hiring for execution",
];

const whoForBuild = [
  "You're about to build your first MVP and want to do it right from day one",
  "You've vibe coded before and it turned into unmaintainable spaghetti",
  "You want to build fast but also build clean",
  "You plan to hand off to a development team and need proper foundations",
];

const whoForBoth = [
  "You're taking a product from idea to launch",
  "You want to validate, build and commercialise in one coherent system",
  "You're a non-technical founder building your own MVP",
];

const steps = [
  { num: "01", title: "Purchase", desc: "Instant access to your Notion portal — or both if you bundle." },
  { num: "02", title: "Duplicate", desc: "Copy the portal into your own Notion workspace in one click." },
  { num: "03", title: "Work through the frameworks", desc: "Each portal is self-guided with templates, frameworks, checklists and AI prompts to keep you moving." },
  { num: "04", title: "Build and launch", desc: "Use the systems to validate your idea, build your product and take it to market." },
];

const youAreGetting = [
  "The exact systems I use with clients",
  "Templates, frameworks, checklists and AI prompts",
  "20 years of trial and error condensed into proven processes",
  "Lifetime access and lifetime updates",
  "One-time payment, no subscription",
];

const youAreNotGetting = [
  "Me doing the work for you",
  "One-on-one coaching or strategy calls",
  "Custom research or execution",
];

const faqs = [
  {
    q: "Are these Notion templates?",
    a: "Yes — two separate Notion portals you can duplicate directly into your own workspace. No technical setup required.",
  },
  {
    q: "Can I use these if I'm not technical?",
    a: "The GTM Toolkit is designed for non-technical founders — no technical knowledge required. The Build Toolkit is designed for founders who are actively building, but you don't need to be a professional developer to use it.",
  },
  {
    q: "What if I need help?",
    a: "Both portals are self-guided with AI prompts to keep you moving. If you reach a point where you want professional execution rather than DIY, you can upgrade to a productised service and your toolkit purchase will be credited against the fee.",
  },
  {
    q: "Do you offer both as a bundle?",
    a: "Yes — $249 for both toolkits, saving you $49.",
  },
  {
    q: "Refunds?",
    a: "All sales are final. Because these are digital products with instant access, we don't offer refunds. If you have questions about whether these are right for you before purchasing, feel free to get in touch.",
  },
];

export default function LaunchSystem() {
  return (
    <div>

      {/* PAGE HEADER */}
      <section className="py-24 md:py-32 bg-[#f7f7f8] text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">DIY Toolkits</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#0a0a0a]">
              Access the frameworks I use with every client. $149.
            </h1>
            <p className="text-[#666] text-base leading-relaxed max-w-[600px] mx-auto">
              Two self-serve Notion portals — one for commercialising your product, one for building a solid MVP (or prototype) if you're using vibe coding tools. The same frameworks and models that I use with clients (and my own vibe-coded products), available without the price tag. These are blank templates and frameworks, with some detailed prompts ideally for Gemini or Claude.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[#0a0a0a]">Sound familiar?</h2>
            <div className="space-y-3 mb-8">
              {problemQuestions.map((q, i) => (
                <div key={i} className="pl-4 border-l-2 border-[#e8195a]/40 py-1 text-[#555] text-sm">
                  {q}
                </div>
              ))}
            </div>
            <p className="text-[#666] text-sm leading-relaxed">
              You could wing it and learn the hard way. You could hire a consultant if you had $15K. Or you could buy the systems I've used to launch 20+ products over 20 years.
            </p>
          </div>
        </div>
      </section>

      {/* THE TOOLKITS */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">The Toolkits</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-[#0a0a0a]">Two products. Buy one or both.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* GTM Toolkit */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8 flex flex-col">
              <div className="mb-5">
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-1">The GTM Toolkit</h3>
                <p className="text-[#e8195a] font-bold text-2xl">$149</p>
              </div>
              <p className="text-[#888] text-sm italic leading-relaxed mb-4">
                Commercialise your product with the same frameworks a senior GTM operator uses with $15K clients.
              </p>
              <p className="text-[#555] text-sm leading-relaxed mb-8 flex-1">
                For founders who have an idea but don't know how to validate it, position it or take it to market. And for founders who have already built something but don't know who it's for or how to sell it.
              </p>
              <button className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm w-full">
                Get the GTM Toolkit — $149 →
              </button>
            </motion.div>

            {/* Build Toolkit */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8 flex flex-col">
              <div className="mb-5">
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-1">The Build Toolkit</h3>
                <p className="text-[#e8195a] font-bold text-2xl">$149</p>
              </div>
              <p className="text-[#888] text-sm italic leading-relaxed mb-4">
                Build a clean, scalable MVP without the usual vibe coding pitfalls — spaghetti code, security holes, zero documentation.
              </p>
              <p className="text-[#555] text-sm leading-relaxed mb-8 flex-1">
                For founders who are ready to build and want to do it properly from day one. Not a heavy enterprise-grade engineering setup — a lean, practical system that gets you to a handoff-ready MVP without the mess.
              </p>
              <button className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm w-full">
                Get the Build Toolkit — $149 →
              </button>
            </motion.div>

            {/* Get Both */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border-2 border-[#e8195a]/40 shadow-sm p-8 flex flex-col relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#e8195a] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Best Value</span>
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-1">Get Both</h3>
                <p className="text-[#e8195a] font-bold text-2xl">$249</p>
                <p className="text-[#aaa] text-xs mt-0.5">save $49</p>
              </div>
              <p className="text-[#888] text-sm italic leading-relaxed mb-4">
                Validate your idea, build it right, and take it to market. The complete system from idea to launch.
              </p>
              <div className="flex-1" />
              <button className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm w-full mt-8">
                Get Both Toolkits — $249 →
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-12">What's Included</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8">
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-6">The GTM Toolkit</h3>
              <div className="space-y-3 mb-6">
                {gtmItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-[#e8195a] flex-shrink-0" />
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#aaa] text-xs italic">Format: Notion portal. Duplicate into your own workspace and work through it at your own pace.</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8">
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-6">The Build Toolkit</h3>
              <div className="space-y-3 mb-6">
                {buildItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-[#e8195a] flex-shrink-0" />
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#aaa] text-xs italic">Format: Notion portal. Duplicate into your own workspace and work through it at your own pace.</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Who Is This For?</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-[#0a0a0a]">Made for founders doing the work themselves.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8">
              <h3 className="text-base font-bold text-[#0a0a0a] mb-5">The GTM Toolkit is for you if:</h3>
              <div className="space-y-3">
                {whoForGTM.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e8195a] mt-1.5 flex-shrink-0" />
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8">
              <h3 className="text-base font-bold text-[#0a0a0a] mb-5">The Build Toolkit is for you if:</h3>
              <div className="space-y-3">
                {whoForBuild.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e8195a] mt-1.5 flex-shrink-0" />
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8">
              <h3 className="text-base font-bold text-[#0a0a0a] mb-5">Get both if:</h3>
              <div className="space-y-3">
                {whoForBoth.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e8195a] mt-1.5 flex-shrink-0" />
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-[#0a0a0a]">Simple by design.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-[#e5e5e5]">
                <span className="gradient-text-simple text-3xl font-bold">{s.num}</span>
                <h3 className="text-base font-bold mt-4 mb-2 text-[#0a0a0a]">{s.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE UPGRADE PATH */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#111110" }}>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(232,25,90,0.05) 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">The Upgrade Path</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">Start DIY. Upgrade when you're ready.</h2>
          <p className="text-white/50 text-base leading-relaxed mb-4">
            If you work through the GTM Toolkit and decide you want professional execution — strategy, positioning, launch — you can upgrade to any productised service and your $149 purchase price will be credited against the engagement fee.
          </p>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            You're not throwing money away by starting here. You're getting a head start.
          </p>
          <Link to={createPageUrl("Services")}
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm border border-white/25 hover:border-white/50 transition-colors">
            View Services & Pricing →
          </Link>
        </div>
      </section>

      {/* WHAT YOU'RE NOT GETTING */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-10">What You're Not Getting</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8">
              <h3 className="text-base font-bold text-[#0a0a0a] mb-5">You are getting:</h3>
              <div className="space-y-3">
                {youAreGetting.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-[#e8195a] flex-shrink-0" />
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8">
              <h3 className="text-base font-bold text-[#0a0a0a] mb-5">You are not getting:</h3>
              <div className="space-y-3">
                {youAreNotGetting.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 mt-0.5 text-[#aaa] flex-shrink-0" />
                    <span className="text-[#aaa] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <p className="text-[#aaa] text-xs mt-8">
            If you want done-for-you execution:{" "}
            <Link to={createPageUrl("Services")} className="text-[#e8195a] hover:underline">View Services & Pricing →</Link>
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-[#0a0a0a]">Simple. One-time. No surprises.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <div className="bg-[#f7f7f8] rounded-xl px-8 py-5 text-center">
              <p className="text-[#888] text-sm mb-1">The GTM Toolkit</p>
              <p className="text-[#e8195a] font-bold text-2xl">$149</p>
            </div>
            <div className="bg-[#f7f7f8] rounded-xl px-8 py-5 text-center">
              <p className="text-[#888] text-sm mb-1">The Build Toolkit</p>
              <p className="text-[#e8195a] font-bold text-2xl">$149</p>
            </div>
            <div className="bg-[#f7f7f8] border-2 border-[#e8195a]/30 rounded-xl px-8 py-5 text-center">
              <p className="text-[#888] text-sm mb-1">Both Toolkits <span className="text-[#e8195a] text-xs">(save $49)</span></p>
              <p className="text-[#e8195a] font-bold text-2xl">$249</p>
            </div>
          </div>
          <p className="text-[#aaa] text-sm mb-10">One-time payment. Lifetime access. Lifetime updates included. No subscription.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm">
              Get the GTM Toolkit — $149 →
            </button>
            <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm">
              Get the Build Toolkit — $149 →
            </button>
            <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm">
              Get Both Toolkits — $249 →
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32 bg-[#f7f7f8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">FAQs</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-[#0a0a0a]">Frequently Asked Questions</h2>
          {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 md:py-32 bg-[#f7f7f8] border-t border-[#e5e5e5]">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Still Not Sure?</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[#0a0a0a]">Download the free ICP Framework.</h2>
          <p className="text-[#666] text-base leading-relaxed mb-8">
            One of the core tools inside the GTM Toolkit — yours free, no strings attached. If it's useful, you'll know the full toolkit is worth it.
          </p>
          <Link to={createPageUrl("ICPFramework")}
            className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm">
            Download Free ICP Framework →
          </Link>
        </div>
      </section>

    </div>
  );
}