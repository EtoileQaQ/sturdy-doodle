export const images = {
  hero:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1000&fit=crop&q=80",
  reviews: {
    sophie:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&q=80",
    karim:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&q=80",
    daniel:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&q=80",
  },
} as const;

export const destinations = [
  {
    slug: "andalousie",
    name: "Andalousie balnéaire",
    hook: "Soleil, sable fin et accès plage garanti — sans mauvaise surprise.",
    meta: "Espagne · 8 jours · plage & tiralo",
    price: "119",
    totalFrom: "952",
    badge: "Coup de cœur",
    badgeType: "featured" as const,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=620&fit=crop&q=80",
    alt: "Plage de sable doré en Andalousie avec accès aménagé et tiralo.",
    highlights: ["Tiralo sur la plage incluse", "Hôtel 4★ certifié PMR", "Vol + transferts adaptés"],
    nextDeparture: "12 mai 2026",
    spotsLeft: 6,
    travelers: 340,
  },
  {
    slug: "cyclades",
    name: "Cyclades accessibles",
    hook: "Le rêve grec, sans les escaliers interminables.",
    meta: "Grèce · 7 jours · ferries & hôtels adaptés",
    price: "152",
    totalFrom: "1 064",
    badge: "Places limitées",
    badgeType: "limited" as const,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1613395877344-13f4a8fcaa25?w=800&h=550&fit=crop&q=80",
    alt: "Maisons colorées d'un port grec avec quai accessible et mer turquoise.",
    highlights: ["Ferries avec cabines PMR", "Hôtels avec ascenseur vérifié", "Accompagnant possible"],
    nextDeparture: "8 juin 2026",
    spotsLeft: 4,
    travelers: 218,
  },
  {
    slug: "venise",
    name: "Venise & Vénétie",
    hook: "La Sérénissime enfin accessible, vaporetto après vaporetto.",
    meta: "Italie · 6 jours · vaporettos adaptés",
    price: "138",
    totalFrom: "828",
    badge: "Accessibilité totale",
    badgeType: "standard" as const,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1514890245-9f4bedc241fb?w=800&h=550&fit=crop&q=80",
    alt: "Vue des canaux de Venise au coucher du soleil avec un pont accessible.",
    highlights: ["Vaporettos PMR réservés", "Hôtels sans marches", "Visites guidées adaptées"],
    nextDeparture: "19 juin 2026",
    spotsLeft: null,
    travelers: 412,
  },
  {
    slug: "lisbonne",
    name: "Lisbonne & Sintra",
    hook: "Tramways, azulejos et palais — à votre rythme.",
    meta: "Portugal · 5 jours · tramways adaptés",
    price: "109",
    totalFrom: "545",
    badge: "Best-seller",
    badgeType: "standard" as const,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1555881403-63b50c0c7e08?w=800&h=550&fit=crop&q=80",
    alt: "Ruelle fleurie de Lisbonne avec tramway adapté.",
    highlights: ["Tramways accessibles", "Palais de Sintra adapté", "Centre-ville plat"],
    nextDeparture: "3 juillet 2026",
    spotsLeft: null,
    travelers: 389,
  },
  {
    slug: "norvege",
    name: "Fjords de Norvège",
    hook: "Des panoramas à couper le souffle, depuis un pont accessible.",
    meta: "Norvège · 7 jours · croisière PMR",
    price: "184",
    totalFrom: "1 288",
    badge: "Bonne accessibilité",
    badgeType: "standard" as const,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=550&fit=crop&q=80",
    alt: "Fjord norvégien avec ponton accessible et montagnes enneigées.",
    highlights: ["Cabines PMR sur la croisière", "Excursions adaptées", "Repas à bord inclus"],
    nextDeparture: "15 août 2026",
    spotsLeft: null,
    travelers: 156,
  },
  {
    slug: "provence",
    name: "Provence & lavandes",
    hook: "La douceur du Sud, à deux pas de chez vous.",
    meta: "France · 4 jours · circuit doux",
    price: "96",
    totalFrom: "384",
    badge: "Départ proche",
    badgeType: "standard" as const,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&h=550&fit=crop&q=80",
    alt: "Champs de lavande en Provence avec chemin stabilisé accessible.",
    highlights: ["Minibus adapté", "Pas de vol — moins de stress", "Hébergements audités"],
    nextDeparture: "22 mai 2026",
    spotsLeft: 8,
    travelers: 275,
  },
] as const;

export const destinationsUrgency = [
  { name: "Andalousie balnéaire", month: "mai", spots: 6 },
  { name: "Cyclades accessibles", month: "juin", spots: 4 },
  { name: "Provence & lavandes", month: "mai", spots: 8 },
] as const;

export const reviews = [
  {
    quote:
      "« Pour la première fois depuis mon accident, j'ai voyagé sans rien anticiper moi-même. La chambre était exactement comme sur les photos. Je me suis sentie attendue, pas tolérée. »",
    name: "Sophie, 41 ans",
    ctx: "En fauteuil roulant · Séville",
    avatar: images.reviews.sophie,
    alt: "Portrait de Sophie",
  },
  {
    quote:
      "« J'accompagne ma mère, 82 ans, à mobilité réduite. Tout était pensé : rythme adapté, transferts doux, un conseiller qui répondait à 22h quand j'avais un doute. Un vrai soulagement. »",
    name: "Karim, 49 ans",
    ctx: "Aidant familial · Lisbonne",
    avatar: images.reviews.karim,
    alt: "Portrait de Karim",
  },
  {
    quote:
      "« Malvoyant, je redoutais l'aéroport. L'assistance était coordonnée de bout en bout, on m'a tout décrit, jamais infantilisé. Je repars avec eux en septembre. »",
    name: "Daniel, 58 ans",
    ctx: "Déficience visuelle · Crète",
    avatar: images.reviews.daniel,
    alt: "Portrait de Daniel",
  },
] as const;

