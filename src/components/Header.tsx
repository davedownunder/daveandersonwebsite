"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
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
    label: "My Passions",
    children: [
      { href: "/passions/travel", label: "Travel Blog" },
      { href: "/passions/peloton", label: "Peloton Ambassador" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-[#1a1a2e] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-heading text-xl font-bold tracking-tight uppercase">
            Dave <span className="text-[#36b2d1]">Anderson</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
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
                    className="text-sm font-semibold hover:text-[#36b2d1] transition-colors py-4"
                  >
                    {link.label} ▾
                  </Link>
                  {openDropdown === link.href && (
                    <div className="absolute top-full left-0 bg-[#1a1a2e] border border-gray-700 rounded-md shadow-lg py-2 min-w-[180px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm hover:bg-[#692e5e] hover:text-white transition-colors"
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
                  className="text-sm font-semibold hover:text-[#36b2d1] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm font-semibold hover:text-[#36b2d1]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-1 pl-4 text-sm text-gray-400 hover:text-[#36b2d1]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
