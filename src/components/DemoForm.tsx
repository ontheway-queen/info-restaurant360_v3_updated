// import { useState, FormEvent } from "react";
// import { motion } from "framer-motion";
// import { CheckCircle2 } from "lucide-react";
// import { useLanguage } from "@/i18n/LanguageProvider";

// export function DemoForm() {
//   const { t } = useLanguage();
//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     const name = formData.get("name");
//     const restaurant = formData.get("restaurant");
//     const type = formData.get("type");
//     const outlets = formData.get("outlets");
//     const email = formData.get("email");
//     const phone = formData.get("phone");
//     const message = formData.get("message");

//     const text = `
//  New Demo Request For Restaurant 360

//  Name: ${name}
//  Restaurant: ${restaurant}
//  Type: ${type}
//  Outlets: ${outlets}
//  Email: ${email}
//  Phone: ${phone}

// 📝 Message:${message}
// 	`;

//     const encodedText = encodeURIComponent(text);

//     // Replace with your WhatsApp number (no +, no spaces)
//     const whatsappNumber = "8801958398333";

//     window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");

//     setSubmitted(true);
//   };

//   if (submitted) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="rounded-2xl border border-[var(--success)]/30 bg-[var(--success)]/10 p-10 text-center"
//       >
//         <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--success)]" />
//         <p className="mt-4 text-lg font-semibold text-foreground">{t.demoForm.success}</p>
//       </motion.div>
//     );
//   }

//   const field = (
//     name: string,
//     label: string,
//     placeholder: string,
//     type = "text",
//     as: "input" | "textarea" = "input",
//   ) => (
//     <div>
//       <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
//       {as === "textarea" ? (
//         <textarea
//           name={name}
//           placeholder={placeholder}
//           rows={4}
//           className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
//         />
//       ) : (
//         <input
//           name={name}
//           type={type}
//           placeholder={placeholder}
//           className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
//         />
//       )}
//       {errors[name] && <p className="mt-1 text-xs text-destructive">{errors[name]}</p>}
//     </div>
//   );

//   return (
//     <form
//       onSubmit={onSubmit}
//       className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
//     >
//       <div className="grid gap-4 md:grid-cols-2">
//         {field("fullName", t.demoForm.fullName, t.demoForm.placeholders.fullName)}
//         {field("restaurantName", t.demoForm.restaurantName, t.demoForm.placeholders.restaurantName)}
//         {field("businessType", t.demoForm.businessType, t.demoForm.placeholders.businessType)}
//         {field("email", t.demoForm.email, t.demoForm.placeholders.email, "email")}
//         {field("phone", t.demoForm.phone, t.demoForm.placeholders.phone, "tel")}
//         {field("outlets", t.demoForm.outlets, t.demoForm.placeholders.outlets, "number")}
//       </div>
//       <div className="mt-4">
//         {field("message", t.demoForm.message, t.demoForm.placeholders.message, "text", "textarea")}
//       </div>
//       <button
//         type="submit"
//         className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-[oklch(0.72_0.18_55)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] md:w-auto"
//       >
//         {t.demoForm.submit}
//       </button>
//     </form>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, SendIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLanguage } from "@/i18n/LanguageProvider";

export function DemoForm() {
  const { t, lang } = useLanguage();
  const isBn = lang === "bn";

  const demoSchema = z.object({
    fullName: z.string().min(2, isBn ? "পূর্ণ নাম প্রয়োজন" : "Full name is required"),

    restaurantName: z
      .string()
      .min(2, isBn ? "রেস্টুরেন্টের নাম প্রয়োজন" : "Restaurant name is required"),

    businessType: z.string().min(2, isBn ? "ব্যবসার ধরন প্রয়োজন" : "Business type is required"),

    email: z.string().email(isBn ? "একটি সঠিক ইমেইল দিন" : "Invalid email address"),

    phone: z
      .string()
      .min(8, isBn ? "ফোন নম্বর খুব ছোট" : "Phone number is too short")
      .regex(/^\+?\d+$/, isBn ? "সঠিক ফোন নম্বর দিন" : "Invalid phone number"),

    outlets: z.string().min(1, isBn ? "আউটলেট সংখ্যা প্রয়োজন" : "Number of outlets is required"),

    message: z.string().min(5, isBn ? "মেসেজ প্রয়োজন" : "Message is required"),
  });
  const [submitted, setSubmitted] = useState(false);
  type DemoFormValues = z.infer<typeof demoSchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    mode: "onChange",
  });

  const onSubmit = (data: DemoFormValues) => {
    const text = `
 New Demo Request For Restaurant 360

 Name: ${data.fullName}
 Restaurant: ${data.restaurantName}
 Type: ${data.businessType}
 Outlets: ${data.outlets}
 Email: ${data.email}
 Phone: ${data.phone}

 📝 Message:
 ${data.message}
    `;

    const encodedText = encodeURIComponent(text);

    // Replace with your WhatsApp number
    const whatsappNumber = "8801958398308";

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");

    setSubmitted(true);

    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-[var(--success)]/30 bg-[var(--success)]/10 p-10 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--success)]" />

        <p className="mt-4 text-lg font-semibold text-foreground">{t.demoForm.success}</p>
      </motion.div>
    );
  }

  const field = (
    name: keyof DemoFormValues,
    label: string,
    placeholder: string,
    type = "text",
    as: "input" | "textarea" = "input",
  ) => (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>

      {as === "textarea" ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          rows={4}
          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      ) : (
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      )}

      {errors[name] && <p className="mt-1 text-xs text-destructive">{errors[name]?.message}</p>}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {field("fullName", t.demoForm.fullName, t.demoForm.placeholders.fullName)}

        {field("restaurantName", t.demoForm.restaurantName, t.demoForm.placeholders.restaurantName)}

        {field("businessType", t.demoForm.businessType, t.demoForm.placeholders.businessType)}

        {field("email", t.demoForm.email, t.demoForm.placeholders.email, "email")}

        {field("phone", t.demoForm.phone, t.demoForm.placeholders.phone, "tel")}

        {field("outlets", t.demoForm.outlets, t.demoForm.placeholders.outlets, "number")}
      </div>

      <div className="mt-4">
        {field("message", t.demoForm.message, t.demoForm.placeholders.message, "text", "textarea")}
      </div>

      <button
        type="submit"
        className="mt-6 cursor-pointer inline-flex gap-3 w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-[oklch(0.72_0.18_55)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] md:w-auto"
      >
        {t.demoForm.submit} <SendIcon size={16} />
      </button>
    </form>
  );
}
