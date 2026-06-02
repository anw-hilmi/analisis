"use client";

import React, { useState, useEffect } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export default function Navbar({ title }) {
  // Gunakan state awal null untuk mendeteksi apakah sudah mount di client
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sinkronkan state dengan kondisi kelas saat ini di DOM
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 h-16 flex-shrink-0 bg-card-bg/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-6 md:px-8 z-10">
      <h2 className="text-lg font-bold text-text truncate min-w-0">{title}</h2>

      <button
        onClick={toggleTheme}
        className="p-2 flex-shrink-0 rounded-lg bg-bg border border-border text-text hover:bg-card-bg transition-colors"
      >
        {isDark ? (
          <LuSun className="w-5 h-5" />
        ) : (
          <LuMoon className="w-5 h-5" />
        )}
      </button>
    </header>
  );
}
