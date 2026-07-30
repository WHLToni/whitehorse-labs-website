import React from "react";

export default function ToolProgress({ step, total }) {
  return (
    <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-[#E1E7E9] shadow-sm py-3">
      <div className="max-w-3xl mx-auto px-6 flex items-center gap-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)] whitespace-nowrap min-w-[70px]">
          Step {step} of {total}
        </div>
        <div className="flex-1 h-[3px] bg-[#E1E7E9] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#A02E44] to-[#C13B54] rounded-full transition-all duration-500"
            style={{ width: `${((step - 1) / total) * 100}%` }}
          />
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i + 1 < step ? "bg-[#C13B54]" : i + 1 === step ? "bg-[#A02E44] scale-125" : "bg-[#E1E7E9]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}