import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", page: "Home" },
  { label: "Services & Pricing", page: "Services" },
  { label: "About", page: "About" },
  { label: "Launch System", page: "LaunchSystem" },
];

function Logo() {
  return (
    <span className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold tracking-tight">
      WHITEHORSE{" "}
      <span className="gradient-text-simple">/</span>{" "}
      LABS
    </span>
  );
}

export default function Layout({ children, currentPageName }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to={createPageUrl("Home")}>
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    currentPageName === link.page
                      ? "text-white"
                      : "text-[#999] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={createPageUrl("ICPFramework")}
                className="btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
              >
                Free ICP Framework
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0a0a] border-t border-white/5 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block text-base font-medium text-[#999] hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to={createPageUrl("ICPFramework")}
                  className="block btn-gradient text-white text-sm font-semibold px-5 py-3 rounded-lg text-center mt-4"
                  onClick={() => setMobileOpen(false)}
                >
                  Free ICP Framework
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page Content */}
      <main className="pt-16 md:pt-20">{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="md:col-span-2">
              <Logo />
              <p className="text-[#999] text-sm mt-4 max-w-md leading-relaxed">
                Product commercialisation for complex, regulated products. 
                A-player expertise at fractional cost.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#666] mb-4">Pages</h4>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block text-sm text-[#999] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to={createPageUrl("ICPFramework")}
                  className="block text-sm text-[#999] hover:text-white transition-colors"
                >
                  Free ICP Framework
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#666] mb-4">Quick Links</h4>
              <div className="space-y-3">
                <Link
                  to={createPageUrl("LaunchSystem")}
                  className="block text-sm text-[#999] hover:text-white transition-colors"
                >
                  Buy Launch System — $149
                </Link>
                <Link
                  to={createPageUrl("Services")}
                  className="block text-sm text-[#999] hover:text-white transition-colors"
                >
                  Book a Service
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#666]">© {new Date().getFullYear()} Whitehorse Labs. All rights reserved.</p>
            <p className="text-xs text-[#666]">Fractional Product Commercialisation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}