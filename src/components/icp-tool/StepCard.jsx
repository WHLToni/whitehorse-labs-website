import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function StepCard({ number, title, description, children, onBack, onNext, nextLabel, isFirst }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden"
    >
      <div className="px-6 md:px-8 pt-6 pb-4 border-b border-[#e5e5e5] flex items-start gap-4">
        <div className="text-4xl md:text-5xl font-extrabold text-[#e8195a]/15 leading-none min-w-[44px]">{number}</div>
        <div>
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide text-[#0a0a0a] mb-1">{title}</h2>
          <p className="text-sm text-[#555]">{description}</p>
        </div>
      </div>
      <div className="px-6 md:px-8 py-6">{children}</div>
      <div className="flex justify-between items-center px-6 md:px-8 py-4 border-t border-[#e5e5e5] bg-[#f7f7f8]">
        {!isFirst ? (
          <Button type="button" variant="outline" onClick={onBack} className="border-[#e5e5e5] text-[#888]">
            ← Back
          </Button>
        ) : <div />}
        <Button type="button" onClick={onNext} className="bg-[#0a0a0a] hover:bg-[#b8123f] text-white">
          {nextLabel}
        </Button>
      </div>
    </motion.div>
  );
}