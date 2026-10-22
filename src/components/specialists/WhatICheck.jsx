import React from "react";
import { motion } from "framer-motion";
import "./WhatICheck.css";
import { goToContact, SNAPSHOT_OPTION } from "@/lib/specialistContactCta";

const items = [
  ["Privacy policy (APP 1)", "Whether a policy is published, current, and covers health information, enquiry forms, tracking technologies and, from 10 December, automated decision-making."],
  ["Collection notices (APP 5)", "Whether a notice appears wherever a form collects personal or health information."],
  ["Tracking technologies", "Whether Meta, Google or other tracking pixels operate on pages where patients disclose health information, the subject of the Privacy Commissioner's 2026 determinations against Monash IVF and Medmate."],
  ["Ahpra advertising (section 133)", "Testimonials, before and after images, protected titles and claims."],
  ["TGA requirements", "References to prescription-only medicines, including indirect terms for injectables."],
  ["Cosmetic surgery guidelines", "Registration details, GP referral, pre-operative consultations and the cooling-off period."],
  ["Conversion", "Calls to action, the booking process, mobile performance and enquiry response times."],
  ["Accessibility", "Contrast, heading structure, form labels and image descriptions, assessed against WCAG 2.2 AA."],
];

export default function WhatICheck() {
  return (
    <section className="sp-review">
      <div className="ds-wrap sp-review__grid">
        <div className="sp-review__brief">
          <motion.span
            aria-hidden="true"
            className="sp-review__bar"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.2, 0.75, 0.25, 1], delay: 0.35 }}
          />
          <h2>The full Compliance & Conversion Review</h2>
          <p className="sp-review__intro">
            The full review assesses your website against current regulatory
            requirements, and against how effectively it converts enquiries into
            consultations. The free snapshot checks five of these points.
          </p>
          <button
            type="button"
            className="sp-review__action"
            onClick={(e) => goToContact(e, { preset: SNAPSHOT_OPTION })}
          >
            Get a free website snapshot
          </button>
        </div>

        <div className="sp-review__list">
          {items.map(([title, desc], i) => (
            <motion.article
              key={title}
              className="sp-review__item"
              initial={{ opacity: 0.35, y: 7 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.48,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.07 + i * 0.04,
              }}
            >
              <span aria-hidden="true" className="sp-review__tick">
                ✓
              </span>
              <div>
                <h3 className="sp-review__title">{title}</h3>
                <p className="sp-review__desc">{desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="ds-wrap">
        <p className="sp-review__note">
          Snapshots and reviews identify compliance risks and are not legal
          advice. Privacy policies should be drafted or reviewed by your lawyer.
        </p>
      </div>
    </section>
  );
}