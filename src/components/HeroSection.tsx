import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { AnimatedDashboardMockup } from "./AnimatedDashboardMockup";

export function HeroSection() {
  const { t } = useLanguage();
  const words = t.hero.title.split(" ");
  const half = Math.ceil(words.length / 2);

  const firstHalf = words.slice(0, half).join(" ");
  const secondHalf = words.slice(half).join(" ");
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background))]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 md:pt-24 lg:grid-cols-2 lg:pb-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-[color:var(--soft-bg)] px-3 py-1 text-xs font-semibold text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" /> {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            <span className="text-black dark:text-white">{firstHalf} </span>

            <span className="bg-gradient-to-r from-primary to-[oklch(0.72_0.18_55)] bg-clip-text text-transparent">
              {secondHalf}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/request-demo"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[oklch(0.72_0.18_55)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              {t.hero.secondaryCta}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative"
        >
          <AnimatedDashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
