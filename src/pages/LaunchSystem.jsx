import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import FAQItem from "../components/shared/FAQItem";
import { usePricing } from "../components/shared/usePricing";

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
    q: "Do the operating systems include AI prompts?",
    a: "Yes — both the GTM OS and the Build OS include detailed AI prompts throughout, designed to guide you through each framework step by step. Rather than staring at a blank template wondering where to start, the prompts give you a clear brief to hand to an AI assistant and get a useful output immediately.\n\nI recommend using Gemini, Claude, or Perplexity for research and strategy work, and Notion AI if you prefer to stay inside your workspace. The prompts are written to work well with any LLM — use whatever you're most comfortable with.\n\nThat said, remember that AI is just a tool. It's excellent for getting foundations in place quickly, but nothing beats real human insight when it comes to the nuance of your specific market, your buyers, and your product.",
  },
  {
    q: "Can I use these if I'm not technical?",
    a: "The GTM OS is designed for non-technical founders — no technical knowledge required. The Build OS is designed for founders who are actively building, but you don't need to be a professional developer to use it.",
  },
  {
    q: "What if I need help?",
    a: "Both portals are self-guided with AI prompts to keep you moving. If you reach a point where you want professional execution rather than DIY, you can upgrade to a productised service and your toolkit purchase will be credited against the fee.",
  },
  {
    q: "Do you offer both as a bundle?",
    a: "Yes — $249 for both, saving you $49.",
  },
  {
    q: "Refunds?",
    a: "All sales are final. Because these are digital products with instant access, we don't offer refunds. If you have questions about whether these are right for you before purchasing, feel free to get in touch.",
  },
];

