import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function ComparisonTable() {
  const { t } = useLanguage();
  const matrix: Array<[boolean | "partial", boolean | "partial", boolean]> = [
    [false, true, true],
    [false, "partial", true],
    [false, "partial", true],
    [false, false, true],
    ["partial", true, true],
    [false, false, true],
    [false, "partial", true],
    [false, false, true],
    [false, false, true],
    [false, false, true],
    ["partial", "partial", true],
    [false, false, true],
    [false, false, true],
    [false, "partial", true],
    [false, false, true],
    [false, "partial", true],
    [false, false, true],
    [false, false, true],
    [false, "partial", true],
    [false, false, true],
  ];

  const cell = (val: boolean | "partial") => {
    if (val === true) return <Check className="mx-auto h-5 w-5 text-[var(--success)]" />;
    if (val === "partial") return <Minus className="mx-auto h-5 w-5 text-[var(--warning)]" />;
    return <X className="mx-auto h-5 w-5 text-muted-foreground/50" />;
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="px-4 py-4 text-left font-semibold text-foreground">{t.comparison.cols[0]}</th>
              <th className="px-4 py-4 text-center font-semibold text-muted-foreground">{t.comparison.cols[1]}</th>
              <th className="px-4 py-4 text-center font-semibold text-muted-foreground">{t.comparison.cols[2]}</th>
              <th className="px-4 py-4 text-center font-bold text-primary">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-[oklch(0.72_0.18_55)] px-3 py-1 text-primary-foreground">
                  {t.comparison.cols[3]}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {t.comparison.rows.map((row, i) => (
              <motion.tr
                key={row}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025, duration: 0.3 }}
                className="border-b border-border last:border-b-0 hover:bg-secondary/30"
              >
                <td className="px-4 py-3 font-medium text-foreground">{row}</td>
                <td className="px-4 py-3 text-center">{cell(matrix[i][0])}</td>
                <td className="px-4 py-3 text-center">{cell(matrix[i][1])}</td>
                <td className="bg-[color:var(--soft-bg)]/40 px-4 py-3 text-center">{cell(matrix[i][2])}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
