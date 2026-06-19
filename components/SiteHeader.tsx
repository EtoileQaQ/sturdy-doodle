"use client";

import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";

const NAV_LINKS = [
  { href: "#valeur", label: "Pourquoi nous" },
  { href: "#destinations", label: "Destinations" },
  { href: "#offres", label: "Formules" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
] as const;

const PHONE = "01 80 00 00 00";
const PHONE_HREF = "tel:+33180000000";

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuBtnRef.current?.focus();
  };

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
      id="header"
    >
      <div className="container header__bar">
        <a className="brand" href="#" aria-label="Horizons Sans Frontières, accueil">
          <BrandLogo />
          <span className="brand__name">
            Horizons Sans Frontières
            <small className="brand__tagline">Voyager sans limite. Pour tout le monde.</small>
          </span>
        </a>

        <nav className="header__nav" aria-label="Navigation principale">
          <ul className="header__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__end">
          <div className="header__cta-zone">
          <div className="header__trust" aria-label="Note et délai de réponse">
            <span className="header__trust-stars" aria-hidden="true">★★★★★</span>
            <span>
              <strong>4,9</strong>
              <span className="header__trust-sep"> · </span>
              <span className="header__trust-delay">Devis en 48h</span>
            </span>
          </div>

          <a className="header__phone" href={PHONE_HREF} aria-label={`Appelez-nous au ${PHONE}`}>
            <span className="header__phone-icon" aria-hidden="true">
              <PhoneIcon />
            </span>
            <span className="header__phone-body">
              <span className="header__phone-label">Besoin d&apos;aide ?</span>
              <span className="header__phone-num">{PHONE}</span>
            </span>
          </a>

          <OpenQuoteButton className="btn btn--primary btn--header-cta">
            <span>Devis gratuit</span>
            <span className="btn__arrow" aria-hidden="true">→</span>
          </OpenQuoteButton>
          </div>

          <div className="header__mobile-actions">
          <a
            className="header__phone-mobile"
            href={PHONE_HREF}
            aria-label={`Appelez-nous au ${PHONE}`}
          >
            <PhoneIcon />
          </a>
          <button
            ref={menuBtnRef}
            type="button"
            className="header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="header-drawer"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <span className={`header__burger${menuOpen ? " is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
        </div>
      </div>

      <div
        id="header-drawer"
        ref={drawerRef}
        className={`header__drawer${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="header__drawer-backdrop" onClick={closeMenu} aria-hidden="true" />
        <div className="header__drawer-panel" role="dialog" aria-modal="true" aria-label="Menu de navigation">
          <div className="header__drawer-trust">
            <span className="header__trust-stars" aria-hidden="true">★★★★★</span>
            <span><strong>4,9/5</strong> · 2 800+ avis · Devis en 48h</span>
          </div>

          <nav aria-label="Navigation mobile">
            <ul className="header__drawer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__drawer-actions">
            <a className="btn btn--ghost btn--block header__drawer-phone" href={PHONE_HREF}>
              <PhoneIcon />
              Appeler le {PHONE}
            </a>
            <OpenQuoteButton className="btn btn--primary btn--block" onOpen={closeMenu}>
              Obtenir mon devis gratuit →
            </OpenQuoteButton>
            <p className="header__drawer-note">Sans engagement · Annulation flexible</p>
          </div>
        </div>
      </div>
    </header>
  );
}
