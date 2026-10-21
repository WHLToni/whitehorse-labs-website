import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { CONTACT_INTENT_EVENT, SNAPSHOT_OPTION } from "@/lib/specialistContactCta";

const BOOKING_URL =
  "https://whitehorselabs.zohobookings.com.au/portal-embed#/28781000000614051";
const EMAIL = "toni@whitehorselabs.com.au";

// Opens the Zoho Bookings popup (embed script loaded in index.html)
const openBooking = (e) => {
  e.preventDefault();
  const modal = window.Bookings?.linkModal({ url: BOOKING_URL });
  if (modal) modal(e);
  else window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
};

const inputCls =
  "w-full px-4 py-3 rounded-lg border border-[#E1E7E9] bg-[#fff] text-[var(--ink)] text-sm placeholder:text-[#aaa] focus:outline-none focus:border-[#C13B54] focus:ring-2 focus:ring-[#C13B54]/10 transition-colors";

const supportOptions = [
  SNAPSHOT_OPTION,
  "Full review (from $1,200)",
  "Implementation or a new website",
  "Ongoing marketing support",
  "AI workshop for my team",
  "Something else",
];

const initialForm = {
  name: "",
  practice: "",
  practice_website: "",
  role: "",
  email: "",
  phone: "",
  support_type: SNAPSHOT_OPTION,
  message: "",
};

export default function SpecialistContact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const bookingRef = useRef(null);

  // The snapshot and booking buttons elsewhere on the page tell the form what was clicked.
  useEffect(() => {
    const onIntent = ({ detail }) => {
      if (detail?.preset) setForm((p) => ({ ...p, support_type: detail.preset }));
      if (detail?.booking) bookingRef.current?.focus();
    };
    window.addEventListener(CONTACT_INTENT_EVENT, onIntent);
    return () => window.removeEventListener(CONTACT_INTENT_EVENT, onIntent);
  }, []);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const messageBody = form.support_type
        ? `[${form.support_type}] ${form.message}`.trim()
        : form.message;
      await base44.entities.SpecialistEnquiry.create({
        name: form.name,
        practice_name: form.practice,
        practice_website: form.practice_website,
        role: form.role,
        email: form.email,
        phone: form.phone,
        message: messageBody,
      });
      await base44.integrations.Core.SendEmail({
        to: EMAIL,
        subject: `New specialist enquiry — ${form.name}`,
        body: `New enquiry from the specialists landing page. Practice website: ${form.practice_website || "not provided"}.\n\nName: ${form.name}\nPractice: ${form.practice}\nRole: ${form.role || "Not specified"}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\nSupport type: ${form.support_type || "Not specified"}\n\nMessage:\n${form.message || "None"}`.trim(),
      });
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
    }
  };

  const bookingBtn = (
    <button
      type="button"
      ref={bookingRef}
      onClick={openBooking}
      className="ds-btn ds-btn-outline w-full sm:w-auto text-center"
    >
      Choose a time
    </button>
  );

  return (
    <section className="ds-band" id="contact">
      <div className="ds-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="ds-display text-[clamp(26px,4vw,40px)] mb-5">
              Get your free snapshot or book a call
            </h2>
            <p className="text-[#3a4649] text-lg leading-relaxed mb-8 max-w-md">
              Tell me about your practice. I will email your snapshot within three
              business days, or respond within one business day to arrange a call.
              Alternatively, you can book a time directly.
            </p>
            <div id="book-a-call" className="scroll-mt-28">
              {bookingBtn}
            </div>
          </div>

          <div>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 rounded-md bg-white border border-[var(--line)] text-center"
              >
                <h3 className="ds-display text-2xl text-[var(--ink)] mb-3">
                  Thank you for your enquiry. I will respond within one business day.
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
                <Field label="Practice website" required>
                  <input
                    type="url"
                    name="practice_website"
                    value={form.practice_website}
                    onChange={handleChange}
                    placeholder="https://"
                    required
                    className={inputCls}
                  />
                </Field>
                <Field label="Your role">
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">Select…</option>
                    <option value="Specialist">Specialist</option>
                    <option value="Practice manager">Practice manager</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="What do you need?">
                  <select
                    name="support_type"
                    value={form.support_type}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    {supportOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
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
                <Field label="Anything else?">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className={inputCls + " resize-none"}
                  />
                </Field>
                <p className="text-[16px] leading-relaxed text-[var(--muted)]">
                  Whitehorse Labs collects these details to respond to your enquiry
                  and may use them to follow up about our services. We do not share
                  them, and we will not add you to a mailing list without your
                  consent. See our{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-[var(--ink)] font-medium underline hover:text-[var(--accent)]"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="ds-btn ds-btn-solid w-full sm:w-auto inline-flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />{" "}
                      Sending…
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