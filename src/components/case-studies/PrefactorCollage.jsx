import React from "react";

// Prefactor brand deliverables, stacked as a collage — no frames, just soft
// shadows and slight rotation so the assets read like physical documents.
const MAIN = "https://media.base44.com/images/public/6995347084af76a3154d3f6b/25b69fbc0_PitchDeckCover.png";
const WHITEPAPER = "https://media.base44.com/images/public/6995347084af76a3154d3f6b/b62e3595f_Whitepaper.png";
const AD = "https://media.base44.com/images/public/6995347084af76a3154d3f6b/dc740cd2e_RedditAd1.png";

export default function PrefactorCollage() {
  return (
    <div className="pf-collage reveal">
      <img
        className="pf-collage__main"
        src={MAIN}
        alt="Prefactor pitch deck cover — the MCP-Native Agent Control Plane"
      />
      <img
        className="pf-collage__wp"
        src={WHITEPAPER}
        alt="Prefactor white paper — Redefining Digital Trust"
      />
      <img
        className="pf-collage__ad"
        src={AD}
        alt="Prefactor Reddit ad creative"
      />
    </div>
  );
}