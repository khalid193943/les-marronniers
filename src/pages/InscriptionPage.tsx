/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Inscription"
 * 4 étapes numérotées en zigzag reliées par des flèches gribouillées
 * (numérotation justifiée : c'est un vrai processus séquentiel).
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Calendar, Phone, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { PageHero } from '../design-system/giggle/PageHero';
import { PreInscriptionForm } from '../components/Forms';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { Squiggle } from '../design-system/giggle/Squiggle';
import { DoodleGrow, DoodleStar } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';
import { ChecklistSplit } from '../design-system/giggle/ChecklistSplit';

interface InscriptionPageProps {
  onOpenAdmissions: () => void;
}

const ETAPES = [
  { num: '1', title: 'Prenez Rendez-vous', line: 'Un appel ou un message suffit pour planifier votre visite.', backer: '#d95f43', side: 'left' as const, squiggle: { variant: 'loop-right' as const, color: '#38926c' } },
  { num: '2', title: 'Visitez le Campus', line: 'Découvrez les classes et rencontrez l’équipe éducative.', backer: '#e3a044', side: 'right' as const, squiggle: { variant: 'loop-left' as const, color: '#d95f43' } },
  { num: '3', title: 'Déposez le Dossier', line: 'Quelques documents simples, sans engagement.', backer: '#0086d9', side: 'left' as const, squiggle: { variant: 'loop-right' as const, color: '#e3a044' } },
  { num: '4', title: 'Bienvenue !', line: 'Votre enfant rejoint sa classe, accueilli par son prénom.', backer: '#38926c', side: 'right' as const, squiggle: null },
];

const DOCUMENTS = [
  'Copie du livret de famille',
  'Photos d’identité',
  'Carnet de santé (vaccins)',
  'Certificat de radiation (si transfert)',
];

export const InscriptionPage: React.FC<InscriptionPageProps> = ({ onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero
        tag="Inscription 2026 – 2027"
        title="Rejoindre Les Marronniers"
        line="Quatre étapes simples. Effectifs limités par classe."
      />

      {/* Étapes en zigzag */}
      <section className="bg-[#feeddb] pb-20 sm:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col">
            {ETAPES.map((e, idx) => {
              const isLeft = e.side === 'left';
              const rotate = isLeft ? -2 : 2;
              return (
                <React.Fragment key={idx}>
                  <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} w-full`}>
                    <motion.div
                      initial={reduce ? undefined : { opacity: 0, y: 36, rotate: rotate * 3 }}
                      whileInView={{ opacity: 1, y: 0, rotate }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ type: 'spring', stiffness: 55, damping: 14 }}
                      whileHover={{ rotate: 0, y: -5 }}
                      className="relative w-full max-w-sm lg:max-w-md group"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{ backgroundColor: e.backer, transform: `rotate(${-rotate * 1.5}deg) translate(10px, 10px)` }}
                      />
                      <div className="relative z-10 bg-[#084274] p-8 shadow-xl flex items-start gap-5">
                        <span className="font-heading text-4xl text-[#e3a044] leading-none mt-1">{e.num}</span>
                        <div>
                          <h2 className="font-heading text-xl sm:text-2xl text-[#feeddb] mb-2">{e.title}</h2>
                          <p className="font-body text-sm text-[#feeddb]/75 leading-relaxed">{e.line}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {e.squiggle && (
                    <div className={`hidden md:flex w-full ${isLeft ? 'justify-end pr-24 lg:pr-40' : 'justify-start pl-24 lg:pl-40'} -my-3`}>
                      <Squiggle variant={e.squiggle.variant} color={e.squiggle.color} className="w-36 lg:w-44 h-auto" />
                    </div>
                  )}
                  {idx < ETAPES.length - 1 && <div className="h-8 md:h-0" />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Pourquoi réserver tôt */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <ChecklistSplit
          tag="Pourquoi réserver tôt"
          title="Les Places sont Limitées par Classe"
          line="Ce n’est pas un argument commercial : c’est ce qui nous permet de bien connaître chaque enfant."
          items={[
            'Effectifs volontairement réduits pour une attention réelle à chaque enfant',
            'Certaines classes se remplissent avant la fin de l’année scolaire précédente',
            'Une visite ne vous engage à rien — c’est l’occasion de poser toutes vos questions',
            'Le secrétariat vous répond rapidement, du lundi au vendredi',
          ]}
          ctaLabel="Voir les disponibilités"
          onCta={onOpenAdmissions}
          photos={[
            { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=80', alt: 'Classe accueillante' },
            { src: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=700&q=80', alt: 'Enfants épanouis' },
            { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80', alt: 'Atelier créatif' },
            { src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80', alt: 'Équipe attentive' },
          ]}
          imageSide="right"
        />
      </section>

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* Formulaire de pré-inscription en ligne */}
      <section className="bg-[#feeddb] py-16 sm:py-24 overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="En ligne, en 2 minutes"
            title="Pré-inscription Rapide"
            line="Remplissez ce formulaire — le secrétariat vous rappelle pour la visite."
            className="mb-10"
          />
          <PreInscriptionForm />
        </div>
      </section>

      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Documents + CTA */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden relative">
        <DoodleStar className="hidden lg:block absolute top-12 left-[8%] w-9 text-[#e3a044]/60 pointer-events-none" />
        <DoodleGrow className="hidden xl:block absolute bottom-6 right-[4%] w-44 text-[#084274]/12 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <SectionIntro tag="À prévoir" title="Le Dossier, en Toute Simplicité" className="mb-10" />

          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {DOCUMENTS.map((d) => (
              <span key={d} className="inline-flex items-center gap-2 rounded-full bg-[#084274]/8 border border-[#084274]/12 px-5 py-2.5 text-sm font-semibold text-[#084274]">
                <FileText className="w-4 h-4 text-[#e3a044]" />
                {d}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onOpenAdmissions} className="giggle-button-primary cursor-pointer inline-flex items-center gap-3">
              <Calendar className="w-4 h-4 text-[#e3a044]" />
              <span>Réserver une visite</span>
            </button>
            <a href={`tel:${SCHOOL_INFO.phoneRaw}`} className="giggle-button-secondary inline-flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#e3a044]" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
