import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  {
    title: "Consultant",
    body: "Diagnoses the problem, hands you a report and exits - the implementation is up to you.",
    highlight: false,
  },
  {
    title: "Contractor",
    body: "Executes what you brief them on - no strategy and ultimately no real ownership.",
    highlight: false,
  },
  {
    title: "Fractional GTM",
    body: "Embedded senior expertise. Owns the outcome - strategy and execution - without the six-figure hire.",
    highlight: true,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#E8FAFA] bg-grid-light">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          >
            <p className="text-base font-semibold text-[#b3475c] tracking-widest uppercase mb-8">
              Fractional GTM · Regulated &amp; Complex Products
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8 text-[#0a0a0a]">
              You've built the product. Getting it to market is a different skill set entirely.
            </h1>

            <p className="text-base md:text-lg text-[#555] leading-relaxed max-w-xl mb-4">
              I help founders and product teams in regulated industries build the commercial foundations that make a product successful: market intelligence and segmentation, positioning and messaging, GTM strategy, launch architecture. Fifteen years operating across regulated products and SaaS in medical/health, veterinary, fintech, and construction, from seed stage through to IPO and publicly listed. I don't just run workshops and give you a PPT deck — I work alongside your team to build and embed the frameworks they'll use into the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm bg-[#b3475c] hover:bg-[#96394c] transition-colors"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={createPageUrl("Services")}
                className="inline-flex items-center justify-center gap-2 text-[#555] font-semibold px-8 py-4 rounded-lg text-sm border border-[#e5e5e5] hover:border-[#b3475c]/40 transition-colors"
              >
                See How It Works →
              </Link>
            </div>
          </motion.div>

          {/* Right side - comparison card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
            className="hidden lg:block"
          >
            <div className="bg-[#1E1F23] rounded-3xl p-10 relative overflow-hidden bg-grid-dark">
              {/* Logo watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/1c08d4c56_PrimaryLogo_White3.png"
                  alt=""
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="relative">
                <p className="text-white text-base font-bold uppercase tracking-widest mb-8">Fractional vs Consultant vs Contractor</p>
                <div className="space-y-6">
                  {comparisons.map((item, i) => (
                    <div key={item.title} className={`pb-6 ${i < comparisons.length - 1 ? "border-b border-white/20" : ""}`}>
                      <p className={`text-base font-bold mb-2 ${item.highlight ? "" : "text-[#888]"}`}
                        style={item.highlight ? { color: "#d44d6e" } : {}}>
                        {item.title}
                      </p>
                      <p className="text-[#ccc] text-base leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}