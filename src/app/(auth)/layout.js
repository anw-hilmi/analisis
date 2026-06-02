"use client";

import React from "react";
import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-login-bg transition-colors duration-500">
      <main className="w-full max-w-[420px]">
        {/* Kartu dengan logo terintegrasi di dalamnya */}
        <section className="bg-card-bg w-full p-8 sm:p-10 rounded-3xl shadow-xl border border-border">
          {/* Logo Inline: Terletak di dalam kartu, memberikan kesan stabil */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-sm border border-border">
              <Image
                src="/logo.png"
                alt="Logo Instansi"
                width={112}
                height={112}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Konten (Form Login/Forgot Password) */}
          <div className="w-full">{children}</div>
        </section>
      </main>
    </div>
  );
}
