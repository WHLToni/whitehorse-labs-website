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
  { num: "\u2605", title: "GTM One-Page - Investor / Executive Snapshot", bonus: true },
];

const tags = [
  "34 structured AI prompts",
  "~4-6 hours to complete",
  "Instant Notion access",
];

const outcomes = [
  {
    title: "A validated ICP",
    desc: "A clear, evidence-based profile of your ideal customer - specific enough to use in a sales conversation and defensible in an investor meeting.",
  },
  {
    title: "A positioning statement that holds up",
    desc: "How you win, why you win, and what makes you different from every alternative your buyer is considering.",
  },
  {
    title: "A launch plan with pricing built in",
    desc: "A sequenced go-to-market plan that covers channels, messaging, and pricing strategy - ready to execute or hand to a team.",
  },
  {
    title: "A one-page GTM summary",
    desc: "A single-page investor and executive snapshot that pulls your entire commercial strategy into the format decision-makers actually read.",
  },
];

const stats = [
  {
    number: "90%",
    label: "of startups that fail cite go-to-market failure as a primary cause - not product failure",
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
  "You need investor-ready GTM foundations - the frameworks that answer the questions every investor asks - without the cost or timeline of a consulting engagement.",
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
    a: "Yes - two separate Notion portals you can duplicate directly into your own workspace. No technical setup required.",
  },
  {
    q: "Do the self-guided systems include AI prompts?",
    a: "Yes - both the GTM Builder and the Product Builder include detailed AI prompts throughout, designed to guide you through each framework step by step. Rather than staring at a blank template wondering where to start, the prompts give you a clear brief to hand to an AI assistant and get a useful output immediately.\n\nI recommend using Gemini, Claude, or Perplexity for research and strategy work, and Notion AI if you prefer to stay inside your workspace. The prompts are written to work well with any LLM - use whatever you're most comfortable with.\n\nThat said, remember that AI is just a tool. It's excellent for getting foundations in place quickly, but nothing beats real human insight when it comes to the nuance of your specific market, your buyers, and your product.",
  },
  {
    q: "Can I use these if I'm not technical?",
    a: "The GTM Builder is designed for non-technical founders - no technical knowledge required. The Product Builder is designed for founders who are actively building, but you don't need to be a professional developer to use it.",
  },
  {
    q: "How long does it take to complete?",
    a: "Most founders complete the GTM Builder in 4-6 focused hours. You don't need to do it in one sitting - each module is self-contained and saves as you go. Some founders spread it across a week, working through one module at a time.",
  },
  {
    q: "Is this suitable for non-technical founders?",
    a: "Yes. The GTM Builder is about commercial strategy, not technology. If you understand your product and your market, you have everything you need. The AI prompts are designed to draw out that thinking in a structured way - no prior GTM experience required.",
  },
  {
    q: "What if I need help?",
    a: "Both portals are self-guided with AI prompts to keep you moving. If you reach a point where you want professional execution rather than DIY, you can upgrade to a productised service and your toolkit purchase will be credited against the fee.",
  },
  {
    q: "Do you offer both as a bundle?",
    a: "Yes - AUD $549 for both, saving you AUD $149.",
  },
  {
    q: "Refunds?",
    a: "All sales are final. Because these are digital products with instant access, we don't offer refunds. If you have questions about whether these are right for you before purchasing, feel free to get in touch.",
  },
];

