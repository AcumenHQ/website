import { DashboardLayout } from "@/components/dashboard/layout";
import { DashboardHeader } from "@/components/dashboard/header";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { CurrentCourse } from "@/components/dashboard/current-course";
import { ContractRoadmap } from "@/components/dashboard/contract-roadmap";
import { Certifications } from "@/components/dashboard/certifications";
import { CompletedJobs } from "@/components/dashboard/completed-jobs";
import { CompletedCourses } from "@/components/dashboard/completed-courses";

export default function TalentDashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <div className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 pb-2 border-b border-border/50">
          <div>
            <h2 className="text-2xl font-bold text-txt-main tracking-tight">
              Overview
            </h2>
            <p className="text-txt-muted text-sm mt-1">
              Welcome back, Alex. You&apos;re in the{" "}
              <span className="text-primary font-medium transition-colors">
                Top 5%
              </span>{" "}
              this week.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-md bg-white border border-border text-xs font-medium text-txt-muted hover:text-txt-main hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm">
              <iconify-icon icon="lucide:download" width="14" /> Export
            </button>
            <button className="btn-primary px-4 py-2 rounded-md text-xs font-semibold flex items-center gap-2">
              <iconify-icon icon="lucide:share-2" width="14" /> Share Profile
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <StatsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            <CurrentCourse />
            <CompletedCourses />
            <ContractRoadmap />
          </div>

          {/* Right Column - top-aligned, no stretch */}
          <div className="lg:col-span-1 space-y-8 flex flex-col">
            <Certifications />
            <CompletedJobs />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

