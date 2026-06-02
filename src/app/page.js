import { redirect } from "next/navigation";

// Mengubah status menjadi false agar diarahkan ke halaman login
async function checkUserAuth() {
  return { isAuthenticated: false };
}

export default async function HomePage() {
  const { isAuthenticated } = await checkUserAuth();

  if (!isAuthenticated) {
    redirect("/login");
  }

  redirect("/dashboard");
}
