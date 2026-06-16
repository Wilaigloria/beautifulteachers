import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useI18n, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Beautiful Teachers" },
      { name: "description", content: "The terms that apply when you use the Beautiful Teachers website and lessons." },
    ],
  }),
  component: TermsPage,
});

const content: Record<Locale, { sections: { title: string; body: string }[] }> = {
  en: {
    sections: [
      { title: "1. Agreement", body: "By using this website or booking a lesson, you agree to these Terms. If you do not agree, please do not use the service." },
      { title: "2. The service", body: "Beautiful Teachers introduces students to independent English teachers and helps schedule lessons. We are not an educational institution; teachers are independent professionals." },
      { title: "3. Lessons and payment", body: "Lesson prices are agreed before booking and paid in BRL. Free trial lessons are limited to one per student. Refunds for paid lessons are available if the teacher does not show up." },
      { title: "4. Cancellation", body: "You may cancel or reschedule a lesson up to 12 hours in advance free of charge. Cancellations made later may be billed at the full rate." },
      { title: "5. Acceptable use", body: "You agree to treat teachers and staff with respect. Harassment, discrimination, or illegal behavior result in immediate termination without refund." },
      { title: "6. Intellectual property", body: "All content on this website (text, images, logo) belongs to Beautiful Teachers or our licensors and may not be copied without permission." },
      { title: "7. Limitation of liability", body: "We do our best to provide a great service, but we are not liable for indirect damages arising from use of the service to the maximum extent permitted by law." },
      { title: "8. Governing law", body: "These Terms are governed by the laws of the Federative Republic of Brazil. Disputes will be resolved in the courts of São Paulo, SP." },
      { title: "9. Changes", body: "We may update these Terms. Continued use of the service after changes means you accept the updated Terms." },
      { title: "10. Contact", body: `Questions? Write to ${SITE.email}.` },
    ],
  },
  pt: {
    sections: [
      { title: "1. Aceitação", body: "Ao usar este site ou agendar uma aula, você concorda com estes Termos. Se não concordar, por favor não use o serviço." },
      { title: "2. O serviço", body: "A Beautiful Teachers apresenta alunos a professores independentes de inglês e ajuda no agendamento das aulas. Não somos uma instituição de ensino; os professores são profissionais independentes." },
      { title: "3. Aulas e pagamento", body: "Os preços das aulas são combinados antes do agendamento e pagos em reais. A aula experimental gratuita é limitada a uma por aluno. Aulas pagas têm reembolso caso o professor não compareça." },
      { title: "4. Cancelamento", body: "Você pode cancelar ou remarcar uma aula com até 12 horas de antecedência sem custo. Cancelamentos mais próximos do horário podem ser cobrados integralmente." },
      { title: "5. Uso aceitável", body: "Você concorda em tratar professores e equipe com respeito. Assédio, discriminação ou comportamento ilegal resultam em encerramento imediato, sem reembolso." },
      { title: "6. Propriedade intelectual", body: "Todo o conteúdo deste site (textos, imagens, logo) pertence à Beautiful Teachers ou aos nossos licenciantes e não pode ser copiado sem autorização." },
      { title: "7. Limitação de responsabilidade", body: "Fazemos o nosso melhor para entregar um ótimo serviço, mas não nos responsabilizamos por danos indiretos decorrentes do uso do serviço, na máxima extensão permitida em lei." },
      { title: "8. Lei aplicável", body: "Estes Termos são regidos pelas leis da República Federativa do Brasil. O foro eleito é o da Comarca de São Paulo, SP." },
      { title: "9. Alterações", body: "Podemos atualizar estes Termos. O uso contínuo do serviço após alterações significa que você aceita os Termos atualizados." },
      { title: "10. Contato", body: `Dúvidas? Escreva para ${SITE.email}.` },
    ],
  },
};

function TermsPage() {
  const { t, locale } = useI18n();
  const sections = content[locale].sections;
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-display text-5xl sm:text-6xl font-semibold">{t("terms.title")}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{t("terms.updated")}</p>
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
