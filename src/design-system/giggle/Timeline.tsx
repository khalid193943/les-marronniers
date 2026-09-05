/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Timeline verticale alternée.
 * Une ligne pointillée centrale, des étapes alternant gauche/droite avec
 * un point qui "s'allume" au scroll. Utilisée pour un parcours (admission,
 * accompagnement d'une famille) plutôt qu'une frise historique à dates fixes.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

export interface TimelineStep {
  icon: LucideIcon;
  title: string;
  line: string;
  /** Texte court optionnel avant le titre (ex: un horaire) */
  meta?: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ steps, className = '' }) => {
  const reduce = useReducedMotion();

  return (
    <div className={`relative max-w-3xl mx-auto ${className}`}>
      <span
        aria-hidden="true"
        className="absolute left-[27px] sm:left-1/2 top-2 bottom-2 border-l-2 border-dashed border-[#00558d]/20"
      />
      <div className="flex flex-col gap-10">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              initial={reduce ? undefined : { opacity: 0, x: isLeft ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`relative flex items-start gap-5 sm:w-1/2 ${
                isLeft ? 'sm:pr-10' : 'sm:ml-auto sm:pl-10'
              }`}
            >
              <span className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[#00558d] text-[#e3a044] flex items-center justify-center shadow-md">
                <Icon className="w-6 h-6" strokeWidth={1.8} />
              </span>
              <div className="bg-[#00558d]/6 border border-[#00558d]/10 rounded-xl p-5 flex-1">
                <div className="flex items-center gap-3 mb-1.5">
                  {s.meta && <span className="font-heading text-base text-[#e3a044] font-bold">{s.meta}</span>}
                  <h3 className="font-heading text-lg text-[#00558d]">{s.title}</h3>
                </div>
                <p className="font-body text-sm text-[#00558d]/70 leading-relaxed">{s.line}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
