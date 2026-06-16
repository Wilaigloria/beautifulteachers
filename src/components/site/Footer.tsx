import { Link } from "@tanstack/react-router";
import { MessageCircle, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-pink">
              <span className="font-display text-lg font-bold text-primary-foreground">B</span>
            </span>
            <span className="font-display text-lg font-semibold">
              Beautiful <span className="text-primary">Teachers</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t("footer.tagline")}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("footer.product")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">{t("nav.home")}</Link></li>
            <li><Link to="/teachers" className="hover:text-primary">{t("nav.teachers")}</Link></li>
            <li><Link to="/contact" className="hover:text-primary">{t("nav.contact")}</Link></li>
          </ul>
          <h4 className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("footer.legal")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-primary">{t("nav.privacy")}</Link></li>
            <li><Link to="/terms" className="hover:text-primary">{t("nav.terms")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("footer.contact")}
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" />
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. {t("footer.rights")}</p>
          <p>Made with <span className="text-primary">♥</span> for learners in Brasil.</p>
        </div>
      </div>
    </footer>
  );
}
