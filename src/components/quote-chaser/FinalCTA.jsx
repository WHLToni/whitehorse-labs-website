import React from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto px-6"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Book a 15-minute chat.
        </h2>
        <p className="text-white/55 text-base leading-relaxed mb-8 max-w-md mx-auto">
          No pitch, no obligation. We'll look at your quote book and tell you honestly whether this
          is worth your money.
        </p>
        <div className="max-w-xs sm:max-w-none mx-auto">
          <CTAButton label="Book a 15-minute chat" />
        </div>
      </motion.div>
    </section>
  );
}