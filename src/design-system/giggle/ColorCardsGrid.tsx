/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Grille de cartes colorées en dégradé.
 * Inspiré de la référence "What We Offers" : gros titre + CTA à gauche,
 * cartes pastel arrondies avec icône fine en haut à gauche.
 * Adapté à la palette Marronniers (bleu marine, moutarde, corail, vert, ciel).
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';

export interface ColorCard {
  icon: LucideIcon;
  title: string;
  line: string;
  /** Teinte de la carte */
  tone: 'sky' | 'sun' | 'coral' | 'green' | 'navy';
}

interface ColorCardsGridProps {
  /** Gros titre à gauche (max ~14 mots) */
  heading: string;
  /** Bouton optionnel sous le titre */
  ctaLabel?: string;
  onCta?: () => void;
  cards: ColorCard[];
  className?: string;
}

const TONES: Record<ColorCard['tone'], { bg: string; text: string; icon: string }> = {
  sky: {
    bg: 'linear-gradient(160deg, #cfe2f8 0%, #b3d1f2 100%)',
    text: 'text-[#084274]',
    icon: 'text-[#084274]',
  },
  sun: {
    bg: 'linear-gradient(160deg, #fbe6b8 0%, #f5d089 100%)',
    text: 'text-[#084274]',
    icon: 'text-[#084274]',
  },
  coral: {
    bg: 'linear-gradient(160deg, #f8cec0 0%, #f0ab93 100%)',
    text: 'text-[#084274]',
    icon: 'text-[#084274]',
  },
  green: {
    bg: 'linear-gradient(160deg, #c6e5d5 0%, #9dd0b8 100%)',
    text: 'text-[#084274]',
    icon: 'text-[#084274]',
  },
  navy: {
    bg: 'linear-gradient(160deg, #0d5590 0%, #084274 100%)',
    text: 'text-[#feeddb]',
    icon: 'text-[#e3a044]',
  },
};

export const ColorCardsGrid: React.FC<ColorCardsGridProps> = ({
  heading,
  ctaLabel,
  onCta,
  cards,
  className = '',
}) => {
  const reduce = useReducedMotion();
  // Les 2 premières cartes se placent à droite du titre, le reste sur la ligne du bas
  const top = cards.slice(0, 2);
  const bottom = cards.slice(2);

  const renderCard = (card: ColorCard, idx: number, delay: number) => {
    const Icon = card.icon;
    const tone = TONES[card.tone];
    return (
      <motion.div
        key={`${card.title}-${idx}`}
        initial={reduce ? undefined : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
        className="rounded-3xl p-6 sm:p-7 flex flex-col min-h-[230px] shadow-sm"
        style={{ backgroundImage: tone.bg }}
      >
        <Icon className={`w-7 h-7 ${tone.icon} mb-auto`} strokeWidth={1.5} />
        <h3 className={`font-heading text-xl sm:text-[22px] ${tone.text} mt-6 mb-2`}>
          {card.title}
        </h3>
        <p className={`font-body text-[13.5px] leading-relaxed ${tone.text} opacity-80`}>
          {card.line}
        </p>
      </motion.div>
    );
  };

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-8 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Bloc titre + CTA */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center py-2"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] text-[#084274] leading-[1.15] tracking-tight">
            {heading}
          </h2>
          {ctaLabel && onCta && (
            <button
              onClick={onCta}
              className="mt-7 self-start inline-flex items-center gap-3 rounded-full bg-[#084274] text-[#feeddb] font-body font-bold text-sm pl-6 pr-2 py-2 cursor-pointer hover:bg-[#05335b] transition-colors group"
            >
              <span>{ctaLabel}</span>
              <span className="w-8 h-8 rounded-full bg-[#e3a044] text-[#084274] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
              </span>
            </button>
          )}
        </motion.div>

        {/* 2 cartes hautes */}
        {top.map((c, i) => renderCard(c, i, 0.08 + i * 0.08))}
      </div>

      {/* Cartes du bas */}
      {bottom.length > 0 && (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
            bottom.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          }`}
        >
          {bottom.map((c, i) => renderCard(c, i, 0.05 + i * 0.07))}
        </div>
      )}
    </div>
  );
};
