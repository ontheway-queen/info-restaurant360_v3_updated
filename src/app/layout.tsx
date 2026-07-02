import type { Metadata } from "next";
import "../styles.css";
import { ClientLayout } from "./client-layout";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
export const metadata: Metadata = {
  title: "RESTAURANT360 | Complete Restaurant Management Software",
  description:
    "Manage POS, table orders, kitchen KOT, inventory, suppliers, HR, accounts, settlement, and reports with RESTAURANT360.",
  openGraph: {
    title: "RESTAURANT360 | Complete Restaurant Management Software",
    description:
      "Manage POS, table orders, kitchen KOT, inventory, suppliers, HR, accounts, settlement, and reports with RESTAURANT360.",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4877d58f-ad57-4b31-b816-7ea3dd8a293b/id-preview-bdb4d851--193184d5-6ba4-4c3e-b4d4-f0274879ee9b.lovable.app-1778141631155.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RESTAURANT360 | Complete Restaurant Management Software",
    description:
      "Manage POS, table orders, kitchen KOT, inventory, suppliers, HR, accounts, settlement, and reports with RESTAURANT360.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4877d58f-ad57-4b31-b816-7ea3dd8a293b/id-preview-bdb4d851--193184d5-6ba4-4c3e-b4d4-f0274879ee9b.lovable.app-1778141631155.png",
    ],
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bn",
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansBengali.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
