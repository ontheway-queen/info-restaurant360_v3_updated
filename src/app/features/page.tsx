"use client";

import { Settings } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";

export default function Page() {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead
        title={t.seo.features.title}
        description={t.seo.features.description}
        path="/features"
      />
      <Section
        title={t.homeSections.featuresTitle}
        subtitle={t.homeSections.featuresSub}
        eyebrow="✦"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {t.modules.map((m, i) => (
            <FeatureCard key={m.title} icon={Settings} title={m.title} desc={m.desc} index={i} />
          ))}
        </div>
      </Section>
      <Section title={t.administration.heading} subtitle={t.administration.sub}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.administration.features.map((f) => (
            <div
              key={f}
              className="rounded-xl border border-border bg-card p-4 text-sm font-medium"
            >
              {f}
            </div>
          ))}
        </div>
      </Section>
      <CTASection title={t.homeSections.finalCtaTitle} />
    </>
  );
}
