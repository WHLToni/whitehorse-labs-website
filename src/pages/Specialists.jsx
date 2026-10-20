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
        "Marketing leadership and regulatory review for specialist medical practices. Ahpra, TGA and privacy compliance, fractional marketing and AI adoption, from a consultant with thirteen years in medical devices and pharmaceuticals."
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