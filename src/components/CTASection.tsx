"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
}

export function CTASection({ title, subtitle, ctaLabel }: CTASectionProps) {
  const { t } = useLanguage();
  const label = ctaLabel ?? t.nav.requestDemo;
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-[oklch(0.18_0.03_265)] to-[oklch(0.22_0.05_265)] p-10 text-center shadow-xl md:p-16"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <h2 className="relative text-2xl font-extrabold text-white md:text-4xl">{title}</h2>
        {subtitle && (
          <p className="relative mx-auto mt-3 max-w-2xl text-base text-white/70">{subtitle}</p>
        )}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative mt-7 inline-block"
        >
          <Link
            href="/request-demo"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[oklch(0.72_0.18_55)] px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/40"
          >
            {label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
