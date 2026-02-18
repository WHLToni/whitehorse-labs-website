import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, Download, ShoppingCart } from "lucide-react";

export default function StartHere() {
  return (
    <section className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            Next Step
          </p>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold tracking-tight">
            Start Here
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 text-center">
            <p className="text-xs text-[#666] uppercase tracking-widest mb-4">
              Funded startups & pre-exit owners
            </p>
            <Link
              to={createPageUrl("Services")}
              className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm"
            >
              View Services & Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 text-center">
            <p className="text-xs text-[#666] uppercase tracking-widest mb-4">
              Vibe coders & bootstrap founders
            </p>
            <Link
              to={createPageUrl("LaunchSystem")}
              className="btn-outline-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              Buy Launch System — $149
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 text-center">
            <p className="text-xs text-[#666] uppercase tracking-widest mb-4">
              Want to test the frameworks first?
            </p>
            <Link
              to={createPageUrl("ICPFramework")}
              className="btn-outline-gradient inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm"
            >
              <Download className="w-4 h-4" />
              Free ICP Framework
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}