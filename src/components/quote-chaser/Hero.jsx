import React from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-16 md:py-24 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-[#c97a8a] mb-4">
          Quote Chaser
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
          Stop losing jobs you already quoted.
        </h1>
        <p className="text-white/55 text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed mb-8">
          You quoted the job. So did your competitor - and they followed up. Quote Chaser makes sure that's you: every quote chased, under your name, without you lifting a finger.
        </p>
        <div className="max-w-xs sm:max-w-none mx-auto">
          <CTAButton label="Book a 15-minute chat" />
          <p className="text-white/50 text-base mt-3">We chase quotes, not debts.</p>
        </div>
      </motion.div>
    </section>
  );
}