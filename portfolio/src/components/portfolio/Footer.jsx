export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/[0.04] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} — Feito com dedicação
        </p>
        <p className="text-sm text-gray-700 font-mono">
          Seu Nome
        </p>
      </div>
    </footer>
  );
}