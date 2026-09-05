/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Espace Parents"
 * Consolide : espace-parents + faq.
 * Communication + FAQ accordéon, items en bleu transparent.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { MessageCircle, CalendarHeart, NotebookPen, ChevronDown, Phone } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { PageHero } from '../design-system/giggle/PageHero';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { DoodleHeart, DoodleStar } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';

const COMMUNICATION = [
  { icon: NotebookPen, title: 'Cahier de Liaison', line: 'Le fil quotidien entre la classe et la maison.' },
  { icon: MessageCircle, title: 'Rencontres Individuelles', line: 'Un rendez-vous avec l’enseignante, quand vous voulez.' },
  { icon: CalendarHeart, title: 'Événements Familles', line: 'Fêtes, spectacles et portes ouvertes toute l’année.' },
];

const FAQ = [
  { q: 'Quels sont les horaires de l’école ?', a: 'Du lundi au vendredi, de 7h45 à 18h15 — un accueil étendu pensé pour les parents qui travaillent.' },
  { q: 'À partir de quel âge accueillez-vous les enfants ?', a: 'Dès 2 ans en crèche (TPS), puis maternelle et primaire jusqu’au CE6.' },
  { q: 'Comment se déroule une inscription ?', a: 'Une visite, un échange avec la direction, puis le dossier — simple et sans engagement. Voir la page Inscription.' },
  { q: 'Proposez-vous une cantine ?', a: 'Oui, des repas équilibrés préparés chaque jour, avec menus communiqués aux familles.' },
  { q: 'Quelles langues sont enseignées ?', a: 'Français, arabe et anglais, dès la maternelle.' },
  { q: 'Comment suivre la progression de mon enfant ?', a: 'Cahier de liaison, bulletins réguliers et rencontres individuelles avec l’équipe.' },
  { q: 'Les campus sont-ils sécurisés ?', a: 'Accès contrôlé, encadrement permanent et sols anti-choc — voir la page Campus.' },
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
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro tag="Communication" title="Toujours Informés" className="mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {COMMUNICATION.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={idx}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-[#084274]/6 border border-[#084274]/10 p-7 text-center"
                >
                  <span className="w-12 h-12 rounded-full bg-[#084274] text-[#e3a044] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-heading text-lg text-[#084274] mb-2">{c.title}</h3>
                  <p className="font-body text-sm text-[#084274]/70 leading-relaxed">{c.line}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* FAQ */}
      <section className="bg-[#feeddb] py-16 sm:py-24 overflow-hidden relative">
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
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`border transition-colors ${
                    isOpen ? 'bg-[#084274]/10 border-[#084274]/25' : 'bg-[#084274]/6 border-[#084274]/10'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-body font-bold text-[15px] text-[#084274]">{item.q}</span>
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
                        <p className="font-body text-sm text-[#084274]/75 leading-relaxed px-5 pb-5">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="font-body text-sm text-[#084274]/70 mb-4">Une autre question ?</p>
            <a
              href={`tel:${SCHOOL_INFO.phoneRaw}`}
              className="giggle-button-primary inline-flex items-center gap-3"
            >
              <Phone className="w-4 h-4 text-[#e3a044]" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
