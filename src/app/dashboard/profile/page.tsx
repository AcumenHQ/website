"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useProfile } from "@/hooks/use-profile";
import { DashboardLayout } from "@/components/dashboard/layout";
import { DashboardHeader } from "@/components/dashboard/header";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const { user } = usePrivy();
  const { profile, setProfile } = useProfile(user?.id);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (profile) {
      setUsername(profile.username);
      setAvatar(profile.avatar);
      setEmail(profile.email);
    }
  }, [profile]);

  const handleSave = () => {
    if (!user?.id) return;
    setProfile({
      username: username.trim() || "User",
      avatar: avatar.trim(),
      email: email.trim(),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <DashboardLayout>
      <DashboardHeader />
      <div className="p-6 max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-txt-main">Profile</h2>
          <p className="text-txt-muted text-sm mt-1">
            Update your username, avatar, and email. Changes are saved locally.
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
              <div className="mt-2 flex items-center gap-3">
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover border border-border"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="text-xs text-txt-muted">Preview</span>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="btn-primary px-6 py-2.5 rounded-lg font-semibold"
          >
            {saved ? "Saved" : "Save changes"}
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
