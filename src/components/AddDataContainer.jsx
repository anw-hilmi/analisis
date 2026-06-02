"use client";
import { useState } from "react";
import { LuUpload, LuFileText, LuX, LuPlus } from "react-icons/lu";
import PredictStatus from "./PredictStatus";

export default function AddDataContainer({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("satuan");
  const [activeMassalTab, setActiveMassalTab] = useState("upload");
  const [rows, setRows] = useState([{ id: Date.now() }]);

  // container prediksi loading dan selesai
  const [status, setStatus] = useState(null);

  const handlePredict = () => {
    setStatus("loading");
    setTimeout(() => setStatus("done"), 2000);
  };

  // untuk biar bisa keluar dari comtainer form
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      {/* Overlay Status (Loading/Done) */}
      <PredictStatus
        status={status}
        onClose={onClose}
        titleLoading="Proses Prediksi"
        descLoading="Data sedang dianalisis..."
        titleDone="Prediksi Selesai!"
        descDone="Hasil prediksi telah berhasil diperbarui."
      />

      <div className="bg-card-bg w-full max-w-3xl rounded-3xl p-8 shadow-2xl border border-border max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-black text-text">
            Tambah Data Mahasiswa
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bg rounded-full transition-colors"
          >
            <LuX size={20} />
          </button>
        </div>

        {/* Tabs Utama */}
        <div className="flex gap-2 p-1 bg-bg rounded-2xl border border-border mb-8">
          {["satuan", "massal"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 rounded-xl font-bold capitalize transition-all ${activeTab === tab ? "bg-primary text-white shadow-lg" : "text-muted hover:text-text"}`}
            >
              Input {tab === "satuan" ? "Satuan" : "Massal (Bulk)"}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "satuan" ? (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input NIM */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                NIM
              </label>
              <input
                className="w-full bg-bg border border-border p-3 rounded-xl"
                placeholder="Masukkan NIM..."
                type="number"
              />
            </div>
            {/* Input Nama */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                Nama
              </label>
              <input
                className="w-full bg-bg border border-border p-3 rounded-xl"
                placeholder="Masukkan Nama..."
              />
            </div>
            {/* Input Prodi */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                Prodi
              </label>
              <input
                className="w-full bg-bg border border-border p-3 rounded-xl"
                placeholder="Masukkan Prodi..."
              />
            </div>
            {/* Input Semester */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                Semester
              </label>
              <input
                className="w-full bg-bg border border-border p-3 rounded-xl"
                placeholder="Masukkan Semester..."
                type="number"
                min="1"
                max="10"
              />
            </div>
            {/* Input IPK */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                IPK
              </label>
              <input
                className="w-full bg-bg border border-border p-3 rounded-xl"
                placeholder="0.0-4.0"
                type="number"
                step="0.01"
                min="0.00"
                max="4.00"
              />
            </div>
            {/* Input Pendapatan Orang Tua */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                Pendapatan Orang Tua
              </label>
              <input
                className="w-full bg-bg border border-border p-3 rounded-xl"
                placeholder="Masukkan Pendapatan Orang Tua..."
                type="number"
              />
            </div>
            {/* Input Number Skor Motivasi*/}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                Skor Motivasi Tertulis
              </label>
              <input
                type="number"
                min="1"
                max="100"
                className="w-full bg-bg border border-border p-3 rounded-xl"
                placeholder="1-100"
              />
            </div>
            {/* Input Number Skor Literasi*/}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                Skor Literasi Finansial
              </label>
              <input
                type="number"
                min="1"
                max="100"
                className="w-full bg-bg border border-border p-3 rounded-xl"
                placeholder="1-100"
              />
            </div>
            {/* Input Surat Rekomendasi */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                Surat Rekomendasi
              </label>
              <select className="w-full bg-bg border border-border p-3 rounded-xl">
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
              </select>
            </div>
            {/* Input Aktif Organisasi*/}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                Aktif Organisasi
              </label>
              <select className="w-full bg-bg border border-border p-3 rounded-xl">
                <option value="Ada">Ya</option>
                <option value="Tidak Ada">Tidak</option>
              </select>
            </div>
            {/* Input Jumlah Kegiatan Relawan */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                Jumlah Kegiatan Relawan
              </label>
              <input
                className="w-full bg-bg border border-border p-3 rounded-xl"
                placeholder="Masukkan Jumlah Kegiatan Relawan..."
                type="number"
              />
            </div>
            {/* Input Jumlah Keaktifan Kampus */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                Jumlah Keaktifan Kampus
              </label>
              <input
                className="w-full bg-bg border border-border p-3 rounded-xl"
                placeholder="Masukkan Jumlah Keaktifan Kampus..."
                type="number"
              />
            </div>
            {/* Input Jumlah Rekam Ketidakhadiran */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted uppercase">
                Jumlah Rekam Ketidakhadiran
              </label>
              <input
                className="w-full bg-bg border border-border p-3 rounded-xl"
                placeholder="Masukkan Jumlah Rekam Ketidakhadiran..."
                type="number"
              />
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex gap-2 border-b border-border">
              {["upload", "manual"].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveMassalTab(sub)}
                  className={`pb-3 px-2 capitalize font-bold ${activeMassalTab === sub ? "border-b-2 border-primary text-primary" : "text-muted"}`}
                >
                  {sub === "upload" ? "Upload File" : "Isi Manual"}
                </button>
              ))}
            </div>

            {activeMassalTab === "upload" ? (
              <div>
                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  accept=".csv, .xlsx"
                  onChange={(e) => console.log(e.target.files[0])}
                />
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer flex flex-col items-center w-full transition-all duration-300 p-10 rounded-2xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5"
                >
                  <LuUpload
                    className="text-primary mb-4 transition-transform duration-300 hover:scale-110"
                    size={40}
                  />
                  <p className="font-bold text-text">Klik untuk pilih file</p>
                  <p className="text-primary text-xs mt-2 font-bold">
                    Format: .csv, .xlsx
                  </p>
                </label>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full table-fixed border-collapse">
                  <thead>
                    <tr className="text-muted border-b border-border text-[10px] uppercase">
                      <th className="p-2 text-left w-24">NIM</th>
                      <th className="p-2 text-left w-64">Nama</th>
                      <th className="p-2 text-left w-32">Prodi</th>
                      <th className="p-2 text-left w-20">Semester</th>
                      <th className="p-2 text-left w-20">IPK</th>
                      <th className="p-2 text-left w-32 whitespace-normal leading-tight">
                        Pendapatan Orang Tua
                      </th>
                      <th className="p-2 text-left w-24 whitespace-normal leading-tight">
                        Skor Motivasi Tertulis
                      </th>
                      <th className="p-2 text-left w-24 whitespace-normal leading-tight">
                        Skor Literasi Finansial
                      </th>
                      <th className="p-2 text-left w-32 whitespace-normal leading-tight">
                        Surat Rekomendasi
                      </th>
                      <th className="p-2 text-left w-32 whitespace-normal leading-tight">
                        Aktif Organisasi
                      </th>
                      <th className="p-2 text-left w-24 whitespace-normal leading-tight">
                        Jumlah Kegiatan Relawan
                      </th>
                      <th className="p-2 text-left w-24 whitespace-normal leading-tight">
                        Jumlah Keaktifan Kampus
                      </th>
                      <th className="p-2 text-left w-24 whitespace-normal leading-tight">
                        Jumlah Rekam Ketidakhadiran
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {rows.map((row) => (
                      <tr key={row.id}>
                        {/* Input NIM */}
                        <td className="p-1 w-24">
                          <input
                            type="number"
                            className="w-full border border-border bg-bg rounded p-2"
                          />
                        </td>
                        {/* Input Nama */}
                        <td className="p-1 w-64">
                          <input className="w-full border border-border bg-bg rounded p-2" />
                        </td>
                        {/* Input Prodi */}
                        <td className="p-1 w-32">
                          <input className="w-full border border-border bg-bg rounded p-2" />
                        </td>
                        {/* Input Semester */}
                        <td className="p-1 w-20">
                          <input
                            type="number"
                            min="1"
                            max="10"
                            className="w-full border border-border bg-bg rounded p-2"
                          />
                        </td>
                        {/* Input IPK */}
                        <td className="p-1 w-20">
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            max="4"
                            className="w-full border border-border bg-bg rounded p-2"
                          />
                        </td>
                        {/* Input Pendapatan Orang Tua */}
                        <td className="p-1 w-32">
                          <input
                            type="number"
                            className="w-full border border-border bg-bg rounded p-2"
                          />
                        </td>
                        {/* Input Skor Motivasi Tertulis */}
                        <td className="p-1 w-24">
                          <input
                            type="number"
                            min="1"
                            max="100"
                            className="w-full border border-border bg-bg rounded p-2"
                          />
                        </td>
                        {/* Input Skor Literasi Finansial */}
                        <td className="p-1 w-24">
                          <input
                            type="number"
                            min="1"
                            max="100"
                            className="w-full border border-border bg-bg rounded p-2"
                          />
                        </td>
                        {/* Input Surat Rekomendasi */}
                        <td className="p-1 w-32">
                          <select className="w-full border border-border bg-bg rounded p-2 h-[42px]">
                            <option value="ya">Ada</option>
                            <option value="tidak">Tidak</option>
                          </select>
                        </td>
                        {/* Input Aktif Organisasi */}
                        <td className="p-1 w-32">
                          <select className="w-full border border-border bg-bg rounded p-2 h-[42px]">
                            <option value="ya">Ya</option>
                            <option value="tidak">Tidak</option>
                          </select>
                        </td>
                        {/* Input Jumlah Kegiatan Relawan */}
                        <td className="p-1 w-24">
                          <input
                            type="number"
                            className="w-full border border-border bg-bg rounded p-2"
                          />
                        </td>
                        {/* Input Jumlah Keaktifan Kampus*/}
                        <td className="p-1 w-24">
                          <input
                            type="number"
                            className="w-full border border-border bg-bg rounded p-2"
                          />
                        </td>
                        {/* Rekam Ketidakhadiran */}
                        <td className="p-1 w-24">
                          <input
                            type="number"
                            className="w-full border border-border bg-bg rounded p-2"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setRows([...rows, { id: Date.now() }])}
                    className="flex items-center gap-2 text-primary font-bold text-sm hover:bg-primary-light px-3 py-2 rounded-lg transition-colors"
                  >
                    <LuPlus size={16} /> Tambah Baris
                  </button>

                  <button
                    type="button"
                    onClick={() => setRows(rows.slice(0, -1))}
                    disabled={rows.length <= 1}
                    className="flex items-center gap-2 text-red-500 font-bold text-sm hover:bg-red-50 px-3 py-2 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <LuX size={16} /> Hapus Baris
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-10 pt-6 border-t border-border">
          <button
            onClick={onClose}
            className="px-8 py-3 font-bold text-muted hover:text-text"
          >
            Batal
          </button>
          <button
            onClick={handlePredict}
            className="px-8 py-3 bg-primary text-white rounded-2xl font-bold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
