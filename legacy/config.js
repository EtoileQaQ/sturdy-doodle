/**
 * Configuration des intégrations externes.
 *
 * Tally : créez un formulaire → Settings → Webhooks → copiez l'URL ici.
 * Alternative : tout webhook compatible (Make, Zapier, n8n, votre CRM).
 *
 * Laissez vide pour le mode démo (succès affiché sans envoi réseau).
 */
window.HSF_CONFIG = {
  /** Webhook Tally / CRM pour le devis multi-étapes */
  quoteWebhook: "",
  /** Webhook pour la capture lead (guide PDF) */
  guideWebhook: "",
  /** ID de mesure GA4 (optionnel) — ex. "G-XXXXXXXX" */
  ga4Id: "",
};
