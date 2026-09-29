import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import FAQItem from "../components/shared/FAQItem";

const modules = [
  {
    num: "01",
    title: "Market Analysis & Sizing",
    image:
      "https://media.base44.com/images/public/6995347084af76a3154d3f6b/c99030861_Module1_MarketAnalysis.png",
    whatYouBuild:
      "TAM, SAM, and SOM calculations; bottom-up market sizing models; PESTEL analysis; Porter's 5 Forces; SWOT and TOWS strategic matrices; and customer interview logging.",
    aiPrompts: "TAM/SAM/SOM Estimator, Bottom-Up Sizing Model, Strategic Priorities Advisor.",
  },
  {
    num: "02",
    title: "Segmentation & Targeting",
    image:
      "https://media.base44.com/images/public/6995347084af76a3154d3f6b/e8ecfad9b_Module2_SegmentationModelandTargeting.png",
    whatYouBuild:
      "Addressable customer segmentation models, segment scoring and prioritization criteria, and detailed priority segment profiles.",
    aiPrompts:
      "Customer Segmentation Model, Segment Scoring & Prioritization, Segmentation Assumptions Validator.",
  },
  {
    num: "03",
    title: "Ideal Customer Profile (ICP)",
    image:
      "https://media.base44.com/images/public/6995347084af76a3154d3f6b/5b2c4562c_Module3_ICP.png",
    whatYouBuild:
      "Single-sentence ICP hypotheses across B2B, B2C, or B2G; firmographic and technographic boundary boxes; the qualification layer separating firmographics from buying signals; \"Why Now\" buying triggers; buying committee decision journeys; objection and proof mapping; and a scored qualification scorecard with decision rules (e.g., pursue if must-haves met and score is 8+).",
    aiPrompts: "ICP Synthesiser and Validator Prompt.",
  },
  {
    num: "04",
    title: "Competitive Analysis",
    image:
      "https://media.base44.com/images/public/6995347084af76a3154d3f6b/7938864a9_Module4_CompetitorAnalysis.png",
    whatYouBuild:
      "Direct and alternative competitor mapping; side-by-side Competitor Matrix across consistent criteria; deep-dive Competitor Snapshots that convert into sales battlecards; and a VRIO Analysis framework to verify defensible advantages.",
    aiPrompts:
      "Competitive Landscape Identifier, Competitor Matrix Builder, VRIO Analysis Agent.",
  },
  {
    num: "05",
    title: "Positioning & Messaging Architecture",
    image:
      "https://media.base44.com/images/public/6995347084af76a3154d3f6b/ae04a5794_Module5_PositioningMessaging.png",
    whatYouBuild:
      "Core Positioning Framework; Value Proposition Canvas mapped to Jobs-to-be-Done (pains, gains, jobs); Messaging Framework with headlines, subheads, proof points, and objection responses; and the Evergreen Campaign Messaging House for website and sales consistency.",
    aiPrompts:
      "Positioning Statement Generator, Value Pillar Generator, Messaging Tester & Evaluator, JTBD Fit Analyser.",
  },
  {
    num: "06",
    title: "Brand Strategy & Foundations",
    image:
      "https://media.base44.com/images/public/6995347084af76a3154d3f6b/046f4caa8_Module6_Brand.png",
    whatYouBuild:
      "Complete brand foundation covering purpose, mission, vision, and values; brand personality profile across six dimensions; voice and tone guide specific enough for freelance copywriters; and visual identity direction to brief designers.",
    aiPrompts:
      "Brand Foundation Generator, Brand Personality Profile, Brand Voice and Tone Guide.",
  },
  {
    num: "07",
    title: "Launch Planning & Pricing Strategy",
    image:
      "https://media.base44.com/images/public/6995347084af76a3154d3f6b/5d643abd3_Module7_LaunchTimeline.png",
    whatYouBuild:
      "Full launch planning document covering readiness assessments, phased timelines, channel strategy, metrics frameworks, and execution checklists; and structured launch pricing frameworks to evaluate pricing model options and competitive context.",
    aiPrompts:
      "Launch Strategy Advisor, Launch Timeline Builder, Launch Channel Strategist, Pricing Model Advisor, Launch Price Setter.",
  },
  {
    num: "\u2605",
    title: "Investor & Executive One-Page Snapshot",
    bonus: true,
    image:
      "https://media.base44.com/images/public/6995347084af76a3154d3f6b/a643532a9_Module8_InvestorSnapshot.png",
    whatYouBuild:
      "Distill your entire commercial foundation into an executive summary you can communicate in under two minutes built for pitch decks, advisory meetings, and board updates.",
    aiPrompts:
      "The GTM Shadow Board Reviewer (stress-test your plan against three critical AI personas: a cynical VC, a risk-averse lawyer, and a burned customer).",
    aiPromptsLabel: "Bonus AI Prompt",
  },
];

