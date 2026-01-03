"use client";

const completedJobs = [
  {
    title: "Uniswap Integration",
    date: "Oct 2024",
    amount: "1.2 ETH",
  },
  {
    title: "NFT Marketplace",
    date: "Aug 2024",
    amount: "0.8 ETH",
  },
];

export function CompletedJobs() {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-5 border-b border-border bg-gray-50/50">
        <h3 className="font-semibold text-txt-main text-sm">Completed Jobs</h3>
      </div>
      <div className="divide-y divide-border">
        {completedJobs.map((job, index) => (
          <div
            key={index}
            className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <div>
                <h4 className="text-sm font-medium text-txt-main">{job.title}</h4>
                <p className="text-[10px] text-txt-muted">{job.date}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-mono font-medium text-txt-main block">
                {job.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 bg-gray-50 border-t border-border">
        <a
          href="#"
          className="text-xs text-center block text-txt-muted hover:text-primary transition-colors"
        >
          View All History
        </a>
      </div>
    </div>
  );
}

