import { LuTriangleAlert, LuRotateCcw } from "react-icons/lu";

export default function StatusModal({
  status,
  onClose,
  onConfirm,
  titleConfirm = "Konfirmasi Aksi",
  descConfirm = "Apakah Anda yakin?",
  confirmLabel = "Konfirmasi",
  confirmClass = "bg-primary",
  titleLoading,
  descLoading,
  titleDone,
  descDone,
}) {
  if (!status) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Menggunakan bg-card-bg, border-border, dan text-text */}
      <div className="bg-card-bg border border-border p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 animate-fade-in-up w-full max-w-sm">
        {/* TAHAP KONFIRMASI */}
        {status === "confirm" && (
          <>
            {/* Lingkaran Ikon Otomatis Dinamis */}
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center ${
                confirmLabel === "Hapus"
                  ? "bg-accent-orange-light text-accent-orange"
                  : "bg-accent-blue-light text-accent-blue"
              }`}
            >
              {confirmLabel === "Hapus" ? (
                <LuTriangleAlert className="w-10 h-10" />
              ) : (
                <LuRotateCcw className="w-10 h-10" />
              )}
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-text">{titleConfirm}</h4>
              <p className="text-muted text-sm mt-1">{descConfirm}</p>
            </div>

            <div className="flex gap-3 w-full">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-bg border border-border text-text rounded-xl font-bold transition-colors hover:bg-secondary-light dark:hover:bg-secondary"
              >
                Batal
              </button>
              <button
                onClick={onConfirm}
                className={`flex-1 px-4 py-2 text-white font-bold rounded-xl hover:opacity-90 transition-opacity ${confirmClass}`}
              >
                {confirmLabel}
              </button>
            </div>
          </>
        )}
        {/* TAHAP LOADING */}
        {status === "loading" && (
          <>
            {/* Menggunakan border-primary-light dan border-t-primary */}
            <div className="w-16 h-16 border-4 border-primary-light border-t-primary rounded-full animate-spin"></div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-text">{titleLoading}</h4>
              <p className="text-muted text-sm mt-1 animate-pulse">
                {descLoading}
              </p>
            </div>
          </>
        )}

        {/* TAHAP SELESAI */}
        {status === "done" && (
          <>
            {/* Menggunakan accent-green dari global.css */}
            <div className="w-20 h-20 bg-accent-green-light text-accent-green rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-text">{titleDone}</h4>
              <p className="text-muted text-sm mt-1">{descDone}</p>
            </div>
            {/* Menggunakan bg-primary text-white */}
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Kembali ke Halaman
            </button>
          </>
        )}
      </div>
    </div>
  );
}
