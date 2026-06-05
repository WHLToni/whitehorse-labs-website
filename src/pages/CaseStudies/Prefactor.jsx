import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function PrefactorCaseStudy() {
  useEffect(() => {
    document.title = "Prefactor — Case Study | Whitehorse Labs";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "How Whitehorse Labs helped Prefactor discover their real market, rebuild their brand, and redirect their product roadmap — in 14 weeks.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "How Whitehorse Labs helped Prefactor discover their real market, rebuild their brand, and redirect their product roadmap — in 14 weeks.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">

      {/* HERO */}
      <section
        style={{ background: "linear-gradient(135deg, #0d2b2b 0%, #1a3a3a 100%)" }}
        className="w-full"
      >
        <div className="max-w-[800px] mx-auto px-10 py-[100px] text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ background: "rgba(255,255,255,0.1)", color: "#7ecec4", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            Case Study · Agentic AI · B2B SaaS
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-4xl md:text-5xl leading-tight mb-6"
          >
            From engineer-facing auth tool to enterprise agent governance platform.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a8ccca] mb-8 leading-relaxed"
            style={{ fontSize: "18px" }}
          >
            How a 14-week GTM engagement helped Prefactor discover their real market, rebuild their brand from scratch, and redirect their entire product roadmap.
          </motion.p>

          {/* Stat Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {["14 weeks", "Pre-revenue · $1M+ seed funded", "Antler-backed"].map((pill) => (
              <span
                key={pill}
                className="text-sm font-medium text-white px-4 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Hero Image */}
          <motion.img
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            src="/assets/prefactor/brand-guidelines-cover.jpg"
            alt="Prefactor Brand Guidelines — designed by Whitehorse Labs"
            className="w-full mt-10"
            style={{ borderRadius: "12px" }}
          />
        </div>
      </section>

    </div>
  );
}