# Guide de Design — Les Marronniers × Inspiration Giggle

Ce guide explique **exactement** comment transformer chaque section du site pour obtenir le style de l'inspiration : peu de texte, beaucoup d'illustration, animations au scroll.

---

## 1. La Règle d'Or du Texte (la plus importante)

L'inspiration ne contient presque pas de texte. Chaque bloc suit **strictement** cette structure :

```
[ pilule courte ]          ← 2-3 mots ("Nos programmes")
Titre de Section           ← max 8 mots
Une seule ligne.           ← max 15 mots, optionnelle
```

**Interdit :**
- Les paragraphes de 3+ lignes → couper à 1 phrase.
- Deux badges côte à côte → un seul.
- Les listes de 3 checkmarks sous un CTA → supprimer, le bouton suffit.
- Les sous-textes sous les chiffres clés → chiffre + label, c'est tout.

**Comment couper une phrase :** garder le bénéfice, supprimer la justification.
- ❌ « Nos effectifs par classe sont volontairement limités afin de garantir à chaque élève une écoute sur-mesure et un accompagnement de haute qualité. Planifiez une visite dès maintenant. »
- ✅ « Effectifs limités par classe. Venez visiter et rencontrer l'équipe. »

Le composant `SectionIntro` (voir kit) impose cette structure : utilisez-le en tête de **chaque** section et supprimez les anciens headers.

---

## 2. Le Kit de Composants (déjà créé)

Tout est dans `src/design-system/giggle/` :

| Composant | Rôle | Où l'utiliser |
|---|---|---|
| `SectionIntro` | pilule + titre + 1 ligne, animé | En tête de chaque section, chaque page |
| `PhotoStack` | 1-3 photos inclinées empilées + cadres colorés décalés, qui « se posent » au scroll | Partout où il y a une photo seule dans un rectangle |
| `Squiggle` | flèche gribouillée qui se dessine au scroll (4 variantes) | Entre deux cartes, entre deux blocs, vers un CTA |
| `Doodles` | illustrations trait blanc (lecture, cubes, peinture, plante) + mini décos (étoile, soleil, cœur, spirale) | Sur les cartes bleu marine, en déco discrète des fonds clairs |

Sections modèles déjà refondues (à copier comme référence) :
- `ParcoursSection.tsx` → la section signature (cartes zigzag + flèches)
- `SchoolMission.tsx` → cartes carrées 2×2 + bannière avec PhotoStack

---

## 3. Les 5 Recettes Visuelles

### Recette A — La carte bleu marine inclinée (signature)
```
fond coloré décalé (rotate inverse + translate 10-12px)
  └── carte #084274, padding généreux
        ├── illustration Doodle (blanc)
        ├── titre font-heading crème
        ├── 1 ligne texte crème/75
        └── badge âge/info en pilule
```
Rotation : ±2°. Couleurs des fonds décalés à alterner : `#d95f43` corail, `#e3a044` moutarde, `#5b8fd9` bleu ciel, `#38926c` vert.

### Recette B — La pile de photos
Remplacer **toute photo rectangulaire seule** par `<PhotoStack photos={[...]} />`.
1 photo = cadres colorés seuls derrière. 2-3 photos = la magie de l'inspiration.

### Recette C — Le zigzag connecté
Cartes alternées gauche / droite (max-w-md, `justify-start` puis `justify-end`), reliées par `<Squiggle variant="loop-right" />` puis `loop-left`. Voir `ParcoursSection`.

### Recette D — Le bloc 50/50
Texte minimal à gauche (SectionIntro align="left" + 1 CTA), `PhotoStack` à droite. Inverser l'ordre une section sur deux.

### Recette E — Les décos parsemées
2-3 petits doodles (`DoodleStar`, `DoodleSun`…) en `absolute`, opacité 40-50 %, uniquement sur desktop (`hidden lg:block`). Jamais plus de 3 par section.

---

## 4. Règles d'Animation au Scroll

Le secret de l'inspiration : les éléments **se posent en pivotant**, ils ne font pas juste un fade-up.

