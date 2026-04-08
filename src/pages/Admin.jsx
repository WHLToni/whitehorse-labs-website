import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const TABS = ["Customers", "Analytics"];

export default function Admin() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const [activeTab, setActiveTab] = useState("Customers");
  const [pageViews, setPageViews] = useState(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [analyticsError, setAnalyticsError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    base44.auth.me().then((user) => {
      if (!user) { base44.auth.redirectToLogin("/admin"); return; }
      if (user.role !== "admin") { alert("Permission Denied"); navigate("/"); return; }
      setAuthChecked(true);
    }).catch(() => base44.auth.redirectToLogin("/admin"));
  }, []);

  useEffect(() => {
    if (!authChecked) return;
    document.title = "Admin — Whitehorse Labs";
    base44.entities.Customer.list("-purchase_date", 200).then((data) => {
      setCustomers(data);
      setLoading(false);
    });
  }, [authChecked]);

  useEffect(() => {
    if (!authChecked || activeTab !== "Analytics") return;
    if (pageViews) return;
    setAnalyticsLoading(true);
    setAnalyticsError(null);
    base44.functions.invoke("getPageViews", {}).then((res) => {
      setPageViews(res.data);
      setAnalyticsLoading(false);
    }).catch((err) => {
      setAnalyticsError(err.message || "Failed to load analytics");
      setAnalyticsLoading(false);
    });
  }, [authChecked, activeTab]);

  if (!authChecked) return null;

  const totalViews = pageViews?.rows?.reduce((s, r) => s + r.views, 0) || 0;

  return (
    <div className="min-h-screen bg-[#f7f7f8] pt-8 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-2xl font-bold text-[#0a0a0a] mb-6">Dashboard</h1>

        <div className="flex gap-1 mb-8 bg-white border border-[#e5e5e5] rounded-xl p-1 w-fit">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-[#0a0a0a] text-white"
                  : "text-[#888] hover:text-[#0a0a0a]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Customers" && (
          <>
            <p className="text-sm text-[#888] mb-4">{customers.length} total purchases</p>
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
          </>
        )}

        {activeTab === "Analytics" && (
          <div>
            {analyticsLoading && <p className="text-sm text-[#888]">Loading analytics...</p>}
            {analyticsError && <p className="text-sm text-red-500">{analyticsError}</p>}
            {pageViews && pageViews.rows && (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  <StatCard label="Total Page Views" value={totalViews.toLocaleString()} sub="Last 30 days" />
                  <StatCard label="Pages Tracked" value={pageViews.rows.length} sub="Unique pages" />
                  <StatCard
                    label="Top Page"
                    value={pageViews.rows[0]?.page || "—"}
                    sub={`${pageViews.rows[0]?.views || 0} views`}
                    mono
                  />
                </div>

                <div className="bg-white rounded-xl border border-[#e5e5e5] shadow-sm p-6 mb-6">
                  <h2 className="text-sm font-semibold text-[#0a0a0a] mb-4">Page Views by Page</h2>
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={pageViews.rows} layout="vertical" margin={{ left: 10, right: 20 }}>
                      <XAxis type="number" tick={{ fontSize: 11, fill: "#888" }} />
                      <YAxis type="category" dataKey="page" width={160} tick={{ fontSize: 11, fill: "#555" }} />
                      <Tooltip
                        formatter={(val, name) => [val, name === "views" ? "Page Views" : "Sessions"]}
                        contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e5e5" }}
                      />
                      <Bar dataKey="views" radius={[0, 4, 4, 0]}>
                        {pageViews.rows.map((_, i) => (
                          <Cell key={i} fill={i === 0 ? "#e8195a" : "#7B5FB5"} fillOpacity={1 - i * 0.06} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-xl border border-[#e5e5e5] overflow-hidden shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#e5e5e5] bg-[#f7f7f8]">
                        <th className="text-left px-5 py-3 font-semibold text-[#555] text-xs uppercase tracking-wider">Page</th>
                        <th className="text-right px-5 py-3 font-semibold text-[#555] text-xs uppercase tracking-wider">Views</th>
                        <th className="text-right px-5 py-3 font-semibold text-[#555] text-xs uppercase tracking-wider">Sessions</th>
                        <th className="text-right px-5 py-3 font-semibold text-[#555] text-xs uppercase tracking-wider hidden sm:table-cell">Avg. Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageViews.rows.map((row, i) => (
                        <tr key={i} className={`border-b border-[#f0f0f0] ${i % 2 === 0 ? "" : "bg-[#fafafa]"}`}>
                          <td className="px-5 py-3 font-mono text-xs text-[#555]">{row.page}</td>
                          <td className="px-5 py-3 text-right text-[#0a0a0a] font-semibold">{row.views}</td>
                          <td className="px-5 py-3 text-right text-[#888]">{row.sessions}</td>
                          <td className="px-5 py-3 text-right text-[#888] hidden sm:table-cell">
                            {Math.floor(row.avgDuration / 60)}m {Math.round(row.avgDuration % 60)}s
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#aaa] mt-3">Data from Google Analytics · Last 30 days · Property ID: {pageViews.propertyId}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, sub, mono }) {
  return (
    <div className="bg-white rounded-xl border border-[#e5e5e5] shadow-sm p-5">
      <p className="text-xs text-[#888] uppercase tracking-wider font-semibold mb-1">{label}</p>
      <p className={`text-xl font-bold text-[#0a0a0a] truncate ${mono ? "font-mono text-base" : ""}`}>{value}</p>
      {sub && <p className="text-xs text-[#aaa] mt-0.5">{sub}</p>}
    </div>
  );
}