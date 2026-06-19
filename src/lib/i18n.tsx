import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "en" | "pt";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.teachers": "Teachers",
  "nav.contact": "Contact",
  "nav.privacy": "Privacy",
  "nav.terms": "Terms",
  "nav.refund": "Refund Policy",
  "cta.whatsapp": "Chat on WhatsApp",
  "cta.book": "Book a free lesson",
  "cta.viewTeachers": "Meet our teachers",
  "lang.switch": "Português",

  "hero.eyebrow": "Real conversations. Real progress.",
  "hero.title": "Speak English with teachers you'll actually look forward to seeing.",
  "hero.subtitle": "Beautiful Teachers connects Brazilian students with charismatic, certified English teachers from around the world — for one-on-one video lessons that feel like a great conversation.",
  "hero.cta.primary": "Talk to a teacher on WhatsApp",
  "hero.cta.secondary": "Browse teachers",

  "stats.students": "Brazilian students",
  "stats.teachers": "Certified teachers",
  "stats.lessons": "Lessons delivered",
  "stats.rating": "Average rating",

  "features.title": "Why students stay",
  "features.subtitle": "Lessons designed around how adults actually learn to speak.",
  "features.f1.title": "Conversation-first",
  "features.f1.body": "No boring textbooks. From lesson one, you're talking — about work, travel, music, life.",
  "features.f2.title": "Teachers who get Brazil",
  "features.f2.body": "Every teacher has experience with Brazilian students and understands the bumps along the way.",
  "features.f3.title": "Flexible scheduling",
  "features.f3.body": "Book and reschedule directly on WhatsApp. Mornings, evenings, weekends — your call.",
  "features.f4.title": "Fair, transparent pricing",
  "features.f4.body": "Pay per lesson in BRL. No subscriptions, no hidden fees, cancel anytime.",

  "teachers.title": "Meet a few of our teachers",
  "teachers.subtitle": "Each teacher is interviewed, certified, and reviewed by our team. Pick someone whose vibe matches yours.",
  "teachers.cta": "Chat about this teacher",
  "teachers.t1.name": "Elona Pearl",
  "teachers.t1.role": "Cambridge CELTA · 6 yrs",
  "teachers.t1.bio": "Specializes in business English and job interview prep. Patient, structured, full of useful expressions.",
  "teachers.t2.name": "Amara",
  "teachers.t2.role": "TEFL · 8 yrs",
  "teachers.t2.bio": "Loves travel English and pronunciation. Her students sound dramatically more natural after a month.",
  "teachers.t3.name": "Eloise",
  "teachers.t3.role": "DELTA · 10 yrs",
  "teachers.t3.bio": "Conversation queen. If you freeze when you have to speak, Eloise is who you want.",
  "teachers.t4.name": "Mei",
  "teachers.t4.role": "TESOL · 5 yrs",
  "teachers.t4.bio": "Focused on intermediate students breaking through the plateau into real fluency.",

  "how.title": "How it works",
  "how.s1.title": "Say oi on WhatsApp",
  "how.s1.body": "Tell us your level, your goals, and the times that work for you.",
  "how.s2.title": "We match you with 2–3 teachers",
  "how.s2.body": "Review their profiles and pick whoever feels right.",
  "how.s3.title": "Start speaking",
  "how.s3.body": "Your first 20-minute lesson is on us. No card needed.",

  "cta.banner.title": "Your first lesson is free.",
  "cta.banner.body": "Send us a message and we'll match you with a teacher today.",

  "contact.title": "Talk to us",
  "contact.subtitle": "We answer every message personally — usually within an hour.",
  "contact.whatsapp.title": "WhatsApp",
  "contact.whatsapp.body": "Fastest way to reach us. Tap to open a chat.",
  "contact.email.title": "Email",
  "contact.email.body": "Prefer writing? Send us a note.",
  "contact.hours.title": "Hours",
  "contact.hours.body": "Mon–Sat · 8:00–22:00 (BRT)",

  "footer.tagline": "English lessons with teachers worth showing up for.",
  "footer.product": "Product",
  "footer.legal": "Legal",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",

  "privacy.title": "Privacy Policy",
  "privacy.updated": "Last updated: June 16, 2026",
  "terms.title": "Terms of Service",
  "terms.updated": "Last updated: June 16, 2026",
  "refund.title": "Refund Policy",
  "refund.updated": "Last updated: June 19, 2026",
};

