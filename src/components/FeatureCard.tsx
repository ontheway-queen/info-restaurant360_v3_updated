import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  index?: number;
}

export function FeatureCard({ icon: Icon, title, desc, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary transition-transform group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-1.5 text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}
