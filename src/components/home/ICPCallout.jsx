import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createPageUrl } from "../../utils";
import { usePricing } from "../shared/usePricing";

export default function ICPCallout() {
  const pricing = usePricing();
  return (
    <section className="ds-band ds-band--glass">
      <div className="ds-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 md:divide-x md:divide-[var(--line)]">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col">
            <span className="ds-eyebrow mb-2">Free Resource</span>
            <h3 className="ds-display text-[clamp(24px,3vw,36px)] text-[var(--ink)] mt-2">
              Nail your foundations for free.
            </h3>
            <p className="text-[var(--muted)] text-sm mt-2 leading-relaxed max-w-lg">
              Not sure who your ideal customer is? Our ICP Framework tool gets you to a clear, usable definition in under 15 minutes.
            </p>
            <Link to="/ICPTool" className="ds-btn ds-btn-outline mt-6 self-start inline-flex items-center gap-2">
              Get the ICP Framework →
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col md:pl-8">
            <span className="ds-eyebrow mb-2">Ready to Start?</span>
            <h3 className="ds-display text-[clamp(24px,3vw,36px)] text-[var(--ink)] mt-2">
              Book a 30-minute call.
            </h3>
            <p className="text-[var(--muted)] text-sm mt-2 leading-relaxed max-w-lg">
              We'll work out where you are, what you need, and whether we're a good fit.
            </p>
            <Link to={createPageUrl("Contact")} className="ds-btn ds-btn-solid mt-6 self-start inline-flex items-center gap-2">
              Book a Call →
            </Link>
            <p className="mt-4 text-sm text-[#555] italic">
              Not ready for a call?{" "}
              <Link to={createPageUrl("BuyTheFrameworks")} className="hover:text-[var(--ink)] transition-colors">
                Start with the DIY Toolkits{pricing ? ` from ${pricing.from}` : ""} →
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}