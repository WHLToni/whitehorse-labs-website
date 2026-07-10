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
          Think about the last ten quotes you sent. How many did you follow up? If the honest answer
          is "none, I'm too flat out" — you're normal. You're also leaving paid work on the table
          every single week, and handing it to whoever calls the customer back first.
        </p>
      </motion.div>
    </section>
  );
}