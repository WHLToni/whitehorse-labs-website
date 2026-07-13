import React, { useEffect } from "react";
import Hero from "@/components/quote-chaser/Hero";
import Problem from "@/components/quote-chaser/Problem";
import HowItWorks from "@/components/quote-chaser/HowItWorks";
import Pricing from "@/components/quote-chaser/Pricing";
import FoundingOffer from "@/components/quote-chaser/FoundingOffer";
import WhoBehind from "@/components/quote-chaser/WhoBehind";
import TheMaths from "@/components/quote-chaser/TheMaths";
import FinalCTA from "@/components/quote-chaser/FinalCTA";

export default function QuoteChaser() {
  useEffect(() => {
    document.title =
      "Quote Chaser - Stop losing jobs you already quoted | Whitehorse Labs";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Most trade businesses never follow up their quotes. Quote Chaser does it for you - three polite touches over ten days, under your name. From $249/mo."
      );
  }, []);

  return (
    <div>
      <Hero />
      <Problem />
      <HowItWorks />
      <Pricing />
      <FoundingOffer />
      <WhoBehind />
      <TheMaths />
      <FinalCTA />
    </div>
  );
}