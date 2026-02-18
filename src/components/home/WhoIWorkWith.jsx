import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Rocket, TrendingUp, Building2, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  {
    icon: Rocket,
    title: "Funded Startups (Seed to Series B)",
    description: "You've raised capital and need to build commercial foundations — segmentation, positioning, GTM strategy — without hiring a full team or paying agency retainers.",
    color: "#E91E8C",
  },
  {
    icon: TrendingUp,
    title: "Pre-Exit Business Owners",
    description: "You're planning to sell in the next 3-5 years. You need to digitise, tighten the brand, and build systems that increase valuation and make the business attractive to buyers.",
    color: "#7B5FB5",
  },
  {
    icon: Building2,
    title: "Corporate Innovation Units",
    description: "You're operating like a well-funded startup inside a larger organisation, with regulatory and stakeholder complexity. You need someone who understands both startup speed and enterprise rigour.",
    color: "#4BA4D8",
  },
  {
    icon: Code,
    title: "Vibe Coders Building Their Own Products",
    description: "You've built an MVP that works. You don't know how to position it, who to sell it to, or how to launch it. You need a commercialisation framework, not a $20K consultant.",
    color: "#00C4E0",
  },
];

export default function WhoIWorkWith() {
  return (
    <section className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
            Clients
          </p>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold tracking-tight">
            Who I Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-white/10 transition-colors"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: `${a.color}15` }}
              >
                <a.icon className="w-5 h-5" style={{ color: a.color }} />
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold mb-3">{a.title}</h3>
              <p className="text-[#999] text-sm leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2">
          <Link
            to={createPageUrl("LaunchSystem")}
            className="text-[#00C4E0] text-sm font-medium hover:text-[#E91E8C] transition-colors inline-flex items-center gap-2"
          >
            Vibe coder? Start with the $149 Launch System
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}