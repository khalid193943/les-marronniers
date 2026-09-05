/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Image avec repli de marque.
 *
 * Corrige un défaut visible : quand une photo distante ne charge pas, le
 * navigateur affiche le texte alternatif brut sur fond blanc. Ici, l'image
 * bascule sur un aplat dégradé aux couleurs de l'école avec une illustration
 * dessinée — le bloc reste beau même si la photo manque.
 */

import React, { useState } from 'react';
import { DoodleBlocks, DoodleReading, DoodlePaint, DoodleGrow } from './Doodles';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  /** Illustration de repli (par défaut : choisie selon le texte alternatif) */
  fallback?: 'blocks' | 'reading' | 'paint' | 'grow';
}

const DOODLES = {
  blocks: DoodleBlocks,
  reading: DoodleReading,
  paint: DoodlePaint,
  grow: DoodleGrow,
};

const GRADIENTS = [
  'linear-gradient(150deg, #1F9FE1 0%, #0086D9 60%, #006CB3 100%)',
  'linear-gradient(150deg, #f0b429 0%, #e3a044 60%, #c9863a 100%)',
  'linear-gradient(150deg, #4bb08a 0%, #38926c 60%, #1f8a63 100%)',
  'linear-gradient(150deg, #e58b72 0%, #d95f43 60%, #c04a30 100%)',
];

/** Choisit un repli stable à partir du texte alternatif (même image = même rendu) */
const pick = (alt: string, len: number) => {
  let sum = 0;
  for (let i = 0; i < alt.length; i++) sum += alt.charCodeAt(i);
  return sum % len;
};

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallback,
}) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    const keys = Object.keys(DOODLES) as (keyof typeof DOODLES)[];
    const Doodle = DOODLES[fallback ?? keys[pick(alt, keys.length)]];
    const gradient = GRADIENTS[pick(alt, GRADIENTS.length)];

    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center overflow-hidden ${className}`}
        style={{ backgroundImage: gradient }}
      >
        <Doodle className="w-3/5 max-w-[220px] text-white/85" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={className}
    />
  );
};