| Élément | Animation d'entrée |
|---|---|
| Carte inclinée | `initial: rotate ×3 + y:40` → `spring stiffness:55 damping:14` vers sa rotation finale |
| Photo de pile | rotation exagérée + décalage → se pose avec un léger rebond (spring), en cascade (delay +0.15s par photo) |
| Squiggle | `pathLength 0 → 1` sur 1.4s, la pointe de flèche apparaît à la fin |
| SectionIntro | simple fade + y:18 (rester sobre sur le texte) |

**Interdits :**
- Le même fade-up sur tous les éléments d'une section (c'est le tic générique).
- Plus d'une animation « spectaculaire » par écran : si la section a un Squiggle qui se dessine, les cartes autour restent discrètes.
- Toujours `viewport={{ once: true }}` et respecter `useReducedMotion()`.

Au survol : la carte se **redresse** (`rotate: 0`) et monte de 6px — c'est plus vivant qu'un simple scale.

---

## 5. Checklist Page par Page

Pour chaque page, dans cet ordre :

1. **PageHeader** → remplacer par `SectionIntro` (pilule + titre + 1 ligne). Supprimer le paragraphe d'intro.
2. **Couper le texte** partout selon la Règle d'Or (§1).
3. **Photos** → `PhotoStack` (Recette B).
4. **Listes de niveaux / étapes / programmes** → zigzag connecté (Recette C).
5. **Cartes d'infos** → Recette A avec un Doodle au lieu d'une icône Lucide quand la carte est grande.
6. **1 à 3 mini-doodles** décoratifs par page (Recette E).

**✅ FAIT — Architecture consolidée (18 → 9 vues) :**

| Vue | Consolide | Recettes appliquées |
|---|---|---|
| `EcolePage` | 3 pages About | D (histoire) + A (valeurs) + E |
| `ParcoursPage` | 4 pages Niveaux + Pédagogie | C intégrale + items bleu transparent |
| `VieScolairePage` | Vie scolaire + Activités | fil vertical journée + A (ateliers) |
| `CampusPage` | Locaux + Sécurité | B ×2 + pilules + section bleu marine |
| `ParentsPage` | Espace Parents + FAQ | items bleu transparent + accordéon animé |
| `ActualitesPage` | Actualités + Galerie | A (actus) + polaroids inclinés |
| `InscriptionPage` | — | C numérotée (vrai processus) |
| `ContactPage` | — | D + carte façon polaroid |

Textes home coupés : Hero, KeyFigures, DirectorWord, CreativeLife, Partner, WaveCta.
Items beiges → bleu transparent (`bg-[#084274]/6` à `/10`) sur tout le site.

---

## 6. Ce qu'il ne faut PAS changer

- La palette (`#084274`, `#feeddb`, `#e3a044`) — elle est déjà parfaite et fidèle à l'inspiration.
- Les séparateurs déchirés (`SectionDivider`) — déjà identiques à l'inspiration.
- Les boutons pilule et la typo `Aref Ruqaa Ink` / `Plus Jakarta Sans`.
- La structure de navigation et les 18 pages.


---

## 🚀 Passe finale — Contenu & Organisation (v5)

Un audit complet a identifié les pages trop courtes ; chacune a reçu une vraie
profondeur de contenu, pas juste de la décoration.

**Nouveaux composants génériques** (`src/design-system/giggle/`) :
- `ChecklistSplit` — collage photo + liste de bénéfices cochés + CTA
- `StatShowcase` — photo avec badges statistiques flottants animés (CountUp)
- `Timeline` — timeline verticale alternée, réutilisable (journée type, parcours famille…)

**Hero reconstruit** : collage éclaté de 5 photos (rotations + arrivée en
cascade) au lieu d'une photo unique, chiffres clés animés dans la barre de confiance.

