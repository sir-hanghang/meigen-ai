"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface AuthUser {
  userId: number;
  email: string;
  name?: string;
  avatar?: string;
  plan: string;
  credits: {
    total: number;
    expiring: number;
    expiresAt: string | null;
  };
}

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Templates", href: "/#templates" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = () => {
      fetch("/api/auth/me", { credentials: "include" })
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.data) {
            setUser(data.data);
          } else {
            setUser(null);
          }
        })
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    };

    fetchUser();

    // Listen for credit usage events to refresh
    window.addEventListener('credit-used', fetchUser);
    return () => window.removeEventListener('credit-used', fetchUser);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
    window.location.reload();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className="flex items-center justify-between px-6 md:px-12 py-5"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,12,14,0.95), rgba(12,12,14,0))",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#f5f0e8]"
        >
          Meigen<span className="text-[#d4a853]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#a09b94] hover:text-[#f5f0e8] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-xs text-[#d4a853] font-medium">
                {user.credits?.total ?? 0} credits
              </span>
              <div className="flex items-center gap-2">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name || user.email}
                    className="w-7 h-7 rounded-full"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-[#d4a853] text-[#0c0c0e] flex items-center justify-center text-xs font-bold">
                    {(user.name || user.email).charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="text-sm text-[#f5f0e8]">
                  {user.name || user.email.split("@")[0]}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm font-medium px-4 py-2 border border-[rgba(245,240,232,0.08)] rounded-full text-[#a09b94] hover:border-[#d4a853] hover:text-[#d4a853] transition-all duration-200"
              >
                Log out
              </button>
            </div>
          ) : (
            <a
              href="/api/auth/login?returnTo=/"
              className="text-sm font-medium px-6 py-2.5 border border-[rgba(245,240,232,0.08)] rounded-full text-[#f5f0e8] hover:border-[#d4a853] hover:text-[#d4a853] transition-all duration-200"
            >
              Log in
            </a>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#f5f0e8]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#141416] border-b border-[rgba(245,240,232,0.08)] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#a09b94] hover:text-[#f5f0e8] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <>
              <span className="text-sm text-[#d4a853]">
                {user.credits?.total ?? 0} credits
              </span>
              <button
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                className="text-sm font-medium px-6 py-2.5 border border-[rgba(245,240,232,0.08)] rounded-full text-[#f5f0e8] hover:border-[#d4a853] hover:text-[#d4a853] transition-all duration-200 text-center mt-2"
              >
                Log out
              </button>
            </>
          ) : (
            <a
              href="/api/auth/login?returnTo=/"
              onClick={() => setOpen(false)}
              className="text-sm font-medium px-6 py-2.5 border border-[rgba(245,240,232,0.08)] rounded-full text-[#f5f0e8] hover:border-[#d4a853] hover:text-[#d4a853] transition-all duration-200 text-center mt-2"
            >
              Log in
            </a>
          )}
        </div>
      )}
    </header>
  );
}
