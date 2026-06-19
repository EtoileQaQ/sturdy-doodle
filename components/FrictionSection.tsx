import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { frictionComparisons, frictionQuote } from "@/lib/data";

export function FrictionSection() {
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

        <div className="friction-board" role="region" aria-label="Comparaison avec et sans agence spécialisée">
          <div className="friction-board__col friction-board__col--before">
            <div className="friction-board__head">
              <span className="friction-board__label">Sans nous</span>
              <h3>Seul·e face à l&apos;organisation</h3>
            </div>
            <ul className="friction-board__list">
              {frictionComparisons.map((row) => (
                <li key={row.before}>
                  <span className="friction-board__icon friction-board__icon--no" aria-hidden="true">✗</span>
                  <span>{row.before}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="friction-board__divider" aria-hidden="true">
            <span className="friction-board__pill">VS</span>
          </div>

          <div className="friction-board__col friction-board__col--after">
            <div className="friction-board__head">
              <span className="friction-board__label friction-board__label--gold">Avec nous</span>
              <h3>Horizons Sans Frontières</h3>
            </div>
            <ul className="friction-board__list">
              {frictionComparisons.map((row) => (
                <li key={row.after}>
                  <span className="friction-board__icon friction-board__icon--yes" aria-hidden="true">✓</span>
                  <span>{row.after}</span>
                </li>
              ))}
            </ul>
          </div>
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
