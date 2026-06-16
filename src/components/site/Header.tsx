import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Menu, X, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/teachers", label: t("nav.teachers") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-pink">
            <span className="font-display text-lg font-bold text-primary-foreground">B</span>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Beautiful <span className="text-primary">Teachers</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "pt" : "en")}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent transition-colors"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            {t("lang.switch")}
          </button>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-pink hover:opacity-95 transition-opacity"
          >
            <MessageCircle className="h-4 w-4" />
            {t("cta.whatsapp")}
          </a>
          <button
            className="md:hidden grid place-items-center h-10 w-10 rounded-lg hover:bg-accent"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setLocale(locale === "en" ? "pt" : "en");
                setOpen(false);
              }}
              className="w-full text-left rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
            >
              🌐 {t("lang.switch")}
            </button>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-pink"
            >
              <MessageCircle className="h-4 w-4" />
              {t("cta.whatsapp")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
