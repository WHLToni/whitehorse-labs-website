import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="ds-band ds-band--glass ds-grid-light relative overflow-hidden" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      <div className="ds-wrap">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}>
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

        </div>
      </div>
    </section>
  );
}