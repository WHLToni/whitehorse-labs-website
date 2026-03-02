import { useState, useEffect } from "react";

const PRICING = {
  AU: { 
    single: "AUD $149", 
    both: "AUD $249", 
    save: "save AUD $49", 
    from: "AUD $149", 
    gtmBtn: "Get the GTM OS — AUD $149 →", 
    buildBtn: "Get the Build OS — AUD $149 →", 
    bothBtn: "Get Both — AUD $249 →" 
  },
  GB: { 
    single: "£79", 
    both: "£129", 
    save: "save £29", 
    from: "£79", 
    gtmBtn: "Get the GTM OS — £79 →", 
    buildBtn: "Get the Build OS — £79 →", 
    bothBtn: "Get Both — £129 →" 
  },
  DEFAULT: { 
    single: "USD $99", 
    both: "USD $159", 
    save: "save $39", 
    from: "USD $99", 
    gtmBtn: "Get the GTM OS — USD $99 →", 
    buildBtn: "Get the Build OS — USD $99 →", 
    bothBtn: "Get Both — USD $159 →" 
  },
};

export function usePricing() {
  const [pricing, setPricing] = useState(null);
  
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