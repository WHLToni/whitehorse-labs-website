import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

export default function StartHere() {
  return (
    <section className="py-24 md:py-32 bg-[#f7f7f8]">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">
          Ready to Start?
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-6">
          Let's take your product to market.
        </h2>
        <p className="text-base text-[#555] leading-relaxed mb-10">
          Book a 30-minute call and we'll work out where you are, what you need, and whether we're a good fit.
        </p>
        <Link
          to={createPageUrl("Contact")}
          className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm"
          style={{ background: "#e8195a" }}
        >
          Book a Call →
        </Link>
        <p className="mt-5 text-sm text-[#555] italic">
          Not ready for a call?{" "}
          <Link
            to={createPageUrl("LaunchSystem")}
            className="hover:text-[#0a0a0a] transition-colors"
          >
            Start with the $149 Launch System →
          </Link>
        </p>
      </div>
    </section>
  );
}