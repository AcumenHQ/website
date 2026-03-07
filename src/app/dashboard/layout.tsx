"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { isOnboardingComplete as getOnboardingComplete } from "@/lib/profile-store";

const ONBOARDING_PATH = "/dashboard/onboarding";

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ready, authenticated, user } = usePrivy();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!ready) return;
    if (!authenticated) {
      router.replace(`/signup?redirect=${encodeURIComponent(pathname ?? "/dashboard/talent")}`);
      return;
    }
    const completed = user?.id ? getOnboardingComplete(user.id) : false;
    if (authenticated && pathname !== ONBOARDING_PATH && !completed) {
      router.replace(ONBOARDING_PATH);
    }
  }, [ready, authenticated, user?.id, pathname, router]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse text-neutral-500">Loading...</div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return <>{children}</>;
}
