import React from "react";

export default function ProfileField({ label, value, preLine }) {
  const empty = !value;
  return (
    <div>
      <div className="text-[10px] font-bold text-[#888] tracking-wider uppercase mb-1">{label}</div>
      <div className={`text-sm text-[#0a0a0a] leading-relaxed ${empty ? "text-[#ccc] italic" : ""} ${preLine ? "whitespace-pre-line" : ""}`}>
        {value || "Not specified"}
      </div>
    </div>
  );
}