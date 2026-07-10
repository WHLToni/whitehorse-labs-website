import React from "react";
import { motion } from "framer-motion";

export default function WhoBehind() {
  return (
    <section className="py-16 md:py-20 bg-[#F0F7FA]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-6 lg:px-10"
      >
        <div className="w-10 h-[3px] bg-[#b3475c] mb-6" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#888] mb-3">
          Who's Behind This
        </p>
        <p className="text-base md:text-lg text-[#444] leading-relaxed">
          Quote Chaser is a service line of Whitehorse Labs, a Gold Coast consultancy that helps
          businesses stop leaking revenue. Most of our work has been with tech companies — but the
          biggest leak we see is the same everywhere: quotes that never get followed up. Tradies have
          it worst and the least time to fix it, so we built a service that just does it for you.
        </p>
      </motion.div>
    </section>
  );
}