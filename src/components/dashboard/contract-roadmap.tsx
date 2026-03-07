"use client";

export function ContractRoadmap() {
  return (
    <div className="glass-card rounded-xl overflow-hidden bg-white">
      <div className="p-5 border-b border-border flex justify-between items-center bg-surface-highlight/50">
        <h3 className="font-semibold text-txt-main text-sm">Contract Roadmap</h3>
        <span className="text-xs font-mono text-txt-muted bg-surface-highlight px-2 py-1 rounded">
          #8821A
        </span>
      </div>
      <div className="p-6">
        {/* Timeline */}
        <div className="relative pl-2 space-y-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

          {/* Item 1 (Done) */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center z-10">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            </div>
            <h4 className="text-sm font-medium text-txt-muted line-through">
              Contract Signed & Deposit
            </h4>
            <p className="text-xs text-txt-muted mt-0.5">Completed 14 days ago</p>
          </div>

          {/* Item 2 (Active) */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_0_4px_var(--primary-light)] transition-all duration-300">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse transition-colors duration-300" />
            </div>
            <h4 className="text-sm font-semibold text-txt-main">Security Audit Report</h4>
            <p className="text-xs text-txt-muted mt-0.5">Due in 3 days • Pending Review</p>

            <div className="mt-4 bg-surface-highlight p-4 rounded-lg border border-border/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-txt-main flex items-center gap-2">
                  <iconify-icon icon="lucide:file-code" className="text-txt-muted" />
                  audit_v1.pdf
                </span>
                <button className="text-xs text-primary font-medium hover:underline transition-colors">
                  Update
                </button>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary w-[40%] transition-colors duration-300"
                />
              </div>
            </div>
          </div>

          {/* Item 3 (Pending) */}
          <div className="relative pl-8 opacity-50">
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-border flex items-center justify-center z-10" />
            <h4 className="text-sm font-medium text-txt-main">Final Payment Release</h4>
            <p className="text-xs text-txt-muted mt-0.5">Est. 2 weeks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

