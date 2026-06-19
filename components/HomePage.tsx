import Image from "next/image";
import { AnnounceBar } from "@/components/AnnounceBar";
import { BrandLogo } from "@/components/BrandLogo";
import { HeroSection } from "@/components/HeroSection";
import { LogoMarquee } from "@/components/LogoMarquee";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { GuideForm } from "@/components/GuideForm";
import { FaqSection } from "@/components/FaqSection";
import { Reveal } from "@/components/Reveal";
import { ValueSection } from "@/components/ValueSection";
import { destinations, reviews } from "@/lib/data";

export function HomePage() {
  return (
    <>
      <AnnounceBar />

      <main id="contenu">
        <HeroSection />
        <LogoMarquee />

        <Reveal>
        <ValueSection />
        </Reveal>

        <Reveal delay={80}>
        <section className="section section--soft">
          <div className="container">
            <div className="center">
              <p className="eyebrow">La friction, résolue</p>
              <h2>Organiser un voyage PMR, c&apos;était l&apos;enfer.<br />On l&apos;a rendu simple.</h2>
            </div>
            <div className="beforeafter">
              <div className="ba-col ba-col--before">
                <h3>Sans agence spécialisée</h3>
                <ul className="ba-list">
                  {["20 appels pour savoir si la douche est vraiment de plain-pied", "Un « hôtel accessible » qui a 3 marches à l'entrée", "Transferts non adaptés découverts le jour J", "Aucun recours si ça se passe mal sur place", "Le stress de tout vérifier soi-même, seul"].map((t) => (
                    <li key={t}><span className="mark" aria-hidden="true">✗</span><span>{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="ba-col ba-col--after">
                <h3>Avec Horizons Sans Frontières</h3>
                <ul className="ba-list">
                  {["Accessibilité vérifiée et mesurée sur place, photos à l'appui", "Chaîne complète garantie : du trottoir à la chambre", "Transferts adaptés réservés et confirmés à l'avance", "Un conseiller joignable 7j/7 pendant tout le séjour", "Satisfaction garantie 30 jours ou remboursé"].map((t) => (
                    <li key={t}><span className="mark" aria-hidden="true">✓</span><span>{t}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        </Reveal>

        <Reveal delay={80}>
        <section className="section" id="avis">
          <div className="container">
            <div className="rating-head">
              <span className="big">4,9/5</span>
              <span className="stars" aria-hidden="true">★★★★★</span>
              <span><strong>2 800+ avis vérifiés</strong> · 14 000+ voyageurs accompagnés depuis 2016</span>
            </div>
            <div className="reviews">
              {reviews.map((r) => (
                <article className="review" key={r.name}>
                  <p className="stars" aria-label="Note : 5 sur 5">★★★★★</p>
                  <blockquote>{r.quote}</blockquote>
                  <div className="review__who">
                    <Image className="review__avatar" src={r.avatar} alt={r.alt} width={48} height={48} />
                    <span><span className="review__name">{r.name}</span><br /><span className="review__ctx">{r.ctx}</span></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        </Reveal>

        <Reveal delay={80}>
        <section className="section section--soft" id="destinations">
          <div className="container">
            <div className="center">
              <p className="eyebrow">Destinations testées et approuvées</p>
              <h2>Des voyages vérifiés, pas juste vendus</h2>
            </div>
            <div className="dest-grid" style={{ marginTop: "2.8rem" }}>
              {destinations.map((d) => (
                <article className="dest" key={d.slug}>
                  <span className="dest__badge"><span className="bullet" aria-hidden="true">●</span> {d.badge}</span>
                  <Image className="dest__img" src={d.image} alt={d.alt} width={800} height={550} />
                  <div className="dest__body">
                    <h3>{d.name}</h3>
                    <p className="dest__meta">{d.meta}</p>
                    <div className="dest__foot">
                      <span className="dest__price">dès {d.price} €<small>par jour / personne</small></span>
                      <OpenQuoteButton className="btn btn--ocean btn--sm" dest={d.name}>Découvrir</OpenQuoteButton>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="center" style={{ marginTop: "2rem", color: "var(--ink-soft)" }}>
              <strong>⏳ Départs groupés à places limitées :</strong> il reste <strong>6 places</strong> sur l&apos;Andalousie de mai et <strong>4 places</strong> sur les Cyclades de juin.
            </p>
          </div>
        </section>
        </Reveal>

        <Reveal>
        <section className="section section--ocean">
          <div className="container">
            <div className="center">
              <p className="eyebrow">Une agence à qui se fier</p>
              <h2>Votre sécurité n&apos;est pas une option</h2>
            </div>
            <div className="trust-grid" style={{ marginTop: "2.8rem" }}>
              {[
                { title: "Label Tourisme & Handicap", text: "Agence labellisée et immatriculée Atout France. Chaque hébergement proposé est audité selon un référentiel d'accessibilité strict." },
                { title: "Équipe certifiée", text: "Conseillers formés à l'accueil PMR et aux premiers secours. Beaucoup sont eux-mêmes concernés ou aidants : ils savent de quoi ils parlent." },
                { title: "Assurance adaptée incluse", text: "Assistance rapatriement et frais médicaux pensés pour les situations de handicap, sans surprime cachée ni exclusion abusive." },
              ].map((t) => (
                <article className="trust" key={t.title}>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        </Reveal>

        <Reveal delay={80}>
        <section className="section" id="offres">
          <div className="container">
            <div className="center">
              <p className="eyebrow">Nos formules</p>
              <h2>Un budget clair, affiché par jour</h2>
            </div>
            <div className="plans" style={{ marginTop: "3rem" }}>
              <article className="plan">
                <h3>Découverte</h3>
                <p className="plan__desc">Un court séjour testé, pour repartir voyager en confiance.</p>
                <p className="plan__price">dès 89 €<span> /jour</span></p>
                <OpenQuoteButton className="btn btn--ghost btn--block" plan="Découverte">Devis gratuit →</OpenQuoteButton>
              </article>
              <article className="plan plan--featured">
                <span className="plan__tag">★ Le plus choisi</span>
                <h3>Escapade</h3>
                <p className="plan__desc">L&apos;équilibre parfait : sérénité totale, accompagnement humain inclus.</p>
                <p className="plan__price">dès 129 €<span> /jour</span></p>
                <OpenQuoteButton className="btn btn--primary btn--block" plan="Escapade">Devis gratuit →</OpenQuoteButton>
              </article>
              <article className="plan">
                <h3>Grand Voyage</h3>
                <p className="plan__desc">Le voyage d&apos;une vie, entièrement orchestré pour vous.</p>
                <p className="plan__price">dès 179 €<span> /jour</span></p>
                <OpenQuoteButton className="btn btn--ghost btn--block" plan="Grand Voyage">Devis gratuit →</OpenQuoteButton>
              </article>
            </div>
            <div className="finance-note">
              <p style={{ margin: 0 }}>
                <strong>Financement possible.</strong> Selon votre situation, votre séjour peut être partiellement pris en charge&nbsp;: aides MDPH, prestations de la CAF, mutuelles et comités d&apos;entreprise.
              </p>
            </div>
          </div>
        </section>
        </Reveal>

        <Reveal>
        <FaqSection />
        </Reveal>

        <Reveal>
        <section className="section" id="guide">
          <div className="container">
            <div className="lead-capture">
              <div className="lead-grid">
                <div>
                  <p className="eyebrow">Guide gratuit à télécharger</p>
                  <h2>12 destinations PMR en Europe, testées et approuvées</h2>
                  <GuideForm />
                </div>
                <div className="guide-cover">
                  <p className="kicker">Guide PDF · 28 pages</p>
                  <h3>12 destinations PMR en Europe</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        </Reveal>

        <Reveal>
        <section className="section section--tight center">
          <div className="container">
            <h2>Prêt·e à partir l&apos;esprit léger&nbsp;?</h2>
            <OpenQuoteButton className="btn btn--primary btn--lg">
              Obtenir mon devis gratuit →
            </OpenQuoteButton>
          </div>
        </section>
        </Reveal>
      </main>

      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <a className="brand" href="#" aria-label="Horizons Sans Frontières, accueil">
                <BrandLogo dark />
                <span className="brand__name">Horizons Sans Frontières<small>Voyager sans limite. Pour tout le monde.</small></span>
              </a>
              <a className="footer__phone" href="tel:+33180000000">01 80 00 00 00</a>
            </div>
            <div>
              <h4>Informations</h4>
              <ul>
                <li><a href="#">CGV</a></li>
                <li><a href="#">Politique d&apos;annulation</a></li>
                <li><a href="#">Politique RGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2026 Horizons Sans Frontières · WCAG 2.1 AA</span>
          </div>
        </div>
      </footer>
    </>
  );
}
