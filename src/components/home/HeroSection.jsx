import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#E91E8C]/8 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00C4E0]/8 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]" />
            <span className="text-xs font-medium text-[#999] tracking-wide uppercase">
              Fractional GTM Consultant
            </span>
          </div>

          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            Product Commercialisation for Complex,{" "}
            <span className="gradient-text-simple">Regulated Products</span>
          </h1>

          <p className="text-base md:text-lg text-[#999] leading-relaxed max-w-2xl mb-4">
            You've built the product. You know it works. But figuring out who it's for, 
            how to position it and how to take it to market without burning cash on a 
            laundry list of tactics — that's where a lot of teams stall.
          </p>
          <p className="text-base md:text-lg text-[#999] leading-relaxed max-w-2xl mb-4">
            I bring commercial rigour to product launches — market research, segmentation, 
            positioning, GTM strategy and sales enablement. The same frameworks big consulting 
            firms use, accelerated by AI, delivered by one expert.
          </p>
          <p className="text-sm md:text-base text-white/70 font-medium max-w-2xl mb-12">
            A-player expertise at fractional cost. Fixed scope, fixed price, delivered in weeks — not months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={createPageUrl("Services")}
              className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm"
            >
              View Services & Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={createPageUrl("ICPFramework")}
              className="btn-outline-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm"
            >
              <Download className="w-4 h-4" />
              Download Free ICP Framework
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}