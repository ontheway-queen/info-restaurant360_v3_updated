"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export default function Page() {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead
        title={t.seo.accounts.title}
        description={t.seo.accounts.description}
        path="/accounts-finance"
      />
      <Section title={t.accounts.heading} subtitle={t.accounts.sub} eyebrow="Accounts">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.accounts.features.map((f) => (
            <div
              key={f}
              className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
              {f}
            </div>
          ))}
        </div>
      </Section>
      <CTASection title={t.homeSections.finalCtaTitle} />
    </>
  );
}
