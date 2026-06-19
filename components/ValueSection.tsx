import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { valuePillars, valueProcess } from "@/lib/data";

function PillarIcon({ type }: { type: string }) {
  if (type === "transport") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 17h13v-5l-3-4H3v9Zm0 0a2 2 0 1 0 4 0M16 17a2 2 0 1 0 4 0M16 12h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "hotel") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ValueSection() {
  return (
    <section className="section section--soft value-section" id="valeur">
      <div className="container">
        <div className="value-header">
          <div className="value-header__copy">
            <p className="eyebrow">Pourquoi nous choisir</p>
            <h2>Votre voyage PMR, géré de A à Z.</h2>
            <p className="lead">
              Trois piliers, zéro mauvaise surprise. On ne vend pas des promesses « accessibles » — on vérifie chaque détail avant votre départ.
            </p>
          </div>
          <div className="value-header__proof" aria-label="Preuve sociale">
            <span className="value-header__stars" aria-hidden="true">★★★★★</span>
            <p>
              <strong>4,9/5</strong> sur 2 800+ avis
              <span className="value-header__proof-sep"> · </span>
              <span>14 000+ voyageurs accompagnés</span>
            </p>
          </div>
        </div>

        <div className="value-pillars">
          {valuePillars.map((pillar) => (
            <article
              key={pillar.step}
              className={`value-pillar${pillar.featured ? " value-pillar--featured" : ""}`}
            >
              {pillar.featured && (
                <span className="value-pillar__tag">Le plus rassurant</span>
              )}
              <div className="value-pillar__top">
                <span className="value-pillar__step" aria-hidden="true">{pillar.step}</span>
                <span className="value-pillar__icon" aria-hidden="true">
                  <PillarIcon type={pillar.icon} />
                </span>
              </div>
              <h3>{pillar.title}</h3>
              <p className="value-pillar__outcome">{pillar.outcome}</p>
              <ul className="value-pillar__list">
                {pillar.bullets.map((b) => (
                  <li key={b}>
                    <span className="value-pillar__check" aria-hidden="true">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="value-process" aria-label="Comment ça marche">
          {valueProcess.map((step, i) => (
            <div className="value-process__step" key={step.label}>
              <span className="value-process__num" aria-hidden="true">{i + 1}</span>
              <div>
                <p className="value-process__label">{step.label}</p>
                <p className="value-process__detail">{step.detail}</p>
              </div>
              {i < valueProcess.length - 1 && (
                <span className="value-process__arrow" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="value-cta">
          <div className="value-cta__copy">
            <p className="value-cta__title">Prêt·e à voyager sans tout anticiper vous-même&nbsp;?</p>
            <p className="value-cta__sub">Devis gratuit sous 48h · Sans engagement · Annulation flexible</p>
          </div>
          <OpenQuoteButton className="btn btn--primary btn--lg">
            Obtenir mon devis gratuit →
          </OpenQuoteButton>
        </div>
      </div>
    </section>
  );
}
