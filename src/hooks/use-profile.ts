"use client";

import { useCallback, useEffect, useState } from "react";
import {
  getStoredProfile,
  setStoredProfile,
  isOnboardingComplete as getOnboardingComplete,
  setOnboardingComplete as persistOnboardingComplete,
  type Profile,
} from "@/lib/profile-store";

export function useProfile(userId: string | null | undefined) {
  const [profile, setProfileState] = useState<Profile | null>(null);
  const [onboardingComplete, setOnboardingCompleteState] = useState<boolean>(false);

  useEffect(() => {
    if (!userId) {
      setProfileState(null);
      setOnboardingCompleteState(false);
      return;
    }
    setProfileState(getStoredProfile(userId));
    setOnboardingCompleteState(getOnboardingComplete(userId));
  }, [userId]);

  const setProfile = useCallback(
    (next: Profile | ((prev: Profile | null) => Profile)) => {
      if (!userId) return;
      const nextProfile = typeof next === "function" ? next(getStoredProfile(userId)) : next;
      setStoredProfile(userId, nextProfile);
      setProfileState(nextProfile);
    },
    [userId]
  );

  const completeOnboarding = useCallback(() => {
    if (!userId) return;
    persistOnboardingComplete(userId);
    setOnboardingCompleteState(true);
  }, [userId]);

  return {
    profile,
    setProfile,
    isOnboardingComplete: onboardingComplete,
    completeOnboarding,
  };
}
