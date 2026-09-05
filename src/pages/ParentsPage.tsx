/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Espace Parents" (reconstruction enrichie)
 * Communication → checklist accompagnement → vie pratique (ExpandBars) → FAQ étendue.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  MessageCircle, CalendarHeart, NotebookPen, ChevronDown, Phone, Quote,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { PageHero } from '../design-system/giggle/PageHero';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { DoodleHeart, DoodleStar, DoodleSun } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';
import { ColorCardsGrid, type ColorCard } from '../design-system/giggle/ColorCardsGrid';
import { ChecklistSplit } from '../design-system/giggle/ChecklistSplit';
import { ExpandBars, type ExpandBarItem } from '../design-system/giggle/ExpandBars';
import { PHOTOS } from '../data/photos';

const COMMUNICATION: ColorCard[] = [
  { icon: NotebookPen, title: 'Cahier de Liaison', line: 'Le fil quotidien entre la classe et la maison.', tone: 'sky' },
  { icon: MessageCircle, title: 'Rencontres Individuelles', line: 'Un rendez-vous avec l’enseignante, quand vous voulez.', tone: 'sun' },
  { icon: CalendarHeart, title: 'Événements Familles', line: 'Fêtes, spectacles et portes ouvertes toute l’année.', tone: 'coral' },
];

const VIE_PRATIQUE: ExpandBarItem[] = [
  {
    title: 'Cantine & Repas',
    color: 'green',
    body: 'Des repas équilibrés sont préparés chaque jour sur place, adaptés à l’âge des enfants. Les menus de la semaine sont communiqués aux familles, et les allergies ou régimes particuliers sont pris en compte avec l’équipe.',
  },
  {
    title: 'Calendrier & Vacances',
    color: 'navy',
    body: 'L’année scolaire suit le calendrier officiel marocain, réparti en trois trimestres. Les dates de vacances et de rentrée sont communiquées à l’avance aux familles par le cahier de liaison et nos réseaux sociaux.',
  },
  {
    title: 'Suivi & Bulletins',
    color: 'sun',
    body: 'Chaque enfant est suivi individuellement : bulletins réguliers, retours oraux à la sortie des classes et rencontres individuelles avec l’enseignante à la demande. Rien ne remplace le dialogue direct.',
  },
  {
    title: 'Association des Parents',
    color: 'coral',
    body: 'Les familles sont invitées à participer à la vie de l’école : fêtes, spectacles de fin d’année et moments partagés. Une école qui grandit avec l’implication de tous.',
  },
];

const FAQ = [
  { q: 'Quels sont les horaires de l’école ?', a: 'Du lundi au vendredi, de 7h45 à 18h15 — un accueil étendu pensé pour les parents qui travaillent.' },
  { q: 'À partir de quel âge accueillez-vous les enfants ?', a: 'Dès 2 ans en crèche (TPS), puis maternelle et primaire jusqu’au CE6.' },
  { q: 'Comment se déroule une inscription ?', a: 'Une visite, un échange avec la direction, puis le dossier — simple et sans engagement. Voir la page Inscription.' },
  { q: 'Proposez-vous une cantine ?', a: 'Oui, des repas équilibrés préparés chaque jour, avec menus communiqués aux familles.' },
  { q: 'Quelles langues sont enseignées ?', a: 'Français, arabe et anglais, dès la maternelle.' },
  { q: 'Comment suivre la progression de mon enfant ?', a: 'Cahier de liaison, bulletins réguliers et rencontres individuelles avec l’équipe.' },
  { q: 'Les campus sont-ils sécurisés ?', a: 'Accès contrôlé, encadrement permanent et sols anti-choc — voir la page Campus.' },
  { q: 'Une inscription en cours d’année est-elle possible ?', a: 'Oui, selon les places disponibles par classe. Contactez le secrétariat pour vérifier la disponibilité.' },
  { q: 'Comment contacter l’enseignante de mon enfant ?', a: 'Via le cahier de liaison pour une question rapide, ou en demandant un rendez-vous individuel au secrétariat.' },
];