export default function LaunchSystem() {
  const pricing = usePricing();

  return (
    <div>

      {/* PAGE HEADER */}
      <section className="py-12 md:py-16 bg-[#f7f7f8] text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">GET THE FRAMEWORKS</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#0a0a0a]">
              The frameworks I use with every client. Yours from {pricing ? pricing.from : "..."}.
            </h1>
            <p className="text-[#666] text-base leading-relaxed max-w-[600px] mx-auto">
              Two self-serve Notion portals — each one a complete operating system for a critical part of building and launching your product. The GTM OS for commercialisation. The Build OS for development. The same systems I use with clients, available without the price tag.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="relative overflow-hidden" style={{ background: "#111110" }}>
        <div className="absolute top-0 left-0 w-[700px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top left, rgba(232,25,90,0.06) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom right, rgba(232,25,90,0.04) 0%, transparent 65%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-14 py-14 md:py-16 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* LEFT COLUMN */}
            <div className="flex flex-col pr-0 md:pr-12 pb-12 md:pb-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-5">DOES THIS SOUND LIKE YOU?</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white leading-tight">
                You've built something, but now you're stuck.
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                You have a product, or at least the beginnings of one. But the commercial side feels like a bit of a black hole. You know you need to validate product-market fit, and you know you need a go-to-market plan. But knowing you need them and knowing how to build them are two very different things.
              </p>

              {/* Stat block */}
              <div className="mt-auto rounded-xl border border-[#e8195a]/20 p-6" style={{ background: "rgba(232,25,90,0.08)" }}>
                <div className="flex items-stretch gap-0">
                  <div className="flex-1 pr-5">
                    <p className="text-[#e8195a] font-bold text-3xl mb-1">34%</p>
                    <p className="text-white/50 text-xs leading-snug">of startups fail from lack of product-market fit</p>
                  </div>
                  <div className="w-px bg-white/10 flex-shrink-0" />
                  <div className="flex-1 pl-5">
                    <p className="text-[#e8195a] font-bold text-3xl mb-1">29%</p>
                    <p className="text-white/50 text-xs leading-snug">fail from poor marketing and weak GTM strategy</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/25 text-xs italic">Source: Failory, via Embroker (2025). Based on interviews with 80+ founders of failed startups.</p>
                </div>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden md:block absolute left-1/2 top-14 bottom-14 w-px" style={{ background: "rgba(255,255,255,0.06)" }} />

            {/* RIGHT COLUMN */}
            <div className="flex flex-col pl-0 md:pl-12 pt-12 md:pt-0 border-t border-white/5 md:border-t-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/20 mb-5">QUESTIONS FOUNDERS GET STUCK ON</p>

              <div className="flex-1">
                {problemQuestions.map((q, i) => (
                  <div key={i}>
                    <div
                      className="group flex items-center gap-4 py-3.5 cursor-default transition-all duration-200"
                    >
                      <div className="w-[3px] self-stretch rounded-full flex-shrink-0 transition-all duration-200"
                        style={{ background: "rgba(232,25,90,0.5)" }}
                        onMouseEnter={e => e.currentTarget.style.background = "#e8195a"}
                        onMouseLeave={e => e.currentTarget.style.background = "rgba(232,25,90,0.5)"}
                      />
                      <span className="text-white/60 text-sm leading-relaxed transition-colors duration-200 group-hover:text-white/85">{q}</span>
                    </div>
                    {i < problemQuestions.length - 1 && (
                      <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/35 text-sm italic leading-relaxed">
                  You could wing it and learn the hard way —{" "}
                  <span className="text-white/60 not-italic">burning through cash on the wrong audience, positioning it badly, or launching before you're ready.</span>
                  {" "}Or you could start with the same frameworks a senior GTM operator uses with clients, and give yourself a real chance of getting it right.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE TOOLKITS */}
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ background: "#111110" }}>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(232,25,90,0.05) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">WHITEHORSE OS</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-white">Two systems. Buy one or both.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* GTM Toolkit */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-white/10 p-8 flex flex-col" style={{ background: "#1a1a18" }}>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white mb-1">The GTM OS</h3>
                <p className="text-[#e8195a] font-bold text-2xl">{pricing ? pricing.single : "..."}</p>
              </div>
              <p className="text-white/50 text-sm italic leading-relaxed mb-4">
                Commercialise your product with the same frameworks a senior GTM operator uses with $15K clients.
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                For founders who have an idea but don't know how to validate it, position it or take it to market. And for founders who have already built something but don't know who it's for or how to sell it.
              </p>
              <button className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm w-full">
                {pricing ? pricing.gtmBtn : "..."}
              </button>
            </motion.div>

            {/* Build Toolkit */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/10 p-8 flex flex-col" style={{ background: "#1a1a18" }}>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white mb-1">The Build OS</h3>
                <p className="text-[#e8195a] font-bold text-2xl">{pricing ? pricing.single : "..."}</p>
              </div>
              <p className="text-white/50 text-sm italic leading-relaxed mb-4">
                Build a clean, scalable MVP without the usual vibe coding pitfalls — spaghetti code, security holes, zero documentation.
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                For founders who are ready to build and want to do it properly from day one. Not a heavy enterprise-grade engineering setup — a lean, practical system that gets you to a handoff-ready MVP without the mess.
              </p>
              <button className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm w-full">
                {pricing ? pricing.buildBtn : "..."}
              </button>
            </motion.div>

            {/* Get Both */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-2xl border-2 border-[#e8195a]/40 p-8 flex flex-col relative" style={{ background: "#1a1a18" }}>
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#e8195a] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Best Value</span>
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white mb-1">Get Both</h3>
                <p className="text-[#e8195a] font-bold text-2xl">{pricing ? pricing.both : "..."}</p>
                <p className="text-white/30 text-xs mt-0.5">{pricing ? pricing.save : ""}</p>
              </div>
              <p className="text-white/50 text-sm italic leading-relaxed mb-4">
                Validate your idea, build it right, and take it to market. The complete system from idea to launch.
              </p>
              <div className="flex-1" />
              <button className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm w-full mt-8">
                {pricing ? pricing.bothBtn : "..."}
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-12 md:py-16 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-8">What's Included</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8">
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-6">The GTM OS</h3>
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
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-6">The Build OS</h3>
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Who Is This For?</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-[#0a0a0a]">Made for founders doing the work themselves.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8">
              <h3 className="text-base font-bold text-[#0a0a0a] mb-5">The GTM OS is for you if:</h3>
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
              <h3 className="text-base font-bold text-[#0a0a0a] mb-5">The Build OS is for you if:</h3>
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
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ background: "#111110" }}>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(232,25,90,0.05) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-white">Simple by design.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10" style={{ background: "#1a1a18" }}>
                <span className="gradient-text-simple text-3xl font-bold">{s.num}</span>
                <h3 className="text-base font-bold mt-4 mb-2 text-white">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE UPGRADE PATH */}
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ background: "#111110" }}>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(232,25,90,0.05) 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">The Upgrade Path</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">Start DIY. Upgrade when you're ready.</h2>
          <p className="text-white/50 text-base leading-relaxed mb-4">
            If you work through the GTM OS and decide you want professional execution — strategy, positioning, launch — you can upgrade to any productised service and your $149 purchase price will be credited against the engagement fee.
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
      <section className="py-12 md:py-16 bg-[#f7f7f8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-8">What You're Not Getting</p>
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[#0a0a0a]">Simple. One-time. No surprises.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <div className="bg-[#f7f7f8] rounded-xl px-8 py-5 text-center">
              <p className="text-[#888] text-sm mb-1">The GTM OS</p>
              <p className="text-[#e8195a] font-bold text-2xl">{pricing ? pricing.single : "..."}</p>
            </div>
            <div className="bg-[#f7f7f8] rounded-xl px-8 py-5 text-center">
              <p className="text-[#888] text-sm mb-1">The Build OS</p>
              <p className="text-[#e8195a] font-bold text-2xl">{pricing ? pricing.single : "..."}</p>
            </div>
            <div className="bg-[#f7f7f8] border-2 border-[#e8195a]/30 rounded-xl px-8 py-5 text-center">
              <p className="text-[#888] text-sm mb-1">Both <span className="text-[#e8195a] text-xs">({pricing ? pricing.save : ""})</span></p>
              <p className="text-[#e8195a] font-bold text-2xl">{pricing ? pricing.both : "..."}</p>
            </div>
          </div>
          <p className="text-[#aaa] text-sm mb-8">One-time payment. Lifetime access. Lifetime updates included. No subscription.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm">
              {pricing.gtmBtn}
            </button>
            <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm">
              {pricing.buildBtn}
            </button>
            <button className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm">
              {pricing.bothBtn}
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-[#f7f7f8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">FAQs</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-[#0a0a0a]">Frequently Asked Questions</h2>
          {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
        </div>
      </section>

    </div>
  );
}