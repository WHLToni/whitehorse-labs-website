import React from "react";

export default function ToolProgress({ step, total }) {
  return (
    <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-[#e5e5e5] shadow-sm py-3">
      <div className="max-w-3xl mx-auto px-6 flex items-center gap-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-[#888] whitespace-nowrap min-w-[70px]">
          Step {step} of {total}
        </div>
        <div className="flex-1 h-[3px] bg-[#e5e5e5] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#b8123f] to-[#e8195a] rounded-full transition-all duration-500"
            style={{ width: `${((step - 1) / total) * 100}%` }}
          />
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i + 1 < step ? "bg-[#e8195a]" : i + 1 === step ? "bg-[#b8123f] scale-125" : "bg-[#e5e5e5]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}