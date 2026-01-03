"use client";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Stat 1: Reputation Score */}
      <div className="glass-card p-5 rounded-xl group hover:scale-[1.01] transition-transform duration-200">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-md bg-surface-highlight text-txt-muted group-hover:text-primary transition-colors">
            <iconify-icon icon="lucide:shield-check" width="20" />
          </div>
          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            +2.4%
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-txt-main">98/100</h3>
        </div>
        <p className="text-xs text-txt-muted mt-1 font-medium">Reputation Score</p>
      </div>

      {/* Stat 2: Total Earnings */}
      <div className="glass-card p-5 rounded-xl group hover:scale-[1.01] transition-transform duration-200">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-md bg-surface-highlight text-txt-muted group-hover:text-primary transition-colors">
            <iconify-icon icon="lucide:coins" width="20" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-txt-main">2.4 ETH</h3>
        </div>
        <p className="text-xs text-txt-muted mt-1 font-medium">Total Earnings</p>
      </div>

      {/* Stat 3: Skills Mastered */}
      <div className="glass-card p-5 rounded-xl group hover:scale-[1.01] transition-transform duration-200">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-md bg-surface-highlight text-txt-muted group-hover:text-primary transition-colors">
            <iconify-icon icon="lucide:graduation-cap" width="20" />
          </div>
          <span className="text-xs text-txt-muted">12/14</span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-txt-main">85%</h3>
        </div>
        <p className="text-xs text-txt-muted mt-1 font-medium">Skills Mastered</p>
        <div className="w-full h-1 bg-surface-highlight rounded-full mt-3 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-colors duration-300"
            style={{ width: "85%" }}
          />
        </div>
      </div>

      {/* Stat 4: Active Job */}
      <div className="glass-card p-5 rounded-xl group hover:scale-[1.01] transition-transform duration-200 border-l-4 border-l-primary transition-colors">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-md bg-primary-light text-primary transition-colors">
            <iconify-icon icon="lucide:briefcase" width="20" />
          </div>
          <span className="text-[10px] bg-primary text-txt-inv px-2 py-0.5 rounded-full font-bold transition-colors">
            Active
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-bold text-txt-main truncate">Aave Protocol</h3>
        </div>
        <p className="text-xs text-txt-muted mt-1 font-medium">
          Security Audit • Milestone 2
        </p>
      </div>
    </div>
  );
}

