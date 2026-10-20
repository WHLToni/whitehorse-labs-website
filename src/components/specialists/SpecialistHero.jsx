import React from "react";
import { motion } from "framer-motion";

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function SpecialistHero() {
  return (
    <>
      <section
        className="ds-band ds-band--glass ds-grid-light relative overflow-hidden"
        style={{ paddingTop: "120px", paddingBottom: "88px" }}
      >
        <div className="ds-wrap">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
            >
              <p className="ds-eyebrow mb-5">For specialist practices</p>
              <h1 className="ds-display text-[clamp(32px,5vw,58px)] leading-[1.06] mb-6">
                Marketing leadership for specialist medical practices
              </h1>
              <p className="text-base md:text-lg text-[#3a4649] leading-relaxed max-w-xl mb-10">
                I help specialist practices attract the right patients while meeting their obligations under the Ahpra advertising guidelines, the TGA Advertising Code and the Privacy Act. My background is thirteen years in medical device, pharmaceutical and health technology companies, across sales, marketing, health economics and product commercialisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollTo("contact")}
                  className="ds-btn ds-btn-solid w-full sm:w-auto text-center"
                >
                  Book a 15-minute call
                </button>
                <button
                  onClick={scrollTo("how-it-works")}
                  className="ds-btn ds-btn-outline w-full sm:w-auto text-center"
                >
                  How I work
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--accent)] text-white">
        <div className="ds-wrap py-10 md:py-16">
          <h2
            className="ds-display text-[clamp(24px,3.5vw,36px)] mb-4"
            style={{ color: "#ffffff" }}
          >
            Privacy policy changes take effect on 10 December 2026
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-3xl"
            style={{ color: "#ffffff" }}
          >
            Amendments to the Australian Privacy Principles (APPs 1.7 to 1.9) require organisations that use automated or AI-assisted decision-making to disclose it in their privacy policy. For specialist practices, this may include AI scribes, online triage and automated booking systems. Health service providers are not covered by the small business exemption. In a review of 17 plastic surgery websites in October 2026, I could not locate a privacy policy on eight.
          </p>
        </div>
      </section>
    </>
  );
}