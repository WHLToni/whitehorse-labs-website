import React, { useEffect } from "react";
import { motion } from "framer-motion";

const updated = "17 October 2026";

function Section({ children, mist }) {
  return (
    <section className={`ds-band ${mist ? "ds-band--mist" : ""}`}>
      <div className="ds-wrap max-w-3xl">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Whitehorse Labs";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "How Whitehorse Labs Pty Ltd collects, uses and protects personal information."
      );
  }, []);

  return (
    <div className="ds-page sp-page">
      <section className="ds-band ds-band--glass ds-grid-light" style={{ paddingTop: "120px", paddingBottom: "64px" }}>
        <div className="ds-wrap max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="ds-eyebrow mb-5">Legal</p>
            <h1 className="ds-display text-[clamp(32px,5vw,52px)] leading-[1.06] mb-4">Privacy Policy</h1>
            <p className="text-[#3a4649] text-base leading-relaxed">Last updated: {updated}</p>
          </motion.div>
        </div>
      </section>

      <Section>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="ds-display text-[clamp(24px,3.5vw,34px)] mb-5">About this policy</h2>
          <div className="space-y-4 text-[#3a4649] text-base leading-relaxed">
            <p>
              Whitehorse Labs Pty Ltd (ABN 86 630 697 380) (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the
              website at whitehorselabs.com.au and provides go-to-market consulting and marketing services to businesses,
              including medical specialist practices.
            </p>
            <p>
              This policy explains how we collect, use, hold and disclose personal information, and how you can access and
              correct it. We are bound by the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
            </p>
          </div>
        </motion.div>
      </Section>

      <Section mist>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="ds-display text-[clamp(24px,3.5vw,34px)] mb-5">What we collect</h2>
          <ul className="space-y-3 text-[#3a4649] text-base leading-relaxed">
            <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span><strong className="text-[var(--ink)]">Enquiry forms:</strong> name, practice name, role, email address, phone number and any message you provide.</span></li>
            <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span><strong className="text-[var(--ink)]">Newsletter subscriptions:</strong> your email address.</span></li>
            <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span><strong className="text-[var(--ink)]">When you email us:</strong> the details you include in your message.</span></li>
            <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span><strong className="text-[var(--ink)]">Automatically:</strong> pages visited, referring pages, browser type and approximate location, through analytics.</span></li>
          </ul>
        </motion.div>
      </Section>

      <Section>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="ds-display text-[clamp(24px,3.5vw,34px)] mb-5">How we use it</h2>
          <ul className="space-y-3 text-[#3a4649] text-base leading-relaxed">
            <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span>To respond to your enquiry and provide the services you have asked about.</span></li>
            <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span>To follow up about our services, where you have indicated interest.</span></li>
            <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span>To send our newsletter, where you have subscribed. You can unsubscribe at any time.</span></li>
            <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span>To improve our website and services.</span></li>
            <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span>To meet our legal and record-keeping obligations.</span></li>
          </ul>
        </motion.div>
      </Section>

      <Section mist>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="ds-display text-[clamp(24px,3.5vw,34px)] mb-5">Disclosure to third parties</h2>
          <div className="space-y-4 text-[#3a4649] text-base leading-relaxed">
            <p>We do not sell or rent personal information. We may share it with:</p>
            <ul className="space-y-3">
              <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span>Service providers we use to run our business, such as email delivery, website hosting, analytics and customer relationship management. They may only use your information to provide those services to us.</span></li>
              <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span>Professional advisers, such as legal and accounting advisers, where necessary.</span></li>
              <li className="flex gap-3"><span className="w-2 h-2 bg-[var(--accent)] flex-shrink-0 mt-2" /><span>Authorities where required by law.</span></li>
            </ul>
            <p>Some of these providers may process data overseas, for example in the United States. Where that happens, we take reasonable steps to ensure they handle it consistently with the Privacy Act.</p>
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="ds-display text-[clamp(24px,3.5vw,34px)] mb-5">Storage, security and retention</h2>
          <div className="space-y-4 text-[#3a4649] text-base leading-relaxed">
            <p>We store personal information on cloud-based platforms and take reasonable steps to protect it from misuse, interference, loss and unauthorised access.</p>
            <p>We keep personal information only for as long as we need it for the purposes set out above, or to meet legal obligations, and then we delete or de-identify it.</p>
          </div>
        </motion.div>
      </Section>

      <Section mist>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="ds-display text-[clamp(24px,3.5vw,34px)] mb-5">Cookies and analytics</h2>
          <p className="text-[#3a4649] text-base leading-relaxed">
            Our website uses analytics to understand how visitors use it. You can control cookies through your browser
            settings. Disabling cookies may affect some features of the site.
          </p>
        </motion.div>
      </Section>

      <Section>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="ds-display text-[clamp(24px,3.5vw,34px)] mb-5">Your rights</h2>
          <div className="space-y-4 text-[#3a4649] text-base leading-relaxed">
            <p>You can ask to access the personal information we hold about you, or to correct it. You can also ask us to stop sending you marketing.</p>
            <p>
              To make a request, email{" "}
              <a href="mailto:toni@whitehorselabs.com.au" className="ds-textlink">toni@whitehorselabs.com.au</a>.
              We will respond within a reasonable time.
            </p>
            <p>
              If you believe we have mishandled your information, you can complain to the Office of the Australian
              Information Commissioner at{" "}
              <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="ds-textlink">oaic.gov.au</a>.
            </p>
          </div>
        </motion.div>
      </Section>

      <Section mist>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="ds-display text-[clamp(24px,3.5vw,34px)] mb-5">Changes and contact</h2>
          <div className="space-y-4 text-[#3a4649] text-base leading-relaxed">
            <p>We may update this policy from time to time. The date at the top of this page shows when it was last updated.</p>
            <p>
              Questions about privacy can be sent to{" "}
              <a href="mailto:toni@whitehorselabs.com.au" className="ds-textlink">toni@whitehorselabs.com.au</a>.
            </p>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}