import { motion } from "framer-motion";

interface WorkflowTimelineProps {
  steps: readonly string[];
}

export function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  return (
    <div className="relative">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="relative rounded-xl border border-border bg-card p-4 text-center shadow-sm"
          >
            <div className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-[oklch(0.72_0.18_55)] text-sm font-bold text-primary-foreground shadow-md">
              {i + 1}
            </div>
            <div className="text-sm font-semibold text-foreground">{step}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
