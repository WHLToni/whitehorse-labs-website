import React from "react";
import FormField from "../FormField";
import { Textarea } from "@/components/ui/textarea";
import { inputClass, invalidClass } from "@/lib/icpToolStyles";

export default function Step7Fields({ formData, setField, errors }) {
  return (
    <>
      <FormField label="ICP Name" hint="A short, memorable label" error={errors.icpName}>
        <input className={`${inputClass} ${errors.icpName ? invalidClass : ""}`} value={formData.icpName} onChange={(e) => setField("icpName", e.target.value)} placeholder="e.g. The Ambitious Young Australian" />
      </FormField>
      <FormField label="One-Line Description" error={errors.icpOneLiner}>
        <Textarea className={errors.icpOneLiner ? invalidClass : ""} value={formData.icpOneLiner} onChange={(e) => setField("icpOneLiner", e.target.value)} placeholder="e.g. A young Australian man (18–28) who wants to build better daily habits but struggles to stay consistent." />
      </FormField>
      <FormField label="Desired Outcome" hint="What does success look like for them?">
        <Textarea value={formData.desiredOutcome} onChange={(e) => setField("desiredOutcome", e.target.value)} placeholder="e.g. To wake up with a clear daily routine and feel in control of their time and energy." />
      </FormField>
    </>
  );
}