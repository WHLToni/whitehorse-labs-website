import React, { useEffect } from "react";
import SpecialistHero from "../components/specialists/SpecialistHero";
import WhyWorkWithMe from "../components/specialists/WhyWorkWithMe";
import WhatICheck from "../components/specialists/WhatICheck";
import WhatIDo from "../components/specialists/WhatIDo";
import HowItWorks from "../components/specialists/HowItWorks";
import SpecialistFAQ from "../components/specialists/SpecialistFAQ";
import SpecialistContact from "../components/specialists/SpecialistContact";

export default function Specialists() {
  useEffect(() => {
    document.title = "Marketing for medical specialists | Whitehorse Labs";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Compliant, senior marketing for specialist practices. Website compliance, fractional marketing and safe AI adoption from a 13-year medical device and pharma marketer."
      );
  }, []);

  return (
    <div className="ds-page sp-page">
      <SpecialistHero />
      <WhyWorkWithMe />
      <WhatICheck />
      <WhatIDo />
      <HowItWorks />
      <SpecialistFAQ />
      <SpecialistContact />
    </div>
  );
}