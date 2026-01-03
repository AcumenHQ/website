"use client";

const valueProps = [
  {
    icon: "lucide:zap",
    title: "Trend-First Learning",
    description:
      'Curriculum updated weekly. Master "Vibe Coding" with AI, Web3 Ops, and Video Clipping before the masses.',
  },
  {
    icon: "lucide:shield-check",
    title: "Skin-in-the-Game",
    description:
      "Our reputation system uses staked ETH. Endorsements aren't just words—they're backed by value.",
  },
  {
    icon: "lucide:users",
    title: "Direct Access",
    description:
      "Skip the generic job boards. Get mentored by KOLs and hired directly by verified Web3 protocols.",
  },
];

export function ValueProps() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {valueProps.map((prop, index) => (
          <div
            key={index}
            className="glass-panel p-8 rounded-2xl group hover:bg-neutral-900/80 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <iconify-icon icon={prop.icon} width="24" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {prop.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

