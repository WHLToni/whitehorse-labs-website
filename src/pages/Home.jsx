import React from "react";
import HeroSection from "../components/home/HeroSection";
import FractionalCompareV1 from "../components/home/FractionalCompareV1";
import FractionalCompareV3 from "../components/home/FractionalCompareV3";
import ChoosePath from "../components/home/ChoosePath";
import WhoIWorkWith from "../components/home/WhoIWorkWith";
import Credentials from "../components/home/Credentials";
import StartHere from "../components/home/StartHere";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="bg-white py-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C]">Option 1 — Card-based with elevation & hover</p>
      </div>
      <FractionalCompareV1 />
      <div className="bg-white py-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#7B5FB5]">Option 2 — Accordion (mobile) / Horizontal (desktop)</p>
      </div>
      <FractionalCompareV3 />
      <ChoosePath />
      <WhoIWorkWith />
      <Credentials />
      <StartHere />
    </div>
  );
}