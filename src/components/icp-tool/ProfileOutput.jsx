import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import ProfileField from "./ProfileField";

function Tag({ children }) {
  return <span className="bg-[#f7f7f8] border border-[#e5e5e5] rounded-full px-3 py-1 text-xs font-medium text-[#0a0a0a]">{children}</span>;
}

export default function ProfileOutput({ formData, onDownload, onReset }) {
  const b2c = formData.businessModel === "B2C";
  const triggers = [formData.trigger1, formData.trigger2, formData.trigger3].filter(Boolean);
  const alts = [
    { n: formData.alt1name, l: formData.alt1limit },
    { n: formData.alt2name, l: formData.alt2limit },
    { n: formData.alt3name, l: formData.alt3limit },
  ].filter((a) => a.n);

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
      <div className="bg-[#0a0a0a] rounded-t-xl px-6 md:px-9 pt-9 pb-8 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#b8123f] via-[#e8195a] to-[#e8195a]/30" />
        <div className="text-xs font-semibold tracking-widest uppercase text-[#e8195a] mb-2.5">Whitehorse Labs — ICP Framework Tool</div>
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-white mb-1.5">{formData.icpName || "Ideal Customer Profile"}</h2>
        <div className="text-white/40 text-xs">
          Generated {new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })} — Whitehorse Labs ICP Framework Tool
        </div>
      </div>

      <div className="bg-white border border-t-0 border-[#e5e5e5] rounded-b-xl overflow-hidden">
        <ProfileSection title="01 — Customer Profile">
          <div className="grid sm:grid-cols-2 gap-4">
            <ProfileField label="Business Model" value={formData.businessModel} />
            <ProfileField label="Industry / Vertical" value={formData.industry} />
            <ProfileField label="Company Size" value={b2c ? formData.demographics : formData.companySize} />
            <ProfileField label="Company Revenue" value={b2c ? "—" : formData.companyRevenue} />
            <ProfileField label="Growth Stage" value={b2c ? "—" : formData.growthStage} />
            <ProfileField label="Geography" value={formData.geography} />
          </div>
          <div className="mt-3.5">
            <ProfileField label="One-Line Description" value={formData.icpOneLiner} />
          </div>
        </ProfileSection>

        <ProfileSection title="02 — The Problem">
          <div className="mb-3.5"><ProfileField label="Primary Problem" value={formData.primaryProblem} /></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <ProfileField label="Why It's Painful" value={formData.painDriver} />
            <ProfileField label="Cost of Inaction" value={formData.doNothing} />
          </div>
          <div className="mt-3.5"><ProfileField label="Desired Outcome" value={formData.desiredOutcome} /></div>
        </ProfileSection>

        <ProfileSection title="03 — Buying Triggers">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {triggers.length ? triggers.map((t, i) => <Tag key={i}>{t}</Tag>) : <span className="text-sm text-[#ccc] italic">Not specified</span>}
          </div>
          <ProfileField label="Urgency Driver" value={formData.urgency} />
        </ProfileSection>

        <ProfileSection title="04 — Current Alternatives & Your Differentiation">
          {alts.length ? (
            <div className="grid sm:grid-cols-2 gap-4 mb-3.5">
              {alts.map((a, i) => (
                <div key={i}>
                  <div className="text-[10px] font-bold text-[#888] tracking-wider uppercase mb-1">{a.n}</div>
                  <div className="text-sm text-[#555]">{a.l || "—"}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[#ccc] italic mb-3.5">No alternatives specified</p>
          )}
          <ProfileField label="Why You Win" value={formData.differentiator} />
        </ProfileSection>

        <ProfileSection title="05 — Decision Journey">
          <div className="grid sm:grid-cols-2 gap-4">
            <ProfileField label="Who Initiates" value={formData.whoInitiates} />
            <ProfileField label="Who Approves" value={formData.whoApproves} />
            <ProfileField label="Sales Cycle" value={formData.salesCycle} />
            <ProfileField label="Primary Objection" value={formData.primaryObjection} />
          </div>
          <div className="mt-3.5">
            <div className="text-[10px] font-bold text-[#888] tracking-wider uppercase mb-1.5">How They Discover Solutions</div>
            <div className="flex flex-wrap gap-1.5">
              {formData.discovery.length ? formData.discovery.map((d, i) => <Tag key={i}>{d}</Tag>) : <span className="text-sm text-[#ccc] italic">Not specified</span>}
            </div>
          </div>
        </ProfileSection>

        <ProfileSection title="06 — Qualification Signals">
          <div className="grid sm:grid-cols-2 gap-4">
            <ProfileField label="✓ Positive Signals" value={formData.positiveSignals} preLine />
            <ProfileField label="✗ Disqualifiers" value={formData.disqualifiers} preLine />
          </div>
        </ProfileSection>
      </div>

      <div className="flex flex-wrap gap-3 mt-7 items-center">
        <Button onClick={onDownload} className="bg-gradient-to-br from-[#b8123f] to-[#e8195a] hover:opacity-90 text-white font-semibold px-8">
          ↓ Download ICP Profile
        </Button>
        <Button variant="outline" onClick={onReset} className="border-[#e5e5e5] text-[#888]">
          Start Over
        </Button>
      </div>

      <div className="mt-8 bg-[#0a0a0a] rounded-xl p-8 md:p-9 flex items-center gap-8 flex-wrap relative overflow-hidden">
        <div className="flex-1 min-w-[240px]">
          <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2">Your ICP is the foundation.</h3>
          <p className="text-sm text-white/50 leading-relaxed">
            The GTM OS gives you the complete commercialisation system to build on it — segmentation, competitive analysis, positioning, messaging, and launch planning.
          </p>
        </div>
        <Link to="/BuyTheBuilderSuite">
          <Button className="bg-gradient-to-br from-[#b8123f] to-[#e8195a] hover:opacity-90 text-white font-semibold whitespace-nowrap px-8">
            Get the GTM OS →
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}