const plans = [
  {
    name: "Free",
    desc: "For trying Meigen AI",
    price: "$0",
    period: "Forever",
    features: [
      "5 credits per day",
      "5 core templates",
      "1:1 export only",
      "PNG download",
    ],
    cta: "Start Creating — Free",
    href: "#",
    popular: false,
  },
  {
    name: "Pro",
    desc: "For daily creators",
    price: "$7.99",
    period: "or $79/year (save 17%)",
    features: [
      "200 credits per month",
      "20+ brand-ready templates",
      "Batch export (up to 7)",
      "All sizes: 1:1, 4:5, 9:16, 16:9",
      "PNG + JPG export",
      "No watermark",
      "1 brand config",
    ],
    cta: "Go Pro — Start Posting Daily",
    href: "#",
    popular: true,
  },
  {
    name: "Team",
    desc: "For small agencies",
    price: "$19.99",
    period: "or $189/year (save 21%)",
    features: [
      "600 shared credits",
      "Everything in Pro",
      "5 brand configurations",
      "3 team seats",
      "Priority support",
    ],
    cta: "Get Team Access",
    href: "#",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-12 py-[120px] max-w-[1200px] mx-auto">
      <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#d4a853]">
        Pricing
      </span>
      <h2
        className="font-[family-name:var(--font-display)] font-semibold leading-[1.2] tracking-tight mt-4 mb-4"
        style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
      >
        Simple Pricing. No Surprises.
      </h2>
      <p className="text-lg text-[#a09b94] max-w-[560px] leading-relaxed">
        Start free. Upgrade when you need more power.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1fr] gap-6 mt-16 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-[#141416] border rounded-2xl p-10 ${
              plan.popular
                ? "border-[#d4a853] bg-gradient-to-b from-[#141416] to-[rgba(212,168,83,0.05)]"
                : "border-[rgba(245,240,232,0.08)]"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[#d4a853] text-[#0c0c0e] text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-b-lg">
                Most Popular
              </div>
            )}
            <div className="font-[family-name:var(--font-display)] text-[22px] font-semibold mb-2">
              {plan.name}
            </div>
            <p className="text-sm text-[#a09b94] mb-6">{plan.desc}</p>
            <div className="text-[42px] font-bold leading-none mb-1">
              {plan.price}
              <span className="text-base font-normal text-[#6b6560]">/mo</span>
            </div>
            <p className="text-sm text-[#6b6560] mb-8">{plan.period}</p>
            <ul className="space-y-2 mb-8">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 text-sm text-[#a09b94]"
                >
                  <span className="w-4 h-4 rounded-full bg-[rgba(212,168,83,0.1)] flex items-center justify-center text-[#d4a853] text-[10px]">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={plan.href}
              className={`block w-full text-center py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                plan.popular
                  ? "bg-[#d4a853] text-[#0c0c0e] hover:bg-[#e8bc6a]"
                  : "bg-transparent text-[#f5f0e8] border border-[rgba(245,240,232,0.08)] hover:border-[#d4a853] hover:text-[#d4a853]"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
