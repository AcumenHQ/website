import { Suspense } from "react";
import { SignUpContent } from "./signup-content";

export default function SignUpPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#050505]">
          <div className="animate-pulse text-neutral-400">Loading...</div>
        </div>
      }
    >
      <SignUpContent />
    </Suspense>
  );
}
