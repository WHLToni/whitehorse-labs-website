import React from "react";

export default function ProfileSection({ title, children }) {
  return (
    <div className="px-6 md:px-9 py-6 border-b border-[#e5e5e5] last:border-b-0">
      <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#b8123f] mb-3.5">{title}</div>
      {children}
    </div>
  );
}