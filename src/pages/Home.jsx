import React from "react";
import HeroSection from "../components/home/HeroSection";
import ChoosePath from "../components/home/ChoosePath";
import WhoIWorkWith from "../components/home/WhoIWorkWith";
import Credentials from "../components/home/Credentials";
import StartHere from "../components/home/StartHere";

export default function Home() {
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