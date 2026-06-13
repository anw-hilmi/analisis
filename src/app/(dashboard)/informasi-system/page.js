"use client";

import React from "react";
import {
  FaBrain,
  FaChartLine,
  FaBalanceScale,
  FaCheckCircle,
  FaWallet,
  FaUsers,
  FaMoneyBillWave,
  FaGraduationCap,
  FaFileAlt,
  FaHandsHelping,
  FaBook,
  FaCalendarTimes,
} from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

export default function InformasiSystem() {
  const features = [
    "Pendapatan Orang Tua",
    "IPK",
    "Prestasi Nasional",
    "Motivasi",
    "Literasi Finansial",
    "Surat Rekomendasi",
    "Aktif Organisasi",
    "Kegiatan Relawan",
    "Keaktifan Kampus",
    "Ketidakhadiran",
  ];

  return (
    <div className="bg-bg min-h-screen p-4 md:p-8 space-y-8 text-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-primary text-white p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-center shadow-lg shadow-primary/20">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Memahami Kecerdasan Di Balik Beasiswa
            </h3>
            <p className="text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">
              Sistem Kaliber menggunakan model Machine Learning yang telah
              dilatih untuk memberikan prediksi kelayakan beasiswa yang objektif
              dan transparan.
            </p>
          </div>
        </div>

        <div className="bg-card-bg border border-border p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-light dark:bg-primary-dark/20 rounded-2xl flex items-center justify-center mb-4 text-primary">
            <FaBrain className="text-2xl md:text-3xl" />
          </div>
          <h4 className="font-bold text-base md:text-lg mb-2">Precision AI</h4>
          <p className="text-muted text-xs md:text-sm leading-relaxed">
            Model RandomForestClassifier yang dioptimalkan untuk mengurangi bias
            subjektif.
          </p>
        </div>
      </section>

      {/* Section Header */}
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-primary">
          Cara Kerja Model ML
        </h2>
        <p className="text-sm md:text-base text-muted">
          Interaksi antara 10 fitur utama dalam menentukan profil kandidat.
        </p>
      </div>

      {/* Grid Content - Diperbaiki agar tidak memanjang (items-start) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <div className="bg-card-bg border border-border rounded-3xl p-6 md:p-8 shadow-sm flex flex-col h-full">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="p-3 md:p-4 bg-accent-purple-light dark:bg-accent-purple/10 rounded-2xl shrink-0">
              <FaChartLine className="text-accent-purple text-lg md:text-xl" />
            </div>
            <h4 className="font-bold text-base md:text-lg">
              Korelasi IPK & Ekonomi
            </h4>
          </div>
          <p className="text-muted leading-relaxed text-sm flex-grow">
            Model RandomForestClassifier mendeteksi bahwa IPK tinggi (&gt;=
            3.75) yang dikombinasikan dengan pendapatan keluarga rendah
            memberikan bobot signifikan dalam menentukan skor prioritas
            penerima.
          </p>
        </div>

        <div className="bg-card-bg border border-border rounded-3xl p-6 md:p-8 shadow-sm flex flex-col h-full">
          <h4 className="font-bold mb-6 text-base md:text-lg border-b border-border pb-4">
            10 Fitur Parameter
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 flex-grow">
            {features.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-xs md:text-sm bg-secondary-light/10 p-2 rounded-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                <span className="text-muted font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary text-white rounded-3xl p-6 md:p-8 shadow-lg flex flex-col h-full shadow-primary/20 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="p-3 md:p-4 bg-white/10 rounded-2xl shrink-0">
              <FaBalanceScale className="text-white text-lg md:text-xl" />
            </div>
            <h4 className="font-bold text-base md:text-lg">Bobot Dinamis</h4>
          </div>
          <p className="text-white/90 leading-relaxed text-sm flex-grow">
            Sistem menyesuaikan bobot berdasarkan tipe beasiswa yang dipilih:
            KIP-K fokus pada ekonomi, Unggulan fokus pada prestasi.
          </p>
        </div>
      </section>

      {/* Tabel Panduan */}
      <section className="bg-card-bg border border-border rounded-3xl overflow-hidden shadow-sm">
        <div className="p-4 md:p-8 border-b border-border bg-secondary-light/30 dark:bg-secondary-light/5">
          <h3 className="text-lg md:text-xl font-bold text-secondary-dark dark:text-white">
            Panduan Metrik Penilaian
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
            <thead className="bg-secondary-light/10 border-b border-border">
              <tr>
                {["Kategori", "Skala", "Kriteria Maksimal"].map((h) => (
                  <th
                    key={h}
                    className="py-3 px-4 md:py-4 md:px-8 text-xs font-bold text-secondary-dark uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <MetricRow
                icon={<FaMoneyBillWave />}
                title="Pendapatan Orang Tua"
                scale="IDR"
                desc="Pendapatan bulanan orang tua dalam Rupiah."
              />
              <MetricRow
                icon={<FaGraduationCap />}
                title="IPK"
                scale="0-4.0"
                desc="Indeks Prestasi Kumulatif saat ini."
              />
              <MetricRow
                icon={<FaCheckCircle />}
                title="Skor Motivasi"
                scale="0-100"
                desc="Nilai dari esai motivasi yang disubmit."
              />
              <MetricRow
                icon={<FaWallet />}
                title="Literasi Finansial"
                scale="0-100"
                desc="Skor pemahaman dan pengelolaan keuangan."
              />
              <MetricRow
                icon={<FaFileAlt />}
                title="Surat Rekomendasi"
                scale="Ya/Tidak"
                desc="Status ketersediaan surat rekomendasi dosen."
              />
              <MetricRow
                icon={<FaUsers />}
                title="Aktif Organisasi"
                scale="Ya/Tidak"
                desc="Status keaktifan dalam organisasi kampus."
              />
              <MetricRow
                icon={<FaHandsHelping />}
                title="Kegiatan Relawan"
                scale="Jumlah"
                desc="Total frekuensi kegiatan kerelawanan yang diikuti."
              />
              <MetricRow
                icon={<FaBrain />}
                title="Keaktifan Kampus"
                scale="0-100"
                desc="Skor partisipasi aktif dalam kegiatan akademik/non-akademik."
              />
              <MetricRow
                icon={<FaCalendarTimes />}
                title="Ketidakhadiran"
                scale="0-100"
                desc="Skor akumulasi rekam jejak ketidakhadiran kuliah."
              />
            </tbody>
          </table>
        </div>
      </section>

      {/* Info Box */}
      <section>
        <div className="bg-secondary-light/50 border border-border p-4 md:p-6 rounded-xl flex flex-col md:flex-row gap-4 md:gap-6 items-start dark:bg-secondary-light/10 dark:border-border">
          <span className="text-primary bg-primary-light p-2 rounded-full flex-shrink-0">
            <LuInfo size={20} className="md:w-6 md:h-6" />
          </span>
          <div>
            <h5 className="font-bold text-sm md:text-base text-text">
              Penting: Integritas Data
            </h5>
            <p className="text-xs md:text-sm text-muted mt-1 leading-relaxed">
              Seluruh metrik di atas dihitung menggunakan RandomForestClassifier
              untuk menganalisis dokumen pendukung. Pastikan dokumen yang
              diunggah memiliki kualitas scan yang tinggi untuk menghindari
              kegagalan deteksi sistem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function MetricRow({ icon, title, scale, desc }) {
  return (
    <tr className="hover:bg-secondary-light/20 transition-colors duration-200">
      <td className="py-4 px-4 md:py-5 md:px-8">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="p-2 md:p-2.5 bg-primary-light dark:bg-primary-dark/20 rounded-xl text-primary shrink-0">
            {icon}
          </div>
          <span className="font-semibold text-xs md:text-sm text-text">
            {title}
          </span>
        </div>
      </td>
      <td className="py-4 px-4 md:py-5 md:px-8 text-xs md:text-sm text-muted whitespace-nowrap">
        {scale}
      </td>
      <td className="py-4 px-4 md:py-5 md:px-8 text-xs md:text-sm text-muted">
        {desc}
      </td>
    </tr>
  );
}
