const ONBOARDING_KEY_PREFIX = "acumen_onboarding_";
const PROFILE_KEY_PREFIX = "acumen_profile_";

export type Profile = {
  username: string;
  avatar: string;
  email: string;
};

function getOnboardingKey(userId: string) {
  return `${ONBOARDING_KEY_PREFIX}${userId}`;
}

function getProfileKey(userId: string) {
  return `${PROFILE_KEY_PREFIX}${userId}`;
}

export function getStoredProfile(userId: string | null | undefined): Profile | null {
  if (typeof window === "undefined" || !userId) return null;
  try {
    const raw = localStorage.getItem(getProfileKey(userId));
    if (!raw) return null;
    const data = JSON.parse(raw) as Profile;
    return {
      username: data.username ?? "",
      avatar: data.avatar ?? "",
      email: data.email ?? "",
    };
  } catch {
    return null;
  }
}

export function setStoredProfile(userId: string, profile: Profile): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(getProfileKey(userId), JSON.stringify(profile));
}

export function isOnboardingComplete(userId: string | null | undefined): boolean {
  if (typeof window === "undefined" || !userId) return false;
  return localStorage.getItem(getOnboardingKey(userId)) === "true";
}

export function setOnboardingComplete(userId: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(getOnboardingKey(userId), "true");
}
