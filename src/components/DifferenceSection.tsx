/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — "Ce qui fait la différence"
 * Bullets basés sur la présentation officielle de l'école (équipe formée à la
 * psychologie de l'enfant, matériel importé d'Europe, effectifs limités…).
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChecklistSplit } from '../design-system/giggle/ChecklistSplit';
import { DoodleHeart } from '../design-system/giggle/Doodles';
import { PHOTOS } from '../data/photos';

interface DifferenceSectionProps {
  onOpenAdmissions: () => void;
}

export const DifferenceSection: React.FC<DifferenceSectionProps> = ({ onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden relative">
      <DoodleHeart className="hidden lg:block absolute top-10 right-[6%] w-10 text-[#d95f43]/40 pointer-events-none" />
      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ChecklistSplit
          tag="Ce qui fait la différence"
          title="Une Équipe Formée à l’Enfance, un Cadre Pensé pour Elle"
          line="Ce n’est pas un slogan : c’est la manière dont chaque journée est organisée aux Marronniers."
          items={[
            'Une équipe expérimentée, formée aux outils pédagogiques et à la psychologie de l’enfant',
            'Du mobilier et du matériel importés d’Europe, conçus par des spécialistes de la petite enfance',
            'Des effectifs volontairement limités pour une attention réellement personnalisée',
            'Un protocole de sécurité et de propreté suivi par toute l’équipe, chaque jour',
          ]}
          ctaLabel="Découvrir notre école"
          onCta={onOpenAdmissions}
          photos={[
            PHOTOS.spectacle,
            PHOTOS.classeAtelier,
            PHOTOS.sport,
            PHOTOS.equitation,
          ]}
        />
      </motion.div>
    </section>
  );
};
