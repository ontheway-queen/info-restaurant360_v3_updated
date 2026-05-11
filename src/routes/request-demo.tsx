import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/Section";
import { DemoForm } from "@/components/DemoForm";

export const Route = createFileRoute("/request-demo")({ component: RequestDemoPage });

function RequestDemoPage() {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead
        title={t.seo.pricing.title}
        description={t.seo.pricing.description}
        path="/pricing"
      />
      <Section title={t.demoForm.heading} subtitle={t.demoForm.sub} eyebrow="Demo">
        <div className="mx-auto max-w-3xl">
          <DemoForm />
        </div>
      </Section>
    </>
  );
}
