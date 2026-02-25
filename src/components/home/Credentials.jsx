import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Credentials() {
  return (
    <section className="bg-[#f7f7f8]">
      {/* Main about content — light grey bg */}
      <div className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left — headshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start justify-center lg:justify-start"
            >
              <div className="w-full max-w-[280px] lg:max-w-full rounded-2xl overflow-hidden border border-[#e5e5e5]">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/b6cb39724_Headshot.jpeg"
                  alt="Toni Morrow"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right — bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C]">
                The Practitioner
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">
                Full-Stack GTM. Strategy and Execution, End to End.
              </h2>
              <p className="text-sm text-[#888] font-medium">
                Toni Morrow · 20+ years in regulated GTM · Medtech, Fintech, SaaS · Seed to IPO
              </p>

              <p className="text-[#555] text-sm leading-relaxed">
                Product develops something brilliant, handballs it to marketing, who handballs it to sales. Value gets lost at every handoff and nobody owns the outcome end to end — I've spent 20+ years closing that gap.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                From seed-stage startups finding their first customers, to managing $20M+ product portfolios for publicly listed brands across APAC and the USA — I've operated at every point on that spectrum, with both enterprise resources and bootstrap constraints.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                I began in medical device and pharmaceutical sales — an industry where regulatory rigour, clinical credibility and commercial excellence aren't optional, they're the baseline. From there I finished an MBA and moved through product and marketing management, spending the majority of my career in regulated sectors — medtech (both instruments and software), fintech, construction tech, veterinary technology.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                That full-stack experience means I can lead upstream product strategy and downstream GTM execution, or step in to solve for just one part.
              </p>
              <p className="text-[#555] text-sm font-semibold leading-relaxed text-[#0a0a0a]">
                I don't run workshops and hand you a deck. I build the systems and foundations your team needs to take your product to market and win.
              </p>

              <a
                href="https://www.linkedin.com/in/tonimorrow/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E91E8C] hover:underline mt-1"
              >
                My LinkedIn Profile <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Brands strip — dark band */}
      <div className="bg-[#0a0a0a] py-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#666] mb-8 text-center">Brands I've worked with</p>
          <div className="flex flex-wrap gap-8 items-center justify-center">
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
            ].map((src, i) => (
              <img key={i} src={src} alt={`Brand ${i + 1}`} className="h-32 w-auto object-contain opacity-70" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}