"use client";

import React, { useState, useEffect } from "react";
import { LuActivity, LuCpu, LuArrowRight } from "react-icons/lu";

export default function DashboardContent() {
  // ---------------------------------------------------------
  // PENGATURAN DATA
  // Ubah isUseBackend ke 'true' jika ingin menggunakan API
  // Data Sementara (data akademik terkini)
  const MOCK_DATA_STUDENT = [
    {
      id: "KLB-8801",
      name: "Ahmad Fauzi",
      prodi: "Informatika",
      ipk: 3.85,
      status: "LAYAK",
    },
    {
      id: "KLB-2801",
      name: "Ahmad Fauzi",
      prodi: "Informatika",
      ipk: 3.85,
      status: "LAYAK",
    },
    {
      id: "KLB-8101",
      name: "Ahmad Fauzi",
      prodi: "Informatika",
      ipk: 3.85,
      status: "LAYAK",
    },
    {
      id: "KLB-8882",
      name: "Bella Safra",
      prodi: "Sistem Informasi",
      ipk: 3.42,
      status: "TIDAK LAYAK",
    },
    {
      id: "KLB-9802",
      name: "Bella Safa",
      prodi: "Sistem Informasi",
      ipk: 3.42,
      status: "TIDAK LAYAK",
    },
    {
      id: "KLB-8802",
      name: "Bella Safira",
      prodi: "Sistem Informasi",
      ipk: 3.42,
      status: "TIDAK LAYAK",
    },
  ];

  // Data Sementara (aktivitas)
  const MOCK_DATA_ACTIVITIES = [
    { title: "Ahmad Fauzi rated", time: "2m ago", type: "green" },
    { title: "Data Semester 4", time: "15m ago", type: "blue" },
    { title: "Data Semester 4", time: "15m ago", type: "blue" },
    { title: "Data Semester 4", time: "15m ago", type: "blue" },
    { title: "Data Semester 4", time: "15m ago", type: "blue" },
  ];

  // data asli
  const isUseBackend = false;

  const [stats, setStats] = useState({
    total: 0,
    layak: 0,
    tidakLayak: 0,
    avgIpk: 0,
    loading: isUseBackend,
  });

  const [activities, setActivities] = useState([]);
  const [students, setStudents] = useState([]);
  const [limit, setLimit] = useState(3);
  const modelInfo = { version: "v1.2.0", lastUpdate: "24 Mei 2024" };

  useEffect(() => {
    if (isUseBackend) {
      async function fetchData() {
        try {
          const res = await fetch("/api/dashboard");
          const data = await res.json();
          setStats({ ...data.stats, loading: false });
          setActivities(data.activities);
          setStudents(data.students);
        } catch (err) {
          console.error("Error:", err);
          setStats((prev) => ({ ...prev, loading: false }));
        }
      }
      fetchData();
    } else {
      // Data Sementara (4 card teratas)
      setStats({
        total: 1284,
        layak: 925,
        tidakLayak: 359,
        avgIpk: 3.64,
        loading: false,
      });
      // Data Sementara (aktivitas)
      setActivities(MOCK_DATA_ACTIVITIES);
      // Data Sementara (data akademik terkini)
      setStudents(MOCK_DATA_STUDENT);
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-4 space-y-12">
      {/* 1. Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card-bg p-6 rounded-xl border border-border shadow-sm">
          <p className="text-xs font-bold  uppercase">Total Mahasiswa</p>
          <h3 className="text-4xl font-extrabold mt-2">{stats.total}</h3>
          <p className="text-sm text-muted mt-1">Semua prodi</p>
        </div>
        <div className="bg-card-bg p-6 rounded-xl border border-border shadow-sm">
          <p className="text-xs font-bold  uppercase">Layak</p>
          <h3 className="text-4xl font-extrabold mt-2">{stats.layak}</h3>
          <div className="w-full bg-secondary-light h-1.5 rounded-full mt-4">
            <div
              className="bg-accent-green h-1.5 rounded-full"
              style={{
                width: `${stats.total > 0 ? (stats.layak / stats.total) * 100 : 0}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="bg-card-bg p-6 rounded-xl border border-border shadow-sm">
          <p className="text-xs font-bold  uppercase">Tidak Layak</p>
          <h3 className="text-4xl font-extrabold mt-2">{stats.tidakLayak}</h3>
          <div className="w-full bg-secondary-light h-1.5 rounded-full mt-4">
            <div
              className="bg-accent-red h-1.5 rounded-full"
              style={{
                width: `${stats.total > 0 ? (stats.tidakLayak / stats.total) * 100 : 0}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="bg-card-bg p-6 rounded-xl border border-border shadow-sm">
          <p className="text-xs font-bold  uppercase">Rata-rata IPK</p>
          <h3 className="text-4xl font-extrabold mt-2">{stats.avgIpk}</h3>
          <p className="text-sm text-muted mt-1">Semua prodi</p>
        </div>
      </div>

      {/* 2. Analytics & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card-bg p-8 rounded-xl border border-border shadow-sm">
          <h4 className="text-lg font-bold mb-8">Distribusi Kelayakan</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              className="relative w-44 h-44 mx-auto flex items-center justify-center rounded-full"
              style={{
                background:
                  stats.total > 0
                    ? `conic-gradient(var(--color-accent-green) 0% ${(stats.layak / stats.total) * 100}%, var(--color-accent-red) ${(stats.layak / stats.total) * 100}% 100%)`
                    : "var(--color-secondary-light)",
              }}
            >
              <div className="absolute inset-4 bg-card-bg rounded-full flex items-center justify-center text-3xl font-extrabold text-primary">
                {((stats.layak / stats.total) * 100).toFixed(0)}%
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent-green"></div>
                  <span>Layak</span>
                </div>
                <span className="font-bold">{stats.layak}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent-red"></div>
                  <span>Tidak Layak</span>
                </div>
                <span className="font-bold">{stats.tidakLayak}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-card-bg p-6 rounded-xl border border-border shadow-sm flex-1">
            <div className="flex items-center gap-2 mb-6">
              <LuActivity className="text-primary w-4 h-4" />
              <h4 className="text-xs font-bold uppercase">Aktivitas</h4>
            </div>
            <ul className="space-y-4">
              {activities.slice(0, 2).map((act, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className={`w-2 h-2 rounded-full mt-1.5 ${act.type === "green" ? "bg-accent-green" : act.type === "red" ? "bg-accent-red" : "bg-primary"}`}
                  />
                  <div>
                    <p className="text-sm font-medium">{act.title}</p>
                    <p className="text-xs text-muted">{act.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card-bg p-6 rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <LuCpu className="text-primary w-4 h-4" />
              <h4 className="text-xs font-bold uppercase">VERSI MODEL</h4>
            </div>
            <p className="text-4xl font-extrabold text-primary">
              {modelInfo.version}
            </p>
            <p className="text-xs text-muted mt-2">
              Update: {modelInfo.lastUpdate}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Table */}
      <div className="bg-card-bg rounded-3xl border border-border shadow-sm overflow-hidden transition-all duration-300">
        {/* Header Tabel */}
        <div className="px-8 py-6 border-b border-border flex justify-between items-center bg-card-bg/50 backdrop-blur-sm">
          <div>
            <h4 className="text-lg font-bold text-text">
              Data Akademik Terkini
            </h4>
          </div>
        </div>

        {/* Body Tabel */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[12px] uppercase tracking-widest  font-bold border-b border-border bg-bg/30">
                {[
                  "NIM",
                  "Nama Mahasiswa",
                  "Program Studi",
                  "IPK",
                  "Status",
                ].map((h) => (
                  <th key={h} className="px-8 py-5">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {students.slice(0, limit).map((s) => (
                <tr
                  key={s.id}
                  className="hover:bg-bg transition-colors group cursor-default"
                >
                  <td className="px-8 py-5  text-xs text-muted tracking-tight">
                    {s.id}
                  </td>
                  <td className="px-8 py-5  text-muted">{s.name}</td>
                  <td className="px-8 py-5 text-sm text-muted">{s.prodi}</td>
                  <td className="px-8 py-5 font-bold text-primary">
                    {s.ipk.toFixed(2)}
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        s.status === "LAYAK"
                          ? "bg-accent-green/10 text-accent-green"
                          : "bg-accent-red/10 text-accent-red"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Aksi */}
        <div className="px-8 py-5 border-t border-border bg-bg/30 flex justify-center">
          <button
            onClick={() => setLimit(limit === 3 ? 5 : 3)}
            className="text-xs font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-widest"
          >
            {limit === 3 ? "Tampilkan Lebih Banyak" : "Tampilkan Lebih Sedikit"}
          </button>
        </div>
      </div>
    </div>
  );
}
