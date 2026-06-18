import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Search, BarChart2, Target, Palette, FileText, Layout, Megaphone, BookOpen, RefreshCw, ShieldCheck, LayoutTemplate } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function PrefactorCaseStudy() {
  useEffect(() => {
    document.title = "Prefactor — Case Study | Whitehorse Labs";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "How Whitehorse Labs helped Prefactor discover their real market, rebuild their brand, and redirect their product roadmap, in 14 weeks.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "How Whitehorse Labs helped Prefactor discover their real market, rebuild their brand, and redirect their product roadmap, in 14 weeks.";
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
        <div className="max-w-[800px] mx-auto px-5 md:px-10 py-16 md:py-[100px] text-center">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#7ecec4" }}
          >
            Case Study · Agentic AI · B2B SaaS
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-4xl md:text-5xl leading-tight mb-6"
          >
            Taking Prefactor from stalling MVP to enterprise-ready category definer.
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {["14 weeks", "Pre-revenue · $1M+ seed funded", "Antler-backed"].map((item) => (
              <span
                key={item}
                className="text-sm font-medium text-white/70"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* Before website screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <img
              src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/7b210d5b7_PrefactorBeforeHomepage.png"
              alt="Prefactor website before the brand refresh"
              style={{
                width: '100%',
                maxWidth: '860px',
                borderRadius: '12px',
                marginTop: '40px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
              }}
            />
            <p style={{ fontSize: '13px', color: '#7ecec4', marginTop: '8px', opacity: 0.7 }}>
              Before — scroll down to see the transformation.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ENGAGEMENT OVERVIEW */}
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-3">The brief</p>
              <h2 className="text-2xl md:text-3xl leading-snug text-[#0a0a0a]">
                Over $1M raised. 45 users. Zero conversions. Three months out from a US launch.
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-3 space-y-5 text-[#444] text-base leading-relaxed"
            >
              <p>Prefactor approached us to build the commercial foundations for a US market entry: pitch deck, white paper, and messaging frameworks. But despite securing Antler funding and holding plenty of conversations, they had 45 users on a free tier and <strong>zero conversions</strong>. Their product — an MCP authentication solution — wasn't landing.</p>
              <p>A product demo revealed the core issue: the MVP was <strong>solving a problem their audience didn't have</strong>. The brief shifted — before building commercial assets for US launch, we had to validate whether the market actually wanted what Prefactor was building.</p>
              <div className="mt-5">
                <p className="text-base text-[#444] font-normal mb-2">We added:</p>
                <ul className="space-y-1">
                  {["A Customer Discovery Program", "Our Diagnostic Package (problem definition, competitive intel, ICP definition, segmentation & targeting)", "A light brand refresh and assets"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-[#444]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0d9488] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <hr className="mt-16 border-[#e5e5e5]" />
        </div>
      </section>

      {/* KEY FINDINGS */}
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-10 pt-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-3">Discovery Interview Insights</p>
            <h2 className="text-2xl md:text-3xl text-[#0a0a0a]">Four findings changed everything.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { num: "01", title: "The product wasn't solving a real problem.", body: "Prefactor had built a technically sound product, but it wasn't solving a burning problem. They had built the wrong tool. Senior executives were concerned about auditability, visibility, control, and demonstrable ROI from their agentic AI investments, not MCP authentication." },
              { num: "02", title: "They were targeting the wrong buyer.", body: "Engineers were the user base, but they didn't control budgets. Enterprise purchasing decisions rest with the CTO, CISO, or CPO. Prefactor needed a completely different language for a completely different buyer." },
              { num: "03", title: "They had dismissed a primary segment.", body: "The assumption that regulated industries were too cautious for agentic AI was wrong. Banking, finance, and insurance are moving methodically, leveraging existing governance frameworks to adopt safely. They have the most to gain—and the budget to act." },
              { num: "04", title: "The product needed a different vision.", body: "The market demanded a platform for agent visibility, governance, and auditability: a unified executive view. It needed active monitoring, registries, and security controls—a control plane, not an auth tool." },
            ].map((finding, i) => (
              <motion.div
                key={finding.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-6"
                style={{ borderLeft: "3px solid #0d9488" }}
              >
                <div
                  className="absolute -left-3 top-0 font-bold select-none"
                  style={{ fontSize: "64px", lineHeight: 1, color: "#0d9488", opacity: 0.12 }}
                >
                  {finding.num}
                </div>
                <h3 className="font-semibold text-[#0a0a0a] text-lg mb-2">{finding.title}</h3>
                <p className="text-[#444] text-base leading-relaxed">{finding.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND TRANSFORMATION */}
      <section style={{ background: "linear-gradient(135deg, #0d2b2b 0%, #1a3a3a 100%)" }}>
        <div className="max-w-[900px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4db8b8" }}>Brand refresh</p>
            <h2 className="text-2xl md:text-3xl text-white mb-5">From generic tech startup to enterprise-ready brand.</h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#a8cccc" }}>
              The Founders started rebuilding, and I started on brand. Prefactor had no cohesive identity — dark templates, AI-generated imagery that looked like every other early-stage tech company. We ran a series of brand workshops with the Founders, then built out the brand from strategy to production-ready style guide and visual design assets. <strong>The result:</strong> an enterprise-ready brand system reflecting credibility and gravitas, built for a small team to apply easily and consistently themselves.
            </p>
          </motion.div>

          {/* Before / After — stacked layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex flex-col gap-10"
          >
            {/* BEFORE — compact 4-image grid */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#7ecec4", opacity: 0.7 }}>Before</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/7b210d5b7_PrefactorBeforeHomepage.png" alt="Old Prefactor homepage" className="w-full block rounded-md" style={{ opacity: 0.65 }} />
                <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/53dbdcb20_PrefactorBeforeWhy.png" alt="Old Prefactor why section" className="w-full block rounded-md" style={{ opacity: 0.65 }} />
                <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/9927049a4_PrefactorBeforeIntegration.png" alt="Old Prefactor integration page" className="w-full block rounded-md" style={{ opacity: 0.65 }} />
                <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/7b210d5b7_PrefactorBeforeHomepage.png" alt="Old Prefactor additional page" className="w-full block rounded-md" style={{ opacity: 0.65 }} />
              </div>
              <p className="text-xs mt-2" style={{ color: "#7ecec4", opacity: 0.6 }}>prefactor.tech — prior to engagement</p>
            </div>

            {/* AFTER — prominent single column */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#7ecec4", opacity: 0.7 }}>After</p>
              <div className="flex flex-col gap-3">
                <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/175af339b_BrandGuidelines1.png" alt="Brand guidelines — cover" className="w-full block rounded-lg" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }} />
                <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/0c55cba4a_BrandGuidelines3.png" alt="Typography system" className="w-full block rounded-lg" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }} />
                <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/1420c6849_BrandGuidelines2.png" alt="Logo usage guidelines" className="w-full block rounded-lg" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }} />
                <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/c63b28e39_BrandGuidelines4.png" alt="Imagery and icons direction" className="w-full block rounded-lg" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }} />
              </div>
              <p className="text-xs mt-2" style={{ color: "#7ecec4", opacity: 0.6 }}>New brand identity — November 2025</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* PITCH DECK */}
      <section style={{ background: "linear-gradient(160deg, #071a1a 0%, #0d2b2b 50%, #0a1f2e 100%)" }}>
        <div className="max-w-[900px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4db8b8" }}>Strategic narrative</p>
            <h2 className="text-2xl md:text-3xl text-white mb-5">A pitch deck built around the new positioning.</h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#a8cccc" }}>
              We built the product pitch deck from the ground up, using the findings from our market research and ICP interviews. It centred around a new narrative positioning Prefactor as the MCP-Native Agent Control Plane for enterprise and regulated industries.
            </p>
          </motion.div>

          {/* Mobile: 2x2 grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {[
              "https://media.base44.com/images/public/6995347084af76a3154d3f6b/06753bf6d_PitchDeckCover.png",
              "https://media.base44.com/images/public/6995347084af76a3154d3f6b/5930a19f6_PitchDeckMarket.png",
              "https://media.base44.com/images/public/6995347084af76a3154d3f6b/dd4c6e5f0_PitchDeckProduct.png",
              "https://media.base44.com/images/public/6995347084af76a3154d3f6b/9d30f934b_PitchDeckFeatures.png",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Pitch deck slide ${i + 1}`}
                className="w-full aspect-video object-cover rounded-lg"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
              />
            ))}
          </div>

          {/* Desktop: Layered depth layout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="hidden md:flex items-center justify-center"
            style={{ height: "340px", position: "relative" }}
          >
            {/* Left slide — angled back-left */}
            <div style={{
              position: "absolute",
              left: "0%",
              top: "20px",
              width: "48%",
              transformOrigin: "right center",
              transform: "perspective(900px) rotateY(22deg) scale(0.85)",
              zIndex: 1,
              boxShadow: "-8px 20px 60px rgba(0,0,0,0.6)",
              borderRadius: "10px",
              overflow: "hidden",
            }}>
              <img
                src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/5930a19f6_PitchDeckMarket.png"
                alt="Pitch deck slide 2"
                className="w-full block"
                style={{ aspectRatio: "16/9", objectFit: "cover" }}
              />
            </div>

            {/* Centre slide — front and large */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: "0",
              width: "54%",
              transform: "translateX(-50%)",
              zIndex: 10,
              boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(13,148,136,0.15)",
              borderRadius: "10px",
              overflow: "hidden",
            }}>
              <img
                src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/06753bf6d_PitchDeckCover.png"
                alt="Pitch deck cover"
                className="w-full block"
                style={{ aspectRatio: "16/9", objectFit: "cover" }}
              />
            </div>

            {/* Right slide — angled back-right */}
            <div style={{
              position: "absolute",
              right: "0%",
              top: "20px",
              width: "48%",
              transformOrigin: "left center",
              transform: "perspective(900px) rotateY(-22deg) scale(0.85)",
              zIndex: 1,
              boxShadow: "8px 20px 60px rgba(0,0,0,0.6)",
              borderRadius: "10px",
              overflow: "hidden",
            }}>
              <img
                src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/9d30f934b_PitchDeckFeatures.png"
                alt="Pitch deck slide 4"
                className="w-full block"
                style={{ aspectRatio: "16/9", objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ADDITIONAL DELIVERABLES */}
      <section style={{ background: "#0d5c55" }}>
        <div className="max-w-[900px] mx-auto px-5 md:px-10 py-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-3">From strategy to execution</h2>
            <p className="text-lg text-white mb-2">White paper. Ad creative. A Notion portal for everything.</p>
            <p className="text-sm leading-relaxed" style={{ color: "#a8d8d4" }}>
              Every deliverable built from the new positioning: a thought leadership white paper, campaign-ready ad creative, and a fully structured client workspace.
            </p>
          </motion.div>

          {/* Masonry grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start"
          >
            {/* Left: Whitepaper — tall portrait */}
            <div className="rounded-xl overflow-hidden" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
              <img
                src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/216786036_Whitepaper.png"
                alt="White paper"
                className="w-full block"
              />
            </div>

            {/* Right: Combined Notion + Reddit ads image */}
            <div className="md:col-span-2">
              <img
                src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/42e764a1b_RedditNotion.png"
                alt="Notion portal and Reddit ads"
                className="w-full block"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT CHANGED / OUTCOMES */}
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-3">The outcome</p>
            <h2 className="text-2xl md:text-3xl text-[#0a0a0a]">A redirected product roadmap solving a real market problem, and commercial foundations built for scale.</h2>
          </motion.div>

          <div className="flex flex-wrap gap-8">
            {[
              { icon: <RefreshCw className="w-6 h-6" style={{ color: "#0d9488" }} />, title: "Product roadmap redirected", body: "The ICP interviews validated a completely new product direction — a unified control plane for enterprise agent governance. Development accelerated from there. The product Prefactor is building today is fundamentally different from the one that existed at the start of the engagement." },
              { icon: <ShieldCheck className="w-6 h-6" style={{ color: "#0d9488" }} />, title: "Brand built for enterprise", body: "The new visual identity gave Prefactor the credibility to walk into regulated-industry and enterprise conversations without the brand working against them. The style guide means the founding team can administer the brand themselves, with no ongoing designer cost." },
              { icon: <LayoutTemplate className="w-6 h-6" style={{ color: "#0d9488" }} />, title: "Commercial foundations in place", body: "Every asset: white paper, pitch deck, positioning framework, messaging architecture. All built around the new ICP and product direction. A coherent, credible story ready for the US market." },
            ].map((block, i) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col gap-3"
                style={{ flex: 1, minWidth: "200px" }}
              >
                {block.icon}
                <h3 className="font-semibold text-[#0a0a0a] text-base">{block.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{block.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES GRID */}
      <section style={{ background: "#f7f7f8" }}>
        <div className="max-w-[900px] mx-auto px-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-3">The work</p>
            <h2 className="text-2xl md:text-3xl text-[#0a0a0a]">Seven workstreams. Fourteen weeks.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <Search className="w-5 h-5 text-[#0d2b2b]" />, title: "ICP Interview Programme", body: "Hypothesis development, questionnaire design, senior-leader interviews from Toni's own network, thematic analysis, roadmap insights, and validation of key hypotheses." },
              { icon: <BarChart2 className="w-5 h-5 text-[#0d2b2b]" />, title: "Market Research", body: "PESTEL analysis, VRIO model (competitive advantage assessment), competitive analysis and comparison matrix, market sizing, segment value, and targeting matrix." },
              { icon: <Target className="w-5 h-5 text-[#0d2b2b]" />, title: "Positioning & Messaging", body: "New ICP personas, value proposition development, positioning statement, and full messaging architecture built for an executive buyer, not an engineering audience." },
              { icon: <Palette className="w-5 h-5 text-[#0d2b2b]" />, title: "Brand Refresh", body: "Brand strategy workshop, complete visual identity, style guide, and designer briefing and facilitation across multiple collaborative workshops with the founding team." },
              { icon: <FileText className="w-5 h-5 text-[#0d2b2b]" />, title: "White Paper", body: "Redefining Digital Trust — a thought leadership piece positioning Prefactor at the intersection of agentic AI and enterprise governance." },
              { icon: <Layout className="w-5 h-5 text-[#0d2b2b]" />, title: "Pitch Deck", body: "Investor and sales pitch deck built on a branded, reusable template, structured around the new positioning and ICP narrative." },
              { icon: <Megaphone className="w-5 h-5 text-[#0d2b2b]" />, title: "Digital Ad Creative", body: "Campaign-ready Reddit ad creative built on the new brand system, messaging framework, and ICP insights." },
              { icon: <BookOpen className="w-5 h-5 text-[#0d2b2b]" />, title: "Notion Client Portal", body: "All strategic work delivered in a structured, navigable Notion workspace — including investor snapshot, market research, segmentation model, interview findings, and brand assets." },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-xl px-6 py-5"
                style={{ border: "0.5px solid #e5e5e5" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  {card.icon}
                  <h3 className="font-semibold text-[#0a0a0a] text-sm">{card.title}</h3>
                </div>
                <p className="text-sm text-[#555] leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #0d2b2b 0%, #1a3a3a 100%)" }} className="w-full">
        <div className="max-w-[700px] mx-auto px-10 py-[100px]">

          {/* Sub-section A — GTM Builder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4db8b8" }}>The GTM Builder</p>
            <h3 className="text-white text-xl md:text-2xl mb-4">The frameworks from this project, in a guided system you can run yourself.</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#a8cccc" }}>
              Available as a guided Notion system with over 30 detailed JSON AI prompts to accelerate your research.
            </p>
            <Link
              to={createPageUrl("BuyTheBuilderSuite")}
              className="inline-block text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-200"
              style={{ color: "white", border: "1.5px solid #0d9488", background: "transparent" }}
              onMouseEnter={e => e.currentTarget.style.background = "#0d9488"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              Explore the GTM Builder →
            </Link>
          </motion.div>

          {/* Divider */}
          <div className="my-12" style={{ borderTop: "1px solid rgba(13,148,136,0.2)" }} />

          {/* Sub-section B — Consulting CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4db8b8" }}>Work with Toni</p>
            <h3 className="text-white text-xl md:text-2xl mb-4">Ready to do this for your product?</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#a8cccc" }}>
              If you're preparing for a raise, planning international expansion, or going to market with a complex or regulated product, let's talk.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-block text-sm font-semibold px-6 py-2.5 rounded-lg text-white transition-all duration-200"
              style={{ background: "#0d9488" }}
              onMouseEnter={e => e.currentTarget.style.background = "#0b7a70"}
              onMouseLeave={e => e.currentTarget.style.background = "#0d9488"}
            >
              Book a call →
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
}