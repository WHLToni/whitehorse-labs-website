import { jsPDF } from "jspdf";

const MAGENTA = [179, 71, 92]; // #b3475c
const DARK = [10, 10, 10];
const GRAY = [85, 85, 85];
const LIGHT_GRAY = [136, 136, 136];
const PAGE_W = 210;
const MARGIN = 18;
const CONTENT_W = PAGE_W - MARGIN * 2;

function addPageIfNeeded(doc, y, needed = 20) {
  if (y + needed > 280) {
    doc.addPage();
    return 20;
  }
  return y;
}

function sectionHeader(doc, y, title) {
  y = addPageIfNeeded(doc, y, 16);
  doc.setFillColor(...MAGENTA);
  doc.rect(MARGIN, y, 3, 6, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...DARK);
  doc.text(title.toUpperCase(), MARGIN + 6, y + 5);
  y += 11;
  doc.setDrawColor(230, 230, 230);
  doc.line(MARGIN, y, PAGE_W - MARGIN, y);
  return y + 6;
}

function field(doc, y, label, value, width = CONTENT_W) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...LIGHT_GRAY);
  doc.text(label.toUpperCase(), MARGIN, y);
  y += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...GRAY);
  const lines = doc.splitTextToSize(String(value || "—"), width);
  doc.text(lines, MARGIN, y);
  return y + lines.length * 4.8 + 4;
}

function twoColFields(doc, y, pairs) {
  const colW = (CONTENT_W - 8) / 2;
  let leftY = y;
  let rightY = y;
  pairs.forEach(([label, value], i) => {
    const isLeft = i % 2 === 0;
    const x = isLeft ? MARGIN : MARGIN + colW + 8;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...LIGHT_GRAY);
    doc.text(label.toUpperCase(), x, isLeft ? leftY : rightY);
    const startY = (isLeft ? leftY : rightY) + 4.5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...GRAY);
    const lines = doc.splitTextToSize(String(value || "—"), colW);
    doc.text(lines, x, startY);
    const endY = startY + lines.length * 4.8 + 4;
    if (isLeft) leftY = endY; else rightY = endY;
  });
  return Math.max(leftY, rightY);
}

export function downloadProfilePdf(formData) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const b2c = formData.businessModel === "B2C";
  const name = formData.icpName || "Ideal Customer Profile";
  const dateStr = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });

  // Header band
  doc.setFillColor(...DARK);
  doc.rect(0, 0, PAGE_W, 42, "F");
  doc.setFillColor(...MAGENTA);
  doc.rect(0, 42, PAGE_W, 1.2, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...MAGENTA);
  doc.text("WHITEHORSE LABS — ICP FRAMEWORK TOOL", MARGIN, 14);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text(name.toUpperCase(), MARGIN, 26);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(200, 200, 200);
  doc.text(`Generated ${dateStr} — Whitehorse Labs ICP Framework Tool`, MARGIN, 34);

  let y = 54;

  y = sectionHeader(doc, y, "01 — Customer Profile");
  y = twoColFields(doc, y, [
    ["Business Model", formData.businessModel],
    ["Industry / Vertical", formData.industry],
    ["Company Size", b2c ? formData.demographics : formData.companySize],
    ["Company Revenue", b2c ? "—" : formData.companyRevenue],
    ["Growth Stage", b2c ? "—" : formData.growthStage],
    ["Geography", formData.geography],
  ]);
  y = field(doc, y + 2, "One-Line Description", formData.icpOneLiner);

  y = sectionHeader(doc, y, "02 — The Problem");
  y = field(doc, y, "Primary Problem", formData.primaryProblem);
  y = twoColFields(doc, y, [
    ["Why It's Painful", formData.painDriver],
    ["Cost of Inaction", formData.doNothing],
  ]);
  y = field(doc, y + 2, "Desired Outcome", formData.desiredOutcome);

  y = sectionHeader(doc, y, "03 — Buying Triggers");
  const triggers = [formData.trigger1, formData.trigger2, formData.trigger3].filter(Boolean).join("  •  ");
  y = field(doc, y, "Triggers", triggers || "Not specified");
  y = field(doc, y, "Urgency Driver", formData.urgency);

  y = sectionHeader(doc, y, "04 — Current Alternatives & Your Differentiation");
  const alts = [
    { n: formData.alt1name, l: formData.alt1limit },
    { n: formData.alt2name, l: formData.alt2limit },
    { n: formData.alt3name, l: formData.alt3limit },
  ].filter((a) => a.n);
  if (alts.length) {
    alts.forEach((a) => {
      y = field(doc, y, a.n, a.l);
    });
  } else {
    y = field(doc, y, "Alternatives", "No alternatives specified");
  }
  y = field(doc, y, "Why You Win", formData.differentiator);

  y = sectionHeader(doc, y, "05 — Decision Journey");
  y = twoColFields(doc, y, [
    ["Who Initiates", formData.whoInitiates],
    ["Who Approves", formData.whoApproves],
    ["Sales Cycle", formData.salesCycle],
    ["Primary Objection", formData.primaryObjection],
  ]);
  y = field(doc, y + 2, "Discovers Via", (formData.discovery || []).join(", ") || "Not specified");

  y = sectionHeader(doc, y, "06 — Qualification Signals");
  y = twoColFields(doc, y, [
    ["Positive Signals", formData.positiveSignals],
    ["Disqualifiers", formData.disqualifiers],
  ]);

  // Footer band
  y = addPageIfNeeded(doc, y, 24);
  doc.setDrawColor(230, 230, 230);
  doc.line(MARGIN, y, PAGE_W - MARGIN, y);
  y += 8;
  doc.setFillColor(...DARK);
  doc.roundedRect(MARGIN, y, CONTENT_W, 20, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text("Built with the free Whitehorse Labs ICP Framework Tool.", MARGIN + 5, y + 8);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...MAGENTA);
  doc.text("The GTM OS gives you the complete system to build on it — whitehorselabs.com.au", MARGIN + 5, y + 14);

  doc.save(`ICP-${name.replace(/\s+/g, "-")}-${new Date().toISOString().slice(0, 10)}.pdf`);
}