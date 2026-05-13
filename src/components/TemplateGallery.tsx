"use client";

import { useEffect, useState } from "react";

interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  previewQuote: string;
  previewAuthor: string;
  sizes: string;
  background: { from: string; to: string };
  textColor: string;
  accentColor: string;
}

const categories = ["All", "Minimal", "Editorial", "Bold", "Elegant"];

export default function TemplateGallery() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/templates")
      .then((r) => r.json())
      .then((d) => {
        if (d.success) {
          setTemplates(d.data.templates);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = active === "All" ? templates : templates.filter((t) => t.category === active);

  return (
    <section id="templates" className="px-6 md:px-12 py-[120px] max-w-[1200px] mx-auto">
      <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#d4a853]">
        Templates
      </span>
      <h2
        className="font-[family-name:var(--font-display)] font-semibold leading-[1.2] tracking-tight mt-4 mb-4"
        style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
      >
        8 Layouts Designed for Quotes
      </h2>
      <p className="text-lg text-[#a09b94] max-w-[560px] leading-relaxed">
        Start with a default card, then switch templates without changing the generated quote.
        Each layout is designed for readability, impact, and brand consistency.
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

      {/* Grid: restored to the original 8-card layout */}
      {loading ? (
        <div className="text-center text-[#a09b94] py-20">Loading templates...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="group aspect-square bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden relative cursor-pointer hover:border-[#d4a853] hover:scale-[1.03] transition-all duration-300"
            >
              <span className="absolute top-3 right-3 z-10 bg-[#0c0c0e] border border-[rgba(245,240,232,0.08)] rounded-lg px-2.5 py-1 text-[11px] text-[#6b6560] font-[family-name:var(--font-mono)]">
                {t.sizes}
              </span>
              <div
                className="w-full h-full flex flex-col justify-center items-center text-center p-5"
                style={{ background: `linear-gradient(135deg, ${t.background.from}, ${t.background.to})` }}
              >
                <p
                  className="font-[family-name:var(--font-display)] text-sm leading-relaxed"
                  style={{ color: t.textColor }}
                >
                  “{t.previewQuote}”
                </p>
                <div className="w-6 h-px my-2" style={{ background: t.accentColor }} />
                <span
                  className="text-[10px] tracking-[0.1em] uppercase"
                  style={{ color: t.accentColor }}
                >
                  {t.previewAuthor}
                </span>
              </div>
              <div className="absolute inset-0 bg-[rgba(12,12,14,0.9)] flex flex-col items-center justify-center text-[#d4a853] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-center">{t.name}</p>
                <p className="text-[#a09b94] text-xs mt-2 text-center font-normal">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
