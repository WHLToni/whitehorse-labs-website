import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
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
  "Guided market research and sizing frameworks",
  "Segmentation and targeting model",
  "Ideal Customer Profile (ICP) template — including hypotheses, assumptions and interview guide",
  "Competitive analysis matrix",
  "Positioning and messaging architecture",

  "Launch planning — both strategic and tactical layers",
  "Detailed AI prompts (JSON) in every section, to augment your thinking and conduct deep research / analysis",
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
    q: "Do the self-guided systems include AI prompts?",
    a: "Yes — both the GTM Builder and the Product Builder include detailed AI prompts throughout, designed to guide you through each framework step by step. Rather than staring at a blank template wondering where to start, the prompts give you a clear brief to hand to an AI assistant and get a useful output immediately.\n\nI recommend using Gemini, Claude, or Perplexity for research and strategy work, and Notion AI if you prefer to stay inside your workspace. The prompts are written to work well with any LLM — use whatever you're most comfortable with.\n\nThat said, remember that AI is just a tool. It's excellent for getting foundations in place quickly, but nothing beats real human insight when it comes to the nuance of your specific market, your buyers, and your product.",
  },
  {
    q: "Can I use these if I'm not technical?",
    a: "The GTM Builder is designed for non-technical founders — no technical knowledge required. The Product Builder is designed for founders who are actively building, but you don't need to be a professional developer to use it.",
  },
  {
    q: "What if I need help?",
    a: "Both portals are self-guided with AI prompts to keep you moving. If you reach a point where you want professional execution rather than DIY, you can upgrade to a productised service and your toolkit purchase will be credited against the fee.",
  },
  {
    q: "Do you offer both as a bundle?",
    a: "Yes — AUD $549 for both, saving you AUD $149.",
  },
  {
    q: "Refunds?",
    a: "All sales are final. Because these are digital products with instant access, we don't offer refunds. If you have questions about whether these are right for you before purchasing, feel free to get in touch.",
  },
];

