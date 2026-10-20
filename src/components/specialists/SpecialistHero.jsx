import React from "react";
import { motion } from "framer-motion";

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function SpecialistHero() {
  return (
    <section
      className="ds-band ds-grid-light"
      style={{ paddingTop: "120px", paddingBottom: "96px" }}
    >
      <div className="ds-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          >
            <p className="ds-eyebrow mb-5">For Australian specialist practices</p>
            <h1 className="ds-display text-[clamp(34px,5.2vw,60px)] leading-[1.02] mb-6">
              Is your practice website clear, credible and compliant?
            </h1>
            <p className="text-base md:text-lg text-[#3a4649] leading-relaxed max-w-xl mb-10">
              I review specialist practice websites against the Ahpra advertising
              guidelines, the TGA Advertising Code and the Privacy Act, then fix
              what I find or build a new one. My background is thirteen years in
              medical device, pharmaceutical and health technology companies,
              across sales, marketing and product commercialisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollTo("contact")}
                className="ds-btn ds-btn-solid w-full sm:w-auto text-center"
              >
                Check my website
              </button>
              <button
                onClick={scrollTo("how-it-works")}
                className="ds-btn ds-btn-outline w-full sm:w-auto text-center"
              >
                How I work
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.1, 0, 1] }}
          >
            <div
              className="bg-white border border-[var(--line)] rounded-md p-8 lg:p-9 relative"
              style={{ borderLeft: "4px solid var(--accent)" }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-[var(--accent)] px-3 py-1.5 rounded mb-5">
                From 10 Dec 2026
              </span>
              <h3 className="font-bold text-[var(--ink)] text-xl md:text-2xl leading-snug mb-4">
                New privacy obligations take effect on 10 December 2026
              </h3>
              <p className="text-[#3a4649] text-sm md:text-base leading-relaxed mb-4">
                Amendments to the Australian Privacy Principles (APPs 1.7 to 1.9)
                require organisations that use automated or AI-assisted
                decision-making to disclose it in their privacy policy. For
                specialist practices, this may include AI scribes, online triage
                and automated booking systems.
              </p>
              <p className="text-[#3a4649] text-sm md:text-base leading-relaxed mb-6">
                Health service providers are not covered by the small business
                exemption. In a review of 17 plastic surgery websites in October
                2026, I could not locate a privacy policy on eight.
              </p>
              <button
                onClick={scrollTo("contact")}
                className="ds-textlink text-sm"
              >
                Check whether yours is ready
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}