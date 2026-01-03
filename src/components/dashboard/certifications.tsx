"use client";

const certifications = [
  {
    icon: "lucide:shield",
    title: "Smart Contract Security",
    date: "Issued Oct 2024",
    color: "text-emerald-600",
  },
  {
    icon: "lucide:box",
    title: "Solidity Fundamentals",
    date: "Issued Sep 2024",
    color: "text-sky-600",
  },
  {
    icon: "lucide:layers",
    title: "DeFi Architecture",
    date: "Issued Aug 2024",
    color: "text-violet-600",
  },
];

export function Certifications() {
  return (
    <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full">
      <div className="p-5 border-b border-border bg-gray-50/50">
        <h3 className="font-semibold text-txt-main text-sm">Certifications</h3>
      </div>
      <div className="flex-1 p-2">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-3 hover:bg-surface-highlight rounded-lg transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-white border border-border flex items-center justify-center shadow-sm">
                <iconify-icon icon={cert.icon} className={cert.color} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-txt-main truncate">
                  {cert.title}
                </h4>
                <p className="text-[10px] text-txt-muted">{cert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-border">
        <button className="w-full py-2.5 rounded-md border border-dashed border-gray-300 text-xs text-txt-muted hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2">
          <iconify-icon icon="lucide:plus" width="14" /> Add Credential
        </button>
      </div>
    </div>
  );
}

