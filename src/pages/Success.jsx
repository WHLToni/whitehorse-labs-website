import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ExternalLink } from "lucide-react";

const NOTION_LINKS = {
  gtm: "https://fresh-clownfish-6e5.notion.site/The-GTM-OS-3299886dc21e80609b82c49174f23014?source=copy_link",
};

const PRODUCT_NAMES = {
  gtm: "The GTM OS",
};

export default function Success() {
  const [product, setProduct] = useState("gtm");

  useEffect(() => {
    document.title = "Purchase Successful — Whitehorse Labs";
    const params = new URLSearchParams(window.location.search);
    const p = params.get("product");
    if (p) setProduct(p);
  }, []);

  const notionLink = NOTION_LINKS[product] || NOTION_LINKS.gtm;
  const productName = PRODUCT_NAMES[product] || "Your Framework";

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#e8195a]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-[#e8195a]" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-3">
          Payment Confirmed
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4 tracking-tight">
          You're in. Let's get to work.
        </h1>
        <p className="text-[#666] text-base leading-relaxed mb-8">
          Thank you for purchasing <strong>{productName}</strong>. A confirmation email with your access link is on its way. Click below to access your Notion portal now.
        </p>

        <a
          href={notionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm mb-4" style={{ color: '#e8195a', background: 'white', border: '2px solid #e8195a' }}
        >
          <ExternalLink className="w-4 h-4" />
          Access {productName} →
        </a>

        <p className="text-[#aaa] text-xs mt-6">
          Check your inbox for a confirmation email with this link for your records.
        </p>

        <div className="mt-10 pt-8 border-t border-[#e5e5e5]">
          <Link
            to="/"
            className="text-sm text-[#888] hover:text-[#0a0a0a] transition-colors"
          >
            ← Back to Whitehorse Labs
          </Link>
        </div>
      </motion.div>
    </div>
  );
}