import React, { useEffect } from "react";
import SpecialistHero from "../components/specialists/SpecialistHero";
import WhatICheck from "../components/specialists/WhatICheck";
import WhyWorkWithMe from "../components/specialists/WhyWorkWithMe";
import TheJourney from "../components/specialists/TheJourney";
import HowItWorks from "../components/specialists/HowItWorks";
import SpecialistFAQ from "../components/specialists/SpecialistFAQ";
import SpecialistContact from "../components/specialists/SpecialistContact";
import usePageViewTracking from "@/lib/usePageViewTracking";

export default function Specialists() {
  usePageViewTracking("specialists_page_view", "/specialists");

  useEffect(() => {
    document.title = "Website compliance and marketing for medical specialists | Whitehorse Labs";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Is your practice website clear, credible and compliant? Reviews and implementation against Ahpra, TGA and privacy requirements, then ongoing fractional marketing leadership, from a consultant with 13 years in medical devices and pharmaceuticals."
      );
  }, []);

  return (
    <div className="ds-page sp-page">
      <SpecialistHero />
      <WhatICheck />
      <WhyWorkWithMe />
      <TheJourney />
      <HowItWorks />
      <SpecialistFAQ />
      <SpecialistContact />
    </div>
  );
}