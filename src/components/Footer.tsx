import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(245,240,232,0.08)] px-6 md:px-12 py-12 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="font-[family-name:var(--font-display)] text-lg text-[#f5f0e8]">
        Meigen<span className="text-[#d4a853]">.</span>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-6">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] text-[#6b6560] hover:text-[#f5f0e8] transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
