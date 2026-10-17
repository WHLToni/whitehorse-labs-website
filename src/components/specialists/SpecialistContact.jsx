import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

// Replace these with real values when ready:
const BOOKING_URL = ""; // e.g. https://cal.com/...
const MOBILE = ""; // e.g. 04xx xxx xxx
const EMAIL = "toni@whitehorselabs.com.au";

const inputCls =
  "w-full px-4 py-3 rounded-lg border border-[#E1E7E9] bg-[#fff] text-[var(--ink)] text-sm placeholder:text-[#aaa] focus:outline-none focus:border-[#C13B54] focus:ring-2 focus:ring-[#C13B54]/10 transition-colors";

const initialForm = { name: "", practice: "", role: "", email: "", phone: "", message: "" };

export default function SpecialistContact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await base44.entities.SpecialistEnquiry.create({
        name: form.name,
        practice_name: form.practice,
        role: form.role,
        email: form.email,
        phone: form.phone,
        message: form.message,
      });
      await base44.integrations.Core.SendEmail({
        to: EMAIL,
        subject: `New specialist enquiry — ${form.name}`,
        body: `New enquiry from the specialists landing page.\n\nName: ${form.name}\nPractice: ${form.practice}\nRole: ${form.role || "Not specified"}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\n\nMessage:\n${form.message || "None"}`.trim(),
      });
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
    }
  };

  const bookingBtn = BOOKING_URL ? (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="ds-btn ds-btn-outline w-full sm:w-auto text-center"
    >
      Choose a time
    </a>
  ) : (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="ds-btn ds-btn-outline w-full sm:w-auto text-center"
    >
      Choose a time
    </button>
  );

  return (
    <section className="ds-band ds-band--mist" id="contact">
      <div className="ds-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="ds-display text-[clamp(26px,4vw,40px)] mb-5">Book a 15-minute call</h2>
            <p className="text-[#3a4649] text-lg leading-relaxed mb-8 max-w-md">
              Tell me a little about your practice and I'll be in touch within one business day. Or
              pick a time that suits you.
            </p>
            {bookingBtn}
            <p className="text-[#3a4649] text-base mt-8">
              Toni Morrow{MOBILE ? ` · ${MOBILE}` : ""} ·{" "}
              <a href={`mailto:${EMAIL}`} className="ds-textlink">
                {EMAIL}
              </a>
            </p>
          </div>

          <div>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 rounded-md bg-white border border-[var(--line)] text-center"
              >
                <h3 className="ds-display text-2xl text-[var(--ink)] mb-3">
                  Thanks, I'll be in touch within one business day.
                </h3>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="bg-white border border-[var(--line)] rounded-md p-6 md:p-8 space-y-5"
              >
                <Field label="Name" required>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputCls}
                  />
                </Field>
                <Field label="Practice name" required>
                  <input
                    type="text"
                    name="practice"
                    value={form.practice}
                    onChange={handleChange}
                    required
                    className={inputCls}
                  />
                </Field>
                <Field label="Your role">
                  <select name="role" value={form.role} onChange={handleChange} className={inputCls}>
                    <option value="">Select…</option>
                    <option value="Specialist">Specialist</option>
                    <option value="Practice manager">Practice manager</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputCls}
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </Field>
                <Field label="What would you like help with?">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className={inputCls + " resize-none"}
                  />
                </Field>
                <p className="text-[14px] leading-relaxed text-[var(--muted)]">
                  Whitehorse Labs collects these details to reply to your enquiry and may keep them
                  to follow up about our services. We won't share them or add you to a mailing list
                  without asking. See our{" "}
                  <span className="text-[var(--ink)] font-medium">Privacy Policy</span>.
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="ds-btn ds-btn-solid w-full sm:w-auto inline-flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending…
                    </>
                  ) : (
                    "Send"
                  )}
                </button>
                {status === "error" && (
                  <p className="text-sm text-[var(--accent)]">
                    Something went wrong. Please email me directly at {EMAIL}.
                  </p>
                )}
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[var(--ink)]">
        {label}
        {required && <span className="text-[var(--accent)] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}