"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is Meigen AI free to use?",
    a: "Yes. The Free plan gives you 5 quote generations every day — no credit card, no time limit. Upgrade to Pro when you need more templates, batch export, or brand customization.",
  },
  {
    q: "Do I need design skills?",
    a: "No. Pick a template, enter a topic, and download. The AI handles the writing. The template handles the layout. Your brand config handles the colors and logo.",
  },
  {
    q: "What sizes and formats can I export?",
    a: "Free users get 1:1 (Instagram feed). Pro and Team users get 1:1, 4:5, 9:16 (Stories/Reels), and 16:9 (Twitter/X, LinkedIn, newsletters). Formats: PNG and JPG.",
  },
  {
    q: "Can I use my own logo and brand colors?",
    a: "Yes — on Pro and Team plans. Upload your logo, set your primary and secondary colors, and choose from curated font pairings. Every card you generate automatically applies your brand.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel in your Account Settings → Billing. Your access continues until the end of your current billing period. First-time purchases qualify for a 7-day refund if you've used less than 20% of your monthly quota.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 md:px-12 py-[120px] max-w-[800px] mx-auto">
      <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#d4a853]">
        FAQ
      </span>
      <h2
        className="font-[family-name:var(--font-display)] font-semibold leading-[1.2] tracking-tight mt-4 mb-12"
        style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
      >
        Questions? Answered.
      </h2>

      <div className="space-y-0">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              className="border-b border-[rgba(245,240,232,0.08)] py-6"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span
                  className={`text-[17px] font-medium transition-colors duration-200 ${
                    isOpen ? "text-[#d4a853]" : "text-[#f5f0e8] group-hover:text-[#d4a853]"
                  }`}
                >
                  {faq.q}
                </span>
                <span className="text-[#a09b94] ml-4 shrink-0">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {isOpen && (
                <p className="text-[15px] text-[#a09b94] leading-relaxed mt-4">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
