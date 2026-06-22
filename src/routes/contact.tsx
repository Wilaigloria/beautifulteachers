import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Mail, Clock, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = t("contact.form.error.required");
    if (name.trim().length > 100) e.name = "Name must be under 100 characters.";
    if (!email.trim()) e.email = t("contact.form.error.required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || email.trim().length > 255) {
      e.email = t("contact.form.error.email");
    }
    if (!message.trim()) e.message = t("contact.form.error.required");
    if (message.trim().length > 1000) e.message = "Message must be under 1000 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const text = `Hi my name is ${name.trim()} from Beautiful Teachers site. My email is ${email.trim()}, and this is my message: ${message.trim()}`;
    const url = `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

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

      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pb-24">
        <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8 space-y-6">
          <h2 className="font-display text-2xl font-semibold">{t("contact.title")}</h2>
          <div className="space-y-2">
            <Label htmlFor="name">{t("contact.form.name")}</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("contact.form.name")}
              maxLength={100}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t("contact.form.email")}</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("contact.form.email")}
              maxLength={255}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t("contact.form.message")}</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("contact.form.message")}
              maxLength={1000}
              rows={5}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
          </div>
          <Button type="submit" className="w-full rounded-full bg-gradient-primary text-primary-foreground shadow-pink hover:opacity-95">
            <Send className="h-4 w-4" />
            {t("contact.form.send")}
          </Button>
        </form>
      </section>
    </SiteLayout>
  );
}
