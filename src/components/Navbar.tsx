"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About", index: "01" },
  { href: "#experience", label: "Experience", index: "02" },
  { href: "#projects", label: "Projects", index: "03" },
  { href: "#contact", label: "Contact", index: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/60 bg-night/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-screen-xl items-center justify-between px-6 md:px-10">
        <a
          href="#hero"
          className="font-mono text-2xl font-bold text-accent"
          aria-label="Home"
        >
          MH.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ol className="flex list-none items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group font-mono text-sm text-mute transition-colors hover:text-accent"
                >
                  <span className="mr-1 text-xs text-accent">
                    {link.index}.
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="mailto:mh6811172@gmail.com"
            className="border border-accent px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent-soft"
          >
            Say Hello
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-0.5 w-6 bg-accent transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-accent transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-accent transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-20 z-40 flex flex-col items-center gap-10 bg-night/95 pt-16 backdrop-blur-sm transition-all duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ol className="flex list-none flex-col items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-lg text-ink transition-colors hover:text-accent"
              >
                <span className="mr-2 text-sm text-accent">
                  {link.index}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ol>
        <a
          href="mailto:mh6811172@gmail.com"
          onClick={() => setOpen(false)}
          className="border border-accent px-8 py-3 font-mono text-accent"
        >
          Say Hello
        </a>
      </div>
    </header>
  );
}