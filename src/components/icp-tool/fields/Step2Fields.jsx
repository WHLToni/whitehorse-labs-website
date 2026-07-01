import React from "react";
import FormField from "../FormField";
import { Textarea } from "@/components/ui/textarea";
import { invalidClass } from "@/lib/icpToolStyles";

export default function Step2Fields({ formData, setField, errors }) {
  return (
    <>
      <div className="bg-[#e8195a]/5 border-l-[3px] border-[#e8195a] rounded-r-lg px-4 py-3 text-sm italic text-[#555] mb-5">
        Write this in your customer's language — the words they would use to describe the problem, not the words you use to describe your solution.
      </div>
      <FormField label="Primary Problem" error={errors.primaryProblem}>
        <Textarea className={errors.primaryProblem ? invalidClass : ""} value={formData.primaryProblem} onChange={(e) => setField("primaryProblem", e.target.value)} placeholder="e.g. They want to build better daily habits — exercise, sleep, focus — but lack structure and accountability." />
      </FormField>
      <FormField label="Why Is It Painful?" hint="Time, money, risk, stress, reputation?">
        <Textarea value={formData.painDriver} onChange={(e) => setField("painDriver", e.target.value)} placeholder="e.g. They feel like they're falling behind — at work, at the gym, in life generally." />
      </FormField>
      <FormField label="What Happens If They Do Nothing?">
        <Textarea value={formData.doNothing} onChange={(e) => setField("doNothing", e.target.value)} placeholder="e.g. They keep relying on willpower alone, the habits don't stick." />
      </FormField>
    </>
  );
}