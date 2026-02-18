import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ServiceCard({ title, price, duration, description, deliverables, bestFor, ctaLabel, ctaAction, index = 0, accentColor = "#E91E8C" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-8 md:p-10 rounded-2xl bg-white border border-[#e5e5e5] hover:border-[#E91E8C]/20 transition-all"
      style={{ borderLeftColor: accentColor, borderLeftWidth: "3px" }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-[#0a0a0a]">{title}</h3>
          {description && (
            <p className="text-[#666] text-sm mt-2 leading-relaxed max-w-lg">{description}</p>
          )}
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-2xl font-bold" style={{ color: accentColor }}>
            {price}
          </div>
          {duration && <div className="text-xs text-[#888] mt-1">{duration}</div>}
        </div>
      </div>

      {deliverables && deliverables.length > 0 && (
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-4">
            What you get
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {deliverables.map((d, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                <span className="text-[#555] text-sm">{d}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {bestFor && (
        <p className="text-xs text-[#888] mb-6">
          <span className="text-[#555] font-medium">Best for:</span> {bestFor}
        </p>
      )}

      {ctaLabel && (
        <button
          onClick={ctaAction}
          className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm"
        >
          {ctaLabel}
        </button>
      )}
    </motion.div>
  );
}