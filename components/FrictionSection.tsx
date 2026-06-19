import { Fragment } from "react";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { frictionComparisons, frictionQuote } from "@/lib/data";

export function FrictionSection() {
  const rowCount = frictionComparisons.length + 1;

  return (
    <section className="section section--soft friction-section" id="friction">
      <div className="container">
        <div className="friction-header center">
          <p className="eyebrow">La friction, résolue</p>
          <h2>Organiser un voyage PMR, c&apos;était l&apos;enfer.<br />On l&apos;a rendu simple.</h2>
          <p className="lead">
            Même situation, deux expériences. Voici ce qui change quand vous passez par une agence 100&nbsp;% PMR.
          </p>
        </div>

        <div
          className="friction-board"
          role="region"
          aria-label="Comparaison avec et sans agence spécialisée"
          style={
            {
              "--friction-rows": frictionComparisons.length,
              "--friction-row-span": rowCount,
            } as React.CSSProperties
          }
        >
          <div
            className="friction-board__head friction-board__cell--before"
            style={{ gridColumn: 1, gridRow: 1 }}
          >
            <span className="friction-board__label friction-board__label--before">Sans nous</span>
            <h3>Seul·e face à l&apos;organisation</h3>
          </div>

          <div
            className="friction-board__divider"
            style={{ gridColumn: 2, gridRow: `1 / span ${rowCount}` }}
            aria-hidden="true"
          >
            <span className="friction-board__pill">VS</span>
          </div>

          <div
            className="friction-board__head friction-board__cell--after"
            style={{ gridColumn: 3, gridRow: 1 }}
          >
            <span className="friction-board__label friction-board__label--after">Avec nous</span>
            <h3>Horizons Sans Frontières</h3>
          </div>

          {frictionComparisons.map((row, index) => {
            const isLast = index === frictionComparisons.length - 1;
            return (
              <Fragment key={row.before}>
                <div
                  className={`friction-board__item friction-board__cell--before${isLast ? " friction-board__item--last" : ""}`}
                  style={{ gridColumn: 1, gridRow: index + 2 }}
                >
                  <span className="friction-board__icon friction-board__icon--no" aria-hidden="true">✗</span>
                  <span>{row.before}</span>
                </div>
                <div
                  className={`friction-board__item friction-board__cell--after${isLast ? " friction-board__item--last" : ""}`}
                  style={{ gridColumn: 3, gridRow: index + 2 }}
                >
                  <span className="friction-board__icon friction-board__icon--yes" aria-hidden="true">✓</span>
                  <span>{row.after}</span>
                </div>
              </Fragment>
            );
          })}
        </div>

        <div className="friction-bottom">
          <blockquote className="friction-bottom__quote">
            <p>{frictionQuote.text}</p>
            <footer>
              <cite>{frictionQuote.author}</cite>
              <span>{frictionQuote.context}</span>
            </footer>
          </blockquote>

          <div className="friction-bottom__cta">
            <p className="friction-bottom__title">Passez du stress à la sérénité.</p>
            <p className="friction-bottom__sub">
              15+ heures de préparation économisées · Devis en 48h · Garantie 30 jours
            </p>
            <OpenQuoteButton className="btn btn--primary btn--lg">
              Obtenir mon devis gratuit →
            </OpenQuoteButton>
          </div>
        </div>
      </div>
    </section>
  );
}
