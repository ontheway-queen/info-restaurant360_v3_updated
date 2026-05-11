import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/order-management")({ component: OrderPage });

function OrderPage() {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead title={t.seo.orders.title} description={t.seo.orders.description} path="/order-management" />
      <Section title={t.orderManagement.heading} subtitle={t.orderManagement.sub} eyebrow="Orders">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.orderManagement.features.map((f) => (
            <div key={f} className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />{f}
            </div>
          ))}
        </div>
      </Section>
      <Section title={t.orderManagement.tableTitle}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.orderManagement.tableFeatures.map((f) => (
            <div key={f} className="rounded-xl border border-border bg-card p-4 text-sm font-medium">{f}</div>
          ))}
        </div>
      </Section>
      <CTASection title={t.homeSections.finalCtaTitle} />
    </>
  );
}
