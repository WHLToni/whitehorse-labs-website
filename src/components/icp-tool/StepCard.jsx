import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function StepCard({ number, title, description, children, onBack, onNext, nextLabel, isFirst }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white border border-[#E1E7E9] rounded-xl overflow-hidden"
    >
      <div className="px-6 md:px-8 pt-6 pb-4 border-b border-[#E1E7E9] flex items-start gap-4">
        <div className="text-4xl md:text-5xl font-extrabold text-[#C13B54]/15 leading-none min-w-[44px]">{number}</div>
        <div>
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide text-[var(--ink)] mb-1">{title}</h2>
          <p className="text-sm text-[var(--muted)]">{description}</p>
        </div>
      </div>
      <div className="px-6 md:px-8 py-6">{children}</div>
      <div className="flex justify-between items-center px-6 md:px-8 py-4 border-t border-[#E1E7E9] bg-[#F3F8F1]">
        {!isFirst ? (
          <Button type="button" variant="outline" onClick={onBack} className="border-[#E1E7E9] text-[var(--muted)]">
            ← Back
          </Button>
        ) : <div />}
        <Button type="button" onClick={onNext} className="bg-[#0e0e0e] hover:bg-[#A02E44] text-white">
          {nextLabel}
        </Button>
      </div>
    </motion.div>
  );
}