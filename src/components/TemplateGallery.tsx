"use client";

import { useState, useEffect } from "react";

interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
}

const categories = ["All", "Minimal", "Editorial", "Bold", "Elegant", "Nature"];

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

  const filtered =
    active === "All"
      ? templates
      : templates.filter((t) => t.category === active);

  // Generate preview style based on template category
  const getPreviewStyle = (template: Template) => {
    const base: Record<string, string> = {
      Minimal: "linear-gradient(135deg, #1a1a1c, #0c0c0e)",
      Editorial: "linear-gradient(135deg, #2a1f1a, #1a1510)",
      Bold: "linear-gradient(135deg, #1a1c2a, #101520)",
      Elegant: "linear-gradient(135deg, #f5f0e8, #e8e0d4)",
      Nature: "linear-gradient(135deg, #1a2a1a, #101a12)",
    };
    return base[template.category] || base.Minimal;
  };

  const getTextColor = (category: string) =>
    category === "Elegant" ? "#2c2c2c" : "#f5f0e8";

  const getAccentColor = (category: string) =>
    category === "Elegant" ? "#c9a96e" : "#d4a853";

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
      {loading ? (
        <div className="text-center text-[#a09b94] py-20">Loading templates...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="group aspect-square bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden relative cursor-pointer hover:border-[#d4a853] hover:scale-[1.03] transition-all duration-300"
            >
              <span className="absolute top-3 right-3 z-10 bg-[#0c0c0e] border border-[rgba(245,240,232,0.08)] rounded-lg px-2 py-1 text-[10px] text-[#6b6560] font-[family-name:var(--font-mono)]">
                {t.category}
              </span>
              <div
                className="w-full h-full flex flex-col justify-center items-center text-center p-4"
                style={{ background: getPreviewStyle(t) }}
              >
                <p
                  className="font-[family-name:var(--font-display)] text-xs leading-relaxed line-clamp-3"
                  style={{ color: getTextColor(t.category) }}
                >
                  "{t.description}"
                </p>
                <div
                  className="w-6 h-px my-2"
                  style={{ background: getAccentColor(t.category) }}
                />
                <span
                  className="text-[9px] tracking-[0.1em] uppercase"
                  style={{ color: getAccentColor(t.category) }}
                >
                  {t.name}
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

      {!loading && filtered.length === 0 && (
        <div className="text-center text-[#a09b94] py-20">
          No templates found in this category.
        </div>
      )}
    </section>
  );
}
