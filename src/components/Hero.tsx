"use client";

import { useState, useEffect, useCallback } from "react";

interface Template {
  id: string;
  name: string;
  category: string;
  description?: string;
  previewQuote?: string;
  previewAuthor?: string;
  sizes?: string;
  background?: { from: string; to: string };
  textColor?: string;
  accentColor?: string;
}

const SIZES = [
  { id: "1:1", name: "Square", desc: "Instagram Feed" },
  { id: "4:5", name: "Portrait", desc: "Instagram Portrait" },
  { id: "9:16", name: "Story", desc: "Stories / Reels" },
  { id: "16:9", name: "Landscape", desc: "Twitter / LinkedIn" },
];

const CATEGORIES = ["All", "Minimal", "Editorial", "Bold", "Elegant"];

export default function Hero() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [topic, setTopic] = useState("");
  const [templates, setTemplates] = useState<Template[]>([]);
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState("minimal-dark");
  const [selectedSize, setSelectedSize] = useState("1:1");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    quote: string;
    author: string;
    imageUrl?: string;
    jobId?: number;
    svg?: string;
  } | null>(null);
  const [error, setError] = useState("");

  // Fetch templates on mount
  useEffect(() => {
    fetch("/api/templates")
      .then((r) => r.json())
      .then((d) => {
        if (d.success) {
          setTemplates(d.data.templates);
          setFilteredTemplates(d.data.templates);
        }
      })
      .catch(console.error);
  }, []);

  // Filter templates
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredTemplates(templates);
    } else {
      setFilteredTemplates(templates.filter((t) => t.category === activeCategory));
    }
  }, [activeCategory, templates]);

  // Render a quote card without changing the generated text.
  const renderQuoteCard = useCallback(async (quote: string, author: string, templateId: string, size: string) => {
    const res = await fetch("/api/render", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quote, author, templateId, size }),
    });

    const data = await res.json();
    if (!data.success) {
      throw new Error(data.error?.message || "Render failed");
    }
    return data.data.dataUrl as string;
  }, []);

  // Step 1: Generate quote, then immediately render it with the default template.
  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          category: topic,
          style: "inspirational",
          length: "medium",
          templateId: selectedTemplate,
          size: selectedSize,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        setError(data.error?.message || "Generation failed");
        setLoading(false);
        return;
      }

      const svg = await renderQuoteCard(data.data.quote, data.data.author, selectedTemplate, selectedSize);

      setResult({
        quote: data.data.quote,
        author: data.data.author,
        imageUrl: data.data.imageUrl,
        jobId: data.data.jobId,
        svg,
      });
      setStep(3);
      // Trigger credit refresh across the app
      window.dispatchEvent(new Event('credit-used'));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Render with selected template
  const handleRender = async () => {
    if (!result) return;
    setLoading(true);
    setError("");

    try {
      const svg = await renderQuoteCard(result.quote, result.author, selectedTemplate, selectedSize);
      setResult((prev) => (prev ? { ...prev, svg } : null));
      setStep(3);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error");
    } finally {
      setLoading(false);
    }
  };

  const applyTemplate = async (templateId: string, size = selectedSize) => {
    if (!result) return;
    setSelectedTemplate(templateId);
    setSelectedSize(size);
    setLoading(true);
    setError("");

    try {
      const svg = await renderQuoteCard(result.quote, result.author, templateId, size);
      setResult((prev) => (prev ? { ...prev, svg } : null));
      setStep(3);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Render failed");
    } finally {
      setLoading(false);
    }
  };

  // Download SVG - create proper blob URL
  const downloadSVG = useCallback(() => {
    if (!result?.svg) return;
    // result.svg is a data URL like "data:image/svg+xml;base64,..."
    // We need to decode it back to raw SVG text for proper download
    const base64 = result.svg.split(',')[1];
    if (!base64) return;
    const svgText = decodeURIComponent(escape(atob(base64)));
    const blob = new Blob([svgText], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `meigen-quote-${selectedTemplate}-${selectedSize}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, [result, selectedTemplate, selectedSize]);

  // Convert SVG to raster format and download
  const downloadRaster = useCallback((format: "png" | "jpg") => {
    if (!result?.svg) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth || 1080;
      canvas.height = img.naturalHeight || 1080;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      if (format === "jpg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `meigen-quote-${selectedTemplate}-${selectedSize}.${format}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(url), 1000);
        },
        format === "jpg" ? "image/jpeg" : "image/png",
        0.95
      );
    };
    img.onerror = () => setError("Image preview failed to load. Please change template and try again.");
    img.src = result.svg;
  }, [result, selectedTemplate, selectedSize]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <span className="relative z-10 font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#d4a853] mb-6">
        AI Quote Studio
      </span>

      <h1
        className="relative z-10 font-[family-name:var(--font-display)] font-semibold leading-[1.1] tracking-tight max-w-[900px]"
        style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
      >
        Stop Staring at Blank Screens.
        <br />
        Start Posting Quotes That Get Noticed.
      </h1>

      <p className="relative z-10 text-lg text-[#a09b94] max-w-[560px] mt-6 mb-12 leading-relaxed">
        Meigen AI generates original quotes and turns them into brand-ready
        visual cards — in 30 seconds. No design skills. No blank Canvas.
      </p>

      {/* Step indicator */}
      <div className="relative z-10 flex items-center gap-4 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                step >= s
                  ? "bg-[#d4a853] text-[#0c0c0e]"
                  : "bg-[#1a1a1c] text-[#6b6560] border border-[rgba(245,240,232,0.08)]"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`w-12 h-px transition-colors ${
                  step > s ? "bg-[#d4a853]" : "bg-[rgba(245,240,232,0.08)]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* === STEP 1: Enter Topic === */}
      {step === 1 && (
        <div className="relative z-10 w-full max-w-[640px]">
          <div className="flex gap-3 bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-3xl p-2 focus-within:border-[#d4a853] transition-colors duration-300">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
              placeholder="Enter a topic, e.g. morning motivation"
              className="flex-1 bg-transparent border-none px-5 py-3.5 text-[#f5f0e8] placeholder-[#6b6560] text-base outline-none font-[family-name:var(--font-sans)]"
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !topic.trim()}
              className="px-8 py-3.5 bg-[#d4a853] text-[#0c0c0e] rounded-xl font-semibold text-[15px] whitespace-nowrap hover:bg-[#e8bc6a] hover:-translate-y-px transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
          <p className="text-[13px] text-[#6b6560] mt-3">
            No signup required. Try it once free. 3 generations per day.
          </p>
        </div>
      )}

      {/* === STEP 2: Pick Template === */}
      {step === 2 && result && (
        <div className="relative z-10 w-full max-w-[900px]">
          {/* Quote preview */}
          <div className="bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-2xl p-8 mb-6">
            <p className="font-[family-name:var(--font-display)] text-xl text-[#f5f0e8] mb-2">
              "{result.quote}"
            </p>
            <span className="text-sm text-[#d4a853]">— {result.author}</span>
          </div>

          {/* Size selector */}
          <div className="mb-6">
            <p className="text-sm text-[#a09b94] mb-3 text-left">Choose Size</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSize(s.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedSize === s.id
                      ? "border-[#d4a853] bg-[rgba(212,168,83,0.08)]"
                      : "border-[rgba(245,240,232,0.08)] bg-[#141416] hover:border-[rgba(245,240,232,0.15)]"
                  }`}
                >
                  <p className="text-[#f5f0e8] font-semibold text-sm">{s.name}</p>
                  <p className="text-[#6b6560] text-xs mt-1">{s.desc}</p>
                  <p className="text-[#d4a853] text-xs mt-1 font-mono">{s.id}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  activeCategory === cat
                    ? "border-[#d4a853] text-[#d4a853]"
                    : "border-[rgba(245,240,232,0.08)] text-[#a09b94] hover:border-[#d4a853]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Template grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6 max-h-[300px] overflow-y-auto pr-2">
            {filteredTemplates.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTemplate(t.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedTemplate === t.id
                    ? "border-[#d4a853] bg-[rgba(212,168,83,0.08)]"
                    : "border-[rgba(245,240,232,0.08)] bg-[#141416] hover:border-[rgba(245,240,232,0.15)]"
                }`}
              >
                <p className="text-[#f5f0e8] text-xs font-semibold truncate">{t.name}</p>
                <p className="text-[#6b6560] text-[10px] mt-1">{t.category}</p>
              </button>
            ))}
          </div>

          {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3 border border-[rgba(245,240,232,0.08)] text-[#a09b94] rounded-xl hover:border-[#d4a853] hover:text-[#d4a853] transition-all"
            >
              Back
            </button>
            <button
              onClick={handleRender}
              disabled={loading}
              className="px-8 py-3 bg-[#d4a853] text-[#0c0c0e] rounded-xl font-semibold hover:bg-[#e8bc6a] transition-all disabled:opacity-50"
            >
              {loading ? "Rendering..." : "Preview & Download →"}
            </button>
          </div>
        </div>
      )}

      {/* === STEP 3: Download === */}
      {step === 3 && result?.svg && (
        <div className="relative z-10 w-full max-w-[600px]">
          {/* Preview */}
          <div className="bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-2xl p-6 mb-6">
            <img
              src={result.svg}
              alt="Quote card preview"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Template switcher */}
          <div className="mb-6 text-left">
            <p className="text-sm text-[#a09b94] mb-3">
              Switch template — the generated quote stays the same
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {templates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => applyTemplate(t.id)}
                  disabled={loading}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedTemplate === t.id
                      ? "border-[#d4a853] bg-[rgba(212,168,83,0.08)]"
                      : "border-[rgba(245,240,232,0.08)] bg-[#141416] hover:border-[rgba(245,240,232,0.15)]"
                  } disabled:opacity-60`}
                >
                  <p className="text-[#f5f0e8] text-xs font-semibold truncate">{t.name}</p>
                  <p className="text-[#6b6560] text-[10px] mt-1">{t.category}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Size switcher */}
          <div className="mb-6 text-left">
            <p className="text-sm text-[#a09b94] mb-3">Export size</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => applyTemplate(selectedTemplate, s.id)}
                  disabled={loading}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedSize === s.id
                      ? "border-[#d4a853] bg-[rgba(212,168,83,0.08)]"
                      : "border-[rgba(245,240,232,0.08)] bg-[#141416] hover:border-[rgba(245,240,232,0.15)]"
                  } disabled:opacity-60`}
                >
                  <p className="text-[#f5f0e8] text-xs font-semibold">{s.name}</p>
                  <p className="text-[#6b6560] text-[10px] mt-1">{s.id}</p>
                </button>
              ))}
            </div>
          </div>

          {loading && <p className="text-sm text-[#d4a853] mb-4">Applying template...</p>}
          {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

          {/* Download options */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => downloadRaster("png")}
              className="p-4 bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-xl hover:border-[#d4a853] transition-all text-left"
            >
              <p className="text-[#f5f0e8] font-semibold">Download PNG</p>
              <p className="text-[#6b6560] text-xs mt-1">Best for social media</p>
            </button>
            <button
              onClick={() => downloadRaster("jpg")}
              className="p-4 bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-xl hover:border-[#d4a853] transition-all text-left"
            >
              <p className="text-[#f5f0e8] font-semibold">Download JPG</p>
              <p className="text-[#6b6560] text-xs mt-1">Small file size</p>
            </button>
            <button
              onClick={downloadSVG}
              className="p-4 bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-xl hover:border-[#d4a853] transition-all text-left"
            >
              <p className="text-[#f5f0e8] font-semibold">Download SVG</p>
              <p className="text-[#6b6560] text-xs mt-1">Scalable vector format</p>
            </button>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => {
                setStep(2);
                setError("");
              }}
              className="px-6 py-3 border border-[rgba(245,240,232,0.08)] text-[#a09b94] rounded-xl hover:border-[#d4a853] hover:text-[#d4a853] transition-all"
            >
              Change Template
            </button>
            <button
              onClick={() => {
                setStep(1);
                setTopic("");
                setResult(null);
                setError("");
              }}
              className="px-8 py-3 bg-[#d4a853] text-[#0c0c0e] rounded-xl font-semibold hover:bg-[#e8bc6a] transition-all"
            >
              Create New Quote
            </button>
          </div>
        </div>
      )}

      {error && step !== 2 && (
        <p className="relative z-10 text-sm text-red-400 mt-4">{error}</p>
      )}
    </section>
  );
}
