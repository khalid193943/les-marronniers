/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Illustrations "dessinées à la main" (style craie blanche)
 * Signature visuelle de l'inspiration Giggle : traits blancs sur cartes bleu marine.
 * Toutes en stroke `currentColor` → recolorables (blanc sur bleu, bleu sur crème…).
 */

import React from 'react';

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 3.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

interface DoodleProps {
  className?: string;
}

/** Enfant qui lit un livre — pour Crèche / éveil */
export const DoodleReading: React.FC<DoodleProps> = ({ className = '' }) => (
  <svg viewBox="0 0 220 170" className={className} aria-hidden="true">
    <g {...strokeProps}>
      {/* Tête */}
      <path d="M95 38 C95 22, 125 20, 127 38 C129 54, 97 56, 95 38 Z" />
      {/* Cheveux */}
      <path d="M98 30 Q104 22 112 24 Q120 20 126 30" />
      {/* Sourire + yeux */}
      <path d="M106 40 Q111 44 116 40" />
      <circle cx="105" cy="35" r="1.4" fill="currentColor" />
      <circle cx="118" cy="35" r="1.4" fill="currentColor" />
      {/* Corps assis */}
      <path d="M100 56 Q88 70 86 92 Q86 100 96 100 L128 100 Q136 100 135 90 Q133 68 123 56" />
      {/* Livre ouvert */}
      <path d="M70 108 Q95 96 110 108 Q125 96 150 108 L150 134 Q125 122 110 134 Q95 122 70 134 Z" />
      <path d="M110 108 L110 134" />
      {/* Lignes du livre */}
      <path d="M80 114 Q94 108 104 114 M80 122 Q94 116 104 122" strokeWidth="2.2" />
      <path d="M116 114 Q128 108 140 114 M116 122 Q128 116 140 122" strokeWidth="2.2" />
      {/* Bras tenant le livre */}
      <path d="M92 74 Q78 86 74 108 M128 74 Q142 86 146 108" />
      {/* Petites étoiles autour */}
      <path d="M52 48 L56 48 M54 46 L54 50" strokeWidth="2.5" />
      <path d="M168 60 L174 60 M171 57 L171 63" strokeWidth="2.5" />
      <path d="M160 30 L164 30 M162 28 L162 32" strokeWidth="2.5" />
    </g>
  </svg>
);

/** Enfants et cubes — pour Maternelle / jeu et construction */
export const DoodleBlocks: React.FC<DoodleProps> = ({ className = '' }) => (
  <svg viewBox="0 0 220 170" className={className} aria-hidden="true">
    <g {...strokeProps}>
      {/* Enfant 1 accroupi à gauche */}
      <path d="M52 66 C52 52, 78 50, 80 66 C82 80, 54 82, 52 66 Z" />
      <path d="M60 68 Q66 72 72 68" />
      <circle cx="61" cy="63" r="1.4" fill="currentColor" />
      <circle cx="72" cy="63" r="1.4" fill="currentColor" />
      <path d="M58 82 Q48 94 50 110 L84 110 Q86 92 76 82" />
      <path d="M76 92 Q92 96 100 104" />
      {/* Enfant 2 à droite */}
      <path d="M148 58 C148 44, 174 42, 176 58 C178 72, 150 74, 148 58 Z" />
      <path d="M156 60 Q162 64 168 60" />
      <circle cx="157" cy="55" r="1.4" fill="currentColor" />
      <circle cx="168" cy="55" r="1.4" fill="currentColor" />
      <path d="M154 74 Q144 88 146 110 L180 110 Q182 86 172 74" />
      <path d="M150 88 Q134 94 126 102" />
      {/* Tour de cubes au centre */}
      <rect x="100" y="88" width="24" height="22" transform="rotate(-2 112 99)" />
      <rect x="102" y="66" width="22" height="21" transform="rotate(3 113 76)" />
      <rect x="105" y="46" width="19" height="19" transform="rotate(-4 114 55)" />
      {/* Symboles sur les cubes */}
      <path d="M108 96 L116 104 M116 96 L108 104" strokeWidth="2.2" />
      <circle cx="113" cy="76" r="4.5" strokeWidth="2.2" />
      <path d="M110 55 L114 50 L118 55 Z" strokeWidth="2.2" />
      {/* Sol */}
      <path d="M40 116 Q110 122 184 116" strokeWidth="2.5" />
    </g>
  </svg>
);

