import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/reports")({ component: ReportsPage });

function ReportsPage() {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead title={t.seo.reports.title} description={t.seo.reports.description} path="/reports" />
      <Section title={t.reports.heading} subtitle={t.reports.sub} eyebrow="Reports">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.reports.list.map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-lg transition-shadow"
            >
              <FileText className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <h3 className="mt-3 text-sm font-semibold text-foreground">{r}</h3>
            </motion.div>
          ))}
        </div>
      </Section>
      <CTASection title={t.homeSections.finalCtaTitle} />
    </>
  );
}
