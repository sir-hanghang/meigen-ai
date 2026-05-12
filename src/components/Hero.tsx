"use client";

import { useState } from "react";

export default function Hero() {
  const [topic, setTopic] = useState("");

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 pb-20 overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <span
        className="relative z-10 font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#d4a853] mb-6"
      >
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

      {/* Input */}
      <div className="relative z-10 w-full max-w-[640px] mb-4">
        <div
          className="flex gap-3 bg-[#141416] border border-[rgba(245,240,232,0.08)] rounded-3xl p-2 focus-within:border-[#d4a853] transition-colors duration-300"
        >
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic, e.g. morning motivation"
            className="flex-1 bg-transparent border-none px-5 py-3.5 text-[#f5f0e8] placeholder-[#6b6560] text-base outline-none font-[family-name:var(--font-sans)]"
          />
          <button className="px-8 py-3.5 bg-[#d4a853] text-[#0c0c0e] rounded-xl font-semibold text-[15px] whitespace-nowrap hover:bg-[#e8bc6a] hover:-translate-y-px transition-all duration-200">
            Generate
          </button>
        </div>
      </div>

      <p className="relative z-10 text-[13px] text-[#6b6560] mb-12">
        No signup required. Try it once free.
      </p>

      {/* Demo card */}
      <div
        className="relative z-10 w-full max-w-[480px] aspect-square bg-gradient-to-br from-[#1a1a1c] to-[#0c0c0e] border border-[rgba(245,240,232,0.08)] rounded-2xl p-12 flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(212,168,83,0.05), transparent 50%)",
          }}
        />
        <p
          className="relative z-10 font-[family-name:var(--font-display)] text-[28px] leading-[1.4] text-[#f5f0e8]"
        >
          “The only way to do great work is to love what you do.”
        </p>
        <div className="relative z-10 w-10 h-px bg-[#d4a853] my-4" />
        <span className="relative z-10 text-sm text-[#d4a853] tracking-[0.1em] uppercase">
          — Steve Jobs
        </span>
      </div>
    </section>
  );
}
