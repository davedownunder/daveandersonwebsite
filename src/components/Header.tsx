"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    href: "/events",
    label: "Events",
    children: [
      { href: "/events/keynotes", label: "Keynotes" },
      { href: "/events/content", label: "Event Content" },
      { href: "/events/video-storytelling", label: "Video Storytelling" },
    ],
  },
  { href: "/media", label: "Media" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/music", label: "Music" },
  {
    href: "/passions",
    label: "Passions",
    children: [
      { href: "/passions/travel", label: "Travel" },
      { href: "/passions/peloton", label: "Peloton" },
    ],
  },
  { href: "/blog", label: "Writing" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-cream/85 backdrop-blur-md border-b border-rule-soft sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-serif text-xl font-medium tracking-tight text-ink hover:text-accent transition-colors"
          >
            Dave Anderson
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
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
                    className="text-sm text-ink-soft hover:text-accent transition-colors py-4 inline-flex items-center gap-1"
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
                    <div className="absolute top-full left-0 bg-paper border border-rule rounded-md shadow-sm py-1 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-ink-soft hover:bg-cream-alt hover:text-accent transition-colors"
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
                  className="text-sm text-ink-soft hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/#contact"
              className="text-sm font-medium bg-ink text-cream hover:bg-accent transition-colors px-4 py-2 rounded-full"
            >
              Get in touch
            </Link>
          </nav>

          {/* Mobile toggle */}
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

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-6 pt-2 space-y-1 border-t border-rule-soft">
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
                    className="block py-1 pl-4 text-sm text-ink-muted hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/#contact"
              className="mt-4 inline-flex text-sm font-medium bg-ink text-cream px-4 py-2 rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Get in touch
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
