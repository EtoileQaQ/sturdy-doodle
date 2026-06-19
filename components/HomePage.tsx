"use client";

import Image from "next/image";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { images } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="hero section">
      <div className="container hero__grid">
        <div className="hero__content hero-entrance">
          <p className="hero__stars hero-entrance__item" style={{ "--i": 0 } as React.CSSProperties}>
            <span className="stars" aria-hidden="true">★★★★★</span>
            <span><strong>4,9</strong>/5 · 2 800+ avis · 14 000+ voyageurs accompagnés</span>
          </p>
          <h1 className="hero-entrance__item" style={{ "--i": 1 } as React.CSSProperties}>
            Voyager, c&apos;est pour tout le monde.
          </h1>
          <p className="lead hero-entrance__item" style={{ "--i": 2 } as React.CSSProperties}>
            La première agence 100% pensée pour les personnes à mobilité réduite. Fauteuil roulant, senior, famille&nbsp;: nous gérons tout, de la porte de chez vous au retour.
          </p>
          <div className="hero__cta-row hero-entrance__item" style={{ "--i": 3 } as React.CSSProperties}>
            <OpenQuoteButton className="btn btn--primary btn--lg">
              Obtenir mon devis gratuit →
            </OpenQuoteButton>
            <a className="btn btn--ghost btn--lg" href="#destinations">Voir les destinations</a>
          </div>
          <ul className="hero__reassure hero-entrance__item" style={{ "--i": 4 } as React.CSSProperties}>
            <li>✓ Sans engagement</li>
            <li>✓ Devis en 48h</li>
            <li>✓ Annulation flexible</li>
          </ul>
        </div>
        <div className="hero__media hero-entrance__item" style={{ "--i": 2 } as React.CSSProperties}>
          <Image
            className="hero__photo"
            src={images.hero}
            alt="Un groupe de voyageurs heureux admire un paysage depuis une falaise, symbole du voyage accessible et partagé."
            width={800}
            height={1000}
            priority
          />
          <div className="hero__card hero__card--a motion-float">Voyage 100% sécurisé</div>
          <div className="hero__card hero__card--b motion-float motion-float--delay">Accompagnant dédié</div>
        </div>
      </div>
    </section>
  );
}
