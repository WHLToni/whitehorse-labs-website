import React from "react";
import { ExternalLink } from "lucide-react";

export default function AboutBio() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">About</p>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a0a0a] mb-6">
        Who the hell am I, and why should you hire me?
      </h2>

      <h3 className="text-base font-bold text-[#0a0a0a] mb-2">Full-Stack GTM Expertise</h3>
      <p className="text-[#555] text-sm leading-relaxed mb-3">
        Product and Go-To-Market (or Product Marketing) are often treated as a relay race. Product throws the 'what' over the wall; Marketing tries to figure out the 'why.'
      </p>
      <p className="text-[#555] text-sm leading-relaxed mb-3">A whole lot of value gets lost in the handoff.</p>
      <p className="text-[#0a0a0a] text-sm font-semibold mb-6">I eliminate the wall.</p>

      <p className="text-[#555] text-sm leading-relaxed mb-4">
        I've spent 20+ years in product commercialisation roles, beginning in sales, completing an MBA and moving into Product and Marketing Management. Most of my career was spent in regulated sectors including medical technology (pharma, devices and software), fintech, construction tech, veterinary tech. I provide a rare full-stack GTM capability, with a heavy lean towards (but not limited to) high-growth SaaS.
      </p>
      <p className="text-[#555] text-sm leading-relaxed mb-4">
        I can lead upstream product strategy (R&D, product definition, roadmapping and development) and downstream execution (segmentation & targeting, positioning, messaging and launch) — or step in to solve for just one part of the spectrum.
      </p>
      <p className="text-[#555] text-sm leading-relaxed mb-4">
        From seed-stage startups to managing $20M+ products for publicly listed brands, across Asia Pacific and the USA, I've operated with both enterprise budgets and bootstrap constraints.
      </p>
      <p className="text-[#555] text-sm leading-relaxed mb-6">
        I don't run workshops and hand you a deck — I build the systems and foundations that your team needs to take your product to market and win. You get the impact of a cross-functional product and GTM team, delivered by one senior leader at a fraction of the cost.
      </p>

      <a
        href="https://www.linkedin.com/in/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#E91E8C] hover:underline mb-12"
      >
        My LinkedIn Profile <ExternalLink className="w-3.5 h-3.5" />
      </a>

      <div className="mt-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-6">Brands I've worked with</p>
        {/* Logo placeholders — to be replaced */}
        <div className="flex flex-wrap gap-6 items-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-8 w-20 bg-[#e5e5e5] rounded opacity-40" />
          ))}
        </div>
      </div>
    </div>
  );
}