"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LuLayoutDashboard,
  LuUsers,
  LuSearch,
  LuHistory,
  LuInfo,
  LuLogOut,
} from "react-icons/lu";

export default function SideBar() {
  const pathname = usePathname();
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LuLayoutDashboard },
    { name: "Data Mahasiswa", path: "/data-mahasiswa", icon: LuUsers },
    { name: "Pencarian", path: "/pencarian", icon: LuSearch },
    { name: "History", path: "/history", icon: LuHistory },
    { name: "Informasi System", path: "/informasi-system", icon: LuInfo },
  ];

  // tombol keluar
  const router = useRouter();

  const handleLogout = () => {
    // Tambahkan logika hapus token/session di sini, contoh:
    // localStorage.removeItem("token");

    router.push("/login");
  };
  return (
    <aside className="w-20 md:w-64 bg-card-bg/80 backdrop-blur-xl border-r border-border flex flex-col transition-all duration-300">
      {/* Logo */}
      <div className="h-16 flex-shrink-0 flex items-center px-6 md:px-8 gap-3 border-b border-border/50">
        <div className="shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        <h1 className="text-lg font-bold text-text tracking-tight hidden md:block whitespace-nowrap">
          Kaliber
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 space-y-1.5">
        {navItems.map(({ name, path, icon: Icon }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`flex items-center justify-center md:justify-start px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-muted hover:bg-secondary-light/50"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${isActive ? "text-white" : "text-secondary"} group-hover:scale-110 transition-transform`}
              />
              <span className="hidden md:block ml-3 font-medium text-sm">
                {name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center md:justify-start px-4 py-3 text-accent-red hover:bg-accent-red-light rounded-xl transition-all"
        >
          <LuLogOut className="w-5 h-5" />
          <span className="hidden md:block ml-3 font-bold text-sm">Keluar</span>
        </button>
      </div>
    </aside>
  );
}
