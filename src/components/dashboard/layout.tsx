"use client";

import { ReactNode } from "react";
import { Sidebar } from "./sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dashboard-root min-h-screen font-sans antialiased selection:bg-primary-light selection:text-primary bg-surface overflow-x-hidden">
      <Sidebar />
      <main className="ml-0 w-full md:ml-64 md:w-[calc(100%-16rem)] min-h-screen flex flex-col flex-1">
        {children}
      </main>
    </div>
  );
}

