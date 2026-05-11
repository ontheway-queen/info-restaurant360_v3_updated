import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageProvider";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
}

export function SEOHead({ title, description, path = "/" }: SEOHeadProps) {
  const { lang } = useLanguage();
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={`https://restaurant360.app${path}`} />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "RESTAURANT360",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
      })}</script>
    </Helmet>
  );
}
