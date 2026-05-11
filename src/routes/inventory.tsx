import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/inventory")({ component: InventoryPage });

function InventoryPage() {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead title={t.seo.inventory.title} description={t.seo.inventory.description} path="/inventory" />
      <Section title={t.inventory.heading} subtitle={t.inventory.sub} eyebrow="Inventory">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.inventory.features.map((f) => (
            <div key={f} className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />{f}
            </div>
          ))}
        </div>
      </Section>
      <Section title={t.inventory.supplierTitle}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.inventory.supplierFeatures.map((f) => (
            <div key={f} className="rounded-xl border border-border bg-card p-4 text-sm font-medium">{f}</div>
          ))}
        </div>
      </Section>
      <Section title={t.hr.heading} subtitle={t.hr.sub}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.hr.features.map((f) => (
            <div key={f} className="rounded-xl border border-border bg-card p-4 text-sm font-medium">{f}</div>
          ))}
        </div>
      </Section>
      <CTASection title={t.homeSections.finalCtaTitle} />
    </>
  );
}
