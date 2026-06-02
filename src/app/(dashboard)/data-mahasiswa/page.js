"use client";

import AddDataContainer from "@/components/AddDataContainer";
import React, { useState, useEffect } from "react";
import { LuPlus, LuTrash2 } from "react-icons/lu";
import DeleteStatus from "@/components/DeleteStatus";
export default function DataMahasiswaPage() {
  // tombol tambah data
  const [showModal, setShowModal] = useState(false);

  // dropdown
  const filterData = [
    { label: "Status", options: ["Layak", "Tidak Layak"] },
    { label: "Semester", options: ["1", "2", "3", "4", "5", "6", "7", "8"] },
    { label: "Tahun", options: ["2024/2025", "2025/2026"] },
    { label: "Prodi", options: ["Informatika", "Sistem Informasi"] },
  ];

  // Data Sementara (data akademik terkini)
  const MOCK_DATA_STUDENT = [
    {
      no: 1,
      nim: "200030002",
      nama: "Ahmad Fauzi",
      semester: 4,
      prodi: "Informatika",
      ipk: 3.85,
      pendapatanOT: 4500000,
      skorMotivasi: 85,
      skorLiterasi: 70,
      suratRek: "Ada",
      aktifOrg: "Ya",
      jmlRelawan: 0,
      skorKeaktifan: 80,
      absen: 20,
      status: "LAYAK",
    },
    {
      no: 2,
      nim: "2300001003",
      nama: "Budi Santoso",
      semester: 6,
      prodi: "Sistem Informasi",
      ipk: 3.2,
      pendapatanOT: 2500000,
      skorMotivasi: 60,
      skorLiterasi: 55,
      suratRek: "Tidak Ada",
      aktifOrg: "Tidak",
      jmlRelawan: 2,
      skorKeaktifan: 65,
      absen: 5,
      status: "TIDAK LAYAK",
    },
  ];

  // data asli
  const isUseBackend = false;

  const [stats, setStats] = useState({
    total: 0,
    loading: isUseBackend,
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (isUseBackend) {
      async function fetchData() {
        try {
          const res = await fetch("/api/dashboard");
          const data = await res.json();
          setStats({ ...data.stats, loading: false });
        } catch (err) {
          console.error("Error:", err);
          setStats((prev) => ({ ...prev, loading: false }));
        }
      }
      fetchData();
    } else {
      setStats({ total: 1004 });
      setStudents(MOCK_DATA_STUDENT);
    }
  }, []);

  // kotak halaman selanjutnya tabel (1,2,3,....)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Hitung data yang ditampilkan
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStudents = students.slice(indexOfFirstItem, indexOfLastItem);

  // Logika untuk menentukan angka halaman yang ditampilkan
  const getPaginationGroup = () => {
    let pages = [];

    if (totalPages <= 4) {
      pages = [...Array(totalPages).keys()].map((i) => i + 1);
    } else {
      if (currentPage === totalPages) {
        // Ketika di halaman terakhir: ..., n-2, n-1, n
        pages = ["...", totalPages - 2, totalPages - 1, totalPages];
      } else if (currentPage >= totalPages - 1) {
        // Ketika di satu halaman sebelum terakhir: ..., n-1, n
        pages = [currentPage - 1, currentPage, "...", totalPages];
      } else {
        // Pola dinamis halaman awal dan tengah: aktif, berikutnya, ..., terakhir
        pages = [currentPage, currentPage + 1, "...", totalPages];
      }
    }

    return pages;
  };

  // tombol hapus data
  const [status, setStatus] = useState(null);

  const handleCloseStatus = () => setStatus(null);

  const handleDelete = (no) => {
    setStudents((prev) => prev.filter((s) => s.no !== no));
  };

  const handlePredictAndDelete = (s) => {
    setStatus("loading");
    setTimeout(() => {
      handleDelete(s.no);
      setStatus("done");
    }, 2000);
  };

  // Memastikan currentPage tetap valid saat jumlah data berkurang setelah penghapusan
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [students, totalPages, currentPage]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Overlay Status (Loading/Done) */}
      <DeleteStatus
        status={status}
        onClose={handleCloseStatus}
        titleLoading="Proses Hapus Data"
        descLoading="Data sedang dihapus..."
        titleDone="Hapus Selesai!"
        descDone="Data telah berhasil dihapus."
      />
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-text tracking-tight">
            Data Academic
          </h2>
          <p className="text-muted mt-1">
            Kelola dan pantau seluruh data beasiswa mahasiswa.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-2xl flex items-center gap-2"
        >
          <LuPlus className="w-5 h-5" />
          <span>Tambah Data</span>
        </button>
      </div>

      {/* Modal Container */}
      <AddDataContainer
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

      {/* Stats & Search */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-card-bg p-4 rounded-xl border border-border shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {filterData.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-muted uppercase">
                  {item.label}
                </label>
                <select className="bg-bg border border-border rounded-lg p-2 text-sm text-text outline-none focus:border-primary">
                  <option value="">Pilih {item.label}...</option>
                  {item.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-3xl shadow-xl shadow-primary/20 flex flex-col justify-center items-center">
          <span className="text-4xl font-black">{stats.total}</span>
          <span className="text-[10px] font-bold tracking-widest uppercase opacity-80 mt-1">
            Total Mahasiswa
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card-bg border border-border rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {/* min-w-[1400px] memastikan tabel tidak berhimpitan di layar kecil */}
          <table className="w-full text-left border-collapse min-w-[1400px]">
            <thead>
              <tr className="text-[11px] uppercase tracking-widest font-bold border-b border-border bg-bg/30 ">
                <th className="px-6 py-5 w-16">No</th>
                <th className="px-6 py-5 w-32">NIM</th>
                <th className="px-6 py-5 w-48">Nama</th>
                <th className="px-6 py-5 w-40">Prodi</th>
                <th className="px-6 py-5 w-20">Semester</th>
                <th className="px-6 py-5 w-20">IPK</th>
                <th className="px-6 py-5 w-40">Pendapatan Orang tua</th>
                <th className="px-6 py-5 w-24">Motivasi</th>
                <th className="px-6 py-5 w-24">Literasi</th>
                <th className="px-6 py-5 w-32">Surat Rekomendasi</th>
                <th className="px-6 py-5 w-32">Aktif Organisasi</th>
                <th className="px-6 py-5 w-32">Kegiatan Relawan</th>
                <th className="px-6 py-5 w-32">Keaktifan Kampus</th>
                <th className="px-6 py-5 w-24">Absen</th>
                <th className="px-6 py-5 w-32">Status</th>
                <th className="px-6 py-5 w-20">Edit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {currentStudents.map((s) => (
                <tr
                  key={s.no}
                  className="hover:bg-bg/50 transition-colors text-xs text-text"
                >
                  <td className="px-6 py-4 w-16 text-muted">{s.no}</td>
                  <td className="px-6 py-4 w-32 text-muted">{s.nim}</td>
                  <td className="px-6 py-4 w-48 text-muted">{s.nama}</td>
                  <td className="px-6 py-4 w-40 text-muted">{s.prodi}</td>
                  <td className="px-6 py-4 w-20 text-muted">{s.semester}</td>
                  <td className="px-6 py-4 w-20 text-muted">
                    {s.ipk.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 w-40 text-muted">
                    {s.pendapatanOT.toLocaleString("id-ID")}
                  </td>
                  <td className="px-6 py-4 w-24 text-muted text-center">
                    {s.skorMotivasi}
                  </td>
                  <td className="px-6 py-4 w-24 text-muted text-center">
                    {s.skorLiterasi}
                  </td>
                  <td className="px-6 py-4 w-32 text-muted text-center">
                    {s.suratRek}
                  </td>
                  <td className="px-6 py-4 w-32 text-muted text-center">
                    {s.aktifOrg}
                  </td>
                  <td className="px-6 py-4 w-32 text-muted text-center">
                    {s.jmlRelawan}
                  </td>
                  <td className="px-6 py-4 w-32 text-muted text-center">
                    {s.skorKeaktifan}
                  </td>
                  <td className="px-6 py-4 w-24 text-muted text-center">
                    {s.absen}
                  </td>
                  <td className="px-6 py-4 w-32">
                    <span
                      className={`px-5 py-1.5 rounded-lg font-black uppercase text-[10px] tracking-widest inline-block text-center ${
                        s.status === "LAYAK"
                          ? "bg-accent-green-light text-accent-green border border-accent-green/20"
                          : "bg-danger-light text-danger border border-danger/20"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 w-20">
                    <button
                      onClick={() => handlePredictAndDelete(s)}
                      className="text-danger hover:text-danger-dark p-2 transition-colors"
                      aria-label="Hapus data"
                    >
                      <LuTrash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Component */}
        <div className="flex justify-between items-center px-8 py-4 border-t border-border bg-bg/20">
          <span className="text-xs text-muted">
            Menampilkan {indexOfFirstItem + 1} -{" "}
            {Math.min(indexOfLastItem, students.length)} dari {students.length}{" "}
            mahasiswa
          </span>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-border rounded-lg hover:bg-bg disabled:opacity-50 text-sm transition-all"
            >
              Prev
            </button>

            {getPaginationGroup().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={typeof page !== "number"}
                className={`px-3 py-1 rounded-lg text-sm transition-all ${
                  currentPage === page
                    ? "bg-primary text-white font-bold shadow-md"
                    : page === "..."
                      ? "cursor-default text-muted"
                      : "border border-border hover:bg-bg"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-border rounded-lg hover:bg-bg disabled:opacity-50 text-sm transition-all"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
