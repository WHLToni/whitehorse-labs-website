import React from "react";
import FormField from "../FormField";
import { inputClass, invalidClass, selectClass } from "@/lib/icpToolStyles";

export default function Step1Fields({ formData, setField, errors }) {
  const b2c = formData.businessModel === "B2C";
  const cls = (key) => `${inputClass} ${errors[key] ? invalidClass : ""}`;

  return (
    <>
      <div className="bg-[#b3475c]/5 border-l-[3px] border-[#b3475c] rounded-r-lg px-4 py-3 text-sm italic text-[#555] mb-5">
        Start with your best current hypothesis. You will refine this as you learn — getting specific now is more valuable than waiting for certainty.
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        <FormField label="Business Model" hint="B2B, B2C, or B2G?" error={errors.businessModel}>
          <select className={`${selectClass} ${errors.businessModel ? invalidClass : ""}`} value={formData.businessModel} onChange={(e) => setField("businessModel", e.target.value)}>
            <option value="">Select one</option>
            <option value="B2B">B2B — selling to businesses</option>
            <option value="B2C">B2C — selling to consumers</option>
            <option value="B2G">B2G — selling to government</option>
            <option value="B2NGO">B2NGO — selling to non-profits / NGOs</option>
          </select>
        </FormField>
        <FormField label="Your Industry Vertical" hint="e.g. health tech, legal services, retail, SaaS" error={errors.industry}>
          <input className={cls("industry")} value={formData.industry} onChange={(e) => setField("industry", e.target.value)} placeholder="e.g. Health and wellness / productivity apps" />
        </FormField>
      </div>

      {!b2c && (
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          <FormField label="Company Size" hint="employees">
            <select className={selectClass} value={formData.companySize} onChange={(e) => setField("companySize", e.target.value)}>
              <option value="">Select range</option>
              <option>1–10 (Micro)</option><option>11–50 (Small)</option><option>51–200 (Mid-market)</option><option>201–1000 (Growth)</option><option>1000+ (Enterprise)</option>
            </select>
          </FormField>
          <FormField label="Growth Stage">
            <select className={selectClass} value={formData.growthStage} onChange={(e) => setField("growthStage", e.target.value)}>
              <option value="">Select stage</option>
              <option>Pre-revenue / Idea stage</option><option>Early traction (Seed / Pre-Seed)</option><option>Scaling (Series A–B)</option><option>Growth (Series C+)</option><option>Established / Enterprise</option>
            </select>
          </FormField>
        </div>
      )}

      {!b2c && (
        <FormField label="Company Revenue" hint="approximate annual revenue">
          <select className={selectClass} value={formData.companyRevenue} onChange={(e) => setField("companyRevenue", e.target.value)}>
            <option value="">Select range</option>
            <option>Under $1M AUD</option><option>$1M – $10M AUD</option><option>$10M – $50M AUD</option><option>$50M+ (Enterprise)</option>
          </select>
        </FormField>
      )}

      {b2c && (
        <FormField label="Customer Demographics" hint="Age, life stage, location, income">
          <input className={inputClass} value={formData.demographics} onChange={(e) => setField("demographics", e.target.value)} placeholder="e.g. Males 18–28, living in Australian cities, in work or study" />
        </FormField>
      )}

      <FormField label="Geography" hint="Where are you targeting first?" error={errors.geography}>
        <input className={cls("geography")} value={formData.geography} onChange={(e) => setField("geography", e.target.value)} placeholder="e.g. Australia — major cities first (Sydney, Melbourne, Brisbane)" />
      </FormField>
    </>
  );
}