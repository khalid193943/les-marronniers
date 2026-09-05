/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers - FAQ & School Life (Nouvelle Génération)
 */

import React, { useState } from 'react';
import { Calendar, Plus, Minus, HelpCircle, PhoneCall, MessageCircleQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SchoolLifeAndPracticalProps {
  onOpenAdmissions: () => void;
}

export const SchoolLifeAndPractical: React.FC<SchoolLifeAndPracticalProps> = ({
  onOpenAdmissions,
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'À quel âge un enfant peut-il intégrer la Toute Petite Section (TPS) ?',
      a: 'Nous accueillons les tout-petits dès l’âge de 2 ans révolus dans un environnement spécialement aménagé au Campus Beethoven. L’apprentissage de la propreté est accompagné en douceur avec bienveillance par notre équipe d’éducatrices et d’auxiliaires de puériculture expérimentées.',
    },
    {
      q: 'Comment s’organise la répartition des espaces au sein de l’école ?',
      a: 'L’Établissement Les Marronniers El Jadida dispose d’aménagements distincts et sécurisés par tranche d’âge : un pôle dédié à la petite enfance et maternelle (2 à 5 ans) avec dortoir douillet, salle de psychomotricité, 6 classes lumineuses et cour jardinée, et un pôle primaire (du CP au CE6) avec salles spécialisées, laboratoire d’expérimentation scientifique, cinéma-théâtre et espaces d’étude.',
    },
    {
      q: 'Comment s’articule le bilinguisme et l’enseignement des langues ?',
      a: 'Dès la Toute Petite Section, les enfants baignent dans un environnement francophone et arabophone riche à travers des comptines, histoires et jeux. L’initiation à l’anglais commence dès la moyenne section par l’oral et la musique, puis se renforce au primaire avec des créneaux hebdomadaires structurés.',
    },
    {
      q: 'Quels sont les ateliers créatifs proposés aux élèves ?',
      a: 'Notre cursus intègre chaque semaine des ateliers de Théâtre, Musique & Chorale, Cinéma, Photographie et un Club d’Échecs officiel. Ces activités ne sont pas de simples options : elles font partie intégrante de notre projet éducatif global pour développer l’aisance et la créativité.',
    },
    {
      q: 'Quels sont les horaires scolaires et la garderie périscolaire ?',
      a: 'L’accueil s’effectue dès 07h45 du matin. Les cours se déroulent de 08h30 à 16h30 (avec possibilité de déjeuner sur place avec panier-repas ou traiteur). Une garderie périscolaire surveillée avec aide méthodologique aux devoirs est assurée jusqu’à 18h00.',
    },
    {
      q: 'Comment se passe la prise de rendez-vous pour les inscriptions 2026-2027 ?',
      a: 'Les préinscriptions sont actuellement ouvertes. Vous pouvez réserver un créneau de visite personnalisée via notre formulaire en ligne ou par téléphone. Vous rencontrerez la direction pédagogique et découvrirez les locaux en activité réelle.',
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="giggle-tag mb-6">
            <div className="giggle-dot" />
            <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">FOIRE AUX QUESTIONS</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[45px] text-[#084274] tracking-tight mb-6 leading-tight">
            Questions Fréquentes des Parents
          </h2>
          <p className="font-body text-base sm:text-lg text-[#084274]/80 leading-relaxed max-w-2xl mx-auto">
            Tout ce que vous souhaitez savoir sur la vie scolaire, l’accompagnement quotidien
            et les formalités d’admission aux Marronniers.
          </p>
        </motion.div>

        {/* Accordion list with Smooth AnimatePresence */}
        <div className="space-y-4 mb-14">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`overflow-hidden border-2 transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#e6ccb2] border-[#084274]/30 shadow-md' 
                    : 'bg-[#e6ccb2]/70 hover:bg-[#e6ccb2] border-[#084274]/15 shadow-xs'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg sm:text-xl font-bold text-[#084274] pr-4 leading-snug">
                    {faq.q}
                  </span>
                  
                  <div
                    className={`w-9 h-9 flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#084274] text-[#feeddb] rotate-180' : 'bg-[#feeddb] text-[#084274]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-[15px] font-body text-[#084274]/85 leading-relaxed border-t border-[#084274]/10 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom prompt Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 sm:p-10 bg-[#e6ccb2] border-2 border-[#084274]/20 shadow-lg max-w-xl mx-auto"
        >
          <div className="w-12 h-12 rounded-full bg-[#084274] text-[#feeddb] flex items-center justify-center mx-auto mb-4 shadow-sm">
            <MessageCircleQuestion className="w-6 h-6 text-[#e3a044]" />
          </div>
          <h3 className="font-heading text-2xl text-[#084274] mb-2 font-bold">
            Vous avez une question particulière ?
          </h3>
          <p className="text-sm text-[#084274]/80 mb-6 font-body max-w-md mx-auto">
            Notre équipe d’écoute pédagogique se tient à votre entière disposition pour échanger avec vous par téléphone ou lors d'un rendez-vous sur place.
          </p>
          <button
            onClick={onOpenAdmissions}
            className="giggle-button-primary text-sm py-3.5 px-8 cursor-pointer shadow-md hover:shadow-xl inline-flex items-center gap-2.5"
          >
            <Calendar className="w-4 h-4 text-[#e3a044]" />
            <span>Prendre Rendez-vous avec la Direction</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
