"use client";

export function CTA() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 pb-24 pt-12">
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

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-neutral-900/50 border border-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              type="button"
              className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
          <p className="text-xs text-neutral-600 mt-4">
            Limited spots available for Beta access.
          </p>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
}
