"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/Section";
import { DemoForm } from "@/components/DemoForm";

export default function Page() {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead
        title={t.seo.contact.title}
        description={t.seo.contact.description}
        path="/contact"
      />
      <Section title={t.contact.heading} subtitle={t.contact.sub} eyebrow="Contact">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            {[
              { icon: MapPin, value: t.contact.address },
              { icon: Phone, value: t.contact.phone },
              { icon: Mail, value: t.contact.email },
            ].map(({ icon: Icon, value }) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <DemoForm />
          </div>
        </div>
      </Section>
    </>
  );
}
