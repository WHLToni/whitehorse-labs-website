import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import FAQItem from "../components/shared/FAQItem";
import { usePricing } from "../components/shared/usePricing";

const modules = [
  { num: "01", title: "Market Analysis & Sizing" },
  { num: "02", title: "Segmentation Model & Targeting" },
  { num: "03", title: "Ideal Customer Profile (ICP)" },
  { num: "04", title: "Competitive Analysis" },
  { num: "05", title: "Positioning & Messaging Architecture" },
  { num: "06", title: "Brand Strategy & Foundations" },
  { num: "07", title: "Launch Planning including Pricing Strategy" },
  { num: "\u2605", title: "GTM One-Page \u2014 Investor / Executive Snapshot", bonus: true },
];

const tags = [
  "36 AI prompts throughout",
  "~4\u20136 hours to complete",
  "Instant Notion access",
];

const outcomes = [
  {
    title: "A validated ICP",
    desc: "A clear, evidence-based profile of your ideal customer \u2014 specific enough to use in a sales conversation and defensible in an investor meeting.",
  },
  {
    title: "A positioning statement that holds up",
    desc: "How you win, why you win, and what makes you different from every alternative your buyer is considering.",
  },
  {
    title: "A launch plan with pricing built in",
    desc: "A sequenced go-to-market plan that covers channels, messaging, and pricing strategy \u2014 ready to execute or hand to a team.",
  },
  {
    title: "A one-page GTM summary",
    desc: "A single-page investor and executive snapshot that pulls your entire commercial strategy into the format decision-makers actually read.",
  },
];

const stats = [
  {
    number: "90%",
    label: "of startups that fail cite go-to-market failure as a primary cause \u2014 not product failure",
  },
  {
    number: "3x",
    label: "more likely to raise successfully with a documented GTM strategy than without one",
  },
  {
    number: "$15,000+",
    label: "average cost of a GTM strategy engagement with a senior consultant",
  },
];

const whoFor = [
  "You're pre-revenue or pre-raise and need to build your commercial foundations before you spend a dollar on marketing or a minute on messaging.",
  "You're preparing for international expansion and need to validate your ICP and positioning in a new market before you commit.",
  "You need investor-ready GTM foundations \u2014 the frameworks that answer the questions every investor asks \u2014 without the cost or timeline of a consulting engagement.",
];

const testimonials = [
  {
    quote: "Testimonial coming soon.",
    name: "Founder, Early-stage SaaS",
    initials: "FS",
  },
];

