import React from "react";
import FormField from "../FormField";
import { Textarea } from "@/components/ui/textarea";
import { inputClass, invalidClass } from "@/lib/icpToolStyles";

function AltRow({ label, hint, nameVal, limitVal, onNameChange, onLimitChange, namePlaceholder, limitPlaceholder }) {
  return (
    <FormField label={label} hint={hint}>
      <div className="grid sm:grid-cols-2 gap-3">
        <input className={inputClass} value={nameVal} onChange={onNameChange} placeholder={namePlaceholder} />
        <input className={inputClass} value={limitVal} onChange={onLimitChange} placeholder={limitPlaceholder} />
      </div>
    </FormField>
  );
}

export default function Step4Fields({ formData, setField, errors }) {
  return (
    <>
      <div className="bg-[#b3475c]/5 border-l-[3px] border-[#b3475c] rounded-r-lg px-4 py-3 text-sm italic text-[#555] mb-5">
        Be specific — name tools, agencies, workarounds, or the status quo. The status quo is always a competitor.
      </div>
      <AltRow label="Current Solution 1" nameVal={formData.alt1name} limitVal={formData.alt1limit}
        onNameChange={(e) => setField("alt1name", e.target.value)} onLimitChange={(e) => setField("alt1limit", e.target.value)}
        namePlaceholder="e.g. Generic habit apps (Habitica, Streaks)" limitPlaceholder="e.g. Not personalised, easy to ignore" />
      <AltRow label="Current Solution 2" hint="optional" nameVal={formData.alt2name} limitVal={formData.alt2limit}
        onNameChange={(e) => setField("alt2name", e.target.value)} onLimitChange={(e) => setField("alt2limit", e.target.value)}
        namePlaceholder="e.g. YouTube motivation videos" limitPlaceholder="e.g. No structure or accountability" />
      <AltRow label="Current Solution 3" hint="optional" nameVal={formData.alt3name} limitVal={formData.alt3limit}
        onNameChange={(e) => setField("alt3name", e.target.value)} onLimitChange={(e) => setField("alt3limit", e.target.value)}
        namePlaceholder="e.g. Willpower alone / doing nothing" limitPlaceholder="e.g. Habits don't stick past 2 weeks" />
      <FormField label="Your Key Differentiator" hint="Why you over all of the above?" error={errors.differentiator}>
        <Textarea className={errors.differentiator ? invalidClass : ""} value={formData.differentiator} onChange={(e) => setField("differentiator", e.target.value)} placeholder="e.g. Our app uses science-backed micro-habits so habits actually stick." />
      </FormField>
    </>
  );
}