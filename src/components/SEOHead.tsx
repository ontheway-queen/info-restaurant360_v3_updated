"use client";

import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
}

export function SEOHead({ title, description, path = "/" }: SEOHeadProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    // 1. Update document lang
    document.documentElement.lang = lang;

    // 2. Update title
    document.title = title;

    // 3. Update meta elements helper
    const setMeta = (nameOrProperty: string, value: string, isProperty = false) => {
      const selector = isProperty
        ? `meta[property="${nameOrProperty}"]`
        : `meta[name="${nameOrProperty}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (isProperty) {
          el.setAttribute("property", nameOrProperty);
        } else {
          el.setAttribute("name", nameOrProperty);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // 4. Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://restaurant360.app${path}`);

    // 5. Update Schema markup
    let schemaScript = document.querySelector('script[type="application/ld+json"]#seo-schema');
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.setAttribute("type", "application/ld+json");
      schemaScript.setAttribute("id", "seo-schema");
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "RESTAURANT360",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    });
  }, [title, description, path, lang]);

  return null;
}
