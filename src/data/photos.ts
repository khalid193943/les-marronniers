/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Catalogue des photos du site.
 *
 * Ce sont les VRAIES photos de l'école, fournies par l'établissement et
 * hébergées avec le site (dossier `public/photos/`). Elles ont été
 * redimensionnées à 1600 px maximum et compressées : 63 Mo → 5,4 Mo,
 * sans perte visible, pour que le site reste rapide même en 4G.
 *
 * ▸ POUR AJOUTER UNE PHOTO
 *   1. Déposez le fichier dans `public/photos/`
 *   2. Ajoutez une ligne ci-dessous avec un texte alternatif descriptif
 *   3. Utilisez la nouvelle clé dans la page voulue
 *
 * ▸ Le texte `alt` sert aux personnes malvoyantes et à Google : décrivez
 *   ce que l'on voit, sans nommer les enfants.
 */

const P = (file: string) => `/photos/${file}`;

export const PHOTOS = {
  /* ---------- Vie de classe ---------- */
  classeAtelier: {
    src: P('classe-jeux-educatifs.jpg'),
    alt: 'Élèves autour de jeux éducatifs dans une salle de classe lumineuse',
  },
  classeMaternelle: {
    src: P('creche-sortie-port.jpg'),
    alt: 'Tout-petits de la crèche en sortie, déguisés en marins',
  },
  classePrimaire: {
    src: P('lecture-primaire.jpg'),
    alt: 'Élève de primaire concentré sur son cahier d’exercices',
  },
  lecture: {
    src: P('lecture-bibliotheque.jpg'),
    alt: 'Enfants découvrant des albums et bandes dessinées autour d’une table',
  },
  enseignante: {
    src: P('echecs-classe.jpg'),
    alt: 'Deux élèves concentrés sur une partie d’échecs en classe',
  },

  /* ---------- Ateliers & éveil ---------- */
  eveil: {
    src: P('astronomie-telescope.jpg'),
    alt: 'Élève observant le ciel avec un télescope sur la terrasse de l’école',
  },
  echecs: {
    src: P('echecs-cour.jpg'),
    alt: 'Parties d’échecs et de dames entre élèves dans la cour',
  },
  chorale: {
    src: P('chant-scene.jpg'),
    alt: 'Élève chantant au micro devant ses camarades',
  },
  musique: {
    src: P('spectacle-kaftan.jpg'),
    alt: 'Élève en tenue traditionnelle lors d’un spectacle de l’école',
  },
  theatre: {
    src: P('theatre-zorro.jpg'),
    alt: 'Élève costumé lors d’une représentation théâtrale',
  },
  spectacle: {
    src: P('spectacle-costume.jpg'),
    alt: 'Jeune élève en costume lors du spectacle de fin d’année',
  },

  /* ---------- Sport & motricité ---------- */
  sport: {
    src: P('sport-terrain.jpg'),
    alt: 'Élèves en séance d’étirements sur le terrain de l’école',
  },
  tennisTable: {
    src: P('tennis-de-table.jpg'),
    alt: 'Élève en pleine partie de tennis de table',
  },
  equitation: {
    src: P('equitation.jpg'),
    alt: 'Élève à cheval, bras levés, lors d’une séance d’équitation',
  },

  /* ---------- Récréation & vie de groupe ---------- */
  jeuGroupe: {
    src: P('jeux-cour-uno.jpg'),
    alt: 'Élèves jouant aux cartes assis en cercle sur la pelouse',
  },
  sourires: {
    src: P('sourires-maternelle.jpg'),
    alt: 'Enfants de maternelle souriants et complices',
  },
  peinture: {
    src: P('sortie-maternelle.jpg'),
    alt: 'Groupe de maternelle lors d’une sortie pédagogique',
  },

  /* ---------- Sorties & découvertes ---------- */
  simulateur: {
    src: P('simulateur-vol.jpg'),
    alt: 'Élève aux commandes d’un simulateur de vol lors d’une sortie',
  },
  sortieAventure: {
    src: P('sortie-aventure.jpg'),
    alt: 'Élève lors d’une journée d’aventure en plein air',
  },
  fete: {
    src: P('fete-traditionnelle.jpg'),
    alt: 'Élèves en tenue traditionnelle marocaine lors d’une fête de l’école',
  },
  construction: {
    src: P('classe-jeux-educatifs.jpg'),
    alt: 'Élèves manipulant des jeux de lettres et de stratégie',
  },
} as const;

export type PhotoKey = keyof typeof PHOTOS;

/** Photos de la galerie, dans l'ordre d'affichage. */
export const GALLERY: PhotoKey[] = [
  'sourires',
  'eveil',
  'jeuGroupe',
  'chorale',
  'sport',
  'equitation',
  'simulateur',
  'fete',
  'theatre',
  'lecture',
  'tennisTable',
  'classeMaternelle',
];
