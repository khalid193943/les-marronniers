/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Marque officielle.
 * Reprend le logo fourni par l'école : « LES » en capitales larges,
 * « Marronniers » en dessous, blanc sur le bleu officiel #0086D9.
 *
 * Trois variantes :
 *  • 'badge'  — le bloc bleu complet (comme le logo imprimé)
 *  • 'light'  — texte blanc, sans fond (pour les sections foncées)
 *  • 'dark'   — texte bleu/navy, sans fond (pour les fonds clairs)
 */

import React from 'react';

interface LogoProps {
  variant?: 'badge' | 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'badge', className = '' }) => {
  const isBadge = variant === 'badge';
  const topColor = isBadge || variant === 'light' ? '#ffffff' : '#0086D9';
  const bottomColor = isBadge || variant === 'light' ? '#ffffff' : '#084274';

  return (
    <span
      className={`inline-flex flex-col justify-center leading-none select-none ${
        isBadge ? 'bg-[#0086D9] px-3.5 py-2.5' : ''
      } ${className}`}
      aria-label="Les Marronniers"
    >
      <span
        className="font-heading font-bold tracking-[0.14em]"
        style={{ color: topColor, fontSize: '1.55em', lineHeight: 0.95 }}
      >
        LES
      </span>
      <span
        className="font-heading tracking-[0.02em]"
        style={{ color: bottomColor, fontSize: '0.78em', lineHeight: 1.15 }}
      >
        Marronniers
      </span>
    </span>
  );
};
