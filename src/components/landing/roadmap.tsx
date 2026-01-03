"use client";

const phases = [
  {
    phase: 1,
    title: "Phase 1: Foundation",
    description:
      "Launch of core e-learning platform, first 5 trending courses, and user profiles. Beta cohort enrollment.",
    date: "Q1 2025",
    icon: "lucide:flag",
    isCurrent: true,
  },
  {
    phase: 2,
    title: "Phase 2: Jobs & Reputation",
    description:
      "ETH-backed vouching system goes live. Job board opens exclusively for verified graduates.",
    date: "Q2 2025",
    icon: "lucide:briefcase",
    isCurrent: false,
  },
  {
    phase: 3,
    title: "Phase 3: Mentorship & Scale",
    description:
      "1-on-1 sessions with KOLs and Founders. Community forums and peer learning groups.",
    date: "Q3 2025",
    icon: "lucide:users",
    isCurrent: false,
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="max-w-[1200px] mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Ecosystem Roadmap
        </h2>
        <p className="text-neutral-400">
          Building the infrastructure for the next generation of crypto talent.
        </p>
      </div>

      <div className="relative">
        {/* Line */}
        <div className="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-px bg-neutral-800 lg:-translate-x-1/2" />

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div
              key={phase.phase}
              className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between group"
            >
              {/* Left content (alternates on desktop) */}
              <div
                className={`lg:w-[45%] pl-12 lg:pl-0 ${
                  index % 2 === 0 ? "lg:text-right lg:pr-12 order-1" : "lg:pl-12 order-2 mt-4 lg:mt-0"
                }`}
              >
                {index % 2 === 0 ? (
                  <>
                    {phase.isCurrent && (
                      <div className="inline-block px-2 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[10px] font-bold uppercase rounded mb-2">
                        Current Phase
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    <p className="text-sm text-neutral-400 mt-2">
                      {phase.description}
                    </p>
                  </>
                ) : (
                  <span className="text-xs font-mono text-neutral-500">
                    {phase.date}
                  </span>
                )}
              </div>

              {/* Icon */}
              <div
                className={`absolute left-0 lg:left-1/2 w-10 h-10 rounded-full bg-neutral-900 border-4 border-neutral-800 flex items-center justify-center z-10 lg:-translate-x-1/2 shadow-xl group-hover:border-${
                  phase.isCurrent ? "indigo-500" : "white"
                } transition-colors duration-300 ${
                  phase.isCurrent ? "text-indigo-500" : "text-neutral-400"
                }`}
              >
                <iconify-icon icon={phase.icon} width="16" />
              </div>

              {/* Right content (alternates on desktop) */}
              <div
                className={`lg:w-[45%] pl-12 ${
                  index % 2 === 0 ? "lg:pl-12 order-2 mt-4 lg:mt-0" : "lg:text-right lg:pr-12 order-1"
                }`}
              >
                {index % 2 === 0 ? (
                  <span className="text-xs font-mono text-neutral-500">
                    {phase.date}
                  </span>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    <p className="text-sm text-neutral-400 mt-2">
                      {phase.description}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

