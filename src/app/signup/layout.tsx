import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Acumen",
  description: "Create your account to access the Talent Dashboard.",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
