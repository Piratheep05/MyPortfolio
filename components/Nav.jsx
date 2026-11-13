"use client";
import { useEffect, useState } from "react";
import { Menu, Close, Sun, Moon } from "./icons";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-[var(--bg)]/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5 font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-mono text-xs font-bold text-white">PR</span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-sm text-muted transition hover:text-[var(--fg)]">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:text-[var(--fg)]"
          >
            {dark ? <Sun width={16} height={16} /> : <Moon width={16} height={16} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--fg)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition hover:opacity-85 sm:inline-block"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
          >
            {open ? <Close width={16} height={16} /> : <Menu width={16} height={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-5 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-line py-3.5 text-base">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
