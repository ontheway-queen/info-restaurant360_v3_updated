import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Zap, Utensils, ChefHat, Boxes, Wallet, BarChart3, Users, ShieldCheck,
  CreditCard, Receipt, Building2, Layers, Truck, Settings,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/HeroSection";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({ component: Index });

const statIcons = [Zap, Utensils, ChefHat, Boxes, Wallet, BarChart3];
const moduleIcons = [
  BarChart3, CreditCard, Utensils, Receipt, Layers, Layers, ChefHat, Layers,
  Utensils, Layers, Utensils, Layers, Boxes, Boxes, Receipt, Boxes, Boxes,
  Truck, Users, Wallet, Wallet, Building2, CreditCard, Wallet, BarChart3, ShieldCheck,
];

function Index() {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead title={t.seo.home.title} description={t.seo.home.description} path="/" />
      <HeroSection />

      <Section title={t.homeSections.featuresTitle} subtitle={t.homeSections.featuresSub} eyebrow="✦">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.stats.map((s, i) => (
            <FeatureCard key={s.title} icon={statIcons[i]} title={s.title} desc={s.desc} index={i} />
          ))}
        </div>
      </Section>

      <Section title={t.homeSections.whyTitle} subtitle={t.homeSections.whySub}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.benefits.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border border-border bg-gradient-to-br from-card to-secondary/40 p-4 text-sm font-medium text-foreground shadow-sm"
            >
              <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">{i + 1}</div>
              {b}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title={t.dashboard.heading} subtitle={t.dashboard.sub}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {t.dashboard.features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary"><BarChart3 className="h-4 w-4" /></span>
              <span className="text-sm font-medium">{f}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section eyebrow="✦" title={t.homeSections.featuresTitle}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {t.modules.map((m, i) => (
            <FeatureCard key={m.title} icon={moduleIcons[i] ?? Settings} title={m.title} desc={m.desc} index={i} />
          ))}
        </div>
      </Section>

      <Section title={t.comparison.heading} subtitle={t.comparison.sub}>
        <ComparisonTable />
      </Section>

      <CTASection title={t.homeSections.finalCtaTitle} subtitle={t.homeSections.finalCtaSub} ctaLabel={t.homeSections.finalCtaBtn} />
    </>
  );
}
