import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 md:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-10 max-w-3xl text-center"
      >
        {eyebrow && (
          <div className="mb-3 inline-flex rounded-full border border-primary/20 bg-[color:var(--soft-bg)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}
