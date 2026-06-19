"use client";

import Image from "next/image";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { destinations, destinationsUrgency } from "@/lib/data";

type BadgeType = "featured" | "limited" | "standard";

function badgeClass(type: BadgeType): string {
  if (type === "featured") return "trip-card__badge trip-card__badge--featured";
  if (type === "limited") return "trip-card__badge trip-card__badge--limited";
  return "trip-card__badge";
}

export function DestinationsSection() {
  const featured = destinations.find((d) => d.featured);
  const others = destinations.filter((d) => !d.featured);

  return (
    <section className="section section--soft trip-section" id="destinations">
      <div className="container">
        <div className="trip-header">
          <div className="trip-header__copy">
            <p className="eyebrow">Où partir maintenant</p>
            <h2>Des destinations qui donnent envie — et qui tiennent leurs promesses PMR.</h2>
            <p className="lead">
              Chaque séjour est audité sur place : chambres, transferts, activités. Vous choisissez le rêve, on s&apos;occupe du reste.
            </p>
          </div>
          <div className="trip-header__proof" aria-label="Garanties voyage">
            <span className="trip-header__icon" aria-hidden="true">✓</span>
            <p>
              <strong>100&nbsp;% vérifié PMR</strong>
              <span> · Devis sous 48h · Annulation flexible</span>
            </p>
          </div>
        </div>

        {featured && (
          <article className="trip-card trip-card--spotlight trip-card--featured">
            <div className="trip-card__media">
              <Image
                className="trip-card__img"
                src={featured.image}
                alt={featured.alt}
                width={900}
                height={620}
                priority
              />
              <span className={badgeClass(featured.badgeType)}>{featured.badge}</span>
            </div>
            <div className="trip-card__body">
              <p className="trip-card__meta">{featured.meta}</p>
              <h3 className="trip-card__title">{featured.name}</h3>
              <p className="trip-card__hook">{featured.hook}</p>
              <ul className="trip-card__highlights">
                {featured.highlights.map((h) => (
                  <li key={h}>
                    <span className="trip-card__check" aria-hidden="true">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              <p className="trip-card__social">
                <span className="trip-card__stars" aria-hidden="true">★★★★★</span>
                <span>{featured.travelers}+ voyageurs · Prochain départ {featured.nextDeparture}</span>
              </p>
              {featured.spotsLeft != null && (
                <p className="trip-card__urgency">
                  <span aria-hidden="true">⏳</span> Plus que <strong>{featured.spotsLeft} places</strong> pour ce départ
                </p>
              )}
              <div className="trip-card__foot">
                <div className="trip-card__price">
                  <span className="trip-card__price-main">dès {featured.price}&nbsp;€</span>
                  <span className="trip-card__price-sub">/ jour · séjour dès {featured.totalFrom}&nbsp;€</span>
                </div>
                <OpenQuoteButton className="btn btn--primary btn--lg" dest={featured.name}>
                  Réserver cette destination →
                </OpenQuoteButton>
              </div>
            </div>
          </article>
        )}

        <div className="trip-grid">
          {others.map((d) => (
            <article
              key={d.slug}
              className={`trip-card trip-card--compact${d.badgeType === "limited" ? " trip-card--limited" : ""}`}
            >
              <div className="trip-card__media">
                <Image className="trip-card__img" src={d.image} alt={d.alt} width={800} height={550} />
                <span className={badgeClass(d.badgeType)}>{d.badge}</span>
              </div>
              <div className="trip-card__body">
                <p className="trip-card__meta">{d.meta}</p>
                <h3 className="trip-card__title">{d.name}</h3>
                <p className="trip-card__hook">{d.hook}</p>
                <ul className="trip-card__highlights trip-card__highlights--compact">
                  {d.highlights.slice(0, 2).map((h) => (
                    <li key={h}>
                      <span className="trip-card__check" aria-hidden="true">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                {d.spotsLeft != null && (
                  <p className="trip-card__urgency trip-card__urgency--sm">
                    <strong>{d.spotsLeft} places</strong> · départ {d.nextDeparture}
                  </p>
                )}
                <div className="trip-card__foot">
                  <div className="trip-card__price">
                    <span className="trip-card__price-main">dès {d.price}&nbsp;€</span>
                    <span className="trip-card__price-sub">/ jour</span>
                  </div>
                  <OpenQuoteButton className="btn btn--ocean btn--sm" dest={d.name}>
                    Devis gratuit →
                  </OpenQuoteButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="trip-urgency" role="status">
          <span className="trip-urgency__icon" aria-hidden="true">⏳</span>
          <div className="trip-urgency__copy">
            <p className="trip-urgency__title">Départs groupés — places limitées</p>
            <p className="trip-urgency__list">
              {destinationsUrgency.map((u, i) => (
                <span key={u.name}>
                  {i > 0 && " · "}
                  <strong>{u.spots} places</strong> {u.name} ({u.month})
                </span>
              ))}
            </p>
          </div>
          <OpenQuoteButton className="btn btn--primary">Réserver ma place →</OpenQuoteButton>
        </div>

        <div className="trip-cta">
          <div className="trip-cta__copy">
            <p className="trip-cta__title">Une autre destination en tête&nbsp;?</p>
            <p className="trip-cta__sub">Décrivez-nous votre projet — on vérifie l&apos;accessibilité pour vous, gratuitement.</p>
          </div>
          <OpenQuoteButton className="btn btn--primary btn--lg">
            Obtenir mon devis personnalisé →
          </OpenQuoteButton>
        </div>
      </div>
    </section>
  );
}
