import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  { title: "Consultant", body: "Diagnoses the problem, hands you a report and exits — the implementation is up to you.", highlight: false },
  { title: "Contractor", body: "Executes what you brief them on — no strategy and ultimately no real ownership.", highlight: false },
  { title: "Fractional GTM", body: "Embedded senior expertise. Owns the outcome — strategy and execution — without the six-figure hire.", highlight: true },
];

export default function HeroSection() {
  return (
    <section className="ds-band ds-band--glass ds-grid-light relative overflow-hidden" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      <div className="ds-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}>
            <span className="ds-eyebrow">Commercialization &amp; GTM · Regulated &amp; Complex Products</span>
            <h1 className="ds-display text-[clamp(34px,5.5vw,68px)] text-[var(--ink)] mt-6 mb-8 leading-[1.05]">
              Translating complex technical products into viable commercial businesses.
            </h1>
            <p className="text-base md:text-lg text-[#3a4649] leading-relaxed max-w-xl mb-4">
              Strategic direction on positioning, pricing models, and initial market entry for engineering, climate tech, and regulated B2B software across APAC and North America.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link to={createPageUrl("Contact")} className="ds-btn ds-btn-solid inline-flex items-center gap-2">
                Discuss an Engagement <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#engagement-models" onClick={(e) => { e.preventDefault(); document.getElementById("engagement-models")?.scrollIntoView({ behavior: "smooth" }); }} className="ds-btn ds-btn-outline inline-flex items-center gap-2">
                View Engagement Models
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0, 1] }} className="hidden lg:block">
            <div className="rounded-lg p-10 relative overflow-hidden border border-white/10" style={{ background: "#0e0e0e" }}>
              <p className="text-white text-sm font-bold uppercase tracking-widest mb-8 ds-display">
                Fractional vs Consultant vs Contractor
              </p>
              <div className="space-y-5">
                {comparisons.map((item, i) => (
                  <div key={item.title}
                    className={`p-4 rounded-md ${item.highlight
                      ? "bg-[#C13B54]/10 border-l-2 border-[#C13B54]"
                      : "border-b border-white/10 rounded-none"}`}>
                    <p className="text-base font-bold mb-1.5"
                       style={{ color: item.highlight ? "#F06A85" : "#c9c9c9" }}>
                      {item.title}
                    </p>
                    <p className="text-[15px] leading-relaxed text-white/85">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}