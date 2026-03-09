import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const serviceCards = [
  {
    name: "The Diagnostic",
    subheading: "The starting point. Understand your market, your buyer and where you fit.",
    price: "$6,000",
    duration: "2 Weeks",
    deliverables: [
      "Market segmentation model with target prioritisation",
      "Ideal Customer Profile (ICP) definition — firmographic, behavioural and psychographic criteria",
      "Competitive analysis and landscape map",
      "Problem definition and product-market fit assessment",
      "Optional: customer and prospect interviews — hypothesis design, question writing, facilitation and insight analysis",
      "Strategy document and presentation",
    ],
    bestFor: "Funded startups building commercial foundations before scaling. Pre-exit owners who need to sharpen positioning before a sale. Any team that suspects they're talking to the wrong buyers or saying the wrong things.",
    ctaLabel: "Book The Diagnostic →",
    ctaPage: "Contact",
  },
  {
    name: "GTM Strategy",
    subheading: "Full go-to-market strategy — positioning, messaging and brand foundations.",
    price: "$12,000",
    duration: "4 Weeks",
    deliverables: [
      "Everything in The Diagnostic",
      "Positioning framework and messaging architecture",
      "Value proposition with proof points",
      "Brand foundations — voice, tone and visual direction",
      "Sales narrative and talk tracks",
      "GTM strategy with channel recommendations",
    ],
    bestFor: "Startups preparing for launch. Scale-ups entering new markets. Innovation teams building internal alignment around a new product.",
    ctaLabel: "Book GTM Strategy →",
    ctaPage: "Contact",
  },
  {
    name: "Launch Architecture",
    subheading: "Full GTM strategy plus the execution assets to go to market with confidence.",
    price: "$20,000",
    duration: "6 Weeks",
    deliverables: [
      "Everything in GTM Strategy",
      "Flagship sales deck — designed and ready to present",
      "Sales enablement toolkit — competitive battlecards, persona cards and talk tracks",
      "One hero asset — whitepaper, case study or landing page",
      "Full brand guide — voice, tone and visual direction",
      "Launch execution plan",
    ],
    bestFor: "Funded startups preparing for a major launch. Pre-exit owners modernising their brand. In-house product teams launching new products inside larger organisations.",
    ctaLabel: "Book Launch Architecture →",
    ctaPage: "Contact",
  },
  {
    name: "Pre-Exit Readiness",
    subheading: "Commercial systems, brand and GTM foundations built for acquisition.",
    price: "Custom",
    duration: "8–12 Weeks",
    deliverables: [
      "Exit readiness audit — product, GTM, operations and brand",
      "Digitisation and AI integration roadmap",
      "GTM modernisation — positioning, messaging and sales materials",
      "Buyer-facing materials — investment deck, executive summary and case studies",
      "Brand refresh aligned to acquisition positioning",
    ],
    bestFor: "Business owners planning to sell or step back in the next 3–5 years. Particularly valuable for owners who need to digitise, systemise and strengthen the brand to increase valuation.",
    ctaLabel: "Book a Call →",
    ctaPage: "Contact",
  },
];

const steps = [
  {
    num: "01",
    title: "Book Your Package",
    desc: "Choose your service and confirm scope - I'll share a questionnaire to help with this. For custom engagements, we start with a 60-minute call to define the brief.",
  },
  {
    num: "02",
    title: "Kickoff",
    desc: "You get access to a client portal in Notion with all frameworks, templates and project tracking. We align on objectives, timeline and deliverables.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Structured sprints with regular check-ins. You'll always know where we are and what's coming next. No daily standups, no unnecessary meetings.",
  },
  {
    num: "04",
    title: "Delivery",
    desc: "Final deliverables, a fully populated portal and a clear handoff plan so your team can execute with confidence.",
  },
];

