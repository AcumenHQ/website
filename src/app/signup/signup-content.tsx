"use client";

import { useLogin, usePrivy } from "@privy-io/react-auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const DEFAULT_REDIRECT = "/dashboard/talent";

export function SignUpContent() {
  const { ready, authenticated } = usePrivy();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") ?? DEFAULT_REDIRECT;

  const { login } = useLogin({
    onComplete: () => {
      router.replace(redirectTo);
    },
    onError: (error) => {
      console.error("Sign up failed:", error);
    },
  });

  useEffect(() => {
    if (ready && authenticated) {
      router.replace(redirectTo);
    }
  }, [ready, authenticated, router, redirectTo]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="animate-pulse text-neutral-400">Loading...</div>
      </div>
    );
  }

  if (authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] px-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white">
              <iconify-icon icon="lucide:hexagon" width="20" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              ACUMEN
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Create your account
          </h1>
          <p className="mt-2 text-neutral-400">
            Sign up with email, wallet, or social to access the Talent Dashboard.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-8 border border-white/10 space-y-6">
          <button
            type="button"
            onClick={login}
            className="w-full h-12 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
          >
            <iconify-icon icon="lucide:wallet" width="20" />
            Sign up with Privy
          </button>
          <p className="text-center text-xs text-neutral-500">
            Opens a modal to connect wallet, sign in with email, or use Google,
            Twitter, Discord, or GitHub.
          </p>
        </div>

        <p className="text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <button
            type="button"
            onClick={login}
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
