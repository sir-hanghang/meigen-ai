const cases = [
  {
    title: "Social Media Managers",
    desc: "Generate 7 on-brand quote cards in 2 minutes. Same fonts. Same colors. Same spacing. Your feed looks intentional, not scattered.",
  },
  {
    title: "Coaches & Consultants",
    desc: "AI generates original quotes in your voice — reflective, direct, or uplifting. Each card carries your logo and brand colors.",
  },
  {
    title: "Personal Brand Builders",
    desc: "Create original quote content that looks commissioned. Clean typography. Professional layout. Your name on it.",
  },
  {
    title: "Newsletter Creators",
    desc: "Every issue opens with a striking quote card — your brand colors, your voice, your visual signature. Export in 16:9, 4:5, or 1:1.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="px-6 md:px-12 py-[120px] max-w-[1200px] mx-auto">
      <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#d4a853]">
        Use Cases
      </span>
      <h2
        className="font-[family-name:var(--font-display)] font-semibold leading-[1.2] tracking-tight mt-4 mb-4"
        style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
      >
        Built for Creators Who Post Daily
      </h2>
      <p className="text-lg text-[#a09b94] max-w-[560px] leading-relaxed">
        Whether you manage one brand or ten, Meigen AI keeps your quote content flowing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {cases.map((c) => (
          <div
            key={c.title}
            className="bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-2xl p-10 hover:border-[#d4a853] hover:-translate-y-0.5 transition-all duration-300"
          >
            <h3 className="font-[family-name:var(--font-display)] text-[22px] font-semibold mb-4">
              {c.title}
            </h3>
            <p className="text-[15px] text-[#a09b94] leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