**Home enrichie** de 2 sections : "Ce qui fait la différence" (texte officiel
authentique sur l'équipe) et "Une École à Taille Humaine" (photo + stats flottantes).

**Pages approfondies :**
- `ParentsPage` — + accompagnement (checklist) + 4 blocs "vie pratique" dépliables + FAQ à 9 questions
- `EcolePage` — + timeline "de la première visite au CE6" + bandeau texte officiel équipe
- `VieScolairePage` — journée type à 6 étapes + ateliers en cartes dégradées + rythme de l'année (3 trimestres)
- `ParcoursPage` — + section trilinguisme/transition CE6
- `InscriptionPage` — + section "pourquoi réserver tôt"
- `ContactPage` — carte à onglets Maternelle/Primaire (2 vrais campus, au lieu d'une carte statique)

**Règle de cohérence des `SectionDivider`** : `position="top"` doit reprendre
la couleur de la section qui **suit** ; `position="bottom"` reprend en général
la couleur de la section **courante**. Vérifier ce point à chaque insertion
de nouvelle section dans la home.

---

## 🎨 Passe v6 — Charte officielle & corrections

### Couleurs alignées sur le logo
Le logo officiel a été analysé : son bleu est **`#0086D9`**. Bonne nouvelle,
le navy historique `#084274` en est la nuance foncée naturelle — la palette
est donc devenue cohérente avec la marque imprimée, sans tout refaire.

Échelle disponible dans `index.css` : `--brand-50` → `--brand-800`.
Le bleu générique `#5b8fd9` a été remplacé partout par le bleu officiel.

`Logo.tsx` reproduit la marque (« LES » / « Marronniers ») en trois variantes :
`badge` (bloc bleu, navbar), `light` (fonds foncés, footer), `dark` (fonds clairs).

### Bugs corrigés
| Problème constaté | Correction |
|---|---|
| Texte alternatif affiché à la place d'une photo dans le Hero | `SmartImage` : repli sur un aplat dégradé illustré, jamais d'image cassée |
| Étoile filigrane recouvrant le titre des barres dépliables | L'étoile n'apparaît plus que dans le panneau ouvert, en bas, opacité réduite |
| 3e carte décalée dans `ColorCardsGrid` | Répartition adaptée au nombre de cartes (≤ 3 → une seule rangée) |
| Section Partenaire : logo répété 4 fois | Logo affiché une seule fois en signature, 4 axes en cartes avec filet coloré |

### Photos centralisées
`src/data/photos.ts` regroupe **toutes** les photos du site. C'est le seul
fichier à modifier pour installer les vraies photos de l'école (ou déposer
les fichiers dans `public/photos/` et pointer dessus).

### Nouveau composant
`ActivityShowcase` — vitrine à onglets : la liste des ateliers à gauche, la
photo et le détail à droite, en fondu. Remplace la grille de vignettes sur
la page Vie Scolaire : chaque atelier a enfin une vraie place.

---

## 🎨 Passe v7 — Charte du logo appliquée partout

### Le bleu du site est désormais celui du logo
Le bleu pur du logo (`#0086D9`) a été testé en couleur de texte : **3,66:1**
sur le fond crème — insuffisant pour du petit texte (il faut 4,5:1).

La solution retenue garde la marque tout en restant lisible :
- **`#00558D`** remplace l'ancien navy pour le texte et les sections foncées.
  C'est **exactement la même teinte que le logo (204°)**, en plus profond →
  contraste **7,4:1**, le site est visiblement dans le bleu de la marque.
- **`#0086D9`** (le bleu exact du logo) reste sur les boutons, icônes, badges,
  états actifs et gros titres — là où il brille sans poser de souci de lecture.

### Crème éclairci
`#FEEDDB` → **`#FFF7EF`**. Plus lumineux et aérien, et le contraste du texte
s'améliore au passage (7,4:1 au lieu de 6,8:1).

### Logo agrandi
Navbar : `15px` → `21–27px` (la barre passe de `h-16/20` à `h-20/24`).
Footer : `26px` → `36–44px`.

### Composition photo unifiée
`PhotoCollage` suit maintenant **une seule règle sur tout le site** :
- **2 photos au premier plan**, entières et lisibles (l'une haute, l'autre basse) ;
- **2 photos derrière**, qui dépassent en biais dans les coins opposés.

Le fond apparaît d'abord au scroll, le premier plan se pose ensuite par-dessus ;
au survol, la pile s'ouvre légèrement. Toute section illustrée du site partage
donc la même signature visuelle.

---

## 🔵 Passe v8 — Le bleu du logo devient LA couleur du site

Le bleu exact du logo **`#0086D9`** est désormais la couleur dominante :
**115 surfaces** (boutons, fonds, cartes, sections, séparateurs déchirés) et
**136 titres** l'utilisent.

### Ce qui a dû être ajusté pour rester lisible
Ce bleu est bien plus clair que l'ancien navy, ce qui a créé deux problèmes
mesurés puis corrigés :

| Point | Mesure | Correction |
|---|---|---|
| Moutarde `#e3a044` sur bleu logo | **1,73:1** — quasi invisible | Accent clarifié en **`#FFE08A`** sur les surfaces bleues (3,01:1) |
| Texte crème translucide (`/60`–`/79`) sur bleu | trop pâle | Opacités remontées à `/85`–`/90` |
| Petit texte bleu sur crème | 3,66:1, sous le seuil | Le corps de texte garde **`#00558D`** (7,38:1), même teinte 204° |

### Règle à retenir
- **Surfaces, boutons, titres, icônes** → `#0086D9` (le bleu du logo)
- **Petit texte courant sur fond clair** → `#00558D` (même teinte, lisible)
- **Accent chaud sur fond bleu** → `#FFE08A` ; sur fond clair, la moutarde
  `#E3A044` reste en place.

---

## 🎨 Passe v9 — Version finale

### Angles nets sur tout le site
Une règle CSS globale force `border-radius: 0` sur **tous** les éléments —
images, boutons, cartes, champs de formulaire, vidéo. Seules les pastilles
d'icônes circulaires conservent leur cercle grâce à la classe `.keep-round`
(sans quoi les icônes deviendraient des carrés illisibles).

### Palette enfantine
Les couleurs vives validées sont désormais des variables CSS :

| Variable | Valeur | Usage |
|---|---|---|
| `--kid-blue` | `#0086D9` | couleur de marque (logo) |
| `--kid-green` | `#00A06B` | vert vif |
| `--kid-yellow` | `#FFC800` | jaune vif — **texte en bleu profond dessus** |
| `--kid-red` | `#E24C3D` | rouge corail |
| `--kid-cream` | `#FFF7EF` | fond clair |

Lisibilité mesurée : blanc sur bleu/vert/rouge = 3,4–3,9:1 → réservé aux
titres et au texte en gras (c'est pourquoi les paragraphes sur aplat sont
en `font-medium`). Sur le jaune, le texte passe en `#00558D` (5,03:1).

### Sections refondues
- **Hero** — réduit à l'essentiel : titre, une phrase, deux boutons. Tous les
  badges, pastilles flottantes et statistiques ont été retirés.
- **PhotoCollage** — les **4 photos sont désormais entièrement visibles**, en
  damier décalé. Plus rien n'est caché derrière.
- **Vidéo** — plein écran, démarrage automatique en sourdine et en boucle,
  **sans aucun texte par-dessus**. Seul un bouton de son subsiste.
  Source à remplacer dans `SchoolVideoSection.tsx` → `VIDEO_SRC`.
- **Vie créative** — mosaïque de quatre blocs pleine couleur avec photo en
  fond ; l'aplat s'éclaircit au survol et le détail monte depuis le bas.
- **Nouveau : `ColorfulReasonsSection`** — quatre grands blocs colorés sur
  l'accueil, avec le chiffre en filigrane. La section la plus vive du site.
- **Bande défilante supprimée** (composant et CSS retirés).

---

## 📸 Passe v10 — Les vraies photos de l'école

Le site n'utilise **plus aucune photo d'illustration achetée** : les 20 photos
fournies par l'établissement sont désormais en ligne partout.

### Optimisation
Les fichiers d'origine pesaient **63 Mo** (jusqu'à 14 Mo pour une seule image) —
inutilisable sur le web. Ils ont été redimensionnés à 1600 px maximum et
compressés en JPEG progressif qualité 82 : **63 Mo → 5,4 Mo**, sans perte
visible à l'écran. Le site complet fait maintenant 6 Mo, photos comprises.

