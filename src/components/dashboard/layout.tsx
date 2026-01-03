"use client";

import { ReactNode } from "react";
import { Sidebar } from "./sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex font-sans antialiased selection:bg-primary-light selection:text-primary">
      <Sidebar />
      <main className="flex-1 min-w-0 relative bg-white">{children}</main>
    </div>
  );
}

