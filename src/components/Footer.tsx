export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 py-6 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} Nama Kamu. Semua hak cipta dilindungi.</p>
        <p>Next.js - Tailwind CSS - Desain Modern</p>
      </div>
    </footer>
  );
}