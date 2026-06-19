"use client";

import { FormEvent, useState } from "react";

const mobilityOptions = [
  "Fauteuil roulant manuel",
  "Fauteuil roulant électrique",
  "Mobilité réduite (canne, déambulateur)",
  "Senior / fatigabilité",
  "Déficience visuelle",
  "Déficience auditive",
  "Je suis aidant·e",
  "Autre",
];

export function GuideForm() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch("/api/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setMsg("Merci ! Votre guide arrive dans votre boîte mail (vérifiez les spams).");
      form.reset();
    } catch {
      setMsg("Une erreur est survenue. Réessayez ou appelez le 01 80 00 00 00.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="lead-form" id="guideForm" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="guideEmail">Votre e-mail</label>
        <input type="email" id="guideEmail" name="email" placeholder="prenom@exemple.fr" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="guideMobility">Votre type de mobilité (pour personnaliser le guide)</label>
        <select id="guideMobility" name="mobility" required defaultValue="">
          <option value="">Sélectionnez…</option>
          {mobilityOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <button className="btn btn--primary btn--block" type="submit" disabled={loading}>
        {loading ? "Envoi en cours…" : "Recevoir mon guide gratuit →"}
      </button>
      <p className="lead-fine">
        Pas de spam. Désinscription en un clic. Vos données sont protégées conformément au{" "}
        <a href="#footer">RGPD</a>.
      </p>
      <p className="lead-fine" id="guideMsg" role="status" aria-live="polite" style={msg ? { color: msg.includes("Merci") ? "#aef0c8" : "#ffb4ab" } : undefined}>
        {msg}
      </p>
    </form>
  );
}
