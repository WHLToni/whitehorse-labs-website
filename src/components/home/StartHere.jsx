import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { usePricing } from "../shared/usePricing";

export default function StartHere() {
  const pricing = usePricing();
  return (
    <section className="py-24 md:py-32 bg-[#f7f7f8]">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#b3475c] mb-4">
          Ready to Start?
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-4">
          Book a 30-minute call.
        </h2>
        <p className="text-base text-[#555] leading-relaxed mb-10">
          We'll work out where you are, what you need, and whether we're a good fit.
        </p>
        <Link
          to={createPageUrl("Contact")}
          className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm bg-[#b3475c] hover:bg-[#96394c] transition-colors"
        >
          Book a Call →
        </Link>
        <p className="mt-5 text-sm text-[#555] italic">
          Not ready for a call?{" "}
          <Link
            to={createPageUrl("BuyTheFrameworks")}
            className="hover:text-[#0a0a0a] transition-colors"
          >
            Start with the DIY Toolkits{pricing ? ` from ${pricing.from}` : ""} →
          </Link>
        </p>
        <p className="mt-3 text-sm text-[#555]/40 italic">
          Looking for ongoing fractional support? Availability is limited —{" "}
          <Link
            to={createPageUrl("Contact")}
            className="hover:text-[#555]/70 transition-colors"
          >
            get in touch to discuss →
          </Link>
        </p>
      </div>
    </section>
  );
}