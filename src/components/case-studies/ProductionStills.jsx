import React from 'react';
import { Play } from 'lucide-react';

const DEFAULT_STILLS = [
  {
    src: 'https://media.base44.com/images/public/6995347084af76a3154d3f6b/729b57181_VideoOpeningScene.png',
    alt: 'Opening scene: conference room with on-screen question overlay',
    scene: '01 · Opening',
  },
  {
    src: 'https://media.base44.com/images/public/6995347084af76a3154d3f6b/6381ea764_VideoFirstSpeaker.png',
    alt: 'Speaker interview: Joshua Mendez, Secondary Systems Manager',
    scene: '02 · Speaker',
  },
  {
    src: 'https://media.base44.com/images/public/6995347084af76a3154d3f6b/870ece2db_Videosecondspeaker.png',
    alt: 'Speaker interview: Nancy Irudayarai, SCADA and Control Engineer',
    scene: '03 · Speaker',
  },
  {
    src: 'https://media.base44.com/images/public/6995347084af76a3154d3f6b/e6955877e_VideoExhibitorInterview.png',
    alt: 'Exhibitor interview: Stephen Coward, Technical Manager',
    scene: '04 · Exhibitor',
  },
  {
    src: 'https://media.base44.com/images/public/6995347084af76a3154d3f6b/5eda0ea10_VideoIllustration.png',
    alt: 'Animated explainer illustration: people and systems',
    scene: '05 · Motion graphic',
  },
  {
    src: 'https://media.base44.com/images/public/6995347084af76a3154d3f6b/791fbe036_VideoClosingscene.png',
    alt: 'Closing title card: OT, ICS & SCADA Automation Conference, Melbourne 2026',
    scene: '06 · Close',
  },
];

export default function ProductionStills({ stills = DEFAULT_STILLS, label = 'Production stills' }) {
  return (
    <div className="contact-sheet reveal">
      <div className="cs-strip">
        <span className="cs-strip__dot" />
        <span className="cs-strip__label">{label}</span>
        <span className="cs-strip__meta">{stills.length} scenes · from the video series</span>
      </div>
      <div className="cs-grid">
        {stills.map((s, i) => (
          <figure className="cs-cell" key={i}>
            <div className="cs-cell__frame">
              <img src={s.src} alt={s.alt} loading="lazy" />
              <div className="cs-cell__play"><Play size={18} fill="currentColor" /></div>
            </div>
            <figcaption className="cs-cell__cap">{s.scene}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}