function ServiceCard({ name, subheading, price, duration, deliverables, bestFor, ctaLabel, ctaPage, darkBg = false, priceColor = "#e8195a", outputLine = null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl p-8 md:p-12 ${darkBg ? "bg-[#0a0a0a] border border-[#222]" : "bg-white border border-[#e5e5e5] shadow-sm"}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left: Title and Price */}
        <div className="lg:col-span-1">
          <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${darkBg ? "text-white" : "text-[#0a0a0a]"}`}>
            {name}
          </h3>
          <p className={`italic text-base mb-6 ${darkBg ? "text-[#ccc]" : "text-[#666]"}`}>
            {subheading}
          </p>
          <div className="mb-8">
            <p className="text-lg font-bold" style={{ color: priceColor }}>
              {price} · {duration}
            </p>
          </div>
        </div>

        {/* Middle: Deliverables */}
        <div className="lg:col-span-1">
          <p className={`font-bold text-sm mb-4 uppercase tracking-widest ${darkBg ? "text-[#999]" : "text-[#0a0a0a]"}`}>
            What you get:
          </p>
          <ul className="space-y-2">
            {deliverables.map((item, i) => (
              <li key={i} className={`text-sm leading-relaxed flex gap-3 ${darkBg ? "text-[#aaa]" : "text-[#555]"}`}>
                <span className="text-[#e8195a] font-bold flex-shrink-0" aria-hidden="true">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Best For + CTA */}
        <div className="lg:col-span-1 flex flex-col justify-between">
          <div className="mb-8">
            <p className={`font-bold text-sm mb-3 uppercase tracking-widest ${darkBg ? "text-[#999]" : "text-[#0a0a0a]"}`}>
              Best for:
            </p>
            <p className={`text-sm leading-relaxed ${darkBg ? "text-[#999]" : "text-[#666]"}`}>
              {bestFor}
            </p>
            {outputLine && (
              <p className="text-sm mt-4 leading-relaxed" style={{ color: priceColor }}>
                {outputLine}
              </p>
            )}
          </div>
          <div>
            <Link
              to={createPageUrl(ctaPage)}
              className={`inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg transition-all ${
                darkBg
                  ? "border border-white/20 text-white hover:border-[#e8195a] hover:text-[#e8195a]"
                  : "border border-[#e8195a] text-[#e8195a] hover:bg-[#e8195a]/5"
              }`}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  useEffect(() => {
    document.title = "Services & Pricing — Whitehorse Labs";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Fixed-scope GTM services from $6K. The Diagnostic, GTM Strategy, Launch Architecture and Pre-Exit Readiness. No retainers, no hourly billing.");
  }, []);

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="py-12 md:py-16 bg-[#f7f7f8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Services & Pricing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#0a0a0a]">
              Fixed Scope. Fixed Price. Delivered in Weeks.
            </h1>
            <p className="text-base md:text-lg text-[#666] max-w-2xl leading-relaxed mx-auto text-center">
              No retainers or open-ended hourly billing. Every engagement starts with a defined scope, a clear price and a delivery timeline - so you know what you're committing to before we start. Adjustments are always agreed upfront, never a surprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE COMMERCIALISATION STACK */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-8 text-center">
            The Commercialisation Stack
          </p>
          <div className="space-y-6">
            {serviceCards.map((card, i) => (
              <ServiceCard key={card.name} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ALSO AVAILABLE SECTION */}
      <section className="py-10 md:py-12 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#e8195a]/5 blur-[120px]" />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#666] mb-4 text-center">
            Also Available
          </p>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#d4678c] mb-12 text-center">
            Pre-Build
          </p>
          <ServiceCard
            name="The MVP Sprint"
            subheading="You have a problem worth solving but no product yet."
            price="Custom"
            duration="Scope dependent"
            priceColor="#d4678c"
            deliverables={[
              "Problem definition and opportunity framing",
              "Solution design and concept validation",
              "Rapid MVP build using modern prototyping tools",
              "Market validation framework — ready for real-world testing",
            ]}
            bestFor="Pre-MVP founders who need to validate before they invest in a full build. Founders who have built the wrong thing and need to reframe and rebuild quickly."
            ctaLabel="Book a Call →"
            ctaPage="Contact"
            darkBg={true}
          />
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-10 md:py-12 bg-[#f7f7f8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-2">Clear Process. No Surprises.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 border border-[#e5e5e5]"
              >
                <div className="text-3xl font-bold text-[#e8195a] mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">{step.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-sm font-bold text-[#0a0a0a]">
            Payment: 50% upfront, 50% on delivery.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="py-12 md:py-16 bg-[#f7f7f8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Not Ready to Commit?</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-6">
              Get the Frameworks.
            </h2>
            <p className="text-base md:text-lg text-[#666] max-w-2xl mx-auto leading-relaxed mb-8">
              The exact frameworks, models and templates I use with every client — available as self-serve Notion portals with AI prompts included. The GTM OS for commercialisation, the Build OS for development. DIY your build and launch, then come back when you need execution support.
            </p>
            <Link
              to={createPageUrl("GetTheFrameworks")}
              className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm"
            >
              Get the Frameworks →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}