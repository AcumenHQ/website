"use client";

import { ThemeSwitcher } from "./theme-switcher";

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 sticky top-0 bg-white/90 backdrop-blur-sm z-40">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-txt-muted hover:text-txt-main">
          <iconify-icon icon="lucide:menu" width="24" />
        </button>
        <nav className="flex items-center text-sm font-medium text-txt-muted">
          <span className="hover:text-txt-main cursor-pointer transition-colors">
            Talent Dashboard
          </span>
          <span className="mx-2 text-border">/</span>
          <span className="text-txt-main">Overview</span>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <ThemeSwitcher />

        <div className="h-4 w-px bg-border" />

        <div className="flex items-center gap-3">
          <button className="relative text-txt-muted hover:text-primary transition-colors">
            <iconify-icon icon="lucide:bell" width="20" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-red-500 border border-white" />
          </button>
        </div>
      </div>
    </header>
  );
}

