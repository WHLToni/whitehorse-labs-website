import React from "react";
import { Link } from "react-router-dom";

export default function Button({ to, href, children, variant = "solid", className = "", ...rest }) {
  const cls = `ds-btn ds-btn-${variant} ${className}`.trim();
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}