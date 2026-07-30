import React from "react";

export default function FormField({ label, hint, error, children }) {
  return (
    <div className="mb-5 last:mb-0">
      <label className="block text-sm font-semibold text-[var(--ink)] mb-1.5">
        {label}
        {hint && <span className="font-normal italic text-[var(--muted)] ml-1 text-xs">{hint}</span>}
      </label>
      {children}
      {error && <p className="text-xs text-[#A02E44] mt-1">{error}</p>}
    </div>
  );
}