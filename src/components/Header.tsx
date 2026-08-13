"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/speaking", label: "Speaking" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/media", label: "Media" },
  { href: "/music", label: "Music" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-kraft/90 backdrop-blur-md border-b border-rule sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-serif text-xl font-medium tracking-tight text-ink hover:text-brass transition-colors flex items-center gap-2.5"
          >
            <img
              src="/Dave.jpeg"
              alt=""
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover border border-rule shrink-0"
            />
            Dave Anderson
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft hover:text-brass transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.saxton.com.au/speakers/dave-anderson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium bg-ink text-kraft hover:bg-brass hover:text-ink transition-colors px-4 py-2 rounded-full"
            >
              Book via Saxton →
            </a>
          </nav>

          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-6 pt-2 space-y-1 border-t border-rule">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-base text-ink font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.saxton.com.au/speakers/dave-anderson"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-medium bg-ink text-kraft px-4 py-2 rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Book via Saxton →
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
