import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/Section";
import { DemoForm } from "@/components/DemoForm";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

function PricingPage() {
  const { t, lang } = useLanguage();
  const isBn = lang === "bn";

  const plans = [
    {
      name: isBn ? "প্রফেশনাল" : "Professional",
      price: "৳500 / month",
      highlighted: true,
      desc: isBn
        ? "বর্ধনশীল রেস্টুরেন্টের জন্য সম্পূর্ণ অপারেশনাল কন্ট্রোল"
        : "For growing restaurants needing full operational control.",

      features: isBn
        ? [
            "এডভান্স POS ও দ্রুত বিলিং",
            "মাল্টিপল পেমেন্ট (ক্যাশ, কার্ড, মোবাইল)",
            "ডিসকাউন্ট, VAT ও সার্ভিস চার্জ",
            "টেবিল অর্ডার ম্যানেজমেন্ট",
            "টেকওয়ে ও ডাইন-ইন অর্ডার",
            "KOT (কিচেন অর্ডার টিকিট)",
            "কিচেন ডিসপ্লে সিস্টেম (KDS)",
            "রিয়েল-টাইম ইনভেন্টরি ট্র্যাকিং",
            "লো স্টক অ্যালার্ট",
            "স্টক অ্যাডজাস্টমেন্ট ও ওয়েস্টেজ ট্র্যাকিং",
            "সাপ্লায়ার ও পারচেজ ম্যানেজমেন্ট",
            "রোল-বেইজড এক্সেস কন্ট্রোল",
            "স্টাফ অ্যাক্টিভিটি ট্র্যাকিং",
            "শিফট ও অ্যাটেনডেন্স ম্যানেজমেন্ট",
            "ডেইলি সেলস ও প্রফিট রিপোর্ট",
            "এক্সপেন্স ম্যানেজমেন্ট",
            "বেসিক অ্যাকাউন্টিং রিপোর্ট",
            "সেলস রিপোর্ট (ডেইলি/উইকলি/মন্তলি)",
            "টপ সেলিং আইটেম রিপোর্ট",
            "অর্ডার হিস্টোরি ও লগ",
            "সিকিউর ক্লাউড সিস্টেম",
            "ডাটা ব্যাকআপ ও রিকভারি",
            "প্রায়োরিটি সাপোর্ট",
          ]
        : [
            "Advanced POS & fast billing",
            "Multiple payment methods (cash, card, mobile)",
            "Discounts, VAT & service charge support",
            "Table order management",
            "Takeaway & dine-in orders",
            "KOT (Kitchen Order Ticket)",
            "Kitchen display system (KDS)",
            "Real-time inventory tracking",
            "Low stock alerts",
            "Stock adjustment & wastage tracking",
            "Supplier & purchase management",
            "Role-based access control",
            "Staff activity tracking",
            "Shift & attendance management",
            "Daily sales & profit tracking",
            "Expense management",
            "Basic accounting reports",
            "Sales reports (daily/weekly/monthly)",
            "Top-selling items report",
            "Order history & logs",
            "Secure cloud-based system",
            "Data backup & recovery",
            "Priority support",
          ],
    },

    {
      name: isBn ? "এন্টারপ্রাইজ" : "Enterprise",
      price: isBn ? "আলোচনা সাপেক্ষ" : "Negotiatable",
      highlighted: false,
      desc: isBn
        ? "উন্নত ইনসাইট ও কাস্টম সল্যুশনের জন্য"
        : "For restaurants needing advanced insights & tailored solutions.",

      features: isBn
        ? [
            "সব প্রফেশনাল ফিচার",
            "অ্যাডভান্স রিপোর্ট ও অ্যানালিটিক্স ড্যাশবোর্ড",
            "সেলস ট্রেন্ড ও পারফরম্যান্স ইনসাইট",
            "কাস্টম ওয়ার্কফ্লো ও ফিচার রিকোয়েস্ট",
            "অ্যাডভান্স রোল ও পারমিশন কন্ট্রোল",
            "কাস্টম রিপোর্ট জেনারেশন",
            "API এক্সেস ও থার্ড-পার্টি ইন্টিগ্রেশন",
            "অ্যাকাউন্টিং সফটওয়্যার ইন্টিগ্রেশন",
            "অটোমেশন ও ডাটা সিঙ্ক",
            "অ্যাডভান্স ডাটা এক্সপোর্ট",
            "অডিট লগ ও অ্যাক্টিভিটি ট্র্যাকিং",
            "ডেডিকেটেড সাপোর্ট",
            "ফাস্ট রেসপন্স SLA",
            "অনবোর্ডিং ও ট্রেনিং সাপোর্ট",
          ]
        : [
            "Everything in Professional",
            "Advanced reports & analytics dashboard",
            "Sales trends & performance insights",
            "Custom workflows & feature requests",
            "Advanced role & permission control",
            "Custom report generation",
            "API access & third-party integrations",
            "Accounting software integration",
            "Automation & data sync",
            "Advanced data export options",
            "Audit logs & activity tracking",
            "Dedicated support assistance",
            "Faster response SLA",
            "Onboarding & training support",
          ],
    },
  ];

  return (
    <>
      <SEOHead
        title={t.seo.pricing?.title}
        description={t.seo.pricing?.description}
        path="/pricing"
      />

      <Section
        title={isBn ? "প্রাইসিং প্ল্যান" : "Pricing Plans"}
        subtitle={
          isBn
            ? "আপনার রেস্টুরেন্টের জন্য সেরা প্ল্যান বেছে নিন"
            : "Choose the best plan for your restaurant"
        }
        eyebrow="Pricing"
      >
        {/* PRICING GRID */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-slate-900 to-slate-950 text-white border-orange-500"
                  : "bg-white border-slate-200"
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="flex justify-center mb-4">
                  <span className="flex items-center gap-1 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    {isBn ? "সবচেয়ে জনপ্রিয়" : "Most Popular"}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>

              <p className="text-sm mt-2 opacity-80">{plan.desc}</p>

              <p className="text-3xl font-bold mt-5">{plan.price}</p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 items-start">
                    <Check className="w-4 h-4 mt-1 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
