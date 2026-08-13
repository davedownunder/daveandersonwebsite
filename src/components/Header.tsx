"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    href: "/speaking",
    label: "Speaking",
    children: [
      { href: "/speaking", label: "Keynotes & MC" },
      { href: "/speaking/content", label: "Event Content" },
      { href: "/speaking/video", label: "Video Storytelling" },
    ],
  },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/music", label: "Music" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-kraft/90 backdrop-blur-md border-b border-rule sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-serif text-xl font-medium tracking-tight text-ink hover:text-brass transition-colors flex items-center gap-2"
          >
            <span
              aria-hidden
              className="inline-block w-6 h-6 border border-ink rounded-sm relative"
              style={{
                background:
                  "linear-gradient(135deg, transparent 0 45%, var(--color-brass) 45% 55%, transparent 55%)",
              }}
            />
            Dave Anderson
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft hover:text-brass transition-colors py-4 inline-flex items-center gap-1"
                  >
                    {link.label}
                    <svg
                      className="w-3 h-3 opacity-60"
                      fill="none"
                      viewBox="0 0 12 12"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 4.5L6 7.5L9 4.5"
                      />
                    </svg>
                  </Link>
                  {openDropdown === link.href && (
                    <div className="absolute top-full left-0 bg-kraft-soft border border-rule rounded-md shadow-sm py-1 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-ink-soft hover:bg-kraft-alt hover:text-brass transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-soft hover:text-brass transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
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
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-base text-ink font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-1 pl-4 text-sm text-ink-muted hover:text-brass"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
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
