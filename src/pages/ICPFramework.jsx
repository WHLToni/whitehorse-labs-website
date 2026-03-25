import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const diagnosisPoints = [
  "High interest, yet conversions fall flat",
  "Vague messaging that fails to connect with ideal buyers",
  "Sales cycles are dragging, unpredictable, and inefficient",
  "Your pipeline is full, but lead quality and fit are low",
  "A promising product struggling to gain market traction",
];

const whatItGives = [
  "Pinpoint your highest-value, most convertible buyers",
  "Clearly define who not to target, saving valuable time and resources",
  "Uncover the precise triggers that drive purchase decisions",
  "Achieve seamless alignment across product, marketing, and sales efforts",
];

const outcomes = [
  "Messaging becomes specific and relevant",
  "Lead quality improves",
  "Sales conversations move faster",
];

function CTABlock() {
  return (
    <div className="flex flex-col items-start gap-2">
      <button className="inline-flex items-center gap-2 text-[#e8195a] font-semibold px-8 py-4 rounded-lg text-base border-2 border-[#e8195a] hover:bg-[#e8195a]/5 transition-colors">
        Define Your ICP
      </button>
      <p className="text-[#888] text-sm">Get to a clear, usable definition in under 10 minutes.</p>
    </div>
  );
}

export default function ICPFramework() {
  return (
    <div>

      {/* HERO */}
      <section className="py-20 md:py-28 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] leading-tight mb-6">
              If your product isn't selling, you haven't clearly defined who it's for.
            </h1>
            <p className="text-[#555] text-base leading-relaxed mb-10">
              ICP stands for Ideal Customer Profile. It defines who is most likely to buy, and why.
              When it's unclear, messaging, sales, and growth all become harder. This <strong>free ICP Tool</strong> helps you define it properly in under 10 minutes.
            </p>
            <CTABlock />
          </motion.div>
        </div>
      </section>

      {/* DIAGNOSIS + WHAT THIS IS — two columns */}
      <section className="py-16 md:py-20 bg-[#f7f7f8] border-b border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left: Diagnosis */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8">Recognize These Challenges?</h2>
              <div className="space-y-4 mb-8">
                {diagnosisPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] mt-2 flex-shrink-0" />
                    <span className="text-[#333] text-base">{point}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#888] text-sm">This often points back to ICP clarity.</p>
            </div>

            {/* Right: What this fixes */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8">Unlock Precision: How Our ICP Tool Helps</h2>
              <p className="text-[#555] text-base leading-relaxed mb-6">
                Our free ICP tool provides a clear, data-driven methodology to pinpoint your ideal customers, moving beyond assumptions to focus on real-world buying behaviors. This means more effective outreach and higher conversion rates.
              </p>
              <div className="space-y-4 mb-6">
                {whatItGives.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-[#0a0a0a] flex-shrink-0" />
                    <span className="text-[#333] text-base">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#888] text-sm">Distilled from two decades of hands-on experience in product marketing and go-to-market strategy, this framework provides battle-tested insights for your business.</p>
            </div>

          </div>
        </div>
      </section>

      {/* OUTCOME + CTA */}
      <section className="py-16 md:py-24 bg-[#f7f7f8]">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8">How does this improve growth?</h2>
          <div className="space-y-4 mb-12">
            {outcomes.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 text-[#0a0a0a] flex-shrink-0" />
                <span className="text-[#333] text-base">{item}</span>
              </div>
            ))}
          </div>
          <CTABlock />
          <p className="text-[#bbb] text-xs mt-4">No email spam. No generic output.</p>
        </div>
      </section>

    </div>
  );
}