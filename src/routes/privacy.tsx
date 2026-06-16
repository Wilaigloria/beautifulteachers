import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useI18n, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Beautiful Teachers" },
      { name: "description", content: "How Beautiful Teachers collects, uses, and protects your personal information." },
    ],
  }),
  component: PrivacyPage,
});

const content: Record<Locale, { sections: { title: string; body: string }[] }> = {
  en: {
    sections: [
      { title: "1. Who we are", body: `Beautiful Teachers (\"we\", \"us\") operates this website and connects students with independent English teachers. You can reach us at ${SITE.email}.` },
      { title: "2. Information we collect", body: "We collect the name, email, phone number, and any details you share with us when you message us on WhatsApp, email, or this website. We also collect basic analytics (pages visited, device type) to improve the site." },
      { title: "3. How we use your information", body: "To respond to your messages, match you with a teacher, schedule lessons, send service-related updates, and improve our website. We do not sell your personal data." },
      { title: "4. WhatsApp communications", body: "When you click any WhatsApp link or button on this site, you are taken to WhatsApp. Conversations there are governed by Meta's WhatsApp privacy policy in addition to ours." },
      { title: "5. Sharing", body: "We share the minimum information needed with the teachers we match you with (typically: first name, level, goals, schedule). Service providers (e.g. email, analytics, payment processors) may process data on our behalf under confidentiality agreements." },
      { title: "6. Your rights (LGPD / GDPR)", body: "You can request access, correction, deletion, or portability of your personal data at any time by writing to us. You can also withdraw consent and object to processing." },
      { title: "7. Data retention", body: "We keep your data only as long as needed for the purposes above or as required by law. Inactive accounts are deleted after 24 months." },
      { title: "8. Cookies", body: "We use essential cookies to make the site work and may use analytics cookies to understand traffic. You can control cookies through your browser." },
      { title: "9. Changes", body: "We may update this policy. The \"last updated\" date at the top will always reflect the latest version." },
      { title: "10. Contact", body: `Questions about privacy? Write to ${SITE.email}.` },
    ],
  },
  pt: {
    sections: [
      { title: "1. Quem somos", body: `A Beautiful Teachers (\"nós\") opera este site e conecta alunos a professores independentes de inglês. Você pode falar com a gente em ${SITE.email}.` },
      { title: "2. Informações que coletamos", body: "Coletamos nome, e-mail, telefone e qualquer informação que você compartilhe ao falar com a gente pelo WhatsApp, e-mail ou pelo site. Também coletamos dados básicos de navegação (páginas visitadas, tipo de dispositivo) para melhorar o site." },
      { title: "3. Como usamos suas informações", body: "Para responder suas mensagens, indicar um professor, agendar aulas, enviar avisos sobre o serviço e melhorar o site. Não vendemos seus dados pessoais." },
      { title: "4. Comunicações no WhatsApp", body: "Ao clicar em qualquer link ou botão de WhatsApp neste site, você é direcionado para o WhatsApp. As conversas lá também são regidas pela política de privacidade do WhatsApp/Meta." },
      { title: "5. Compartilhamento", body: "Compartilhamos com os professores apenas o mínimo necessário (geralmente: primeiro nome, nível, objetivos, horários). Fornecedores (e-mail, analytics, pagamentos) podem processar dados em nosso nome sob acordo de confidencialidade." },
      { title: "6. Seus direitos (LGPD)", body: "Você pode pedir a qualquer momento acesso, correção, exclusão ou portabilidade dos seus dados. Você também pode revogar consentimento e se opor ao tratamento." },
      { title: "7. Retenção", body: "Mantemos seus dados apenas pelo tempo necessário para as finalidades acima ou conforme exigido por lei. Contas inativas são excluídas após 24 meses." },
      { title: "8. Cookies", body: "Usamos cookies essenciais para o site funcionar e podemos usar cookies de analytics para entender o tráfego. Você pode controlar cookies no seu navegador." },
      { title: "9. Alterações", body: "Podemos atualizar esta política. A data de \"última atualização\" no topo sempre refletirá a versão mais recente." },
      { title: "10. Contato", body: `Dúvidas sobre privacidade? Escreva para ${SITE.email}.` },
    ],
  },
};

function PrivacyPage() {
  const { t, locale } = useI18n();
  const sections = content[locale].sections;
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-display text-5xl sm:text-6xl font-semibold">{t("privacy.title")}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{t("privacy.updated")}</p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
          </section>
        ))}
      </article>
    </SiteLayout>
  );
}
