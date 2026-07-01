import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function EmailCapture({ onSubmit, onSkip }) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    await onSubmit(email.trim());
    setSubmitting(false);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0a0a0a] rounded-xl p-9 md:p-10 relative overflow-hidden">
      <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-2">Your ICP Profile Is Ready.</h3>
      <p className="text-white/50 text-sm mb-6 max-w-md">
        Join our newsletter and be the first to access new free tools, frameworks, and GTM resources from Whitehorse Labs — no spam, unsubscribe any time.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2.5 flex-wrap">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 min-w-[220px] px-4 py-2.5 rounded-lg bg-white/10 border-[1.5px] border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#b3475c]"
        />
        <Button type="submit" disabled={submitting} className="bg-gradient-to-br from-[#96394c] to-[#b3475c] hover:opacity-90 text-white font-semibold px-8">
          {submitting ? "Joining..." : "Join & Download"}
        </Button>
      </form>
      <button onClick={onSkip} className="block mt-4 text-xs text-white/30 hover:text-white/60 underline">
        No thanks, just show me my profile →
      </button>
    </motion.div>
  );
}