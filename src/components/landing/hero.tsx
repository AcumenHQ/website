"use client";

export function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
      <div className="lg:col-span-7 space-y-8 animate-clip-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Phase 1: Foundation Beta Live
        </div>

        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
          Bridging the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-white text-glow">
            Web3 Skills Gap.
          </span>
        </h1>

        <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
          The first e-learning ecosystem with ETH-backed reputation. Master
          trending skills, verify your work on-chain, and get hired by top
          protocols.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="h-12 px-8 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2">
            Explore Courses
            <iconify-icon icon="lucide:chevron-right" />
          </button>
          <button className="h-12 px-8 rounded-lg border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 text-neutral-300 font-medium text-sm transition-all flex items-center justify-center gap-2">
            <iconify-icon icon="lucide:play-circle" width="18" />
            Watch Trailer
          </button>
        </div>

        {/* Trust Signal */}
        <div className="pt-8 flex flex-col gap-4 border-t border-white/5">
          <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
            Future Hiring Partners
          </p>
          <div className="flex gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <iconify-icon icon="simple-icons:ethereum" width="24" />
            <iconify-icon icon="simple-icons:polygon" width="24" />
            <iconify-icon icon="simple-icons:solana" width="24" />
            <iconify-icon icon="simple-icons:chainlink" width="24" />
            <iconify-icon icon="simple-icons:aave" width="24" />
          </div>
        </div>
      </div>

      {/* HERO VISUAL: The Pipeline */}
      <div
        className="lg:col-span-5 relative h-[500px] hidden lg:block animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        {/* Abstract Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent blur-[80px] rounded-full opacity-50" />

        {/* Card Container */}
        <div className="relative w-full h-full flex flex-col justify-between py-10 pl-10">
          {/* 1. Learning Node */}
          <div className="glass-panel p-4 rounded-xl w-64 absolute top-0 left-0 z-20 animate-float shadow-xl border-l-2 border-l-blue-500">
            <div className="flex justify-between items-start mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <iconify-icon icon="lucide:code-2" width="16" />
              </div>
              <span className="text-[10px] bg-neutral-900 border border-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">
                In Progress
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-white">Vibe Coding</h3>
              <p className="text-xs text-neutral-500">Module 3: AI Auditing</p>
              <div className="w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden">
                <div className="h-full w-[70%] bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Connection Beam 1 */}
          <svg
            className="absolute top-[60px] left-[128px] w-[200px] h-[180px] z-10 pointer-events-none"
            style={{ transform: "rotate(10deg)" }}
          >
            <path
              d="M0,0 C50,0 50,150 150,150"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            <path
              d="M0,0 C50,0 50,150 150,150"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="beam-path"
            />
          </svg>

          {/* 2. Credential/Reputation Node */}
          <div
            className="glass-panel p-5 rounded-xl w-72 absolute top-[35%] right-0 z-30 animate-float shadow-2xl border border-indigo-500/30"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 overflow-hidden">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  alt="User"
                  className="w-full h-full"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Alex Dev</div>
                <div className="text-[10px] text-indigo-400 flex items-center gap-1">
                  <iconify-icon icon="lucide:badge-check" width="10" />
                  Verified Graduate
                </div>
              </div>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-3 border border-neutral-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Reputation Score</span>
                <span className="text-white font-mono">98/100</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">ETH Vouched</span>
                <span className="text-indigo-400 font-mono flex items-center gap-1">
                  <iconify-icon icon="lucide:gem" width="10" /> 2.4 ETH
                </span>
              </div>
            </div>
          </div>

          {/* Connection Beam 2 */}
          <svg
            className="absolute top-[260px] right-[144px] w-[200px] h-[150px] z-10 pointer-events-none"
            style={{ transform: "scaleX(-1) rotate(10deg)" }}
          >
            <path
              d="M0,0 C50,0 50,150 150,150"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            <path
              d="M0,0 C50,0 50,150 150,150"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="beam-path"
              style={{ animationDuration: "1.5s" }}
            />
          </svg>

          {/* 3. Job Offer Node */}
          <div
            className="glass-panel p-4 rounded-xl w-64 absolute bottom-0 left-10 z-20 animate-float shadow-xl border-l-2 border-l-green-500"
            style={{ animationDelay: "2.5s" }}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="w-8 h-8 rounded-lg bg-green-900/30 text-green-400 flex items-center justify-center">
                <iconify-icon icon="lucide:briefcase" width="16" />
              </div>
              <span className="text-[10px] bg-green-500/20 text-green-300 px-1.5 py-0.5 rounded border border-green-500/20">
                New Offer
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-white">
                Smart Contract Eng.
              </h3>
              <p className="text-xs text-neutral-500">DeFi Protocol • Remote</p>
              <p className="text-xs text-neutral-300 font-mono mt-2">
                $120k - $160k USDC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
