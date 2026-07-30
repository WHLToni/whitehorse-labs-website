import React from "react";

export default function ProfileSection({ title, children }) {
  return (
    <div className="px-6 md:px-9 py-6 border-b border-[#E1E7E9] last:border-b-0">
      <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#C13B54] mb-3.5">{title}</div>
      {children}
    </div>
  );
}