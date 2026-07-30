import React from "react";

export default function Section({ children, variant = "glass", className = "", id, ...rest }) {
  const bandClass = variant === "mist" ? "ds-band ds-band--mist"
    : variant === "paper" ? "ds-band ds-band--paper"
    : variant === "glass" ? "ds-band ds-band--glass"
    : "ds-band";

  return (
    <section className={`${bandClass} ${className}`.trim()} id={id} {...rest}>
      <div className="ds-wrap">
        {children}
      </div>
    </section>
  );
}