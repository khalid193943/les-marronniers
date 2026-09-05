# Héberger le Site — Les Marronniers El Jadida

Le dossier **`dist/`** contient le site final, prêt à mettre en ligne. C'est un site statique : aucun serveur spécial n'est nécessaire.

## Option 1 — Netlify (le plus simple, gratuit)
1. Aller sur https://app.netlify.com/drop
2. Glisser-déposer le dossier `dist/` dans la page.
3. C'est en ligne. Vous pouvez ensuite connecter votre nom de domaine dans *Domain settings*.

## Option 2 — Vercel (gratuit)
1. Installer : `npm i -g vercel`
2. Dans le dossier du projet : `vercel --prod`
3. Répondre aux questions (framework : Vite, output : `dist`).

## Option 3 — Hébergeur classique (cPanel, OVH, etc.)
1. Ouvrir le gestionnaire de fichiers (ou FTP).
2. Copier **tout le contenu** du dossier `dist/` dans `public_html/` (ou `www/`).
3. Terminé — le site utilise des liens `#hash`, donc aucune configuration de serveur n'est requise.

## ⚡ Formulaires (Contact & Pré-inscription)
Les deux formulaires utilisent **Netlify Forms** (gratuit, sans serveur) :
- Hébergé sur **Netlify** → ça marche tout seul. Les réponses arrivent dans l'onglet **Forms** de votre tableau de bord Netlify. Activez la notification email : *Site settings → Forms → Form notifications* pour les recevoir directement dans votre boîte mail.
- Hébergé **ailleurs** (cPanel, Vercel…) → les formulaires afficheront automatiquement le bouton de secours **WhatsApp** en cas d'échec d'envoi. Rien ne casse.

Protection anti-spam incluse (champ honeypot invisible).

## Reconstruire après une modification
```bash
npm install        # une seule fois
npm run dev        # prévisualiser en local (http://localhost:3000)
npm run build      # régénérer le dossier dist/
```

## 🔐 Espace administration
Accessible sur `#admin` (mot de passe par défaut : `marronniers2026` — **à changer** dans `src/data/adminConfig.ts`).
Permet de publier les actualités et de consulter les demandes des parents.
Voir le guide complet : **GUIDE-ADMIN.md**.

## Architecture du site (10 vues)
| URL (#hash) | Contenu |
|---|---|
| `/` | Accueil |
| `#ecole` | Notre École (histoire + valeurs + équipe) |
| `#parcours` | Parcours & Pédagogie (crèche → CE6) |
| `#vie-scolaire` | Vie Scolaire & Activités (journée type + ateliers) |
| `#campus` | Nos Campus (locaux + sécurité) |
| `#parents` | Espace Parents (+ FAQ) |
| `#actualites` | Actualités & Galerie |
| `#inscription` | Inscription (4 étapes) |
| `#contact` | Contact & plan |
| `#actu-<slug>` | Lecture d'un article |
| `#admin` | Espace administration (réservé) |

Les anciennes adresses (`#niveaux`, `#pedagogie`, `#galerie`, `#faq`, `#locaux`, `#about-…`, etc.) **fonctionnent toujours** : elles redirigent automatiquement vers la bonne page. Aucun lien partagé n'est cassé.
