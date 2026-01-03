"use client";

import Link from "next/link";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Jobs", href: "#jobs" },
  { label: "Reputation", href: "#reputation" },
  { label: "Roadmap", href: "#roadmap" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white">
            <iconify-icon icon="lucide:hexagon" width="18" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
            ACUMEN
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:block text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Sign In
          </a>
          <button className="bg-white text-black hover:bg-neutral-200 transition-all px-4 py-2 rounded-lg text-xs font-semibold tracking-wide flex items-center gap-2 group">
            Start Learning
            <iconify-icon
              icon="lucide:arrow-right"
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
