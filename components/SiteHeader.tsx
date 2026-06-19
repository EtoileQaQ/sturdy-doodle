"use client";

import { useEffect } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";

export function SiteHeader() {
  useEffect(() => {
    const header = document.getElementById("header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" id="header">
      <div className="container nav">
        <a className="brand" href="#" aria-label="Horizons Sans Frontières, accueil">
          <BrandLogo />
          <span className="brand__name">
            Horizons Sans Frontières
            <small>Voyager sans limite. Pour tout le monde.</small>
          </span>
        </a>
        <nav aria-label="Navigation principale">
          <ul className="nav__links">
            <li><a href="#valeur">Pourquoi nous</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#offres">Formules</a></li>
            <li><a href="#avis">Avis</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        <div className="nav__actions">
          <a className="nav__phone" href="tel:+33180000000" aria-label="Appelez-nous au 01 80 00 00 00">
            ☎ 01 80 00 00 00
          </a>
          <OpenQuoteButton className="btn btn--nav">
            <span>Devis gratuit</span>
            <span className="btn__arrow" aria-hidden="true">→</span>
          </OpenQuoteButton>
        </div>
      </div>
    </header>
  );
}
