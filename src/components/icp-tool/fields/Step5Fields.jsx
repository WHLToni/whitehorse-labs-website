import React from "react";
import FormField from "../FormField";
import { inputClass, selectClass } from "@/lib/icpToolStyles";

const DISCOVERY_OPTIONS = [
  "Word of mouth", "Google search", "LinkedIn", "Reddit / communities", "Podcasts",
  "Newsletters", "Events / conferences", "Product Hunt", "Outbound outreach", "Advisor recommendation",
];

export default function Step5Fields({ formData, setField, toggleChip }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        <FormField label="Who Initiates the Search?">
          <input className={inputClass} value={formData.whoInitiates} onChange={(e) => setField("whoInitiates", e.target.value)} placeholder="e.g. The user themselves, usually after a failed attempt at a goal" />
        </FormField>
        <FormField label="Who Approves the Purchase?">
          <input className={inputClass} value={formData.whoApproves} onChange={(e) => setField("whoApproves", e.target.value)} placeholder="e.g. The user — solo decision, low-cost impulse buy" />
        </FormField>
      </div>

      <FormField label="How Do They Discover Solutions?" hint="Select all that apply">
        <div className="flex flex-wrap gap-2 mt-1">
          {DISCOVERY_OPTIONS.map((opt) => {
            const selected = formData.discovery.includes(opt);
            return (
              <div
                key={opt}
                onClick={() => toggleChip(opt)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium cursor-pointer select-none border-[1.5px] transition-colors ${
                  selected ? "bg-[#e8195a] border-[#e8195a] text-white font-semibold" : "bg-[#f7f7f8] border-[#e5e5e5] text-[#555] hover:border-[#e8195a] hover:text-[#b8123f]"
                }`}
              >
                {opt}
              </div>
            );
          })}
        </div>
      </FormField>

      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="Typical Sales Cycle">
          <select className={selectClass} value={formData.salesCycle} onChange={(e) => setField("salesCycle", e.target.value)}>
            <option value="">Select range</option>
            <option>Same day / impulse</option><option>1–3 days</option><option>1–2 weeks</option><option>2–4 weeks</option><option>1–3 months</option><option>3–6 months</option><option>6+ months</option>
          </select>
        </FormField>
        <FormField label="Primary Objection to Purchase">
          <input className={inputClass} value={formData.primaryObjection} onChange={(e) => setField("primaryObjection", e.target.value)} placeholder="e.g. 'I've tried apps before and they never work for me'" />
        </FormField>
      </div>
    </>
  );
}