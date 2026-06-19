import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useI18n, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Beautiful Teachers" },
      { name: "description", content: "How refunds work at Beautiful Teachers: eligibility, timelines, and how to request one." },
    ],
  }),
  component: RefundPage,
});

const content: Record<Locale, { sections: { title: string; body: string }[] }> = {
  en: {
    sections: [
      { title: "1. Free trial lesson", body: "Your first 20-minute lesson is free. No payment is collected, so no refund is needed." },
      { title: "2. 7-day satisfaction guarantee", body: "If you are not satisfied with your first paid lesson, contact us within 7 days and we will refund 100% of that lesson — no questions asked." },
      { title: "3. Lesson packages", body: "Unused lessons in a prepaid package can be refunded on a pro-rata basis at any time. Used lessons are billed at the standard single-lesson rate; the remaining balance is returned to your original payment method." },
      { title: "4. Cancellations and rescheduling", body: "Lessons cancelled or rescheduled at least 12 hours in advance are fully refundable or rebookable. Lessons cancelled with less than 12 hours notice are non-refundable, but we will always try to find a solution." },
      { title: "5. Teacher no-shows or technical issues on our end", body: "If a teacher does not show up, or a lesson cannot proceed due to a technical problem on our side, that lesson is refunded in full or rescheduled at your choice." },
      { title: "6. How to request a refund", body: `Send us a WhatsApp message or email ${SITE.email} with your name and the lesson date. Refunds are processed within 5–10 business days to the original payment method.` },
      { title: "7. Changes to this policy", body: "We may update this policy from time to time. The \"last updated\" date at the top always reflects the latest version." },
      { title: "8. Contact", body: `Questions about a refund? Reach us on WhatsApp at ${SITE.whatsappDisplay} or email ${SITE.email}.` },
    ],
  },
  pt: {
    sections: [
      { title: "1. Aula experimental gratuita", body: "Sua primeira aula de 20 minutos é gratuita. Não há cobrança, então não há reembolso necessário." },
      { title: "2. Garantia de satisfação de 7 dias", body: "Se você não ficar satisfeito com sua primeira aula paga, entre em contato em até 7 dias e devolvemos 100% do valor — sem perguntas." },
      { title: "3. Pacotes de aulas", body: "Aulas não utilizadas em um pacote pré-pago podem ser reembolsadas de forma proporcional a qualquer momento. As aulas já realizadas são cobradas pelo valor avulso padrão; o saldo restante é devolvido na forma de pagamento original." },
      { title: "4. Cancelamentos e remarcações", body: "Aulas canceladas ou remarcadas com pelo menos 12 horas de antecedência são totalmente reembolsáveis ou reagendáveis. Cancelamentos com menos de 12 horas não são reembolsáveis, mas sempre tentaremos encontrar uma solução." },
      { title: "5. Ausência do professor ou problemas técnicos por nossa parte", body: "Se o professor não comparecer, ou se a aula não puder acontecer por um problema técnico do nosso lado, a aula é reembolsada integralmente ou remarcada conforme sua preferência." },
      { title: "6. Como solicitar um reembolso", body: `Mande uma mensagem no WhatsApp ou um e-mail para ${SITE.email} com seu nome e a data da aula. Reembolsos são processados em 5 a 10 dias úteis na forma de pagamento original.` },
      { title: "7. Alterações nesta política", body: "Podemos atualizar esta política de tempos em tempos. A data de \"última atualização\" no topo sempre reflete a versão mais recente." },
      { title: "8. Contato", body: `Dúvidas sobre reembolso? Fale com a gente no WhatsApp ${SITE.whatsappDisplay} ou por e-mail em ${SITE.email}.` },
    ],
  },
};

function RefundPage() {
  const { t, locale } = useI18n();
  const sections = content[locale].sections;
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-display text-5xl sm:text-6xl font-semibold">{t("refund.title")}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{t("refund.updated")}</p>
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
