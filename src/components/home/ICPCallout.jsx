import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createPageUrl } from "../../utils";
import { usePricing } from "../shared/usePricing";

export default function ICPCallout() {
  const pricing = usePricing();
  return (
    <section className="py-20 md:py-28 bg-[#F0F7FA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 md:divide-x md:divide-[#e5e5e5]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <p className="text-base font-semibold uppercase tracking-widest text-[#b3475c] mb-2">Free Resource</p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a0a0a]">
              Nail your foundations for free.
            </h3>
            <p className="text-[#666] text-sm mt-2 leading-relaxed max-w-lg">
              Not sure who your ideal customer is? Our ICP Framework tool gets you to a clear, usable definition in under 15 minutes.
            </p>
            <Link
              to="/ICPTool"
              className="mt-6 self-start inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-sm border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors"
            >
              Get the ICP Framework →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:pl-8"
          >
            <p className="text-base font-semibold uppercase tracking-widest text-[#b3475c] mb-2">
              Ready to Start?
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a0a0a]">
              Book a 30-minute call.
            </h3>
            <p className="text-[#666] text-sm mt-2 leading-relaxed max-w-lg">
              We'll work out where you are, what you need, and whether we're a good fit.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="mt-6 self-start inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm bg-[#b3475c] hover:bg-[#96394c] transition-colors"
            >
              Book a Call →
            </Link>
            <p className="mt-4 text-sm text-[#555] italic">
              Not ready for a call?{" "}
              <Link
                to={createPageUrl("BuyTheFrameworks")}
                className="hover:text-[#0a0a0a] transition-colors"
              >
                Start with the DIY Toolkits{pricing ? ` from ${pricing.from}` : ""} →
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}