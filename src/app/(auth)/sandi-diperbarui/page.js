"use client";

import React from "react";
import Link from "next/link";
import { HiCheck, HiArrowRight } from "react-icons/hi";

export default function ResetSuccessPage() {
  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
      {/* Icon Sukses dengan desain modern */}
      <div className="w-16 h-16 bg-accent-green-light rounded-full flex items-center justify-center mb-6 ring-8 ring-accent-green-light/30">
        <HiCheck className="h-8 w-8 text-accent-green" />
      </div>

      {/* Pesan Sukses */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text mb-2">
          Kata Sandi Diperbarui
        </h2>
        <p className="text-sm text-muted max-w-[260px] mx-auto leading-relaxed">
          Akun Anda telah diamankan. Silakan masuk kembali dengan kata sandi
          baru Anda.
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="w-full">
        <Link
          href="/login"
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 group cursor-pointer text-sm"
        >
          Masuk ke Akun
          <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
