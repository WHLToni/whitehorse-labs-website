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
    <div className="ds-page">

      {/* HERO */}
      <section className="py-12 md:py-16 bg-[#F3F8F1] text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="ds-eyebrow mb-4">Self-serve · Notion-based · AI-guided</p>
            <h1 className="ds-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Do the groundwork yourself.
            </h1>
            <p className="text-[#3a4649] text-base leading-relaxed max-w-[600px] mx-auto">
              Don't have budget for a consultant or marketer? The GTM Builder is a guided Notion-based system to generate your GTM plan, and secure your first customers or your first round of investor funding.
              <br /><br />
              Each module builds on the last, generating the essential components of your GTM strategy, from market research through to launch planning — with 34 detailed AI prompts included to accelerate your progress.
              <br /><br />
              Ideal for founders who have a bootstrapped MVP that's almost ready for market, founders seeking seed or Series A funding, and vibe coders who have built a product and don't know how to get their first customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={() => handleBuy('gtm')}
                disabled={loading === 'gtm'}
                className="ds-btn ds-btn-solid inline-flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading === 'gtm' ? 'Redirecting...' : 'Get the GTM Builder - AUD $349'}
              </button>
              <a
                href="#gtm-builder"
                className="ds-btn ds-btn-outline inline-flex items-center justify-center gap-2"
              >
                See what's inside &darr;
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 md:py-24 bg-[#E7F0E3]">
        <div className="relative max-w-[680px] mx-auto px-6">
          <span className="absolute top-6 left-6 w-6 h-6 border-t-[2.5px] border-l-[2.5px] border-[#C13B54]" />
          <span className="absolute top-6 right-6 w-6 h-6 border-t-[2.5px] border-r-[2.5px] border-[#C13B54]" />
          <span className="absolute bottom-0 left-6 w-6 h-6 border-b-[2.5px] border-l-[2.5px] border-[#C13B54]" />
          <span className="absolute bottom-0 right-6 w-6 h-6 border-b-[2.5px] border-r-[2.5px] border-[#C13B54]" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white shadow-[0_12px_44px_rgba(20,45,35,0.09)] px-8 py-10 md:px-14 md:py-12">
            <span className="ds-display text-[#C13B54] text-7xl leading-none block mb-1">&ldquo;</span>
            <blockquote className="text-[var(--ink)] text-base md:text-lg leading-relaxed italic max-w-[46ch]">
              Figuring out an international GTM strategy is challenging, but The GTM Builder made it clear and helped us shape our way step by step. Beyond the amazing platform, working with Toni and her team was a highlight. She's incredibly helpful, professional, and always brings great energy. It's so important to work with good people, and Toni is exactly that.
            </blockquote>
            <div className="mt-7 flex items-center gap-3">
              <div className="w-9 h-[2.5px] bg-[#C13B54]" />
              <div>
                <p className="text-base font-bold text-[var(--ink)]">Guy Jakobi</p>
                <p className="text-sm text-[var(--muted)]">Managing Director, Pacific Grow</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROP */}
      <section className="py-16 md:py-20 bg-[#F3F8F1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="ds-eyebrow mb-4">The GTM Builder</p>
              <h2 className="ds-display text-3xl md:text-4xl mb-6">Don't have budget for a consultant?</h2>
              <p className="text-[#3a4649] text-base leading-relaxed mb-5">
                The GTM Builder is a guided walk-through of the essential components of a GTM strategy — a "skinny" version of what I do in a consulting engagement. Ideal for founders who have a bootstrapped MVP that's almost ready for market, founders seeking seed or Series A funding, and vibe coders who have built their first app and aren't sure how to take it to market.
              </p>
              <p className="text-[#3a4649] text-base leading-relaxed">
                Build each section, step by step — from market research and sizing, through to competitive analysis, positioning and messaging and launch planning. The tool is augmented with 34 detailed AI prompts that will deepen your research and analysis and accelerate your speed to market.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-base font-bold text-[var(--ink)] mb-5">The outcome</p>
              <ul className="space-y-4">
                {[
                  "In-depth understanding of your market, its size and value, and your competitors",
                  "Razor-sharp and evidence-based positioning and messaging",
                  "Brand foundations",
                  "A credible launch plan",
                  "Investor snapshot containing key commercials",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C13B54] font-bold text-sm mt-0.5 flex-shrink-0">—</span>
                    <span className="text-[#3a4649] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GTM BUILDER PRODUCT CARD */}
      <section id="gtm-builder" className="relative py-12 md:py-16 overflow-hidden bg-[var(--mist)]">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 z-10">
          <p className="ds-eyebrow grey mb-4">THE BUILDER SUITE</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-md border border-[var(--line)] overflow-hidden bg-white">

            {/* Top: title, price, description, CTA */}
            <div className="p-8 md:p-12 border-b border-[var(--line)]">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <h3 className="ds-display text-3xl md:text-4xl mb-1">GTM Builder</h3>
                  <p className="text-[var(--muted)] text-sm">Self-guided · Notion-based · AI-guided</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <p className="text-[var(--ink)] font-bold text-3xl">AUD $349</p>
                  <p className="text-[var(--muted)] text-xs mt-1">One-time · Instant access</p>
                </div>
              </div>
              <p className="text-[#3a4649] text-base leading-relaxed mb-6 max-w-2xl">
                A self-guided Notion system that walks you through seven modules of commercial groundwork — from market sizing to launch planning. Work through it at your own pace, guided by 34 structured AI prompts designed to draw out the thinking that many early-stage founders skip.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {tags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--muted)] bg-[#f5f8f6] border border-[var(--line)] px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleBuy('gtm')}
                disabled={loading === 'gtm'}
                className="ds-btn ds-btn-solid inline-flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading === 'gtm' ? 'Redirecting...' : 'Get the GTM Builder — AUD $349'}
              </button>
            </div>

            {/* Strategy session - directly below price */}
            <div className="p-8 md:p-12 border-b border-[var(--line)]">
              <div className="rounded-xl border-2 border-[#C13B54] p-6" style={{ background: "rgba(193,59,84,0.06)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#C13B54] text-white text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">Limited Time</span>
                </div>
                <p className="text-[var(--ink)] font-bold text-base mb-2">Free 1-Hour Strategy Session With Me — Included With Purchase</p>
                <p className="text-[#3a4649] text-sm leading-relaxed">
                  I'm opening a limited number of personal strategy sessions to GTM Builder clients. Book it before you start - so we can align on your market and focus before you dive in - or after you've completed the work, so we can pressure-test your outputs together. Either way, it's your call. Calendar link provided after purchase, and within the Notion package for easy booking.
                </p>
              </div>
            </div>

            {/* Modules grid */}
            <div className="p-8 md:p-12">
              <p className="text-base font-bold text-[var(--ink)] mb-6">7 Modules + Bonus</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modules.map((m, i) => (
                  <div key={i} className={`flex items-center gap-3 rounded-lg px-4 py-3 ${m.bonus ? "border border-[#C13B54]/40 bg-[#C13B54]/5" : "border border-[var(--line)] bg-[#f5f8f6]"}`}>
                    <span className={`text-xs font-bold flex-shrink-0 w-5 ${m.bonus ? "text-[#C13B54]" : "text-[var(--muted)]"}`}>{m.num}</span>
                    <span className={`text-sm leading-snug ${m.bonus ? "text-[var(--ink)] font-semibold" : "text-[#3a4649]"}`}>{m.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 md:py-16 bg-[#F3F8F1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold text-[var(--ink)] mb-3">{s.number}</p>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="ds-display mt-12 text-2xl md:text-3xl border-t border-[#E1E7E9] pt-10 max-w-2xl">
            Expert GTM strategy usually comes with a five-figure price tag. The GTM Builder gives you the same architectural rigor for a fraction of the cost.
          </motion.h2>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-12 md:py-16 bg-[#E7F0E3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="ds-eyebrow mb-4">Who It's For</p>
          <h2 className="ds-display text-3xl md:text-4xl mb-10">Built for founders who need to move fast</h2>
          <div className="space-y-5">
            {whoFor.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4">
                <div className="w-[3px] self-stretch rounded-full bg-[#C13B54]/50 flex-shrink-0 mt-1" />
                <p className="text-[var(--muted)] text-base leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* PRODUCT BUILDER - COMING SOON */}
      <section className="py-12 md:py-16 bg-[#F3F8F1]">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-md border border-[#E1E7E9] p-8 md:p-10 bg-white text-center">
            <h3 className="ds-display text-2xl md:text-3xl mb-3">Product Builder — Coming Soon</h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              A self-guided system for founders actively building a product - same format as the GTM Builder. Join the waitlist to be first in when it launches.
            </p>
            {waitlistSubmitted ? (
              <p className="text-[#C13B54] text-sm font-semibold">You're on the list. We'll be in touch when it launches.</p>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-sm border border-[#E1E7E9] focus:outline-none focus:border-[#C13B54]/40"
                />
                <button
                  type="submit"
                  className="ds-btn ds-btn-solid inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Join the waitlist
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>


      {/* FAQs */}
      <section className="py-12 md:py-16 bg-[#E7F0E3]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="ds-eyebrow mb-4">FAQs</p>
          <h2 className="ds-display text-2xl md:text-3xl mb-8">Frequently Asked Questions</h2>
          {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
        </div>
      </section>

    </div>
  );
}