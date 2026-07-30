import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function CTAButton({ label = "Book a 15-minute chat", showMobile = true }) {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <Link
        to="/quote-chaser-contact"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-bold px-10 py-5 rounded-lg text-lg bg-[#C13B54] hover:bg-[#A02E44] transition-colors shadow-[0_8px_30px_rgba(193,59,84,0.4)]"
      >
        {label}
      </Link>
      {showMobile && (
        <p className="text-base text-white/70 mt-1">
          Or text me on <span className="text-[#C13B54] font-semibold">0431 979 981</span>
        </p>
      )}
    </div>
  );
}