import React from "react";
import { motion } from "framer-motion";

export default function TheMaths() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-6 lg:px-10"
      >
        <div className="w-10 h-[3px] bg-[#b3475c] mb-6" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#888] mb-3">The Maths</p>
        <p className="text-base md:text-lg text-[#444] leading-relaxed">
          What's your average job worth? If it's $1,500 or more, one recovered job pays for months
          of Quote Chaser. Win back one job a quarter and the service has paid for itself - everything
          after that is profit you were previously donating to your competitors.
        </p>
      </motion.div>
    </section>
  );
}