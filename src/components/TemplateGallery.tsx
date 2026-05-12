"use client";

import { useState } from "react";

const categories = ["All", "Minimal", "Editorial", "Bold", "Elegant"];

const templates = [
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    bg: "linear-gradient(135deg, #1a1a1c, #0c0c0e)",
    sizes: "1:1 · 4:5 · 9:16 · 16:9",
    category: "Minimal",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
    bg: "linear-gradient(135deg, #2a1f1a, #1a1510)",
    sizes: "All sizes",
    category: "Editorial",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    bg: "linear-gradient(135deg, #1a1c2a, #101520)",
    sizes: "All sizes",
    category: "Bold",
  },
  {
    quote: "What we think, we become.",
    author: "Buddha",
    bg: "linear-gradient(135deg, #1a2a1c, #101a12)",
    sizes: "All sizes",
    category: "Elegant",
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
    bg: "linear-gradient(135deg, #2a1a2a, #1a101a)",
    sizes: "All sizes",
    category: "Minimal",
  },
  {
    quote: "Done is better than perfect.",
    author: "Sheryl Sandberg",
    bg: "linear-gradient(135deg, #1a2a2a, #101a1a)",
    sizes: "All sizes",
    category: "Editorial",
  },
  {
    quote: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
    bg: "linear-gradient(135deg, #2a2a1a, #1a1a10)",
    sizes: "All sizes",
    category: "Bold",
  },
  {
    quote: "Be the change you wish to see.",
    author: "Mahatma Gandhi",
    bg: "linear-gradient(135deg, #1a1a1a, #121212)",
    sizes: "All sizes",
    category: "Elegant",
  },
];

export default function TemplateGallery() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? templates
      : templates.filter((t) => t.category === active);

  return (
    <section id="templates" className="px-6 md:px-12 py-[120px] max-w-[1200px] mx-auto">
      <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#d4a853]">
        Templates
      </span>
      <h2
        className="font-[family-name:var(--font-display)] font-semibold leading-[1.2] tracking-tight mt-4 mb-4"
        style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
      >
        20+ Layouts Designed for Quotes
      </h2>
      <p className="text-lg text-[#a09b94] max-w-[560px] leading-relaxed">
        Not repurposed social media packs. Every template is built for
        readability, impact, and brand consistency.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mt-10 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              active === cat
                ? "border-[#d4a853] text-[#d4a853]"
                : "border-[rgba(245,240,232,0.08)] text-[#a09b94] hover:border-[#d4a853] hover:text-[#d4a853]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {filtered.map((t, i) => (
          <div
            key={i}
            className="group aspect-square bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden relative cursor-pointer hover:border-[#d4a853] hover:scale-[1.03] transition-all duration-300"
          >
            <span className="absolute top-3 right-3 z-10 bg-[#0c0c0e] border border-[rgba(245,240,232,0.08)] rounded-lg px-2.5 py-1 text-[11px] text-[#6b6560] font-[family-name:var(--font-mono)]">
              {t.sizes}
            </span>
            <div
              className="w-full h-full flex flex-col justify-center items-center text-center p-5"
              style={{ background: t.bg }}
            >
              <p className="font-[family-name:var(--font-display)] text-sm leading-relaxed text-[#f5f0e8]">
                “{t.quote}”
              </p>
              <div className="w-6 h-px bg-[#d4a853] my-2" />
              <span className="text-[10px] text-[#6b6560] tracking-[0.1em] uppercase">
                {t.author}
              </span>
            </div>
            <div className="absolute inset-0 bg-[rgba(12,12,14,0.9)] flex items-center justify-center text-[#d4a853] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Try this template
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
