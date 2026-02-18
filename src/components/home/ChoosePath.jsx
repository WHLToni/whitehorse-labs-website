import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function ChoosePath() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">
            Choose Your Path
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Option 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="gradient-border p-8 md:p-10 h-full shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#E91E8C]/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#E91E8C]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#888]">
                  Option 1
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#0a0a0a]">Buy the System</h3>
              <p className="gradient-text-simple text-3xl font-bold mb-6">$149</p>
              <p className="text-[#666] text-sm leading-relaxed mb-8">
                The same commercialisation framework I use with clients, available as a ready-to-use
                portal. Market research templates, segmentation models, ICP frameworks, competitive
                analysis tools, positioning architecture, brand strategy, and vibe coding standards.
              </p>
              <p className="text-[#aaa] text-xs mb-8">
                For bootstrap founders, vibe coders, and early-stage teams.
              </p>
              <Link
                to={createPageUrl("LaunchSystem")}
                className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm"
              >
                Buy the Launch System
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Option 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group"
          >
            <div className="p-8 md:p-10 h-full rounded-2xl border border-[#e5e5e5] bg-[#f7f7f8]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#00C4E0]/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-[#00C4E0]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#888]">
                  Option 2
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#0a0a0a]">Productised Services</h3>
              <p className="gradient-text-simple text-3xl font-bold mb-6">$6K — $20K</p>
              <p className="text-[#666] text-sm leading-relaxed mb-6">
                Fixed-scope commercialisation packages. No discovery phases that go nowhere.
                No hourly billing. Just rigorous strategy work, delivered in weeks.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { name: "Foundation Sprint", price: "$6K", time: "2 weeks" },
                  { name: "GTM Blueprint", price: "$12K", time: "4 weeks" },
                  { name: "Launch Ready Package", price: "$20K", time: "6 weeks" },
                  { name: "Pre-Exit Readiness", price: "Custom", time: "" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center justify-between text-sm border-b border-[#e5e5e5] pb-3">
                    <span className="text-[#333]">{s.name}</span>
                    <span className="text-[#E91E8C] font-semibold text-xs">
                      {s.price} {s.time && `· ${s.time}`}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to={createPageUrl("Services")}
                className="btn-outline-gradient inline-flex items-center gap-2 text-[#0a0a0a] font-semibold px-6 py-3 rounded-lg text-sm border-2 border-[#e5e5e5] hover:border-[#E91E8C]/40 transition-colors"
              >
                View Full Services & Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}