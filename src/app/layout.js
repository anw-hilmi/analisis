import "./globals.css";

export const metadata = {
  title: "Dashboard Mahasiswa",
  description: "Aplikasi Dashboard Monitoring Kampus",
};

export default function RootLayout({ children }) {
  return (
    // 💡 Tambahkan suppressHydrationWarning agar tidak memicu error hidrasi akibat script tema
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Script otomatis membaca tema perangkat secara real-time */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="antialiased bg-bg text-text">{children}</body>
    </html>
  );
}
