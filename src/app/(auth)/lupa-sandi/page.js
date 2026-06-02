"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  HiOutlineMail,
  HiOutlineArrowLeft,
  HiCheckCircle,
  HiExclamationCircle,
} from "react-icons/hi";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(false);
    setIsError(false);

    // Simulasi logika pengiriman
    if (email === "admin@kaliber.com") {
      setIsSent(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 bg-card-bg rounded-3xl shadow-lg border border-border transition-colors duration-300">
      {/* Header dengan teks yang lebih persuasif */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-text mb-2 tracking-tight">
          Atur Ulang Sandi
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          Masukkan alamat email Anda. Kami akan mengirimkan tautan khusus untuk
          memulihkan akses akun Anda.
        </p>
      </div>

      {/* Alert Component - Responsif & Mode Adaptif */}
      {(isSent || isError) && (
        <div
          className={`mb-6 flex items-start gap-3 p-4 rounded-xl border-l-4 ${
            isSent
              ? "bg-accent-green-light border-accent-green"
              : "bg-accent-red-light border-accent-red"
          }`}
        >
          {isSent ? (
            <HiCheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
          ) : (
            <HiExclamationCircle className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5" />
          )}
          <p
            className={`text-sm font-medium ${isSent ? "text-accent-green" : "text-accent-red"}`}
          >
            {isSent
              ? "Tautan pemulihan telah dikirim. Silakan periksa kotak masuk email Anda."
              : "Email tidak ditemukan. Pastikan alamat email yang Anda masukkan sudah benar."}
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            className="block text-sm font-medium text-text mb-2"
            htmlFor="email"
          >
            Alamat Email
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-muted group-focus-within:text-primary transition-colors">
              <HiOutlineMail className="h-5 w-5" />
            </div>
            <input
              className="block w-full pl-11 pr-4 py-3 border border-border rounded-xl bg-bg focus:ring-2 focus:ring-primary/20 focus:border-primary text-text placeholder-muted focus:outline-none transition-all duration-200"
              id="email"
              type="email"
              placeholder="nama@kaliber.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-4 rounded-xl text-white font-bold bg-primary hover:bg-primary-dark transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-lg"
        >
          Kirim Tautan Pemulihan
        </button>
      </form>

      {/* Navigation */}
      <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/login")}
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-muted hover:text-primary transition-colors"
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Kembali ke halaman login
        </button>
      </div>
    </div>
  );
}
