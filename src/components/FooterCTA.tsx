"use client";

import { useState } from "react";

export default function FooterCTA() {
  const [topic, setTopic] = useState("");

  return (
    <section className="relative text-center px-6 md:px-12 py-[120px] overflow-hidden">
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 800,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 70%)",
          bottom: -200,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <h2
        className="relative z-10 font-[family-name:var(--font-display)] font-semibold leading-[1.2] tracking-tight mb-6"
        style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
      >
        Ready to Stop Staring at Blank Screens?
      </h2>

      <p className="relative z-10 text-lg text-[#a09b94] mb-10">
        Generate your first quote card in 30 seconds. No signup required.
      </p>

      <div className="relative z-10 w-full max-w-[640px] mx-auto">
        <div className="flex gap-3 bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-3xl p-2 focus-within:border-[#d4a853] transition-colors duration-300">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Try leadership or morning motivation"
            className="flex-1 bg-transparent border-none px-5 py-3.5 text-[#f5f0e8] placeholder-[#6b6560] text-base outline-none font-[family-name:var(--font-sans)]"
          />
          <button className="px-8 py-3.5 bg-[#d4a853] text-[#0c0c0e] rounded-xl font-semibold text-[15px] whitespace-nowrap hover:bg-[#e8bc6a] hover:-translate-y-px transition-all duration-200">
            Generate — Free
          </button>
        </div>
      </div>
    </section>
  );
}
