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

Application concrète :

| Page | Action principale |
|---|---|
| `NiveauxPages` | Recette C intégrale (comme ParcoursSection) — c'est LA page faite pour ça |
| `PedagogiePage` | Recette D en alternance ; piliers pédagogiques → Recette A |
| `ActivitesPage` | Garder la grille bento mais couper les textes à 1 ligne + PhotoStack sur l'activité vedette |
| `GaleriePage` | Photos avec rotations aléatoires ±3° + cadres blancs épais (façon polaroid) |
| `InscriptionPage` | Étapes d'inscription → zigzag connecté avec Squiggles (parfait pour un processus) |
| `AboutPages` | Recette D ; équipe → cartes A avec photos rondes |
| `LocauxPage` | PhotoStack par campus + 1 ligne de description |
| `FaqPage` | Garder l'accordéon, ajouter SectionIntro + 1 doodle |
| `ContactPage` | Recette D : infos à gauche, carte/photo à droite |

Composants home restants à traiter de la même façon : `DirectorWordSection` (couper la citation à 2 phrases + PhotoStack), `CreativeLifeSection` (textes → 1 ligne), `NewsSection` (extraits → 1 ligne), `PartnerSection` (le plus verbeux du site : diviser le texte par 3), `KeyFiguresSection` (supprimer les sous-textes).

---

## 6. Ce qu'il ne faut PAS changer

- La palette (`#084274`, `#feeddb`, `#e3a044`) — elle est déjà parfaite et fidèle à l'inspiration.
- Les séparateurs déchirés (`SectionDivider`) — déjà identiques à l'inspiration.
- Les boutons pilule et la typo `Aref Ruqaa Ink` / `Plus Jakarta Sans`.
- La structure de navigation et les 18 pages.
