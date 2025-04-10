import { DashboardOverview } from "@/components/DashboardOverview";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DashboardOverview />
    </main>
  );
}
