"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChefHat } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

const logo = "/main-logo.png";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/why-restaurant360", label: t.nav.why },
    { to: "/features", label: t.nav.features },
    { to: "/pos", label: t.nav.pos },
    { to: "/kitchen-kot", label: t.nav.kitchen },
    { to: "/inventory", label: t.nav.inventory },
    { to: "/settlement", label: t.nav.settlement },
    { to: "/reports", label: t.nav.reports },
    { to: "/contact", label: t.nav.contact },
    { to: "/pricing", label: t.nav.pricing },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all ${scrolled ? "border-border bg-background/85 backdrop-blur-md shadow-sm" : "border-transparent bg-background/60 backdrop-blur"}`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          <img src={logo} alt="main-logo" className="w-[200px]" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = l.to === "/" ? pathname === "/" : pathname === l.to;
            return (
              <Link
                key={l.to}
                href={l.to}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-primary bg-[color:var(--soft-bg)]"
                    : "font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link
            href="/request-demo"
            className="hidden rounded-full bg-gradient-to-r from-primary to-[oklch(0.72_0.18_55)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-105 md:inline-flex"
          >
            {t.nav.requestDemo}
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => {
              const isActive = l.to === "/" ? pathname === "/" : pathname === l.to;
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "font-semibold text-primary bg-[color:var(--soft-bg)]"
                      : "font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/request-demo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-primary to-[oklch(0.72_0.18_55)] px-4 py-2 text-center text-xs font-semibold text-primary-foreground"
            >
              {t.nav.requestDemo}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
