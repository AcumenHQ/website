"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useProfile } from "@/hooks/use-profile";
import { useState, useEffect } from "react";

function getEmailFromPrivyUser(user: { linkedAccounts?: Array<{ type: string; address?: string }> } | null): string {
  if (!user?.linkedAccounts) return "";
  const emailAccount = user.linkedAccounts.find(
    (a): a is { type: "email"; address: string } => a.type === "email" && "address" in a
  );
  return emailAccount?.address ?? "";
}

export default function OnboardingPage() {
  const { user } = usePrivy();
  const router = useRouter();
  const { profile, setProfile, completeOnboarding, isOnboardingComplete } = useProfile(user?.id);
  const [username, setUsername] = useState(profile?.username ?? "");
  const [avatar, setAvatar] = useState(profile?.avatar ?? "");
  const [email, setEmail] = useState(profile?.email ?? "");
  const [saving, setSaving] = useState(false);

  const privyEmail = getEmailFromPrivyUser(user ?? null);

  useEffect(() => {
    if (profile) {
      setUsername(profile.username);
      setAvatar(profile.avatar);
      setEmail(profile.email);
    } else if (privyEmail) {
      setEmail(privyEmail);
    }
  }, [profile, privyEmail]);

  useEffect(() => {
    if (user?.id && isOnboardingComplete) {
      router.replace("/dashboard/talent");
    }
  }, [user?.id, isOnboardingComplete, router]);

  const handleSave = () => {
    if (!user?.id) return;
    setSaving(true);
    setProfile({
      username: username.trim() || "User",
      avatar: avatar.trim(),
      email: email.trim(),
    });
    completeOnboarding();
    setSaving(false);
    router.replace("/dashboard/talent");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-txt-main">Welcome to Acumen</h1>
          <p className="mt-2 text-sm text-txt-muted">
            Set up your profile. You can change these later in Profile.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 bg-white space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-txt-main mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. alex_dev"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-txt-main placeholder:text-txt-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-txt-main mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-txt-main placeholder:text-txt-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="avatar" className="block text-sm font-medium text-txt-main mb-1">
              Avatar URL
            </label>
            <input
              id="avatar"
              type="url"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-txt-main placeholder:text-txt-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {avatar && (
              <div className="mt-2 flex justify-center">
                <img
                  src={avatar}
                  alt="Avatar preview"
                  className="w-16 h-16 rounded-full object-cover border border-border"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="w-full btn-primary py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save and continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
