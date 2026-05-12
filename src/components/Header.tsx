"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Templates", href: "/#templates" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className="flex items-center justify-between px-6 md:px-12 py-5"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,12,14,0.95), rgba(12,12,14,0))",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#f5f0e8]"
        >
          Meigen<span className="text-[#d4a853]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#a09b94] hover:text-[#f5f0e8] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-sm font-medium px-6 py-2.5 border border-[rgba(245,240,232,0.08)] rounded-full text-[#f5f0e8] hover:border-[#d4a853] hover:text-[#d4a853] transition-all duration-200"
          >
            Log in
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#f5f0e8]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#141416] border-b border-[rgba(245,240,232,0.08)] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#a09b94] hover:text-[#f5f0e8] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="text-sm font-medium px-6 py-2.5 border border-[rgba(245,240,232,0.08)] rounded-full text-[#f5f0e8] hover:border-[#d4a853] hover:text-[#d4a853] transition-all duration-200 text-center mt-2"
          >
            Log in
          </Link>
        </div>
      )}
    </header>
  );
}
