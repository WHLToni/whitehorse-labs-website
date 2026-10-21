import React from "react";
import { motion } from "framer-motion";
import { goToContact, SNAPSHOT_OPTION } from "@/lib/specialistContactCta";

const stages = [
  {
    no: "01",
    label: "Start here",
    title: "Compliance & Conversion Review",
    text: "A detailed review of your website against Ahpra, TGA, privacy and accessibility requirements, with a written report of every finding, ranked by risk. The report is written so your team or your agency can act on it, and includes a 30-minute handover call with whoever will make the changes.",
    price: "From $1,200",
    priceNote: "Credited in full against implementation if you proceed within 60 days.",
  },
  {
    no: "02",
    label: "Then",
    title: "Implementation or a New Website",
    text: "I revise non-compliant copy, brief your lawyer on the privacy policy, improve the enquiry process to increase booked consultations, or build a new compliant website.",
    price: "POA, depending on scope",
  },
  {
    no: "03",
    label: "Ongoing",
    title: "Fractional Marketing Lead",
    text: "Once your website is right, I stay on as your marketing lead: strategy and quarterly planning, compliant copy and creative briefs, patient communications, enquiry management and reporting on consultations booked.",
    price: "POA, depending on scope",
  },
];

export default function TheJourney() {
  return (
    <section className="ds-band ds-band--mist">
      <div className="ds-wrap">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ds-display text-[clamp(26px,4vw,40px)] mb-5 max-w-2xl"
        >
          From compliance to ongoing marketing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#3a4649] text-lg leading-relaxed mb-12 max-w-2xl"
        >
          Most practices start with a compliance review. Once the website is
          right, many stay on for ongoing marketing leadership.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-[var(--line)] rounded-md p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="ds-display text-[var(--pine)] text-4xl leading-none">
                  {s.no}
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-2">
                {s.label}
              </p>
              <h3 className="text-lg font-bold text-[var(--ink)] mb-3">{s.title}</h3>
              <p className="text-[#3a4649] text-sm leading-relaxed flex-1">
                {s.text}
              </p>
              <div className="mt-6 pt-5 border-t border-[var(--line)]">
                <p className="text-base font-bold text-[var(--ink)]">{s.price}</p>
                {s.priceNote && (
                  <p className="text-sm text-[var(--muted)] leading-snug mt-1.5">
                    {s.priceNote}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-md border border-dashed border-[var(--line)] bg-[var(--sage-pale)]"
        >
          <p className="text-[#3a4649] text-sm leading-relaxed">
            <span className="font-bold text-[var(--ink)]">Also available: </span>
            AI adoption for practices, a half-day workshop on appropriate uses of
            AI, the information that should never be entered into AI tools, and
            the new privacy policy disclosure requirements. Optional
            implementation of Claude, configured for your practice's templates
            and workflows. POA, depending on scope.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <button
            onClick={(e) => goToContact(e, { preset: SNAPSHOT_OPTION })}
            className="ds-btn ds-btn-solid"
          >
            Get a free website snapshot
          </button>
        </motion.div>
      </div>
    </section>
  );
}