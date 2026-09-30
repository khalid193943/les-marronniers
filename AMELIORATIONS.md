# Les Marronniers — améliorations « world-class »

## Réalisé
- Titres en Fraunces « douce » (ronde, chaleureuse, élégante), texte en Instrument Sans (grotesque premium, très lisible) ; charte « angles nets » respectée.
- Univers marronnier : feuilles palmées et marrons qui tombent (composants dans `src/components/world/Nature.tsx`).
- Hero refait : titre éditorial, « s’épanouir » souligné à la main, photos réelles collées au scotch avec parallaxe à la souris, preuves (2 campus, horaires, avis Google).
- Section signature « Grandir aux Marronniers » (`GrowSection.tsx`) : toise Crèche → Maternelle → Primaire, un marronnier qui grandit, photo et texte par étape, avance seule.
- Défilement fluide (Lenis), fil de lecture aux couleurs de l’école, barre de navigation qui se cache en descendant.
- Photos importées par Vite (`src/assets/photos`) : versionnées et intégrées à l’aperçu autonome.

## Aperçu autonome
`npx vite build --config vite.preview.config.ts` → `dist-apercu/index.html` (un seul fichier, photos incluses).

## Deuxième passe
- Séparateurs « papier déchiré » refaits : un seul tracé continu, posé à cheval sur la section voisine (plus de bande de mauvaise couleur ni de raccord visible).
- Graisses allégées sur tout le site : titres en 400, texte en 400/500 ; la hiérarchie se fait par la taille et la couleur.
- Nouvelle section « Venir aux Marronniers » (`VisitSection.tsx`) : les deux campus, plan stylisé du Plateau, itinéraire Google Maps / Waze / Plans, appel et WhatsApp.
- Administration redessinée (`pages/AdminPage.tsx`, accès : `#admin`) : tableau de bord, actualités (création, photo, à la une, export/import news.json), pré-inscriptions et messages (statut, note interne, appel, WhatsApp, e-mail, export CSV), réglages Netlify (synchronisation des formulaires).
