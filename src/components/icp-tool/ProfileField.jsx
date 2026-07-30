import React from "react";

export default function ProfileField({ label, value, preLine }) {
  const empty = !value;
  return (
    <div>
      <div className="text-[10px] font-bold text-[var(--muted)] tracking-wider uppercase mb-1">{label}</div>
      <div className={`text-sm text-[var(--ink)] leading-relaxed ${empty ? "text-[var(--muted)] italic" : ""} ${preLine ? "whitespace-pre-line" : ""}`}>
        {value || "Not specified"}
      </div>
    </div>
  );
}