export default function BuyTheFrameworks() {
  const [loading, setLoading] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const pricing = usePricing();

  useEffect(() => {
    document.title = "The Builder Suite - GTM Builder & Product Builder | Whitehorse Labs";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "The GTM Builder and Product Builder. Self-guided Notion systems with 34 structured AI prompts - the commercial foundations every investor will ask about. Includes a free 1-hour accelerator session with Toni. From AUD $349.");
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

  const handleWaitlist = async (e) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    await base44.entities.NewsletterSubscriber.create({ email: waitlistEmail, source: "Product Builder Waitlist" });
    setWaitlistSubmitted(true);
  };

  return (
    <div>

      {/* HERO */}
      <section className="py-12 md:py-16 bg-[#F0F7FA] text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-base font-semibold uppercase tracking-widest text-[#b3475c] mb-4">Self-serve · Notion-based · AI-guided</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#0a0a0a]">
              Do the groundwork yourself.
            </h1>
            <p className="text-[#666] text-base leading-relaxed max-w-[600px] mx-auto">
              The GTM Builder and Product Builder are self-guided Notion systems - a step-by-step series of frameworks augmented with structured AI prompts, that will guide you through building the commercial foundations that every investor wants to see.
              <br /><br />
              The same baseline frameworks used by big consulting firms and SaaS companies, adapted for founders who need to move fast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={() => handleBuy('gtm')}
                disabled={loading === 'gtm'}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm disabled:opacity-70 bg-gradient-to-br from-[#b3475c] to-[#7B5FB5] hover:opacity-90 transition-opacity"
              >
                {loading === 'gtm' ? 'Redirecting...' : 'Get the GTM Builder - AUD $349'}
              </button>
              <a
                href="#gtm-builder"
                className="inline-flex items-center justify-center gap-2 text-[#555] font-semibold px-8 py-4 rounded-lg text-sm border border-[#e5e5e5] hover:border-[#b3475c]/40 transition-colors"
              >
                See what's inside &darr;
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-10 md:py-12 bg-[#F0F7FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-[#e5e5e5] p-8 md:p-10"
          >
            <blockquote className="text-[#555] text-base leading-relaxed mb-6 italic">
              "Figuring out an international GTM strategy is challenging, but The GTM Builder made it clear and helped us shape our way step by step. Beyond the amazing platform, working with Toni and her team was a highlight! She's incredibly helpful, professional, and always brings great energy. It's so important to work with good people, and Toni is exactly that."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#b3475c]" />
              <div>
                <p className="text-sm font-semibold text-[#0a0a0a]">Guy Jakobi</p>
                <p className="text-sm text-[#888]">Managing Director, Pacific Grow</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GTM BUILDER PRODUCT CARD */}
      <section id="gtm-builder" className="relative py-12 md:py-16 overflow-hidden" style={{ background: "#1E1F23" }}>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(179,71,92,0.08) 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 z-10">
          <p className="text-base font-semibold uppercase tracking-widest text-[#c97a8a] mb-4">THE BUILDER SUITE</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-white/10 overflow-hidden" style={{ background: "#1a1a18" }}>

            {/* Top: title, price, description, CTA */}
            <div className="p-8 md:p-12 border-b border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">GTM Builder</h3>
                  <p className="text-white/50 text-sm">Self-guided · Notion-based · AI-guided</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <p className="text-white font-bold text-3xl">AUD $349</p>
                  <p className="text-white/40 text-xs mt-1">One-time · Instant access</p>
                </div>
              </div>
              <p className="text-white/70 text-base leading-relaxed mb-6 max-w-2xl">
                A self-guided Notion system that walks you through seven modules of commercial groundwork — from market sizing to launch planning. Work through it at your own pace, guided by 34 structured AI prompts designed to draw out the thinking that many early-stage founders skip.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {tags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleBuy('gtm')}
                disabled={loading === 'gtm'}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm disabled:opacity-70 bg-gradient-to-br from-[#b3475c] to-[#7B5FB5] hover:opacity-90 transition-opacity"
              >
                {loading === 'gtm' ? 'Redirecting...' : 'Get the GTM Builder — AUD $349 →'}
              </button>
            </div>

            {/* Strategy session - directly below price */}
            <div className="p-8 md:p-12 border-b border-white/10">
              <div className="rounded-xl border-2 border-[#b3475c] p-6" style={{ background: "rgba(179,71,92,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#b3475c] text-white text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">Limited Time</span>
                </div>
                <p className="text-white font-bold text-base mb-2">Free 1-Hour Strategy Session With Me — Included With Purchase</p>
                <p className="text-white/75 text-sm leading-relaxed">
                  I'm opening a limited number of personal strategy sessions to GTM Builder clients. Book it before you start - so we can align on your market and focus before you dive in - or after you've completed the work, so we can pressure-test your outputs together. Either way, it's your call. Calendar link provided after purchase, and within the Notion package for easy booking.
                </p>
              </div>
            </div>

            {/* Modules grid */}
            <div className="p-8 md:p-12">
              <p className="text-base font-bold text-white mb-6">7 Modules + Bonus</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modules.map((m, i) => (
                  <div key={i} className={`flex items-center gap-3 rounded-lg px-4 py-3 ${m.bonus ? "border border-[#b3475c]/40 bg-[#b3475c]/8" : "border border-white/8 bg-white/3"}`}
                    style={m.bonus ? { background: "rgba(179,71,92,0.08)" } : { background: "rgba(255,255,255,0.03)" }}>
                    <span className={`text-xs font-bold flex-shrink-0 w-5 ${m.bonus ? "text-[#b3475c]" : "text-white/30"}`}>{m.num}</span>
                    <span className={`text-sm leading-snug ${m.bonus ? "text-white font-semibold" : "text-white/75"}`}>{m.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 md:py-16 bg-[#F0F7FA]">
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
          <motion.h2
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="mt-12 text-2xl md:text-3xl font-bold tracking-tight text-[#0a0a0a] border-t border-[#e5e5e5] pt-10 max-w-2xl">
            Expert GTM strategy usually comes with a five-figure price tag. The GTM Builder gives you the same architectural rigor for a fraction of the cost.
          </motion.h2>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-12 md:py-16 bg-[#F0F7FA]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="text-base font-semibold uppercase tracking-widest text-[#b3475c] mb-4">Who It's For</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-[#0a0a0a]">Built for founders who need to move fast</h2>
          <div className="space-y-5">
            {whoFor.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4">
                <div className="w-[3px] self-stretch rounded-full bg-[#b3475c]/50 flex-shrink-0 mt-1" />
                <p className="text-[#555] text-base leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* PRODUCT BUILDER - COMING SOON */}
      <section className="py-12 md:py-16 bg-[#F0F7FA]">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-[#e5e5e5] p-8 md:p-10 bg-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a0a0a] mb-3">Product Builder — Coming Soon</h3>
            <p className="text-[#666] text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              A self-guided system for founders actively building a product - same format as the GTM Builder. Join the waitlist to be first in when it launches.
            </p>
            {waitlistSubmitted ? (
              <p className="text-[#b3475c] text-sm font-semibold">You're on the list. We'll be in touch when it launches.</p>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-sm border border-[#e5e5e5] focus:outline-none focus:border-[#b3475c]/40"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm bg-[#b3475c] hover:bg-[#96394c] transition-colors whitespace-nowrap"
                >
                  Join the waitlist →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>


      {/* FAQs */}
      <section className="py-12 md:py-16 bg-[#F0F7FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-base font-semibold uppercase tracking-widest text-[#b3475c] mb-4">FAQs</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-[#0a0a0a]">Frequently Asked Questions</h2>
          {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
        </div>
      </section>

    </div>
  );
}