import React from "react";

export default function FormField({ label, hint, error, children }) {
  return (
    <div className="mb-5 last:mb-0">
      <label className="block text-sm font-semibold text-[#0a0a0a] mb-1.5">
        {label}
        {hint && <span className="font-normal italic text-[#888] ml-1 text-xs">{hint}</span>}
      </label>
      {children}
      {error && <p className="text-xs text-[#c0392b] mt-1">{error}</p>}
    </div>
  );
}