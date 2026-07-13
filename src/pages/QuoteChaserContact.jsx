import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const helpOptions = [
  "Sign me up for Quote Chaser",
  "I have questions about Quote Chaser",
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  howCanWeHelp: "",
  bestTimeToCall: "",
};

const inputCls = "w-full px-4 py-3 rounded-lg border border-[#e5e5e5] bg-[#f7f7f8] text-[#0a0a0a] text-sm placeholder:text-[#aaa] focus:outline-none focus:border-[#b3475c] focus:ring-2 focus:ring-[#b3475c]/10 transition-colors";

function Field({ label, hint, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#0a0a0a]">
        {label}
        {required && <span className="text-[#b3475c] ml-0.5">*</span>}
        {hint && <span className="text-[#aaa] font-normal ml-1.5 text-xs">({hint})</span>}
      </label>
      {children}
    </div>
  );
}

export default function QuoteChaserContact() {
  useEffect(() => {
    document.title = "Quote Chaser — Contact Whitehorse Labs";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Get started with Quote Chaser or ask us a question. We'll be in touch within one business day.");
  }, []);

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    await base44.integrations.Core.SendEmail({
      to: "hello@whitehorselabs.com",
      subject: `Quote Chaser Enquiry — ${form.firstName} ${form.lastName}`,
      body: `
New Quote Chaser enquiry from the website.

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Phone: ${form.phone || "Not provided"}
How can we help: ${form.howCanWeHelp || "Not specified"}
Best time to call: ${form.bestTimeToCall || "Not specified"}
      `.trim(),
    });

    await base44.entities.NewsletterSubscriber.create({ email: form.email, source: "Quote Chaser Contact Form" });

    setStatus("success");
    setForm(initialForm);
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-[#F0F7FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-base font-semibold uppercase tracking-widest text-[#b3475c] mb-4">Quote Chaser</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#0a0a0a] max-w-3xl">
              Let's Get You Started
            </h1>
            <p className="text-lg text-[#666] max-w-xl leading-relaxed">
              Fill in the form below and we'll be in touch within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-32 bg-[#F0F7FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-12 rounded-2xl bg-[#f7f7f8] border border-[#e5e5e5] text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#b3475c]/10 flex items-center justify-center mx-auto mb-6">
                <Send className="w-6 h-6 text-[#b3475c]" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-3">Message Sent</h2>
              <p className="text-[#666] text-sm leading-relaxed max-w-sm mx-auto">
                Thanks for reaching out. We'll review your message and get back to you within one business day.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm font-semibold text-[#b3475c] hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name" required>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Jane"
                    className={inputCls}
                  />
                </Field>
                <Field label="Last Name" required>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Smith"
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Email Address" required>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className={inputCls}
                  />
                </Field>
                <Field label="Phone Number" required>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="0431 000 000"
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* How Can We Help */}
              <Field label="How Can We Help?" required>
                <select name="howCanWeHelp" value={form.howCanWeHelp} onChange={handleChange} required className={inputCls}>
                  <option value="">Select an option…</option>
                  {helpOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              {/* Best Time To Call */}
              <Field label="Best Time To Call" hint="Optional">
                <input
                  type="text"
                  name="bestTimeToCall"
                  value={form.bestTimeToCall}
                  onChange={handleChange}
                  placeholder="e.g. Weekday mornings, after 3pm, etc."
                  className={inputCls}
                />
              </Field>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-5 rounded-lg text-base bg-[#b3475c] hover:bg-[#96394c] disabled:opacity-60 transition-colors shadow-[0_8px_30px_rgba(179,71,92,0.3)]"
              >
                {status === "sending" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending…</>
                ) : (
                  <><Send className="w-4 h-4" aria-hidden="true" /> Send Message</>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}