### Où elles sont placées
| Photo | Emplacement |
|---|---|
| Sourires de maternelle | Grande photo du Hero |
| Salle de classe / jeux éducatifs | Hero + mot de la direction |
| Télescope | Hero + atelier « Éveil scientifique » |
| Échecs (cour et classe) | Atelier « Club d'échecs » |
| Chant sur scène | Atelier « Musique & Chorale » |
| Théâtre costumé | Vie créative + atelier « Théâtre » |
| Sport sur le terrain | Atelier « Psychomotricité » |
| Jeux de cartes sur la pelouse | Image d'attente de la vidéo |
| 12 photos sélectionnées | Galerie de la page Actualités |

### Ajouter d'autres photos plus tard
1. Déposer le fichier dans `public/photos/`
2. Ajouter une ligne dans `src/data/photos.ts` avec un texte alternatif
3. Utiliser la clé dans la page voulue

Le texte `alt` décrit ce que l'on voit **sans nommer les enfants** : il sert
aux personnes malvoyantes et au référencement Google.

---

## 📱 Passe v11 — Version mobile & vérification automatisée

### Un outil d'audit visuel a été construit
`audit_visuel.py` (à la racine du projet) lance un vrai navigateur, parcourt
les 9 pages en **mobile (390 px)** et **desktop (1440 px)**, déroule chaque
page pour déclencher les animations, puis détecte automatiquement :
débordements horizontaux, éléments hors écran et zones tactiles trop petites.

