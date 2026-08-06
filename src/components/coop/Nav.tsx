import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LogoMark } from "./Mockups";

const nav = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Módulos", href: "#modulos" },
  { label: "IA", href: "#ia" },
  { label: "Roadmap", href: "#roadmap" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-brand transition-[width] duration-150 ease-out motion-reduce:transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-500 ${
            scrolled ? "glass rounded-2xl px-4 shadow-card-soft" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5">
            <LogoMark className="h-9 w-9" />
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                CoopMisiones
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Gobierno de Misiones
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-secondary hover:text-ink"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://paralelo.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-white/60 px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-white hover:text-ink"
            >
              Propuesta · Paralelo
            </a>
            <a
              href="#plataforma"
              className="rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              Conocer la plataforma
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border bg-white/70 p-2 md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="mx-auto mt-2 max-w-6xl px-4 md:hidden">
            <div className="glass rounded-2xl p-3 shadow-card-soft">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-secondary"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#plataforma"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-gradient-brand px-4 py-2 text-center text-sm font-medium text-white"
              >
                Conocer la plataforma
              </a>
              <a
                href="https://paralelo.tech"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center text-xs font-medium text-ink-soft hover:text-ink"
              >
                Propuesta de Paralelo Software Studio
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
