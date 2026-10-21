import React from "react";
import { motion } from "framer-motion";

import { goToContact, SNAPSHOT_OPTION } from "@/lib/specialistContactCta";

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
              what needs fixing, or build a compliant new site. My background is 13
              years in medical device, pharmaceutical and health technology
              companies, across sales, marketing and product commercialisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={(e) => goToContact(e, { preset: SNAPSHOT_OPTION })}
                className="ds-btn ds-btn-solid w-full sm:w-auto text-center"
              >
                Get a free website snapshot
              </button>
              <button
                onClick={(e) => goToContact(e, { booking: true })}
                className="ds-btn ds-btn-outline w-full sm:w-auto text-center"
              >
                or book a 15-minute call
              </button>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-5 max-w-xl">
              A check of five key compliance points, emailed within three business
              days. No obligation.
            </p>
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
                onClick={(e) => goToContact(e, { preset: SNAPSHOT_OPTION })}
                className="ds-textlink text-sm"
              >
                Get a free website snapshot
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}