**Résultat : 120 problèmes détectés au départ → 0 à l'arrivée.**

Pour le relancer après une modification :
```bash
npm run build
cd dist && python3 -m http.server 4173 &
python3 audit_visuel.py     # captures dans /home/claude/audit
```

### Carrousels
Nouveau composant `Carousel` : au-delà de 2 éléments, une section devient un
carrousel tactile sur mobile (défilement magnétique natif + points de
position) et reprend sa grille habituelle sur desktop. Appliqué à 9 sections.

⚠️ **Piège corrigé** — les cartes situées hors écran horizontalement ne
déclenchaient jamais leur animation « au scroll » et restaient invisibles
(7 cartes fantômes détectées à l'écran). C'est désormais la piste entière qui
s'anime d'un seul mouvement, et une règle CSS garantit la visibilité des
cartes sur mobile.

### Confort de lecture mobile
Titres à l'échelle de l'écran (`clamp`), interlignes à 1,62, sections
compactées, et **toute zone tactile fait au moins 40 px** (44 px au pied de
page) pour rester attrapable au pouce.

### Les deux campus, partout
Nouveau composant `CampusMaps` : les deux adresses (rue Beethoven pour la
maternelle, avenue Varennes pour le primaire) sont présentées ensemble avec
**leurs deux plans Google Maps** et un lien d'itinéraire chacun. Utilisé sur
la page Contact et sur l'accueil — plus aucun risque qu'un parent se présente
au mauvais campus.

---

## ✍️ Passe v12 — Lecture mobile & titres

### Ordre image / texte sur mobile — 9 sections corrigées
Un second outil (`ordre_mobile.py`) compare la position verticale de chaque
image et du titre de sa section. Il a révélé **9 sections où l'image
s'affichait jusqu'à 500 px avant son titre** : on tombait sur une photo sans
savoir de quoi elle parlait.

**Règle appliquée** : sur mobile, l'ordre est toujours *titre → texte → image*.
L'alternance gauche/droite (`imageSide`) ne reprend qu'à partir de `lg:`.
Concerne : Ce qui fait la différence, Histoire de l'école, Trois langues,
les 2 campus, Des lieux où l'on a envie d'entrer, Jamais seuls, Pourquoi les
places partent vite, l'article à la une.

### Hero mobile refait
Trois photos dans une grille 5×6 sur 390 px donnaient des cases minuscules et
coupaient les visages. Sur mobile : **une seule grande photo** lisible, avec
une vignette en débord pour la profondeur. La grille en escalier reste sur
desktop.

### Section vidéo
Elle a désormais un titre — *« L'école telle qu'elle est, sans mise en scène »* —
placé **au-dessus** de la vidéo, jamais par-dessus : rien ne masque l'image.

### Tous les titres retravaillés
38 titres, 15 pilules et 12 sous-titres réécrits pour être plus concrets et
moins interchangeables (« Tout est prévu » → « Chaque espace a sa raison
d'être » ; « À lire aussi » → « Les autres actualités »).

**Typographie** : les titres sont passés en capitalisation française
(majuscule au premier mot et aux noms propres seulement). Le *Title Case*
anglais précédent est un anglicisme qui se remarque sur un site scolaire
francophone. C'est un choix stylistique réversible — dites-le si vous
préférez l'ancien rendu.
