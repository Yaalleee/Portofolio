"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-800 bg-slate-950/90 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm text-slate-200 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollTo("home")}
          className="text-lg font-bold text-white transition hover:text-sky-300"
        >
          Syahrial Hardi Akbar
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {["home", "about", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="capitalize transition hover:text-sky-300"
            >
              {id}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/cv.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-300 hover:text-sky-200"
          >
            Download CV
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}