const realityCards = [
  {
    title: "Signals Over Demographics",
    desc: "Two companies can look identical on paper, but one closes in three weeks while the other stalls for six months. This system builds the qualification layer to filter out time-wasters before you waste sales cycles.",
  },
  {
    title: "Defensible Positioning",
    desc: "Ground your features in real customer jobs, pains, and gains so economic decision-makers understand why you displace current alternatives within 30 seconds.",
  },
  {
    title: "Execution Alignment",
    desc: "Walk away with tangible working documents to brief copywriters, designers, sales reps, and investors with zero translation loss.",
  },
];

const pricingTiers = [
  {
    name: "Self-Directed GTM",
    price: "AUD $349",
    priceNote: "One-time · Instant access",
    features: [
      "Duplicate the complete system directly into your own Notion workspace",
      "All 7 sequenced modules with working templates, frameworks, and databases",
      "34 structured AI analytical prompts in JSON format",
      "The 1-Page Investor & Executive Snapshot template",
      "Estimated completion time: 2–4 weeks working at your own pace",
    ],
    cta: "Get the Workspace AUD $349",
    product: "gtm",
    featured: false,
  },
  {
    name: "Workspace + Strategy Review",
    price: "AUD $1,250",
    priceNote: "One-time · Workspace + expert review",
    features: [
      "The complete Self-Directed GTM workspace",
      "Asynchronous Deep-Dive Review: Toni personally reviews your completed Notion system, customer discovery logs, and draft positioning",
      "60-Minute Pressure-Test Session: A 1-on-1 strategy call to stress-test your pricing, interrogate pilot terms, and refine your launch motions",
    ],
    cta: "Purchase with Strategy Review AUD $1,250",
    product: "strategy_review",
    featured: true,
  },
];

const faqs = [
  {
    q: "Is this just a basic Notion template?",
    a: "No. It is a fully sequenced commercial operating system with interactive databases, scoring formulas, structured frameworks, and 34 specialized AI prompts embedded directly into each step.",
  },
  {
    q: "How are the 34 AI prompts used?",
    a: "The prompts are provided in structured JSON format throughout the workspace. Rather than generating generic marketing text, they act as role-specific sparring partners such as a Bottom-Up Market Sizing Model, VRIO Analysis Agent, and Launch Price Setter to give you strong first drafts that you refine with your market knowledge.",
  },
  {
    q: "How long does it take to complete?",
    a: "Teams typically work through the 7 modules over 2 to 4 weeks at their own pace. Because each section builds directly on the previous one, you establish defensible foundations step by step.",
  },
  {
    q: "Can our entire team collaborate in it?",
    a: "Yes. You duplicate the entire system directly into your company's Notion workspace, allowing co-founders, product leads, and marketing hires to build and execute together.",
  },
];

