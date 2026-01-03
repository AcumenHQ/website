"use client";

export function CurrentCourse() {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-5 border-b border-border flex justify-between items-center bg-gray-50/50">
        <h3 className="font-semibold text-txt-main text-sm">Current Course</h3>
        <button className="text-xs text-txt-muted hover:text-primary transition-colors font-medium">
          View All
        </button>
      </div>
      <div className="p-6 flex flex-col sm:flex-row gap-6 items-center">
        <div className="w-full sm:w-48 aspect-video rounded-lg bg-gray-100 relative overflow-hidden group cursor-pointer border border-border">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
            alt="Course"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-lg transition-transform hover:scale-110">
              <iconify-icon icon="lucide:play" width="16" className="ml-1" />
            </div>
          </div>
        </div>
        <div className="flex-1 w-full space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">
                Module 3
              </div>
              <h4 className="text-lg font-semibold text-txt-main">
                Advanced Prompt Engineering
              </h4>
              <p className="text-sm text-txt-muted mt-1">
                Lesson: Context Windows & Token Limits
              </p>
            </div>
            <span className="text-lg font-mono font-bold text-txt-main">64%</span>
          </div>
          <div className="w-full h-2 rounded-full progress-track overflow-hidden">
            <div
              className="h-full w-[64%] progress-fill rounded-full transition-colors duration-300"
            />
          </div>
          <div className="flex gap-3 pt-1">
            <button className="btn-primary flex-1 py-2 rounded-md text-xs font-semibold transition-colors">
              Resume
            </button>
            <button className="flex-1 py-2 rounded-md border border-border bg-white hover:bg-gray-50 text-xs font-medium text-txt-main transition-colors">
              Syllabus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

