import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import t1 from "@/assets/teacher-1.jpg";
import t2 from "@/assets/teacher-2.jpg";
import t3 from "@/assets/teacher-3.jpg";
import t4 from "@/assets/teacher-4.jpg";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Our Teachers — Beautiful Teachers" },
      { name: "description", content: "Meet the handpicked, certified English teachers ready to talk with you. CELTA, DELTA, TEFL, TESOL." },
      { property: "og:title", content: "Our Teachers — Beautiful Teachers" },
      { property: "og:description", content: "Browse our certified English teachers and pick the one that matches your vibe." },
    ],
  }),
  component: TeachersPage,
});

function TeachersPage() {
  const { t } = useI18n();
  const teachers = [
    { img: t1, k: "t1", languages: "EN, FR" },
    { img: t2, k: "t2", languages: "EN, PT-BR" },
    { img: t3, k: "t3", languages: "EN, ES" },
    { img: t4, k: "t4", languages: "EN, ZH" },
  ];
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-display text-5xl sm:text-6xl font-semibold max-w-3xl">
            {t("teachers.title")}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{t("teachers.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map(({ img, k, languages }) => (
            <article key={k} className="rounded-3xl bg-card border border-border overflow-hidden hover:shadow-pink transition-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={img} alt={t(`teachers.${k}.name`)} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl font-semibold">{t(`teachers.${k}.name`)}</h2>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-semibold">4.9</span>
                  </div>
                </div>
                <p className="text-xs uppercase tracking-widest text-primary mt-1">{t(`teachers.${k}.role`)}</p>
                <p className="mt-3 text-sm text-muted-foreground">{t(`teachers.${k}.bio`)}</p>
                <p className="mt-4 text-xs text-muted-foreground">🌍 {languages}</p>
                <a
                  href={whatsappLink(`Oi! Quero saber mais sobre a professora ${t(`teachers.${k}.name`)}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft w-full justify-center"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("teachers.cta")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