const faqs = [
  {
    q: "Are these Notion templates?",
    a: "Yes \u2014 two separate Notion portals you can duplicate directly into your own workspace. No technical setup required.",
  },
  {
    q: "Do the self-guided systems include AI prompts?",
    a: "Yes \u2014 both the GTM Builder and the Product Builder include detailed AI prompts throughout, designed to guide you through each framework step by step. Rather than staring at a blank template wondering where to start, the prompts give you a clear brief to hand to an AI assistant and get a useful output immediately.\n\nI recommend using Gemini, Claude, or Perplexity for research and strategy work, and Notion AI if you prefer to stay inside your workspace. The prompts are written to work well with any LLM \u2014 use whatever you're most comfortable with.\n\nThat said, remember that AI is just a tool. It's excellent for getting foundations in place quickly, but nothing beats real human insight when it comes to the nuance of your specific market, your buyers, and your product.",
  },
  {
    q: "Can I use these if I'm not technical?",
    a: "The GTM Builder is designed for non-technical founders \u2014 no technical knowledge required. The Product Builder is designed for founders who are actively building, but you don't need to be a professional developer to use it.",
  },
  {
    q: "How long does it take to complete?",
    a: "Most founders complete the GTM Builder in 4\u20136 focused hours. You don't need to do it in one sitting \u2014 each module is self-contained and saves as you go. Some founders spread it across a week, working through one module at a time.",
  },
  {
    q: "Is this suitable for non-technical founders?",
    a: "Yes. The GTM Builder is about commercial strategy, not technology. If you understand your product and your market, you have everything you need. The AI prompts are designed to draw out that thinking in a structured way \u2014 no prior GTM experience required.",
  },
  {
    q: "What if I need help?",
    a: "Both portals are self-guided with AI prompts to keep you moving. If you reach a point where you want professional execution rather than DIY, you can upgrade to a productised service and your toolkit purchase will be credited against the fee.",
  },
  {
    q: "Do you offer both as a bundle?",
    a: "Yes \u2014 AUD $549 for both, saving you AUD $149.",
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
    document.title = "The Builder Suite \u2014 GTM Builder & Product Builder | Whitehorse Labs";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "The GTM Builder and Product Builder. Self-guided Notion systems with 36 AI prompts \u2014 the commercial foundations every investor will ask about. Includes a free 1-hour accelerator session with Toni. From AUD $349.");
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

      {/* HERO */}
      <section className="py-12 md:py-16 bg-[#f7f7f8] text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Self-serve \xb7 Notion-based \xb7 AI-guided</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#0a0a0a]">
              Do the groundwork yourself. Bring on fractional expertise when you're ready to scale.
            </h1>
            <p className="text-[#666] text-base leading-relaxed max-w-[600px] mx-auto">
              The GTM Builder and Product Builder are self-guided Notion systems \u2014 a step-by-step series of frameworks augmented with detailed AI prompts, that will guide you through building the commercial foundations that every investor wants to see.
              <br /><br />
              The same baseline frameworks used by big consulting firms and SaaS companies, adapted for product and SaaS founders who need to move fast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={() => handleBuy('gtm')}
                disabled={loading === 'gtm'}
                className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm disabled:opacity-70"
              >
                {loading === 'gtm' ? 'Redirecting...' : 'Get the GTM Builder \u2014 AUD $349'}
              </button>
              <a
                href="#gtm-builder"
                className="inline-flex items-center justify-center gap-2 text-[#555] font-semibold px-8 py-4 rounded-lg text-sm border border-[#e5e5e5] hover:border-[#e8195a]/40 transition-colors"
              >
                See what's inside \u2193
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GTM BUILDER PRODUCT CARD */}
      <section id="gtm-builder" className="relative py-12 md:py-16 overflow-hidden" style={{ background: "#111110" }}>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(232,25,90,0.05) 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">THE BUILDER SUITE</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-white/10 p-8 md:p-12" style={{ background: "#1a1a18" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-2">GTM Builder</p>
                <p className="text-[#e8195a] font-bold text-3xl mb-5">AUD $349</p>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  A self-guided Notion system that walks you through seven modules of commercial groundwork \u2014 from market sizing to launch planning. Work through it at your own pace, guided by 36 AI prompts designed to draw out the thinking that most founders skip.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full border border-[#e8195a]/30 text-[#e8195a]/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="rounded-xl border border-[#e8195a]/25 p-5" style={{ background: "rgba(232,25,90,0.06)" }}>
                  <p className="text-white font-semibold text-sm mb-2">Free accelerator session \u2014 limited availability each month</p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Book a 1-hour session with Toni after purchase. We'll work through your GTM Builder outputs together \u2014 I'll add the strategic layer specific to your product, your market, and your stage. Included with your purchase while sessions are available.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">7 Modules + Bonus</p>
                <div className="space-y-3">
                  {modules.map((m, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className={`text-xs font-bold flex-shrink-0 w-6 ${m.bonus ? "text-[#e8195a]" : "text-white/25"}`}>{m.num}</span>
                      <span className={`text-sm leading-snug ${m.bonus ? "text-white/70 font-medium" : "text-white/60"}`}>{m.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <button
                onClick={() => handleBuy('gtm')}
                disabled={loading === 'gtm'}
                className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm disabled:opacity-70 w-full sm:w-auto"
              >
                {loading === 'gtm' ? 'Redirecting...' : 'Get the GTM Builder \u2014 AUD $349'}
              </button>
              <p className="text-white/30 text-xs mt-3">
                Free accelerator session included while available. Calendar link provided after purchase.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU PRODUCE */}
      <section className="py-12 md:py-16 bg-[#f7f7f8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Outcomes</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-[#0a0a0a]">What you produce</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((o, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-7">
                <h3 className="text-base font-bold text-[#0a0a0a] mb-2">{o.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-3">{s.number}</p>
                <p className="text-[#888] text-sm leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-12 md:py-16 bg-[#f7f7f8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Who It's For</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-[#0a0a0a]">Built for founders who need to move fast</h2>
          <div className="space-y-5">
            {whoFor.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4">
                <div className="w-[3px] self-stretch rounded-full bg-[#e8195a]/50 flex-shrink-0 mt-1" />
                <p className="text-[#555] text-base leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Social Proof</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-[#0a0a0a]">What founders say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-[#f7f7f8] rounded-2xl border border-[#e5e5e5] p-7 flex flex-col gap-5">
                <p className="text-[#555] text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#e8195a]/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#e8195a] text-xs font-bold">{t.initials}</span>
                  </div>
                  <p className="text-[#888] text-sm font-medium">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT BUILDER CARD */}
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ background: "#111110" }}>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(232,25,90,0.03) 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-white/10 p-8 md:p-12 relative" style={{ background: "#1a1a18" }}>
            <div className="absolute top-6 right-6">
              <span className="bg-[#333] text-white/50 text-xs font-semibold px-3 py-1 rounded-full">Coming soon</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Product Builder</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-xl mb-8">
              A self-guided Notion system for founders who are building a product and need a structured approach to scoping, validating, and shipping. Same format as the GTM Builder \u2014 AI-guided, modular, self-paced.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm border border-white/25 hover:border-white/50 transition-colors">
              Notify me when it launches \u2192
            </a>
          </motion.div>
        </div>
      </section>

      {/* BUNDLE OFFER */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl border-2 border-[#e8195a]/30 p-8 md:p-12 relative" style={{ background: "#fff9fa" }}>
            <div className="absolute -top-3.5 left-8">
              <span className="bg-[#e8195a] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Best Value</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#0a0a0a]">Get both. Save AUD $149.</h2>
            <p className="text-[#666] text-base leading-relaxed max-w-2xl mb-8">
              The GTM Builder and Product Builder together \u2014 AUD $549. Pre-purchase the bundle now and get instant access to the GTM Builder. Product Builder access is added automatically when it launches.
            </p>
            <button
              onClick={() => handleBuy('bundle')}
              disabled={loading === 'bundle'}
              className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm disabled:opacity-70"
            >
              {loading === 'bundle' ? 'Redirecting...' : 'Get the bundle \u2014 AUD $549'}
            </button>
            <p className="text-[#aaa] text-xs mt-3">
              Product Builder access added automatically at launch. No further payment required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONSULTING UPGRADE PATH */}
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ background: "#111110" }}>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(232,25,90,0.05) 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">The Upgrade Path</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">Same starting point. Different depth.</h2>
          <p className="text-white/50 text-base leading-relaxed mb-5">
            The Builder products give you the baseline foundations fast \u2014 the frameworks that matter most at early stage, structured so you can work through them yourself. Consulting goes further: tailored frameworks, additional models specific to your product and market, and an experienced operator helping you embed those foundations and build a GTM that scales.
          </p>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            Any Builder purchase is credited toward a consulting engagement. You're not throwing money away by starting here \u2014 you're getting a head start, and you'll walk into the first consulting session already knowing your market, your buyer, and your competitive position.
          </p>
          <Link to={createPageUrl("Services")}
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm border border-white/25 hover:border-white/50 transition-colors">
            View Services &amp; Pricing \u2192
          </Link>
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