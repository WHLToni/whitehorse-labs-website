import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createPageUrl } from "../../utils";

export default function ICPCallout() {
  return (
    <section className="ds-band ds-band--glass">
      <div className="ds-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="ds-display text-[clamp(28px,4vw,44px)] text-[var(--ink)] mt-4 mb-5">
            Schedule an Initial Discussion
          </h2>
          <p className="text-[#3a4649] text-base leading-relaxed max-w-xl mb-7">
            A 30-minute introductory conversation to review your current product milestone, commercial objectives, and whether a structured engagement aligns with your timeline.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="ds-btn ds-btn-solid inline-flex items-center gap-2"
          >
            Book a 30-Minute Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}