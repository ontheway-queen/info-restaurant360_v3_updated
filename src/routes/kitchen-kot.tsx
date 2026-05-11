import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/Section";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/kitchen-kot")({ component: KitchenPage });

function KitchenPage() {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead title={t.seo.kitchen.title} description={t.seo.kitchen.description} path="/kitchen-kot" />
      <Section title={t.kitchenKot.heading} subtitle={t.kitchenKot.sub} eyebrow="KOT">
        <WorkflowTimeline steps={t.kitchenKot.flow} />
      </Section>
      <Section title={t.foodManagement.heading} subtitle={t.foodManagement.sub}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[...t.kitchenKot.features, ...t.foodManagement.features].map((f) => (
            <div key={f} className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />{f}
            </div>
          ))}
        </div>
      </Section>
      <CTASection title={t.homeSections.finalCtaTitle} />
    </>
  );
}
