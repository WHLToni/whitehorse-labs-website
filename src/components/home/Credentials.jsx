import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Credentials() {
  return (
    <section className="bg-[#F0F7FA]">
      {/* Main about content — light grey bg */}
      <div className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left — headshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start gap-4"
            >
              <div className="w-full max-w-[280px] lg:max-w-full rounded-2xl overflow-hidden border border-[#e5e5e5]">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/b6cb39724_Headshot.jpeg"
                  alt="Toni Morrow"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full max-w-[280px] lg:max-w-full mt-1">
                <p className="text-base font-semibold uppercase tracking-widest text-[#888] mb-1.5">Industry Experience</p>
                <p className="text-xs text-[#aaa] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontStyle: "italic" }}>
                  Agentic AI & Automation · MedTech · HealthTech · ConstructionTech · FinTech · VeterinaryTech · Marine · Equine · Public Sector Workforce Training
                </p>
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
              <p className="text-base font-semibold uppercase tracking-widest text-[#b3475c]">
                The Practitioner
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">
                Full-Stack GTM, from strategy through to execution.
              </h2>

              <p className="text-[#555] text-sm leading-relaxed">
                Great products don't sell themselves. Someone has to own the journey from insight to revenue - the research, the positioning, the narrative, the launch, and everything that comes after.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                That kind of ownership can be hard to find in one person.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                I started in the medical device and pharmaceutical industry, where product management and product marketing people are trained to carry a product through its entire commercial lifecycle: market intelligence and segmentation, positioning and messaging, launch and ongoing lifecycle management. Regulatory rigour, clinical credibility, commercial accountability - all of it built on actual frameworks, models, and data. It's an industry that treats marketing as a discipline, not an afterthought. That standard never left me.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                After finishing an MBA, I spent the next fifteen years across product and marketing management in B2B SaaS across medical, veterinary, fintech and construction verticals. Enterprise and startups. Seed stage through to publicly listed brands across APAC and the US.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                Now I work with early-stage and exit-ready businesses as a fractional product marketing lead. Alongside that, I work with businesses at the earlier end of the AI adoption curve: product prototyping, market research, workflow automation, and building the internal capability to use these tools well. Some clients want both. Some want neither. The engagement is shaped around what the business actually needs.
              </p>

              <a
                href="https://www.linkedin.com/in/tonimorrow/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#b3475c] hover:underline mt-1"
              >
                Connect With Me on LinkedIn <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Brands strip — dark band */}
      <div className="bg-[#1E1F23] py-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-base font-semibold uppercase tracking-widest text-[#666] mb-8 text-center">Brands I've worked with</p>
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
              <img key={i} src={src} alt={`Brand ${i + 1}`} className="h-40 w-auto object-contain opacity-70" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}