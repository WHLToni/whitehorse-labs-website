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
            src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/175af339b_BrandGuidelines1.png"
            alt="Prefactor Brand Guidelines — designed by Whitehorse Labs"
            className="w-full mt-10"
            style={{ borderRadius: "12px" }}
          />
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
                A US market introduction. A pitch deck. The commercial foundations to make it count.
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-3 space-y-5 text-[#444] text-base leading-relaxed"
            >
              <p>Prefactor came to Whitehorse Labs with a clear brief: they had secured their second round of Antler funding, were planning a US market introduction trip, and needed the commercial foundations to make it count. The immediate deliverables were a pitch deck, a white paper, and the product marketing fundamentals — segmentation, targeting, positioning, and messaging.</p>
              <p>They had 45 users on a free tier. Plenty of conversations. Zero conversions. The product was an MCP authentication solution, originally built for software engineers navigating the emerging agentic AI landscape. On paper, the timing looked right. In practice, something wasn't working — and nobody had yet identified what.</p>
              <p>Two weeks into the engagement, I asked to see a product demo. What I saw was an early-stage MVP solving a problem the intended audience hadn't yet recognised as a problem. The engagement brief changed. Before we could build commercial assets for a US launch, we needed to know whether the market actually wanted what Prefactor was building.</p>
            </motion.div>
          </div>

          <hr className="mt-16 border-[#e5e5e5]" />
        </div>
      </section>

      {/* KEY FINDINGS */}
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-3">The insights</p>
            <h2 className="text-2xl md:text-3xl text-[#0a0a0a]">Four findings that changed everything.</h2>
          </motion.div>

          <div>
            {[
              { num: "01", title: "The buyer is not the engineer.", body: "Engineers were Prefactor's existing user base, but engineers don't control budgets. The actual purchasing decision for an enterprise security and governance tool sits with the CTO, CISO, and in some cases the CPO. Prefactor needed to be speaking a completely different language to a completely different person." },
              { num: "02", title: "MCP authentication isn't the problem.", body: "The market wasn't thinking about MCP authentication. Senior executives were concerned about auditability, visibility, control, and demonstrable ROI from their agentic AI investments. Authentication was a hygiene factor — table stakes, not a differentiator. The product needed to be much broader." },
              { num: "03", title: "Regulated industries are the primary target.", body: "The assumption that regulated industries would be too cautious for early agentic AI adoption was wrong. Banking, financial services, and insurance are moving forward methodically — precisely because they have the governance frameworks and regulatory discipline to do it safely. They also have the most to gain, and the budget to act." },
              { num: "04", title: "The product needed a different vision entirely.", body: "The market needed a platform for visibility, governance, auditability, and control of agents — a unified executive view across every agent in the organisation. Active monitoring, audit logs, a registry, security controls, ROI metrics. Not an auth tool. A control plane." },
            ].map((finding, i) => (
              <motion.div
                key={finding.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-12 pl-6"
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
        <div className="max-w-[900px] mx-auto px-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4db8b8" }}>Brand refresh</p>
            <h2 className="text-2xl md:text-3xl text-white mb-5">From generic tech startup to enterprise-ready brand.</h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#a8cccc" }}>
              Prefactor had no cohesive brand identity. The visual language was fragmented — dark templates, gradient fonts, AI-generated imagery that looked like every other early-stage tech company. We ran a brand strategy workshop with the founding team, defined their brand personality and visual direction, and briefed a freelance designer who developed the complete identity from strategy through to a production-ready style guide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "https://media.base44.com/images/public/6995347084af76a3154d3f6b/175af339b_BrandGuidelines1.png", caption: "Brand guidelines — cover" },
              { src: "https://media.base44.com/images/public/6995347084af76a3154d3f6b/1420c6849_BrandGuidelines2.png", caption: "Logo usage guidelines" },
              { src: "https://media.base44.com/images/public/6995347084af76a3154d3f6b/0c55cba4a_BrandGuidelines3.png", caption: "Typography system" },
              { src: "https://media.base44.com/images/public/6995347084af76a3154d3f6b/c63b28e39_BrandGuidelines4.png", caption: "Imagery and icons direction" },
            ].map((img, i) => (
              <motion.div
                key={img.caption}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-full aspect-video rounded-lg overflow-hidden bg-white/10">
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs mt-2" style={{ color: "#8ab8b8" }}>{img.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PITCH DECK */}
      <section style={{ background: "linear-gradient(160deg, #071a1a 0%, #0d2b2b 50%, #0a1f2e 100%)" }}>
        <div className="max-w-[900px] mx-auto px-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4db8b8" }}>Investor narrative</p>
            <h2 className="text-2xl md:text-3xl text-white mb-5">A pitch deck built around the new positioning.</h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#a8cccc" }}>
              The pitch deck was rebuilt from the ground up around the findings from our market research and ICP interviews — a new narrative positioning Prefactor as the MCP-Native Agent Control Plane for enterprise and regulated industries.
            </p>
          </motion.div>

          {/* Mobile: horizontal scroll strip */}
          <div className="flex md:hidden overflow-x-auto gap-4 pb-2">
            {[
              "https://media.base44.com/images/public/6995347084af76a3154d3f6b/06753bf6d_PitchDeckCover.png",
              "https://media.base44.com/images/public/6995347084af76a3154d3f6b/5930a19f6_PitchDeckMarket.png",
              "https://media.base44.com/images/public/6995347084af76a3154d3f6b/dd4c6e5f0_PitchDeckProduct.png",
              "https://media.base44.com/images/public/6995347084af76a3154d3f6b/9d30f934b_PitchDeckFeatures.png",
            ].map((src, i) => (
              <div key={i} className="flex-shrink-0" style={{ minWidth: "260px" }}>
                <img
                  src={src}
                  alt={`Pitch deck slide ${i + 1}`}
                  className="w-full aspect-video object-cover rounded-xl"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
                />
              </div>
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
      <section style={{ background: "#f7f7f8" }}>
        <div className="max-w-[900px] mx-auto px-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-3">From strategy to execution</p>
            <h2 className="text-2xl md:text-3xl text-[#0a0a0a]">White paper. Ad creative. A Notion portal for everything.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* White paper */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/216786036_Whitepaper.png" alt="White paper" className="w-full aspect-video object-cover object-top rounded-lg bg-[#e5e5e5]" />
              <p className="mt-3 font-semibold text-sm text-[#0a0a0a]">Redefining Digital Trust</p>
              <p className="mt-1 text-sm text-[#555] leading-relaxed">Thought leadership white paper positioning Prefactor at the intersection of agentic AI and enterprise governance.</p>
            </motion.div>

            {/* Reddit ads */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.07 }}
            >
              <div className="flex flex-col gap-3">
                <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/bd35057d9_RedditAd1.png" alt="Reddit ad 1" className="w-full object-cover rounded-lg bg-[#e5e5e5]" />
                <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/134fd91fe_RedditAd2.png" alt="Reddit ad 2" className="w-full object-cover rounded-lg bg-[#e5e5e5]" />
              </div>
              <p className="mt-3 font-semibold text-sm text-[#0a0a0a]">Reddit ad creative</p>
              <p className="mt-1 text-sm text-[#555] leading-relaxed">Campaign-ready ads built on the new brand system and messaging framework.</p>
            </motion.div>

            {/* Notion portal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}
            >
              <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/4abc887fa_NotionPortal.png" alt="Notion portal" className="w-full aspect-video object-cover rounded-lg bg-[#e5e5e5]" />
              <p className="mt-3 font-semibold text-sm text-[#0a0a0a]">Notion client portal</p>
              <p className="mt-1 text-sm text-[#555] leading-relaxed">All strategic deliverables structured in a navigable client workspace — market research, interviews, segmentation, positioning, and brand assets.</p>
            </motion.div>
          </div>
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
            <h2 className="text-2xl md:text-3xl text-[#0a0a0a]">A redirected roadmap. A brand that works. Commercial foundations built for scale.</h2>
          </motion.div>

          <div className="flex flex-wrap gap-8">
            {[
              { icon: <RefreshCw className="w-6 h-6" style={{ color: "#0d9488" }} />, title: "Product roadmap redirected", body: "The ICP interviews validated a completely new product direction — a unified control plane for enterprise agent governance. Development accelerated from there. The product Prefactor is building today is fundamentally different from the one that existed at the start of the engagement." },
              { icon: <ShieldCheck className="w-6 h-6" style={{ color: "#0d9488" }} />, title: "Brand built for enterprise", body: "The new visual identity gave Prefactor the credibility to walk into regulated-industry and enterprise conversations without the brand working against them. The style guide means the founding team can administer the brand themselves — no ongoing designer cost." },
              { icon: <LayoutTemplate className="w-6 h-6" style={{ color: "#0d9488" }} />, title: "Commercial foundations in place", body: "Every asset — white paper, pitch deck, positioning framework, messaging architecture — was built around the new ICP and product direction. A coherent, credible story ready for the US market." },
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

      {/* BEFORE AND AFTER */}
      <section style={{ background: "#f7f7f8" }}>
        <div className="max-w-[900px] mx-auto px-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-3">Transformation</p>
            <h2 className="text-2xl md:text-3xl text-[#0a0a0a] mb-4">Before and after.</h2>
            <p className="text-sm text-[#555] leading-relaxed max-w-xl">The brand transformation speaks for itself. From a fragmented, template-driven visual identity to a cohesive, enterprise-ready brand system — built to scale without ongoing designer dependency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#aaa] mb-3">Before</p>
              <div className="rounded-xl flex items-center justify-center h-[300px]" style={{ background: "#f0f0f0", border: "2px dashed #ccc" }}>
                <span className="text-sm text-[#999]">Old website screenshot — coming soon</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#aaa] mb-3">After</p>
              <img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/175af339b_BrandGuidelines1.png" alt="Brand guidelines" className="w-full rounded-xl object-cover bg-[#e5e5e5]" />
            </motion.div>
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
              { icon: <Target className="w-5 h-5 text-[#0d2b2b]" />, title: "Positioning & Messaging", body: "New ICP personas, value proposition development, positioning statement, and full messaging architecture built for an executive buyer — not an engineering audience." },
              { icon: <Palette className="w-5 h-5 text-[#0d2b2b]" />, title: "Brand Refresh", body: "Brand strategy workshop, complete visual identity, style guide, and designer briefing and facilitation across multiple collaborative workshops with the founding team." },
              { icon: <FileText className="w-5 h-5 text-[#0d2b2b]" />, title: "White Paper", body: "Redefining Digital Trust — a thought leadership piece positioning Prefactor at the intersection of agentic AI and enterprise governance." },
              { icon: <Layout className="w-5 h-5 text-[#0d2b2b]" />, title: "Pitch Deck", body: "Investor and sales pitch deck built on a branded, reusable template — structured around the new positioning and ICP narrative." },
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
            <h3 className="text-white text-xl md:text-2xl mb-4">The frameworks from this engagement — in a system you can run yourself.</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#a8cccc" }}>
              The ICP interview methodology, market research models, segmentation and targeting approach, and positioning framework used throughout this engagement form the foundation of the GTM Builder. Available as a self-guided Notion system.
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
              If you're preparing for a raise, planning international expansion, or going to market with a complex or regulated product — let's talk.
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