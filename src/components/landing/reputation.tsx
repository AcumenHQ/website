"use client";

const steps = [
  {
    number: 1,
    title: "Employer Vouching",
    description:
      "Employers stake ETH to endorse your skills. No free reviews, no fake testimonials.",
  },
  {
    number: 2,
    title: "Dynamic Scoring",
    description:
      "Your Credibility Score rises with the value of ETH staked on you. Higher stakes = Higher trust.",
  },
  {
    number: 3,
    title: "Unlock Opportunities",
    description:
      "High scores unlock premium job listings and direct interview passes.",
  },
];

export function Reputation() {
  return (
    <section
      id="reputation"
      className="py-24 bg-gradient-to-b from-[#050505] to-neutral-900 border-y border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs font-medium border border-neutral-700">
            <iconify-icon icon="lucide:lock" width="12" />
            Phase 2: ETH-Backed Credibility
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Trust is earned.
            <br />
            Then verified on-chain.
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{step.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive UI Mockup */}
        <div className="relative">
          <div className="glass-panel rounded-2xl p-8 relative z-10 border border-white/10 shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5">
              <h3 className="text-white font-medium">Vouch for Candidate</h3>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Wallet Connected
              </div>
            </div>

            {/* Amount Selector */}
            <div className="mb-8">
              <label className="block text-xs font-medium text-neutral-400 mb-3 uppercase tracking-wider">
                Stake Amount (ETH)
              </label>

              {/* Custom Range Slider Visual */}
              <div className="relative h-12 bg-neutral-900 rounded-lg border border-neutral-800 mb-2 flex items-center px-4">
                <div className="flex-1 flex items-center justify-between text-sm">
                  <span className="text-neutral-500">0.1</span>
                  <span className="text-neutral-500">0.5</span>
                  <span className="text-white font-bold">1.0</span>
                  <span className="text-neutral-500">5.0</span>
                </div>
                {/* Thumb */}
                <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <iconify-icon icon="lucide:move-horizontal" className="text-white" />
                </div>
                {/* Track Fill */}
                <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-indigo-500/10 rounded-l-lg border-r border-indigo-500/30" />
              </div>
              <div className="text-right text-xs text-indigo-400">
                Premium Endorsement Selected
              </div>
            </div>

            {/* Impact Preview */}
            <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-neutral-400">Credibility Impact</span>
                <span className="text-xs text-green-400 font-bold">+150 pts</span>
              </div>
              <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full w-[75%] bg-gradient-to-r from-green-500 to-emerald-400" />
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
              <iconify-icon icon="lucide:check-circle" width="18" />
              Confirm Stake (1.0 ETH)
            </button>
          </div>

          {/* Decorative Behind Elements */}
          <div className="absolute -top-6 -right-6 w-full h-full border border-dashed border-white/5 rounded-2xl z-0" />
          <div className="absolute -bottom-6 -left-6 w-full h-full border border-dashed border-white/5 rounded-2xl z-0" />
        </div>
      </div>
    </section>
  );
}
