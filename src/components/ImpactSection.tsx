/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — "En chiffres" : photo + badges statistiques flottants.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { StatShowcase } from '../design-system/giggle/StatShowcase';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { DoodleSpiral } from '../design-system/giggle/Doodles';

export const ImpactSection: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#fff7ef] py-16 sm:py-24 overflow-hidden relative">
      <DoodleSpiral className="hidden lg:block absolute bottom-10 right-[8%] w-10 text-[#0086d9]/20 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionIntro
            tag="En quelques chiffres"
            title="Une École à Taille Humaine"
            line="Assez grande pour tout proposer, assez petite pour connaître chaque enfant."
            align="left"
          />
        </motion.div>

        <StatShowcase
          photo={{
            src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80',
            alt: 'Enfants en classe aux Marronniers',
          }}
          badges={[
            { value: 6, label: 'Salles de classe lumineuses', corner: 'bottom-left', tone: 'sun' },
            { value: 15, suffix: '+', label: 'Ateliers d’éveil chaque semaine', corner: 'top-right', tone: 'coral' },
          ]}
        />
      </div>
    </section>
  );
};
