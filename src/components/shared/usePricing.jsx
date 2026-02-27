import { useState, useEffect } from "react";

const PRICING = {
  AU: { from: "AUD $149" },
  GB: { from: "£79" },
  DEFAULT: { from: "USD $99" },
};

export function usePricing() {
  const [pricing, setPricing] = useState(PRICING.DEFAULT);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        if (data.country_code === "AU") setPricing(PRICING.AU);
        else if (data.country_code === "GB") setPricing(PRICING.GB);
        else setPricing(PRICING.DEFAULT);
      })
      .catch(() => setPricing(PRICING.DEFAULT));
  }, []);

  return pricing;
}