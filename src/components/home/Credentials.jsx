import React from "react";
import { motion } from "framer-motion";

export default function Credentials() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            20 Years of Commercial Rigour,{" "}
            <span className="gradient-text-simple">AI-Accelerated</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <p className="text-[#ccc] text-sm leading-relaxed mb-4">
              MBA (Entrepreneurship & Innovation, Strategy). 20+ years launching regulated products
              across healthtech, medtech, veterinary, fintech, and construction tech — APAC, US,
              European markets.
            </p>
            <p className="text-[#ccc] text-sm leading-relaxed mb-4">
              <span className="text-white font-semibold">Seed → IPO operating exposure.</span> I've launched products
              at pre-revenue startups, through Series B scale-ups (Prospection — US market entry), to publicly
              listed global brands (Procore IPO, Equifax, IDEXX Laboratories).
            </p>
            <p className="text-[#ccc] text-sm leading-relaxed">
              Product management + product marketing expertise (a rare combination). Two years of AI
              experimentation to systemise research, synthesis, and execution so that work that took quarters
              now takes weeks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl border border-[#E91E8C]/30 bg-gradient-to-b from-[#E91E8C]/8 to-transparent"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
              Recent Work
            </p>
            <p className="text-white text-sm leading-relaxed">
              Took a tech startup from "garage project" positioning to US soft-launch ready in under
              6 weeks — rebrand, GTM strategy, sales deck, launch materials.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}