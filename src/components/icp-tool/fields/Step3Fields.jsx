import React from "react";
import FormField from "../FormField";
import { Textarea } from "@/components/ui/textarea";
import { inputClass, invalidClass } from "@/lib/icpToolStyles";

export default function Step3Fields({ formData, setField, errors }) {
  return (
    <>
      <div className="bg-[#e8195a]/5 border-l-[3px] border-[#e8195a] rounded-r-lg px-4 py-3 text-sm italic text-[#555] mb-5">
        Triggers explain when your customer goes from "this would be nice" to "I need to solve this now."
      </div>
      <FormField label="Primary Buying Trigger" error={errors.trigger1}>
        <input className={`${inputClass} ${errors.trigger1 ? invalidClass : ""}`} value={formData.trigger1} onChange={(e) => setField("trigger1", e.target.value)} placeholder="e.g. Starting a new job or semester and wanting to get on top of things" />
      </FormField>
      <FormField label="Secondary Trigger" hint="optional">
        <input className={inputClass} value={formData.trigger2} onChange={(e) => setField("trigger2", e.target.value)} placeholder="e.g. New Year's resolution or post-holiday reset moment" />
      </FormField>
      <FormField label="Third Trigger" hint="optional">
        <input className={inputClass} value={formData.trigger3} onChange={(e) => setField("trigger3", e.target.value)} placeholder="e.g. A friend recommends it or they see a relatable post on social media" />
      </FormField>
      <FormField label="Decision Urgency" hint="What makes this a now problem, not a later problem?">
        <Textarea value={formData.urgency} onChange={(e) => setField("urgency", e.target.value)} placeholder="e.g. They've just committed to a goal and know without structure they'll lose momentum." />
      </FormField>
    </>
  );
}