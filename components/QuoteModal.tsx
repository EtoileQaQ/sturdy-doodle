"use client";

import { FormEvent, useEffect, useState } from "react";
import { useQuote } from "@/context/QuoteContext";
import { destinations } from "@/lib/data";

const profils = [
  "Fauteuil roulant",
  "Mobilité réduite",
  "Senior",
  "Déficience sensorielle",
  "Famille",
  "Aidant",
];

const plans = ["Découverte", "Escapade", "Grand Voyage"];

export function QuoteModal() {
  const { isOpen, closeQuote, prefill } = useQuote();
  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dest, setDest] = useState("");
  const [plan, setPlan] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setSuccess(false);
      setDest(prefill.dest ?? "");
      setPlan(prefill.plan ?? "");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, prefill]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuote();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeQuote]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, destination: dest, formule: plan }),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
    } catch {
      alert("Envoi impossible pour le moment. Appelez-nous au 01 80 00 00 00.");
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="modal" aria-hidden="false">
      <div className="modal__overlay" onClick={closeQuote} />
      <div className="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="quoteTitle">
        <button className="modal__close" type="button" onClick={closeQuote} aria-label="Fermer la fenêtre de devis">
          ×
        </button>

        {success ? (
          <div className="modal__success">
            <div className="check" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 tabIndex={-1}>C&apos;est noté, merci&nbsp;!</h3>
            <p>Votre conseiller dédié vous recontacte sous 48h avec un devis personnalisé et gratuit.</p>
            <button className="btn btn--primary" type="button" onClick={closeQuote}>Fermer</button>
          </div>
        ) : (
          <>
            <div className="progress" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className={i <= step ? "is-active" : ""} />
              ))}
            </div>
            <form id="quoteForm" onSubmit={onSubmit} noValidate>
              {step === 0 && (
                <fieldset className="step is-active">
                  <legend className="sr-only">Étape 1 sur 4 : profil de mobilité</legend>
                  <h3 id="quoteTitle">Quel est votre profil de mobilité&nbsp;?</h3>
                  <p style={{ color: "var(--ink-soft)" }}>Cela nous permet de vérifier la bonne accessibilité dès le départ.</p>
                  <div className="choice-grid">
                    {profils.map((p) => (
                      <label className="choice" key={p}>
                        <input type="radio" name="profil" value={p} required /> {p}
                      </label>
                    ))}
                  </div>
                  <div className="modal__nav">
                    <span />
                    <button
                      className="btn btn--primary"
                      type="button"
                      onClick={() => {
                        const checked = document.querySelector<HTMLInputElement>('input[name="profil"]:checked');
                        if (!checked) return;
                        setStep(1);
                      }}
                    >
                      Continuer →
                    </button>
                  </div>
                </fieldset>
              )}
              {step === 1 && (
                <fieldset className="step is-active">
                  <legend className="sr-only">Étape 2 sur 4 : destination et formule</legend>
                  <h3>Où rêvez-vous d&apos;aller&nbsp;?</h3>
                  <div className="field">
                    <label htmlFor="qDest">Destination souhaitée</label>
                    <select id="qDest" name="destination" value={dest} onChange={(e) => setDest(e.target.value)}>
                      <option value="">Je ne sais pas encore / surprenez-moi</option>
                      {destinations.map((d) => (
                        <option key={d.slug} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="qPlan">Formule envisagée</label>
                    <select id="qPlan" name="formule" value={plan} onChange={(e) => setPlan(e.target.value)}>
                      <option value="">À déterminer avec mon conseiller</option>
                      {plans.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div className="modal__nav">
                    <button className="btn btn--ghost" type="button" onClick={() => setStep(0)}>← Retour</button>
                    <button className="btn btn--primary" type="button" onClick={() => setStep(2)}>Continuer →</button>
                  </div>
                </fieldset>
              )}
              {step === 2 && (
                <fieldset className="step is-active">
                  <legend className="sr-only">Étape 3 sur 4 : voyageurs et dates</legend>
                  <h3>Détails du voyage</h3>
                  <div className="field">
                    <label htmlFor="qTravelers">Nombre de voyageurs (aidants inclus)</label>
                    <input type="number" id="qTravelers" name="voyageurs" min={1} max={20} defaultValue={2} />
                  </div>
                  <div className="field">
                    <label htmlFor="qDates">Période envisagée</label>
                    <input type="text" id="qDates" name="periode" placeholder="ex. mai 2026, ou « flexible »" />
                  </div>
                  <div className="modal__nav">
                    <button className="btn btn--ghost" type="button" onClick={() => setStep(1)}>← Retour</button>
                    <button className="btn btn--primary" type="button" onClick={() => setStep(3)}>Continuer →</button>
                  </div>
                </fieldset>
              )}
              {step === 3 && (
                <fieldset className="step is-active">
                  <legend className="sr-only">Étape 4 sur 4 : vos coordonnées</legend>
                  <h3>Où envoyer votre devis gratuit&nbsp;?</h3>
                  <div className="field">
                    <label htmlFor="qName">Prénom &amp; nom</label>
                    <input type="text" id="qName" name="nom" required autoComplete="name" placeholder="Camille Durand" />
                  </div>
                  <div className="field">
                    <label htmlFor="qEmail">E-mail</label>
                    <input type="email" id="qEmail" name="email" required autoComplete="email" placeholder="camille@exemple.fr" />
                  </div>
                  <div className="field">
                    <label htmlFor="qPhone">Téléphone</label>
                    <input type="tel" id="qPhone" name="telephone" autoComplete="tel" placeholder="06 12 34 56 78" />
                  </div>
                  <div className="modal__nav">
                    <button className="btn btn--ghost" type="button" onClick={() => setStep(2)}>← Retour</button>
                    <button className="btn btn--primary" type="submit" disabled={loading}>
                      {loading ? "Envoi en cours…" : "Recevoir mon devis →"}
                    </button>
                  </div>
                  <p className="lead-fine" style={{ color: "var(--ink-soft)" }}>
                    Devis gratuit sous 48h · sans engagement · données protégées (RGPD).
                  </p>
                </fieldset>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
