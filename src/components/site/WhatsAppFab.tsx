import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function WhatsAppFab() {
  const { t } = useI18n();
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("cta.whatsapp")}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[oklch(var(--whatsapp))] px-5 py-3 text-sm font-semibold text-white shadow-pink hover:scale-105 transition-transform"
      style={{ backgroundColor: "oklch(0.68 0.17 150)" }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
