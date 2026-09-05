/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Composition photo en pile.
 *
 * Une seule et même composition sur tout le site, pour que chaque bloc
 * illustré se reconnaisse au premier coup d'œil :
 *
 *   • 2 photos AU PREMIER PLAN, entières et bien lisibles (l'une décalée
 *     vers le haut, l'autre vers le bas, pour créer le rythme) ;
 *   • 2 photos DERRIÈRE, qui dépassent en biais dans les coins opposés
 *     et suggèrent qu'il y a « toute une vie » à découvrir.
 *
 * Les photos du fond arrivent en premier au scroll, celles du premier plan
 * se posent ensuite par-dessus. Au survol, la pile s'ouvre légèrement.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SmartImage } from './SmartImage';

interface CollagePhoto {
  src: string;
  alt: string;
}

interface PhotoCollageProps {
  /** 4 photos : les 2 premières passent devant, les 2 suivantes derrière. */
  photos: CollagePhoto[];
  className?: string;
}

/** Les deux photos du fond : décalées dans les coins opposés, bien inclinées. */
const BACK = [
  {
    cls: 'left-[16%] top-0 w-[52%] aspect-[4/5]',
    rot: -11,
    from: -20,
    open: -15,
    delay: 0,
  },
  {
    cls: 'right-[14%] bottom-0 w-[50%] aspect-[4/3]',
    rot: 10,
    from: 19,
    open: 14,
    delay: 0.08,
  },
];

/** Les deux photos de devant : entières, nettes, légèrement inclinées. */
const FRONT = [
  {
    cls: 'left-0 top-[6%] w-[56%] aspect-[4/5]',
    rot: -3,
    from: -10,
    open: -5,
    delay: 0.2,
  },
  {
    cls: 'right-0 bottom-[6%] w-[54%] aspect-[4/5]',
    rot: 3,
    from: 11,
    open: 5,
    delay: 0.32,
  },
];

export const PhotoCollage: React.FC<PhotoCollageProps> = ({ photos, className = '' }) => {
  const reduce = useReducedMotion();
  const front = photos.slice(0, 2);
  const back = photos.slice(2, 4);

  const layer = (
    photo: CollagePhoto,
    l: (typeof BACK)[number],
    isFront: boolean,
    key: string,
  ) => (
    <motion.figure
      key={key}
      className={`absolute ${l.cls} overflow-hidden rounded-2xl bg-white ${
        isFront
          ? 'z-20 border-[5px] border-white shadow-2xl'
          : 'z-10 border-4 border-white shadow-lg'
      }`}
      initial={
        reduce
          ? { rotate: l.rot }
          : { opacity: 0, rotate: l.from, scale: 0.9, y: isFront ? 26 : -18 }
      }
      whileInView={{ opacity: 1, rotate: l.rot, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ type: 'spring', stiffness: 60, damping: 15, delay: l.delay }}
      variants={{ open: { rotate: l.open, scale: isFront ? 1.02 : 1 } }}
    >
      <SmartImage src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
    </motion.figure>
  );

  return (
    <motion.div
      className={`relative aspect-[5/4] w-full ${className}`}
      whileHover="open"
    >
      {/* D'abord le fond, puis le premier plan par-dessus */}
      {back.map((p, i) => layer(p, BACK[i], false, `b${i}`))}
      {front.map((p, i) => layer(p, FRONT[i], true, `f${i}`))}
    </motion.div>
  );
};
