"use client";

import { PrivyProvider } from "@privy-io/react-auth";

export function Providers({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (!appId) {
    console.warn("NEXT_PUBLIC_PRIVY_APP_ID is not set. Auth will not work.");
  }

  return (
    <PrivyProvider
      appId={appId ?? ""}
      config={{
        loginMethods: ["email", "wallet", "google", "twitter", "discord", "github"],
        appearance: {
          theme: "light",
          accentColor: "#4f46e5",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
