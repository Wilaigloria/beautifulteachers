import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Beautiful Teachers" },
      { name: "description", content: "Chat with us on WhatsApp or send an email. We answer every message personally, usually within an hour." },
      { property: "og:title", content: "Contact Us — Beautiful Teachers" },
      { property: "og:description", content: "Reach Beautiful Teachers on WhatsApp or by email." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-display text-5xl sm:text-6xl font-semibold">{t("contact.title")}</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-6">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl border border-border bg-card p-8 hover:shadow-pink transition-shadow"
        >
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10">
            <MessageCircle className="h-6 w-6 text-primary" />
          </span>
          <h2 className="mt-5 text-xl font-semibold">{t("contact.whatsapp.title")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t("contact.whatsapp.body")}</p>
          <p className="mt-4 font-semibold text-primary group-hover:underline">{SITE.whatsappDisplay}</p>
        </a>

        <a
          href={`mailto:${SITE.email}`}
          className="group rounded-3xl border border-border bg-card p-8 hover:shadow-pink transition-shadow"
        >
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </span>
          <h2 className="mt-5 text-xl font-semibold">{t("contact.email.title")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t("contact.email.body")}</p>
          <p className="mt-4 font-semibold text-primary group-hover:underline">{SITE.email}</p>
        </a>

        <div className="rounded-3xl border border-border bg-card p-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10">
            <Clock className="h-6 w-6 text-primary" />
          </span>
          <h2 className="mt-5 text-xl font-semibold">{t("contact.hours.title")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t("contact.hours.body")}</p>
        </div>
      </section>
    </SiteLayout>
  );
}
