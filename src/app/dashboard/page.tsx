import { redirect } from "next/navigation";

export default function DashboardPage() {
  // Quick access route - redirects to talent dashboard
  // Later we'll implement proper routing based on user role
  redirect("/dashboard/talent");
}

