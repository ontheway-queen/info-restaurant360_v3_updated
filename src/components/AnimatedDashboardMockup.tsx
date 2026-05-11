import { motion } from "framer-motion";
import { TrendingUp, ShoppingBag, ChefHat, Package, Wallet, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { AnimatedCounter } from "./AnimatedCounter";

export function AnimatedDashboardMockup() {
  const { t, lang } = useLanguage();
  const fmt = (n: number) => (lang === "bn" ? n.toLocaleString("bn-BD") : n.toLocaleString());

  const items = [
    { name: lang === "bn" ? "চিকেন বিরিয়ানি" : "Chicken Biryani", qty: 42, pct: 92 },
    { name: lang === "bn" ? "বিফ বার্গার" : "Beef Burger", qty: 31, pct: 76 },
    { name: lang === "bn" ? "ভেজ পাস্তা" : "Veg Pasta", qty: 24, pct: 58 },
    { name: lang === "bn" ? "ক্যাপুচিনো" : "Cappuccino", qty: 19, pct: 42 },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative rounded-2xl border border-border bg-card p-5 shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div>
            <div className="text-xs text-muted-foreground">{lang === "bn" ? "ড্যাশবোর্ড" : "Dashboard"}</div>
            <div className="text-sm font-semibold">RESTAURANT360</div>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--warning)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--success)]" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <StatCard icon={<TrendingUp className="h-4 w-4" />} label={t.hero.stats.sales} value={<><span>৳</span><AnimatedCounter value={48230} /></>} accent />
          <StatCard icon={<ShoppingBag className="h-4 w-4" />} label={t.hero.stats.active} value={<AnimatedCounter value={18} />} />
          <StatCard icon={<ChefHat className="h-4 w-4" />} label={t.hero.stats.ready} value={<AnimatedCounter value={7} />} />
          <StatCard icon={<Wallet className="h-4 w-4" />} label={t.hero.stats.pending} value={<><span>৳</span><AnimatedCounter value={6420} /></>} />
        </div>

        <div className="mt-4 rounded-xl border border-border bg-secondary/50 p-3">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold">
            <span>{lang === "bn" ? "টপ আইটেম" : "Top Items"}</span>
            <span className="text-muted-foreground">{lang === "bn" ? "আজ" : "Today"}</span>
          </div>
          <div className="space-y-2">
            {items.map((it, i) => (
              <div key={it.name}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="font-medium">{it.name}</span>
                  <span className="text-muted-foreground">{fmt(it.qty)}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${it.pct}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-[oklch(0.72_0.18_55)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-card p-3">
          <div className="flex items-center gap-2 text-xs">
            <Package className="h-4 w-4 text-[var(--warning)]" />
            <span>{t.hero.stats.lowStock}</span>
          </div>
          <span className="rounded-full bg-[var(--warning)]/15 px-2 py-0.5 text-xs font-semibold text-[var(--warning)]">3</span>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
        transition={{ x: { duration: 0.6, delay: 0.4 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -left-6 top-24 hidden rounded-xl border border-border bg-card p-3 shadow-xl md:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--success)]/15 text-[var(--success)]"><ChefHat className="h-4 w-4" /></div>
          <div>
            <div className="text-[10px] text-muted-foreground">{t.hero.stats.ready}</div>
            <div className="text-sm font-bold"><AnimatedCounter value={7} /></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
        transition={{ x: { duration: 0.6, delay: 0.5 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -right-6 bottom-24 hidden rounded-xl border border-border bg-card p-3 shadow-xl md:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary"><Clock className="h-4 w-4" /></div>
          <div>
            <div className="text-[10px] text-muted-foreground">{t.hero.stats.active}</div>
            <div className="text-sm font-bold"><AnimatedCounter value={18} /></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({ icon, label, value, accent }: { icon: React.ReactNode; label: string; value: React.ReactNode; accent?: boolean }) {
  return (
    <div className={`rounded-xl border border-border p-3 ${accent ? "bg-gradient-to-br from-primary/10 to-transparent" : "bg-card"}`}>
      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <span className={accent ? "text-primary" : ""}>{icon}</span>
        <span>{label}</span>
      </div>
      <div className="mt-1 text-lg font-bold tracking-tight">{value}</div>
    </div>
  );
}
