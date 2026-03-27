import React from "react";
import { motion } from "framer-motion";

export default function ICPCallout() {
  return (
    <section className="py-14 md:py-16 bg-white border-y border-[#e5e5e5]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-2">Free Resource</p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a0a0a]">
              Nail your foundations for free.
            </h3>
            <p className="text-[#666] text-sm mt-2 leading-relaxed max-w-lg">
              Not sure who your ideal customer is? Our ICP Framework tool gets you to a clear, usable definition in under 15 minutes.
            </p>
          </div>
          <a
            href="https://icp-builder-tool.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-sm border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors"
          >
            Get the ICP Framework →
          </a>
        </motion.div>
      </div>
    </section>
  );
}