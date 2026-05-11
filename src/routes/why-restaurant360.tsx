import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/why-restaurant360")({ component: WhyPage });

function WhyPage() {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead title={t.seo.why.title} description={t.seo.why.description} path="/why-restaurant360" />
      <Section title={t.why.heading} subtitle={t.why.sub} eyebrow="✦">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.why.sections.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-lg transition-shadow">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">{i + 1}</div>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title={t.homeSections.whyTitle}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.benefits.map((b) => (
            <div key={b} className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />{b}
            </div>
          ))}
        </div>
      </Section>
      <CTASection title={t.why.cta} />
    </>
  );
}
