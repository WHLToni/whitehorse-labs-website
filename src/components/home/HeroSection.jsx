import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  {
    title: "Consultant",
    body: "Diagnoses the problem, hands you a report, exits. Implementation is on you.",
    highlight: false,
  },
  {
    title: "Contractor",
    body: "Executes what you brief them on. No strategy, no ownership.",
    highlight: false,
  },
  {
    title: "Fractional GTM",
    body: "Embedded senior expertise. Owns the outcome — strategy and execution — without the six-figure hire.",
    highlight: true,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-white">
      {/* Subtle gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-[#e8195a]/5 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00C4E0]/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e5e5e5] bg-[#f7f7f8] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#e8195a]" />
              <span className="text-xs font-medium text-[#666] tracking-wide uppercase">
                Fractional GTM · Regulated &amp; Complex Products
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8 text-[#0a0a0a]">
              You've built the product. Now comes the hard part.
            </h1>

            <p className="text-base md:text-lg text-[#555] leading-relaxed max-w-xl mb-4">
              Commercialising a complex product takes more than a GTM strategy. It takes someone who understands the full journey - from product development through to sales. I've worked all of it, across regulated industries where the stakes are high and the buyers are hard to reach.
            </p>
            <p className="text-sm font-semibold text-[#0a0a0a] max-w-xl mb-12 tracking-wide">
              Senior expertise. Fixed scope. Delivered in weeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={createPageUrl("Contact")}
                className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center justify-center gap-2 text-[#555] font-semibold px-8 py-4 rounded-lg text-sm border border-[#e5e5e5] hover:border-[#e8195a]/40 transition-colors"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right side - comparison card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
            className="hidden lg:block"
          >
            <div className="bg-[#0a0a0a] rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#e8195a]/10 blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#00C4E0]/10 blur-[60px]" />
              <div className="relative">
                <p className="text-white text-base font-bold uppercase tracking-widest mb-8">Fractional vs Consultant vs Contractor</p>
                <div className="space-y-6">
                  {comparisons.map((item, i) => (
                    <div key={item.title} className={`pb-6 ${i < comparisons.length - 1 ? "border-b border-white/5" : ""}`}>
                      <p className={`text-sm font-bold mb-1.5 ${item.highlight ? "text-[#e8195a]" : "text-[#888]"}`}>
                        {item.title}
                      </p>
                      <p className="text-[#ccc] text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}