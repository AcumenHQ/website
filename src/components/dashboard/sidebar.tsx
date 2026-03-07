"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { useProfile } from "@/hooks/use-profile";

const navLinks = [
  { href: "/dashboard/talent", icon: "lucide:layout-dashboard", label: "Dashboard" },
  { href: "/dashboard/talent/learning", icon: "lucide:book-open", label: "My Learning" },
  {
    href: "/dashboard/talent/jobs",
    icon: "lucide:briefcase",
    label: "Job Status",
    badge: 1,
  },
  { href: "/dashboard/talent/reputation", icon: "lucide:award", label: "Reputation" },
  { href: "/dashboard/talent/earnings", icon: "lucide:wallet", label: "Earnings" },
  { href: "/dashboard/profile", icon: "lucide:user", label: "Profile" },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = usePrivy();
  const { profile } = useProfile(user?.id);

  const displayName = profile?.username || "Account";
  const avatarUrl = profile?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Acumen";
  const walletAccount = user?.linkedAccounts?.find((a) => a.type === "wallet" && "address" in a) as { address?: string } | undefined;
  const walletSnippet = walletAccount?.address
    ? `${walletAccount.address.slice(0, 6)}...${walletAccount.address.slice(-4)}`
    : profile?.email || "Profile";

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen flex flex-col bg-white border-r border-border z-50 hidden md:flex shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-primary text-txt-inv flex items-center justify-center transition-colors duration-300">
          <iconify-icon icon="lucide:hexagon" width="18" stroke-width="2.5" />
        </div>
        <span className="text-lg font-bold tracking-tight text-txt-main">
          ACUMEN
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                isActive ? "active" : ""
              }`}
            >
              <iconify-icon icon={link.icon} width="18" />
              {link.label}
              {link.badge && (
                <span className="ml-auto text-[10px] bg-primary text-txt-inv px-1.5 py-0.5 rounded font-bold transition-colors duration-300">
                  {link.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <Link
          href="/dashboard/profile"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-surface-highlight transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-surface-highlight border border-border overflow-hidden shrink-0">
            <img
              src={avatarUrl}
              alt={displayName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-txt-main truncate">
              {displayName}
            </p>
            <p className="text-xs text-txt-muted truncate">{walletSnippet}</p>
          </div>
          <iconify-icon icon="lucide:chevron-right" className="text-txt-muted shrink-0" width="16" />
        </Link>
      </div>
    </aside>
  );
}

