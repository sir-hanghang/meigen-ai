const steps = [
  {
    num: "01",
    title: "Enter Your Topic",
    desc: 'Type a word or theme. "Leadership." "Monday motivation." "Self-care." Our AI writes an original quote matched to your style.',
  },
  {
    num: "02",
    title: "Pick a Template",
    desc: "Choose from brand-ready layouts. Your colors, your logo, your fonts — applied automatically. No manual tweaking.",
  },
  {
    num: "03",
    title: "Download and Post",
    desc: "Export as PNG or JPG. Any size. Single or batch. Ready for Instagram, X, LinkedIn, or your newsletter.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 md:px-12 py-[120px] max-w-[1200px] mx-auto">
      <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#d4a853]">
        How It Works
      </span>
      <h2
        className="font-[family-name:var(--font-display)] font-semibold leading-[1.2] tracking-tight mt-4 mb-4"
        style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
      >
        From Idea to Post in 30 Seconds
      </h2>
      <p className="text-lg text-[#a09b94] max-w-[560px] leading-relaxed">
        Three steps. No learning curve. No design software.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {steps.map((s) => (
          <div
            key={s.num}
            className="bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-2xl p-10 hover:border-[rgba(245,240,232,0.15)] transition-colors duration-300"
          >
            <div className="font-[family-name:var(--font-display)] text-5xl font-bold text-[#d4a853] opacity-30 leading-none mb-6">
              {s.num}
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-[22px] font-semibold mb-3">
              {s.title}
            </h3>
            <p className="text-[15px] text-[#a09b94] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
