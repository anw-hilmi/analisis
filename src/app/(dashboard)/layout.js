// src/app/(dashboard)/layout.js
"use client";
import { usePathname } from "next/navigation";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  // Logika penamaan berdasarkan URL
  const titles = {
    "/dashboard": "Dashboard",
    "/data-mahasiswa": "Data Mahasiswa",
    "/pencarian": "Pencarian",
    "/history": "History",
    "/informasi-system": "Informasi System",
  };

  const currentTitle = titles[pathname] || "Dashboard";

  return (
    <div className="flex h-screen w-screen bg-dashboard-bg dark:bg-bg text-text overflow-hidden">
      <SideBar />
      <div className="flex-1 flex flex-col min-w-0 h-full">
        <NavBar title={currentTitle} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
