"use client";

import Overview from "@/components/Overview";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main id="main" className="flex-1 p-5 overflow-y-auto">
        <Overview/>
      </main>
    </div>
  );
}