/** Chevalet et peinture — pour activités créatives */
export const DoodlePaint: React.FC<DoodleProps> = ({ className = '' }) => (
  <svg viewBox="0 0 220 170" className={className} aria-hidden="true">
    <g {...strokeProps}>
      {/* Chevalet */}
      <path d="M74 34 L60 138 M146 34 L160 138 M110 100 L110 138" />
      <rect x="66" y="34" width="88" height="66" transform="rotate(-1 110 67)" />
      {/* Dessin sur la toile : soleil + colline */}
      <circle cx="92" cy="54" r="9" strokeWidth="2.5" />
      <path d="M92 41 L92 37 M92 71 L92 67 M105 54 L109 54 M79 54 L75 54" strokeWidth="2.2" />
      <path d="M72 90 Q95 72 118 90 Q134 78 148 90" strokeWidth="2.5" />
      {/* Enfant peignant */}
      <path d="M162 78 C162 66, 184 64, 186 78 C188 90, 164 92, 162 78 Z" />
      <path d="M169 80 Q174 83 179 80" />
      <circle cx="170" cy="75" r="1.3" fill="currentColor" />
      <circle cx="179" cy="75" r="1.3" fill="currentColor" />
      <path d="M168 92 Q160 104 162 126 L188 126 Q190 102 182 92" />
      {/* Bras + pinceau vers la toile */}
      <path d="M166 98 Q152 94 148 82" />
      <path d="M148 82 L142 74" strokeWidth="2.8" />
      {/* Gouttes de peinture */}
      <circle cx="52" cy="120" r="2.4" strokeWidth="2.2" />
      <circle cx="44" cy="130" r="1.8" strokeWidth="2.2" />
      <path d="M190 44 L196 44 M193 41 L193 47" strokeWidth="2.5" />
    </g>
  </svg>
);

/** Enfant + plante qui grandit / diplôme — pour Primaire / réussite */
export const DoodleGrow: React.FC<DoodleProps> = ({ className = '' }) => (
  <svg viewBox="0 0 220 170" className={className} aria-hidden="true">
    <g {...strokeProps}>
      {/* Enfant fier, bras levés */}
      <path d="M92 44 C92 28, 122 26, 124 44 C126 60, 94 62, 92 44 Z" />
      <path d="M102 46 Q108 51 114 46" />
      <circle cx="102" cy="41" r="1.4" fill="currentColor" />
      <circle cx="115" cy="41" r="1.4" fill="currentColor" />
      <path d="M98 62 Q88 78 88 104 L128 104 Q128 76 118 62" />
      {/* Bras levés en V */}
      <path d="M94 68 Q76 58 70 42 M122 68 Q140 58 146 42" />
      {/* Chapeau de diplômé */}
      <path d="M88 30 L108 20 L128 30 L108 38 Z" />
      <path d="M126 31 L126 42 M126 42 Q128 46 124 46" strokeWidth="2.5" />
      {/* Plante qui pousse à droite */}
      <path d="M168 130 Q166 106 168 88" />
      <path d="M168 104 Q156 100 152 88 Q166 90 168 100" />
      <path d="M168 96 Q180 92 184 80 Q170 82 168 92" />
      <path d="M160 130 Q168 126 176 130" strokeWidth="2.5" />
      {/* Étoiles de réussite */}
      <path d="M58 88 L64 88 M61 85 L61 91" strokeWidth="2.5" />
      <path d="M152 54 L158 54 M155 51 L155 57" strokeWidth="2.5" />
      <path d="M170 24 L176 24 M173 21 L173 27" strokeWidth="2.5" />
      {/* Sol */}
      <path d="M60 130 Q110 136 150 130" strokeWidth="2.5" />
    </g>
  </svg>
);

/** Petites décorations à parsemer (étoile, cœur, soleil, spirale) */
export const DoodleStar: React.FC<DoodleProps> = ({ className = '' }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <path
      d="M20 5 L23.5 15.5 L34 16 L25.5 22.5 L28.5 33 L20 27 L11.5 33 L14.5 22.5 L6 16 L16.5 15.5 Z"
      {...strokeProps}
      strokeWidth={2.6}
    />
  </svg>
);

export const DoodleSun: React.FC<DoodleProps> = ({ className = '' }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <g {...strokeProps} strokeWidth={2.6}>
      <circle cx="24" cy="24" r="9" />
      <path d="M24 6 L24 11 M24 37 L24 42 M6 24 L11 24 M37 24 L42 24 M11 11 L14.5 14.5 M33.5 33.5 L37 37 M37 11 L33.5 14.5 M14.5 33.5 L11 37" />
    </g>
  </svg>
);

export const DoodleHeart: React.FC<DoodleProps> = ({ className = '' }) => (
  <svg viewBox="0 0 44 40" className={className} aria-hidden="true">
    <path
      d="M22 34 C10 26, 4 18, 7 11 C10 5, 18 5, 22 12 C26 5, 34 5, 37 11 C40 18, 34 26, 22 34 Z"
      {...strokeProps}
      strokeWidth={2.6}
    />
  </svg>
);

export const DoodleSpiral: React.FC<DoodleProps> = ({ className = '' }) => (
  <svg viewBox="0 0 44 44" className={className} aria-hidden="true">
    <path
      d="M22 22 C24 20, 27 21, 27 24 C27 28, 22 30, 18 27 C13 23, 15 15, 22 13 C30 10, 38 16, 38 25 C38 35, 28 42, 17 39"
      {...strokeProps}
      strokeWidth={2.6}
    />
  </svg>
);
