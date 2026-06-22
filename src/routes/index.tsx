import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Sparkles, Heart, Clock, Wallet, ArrowRight, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import heroImg from "@/assets/hero-teacher.jpg";
import t1Asset from "@/assets/teacher-1.jpg.asset.json";
import t2Asset from "@/assets/teacher-2.jpg.asset.json";
import t3Asset from "@/assets/teacher-3.jpg.asset.json";
import t4Asset from "@/assets/teacher-4.jpg.asset.json";
const t1 = t1Asset.url;
const t2 = t2Asset.url;
const t3 = t3Asset.url;
const t4 = t4Asset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beautiful Teachers — Learn English with teachers you'll love" },
      { name: "description", content: "Beautiful Teachers connects Brazilian students with charismatic, certified English teachers for one-on-one video lessons. First class free." },
      { property: "og:title", content: "Beautiful Teachers — Learn English with teachers you'll love" },
      { property: "og:description", content: "One-on-one English lessons with handpicked teachers, designed for Brazilian students." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <Features />
      <TeachersPreview />
      <HowItWorks />
      <Pricing />
      <CtaBanner />
      <ManagerNote />
    </SiteLayout>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            {t("hero.eyebrow")}
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            {t("hero.title").split(" ").slice(0, -3).join(" ")}{" "}
            <span className="text-gradient-pink">
              {t("hero.title").split(" ").slice(-3).join(" ")}
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink("Oi! Quero saber mais sobre as aulas de inglês.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-pink hover:opacity-95"
            >
              <MessageCircle className="h-4 w-4" />
              {t("hero.cta.primary")}
            </a>
            <Link
              to="/teachers"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-accent"
            >
              {t("hero.cta.secondary")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[t1, t2, t3, t4].map((src, i) => (
                <img key={i} src={src} alt="" className="h-8 w-8 rounded-full border-2 border-background object-cover" />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
              <span className="ml-1 font-medium text-foreground">4.9</span>
              <span>· 1,200+ alunos</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-primary/15" aria-hidden />
          <img
            src={heroImg}
            alt="An English teacher smiling at her desk, ready for a video lesson"
            width={1024}
            height={1024}
            className="relative rounded-[2rem] object-cover shadow-pink"
          />
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card border border-border shadow-soft px-4 py-3 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10">
              <Heart className="h-5 w-5 text-primary" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">First lesson</p>
              <p className="text-sm font-semibold">100% free, no card</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = useI18n();
  const items = [
    { v: "1,200+", k: "stats.students" },
    { v: "85", k: "stats.teachers" },
    { v: "47,000+", k: "stats.lessons" },
    { v: "4.9 / 5", k: "stats.rating" },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.k}>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-primary">{i.v}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{t(i.k)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const { t } = useI18n();
  const items = [
    { icon: Sparkles, k: "f1" },
    { icon: Heart, k: "f2" },
    { icon: Clock, k: "f3" },
    { icon: Wallet, k: "f4" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl sm:text-5xl font-semibold">{t("features.title")}</h2>
        <p className="mt-4 text-muted-foreground text-lg">{t("features.subtitle")}</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, k }) => (
          <div key={k} className="rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition-shadow">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{t(`features.${k}.title`)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(`features.${k}.body`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeachersPreview() {
  const { t } = useI18n();
  const teachers = [
    { img: t1, k: "t1" },
    { img: t2, k: "t2" },
    { img: t3, k: "t3" },
    { img: t4, k: "t4" },
  ];
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold">{t("teachers.title")}</h2>
            <p className="mt-4 text-muted-foreground text-lg">{t("teachers.subtitle")}</p>
          </div>
          <Link
            to="/teachers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            {t("cta.viewTeachers")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map(({ img, k }) => (
            <article key={k} className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-pink transition-shadow group">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={img} alt={t(`teachers.${k}.name`)} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">{t(`teachers.${k}.name`)}</h3>
                <p className="text-xs uppercase tracking-widest text-primary mt-1">{t(`teachers.${k}.role`)}</p>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{t(`teachers.${k}.bio`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { t } = useI18n();
  const steps = ["s1", "s2", "s3"];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <h2 className="font-display text-4xl sm:text-5xl font-semibold text-center">{t("how.title")}</h2>
      <div className="mt-14 grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={s} className="relative rounded-2xl border border-border bg-card p-8">
            <span className="absolute -top-4 left-8 grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-display text-sm font-bold shadow-pink">
              {i + 1}
            </span>
            <h3 className="mt-2 text-xl font-semibold">{t(`how.${s}.title`)}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{t(`how.${s}.body`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-primary px-8 py-14 sm:px-16 sm:py-20 text-center shadow-pink">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <h2 className="relative font-display text-4xl sm:text-5xl font-semibold text-primary-foreground">
          {t("cta.banner.title")}
        </h2>
        <p className="relative mt-4 text-primary-foreground/90 max-w-xl mx-auto">{t("cta.banner.body")}</p>
        <a
          href={whatsappLink("Oi! Quero minha aula experimental gratuita.")}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-foreground hover:scale-105 transition-transform"
        >
          <MessageCircle className="h-4 w-4 text-primary" />
          {t("cta.whatsapp")}
        </a>
      </div>
    </section>
  );
}
