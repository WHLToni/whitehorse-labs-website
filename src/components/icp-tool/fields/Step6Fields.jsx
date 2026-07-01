import React from "react";
import FormField from "../FormField";
import { Textarea } from "@/components/ui/textarea";

export default function Step6Fields({ formData, setField }) {
  return (
    <>
      <div className="bg-[#b3475c]/5 border-l-[3px] border-[#b3475c] rounded-r-lg px-4 py-3 text-sm italic text-[#555] mb-5">
        Signals are observable behaviours that predict whether a prospect will buy and succeed — they turn your ICP into a qualification tool.
      </div>
      <FormField label="Positive Signals" hint="Signs this prospect is a great fit">
        <Textarea
          className="min-h-[110px]"
          value={formData.positiveSignals}
          onChange={(e) => setField("positiveSignals", e.target.value)}
          placeholder={"e.g. Has recently set a new goal (fitness, career, study)\nFollows self-improvement accounts on Instagram or TikTok\nHas downloaded and abandoned habit apps before"}
        />
      </FormField>
      <FormField label="Disqualifiers" hint="Signs this prospect is NOT a good fit right now">
        <Textarea
          className="min-h-[110px]"
          value={formData.disqualifiers}
          onChange={(e) => setField("disqualifiers", e.target.value)}
          placeholder={"e.g. Already has strong routines and doesn't feel they need help\nLooking for a social / community-based accountability app"}
        />
      </FormField>
    </>
  );
}