"use client";

import React from "react";
import {
  FaBrain, // Untuk Keaktifan Kelas / AI
  FaChartLine, // Untuk Kehadiran Kuliah / Analisis
  FaBalanceScale, // Untuk Bobot Dinamis
  FaCheckCircle, // Untuk Motivasi / Sertifikasi
  FaWallet, // Untuk Financial Literacy / Pengalaman Kerja
  FaUsers, // Untuk Social Impact / Organisasi
  FaLanguage, // Untuk Kemampuan Bahasa
  FaInfoCircle,
} from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

export default function InformasiSystem() {
  const features = [
    "IPK Semester Terakhir",
    "Pendapatan Orang Tua",
    "Tanggungan Saudara",
    "Prestasi Nasional",
    "Organisasi",
    "Sertifikasi Keahlian",
    "Pengalaman Kerja",
    "Kehadiran Kuliah",
    "Rekomendasi Dosen",
    "Keaktifan Kelas",
  ];

  return (
    <div className="bg-bg min-h-screen p-4 md:p-8 space-y-8 text-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-primary text-white p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-center shadow-lg shadow-primary/20">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Memahami Kecerdasan Di Balik Beasiswa
            </h3>
            <p className="text-base md:text-lg opacity-90 leading-relaxed">
              Sistem Kaliber menggunakan model Machine Learning yang telah
              dilatih untuk memberikan prediksi kelayakan beasiswa yang objektif
              dan transparan.
            </p>
          </div>
        </div>

        <div className="bg-card-bg border border-border p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-16 h-16 bg-primary-light dark:bg-primary-dark/20 rounded-2xl flex items-center justify-center mb-4 text-primary">
            <FaBrain className="text-3xl" />
          </div>
          <h4 className="font-bold text-lg mb-2">Precision AI</h4>
          <p className="text-muted text-sm leading-relaxed">
            Model XGBoost yang dioptimalkan untuk mengurangi bias subjektif.
          </p>
        </div>
      </section>

      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-primary">Cara Kerja Model ML</h2>
        <p className="text-muted">
          Interaksi antara 10 fitur utama dalam menentukan profil kandidat.
        </p>
      </div>

      {/* Grid Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-card-bg border border-border rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-accent-purple-light dark:bg-accent-purple/10 rounded-2xl">
              <FaChartLine className="text-accent-purple text-xl" />
            </div>
            <h4 className="font-bold text-lg">Korelasi IPK & Ekonomi</h4>
          </div>
          <p className="text-muted leading-relaxed text-sm md:text-base">
            Model mendeteksi bahwa IPK tinggi (&gt;= 3.75) dikombinasikan dengan
            pendapatan keluarga rendah memperkuat skor prioritas secara
            eksponensial.
          </p>
        </div>

        <div className="bg-card-bg border border-border rounded-3xl p-8 shadow-sm">
          <h4 className="font-bold mb-4">10 Fitur Parameter</h4>
          <ul className="space-y-3">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary text-white rounded-3xl p-8 shadow-lg flex flex-col items-start shadow-primary/20">
          <FaBalanceScale className="text-4xl mb-6 opacity-80" />
          <h4 className="font-bold text-lg mb-2">Bobot Dinamis</h4>
          <p className="text-sm opacity-90 leading-relaxed">
            Sistem menyesuaikan bobot berdasarkan tipe beasiswa yang dipilih:
            KIP-K fokus pada ekonomi, Unggulan fokus pada prestasi.
          </p>
        </div>
      </section>

      {/* Tabel Panduan */}
      <section className="bg-card-bg border border-border rounded-3xl overflow-hidden shadow-sm">
        <div className="p-8 border-b border-border bg-secondary-light/30 dark:bg-secondary-light/5">
          <h3 className="text-xl font-bold text-secondary-dark dark:text-white">
            Panduan Metrik Penilaian
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead className="bg-secondary-light/10 border-b border-border">
              <tr>
                {["Kategori", "Skala", "Kriteria Maksimal"].map((h) => (
                  <th
                    key={h}
                    className="py-4 px-8 text-xs font-bold text-secondary-dark uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <MetricRow
                icon={<FaCheckCircle />}
                title="Motivation"
                scale="0-100"
                desc="Esai roadmap karir 5 tahun yang terstruktur."
              />
              <MetricRow
                icon={<FaWallet />}
                title="Financial Literacy"
                scale="0-100"
                desc="Bukti pengelolaan anggaran organisasi atau bisnis."
              />
              <MetricRow
                icon={<FaUsers />}
                title="Social Impact"
                scale="0-100"
                desc="Inisiasi program pengabdian masyarakat > 6 bulan."
              />
              <MetricRow
                icon={<FaLanguage />}
                title="Language"
                scale="CEFR"
                desc="TOEFL iBT > 100 / IELTS > 7.0."
              />
              <MetricRow
                icon={<FaUsers />}
                title="Organisasi"
                scale="0-100"
                desc="Jabatan aktif & kontribusi dalam organisasi kampus."
              />
              <MetricRow
                icon={<FaCheckCircle />}
                title="Sertifikasi"
                scale="0-100"
                desc="Sertifikasi keahlian profesional yang relevan."
              />
              <MetricRow
                icon={<FaWallet />}
                title="Pengalaman Kerja"
                scale="0-100"
                desc="Durasi magang atau pengalaman kerja profesional."
              />
              <MetricRow
                icon={<FaChartLine />}
                title="Kehadiran Kuliah"
                scale="0-100%"
                desc="Persentase kehadiran di kelas setiap semester."
              />
              <MetricRow
                icon={<FaInfoCircle />}
                title="Rekomendasi Dosen"
                scale="1-5"
                desc="Surat rekomendasi dari dosen pembimbing/akademik."
              />
              <MetricRow
                icon={<FaBrain />}
                title="Keaktifan Kelas"
                scale="0-100"
                desc="Frekuensi partisipasi aktif dalam diskusi kelas."
              />
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <div className="bg-secondary-light/50 border border-border p-6 rounded-xl flex gap-6 items-start dark:bg-secondary-light/10 dark:border-border">
          {/* Ikon dengan warna primary-light sebagai background */}
          <span className="text-primary bg-primary-light p-2 rounded-full flex-shrink-0">
            <LuInfo size={24} />
          </span>

          <div>
            <h5 className="font-bold text-text">Penting: Integritas Data</h5>
            <p className="text-sm text-muted mt-1">
              Seluruh metrik di atas dihitung menggunakan Natural Language
              Processing (NLP) untuk menganalisis dokumen pendukung. Pastikan
              dokumen yang diunggah memiliki kualitas scan yang tinggi untuk
              menghindari kegagalan deteksi sistem.
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
      <td className="py-5 px-8">
        <div className="flex items-center gap-4">
          <div className="p-2.5 bg-primary-light dark:bg-primary-dark/20 rounded-xl text-primary shrink-0">
            {icon}
          </div>
          <span className="font-semibold text-text">{title}</span>
        </div>
      </td>
      <td className="py-5 px-8 text-sm text-muted ">{scale}</td>
      <td className="py-5 px-8 text-sm text-muted">{desc}</td>
    </tr>
  );
}
