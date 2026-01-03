"use client";

import { useState } from "react";

const completedCourses = [
  {
    id: 1,
    name: "Vibe Coding with Claude",
    modules: 8,
    status: "Completed",
    completedDate: "Oct 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Professional Video Clipping",
    modules: 6,
    status: "Completed",
    completedDate: "Sep 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Web3 Operations & Community",
    modules: 5,
    status: "Completed",
    completedDate: "Aug 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Graphics & Motion Design",
    modules: 7,
    status: "Completed",
    completedDate: "Jul 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
  },
];

export function CompletedCourses() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-5 border-b border-border flex justify-between items-center bg-gray-50/50">
        <h3 className="font-semibold text-txt-main text-sm">Completed Courses</h3>
      </div>
      <div className="p-6 space-y-2">
        {completedCourses.map((course) => {
          const isExpanded = expandedId === course.id;

          return (
            <div
              key={course.id}
              className="glass-card rounded-lg overflow-hidden transition-all duration-500 ease-in-out cursor-pointer"
              onMouseEnter={() => setExpandedId(course.id)}
              onMouseLeave={() => setExpandedId(null)}
            >
              {/* Course Header (Always Visible) */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                    <img
                      src={course.thumbnail}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-txt-main truncate">
                      {course.name}
                    </h4>
                    <p className="text-xs text-txt-muted mt-0.5">
                      {course.modules} Modules • {course.completedDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className="text-[10px] text-white px-2 py-0.5 rounded-full font-bold uppercase transition-colors duration-300"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    {course.status}
                  </span>
                  <iconify-icon
                    icon="lucide:chevron-down"
                    className={`text-txt-muted transition-transform duration-500 ease-in-out ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    width="16"
                  />
                </div>
              </div>

              {/* Course Details (Expands on Hover) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 pt-0 border-t border-border space-y-3">
                  <div className="flex items-center gap-2 text-xs text-txt-muted">
                    <iconify-icon
                      icon="lucide:check-circle-2"
                      style={{ color: "var(--primary)" }}
                    />
                    <span>All modules completed</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-txt-muted">Progress</span>
                      <span className="font-mono font-bold text-primary">100%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-highlight rounded-full overflow-hidden">
                      <div className="h-full w-full bg-primary rounded-full transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="text-xs text-primary font-medium hover:underline transition-colors">
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
