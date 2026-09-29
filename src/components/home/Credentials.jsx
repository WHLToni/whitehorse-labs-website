import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Credentials() {
  return (
    <section className="ds-band ds-band--glass">
      <div className="ds-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left — headshot */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center lg:items-start gap-4">
            <div className="w-full max-w-[280px] lg:max-w-full rounded-md overflow-hidden border border-[var(--line)]">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/b6cb39724_Headshot.jpeg"
                alt="Toni Morrow"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full max-w-[280px] lg:max-w-full mt-1">
              <p className="text-xs text-[var(--muted)] leading-relaxed italic">
                Agentic AI & Automation · MedTech · HealthTech · ConstructionTech · FinTech · VeterinaryTech · Marine · Equine · Public Sector Workforce Training
              </p>
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-2 flex flex-col gap-5">
            <h2 className="ds-display text-[clamp(28px,4vw,44px)] text-[var(--ink)]">
              A commercial career built across the entire product lifecycle:
            </h2>

            <ul className="flex flex-col gap-4 mt-1">
              <li className="flex gap-3">
                <span className="text-[#C13B54] flex-shrink-0 mt-1">•</span>
                <p className="text-[#3a4649] text-sm leading-relaxed">
                  <span className="font-semibold text-[var(--ink)]">Commercial Sales:</span> 10 years in enterprise medical device and pharmaceutical sales, managing complex clinical procurement cycles and multi-stakeholder purchasing decisions.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C13B54] flex-shrink-0 mt-1">•</span>
                <p className="text-[#3a4649] text-sm leading-relaxed">
                  <span className="font-semibold text-[var(--ink)]">Product Leadership &amp; GTM:</span> 15 years leading product management and product marketing across regulated B2B SaaS—spanning healthtech, veterinary science, fintech, and construction tech across APAC and the US. Track record spans pre-revenue validation, seed-stage market entry, scaling a global brand through an initial public offering (IPO), and advising established market leaders.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C13B54] flex-shrink-0 mt-1">•</span>
                <p className="text-[#3a4649] text-sm leading-relaxed">
                  <span className="font-semibold text-[var(--ink)]">Education &amp; Credentials:</span> Master of Business Administration (MBA) from the University of Technology Sydney, alongside executive strategy studies in Paris.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C13B54] flex-shrink-0 mt-1">•</span>
                <p className="text-[#3a4649] text-sm leading-relaxed">
                  <span className="font-semibold text-[var(--ink)]">Current Focus:</span> Acting as an interim commercial lead and strategic advisor for technical founders, designing the go-to-market architecture, pricing models, and validation frameworks required to achieve repeatable commercial adoption.
                </p>
              </li>
            </ul>

            <a
              href="https://www.linkedin.com/in/tonimorrow/"
              target="_blank"
              rel="noopener noreferrer"
              className="ds-textlink inline-flex items-center gap-2 text-sm mt-1"
            >
              Connect With Me on LinkedIn <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Brands strip — scrolling marquee */}
      <div className="mt-20 py-12" style={{ background: "#0e0e0e" }}>
        <div className="overflow-hidden relative" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
          <div className="flex items-center gap-12 w-max ds-marquee">
            {[
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/97a75526b_2.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/9a353716a_3.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/e780a8a30_6.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/2020d9e3a_5.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/7958509e5_4.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/b3a8bc7b3_7.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/f1cf92dd3_8.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/c2ba0ee53_9.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/e8e4da89e_Prospection.png",
              "https://media.base44.com/images/public/6995347084af76a3154d3f6b/2867a3ffe_YarningForChange.png",
            ].map((src, i) => (
              <img key={i} src={src} alt={`Brand ${i + 1}`} className="h-40 w-auto object-contain opacity-70 flex-shrink-0" style={src.includes("YarningForChange") ? { height: "95px", width: "auto" } : undefined} />
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/97a75526b_2.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/9a353716a_3.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/e780a8a30_6.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/2020d9e3a_5.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/7958509e5_4.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/b3a8bc7b3_7.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/f1cf92dd3_8.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/c2ba0ee53_9.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/e8e4da89e_Prospection.png",
              "https://media.base44.com/images/public/6995347084af76a3154d3f6b/2867a3ffe_YarningForChange.png",
            ].map((src, i) => (
              <img key={`dup-${i}`} src={src} alt={`Brand ${i + 1}`} className="h-40 w-auto object-contain opacity-70 flex-shrink-0" style={src.includes("YarningForChange") ? { height: "95px", width: "auto" } : undefined} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}