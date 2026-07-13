import React from "react";
import { motion } from "framer-motion";

export default function Problem() {
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
        <p className="text-lg md:text-xl text-[#333] leading-relaxed">
          Of the last ten quotes you sent, how many did you follow up?
          <br /><br />
          Right now, probably none - and fair enough. The industry's flat out, the work comes to you, and chasing someone who asked YOU for the quote feels backwards. If they want it, they'll call.
          <br /><br />
          But flat out doesn't last forever. When the phone slows down, the businesses that stay busy are the ones that spent the good times filling the pipeline and stacking up five-star reviews. And if you're carrying a crew and a payroll, a quiet month isn't just annoying - it's expensive.
          <br /><br />
          Quote Chaser does the pipeline work for you, every week, while you're busy doing the real work. Here's how:
        </p>
      </motion.div>
    </section>
  );
}