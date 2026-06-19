import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { frictionComparisons, frictionQuote } from "@/lib/data";

export function FrictionSection() {
  return (
    <section className="section friction-section" id="friction">
      <div className="container">
        <div className="friction-header">
          <p className="eyebrow">La friction, résolue</p>
          <h2>Organiser un voyage PMR, c&apos;était l&apos;enfer.<br />On l&apos;a rendu simple.</h2>
          <p className="lead friction-header__lead">
            Chaque ligne ci-dessous, c&apos;est une galère qu&apos;on a déjà vue — et qu&apos;on élimine pour vous.
          </p>
        </div>

        <div className="friction-compare" role="region" aria-label="Comparaison avec et sans agence spécialisée">
          <div className="friction-compare__labels" aria-hidden="true">
            <span className="friction-label friction-label--before">Sans agence spécialisée</span>
            <span className="friction-label friction-label--vs" />
            <span className="friction-label friction-label--after">Avec Horizons Sans Frontières</span>
          </div>

          <ol className="friction-rows">
            {frictionComparisons.map((row) => (
              <li className="friction-row" key={row.before}>
                <div className="friction-row__before">
                  <span className="friction-row__mark friction-row__mark--no" aria-hidden="true">✗</span>
                  <span>
                    <span className="sr-only">Sans agence : </span>
                    {row.before}
                  </span>
                </div>
                <div className="friction-row__vs" aria-hidden="true">
                  <span className="friction-row__vs-label">Devient</span>
                  <span className="friction-row__arrow">→</span>
                </div>
                <div className="friction-row__after">
                  <span className="friction-row__mark friction-row__mark--yes" aria-hidden="true">✓</span>
                  <span>
                    <span className="sr-only">Avec Horizons Sans Frontières : </span>
                    {row.after}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="friction-footer">
          <blockquote className="friction-quote">
            <p>{frictionQuote.text}</p>
            <footer>
              <cite>{frictionQuote.author}</cite>
              <span className="friction-quote__ctx">{frictionQuote.context}</span>
            </footer>
          </blockquote>

          <div className="friction-cta">
            <div className="friction-cta__stats">
              <p className="friction-cta__stat">
                <strong>15+ heures</strong>
                <span>de préparation économisées en moyenne</span>
              </p>
              <p className="friction-cta__stat">
                <strong>0</strong>
                <span>mauvaise surprise constatée sur place*</span>
              </p>
            </div>
            <div className="friction-cta__action">
              <p className="friction-cta__title">Arrêtez de tout gérer seul·e.</p>
              <OpenQuoteButton className="btn btn--primary btn--lg">
                Obtenir mon devis gratuit →
              </OpenQuoteButton>
              <p className="friction-cta__note">Sans engagement · Devis en 48h · Garantie 30 jours</p>
            </div>
          </div>
        </div>

        <p className="friction-fine">* Sur les voyages réservés via nos formules Escapade et Grand Voyage, audit accessibilité complet inclus.</p>
      </div>
    </section>
  );
}
