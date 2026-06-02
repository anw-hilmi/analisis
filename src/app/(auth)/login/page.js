"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiExclamationCircle,
} from "react-icons/hi";

export default function LoginPage({ dbData }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const fields = {
    username: {
      label: dbData?.usernameLabel || "Username",
      placeholder: dbData?.usernamePlaceholder || "Masukkan username Anda",
    },
    password: {
      label: dbData?.passwordLabel || "Password",
      placeholder: dbData?.passwordPlaceholder || "Masukkan password",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "12345") {
      window.location.href = "/dashboard";
    } else {
      setError("Username atau password salah. Silakan coba lagi.");
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text">Halo, Admin!</h2>
        <p className="text-sm text-muted mt-1">
          Silakan masukkan kredensial akun Anda.
        </p>
      </div>

      {/* Tampilan Error */}
      {error && (
        <div className="mb-5 flex items-center gap-2 bg-accent-red-light border-l-4 border-accent-red p-3 rounded-r-lg">
          <HiExclamationCircle className="w-5 h-5 text-accent-red flex-shrink-0" />
          <p className="text-xs font-semibold text-text">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full space-y-5">
        <div>
          <label
            className="block text-sm font-semibold text-text mb-2"
            htmlFor="username"
          >
            {fields.username.label}
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-3 text-muted pointer-events-none">
              <HiOutlineUser className="w-5 h-5" />
            </div>
            <input
              onChange={() => setError("")}
              className="block w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-text placeholder-muted bg-card-bg focus:outline-none text-sm transition-all"
              id="username"
              name="username"
              placeholder={fields.username.placeholder}
              required
              type="text"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-semibold text-text mb-2"
            htmlFor="password"
          >
            {fields.password.label}
          </label>
          <div className="relative flex items-center rounded-lg border border-border bg-card-bg overflow-hidden focus-within:ring-2 focus-within:ring-primary transition-all">
            <div className="absolute left-3 text-muted pointer-events-none z-10">
              <HiOutlineLockClosed className="w-5 h-5" />
            </div>
            <input
              onChange={() => setError("")}
              className="block w-full pl-10 pr-12 py-3 text-text placeholder-muted bg-transparent focus:outline-none text-sm"
              id="password"
              name="password"
              placeholder={fields.password.placeholder}
              required
              type={showPassword ? "text" : "password"}
            />
            <button
              className="absolute right-3 text-muted hover:text-primary transition-colors cursor-pointer"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <HiOutlineEyeOff className="w-5 h-5" />
              ) : (
                <HiOutlineEye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-end text-sm">
          <Link
            className="text-primary font-medium hover:underline transition-colors"
            href="/lupa-sandi"
          >
            Lupa password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg shadow-sm text-base font-bold text-white bg-primary hover:bg-primary-dark transition-all cursor-pointer"
        >
          Masuk Sekarang
        </button>
      </form>
    </div>
  );
}