export default function BuyTheFrameworks() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Self-Directed GTM | Notion Commercialisation Workspace";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "A structured Notion system that builds the commercial foundations early-stage products miss from market sizing and ICP qualification to pricing, messaging, and launch execution."
      );
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
    <div className="ds-page">
      {/* HERO */}
      <section className="py-16 md:py-24 bg-[#F3F8F1]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C13B54] mb-5">
              Notion Commercialisation Workspace
            </p>
            <h1 className="ds-display text-4xl md:text-5xl lg:text-6xl mb-6">Self-Directed GTM</h1>
            <p className="text-[#3a4649] text-lg md:text-xl leading-relaxed mb-6">
              Built on twenty-five years of B2B product commercialisation, this workspace puts the
              analytical frameworks used by enterprise consultancies directly into your hands.
            </p>
            <p className="text-[#3a4649] text-base leading-relaxed mb-8 max-w-2xl">
              Work step-by-step through seven sequenced modules, then use 34 structured AI sparring
              prompts to synthesise your findings and build a defensible launch plan. Think of it as
              a crash-course MBA in commercial strategy, where your product is the case study.
            </p>
            <p className="text-[#3a4649] text-base leading-relaxed mb-10 max-w-2xl">
              There is a gap between a functional product and a product that actually sells.
              Self-Directed GTM is a founder-friendly operating system designed to close that gap.
              Instead of guessing in blank documents or spending five figures on an agency, you work
              through seven sequenced modules and 34 structured AI prompts to build an
              investment-grade commercial plan in your own Notion workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => scrollTo("pricing")}
                className="ds-btn ds-btn-solid inline-flex items-center justify-center gap-2"
              >
                Get the Workspace AUD $349
              </button>
              <button
                onClick={() => scrollTo("modules")}
                className="ds-btn ds-btn-outline inline-flex items-center justify-center gap-2"
              >
                Explore the Modules ↓
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-10 md:py-12 bg-[#E7F0E3]">
        <div className="relative max-w-[680px] mx-auto px-6">
          <span className="absolute top-4 left-4 w-5 h-5 border-t-[2.5px] border-l-[2.5px] border-[#C13B54]" />
          <span className="absolute top-4 right-4 w-5 h-5 border-t-[2.5px] border-r-[2.5px] border-[#C13B54]" />
          <span className="absolute bottom-0 left-4 w-5 h-5 border-b-[2.5px] border-l-[2.5px] border-[#C13B54]" />
          <span className="absolute bottom-0 right-4 w-5 h-5 border-b-[2.5px] border-r-[2.5px] border-[#C13B54]" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-[0_12px_44px_rgba(20,45,35,0.09)] px-6 py-6 md:px-10 md:py-7"
          >
            <span className="ds-display text-[#C13B54] text-4xl leading-none block mb-1">&ldquo;</span>
            <blockquote className="text-[var(--ink)] text-sm md:text-base leading-relaxed italic max-w-[52ch]">
              Figuring out an international GTM strategy is challenging, but The GTM Builder made it
              clear and helped us shape our way step by step. Toni is incredibly helpful,
              professional, and always brings great energy.
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-[2.5px] bg-[#C13B54]" />
              <div>
                <p className="text-sm font-bold text-[var(--ink)]">Guy Jakobi</p>
                <p className="text-xs text-[var(--muted)]">Managing Director, Pacific Grow</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODULES & WORKING DELIVERABLES */}
      <section id="modules" className="scroll-mt-24 py-16 md:py-24 bg-[#F3F8F1]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="ds-display text-3xl md:text-4xl mb-4">The Modules & Working Deliverables</h2>
          <p className="text-[#3a4649] text-base md:text-lg leading-relaxed mb-12 md:mb-16 max-w-2xl">
            Seven sequenced modules covering the exact documents, models, and qualification tools
            needed to bring your product to market.
          </p>
          <div className="space-y-16 md:space-y-24">
            {modules.map((m, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={reversed ? "md:order-2" : ""}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-sm font-bold ${m.bonus ? "text-[#C13B54]" : "text-[var(--muted)]"}`}
                      >
                        {m.num}
                      </span>
                      <span className="w-8 h-px bg-[var(--line)]" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                        {m.bonus ? "Bonus" : "Module"}
                      </span>
                    </div>
                    <h3 className="ds-display text-2xl md:text-3xl mb-5">{m.title}</h3>
                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[var(--ink)] mb-1.5">
                          What you build
                        </p>
                        <p className="text-[#3a4649] text-sm md:text-base leading-relaxed">
                          {m.whatYouBuild}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[var(--ink)] mb-1.5">
                          {m.aiPromptsLabel || "Embedded AI Prompts"}
                        </p>
                        <p className="text-[#3a4649] text-sm md:text-base leading-relaxed">
                          {m.aiPrompts}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={reversed ? "md:order-1" : ""}
                  >
                    {m.image ? (
                      <div
                        className={`rounded-lg border ${m.bonus ? "border-[#C13B54]/40" : "border-[var(--line)]"} overflow-hidden bg-white`}
                      >
                        <img
                          src={m.image}
                          alt={`${m.title} Notion screenshot`}
                          className="w-full h-auto block"
                        />
                      </div>
                    ) : (
                      <div
                        className={`rounded-lg border ${m.bonus ? "border-[#C13B54]/40" : "border-[var(--line)]"} bg-[#f5f8f6] aspect-[4/3] flex flex-col items-center justify-center gap-3 p-8`}
                      >
                        <div className="w-10 h-10 rounded-md border border-[var(--line)] bg-white flex items-center justify-center">
                          <span className="text-[var(--muted)] text-base font-bold">{m.num}</span>
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] text-center">
                          {m.bonus ? "Bonus Snapshot" : `Section ${m.num}`} Notion screenshot
                        </p>
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REALITY CONTEXT */}
      <section className="py-16 md:py-24 bg-[#E7F0E3]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="ds-display text-3xl md:text-4xl mb-4 max-w-2xl">
            Commercialisation rarely fails dramatically. It stalls quietly.
          </h2>
          <p className="text-[#3a4649] text-base md:text-lg leading-relaxed mb-12 md:mb-16 max-w-2xl">
            Founders who struggle with commercialization rarely fail dramatically they fail
            gradually. They burn through lead lists that go nowhere, build case studies for users
            who don't refer anyone, and hire salespeople who can't explain who they are selling to.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realityCards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-md border border-[var(--line)] bg-white p-7 md:p-8"
              >
                <h3 className="ds-display text-lg md:text-xl mb-3">{c.title}</h3>
                <p className="text-[#3a4649] text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-mt-24 py-16 md:py-24 bg-[#F3F8F1]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="ds-display text-3xl md:text-4xl mb-12 text-center">Access the Workspace</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-md ${tier.featured ? "border-2 border-[#C13B54]" : "border border-[var(--line)]"} overflow-hidden bg-white flex flex-col`}
              >
                <div
                  className={`p-8 md:p-10 border-b ${tier.featured ? "border-[#C13B54]/20" : "border-[var(--line)]"}`}
                  style={tier.featured ? { background: "rgba(193,59,84,0.04)" } : undefined}
                >
                  <h3 className="ds-display text-2xl md:text-3xl mb-1">{tier.name}</h3>
                  <p className="text-[var(--ink)] font-bold text-3xl mb-1 mt-4">{tier.price}</p>
                  <p className="text-[var(--muted)] text-xs">{tier.priceNote}</p>
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-[#C13B54] font-bold leading-relaxed flex-shrink-0 mt-0.5">
                          &bull;
                        </span>
                        <p className="text-[#3a4649] text-sm leading-relaxed">{f}</p>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleBuy(tier.product)}
                    disabled={loading === tier.product}
                    className="ds-btn ds-btn-solid inline-flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading === tier.product ? "Redirecting..." : tier.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#E7F0E3]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="ds-display text-3xl md:text-4xl mb-8">Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <FAQItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
      </section>
    </div>
  );
}