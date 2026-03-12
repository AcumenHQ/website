"use client";

import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [evmAddress, setEvmAddress] = useState("");
  const [discord, setDiscord] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [showDiscordInvite, setShowDiscordInvite] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          evmAddress: evmAddress.trim() || undefined,
          discord: discord.trim() || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setEmail("");
      setEvmAddress("");
      setDiscord("");
      setShowDiscordInvite(true);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="waitlist" className="max-w-[1400px] mx-auto px-6 pb-24 pt-12">
      <div className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden group">
        {/* Background Beam Animation inside CTA */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 animate-beam" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
            Ready to verify your value?
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            Join the waitlist for the first cohort. Secure your future in Web3.
          </p>

          {status === "success" ? (
            <p className="text-lg text-emerald-400 font-medium">
              You&apos;re on the list. Check your email for a welcome from us.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 max-w-md mx-auto text-left"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  required
                  className="flex-1 bg-neutral-900/50 border border-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-60"
                />
                <input
                  type="text"
                  placeholder="EVM address (0x…)"
                  value={evmAddress}
                  onChange={(e) => setEvmAddress(e.target.value)}
                  disabled={status === "loading"}
                  className="flex-1 bg-neutral-900/50 border border-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-60"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Discord handle"
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                  disabled={status === "loading"}
                  className="flex-1 bg-neutral-900/50 border border-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed sm:self-stretch"
                >
                  {status === "loading" ? "Joining…" : "Join Waitlist"}
                </button>
              </div>
            </form>
          )}

          {status === "error" && message && (
            <p className="text-sm text-red-400 mt-3" role="alert">
              {message}
            </p>
          )}
          <p className="text-xs text-neutral-600 mt-4">
            Limited spots available for Beta access.
          </p>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] pointer-events-none" />

        {showDiscordInvite && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/70">
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl px-6 py-5 max-w-sm w-full text-left shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-2">
                Join the Acumen Discord
              </h3>
              <p className="text-sm text-neutral-400 mb-4">
                You&apos;re on the waitlist. Come hang out with the community while we get things ready.
              </p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href="https://x.com/acumenhq?s=21"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-neutral-700 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors"
                  onClick={() => setShowDiscordInvite(false)}
                >
                  Join our X
                </a>
                <a
                  href="https://discord.gg/Sw5Xeu9J4R"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#5865F2] text-sm font-medium text-white hover:bg-[#4752c4] transition-colors"
                  onClick={() => setShowDiscordInvite(false)}
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