const pt: Dict = {
  "nav.home": "Início",
  "nav.teachers": "Professores",
  "nav.contact": "Contato",
  "nav.privacy": "Privacidade",
  "nav.terms": "Termos",
  "nav.refund": "Política de Reembolso",
  "cta.whatsapp": "Falar no WhatsApp",
  "cta.book": "Aula experimental grátis",
  "cta.viewTeachers": "Conheça os professores",
  "lang.switch": "English",

  "hero.eyebrow": "Conversas de verdade. Progresso de verdade.",
  "hero.title": "Aprenda inglês com professores que você vai querer reencontrar.",
  "hero.subtitle": "A Beautiful Teachers conecta estudantes brasileiros a professores de inglês carismáticos e certificados do mundo todo — aulas particulares por vídeo que parecem uma ótima conversa.",
  "hero.cta.primary": "Falar com um professor no WhatsApp",
  "hero.cta.secondary": "Ver professores",

  "stats.students": "Alunos brasileiros",
  "stats.teachers": "Professores certificados",
  "stats.lessons": "Aulas realizadas",
  "stats.rating": "Avaliação média",

  "features.title": "Por que os alunos ficam",
  "features.subtitle": "Aulas pensadas em como adultos realmente aprendem a falar.",
  "features.f1.title": "Foco em conversação",
  "features.f1.body": "Nada de livros chatos. Desde a primeira aula, você fala — sobre trabalho, viagem, música, vida.",
  "features.f2.title": "Professores que entendem o Brasil",
  "features.f2.body": "Todos têm experiência com brasileiros e sabem onde a gente costuma travar.",
  "features.f3.title": "Horários flexíveis",
  "features.f3.body": "Agende e remarque pelo WhatsApp. Manhã, noite, fim de semana — você escolhe.",
  "features.f4.title": "Preço justo e transparente",
  "features.f4.body": "Pague por aula em reais. Sem assinatura, sem taxa escondida, cancela quando quiser.",

  "teachers.title": "Conheça alguns dos nossos professores",
  "teachers.subtitle": "Cada professor é entrevistado, certificado e avaliado pela nossa equipe. Escolha quem combina com você.",
  "teachers.cta": "Conversar sobre este professor",
  "teachers.t1.name": "Elona Pearl",
  "teachers.t1.role": "Cambridge CELTA · 6 anos",
  "teachers.t1.bio": "Especialista em inglês para negócios e entrevistas de emprego. Paciente, organizada e cheia de expressões úteis.",
  "teachers.t2.name": "Amara",
  "teachers.t2.role": "TEFL · 8 anos",
  "teachers.t2.bio": "Adora inglês para viagem e pronúncia. Os alunos dela soam muito mais naturais em um mês.",
  "teachers.t3.name": "Eloise",
  "teachers.t3.role": "DELTA · 10 anos",
  "teachers.t3.bio": "Rainha da conversação. Se você trava na hora de falar, a Eloise é a pessoa certa.",
  "teachers.t4.name": "Mei",
  "teachers.t4.role": "TESOL · 5 anos",
  "teachers.t4.bio": "Foco em alunos intermediários que querem sair do platô e finalmente fluir.",

  "how.title": "Como funciona",
  "how.s1.title": "Mande um oi no WhatsApp",
  "how.s1.body": "Conta pra gente seu nível, seus objetivos e os horários que funcionam.",
  "how.s2.title": "Indicamos 2 ou 3 professores",
  "how.s2.body": "Veja os perfis e escolha quem você sentir mais conexão.",
  "how.s3.title": "Comece a falar",
  "how.s3.body": "Sua primeira aula de 20 minutos é por nossa conta. Sem cartão.",

  "cta.banner.title": "Sua primeira aula é grátis.",
  "cta.banner.body": "Mande uma mensagem e a gente te apresenta um professor hoje.",

  "contact.title": "Fale com a gente",
  "contact.subtitle": "Respondemos cada mensagem pessoalmente — geralmente em até uma hora.",
  "contact.whatsapp.title": "WhatsApp",
  "contact.whatsapp.body": "Jeito mais rápido de falar com a gente. Toque para abrir uma conversa.",
  "contact.email.title": "E-mail",
  "contact.email.body": "Prefere escrever? Manda uma mensagem.",
  "contact.hours.title": "Horários",
  "contact.hours.body": "Seg–Sáb · 8:00–22:00 (BRT)",

  "footer.tagline": "Aulas de inglês com professores que valem o seu tempo.",
  "footer.product": "Produto",
  "footer.legal": "Legal",
  "footer.contact": "Contato",
  "footer.rights": "Todos os direitos reservados.",

  "privacy.title": "Política de Privacidade",
  "privacy.updated": "Última atualização: 16 de junho de 2026",
  "terms.title": "Termos de Serviço",
  "terms.updated": "Última atualização: 16 de junho de 2026",
  "refund.title": "Política de Reembolso",
  "refund.updated": "Última atualização: 19 de junho de 2026",
};

const dicts: Record<Locale, Dict> = { en, pt };

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("locale") as Locale | null;
      if (stored === "en" || stored === "pt") setLocaleState(stored);
    } catch {}
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = l === "pt" ? "pt-BR" : "en";
    }
  };

  const t = (key: string) => dicts[locale][key] ?? dicts.en[key] ?? key;

  return <I18nCtx.Provider value={{ locale, setLocale, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