export const faqItems = [
  {
    q: "Et si la chambre n'est pas vraiment accessible une fois sur place ?",
    a: "Ça n'arrive pas, parce qu'on ne se contente pas du mot « accessible » du prestataire. Chaque hébergement est audité avec mesures et photos (largeur de porte, douche de plain-pied, hauteur du lit). Et si malgré tout quelque chose ne correspond pas, notre conseiller intervient immédiatement et vous reloge sur place, sans frais.",
  },
  {
    q: "Puis-je annuler ou être remboursé si ma santé change ?",
    a: "Oui. Toutes nos formules incluent une annulation flexible, et notre garantie « satisfait ou remboursé 30 jours » s'applique. En cas d'aggravation médicale justifiée, l'annulation est prise en charge par l'assurance adaptée incluse. On vous explique tout noir sur blanc avant que vous ne signiez quoi que ce soit.",
  },
  {
    q: "Je voyage avec un aidant / un soignant. C'est prévu ?",
    a: "Absolument. Nous organisons les séjours pour le voyageur ET son ou ses accompagnants : chambres communicantes, tarifs aidant réduits, et la possibilité d'ajouter un soignant professionnel sur la formule Grand Voyage. Dites-nous votre configuration, on s'adapte.",
  },
  {
    q: "Combien ça coûte vraiment, et puis-je être aidé financièrement ?",
    a: "Nos formules démarrent à 89 € par jour et par personne, tout compris, sans frais cachés. Selon votre situation, une partie peut être financée : aides MDPH, prestations CAF, mutuelles, comités d'entreprise. Notre conseiller vous aide à identifier vos droits et à monter le dossier — c'est gratuit.",
  },
  {
    q: "Le devis m'engage-t-il à quelque chose ?",
    a: "Aucun engagement. Le devis est 100% gratuit, livré sous 48h, et l'accompagnement personnalisé pour le construire est offert. Vous décidez ensuite, tranquillement, sans pression ni relance insistante.",
  },
] as const;

export const valuePillars = [
  {
    step: "01",
    title: "Transports adaptés",
    outcome: "Du domicile à la destination, sans rupture de chaîne.",
    bullets: [
      "Véhicules avec rampe, trains et vols assistés",
      "Transferts porte-à-porte réservés à l'avance",
      "Chaque maillon vérifié — pas seulement l'hôtel",
    ],
    icon: "transport",
    featured: false,
  },
  {
    step: "02",
    title: "Hébergements certifiés",
    outcome: "Des chambres vraiment PMR, pas « accessibles » sur le papier.",
    bullets: [
      "Douche de plain-pied, portes et lits mesurés",
      "Photos et dimensions vérifiées sur place",
      "Audit selon référentiel Tourisme & Handicap",
    ],
    icon: "hotel",
    featured: true,
  },
  {
    step: "03",
    title: "Accompagnement humain",
    outcome: "Une personne dédiée, du devis jusqu'au retour.",
    bullets: [
      "Un conseiller unique qui connaît votre dossier",
      "Joignable 7j/7 pendant tout le séjour",
      "Satisfaction garantie 30 jours ou remboursé",
    ],
    icon: "support",
    featured: false,
  },
] as const;

export const valueProcess = [
  { label: "Vous décrivez votre situation", detail: "2 minutes, sans engagement" },
  { label: "On vérifie tout pour vous", detail: "Devis personnalisé sous 48h" },
  { label: "Vous partez l'esprit léger", detail: "Chaque détail est anticipé" },
] as const;

export const frictionComparisons = [
  {
    before: "20 appels pour savoir si la douche est vraiment de plain-pied",
    after: "Accessibilité mesurée sur place, photos à l'appui",
  },
  {
    before: "Un « hôtel accessible » qui a 3 marches à l'entrée",
    after: "Chaîne complète garantie : du trottoir à la chambre",
  },
  {
    before: "Transferts non adaptés découverts le jour J",
    after: "Transferts adaptés réservés et confirmés à l'avance",
  },
  {
    before: "Aucun recours si ça se passe mal sur place",
    after: "Conseiller joignable 7j/7 pendant tout le séjour",
  },
  {
    before: "Le stress de tout vérifier soi-même, seul·e",
    after: "Satisfaction garantie 30 jours ou remboursé",
  },
] as const;

export const frictionQuote = {
  text: "« J'ai arrêté de tout vérifier moi-même. Pour la première fois, je me suis sentie attendue — pas tolérée. »",
  author: "Sophie, 41 ans",
  context: "En fauteuil roulant · Séville",
} as const;

export const partners = [
  "APF France handicap",
  "L'ADAPT",
  "Tourisme & Handicap",
  "Le Monde",
  "France Inter",
  "Handicap.fr",
] as const;
