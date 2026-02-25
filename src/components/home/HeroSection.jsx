import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-white">
      {/* Subtle gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-[#E91E8C]/5 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00C4E0]/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e5e5e5] bg-[#f7f7f8] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]" />
              <span className="text-xs font-medium text-[#666] tracking-wide uppercase">
                Fractional GTM Consultant
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-3 text-[#0a0a0a]">
              Fractional Go-to-Market Expertise
            </h1>
            <p className="text-lg md:text-xl font-semibold text-[#555] mb-8">
              for Complex and <span className="gradient-text-simple">Regulated Products</span>
            </p>

            <p className="text-base md:text-lg text-[#555] leading-relaxed max-w-xl mb-4">
              You've built the product. You know it works. But figuring out who it's for, how to position it and how to take it to market without burning cash — a lot of founders stall at this critical point.
            </p>
            <p className="text-base md:text-lg text-[#888] max-w-xl mb-12">
              Get senior GTM expertise at fractional cost. Fixed scope, fixed price and delivered in weeks not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={createPageUrl("Services")}
                className="btn-gradient inline-flex items-center justify-center gap-2 text-[#E91E8C] font-semibold px-8 py-4 rounded-lg text-sm"
              >
                View Services & Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          </motion.div>

          {/* Right side - dark card with stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
            className="hidden lg:block"
          >
            <div className="bg-[#0a0a0a] rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#E91E8C]/10 blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#00C4E0]/10 blur-[60px]" />
              <div className="relative">
                <p className="text-[#666] text-xs uppercase tracking-widest mb-8">Scope & Delivery</p>
                <div className="space-y-6">
                  {[
                    { label: "Foundation Sprint", price: "$6K", time: "2 weeks" },
                    { label: "GTM Blueprint", price: "$12K", time: "4 weeks" },
                    { label: "Launch Ready Package", price: "$20K", time: "6 weeks" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-white text-sm font-medium">{s.label}</span>
                      <div className="text-right">
                        <span className="gradient-text-simple text-sm font-bold">{s.price}</span>
                        <span className="text-[#666] text-xs ml-2">· {s.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-[#999] text-xs leading-relaxed">
                    20+ years across healthtech, medtech, fintech, SaaS. Seed → IPO experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}