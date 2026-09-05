/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Catalogue central des photos du site.
 *
 * ▸ POUR L'ÉCOLE : remplacez ici les adresses par vos vraies photos.
 *   C'est le SEUL fichier à modifier — toutes les pages s'actualisent.
 *   Vous pouvez déposer vos images dans `public/photos/` puis écrire
 *   par exemple : classe1: '/photos/ma-classe.jpg'
 *
 * ▸ Si une adresse ne fonctionne plus, le site n'affiche jamais d'image
 *   cassée : il bascule sur un aplat coloré illustré (voir SmartImage).
 */

const CDN = 'https://cdn.prod.website-files.com/69c84428044e454b1b6c1405';
const UNSPLASH = 'https://images.unsplash.com';
const q = (id: string, w = 800) => `${UNSPLASH}/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PHOTOS = {
  /* --- Vie de classe --- */
  classeAtelier: { src: `${CDN}/6a14546f036a33ba6cc4b748_Images%20(1).avif`, alt: 'Élèves en atelier créatif aux Marronniers' },
  classeMaternelle: { src: `${CDN}/6a14546f37bdd99338f62c1c_Images%20(3).avif`, alt: 'Salle de classe de maternelle' },
  classePrimaire: { src: `${CDN}/69c846a1048134d965991ee7_Office.avif`, alt: 'Salle de classe du primaire' },

  /* --- Moments d'apprentissage --- */
  lecture: { src: q('photo-1580582932707-520aed937b7b'), alt: 'Enfants concentrés en classe' },
  peinture: { src: q('photo-1509062522246-3755977927d7'), alt: 'Atelier de peinture' },
  jeuGroupe: { src: q('photo-1567168544813-cc03465b4fa8'), alt: 'Jeux en groupe dans la cour' },
  musique: { src: q('photo-1516450360452-9312f5e86fc7'), alt: 'Éveil musical' },
  enseignante: { src: q('photo-1544717305-2782549b5136'), alt: 'Une enseignante accompagne ses élèves' },
  sourires: { src: q('photo-1502086223501-7ea6ecd79368'), alt: 'Enfants souriants' },
  echecs: { src: q('photo-1529699211952-734e80c4d42b'), alt: 'Partie d’échecs entre élèves' },
  chorale: { src: q('photo-1511671782779-c97d3d27a1d4'), alt: 'Chorale et instruments' },
  construction: { src: q('photo-1587654780291-39c9404d746b'), alt: 'Jeux de construction en maternelle' },
  eveil: { src: q('photo-1503454537195-1dcabb73ffb9'), alt: 'Éveil scientifique et découverte' },
} as const;

export type PhotoKey = keyof typeof PHOTOS;

/** Photos de la galerie, dans l'ordre d'affichage. */
export const GALLERY: PhotoKey[] = [
  'lecture', 'peinture', 'jeuGroupe', 'musique',
  'classeMaternelle', 'sourires', 'echecs', 'chorale',
];
