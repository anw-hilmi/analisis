"use client";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { LuTrash2, LuRotateCcw, LuTimer } from "react-icons/lu";
import StatusModal from "@/components/StatusModal";

export default function HistoryStudent() {
  // Data Sementara (data akademik terkini)
  const MOCK_DATA_STUDENT = Array.from({ length: 30 }, (_, i) => ({
    no: i + 1,
    nim: `2000${1000 + i}`,
    nama: `Mahasiswa ${i + 1}`,
    semester: (i % 8) + 1,
    prodi: i % 2 === 0 ? "Informatika" : "Sistem Informasi",
    ipk: parseFloat((2.5 + Math.random() * 1.5).toFixed(2)),
    pendapatanOT: Math.floor(Math.random() * 5000000) + 1000000,
    skorMotivasi: Math.floor(Math.random() * 40) + 60,
    skorLiterasi: Math.floor(Math.random() * 40) + 60,
    suratRek: i % 3 === 0 ? "Ada" : "Tidak Ada",
    aktifOrg: i % 2 === 0 ? "Ya" : "Tidak",
    jmlRelawan: Math.floor(Math.random() * 5),
    skorKeaktifan: Math.floor(Math.random() * 40) + 60,
    absen: Math.floor(Math.random() * 15),
    status: Math.random() > 0.5 ? "LAYAK" : "TIDAK LAYAK",
    tanggaldihapus: "02-03-2026",
    tanggalkadaluarsa: "20 hari",
  }));

  // data asli
  const isUseBackend = false;

  const [stats, setStats] = useState({
    total: 0,
    loading: isUseBackend,
  });
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

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
      setStats({ total: 1004, loading: false });
      setStudents(MOCK_DATA_STUDENT);
    }
  }, []);

  // kotak halaman selanjutnya tabel (1,2,3,....)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filtered = students.filter(
    (s) =>
      s.nama.toLowerCase().includes(search.toLowerCase()) || // gunakan .includes agar lebih fleksibel
      s.nim.includes(search),
  );

  // Hitung data yang ditampilkan
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  const paginatedData = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

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

  // Tambahkan state tipe aksi hapus/pulihkan
  const [actionType, setActionType] = useState(null); // "delete" atau "restore"
  const [status, setStatus] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Fungsi buka modal dinamis
  const openModal = (student, type) => {
    setSelectedStudent(student);
    setActionType(type);
    setStatus("confirm");
  };

  const handleConfirmAction = () => {
    if (!selectedStudent || !actionType) return;

    setStatus("loading");

    setTimeout(() => {
      if (actionType === "delete") {
        // Logika Hapus
        setStudents((prev) => prev.filter((s) => s.no !== selectedStudent.no));
      } else if (actionType === "restore") {
        // Logika Pulihkan (Contoh: ubah status/kondisi data)
        console.log("Memulihkan data:", selectedStudent);
      }

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
    <main className="space-y-8 animate-in fade-in duration-500">
      {/* Overlay Status (Loading/Done) */}
      <StatusModal
        status={status}
        onClose={() => setStatus(null)}
        onConfirm={handleConfirmAction}
        // Pengkondisian Teks Berdasarkan Aksi
        titleConfirm={
          actionType === "delete" ? "Konfirmasi Hapus" : "Konfirmasi Pulihkan"
        }
        descConfirm={
          actionType === "delete"
            ? "Apakah Anda yakin ingin menghapus data ini secara permanen?"
            : "Apakah Anda yakin ingin memulihkan data ini?"
        }
        confirmLabel={actionType === "delete" ? "Hapus" : "Pulihkan"}
        confirmClass={actionType === "delete" ? "bg-danger" : "bg-primary"}
        titleLoading={
          actionType === "delete"
            ? "Proses Hapus Data Permanen"
            : "Proses Pulihkan Data"
        }
        descLoading={
          actionType === "delete"
            ? "Data sedang dihapus..."
            : "Data sedang dipulihkan..."
        }
        titleDone={
          actionType === "delete" ? "Hapus Selesai!" : "Pemulihan Selesai!"
        }
        descDone={
          actionType === "delete"
            ? "Data telah berhasil dihapus permanen."
            : "Data telah berhasil dipulihkan."
        }
      />
      <div className="flex flex-col gap-1 mb-8">
        <h2 className="text-3xl font-black text-text tracking-tight">
          Riwayat Data Dihapus
        </h2>
        <p className="text-muted text-sm">
          Kelola data mahasiswa yang telah dihapus.
        </p>
      </div>

      {/* Search */}
      <div className="flex flex-col lg:flex-row gap-6 items-center w-full max-w-5xl mx-auto mb-10 px-4">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
          <input
            className="w-full pl-12 pr-4 py-3 bg-card-bg border border-border rounded-xl text-text outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm hover:shadow-md"
            placeholder="Cari nama atau NIM..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Info Stats */}
        <div className="flex items-center gap-4 w-full lg:w-auto shrink-0">
          <div className="bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant flex items-center gap-3">
            <LuTrash2 className="text-danger text-xl" />
            <div>
              <p className="text-[10px] text-secondary uppercase">
                Total Record
              </p>
              <p className="text-sm font-bold">{filtered.length} Mahasiswa</p>
            </div>
          </div>

          <div className="bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant flex items-center gap-3">
            <LuTimer className="text-tertiary text-xl" />
            <div>
              <p className="text-[10px] text-secondary uppercase">
                Masa Tenggang
              </p>
              <p className="text-sm font-bold">30 Hari</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-card-bg rounded-xl shadow-sm border border-border overflow-hidden transition-all duration-300">
        {filtered.length > 0 ? (
          <div>
            <div className="overflow-x-auto">
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
                    <th className="px-6 py-5 w-32">Tanggal Dihapus</th>
                    <th className="px-6 py-5 w-32">Tanggal kadaluarsa</th>
                    <th className="px-6 py-5 w-32">Edit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {paginatedData.map((s) => (
                    <tr
                      key={s.no}
                      className="hover:bg-bg/50 transition-colors text-xs text-text"
                    >
                      <td className="px-6 py-4 w-16 text-muted">{s.no}</td>
                      <td className="px-6 py-4 w-32 text-muted">{s.nim}</td>
                      <td className="px-6 py-4 w-48 text-muted">{s.nama}</td>
                      <td className="px-6 py-4 w-40 text-muted">{s.prodi}</td>
                      <td className="px-6 py-4 w-20 text-muted">
                        {s.semester}
                      </td>
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
                      <td className="px-6 py-4 w-32 text-muted text-center">
                        {s.tanggaldihapus}
                      </td>
                      <td className="px-6 py-4 w-32 text-muted text-center">
                        {s.tanggalkadaluarsa}
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        {/* Tombol Pulihkan */}
                        <button
                          onClick={() => openModal(s, "restore")}
                          className="text-secondary hover:text-primary p-2 transition-colors"
                          aria-label="Pulihkan data"
                        >
                          <LuRotateCcw className="w-5 h-5" />
                        </button>

                        {/* Tombol Hapus */}
                        <button
                          onClick={() => openModal(s, "delete")}
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
                {Math.min(indexOfLastItem, students.length)} dari{" "}
                {students.length} mahasiswa
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
                    onClick={() =>
                      typeof page === "number" && setCurrentPage(page)
                    }
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
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-border rounded-lg hover:bg-bg disabled:opacity-50 text-sm transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center flex flex-col items-center text-muted">
            <FiSearch className="w-8 h-8 mb-4 opacity-50" />
            <h3 className="font-bold text-text">Data tidak ditemukan</h3>
            <p className="text-sm max-w-xs mx-auto">
              Coba gunakan kata kunci lain yang lebih spesifik.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
