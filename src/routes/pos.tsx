import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Utensils, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/pos")({ component: POSPage });

function POSPage() {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead title={t.seo.pos.title} description={t.seo.pos.description} path="/pos" />
      <Section title={t.pos.heading} subtitle={t.pos.sub} eyebrow="POS">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <Utensils className="h-7 w-7 text-primary" />
            <h3 className="mt-3 text-lg font-semibold">{t.pos.tableTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.pos.tableDesc}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <ShoppingBag className="h-7 w-7 text-primary" />
            <h3 className="mt-3 text-lg font-semibold">{t.pos.nonTableTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.pos.nonTableDesc}</p>
          </div>
        </div>
      </Section>
      <Section title={t.pos.capabilitiesTitle}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.pos.capabilities.map((c) => (
            <div key={c} className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />{c}
            </div>
          ))}
        </div>
      </Section>
      <CTASection title={t.homeSections.finalCtaTitle} />
    </>
  );
}
