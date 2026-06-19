# Horizons Sans Frontières

Landing page **haute conversion** pour une agence de voyages spécialisée dans le tourisme accessible aux **personnes à mobilité réduite (PMR)**.

> *Voyager sans limite. Pour tout le monde.*

## Deux versions du site


| Version                  | Dossier          | Usage                                                               |
| ------------------------ | ---------------- | ------------------------------------------------------------------- |
| **Next.js** (recommandé) | racine du projet | Production, formulaires sécurisés, `next/image`, déploiement Vercel |
| **Statique** (legacy)    | `legacy/`        | Hébergement simple (ouvrir `index.html` ou tout serveur statique)   |


## Démarrage rapide — Next.js

```bash
npm install
cp .env.example .env.local   # puis renseignez vos webhooks Tally
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Démarrage rapide — version statique

```bash
cd legacy
python -m http.server 8000
# ou ouvrez legacy/index.html directement
```

## Ce qui a été ajouté

### 1. Vraies photos (Unsplash)

- Hero, avis voyageurs et 6 destinations utilisent des photos réelles optimisées.
- URLs centralisées dans `lib/data.ts` (Next.js) et `legacy/images.js` (statique).

### 2. Formulaires branchés sur Tally / CRM

**Next.js** — les webhooks sont appelés côté serveur (secrets non exposés au navigateur) :

```env
TALLY_WEBHOOK_QUOTE=https://hooks.tally.so/xxxxxxxx
TALLY_WEBHOOK_GUIDE=https://hooks.tally.so/yyyyyyyy
```

Routes API :

- `POST /api/quote` — devis multi-étapes
- `POST /api/guide` — capture lead guide PDF

**Version statique** — éditez `legacy/config.js` :

```js
window.HSF_CONFIG = {
  quoteWebhook: "https://hooks.tally.so/xxxxxxxx",
  guideWebhook: "https://hooks.tally.so/yyyyyyyy",
  ga4Id: "G-XXXXXXXX", // optionnel
};
```

Sans webhook configuré : mode démo (succès affiché, payload loggé en console).

#### Configurer Tally

1. Créez un formulaire Tally pour le devis et un pour le guide.
2. Allez dans **Settings → Webhooks** et copiez l'URL.
3. Collez l'URL dans `.env.local` (Next.js) ou `legacy/config.js` (statique).
4. Optionnel : connectez Tally à votre CRM via Zapier / Make.

### 3. Migration Next.js (App Router)

- `app/` — layout, page, API routes
- `components/` — sections + modale devis + FAQ + formulaire guide
- `lib/data.ts` — contenu centralisé (destinations, avis, FAQ)
- `styles.css` — design system WCAG AA partagé

## Structure

```
horizons-sans-frontieres/
├── app/                  # Next.js App Router
│   ├── api/quote/        # Webhook devis
│   ├── api/guide/        # Webhook guide
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/           # UI React
├── context/              # État modale devis
├── lib/                  # Données + helper webhook
├── legacy/               # Version HTML statique
├── styles.css            # Design system (partagé)
└── package.json
```

## Déploiement

**Vercel (recommandé pour Next.js)**

1. Poussez le repo sur GitHub.
2. Importez sur [vercel.com](https://vercel.com).
3. Ajoutez les variables `TALLY_WEBHOOK_QUOTE` et `TALLY_WEBHOOK_GUIDE`.

**Statique** — déployez le dossier `legacy/` sur Netlify, GitHub Pages ou tout hébergeur statique.

## Accessibilité

WCAG 2.1 AA : corps ≥ 18px, contrastes ≥ 4.5:1, navigation clavier, skip link, `alt` descriptifs, `prefers-reduced-motion` respecté.

## Analytics (optionnel)

```env
NEXT_PUBLIC_GA4_ID=G-XXXXXXXX
```

Pour la version statique : `ga4Id` dans `legacy/config.js`.