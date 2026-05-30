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
              className="flex flex-col items-center lg:items-start gap-4"
            >
              <div className="w-full max-w-[280px] lg:max-w-full rounded-2xl overflow-hidden border border-[#e5e5e5]">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/b6cb39724_Headshot.jpeg"
                  alt="Toni Morrow"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-[#888] font-medium text-center lg:text-left">
                Toni Morrow · 15 years in regulated GTM · Medtech, Healthtech, SaaS · Seed to IPO
              </p>
            </motion.div>

            {/* Right — bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a]">
                The Practitioner
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">
                Full-Stack GTM. Strategy and Execution, End to End.
              </h2>

              <p className="text-[#555] text-sm leading-relaxed">
                Great products don't sell themselves. Someone has to own the journey from insight to revenue - the research, the positioning, the narrative, the launch.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                I started in medical device and pharmaceutical sales - an industry where regulatory rigour, clinical credibility, and commercial excellence aren't optional, they're the baseline. I finished an MBA and spent the next fifteen years moving through product and marketing management across medtech, healthtech, construction technology, veterinary technology, and commercial data - both enterprise and startups, from seed stage through to publicly listed brands across APAC and the US.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                That full-stack experience means I can lead upstream product strategy and downstream GTM execution, or step into just one part. What's different now is the speed: I work with an AI-augmented toolstack that compresses weeks of research and framework-building into days - so you get senior thinking without the senior timeline.
              </p>

              <p className="text-[#555] text-sm font-semibold leading-relaxed text-[#0a0a0a]">
                I don't hand you a report and walk away. I build the foundations your team needs to take your product to market and win.
              </p>

              <a
                href="https://www.linkedin.com/in/tonimorrow/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#e8195a] hover:underline mt-1"
              >
                Connect With Me on LinkedIn <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Brands strip — dark band */}
      <div className="bg-[#0a0a0a] py-12 px-6 lg:px-10">
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