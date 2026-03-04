import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import ChoosePath from "../components/home/ChoosePath";
import WhoIWorkWith from "../components/home/WhoIWorkWith";
import Credentials from "../components/home/Credentials";
import StartHere from "../components/home/StartHere";

export default function Home() {
  useEffect(() => {
    document.title = "Whitehorse Labs — Fractional GTM for Complex & Regulated Products";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Senior go-to-market expertise for complex and regulated products. Fixed scope, fixed price, delivered in weeks. Medtech, fintech, SaaS.");
  }, []);

  return (
    <div>
      <HeroSection />
      <Credentials />
      <WhoIWorkWith />
      <ChoosePath />
      <StartHere />
    </div>
  );
}