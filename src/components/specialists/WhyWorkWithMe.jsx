import React from "react";
import { motion } from "framer-motion";

const points = [
  "13 years in medical devices, pharma and medical research tech, including AI and real-world data, across sales, marketing, TGA and product commercialisation.",
  "Five therapy areas: respiratory, gastroenterology, renal, pain management and cosmetic.",
  "MTAA Advertising Medical Products certified, with a clinical background in the Queensland Ambulance Service.",
];

export default function WhyWorkWithMe() {
  return (
    <section className="ds-band">
      <div className="ds-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-md overflow-hidden border border-[var(--line)] max-w-[400px]">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/b6cb39724_Headshot.jpeg"
                alt="Toni Morrow, Whitehorse Labs"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <h2 className="ds-display text-[clamp(26px,4vw,40px)] mb-8">
              Experience in medical devices, pharmaceuticals and health technology
            </h2>
            <ul className="flex flex-col gap-5">
              {points.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="w-2.5 h-2.5 bg-[var(--accent)] flex-shrink-0 mt-2"
                    aria-hidden="true"
                  />
                  <p className="text-[#3a4649] text-base leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
            <p className="text-[#3a4649] text-base leading-relaxed mt-6">
              I also live with a genetic connective tissue disorder and run a patient information and advocacy platform for others with the condition. That experience informs how I think about the information patients need when they are choosing a specialist.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}