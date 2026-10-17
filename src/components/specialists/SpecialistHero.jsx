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
              <p className="ds-eyebrow mb-5">For medical specialists</p>
              <h1 className="ds-display text-[clamp(32px,5vw,58px)] leading-[1.06] mb-6">
                Marketing that protects your registration and brings in the right patients.
              </h1>
              <p className="text-base md:text-lg text-[#3a4649] leading-relaxed max-w-xl mb-10">
                A senior, part-time marketing lead for specialist practices. I plan and check
                everything, your team publishes it, and your website starts doing its job.
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
                  See how I work
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--accent)] text-white">
        <div className="ds-wrap py-14 md:py-16">
          <h2
            className="ds-display text-[clamp(24px,3.5vw,36px)] mb-4"
            style={{ color: "#ffffff" }}
          >
            Privacy policy rules change on 10 December 2026
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-3xl"
            style={{ color: "#ffffff" }}
          >
            From 10 December, practices that use tools such as AI scribes, online triage or
            automated booking need to explain them in their privacy policy. Health practices are
            covered by the Privacy Act whatever their size, and many specialist websites still
            collect patient details through forms with no privacy policy at all.
          </p>
        </div>
      </section>
    </>
  );
}