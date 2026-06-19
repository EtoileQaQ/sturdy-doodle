import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { SiteHeader } from "@/components/SiteHeader";
import { HomePage } from "@/components/HomePage";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Horizons Sans Frontières — Voyages accessibles PMR | Devis gratuit en 48h",
  description:
    "La première agence de voyages 100% pensée pour les personnes à mobilité réduite. Transports adaptés, hébergements certifiés, accompagnement humain. Devis gratuit en 48h.",
  themeColor: "#0B3D6B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ga4 = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="fr">
      <body className={inter.className}>
        {ga4 && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4}');`}
            </Script>
          </>
        )}
        <Providers>
          <a className="skip-link" href="#contenu">Aller au contenu principal</a>
          <SiteHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
