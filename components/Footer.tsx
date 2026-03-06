export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sky-200/60 bg-amber-50/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-center text-sm text-slate-600 sm:text-left">
            © {year} Portfolio. Built with Next.js & Tailwind.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-slate-500 hover:text-orange-600">About</a>
            <a href="#projects" className="text-slate-500 hover:text-orange-600">Projects</a>
            <a href="#contact" className="text-slate-500 hover:text-orange-600">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
