import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import ToolProgress from "@/components/icp-tool/ToolProgress";
import StepCard from "@/components/icp-tool/StepCard";
import EmailCapture from "@/components/icp-tool/EmailCapture";
import ProfileOutput from "@/components/icp-tool/ProfileOutput";
import Step1Fields from "@/components/icp-tool/fields/Step1Fields";
import Step2Fields from "@/components/icp-tool/fields/Step2Fields";
import Step3Fields from "@/components/icp-tool/fields/Step3Fields";
import Step4Fields from "@/components/icp-tool/fields/Step4Fields";
import Step5Fields from "@/components/icp-tool/fields/Step5Fields";
import Step6Fields from "@/components/icp-tool/fields/Step6Fields";
import Step7Fields from "@/components/icp-tool/fields/Step7Fields";
import { downloadProfileText } from "@/lib/icpProfileText";

const TOTAL_STEPS = 7;

const initialFormData = {
  businessModel: "", industry: "", companySize: "", growthStage: "", companyRevenue: "", demographics: "", geography: "",
  primaryProblem: "", painDriver: "", doNothing: "",
  trigger1: "", trigger2: "", trigger3: "", urgency: "",
  alt1name: "", alt1limit: "", alt2name: "", alt2limit: "", alt3name: "", alt3limit: "", differentiator: "",
  whoInitiates: "", whoApproves: "", discovery: [], salesCycle: "", primaryObjection: "",
  positiveSignals: "", disqualifiers: "",
  icpName: "", icpOneLiner: "", desiredOutcome: "",
};

const stepRules = {
  1: ["businessModel", "industry", "geography"],
  2: ["primaryProblem"],
  3: ["trigger1"],
  4: ["differentiator"],
  5: [], 6: [],
  7: ["icpName", "icpOneLiner"],
};

const stepMeta = {
  1: { title: "Who Are They?", description: "Define the basic profile of your ideal customer.", next: "Next: The Problem →" },
  2: { title: "The Problem", description: "What painful problem does this customer have?", next: "Next: Buying Triggers →" },
  3: { title: "Buying Triggers", description: "What makes this customer actively look for a solution?", next: "Next: Current Alternatives →" },
  4: { title: "Current Alternatives", description: "What does your ideal customer use today to solve this problem?", next: "Next: Decision Journey →" },
  5: { title: "Decision Journey", description: "How does your ideal customer discover, evaluate, and decide to buy?", next: "Next: Qualification Signals →" },
  6: { title: "Qualification Signals", description: "What tells you a prospect is a great fit — or not?", next: "Next: Name Your ICP →" },
  7: { title: "Name Your ICP", description: "Give your ideal customer a name and a one-sentence description.", next: "Generate My ICP Profile →" },
};

const stepComponents = { 1: Step1Fields, 2: Step2Fields, 3: Step3Fields, 4: Step4Fields, 5: Step5Fields, 6: Step6Fields, 7: Step7Fields };

export default function ICPTool() {
  const [stage, setStage] = useState("form");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = "ICP Framework Tool — Whitehorse Labs";
  }, []);

  const setField = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }));
  const toggleChip = (label) =>
    setFormData((prev) => ({
      ...prev,
      discovery: prev.discovery.includes(label) ? prev.discovery.filter((d) => d !== label) : [...prev.discovery, label],
    }));

  const validate = (n) => {
    const fields = stepRules[n] || [];
    const newErrors = {};
    fields.forEach((f) => {
      if (!String(formData[f] || "").trim()) newErrors[f] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (!validate(step)) return;
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setStage("email");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goBack = () => {
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailSubmit = async (email) => {
    await base44.entities.NewsletterSubscriber.create({ email, source: "ICP Framework Tool" });
    setStage("profile");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSkipEmail = () => {
    setStage("profile");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setStep(1);
    setStage("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const StepFields = stepComponents[step];
  const meta = stepMeta[step];

  return (
    <div className="bg-[#f7f7f8] min-h-screen">
      <div className="bg-[#0a0a0a] px-6 py-16 md:py-20 text-center relative overflow-hidden">
        <div className="inline-block bg-[#e8195a]/15 border border-[#e8195a]/40 text-[#e8195a] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-7">
          Free Tool — No Account Required
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-white leading-none tracking-wide max-w-3xl mx-auto mb-5">
          Define Your <span className="text-[#e8195a]">Ideal Customer</span> Profile in 10 Minutes
        </h1>
        <p className="text-white/55 text-base max-w-lg mx-auto mb-8 font-light leading-relaxed">
          The same ICP framework used in the Whitehorse Labs GTM OS — walked through step by step. Answer the questions, download your one-page profile.
        </p>
        <div className="max-w-xl mx-auto bg-white/[0.06] border border-white/10 rounded-lg px-5 py-3.5 text-left mb-2">
          <p className="text-sm text-white/60 leading-relaxed m-0">
            <strong className="text-white/85 font-semibold">Before you start:</strong> this tool is a thinking guide, not a content generator. The clearer and more specific you are, the more useful your output will be.
          </p>
        </div>
      </div>

      {stage === "form" && <ToolProgress step={step} total={TOTAL_STEPS} />}

      <main className="max-w-3xl mx-auto px-6 py-10 md:py-14">
        {stage === "form" && (
          <StepCard number={String(step).padStart(2, "0")} title={meta.title} description={meta.description} onBack={goBack} onNext={goNext} nextLabel={meta.next} isFirst={step === 1}>
            <StepFields formData={formData} setField={setField} errors={errors} toggleChip={toggleChip} />
          </StepCard>
        )}

        {stage === "email" && <EmailCapture onSubmit={handleEmailSubmit} onSkip={handleSkipEmail} />}

        {stage === "profile" && <ProfileOutput formData={formData} onDownload={() => downloadProfileText(formData)} onReset={handleReset} />}
      </main>

      <div className="text-center pb-10 text-xs text-[#888]">
        Built by Whitehorse Labs — Free to use, share, and keep.
      </div>
    </div>
  );
}