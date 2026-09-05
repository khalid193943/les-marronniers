/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — En-tête de section "Giggle" : pilule + titre + UNE ligne max.
 * C'est le composant qui garantit "peu de texte" sur tout le site :
 * chaque section commence par ce bloc, et rien de plus.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SectionIntroProps {
  /** Texte de la pilule, ex: "Nos programmes" */
  tag: string;
  /** Titre court (max ~8 mots) */
  title: string;
  /** UNE seule ligne descriptive, optionnelle. Pas de paragraphe. */
  line?: string;
  /** 'light' = fond clair (texte bleu), 'dark' = fond bleu (texte crème) */
  tone?: 'light' | 'dark';
  align?: 'center' | 'left';
  className?: string;
}

export const SectionIntro: React.FC<SectionIntroProps> = ({
  tag,
  title,
  line,
  tone = 'light',
  align = 'center',
  className = '',
}) => {
  const reduce = useReducedMotion();
  const isDark = tone === 'dark';
  const alignCls =
    align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignCls} ${className}`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-5 ${
          isDark
            ? 'bg-[#feeddb]/15 text-[#feeddb]'
            : 'bg-[#084274]/8 text-[#084274]'
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            isDark ? 'bg-[#e3a044]' : 'bg-[#e3a044]'
          }`}
        />
        {tag}
      </span>

      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
          isDark ? 'text-[#feeddb]' : 'text-[#084274]'
        } ${line ? 'mb-4' : ''}`}
      >
        {title}
      </h2>

      {line && (
        <p
          className={`font-body text-base sm:text-lg max-w-2xl ${
            isDark ? 'text-[#feeddb]/75' : 'text-[#084274]/70'
          }`}
        >
          {line}
        </p>
      )}
    </motion.div>
  );
};
