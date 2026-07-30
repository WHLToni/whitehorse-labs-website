import React from "react";

export default function Eyebrow({ children, variant = "", className = "" }) {
  const variantClass = variant ? ` ds-eyebrow--${variant}` : "";
  return (
    <span className={`ds-eyebrow${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}