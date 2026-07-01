export function buildProfileText(f) {
  const name = f.icpName || "ICP";
  const date = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
  const b2c = f.businessModel === "B2C";
  const triggers = [f.trigger1, f.trigger2, f.trigger3].filter(Boolean).map((t) => "  • " + t).join("\n") || "  • —";
  const discovery = (f.discovery || []).join(", ") || "Not specified";
  const alts = [
    { n: f.alt1name, l: f.alt1limit },
    { n: f.alt2name, l: f.alt2limit },
    { n: f.alt3name, l: f.alt3limit },
  ].filter((a) => a.n).map((a) => `  • ${a.n}${a.l ? " — " + a.l : ""}`).join("\n") || "  — Not specified";
  const line = "━".repeat(60);
  const dline = "═".repeat(60);

  return `IDEAL CUSTOMER PROFILE
${name.toUpperCase()}
Generated ${date} — Whitehorse Labs ICP Framework Tool
whitehorselabs.com.au
${dline}

ONE-LINE DESCRIPTION
${f.icpOneLiner || "—"}

${line}
01 — CUSTOMER PROFILE
${line}

Business Model:    ${f.businessModel || "—"}
Industry:          ${f.industry || "—"}
${b2c ? `Demographics:      ${f.demographics || "—"}` : `Company Size:      ${f.companySize || "—"}\nCompany Revenue:   ${f.companyRevenue || "—"}\nGrowth Stage:      ${f.growthStage || "—"}`}
Geography:         ${f.geography || "—"}

${line}
02 — THE PROBLEM
${line}

Primary Problem:
${f.primaryProblem || "—"}

Why It's Painful:
${f.painDriver || "—"}

Cost of Inaction:
${f.doNothing || "—"}

Desired Outcome:
${f.desiredOutcome || "—"}

${line}
03 — BUYING TRIGGERS
${line}

${triggers}

Urgency Driver:
${f.urgency || "—"}

${line}
04 — CURRENT ALTERNATIVES & YOUR DIFFERENTIATION
${line}

${alts}

Why You Win:
${f.differentiator || "—"}

${line}
05 — DECISION JOURNEY
${line}

Who Initiates:     ${f.whoInitiates || "—"}
Who Approves:      ${f.whoApproves || "—"}
Sales Cycle:       ${f.salesCycle || "—"}
Primary Objection: ${f.primaryObjection || "—"}
Discovers Via:     ${discovery}

${line}
06 — QUALIFICATION SIGNALS
${line}

POSITIVE SIGNALS:
${f.positiveSignals || "—"}

DISQUALIFIERS:
${f.disqualifiers || "—"}

${dline}
Built with the free Whitehorse Labs ICP Framework Tool.
The GTM OS gives you the complete system to build on it.
whitehorselabs.com.au/GetTheFrameworks
${dline}
`;
}

export function downloadProfileText(formData) {
  const name = formData.icpName || "ICP";
  const text = buildProfileText(formData);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ICP-${name.replace(/\s+/g, "-")}-${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}