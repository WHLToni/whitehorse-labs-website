import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function CTAButton({ label = "Book a 15-minute chat", showMobile = true }) {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <Link
        to={createPageUrl("Contact")}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm bg-[#b3475c] hover:bg-[#96394c] transition-colors"
      >
        {label}
      </Link>
      {showMobile && (
        <p className="text-xs text-[#888]">
          Or text me on <span className="text-[#b3475c] font-semibold">[MOBILE]</span>
        </p>
      )}
    </div>
  );
}