export default function BuyTheFrameworks() {
  const [loading, setLoading] = useState(false);
  const pricing = usePricing();

  useEffect(() => {
    document.title = "GTM Builder & Product Builder — Whitehorse Labs";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "The GTM Builder and Product Builder. Self-guided Notion systems with 36 AI prompts — the baseline frameworks used by leading consulting firms and MBAs, adapted for product and SaaS founders. From AUD $349.");
  }, []);

  const handleBuy = async (product) => {
    if (window.self !== window.top) {
      alert("Checkout is only available from the published app. Please open the site directly.");
      return;
    }
    setLoading(product);
    const response = await base44.functions.invoke("createCheckoutSession", { product });
    setLoading(false);
    if (response.data?.url) {
      window.location.href = response.data.url;
    }
  };

  return (
    <div>

      {/* PAGE HEADER */}
      <section className="py-12 md:py-16 bg-[#f7f7f8] text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Self-serve · Notion-based · AI-guided</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#0a0a0a]">
              Do the groundwork yourself. Bring on fractional expertise when you're ready to scale.
            </h1>
            <p className="text-[#666] text-base leading-relaxed max-w-[600px] mx-auto">
              The GTM Builder and Product Builder are self-guided Notion systems — a step-by-step series of frameworks augmented with detailed AI prompts, that will guide you through building the commercial foundations that every investor wants to see.
              <br /><br />
              The same baseline frameworks used by big consulting firms and SaaS companies, adapted for product and SaaS founders who need to move fast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={() => handleBuy('gtm')}
                disabled={loading === 'gtm'}
                className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm disabled:opacity-70"
              >
                {loading === 'gtm' ? 'Redirecting...' : 'Get the GTM Builder — AUD $349'}
              </button>
              <a
                href="#gtm-builder"
                className="inline-flex items-center justify-center gap-2 text-[#555] font-semibold px-8 py-4 rounded-lg text-sm border border-[#e5e5e5] hover:border-[#e8195a]/40 transition-colors"
              >
                See what's inside ↓
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* THE TOOLKITS */}
      <section id="gtm-builder" className="relative py-12 md:py-16 overflow-hidden" style={{ background: "#111110" }}>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(232,25,90,0.05) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">THE BUILDER SUITE</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-white">Two systems. Buy one or both.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* GTM Toolkit */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-white/10 p-8 flex flex-col" style={{ background: "#1a1a18" }}>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white mb-1">GTM Builder</h3>
                <p className="text-[#e8195a] font-bold text-2xl">{pricing.single}</p>
              </div>
              <p className="text-white/50 text-sm italic leading-relaxed mb-4">
                Commercialise your product with the same frameworks a senior GTM operator uses with $15K clients.
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                For founders who have an idea but don't know how to validate it, position it or take it to market. And for founders who have already built something but don't know who it's for or how to sell it.
              </p>
              <button onClick={() => handleBuy('gtm')} disabled={loading === 'gtm'} className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm w-full disabled:opacity-70">
                {loading === 'gtm' ? 'Redirecting...' : pricing.gtmBtn}
              </button>
            </motion.div>

            {/* Build Toolkit */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/10 p-8 flex flex-col" style={{ background: "#1a1a18" }}>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white mb-1">Product Builder</h3>
                <p className="text-[#e8195a] font-bold text-2xl">{pricing.single}</p>
              </div>
              <p className="text-white/50 text-sm italic leading-relaxed mb-4">
                Build a clean, scalable MVP without the usual vibe coding pitfalls — spaghetti code, security holes, zero documentation.
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                For founders who are ready to build and want to do it properly from day one. Not a heavy enterprise-grade engineering setup — a lean, practical system that gets you to a handoff-ready MVP without the mess.
              </p>
              <span className="inline-block bg-[#333] text-white/50 font-semibold px-6 py-3 rounded-lg text-sm w-full text-center cursor-not-allowed">Coming Soon</span>
            </motion.div>

            {/* Get Both */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-2xl border-2 border-[#e8195a]/40 p-8 flex flex-col relative" style={{ background: "#1a1a18" }}>
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#e8195a] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Best Value</span>
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white mb-1">Get Both</h3>
                <p className="text-[#e8195a] font-bold text-2xl">{pricing.both}</p>
                <p className="text-white/30 text-xs mt-0.5">{pricing.save}</p>
              </div>
              <p className="text-white/50 text-sm italic leading-relaxed mb-4">
                Validate your idea, build it right, and take it to market. The complete system from idea to launch.
              </p>
              <div className="flex-1" />
              <span className="inline-block bg-[#333] text-white/50 font-semibold px-6 py-3 rounded-lg text-sm w-full text-center cursor-not-allowed mt-8">Coming Soon</span>
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
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-6">GTM Builder</h3>
              <div className="space-y-3 mb-6">
                {gtmItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-[#e8195a] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#aaa] text-xs italic">Format: Notion portal. Duplicate into your own workspace and work through it at your own pace.</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8">
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-6">Product Builder</h3>
              <div className="space-y-3 mb-6">
                {buildItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-[#e8195a] flex-shrink-0" aria-hidden="true" />
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
              <h3 className="text-base font-bold text-[#0a0a0a] mb-5">GTM Builder is for you if:</h3>
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
              <h3 className="text-base font-bold text-[#0a0a0a] mb-5">Product Builder is for you if:</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">Start here. Bring me in when you're ready to scale.</h2>
          <p className="text-white/50 text-base leading-relaxed mb-4">
            If you work through the GTM Builder and decide you want professional execution — strategy, positioning, launch — you can upgrade to any productised service and your AUD $349 purchase price will be credited against the engagement fee.
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
                    <Check className="w-4 h-4 mt-0.5 text-[#e8195a] flex-shrink-0" aria-hidden="true" />
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
                    <X className="w-4 h-4 mt-0.5 text-[#aaa] flex-shrink-0" aria-hidden="true" />
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
              <p className="text-[#888] text-sm mb-1">GTM Builder</p>
              <p className="text-[#e8195a] font-bold text-2xl">{pricing.single}</p>
            </div>
            <div className="bg-[#f7f7f8] rounded-xl px-8 py-5 text-center">
              <p className="text-[#888] text-sm mb-1">Product Builder <span className="text-[#bbb] text-xs font-normal">(Coming Soon)</span></p>
              <p className="text-[#e8195a] font-bold text-2xl">{pricing.single}</p>
            </div>
            <div className="bg-[#f7f7f8] border-2 border-[#e8195a]/30 rounded-xl px-8 py-5 text-center">
              <p className="text-[#888] text-sm mb-1">Both <span className="text-[#e8195a] text-xs">({pricing.save})</span> <span className="text-[#bbb] text-xs font-normal">(Coming Soon)</span></p>
              <p className="text-[#e8195a] font-bold text-2xl">{pricing.both}</p>
            </div>
          </div>
          <p className="text-[#aaa] text-sm mb-8">One-time payment. Lifetime access. Lifetime updates included. No subscription.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <button onClick={() => handleBuy('gtm')} disabled={loading === 'gtm'} className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm disabled:opacity-70">
              {loading === 'gtm' ? 'Redirecting...' : pricing.gtmBtn}
            </button>
            <span className="inline-block bg-[#eee] text-[#aaa] font-semibold px-6 py-3.5 rounded-lg text-sm cursor-not-allowed">Product Builder — Coming Soon</span>
            <span className="inline-block bg-[#eee] text-[#aaa] font-semibold px-6 py-3.5 rounded-lg text-sm cursor-not-allowed">Bundle — Coming Soon</span>
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