import React from "react";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="py-10 md:py-12 bg-[#F0F7FA]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-6 lg:px-10"
      >
        <div className="w-10 h-[3px] bg-[#b3475c] mb-6" />
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-8">
          Of the last ten quotes you sent, how many did you follow up?
        </h2>
        <p className="text-base md:text-lg text-[#444] leading-relaxed mb-6">
          Right now, probably none - and fair enough. The industry's flat out, the work comes to you, and chasing someone who asked YOU for the quote feels backwards.
        </p>
        <p className="text-xl md:text-2xl italic text-[#b3475c] font-medium leading-relaxed mb-6">
          "If they want it, they'll call."
        </p>
        <p className="text-base md:text-lg text-[#444] leading-relaxed mb-8">
          But <strong>flat out doesn't last forever.</strong> When the phone slows down, the businesses that stay busy are the ones that spent the good times filling the pipeline and stacking up five-star reviews. If you're carrying a crew and a payroll, <strong>a quiet month isn't just annoying - it's expensive.</strong>
        </p>
        <p className="text-lg md:text-xl font-semibold text-[#0a0a0a] leading-relaxed">
          Quote Chaser does the pipeline work for you, every week, while you're busy doing the real work. Here's how:
        </p>
      </motion.div>
    </section>
  );
}