"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineArrowLeft,
} from "react-icons/hi";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/sandi-diperbarui");
  };

  return (
    // 🌌 Container responsif dengan background yang berubah otomatis (Light/Dark)
    <div className="w-full max-w-[400px] mx-auto p-6 md:p-8 bg-card-bg border border-border rounded-2xl shadow-sm transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-text mb-2">Reset Kata Sandi</h1>
        <p className="text-sm text-muted leading-relaxed">
          Masukkan kata sandi baru Anda untuk mengamankan akun KALIBER Anda.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-5">
        {/* Input Kata Sandi Baru */}
        <div>
          <label
            className="block text-sm font-semibold text-text mb-2"
            htmlFor="new_password"
          >
            Kata Sandi Baru
          </label>
          <div className="flex rounded-lg border border-border bg-card-bg overflow-hidden focus-within:ring-2 focus-within:ring-primary relative items-center transition-all">
            <div className="absolute left-3 text-muted">
              <HiOutlineLockClosed className="w-5 h-5" />
            </div>
            <input
              className="block w-full pl-10 pr-12 py-3 text-text placeholder-muted bg-transparent focus:outline-none text-sm"
              id="new_password"
              placeholder="••••••••"
              required
              type={showNewPassword ? "text" : "password"}
            />
            <button
              className="absolute right-0 h-full px-3 text-muted hover:text-primary transition-colors cursor-pointer"
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
                <HiOutlineEyeOff className="w-5 h-5" />
              ) : (
                <HiOutlineEye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Input Konfirmasi */}
        <div>
          <label
            className="block text-sm font-semibold text-text mb-2"
            htmlFor="confirm_password"
          >
            Konfirmasi Kata Sandi
          </label>
          <div className="flex rounded-lg border border-border bg-card-bg overflow-hidden focus-within:ring-2 focus-within:ring-primary relative items-center transition-all">
            <div className="absolute left-3 text-muted">
              <HiOutlineLockClosed className="w-5 h-5" />
            </div>
            <input
              className="block w-full pl-10 pr-12 py-3 text-text placeholder-muted bg-transparent focus:outline-none text-sm"
              id="confirm_password"
              placeholder="••••••••"
              required
              type={showConfirmPassword ? "text" : "password"}
            />
            <button
              className="absolute right-0 h-full px-3 text-muted hover:text-primary transition-colors cursor-pointer"
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <HiOutlineEyeOff className="w-5 h-5" />
              ) : (
                <HiOutlineEye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-bold text-white bg-primary hover:bg-primary-dark transition-all cursor-pointer"
        >
          Perbarui Kata Sandi
        </button>
      </form>

      {/* Navigasi Kembali */}
      <div className="mt-6 text-center">
        <Link
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          href="/login"
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Kembali ke Login
        </Link>
      </div>
    </div>
  );
}
