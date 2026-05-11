import { useLanguage } from "@/i18n/LanguageProvider";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-secondary p-1 text-xs font-semibold">
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("bn")}
        className={`rounded-full px-3 py-1 transition-colors ${lang === "bn" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
        aria-pressed={lang === "bn"}
      >
        বাংলা
      </button>
    </div>
  );
}
