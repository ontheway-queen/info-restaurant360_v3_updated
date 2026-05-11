import { Link } from "@tanstack/react-router";
import { ChefHat, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import logo from "/main-logo.png";
export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.18_0.03_265)] text-[oklch(0.92_0.01_255)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <img src={logo} alt="main-logo" className="w-[200px]" />
          </div>
          <p className="mt-4 text-sm text-[oklch(0.75_0.02_255)]">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">{t.footer.product}</h4>
          <ul className="space-y-2 text-sm text-[oklch(0.75_0.02_255)]">
            <li>
              <Link to="/features" className="hover:text-primary">
                {t.footer.links.features}
              </Link>
            </li>
            <li>
              <Link to="/pos" className="hover:text-primary">
                {t.footer.links.pos}
              </Link>
            </li>
            <li>
              <Link to="/kitchen-kot" className="hover:text-primary">
                {t.footer.links.kitchen}
              </Link>
            </li>
            <li>
              <Link to="/inventory" className="hover:text-primary">
                {t.footer.links.inventory}
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:text-primary">
                {t.footer.links.reports}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">{t.footer.company}</h4>
          <ul className="space-y-2 text-sm text-[oklch(0.75_0.02_255)]">
            <li>
              <Link to="/why-restaurant360" className="hover:text-primary">
                {t.footer.links.why}
              </Link>
            </li>
            <li>
              <Link to="/request-demo" className="hover:text-primary">
                {t.footer.links.request_demo}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                {t.footer.links.about}
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                {t.footer.links.pricing}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">{t.footer.contact}</h4>
          <ul className="space-y-4 text-sm text-[oklch(0.75_0.02_255)]">
            <li className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              {t.contact.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-8 w-8 text-primary" />
              {t.contact.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              {t.contact.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-[oklch(0.7_0.02_255)]">
        © {new Date().getFullYear()} RESTAURANT360. {t.footer.rights}
      </div>
    </footer>
  );
}
