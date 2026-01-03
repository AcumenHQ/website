"use client";

const courses = [
  {
    title: "Vibe Coding with Claude",
    description:
      "Leverage AI tools like Claude & Copilot to build full-stack dApps. Master prompt engineering for smart contracts.",
    duration: "6-8 Weeks",
    level: "Advanced",
    tag: "Trending",
    tagColor: "bg-indigo-500",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    enrolled: 42,
  },
  {
    title: "Pro Video Clipping",
    description:
      "Master viral editing for Web3. Create engaging short-form content for protocols and podcasts.",
    duration: "4-6 Weeks",
    level: "Creative",
    tag: null,
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop",
    enrolled: 0,
  },
  {
    title: "Web3 Ops & Community",
    description:
      "Technical writing, Discord moderation, and project management tailored for DAOs and startups.",
    duration: "5-6 Weeks",
    level: "Operations",
    tag: null,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    enrolled: 18,
  },
];

export function Courses() {
  return (
    <section id="courses" className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
            Master the Meta.
          </h2>
          <p className="text-neutral-400 max-w-lg">
            Phase 1 curriculum focuses on high-demand, low-supply skills that
            allow you to contribute immediately.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors">
            <iconify-icon icon="lucide:arrow-left" />
          </button>
          <button className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors">
            <iconify-icon icon="lucide:arrow-right" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="aspect-video bg-neutral-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10" />
              <div
                className="absolute inset-0 opacity-50 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${course.image}')` }}
              />
              {course.tag && (
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className={`${course.tagColor} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider`}
                  >
                    {course.tag}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-xs text-neutral-500 font-mono">
                <iconify-icon icon="lucide:clock" width="12" /> {course.duration}
                <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                <span className={course.level === "Advanced" ? "text-indigo-400" : ""}>
                  {course.level}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-neutral-400 mb-6 line-clamp-2">
                {course.description}
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900" />
                  <div className="w-6 h-6 rounded-full bg-neutral-600 border border-neutral-900" />
                  {course.enrolled > 0 && (
                    <div className="w-6 h-6 rounded-full bg-neutral-500 border border-neutral-900 flex items-center justify-center text-[8px] text-white font-bold">
                      +{course.enrolled}
                    </div>
                  )}
                </div>
                <span className="text-xs font-medium text-white flex items-center gap-1">
                  Enroll <iconify-icon icon="lucide:arrow-right" width="12" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
