import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const services = [
  "The Diagnostic — $6,000",
  "GTM Strategy — $12,000",
  "Launch Architecture — $20,000",
  "Pre-Exit Readiness — Custom",
  "GTM Toolkit (DIY) — $149",
  "Just exploring",
];

const hearAboutOptions = [
  "LinkedIn",
  "Google Search",
  "Referral / Word of mouth",
  "Social Media",
  "Other",
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  serviceInterest: "",
  hearAbout: "",
  preferredContact: "",
  message: "",
};

export default function Contact() {
  useEffect(() => {
    document.title = "Contact — Whitehorse Labs";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Book a call with Toni Morrow, fractional GTM consultant for complex and regulated products.");
  }, []);

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    await base44.integrations.Core.SendEmail({
      to: "hello@whitehorselabs.com",
      subject: `New Contact Form Submission — ${form.firstName} ${form.lastName}`,
      body: `
New contact form submission from the Whitehorse Labs website.

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Phone: ${form.phone || "Not provided"}
Company: ${form.company || "Not provided"}
Service of Interest: ${form.serviceInterest || "Not specified"}
Preferred Contact Method: ${form.preferredContact || "Not specified"}
How they heard about us: ${form.hearAbout || "Not specified"}

Message:
${form.message}
      `.trim(),
    });

    setStatus("success");
    setForm(initialForm);
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8195a] mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#0a0a0a] max-w-3xl">
              Let's Talk
            </h1>
            <p className="text-lg text-[#666] max-w-xl leading-relaxed">
              Whether you're ready to kick off a project or just exploring your options, fill in the form below and I'll be in touch within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-12 rounded-2xl bg-[#f7f7f8] border border-[#e5e5e5] text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#e8195a]/10 flex items-center justify-center mx-auto mb-6">
                <Send className="w-6 h-6 text-[#e8195a]" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-3">Message Sent</h2>
              <p className="text-[#666] text-sm leading-relaxed max-w-sm mx-auto">
                Thanks for reaching out. I'll review your message and get back to you within one business day.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm font-semibold text-[#e8195a] hover:underline"
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
                <Field label="Phone Number" hint="Optional">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+61 400 000 000"
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Company */}
              <Field label="Company Name" hint="Optional">
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className={inputCls}
                />
              </Field>

              {/* Service + Hear About */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Service of Interest" hint="Optional">
                  <select name="serviceInterest" value={form.serviceInterest} onChange={handleChange} className={inputCls}>
                    <option value="">Select a service…</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="How did you hear about us?" hint="Optional">
                  <select name="hearAbout" value={form.hearAbout} onChange={handleChange} className={inputCls}>
                    <option value="">Select…</option>
                    {hearAboutOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </Field>
              </div>

              {/* Preferred Contact */}
              <Field label="Preferred Contact Method" hint="Optional">
                <div className="flex gap-4 mt-1">
                  {["Email", "Phone"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={opt}
                        checked={form.preferredContact === opt}
                        onChange={handleChange}
                        className="accent-[#e8195a]"
                      />
                      <span className="text-sm text-[#555]">{opt}</span>
                    </label>
                  ))}
                </div>
              </Field>

              {/* Message */}
              <Field label="How can we help you?" required>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Share a brief summary of your challenge / problem:"
                  className={inputCls + " resize-none"}
                />
              </Field>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-gradient w-full inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm disabled:opacity-60"
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

const inputCls = "w-full px-4 py-3 rounded-lg border border-[#e5e5e5] bg-[#f7f7f8] text-[#0a0a0a] text-sm placeholder:text-[#aaa] focus:outline-none focus:border-[#e8195a] focus:ring-2 focus:ring-[#e8195a]/10 transition-colors";

function Field({ label, hint, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#0a0a0a]">
        {label}
        {required && <span className="text-[#e8195a] ml-0.5">*</span>}
        {hint && <span className="text-[#aaa] font-normal ml-1.5 text-xs">({hint})</span>}
      </label>
      {children}
    </div>
  );
}