export default function DeleteStatus({
  status,
  onClose,
  titleLoading,
  descLoading,
  titleDone,
  descDone,
}) {
  if (!status) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-card-bg border border-border p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 animate-fade-in-up">
        {status === "loading" ? (
          <>
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-text">{titleLoading}</h4>
              <p className="text-muted text-sm mt-1 animate-pulse">
                {descLoading}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center animate-scale-in">
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
            <button
              onClick={() => {
                onClose(); // Cukup tutup modal, React akan mengupdate tabel secara otomatis
              }}
              className="mt-4 px-6 py-2 bg-primary text-white font-bold rounded-xl hover:opacity-90"
            >
              Kembali ke Halaman
            </button>
          </>
        )}
      </div>
    </div>
  );
}
