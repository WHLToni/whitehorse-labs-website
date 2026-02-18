import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Credentials() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Full-Stack Hands On{" "}
            <span className="gradient-text-simple">GTM Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left — headshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start justify-center lg:justify-start"
          >
            <div className="w-full max-w-[280px] lg:max-w-full rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/b6cb39724_Headshot.jpeg"
                alt="Toni Morrow"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — bio + brands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
          >
            <p className="text-[#ccc] text-sm leading-relaxed">
              Product and Go-To-Market (or Product Marketing) are often treated as a relay race. Product throws the 'what' over the wall; Marketing tries to figure out the 'why.'
            </p>
            <p className="text-[#ccc] text-sm leading-relaxed">A whole lot of value gets lost in the handoff.</p>
            <p className="text-white font-semibold text-sm">I eliminate the wall.</p>

            <p className="text-[#ccc] text-sm leading-relaxed">
              I've spent 20+ years in product commercialisation roles, beginning in sales, completing an MBA and moving into Product and Marketing Management. Most of my career was spent in regulated sectors including medical technology (pharma, devices and software), fintech, construction tech, veterinary tech. I provide a rare full-stack GTM capability, with a heavy lean towards (but not limited to) high-growth SaaS.
            </p>
            <p className="text-[#ccc] text-sm leading-relaxed">
              I can lead upstream product strategy (R&D, product definition, roadmapping and development) and downstream execution (segmentation & targeting, positioning, messaging and launch) — or step in to solve for just one part of the spectrum.
            </p>
            <p className="text-[#ccc] text-sm leading-relaxed">
              From seed-stage startups to managing $20M+ products for publicly listed brands, across Asia Pacific and the USA, I've operated with both enterprise budgets and bootstrap constraints.
            </p>
            <p className="text-[#ccc] text-sm leading-relaxed">
              I don't run workshops and hand you a deck — I build the systems and foundations that your team needs to take your product to market and win. You get the impact of a cross-functional product and GTM team, delivered by one senior leader at a fraction of the cost.
            </p>

            <a
              href="https://www.linkedin.com/in/tonimorrow/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E91E8C] hover:underline mt-1"
            >
              My LinkedIn Profile <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Brands */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#666] mb-6">Brands I've worked with</p>
              <div className="flex flex-wrap gap-6 items-center">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-8 w-20 bg-white/10 rounded opacity-40" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}