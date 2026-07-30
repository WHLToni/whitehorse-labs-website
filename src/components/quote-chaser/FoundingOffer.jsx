import React from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

export default function FoundingOffer() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border-2 border-[#b3475c] p-8 md:p-10 text-center"
          style={{ background: "rgba(179,71,92,0.06)" }}
        >
          <span className="bg-[#b3475c] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Founding Client Offer
          </span>
          <p className="text-base md:text-lg text-[#333] leading-relaxed mb-8 max-w-xl mx-auto mt-10">
            First three clients: $449/mo instead of $549, and $490 setup fee waived - in exchange for an honest testimonial once we've recovered your first job. When these spots are gone, they're gone.
          </p>
          <div className="max-w-xs sm:max-w-none mx-auto">
            <CTAButton label="Grab a founding spot" showMobile={false} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}