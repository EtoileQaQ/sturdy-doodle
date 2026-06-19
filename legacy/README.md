# Version statique (legacy)

Site HTML/CSS/JS autonome, sans build. Utile pour un hébergement ultra-simple.

## Lancer

```bash
python -m http.server 8000
# http://localhost:8000
```

## Configuration Tally

Éditez `config.js` :

```js
window.HSF_CONFIG = {
  quoteWebhook: "https://hooks.tally.so/VOTRE_WEBHOOK_DEVIS",
  guideWebhook: "https://hooks.tally.so/VOTRE_WEBHOOK_GUIDE",
};
```

## Photos

Les URLs Unsplash sont dans `images.js`.