export const ParentsPage: React.FC = () => {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <PageHero
        tag="Espace parents"
        title="Partenaires de Leur Réussite"
        line="Une école qui parle avec les familles, chaque jour."
      />
      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Communication */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden relative">
        <DoodleHeart className="hidden lg:block absolute top-10 left-[8%] w-10 text-[#d95f43]/40 pointer-events-none" />
        <ColorCardsGrid
          heading="Vous savez toujours ce que vit votre enfant à l’école."
          cards={COMMUNICATION}
        />
      </section>

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* Accompagnement — checklist + collage */}
      <section className="bg-[#fff7ef] py-16 sm:py-24 overflow-hidden relative">
        <DoodleSun className="hidden lg:block absolute top-12 right-[8%] w-10 text-[#e3a044]/50 pointer-events-none" />
        <ChecklistSplit
          tag="Comment nous accompagnons les familles"
          title="Vous n’êtes Jamais Seuls dans ce Parcours"
          line="Chaque étape de la scolarité de votre enfant se construit avec vous."
          items={[
            'Un cahier de liaison lu et rempli chaque jour par l’enseignante',
            'Des rencontres individuelles possibles à tout moment de l’année',
            'Une équipe joignable au secrétariat de 7h45 à 18h15',
            'Des événements réguliers pour vivre la vie de l’école de l’intérieur',
          ]}
          photos={[
            PHOTOS.musique,
            PHOTOS.lecture,
            PHOTOS.echecs,
            PHOTOS.simulateur,
          ]}
          imageSide="right"
        />
      </section>

      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Vie pratique — barres dépliables */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Vie pratique"
            title="Tout ce qu’il Faut Savoir au Quotidien"
            line="Touchez chaque bloc pour en savoir plus."
            className="mb-14"
          />
          <ExpandBars items={VIE_PRATIQUE} sideLabel="AU QUOTIDIEN" />
        </div>
      </section>

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* FAQ */}
      <section className="bg-[#fff7ef] py-16 sm:py-24 overflow-hidden relative">
        <DoodleStar className="hidden lg:block absolute top-14 right-[10%] w-9 text-[#e3a044]/60 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <SectionIntro tag="Questions fréquentes" title="Vous Vous Demandez Sûrement…" className="mb-12" />

          <div className="flex flex-col gap-3 mb-12">
            {FAQ.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <motion.div
                  key={idx}
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className={`border transition-colors ${
                    isOpen ? 'bg-[#0086d9]/10 border-[#0086d9]/25' : 'bg-[#0086d9]/6 border-[#0086d9]/10'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-body font-bold text-[15px] text-[#0086d9]">{item.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="w-5 h-5 text-[#e3a044] shrink-0" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="font-body text-sm text-[#00558d]/75 leading-relaxed px-5 pb-5">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Citation décorative */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="relative bg-[#0086d9] rounded-2xl p-8 sm:p-10 text-center mb-12 overflow-hidden"
          >
            <Quote className="w-8 h-8 text-[#ffe08a]/50 mx-auto mb-4" />
            <p className="font-heading text-xl sm:text-2xl text-[#fff7ef] leading-snug max-w-xl mx-auto">
              Une équipe formée pour connaître au mieux la psychologie et les besoins de l’enfant.
            </p>
            <p className="font-body text-xs text-[#fff7ef]/85 mt-4">— Les Marronniers El Jadida</p>
          </motion.div>

          <div className="text-center">
            <p className="font-body text-sm text-[#00558d]/70 mb-4">Une autre question ?</p>
            <a
              href={`tel:${SCHOOL_INFO.phoneRaw}`}
              className="giggle-button-primary inline-flex items-center gap-3"
            >
              <Phone className="w-4 h-4 text-[#ffe08a]" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
