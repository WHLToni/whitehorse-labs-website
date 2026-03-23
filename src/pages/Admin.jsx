import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";

export default function Admin() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Admin — Whitehorse Labs";
    base44.entities.Customer.list("-purchase_date", 200).then((data) => {
      setCustomers(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f8] pt-8 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-2xl font-bold text-[#0a0a0a] mb-2">Customers</h1>
        <p className="text-sm text-[#888] mb-8">{customers.length} total purchases</p>

        {loading ? (
          <p className="text-sm text-[#888]">Loading...</p>
        ) : customers.length === 0 ? (
          <p className="text-sm text-[#888]">No customers yet.</p>
        ) : (
          <div className="bg-white rounded-xl border border-[#e5e5e5] overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e5e5] bg-[#f7f7f8]">
                  <th className="text-left px-5 py-3 font-semibold text-[#555] text-xs uppercase tracking-wider">Name</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#555] text-xs uppercase tracking-wider">Email</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#555] text-xs uppercase tracking-wider">Product</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#555] text-xs uppercase tracking-wider">Purchase Date</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((c, i) => (
                  <tr key={c.id} className={`border-b border-[#f0f0f0] ${i % 2 === 0 ? "" : "bg-[#fafafa]"}`}>
                    <td className="px-5 py-3 text-[#0a0a0a]">{c.full_name || "—"}</td>
                    <td className="px-5 py-3 text-[#555]">{c.email}</td>
                    <td className="px-5 py-3">
                      <span className="bg-[#fde8ef] text-[#e8195a] text-xs font-semibold px-2.5 py-1 rounded-full">
                        {c.product_name || "—"}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-[#888]">
                      {c.purchase_date ? new Date(c.purchase_date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}