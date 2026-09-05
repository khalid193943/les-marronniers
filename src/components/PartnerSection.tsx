/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Section Partenariat d'Excellence
 * Magnifique mise en valeur du partenariat avec l'Institut Français d'El Jadida décliné en 4 axes stratégiques.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  BookOpen,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Star,
  Users,
  Info,
  X,
  Compass,
} from 'lucide-react';

interface PartnerSectionProps {
  onOpenAdmissions?: () => void;
  onNavigate?: (page: any) => void;
}

export const PartnerSection: React.FC<PartnerSectionProps> = ({
  onOpenAdmissions,
  onNavigate,
}) => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const partnerAxes = [
    {
      id: 1,
      tag: 'Axe 01 — CERTIFICATIONS OFFICIELLES',
      title: 'Diplômes Internationaux DELF Prim',
      badge: 'Ministère Français de l’Éducation',
      highlight: '100% Réussite',
      desc: 'Préparation et passage sur place des certifications officielles DELF Prim (A1.1, A1, A2). Un diplôme d’État reconnu dans le monde entier et valable à vie pour nos élèves du primaire.',
      details: [
        'Épreuves adaptées aux enfants de 7 à 12 ans par des examinateurs certifiés.',
        'Validation officielle du niveau de langue selon le Cadre Européen (CECRL).',
        'Atout majeur pour l’entrée dans les collèges d’excellence et parcours bilingues.',
      ],
      color: '#084274',
      accentColor: '#e3a044',
      icon: Award,
    },
    {
      id: 2,
      tag: 'Axe 02 — FONDS LITTÉRAIRE JEUNESSE',
      title: 'Médiathèque & Ressources Culturelles',
      badge: '+15 000 Ouvrages Jeunesse',
      highlight: 'Accès Privilégié',
      desc: 'Accès continu aux collections de la médiathèque de l’Institut Français d’El Jadida : albums illustrés, contes, bandes dessinées et plateforme numérique Culturethèque 24h/24.',
      details: [
        'Prêt de séries complètes pour les lectures suivies en classe.',
        'Heures du conte mensuelles et kamishibaï pour la crèche et maternelle.',
        'Rencontres régulières avec des auteurs et illustrateurs de littérature jeunesse.',
      ],
      color: '#084274',
      accentColor: '#25D366',
      icon: BookOpen,
    },
    {
      id: 3,
      tag: 'Axe 03 — SPECTACLES & ARTS VIVANTS',
      title: 'Saison Culturelle, Cinéma & Théâtre',
      badge: 'Spectacle Vivant Jeune Public',
      highlight: '6 Sorties / An',
      desc: 'Immersion de nos élèves dans la programmation artistique officielle : pièces de théâtre adaptées, séances scolaires de cinéma d’animation et résidences d’artistes.',
      details: [
        'Représentations théâtrales et marionnettes pour petits et grands.',
        'Échanges et ateliers de bord de scène avec les comédiens professionnels.',
        'Sensibilisation au 7ème art dans le cadre du Festival du Film d’Animation.',
      ],
      color: '#084274',
      accentColor: '#e3a044',
      icon: Sparkles,
    },
    {
      id: 4,
      tag: 'Axe 04 — EXCELLENCE PÉDAGOGIQUE',
      title: 'Formation Continue des Enseignants',
      badge: 'Didactique Contemporaine',
      highlight: 'Label Qualité',
      desc: 'Accompagnement et perfectionnement continu de nos professeurs par les experts linguistiques de l’Institut Français. Une garantie de rigueur et d’innovation didactique.',
      details: [
        'Séminaires annuels sur les nouvelles méthodologies d’enseignement du français.',
        'Ateliers de phonétique, prise de parole en public et théâtralisation.',
        'Échange de bonnes pratiques pédagogiques avec les équipes partenaires.',
      ],
      color: '#084274',
      accentColor: '#084274',
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#feeddb]/40 to-white relative overflow-hidden">
      {/* Decorative background stars & shapes */}
      <div className="absolute top-10 left-8 pointer-events-none opacity-20">
        <Sparkles className="w-24 h-24 text-[#e3a044]" />
      </div>
      <div className="absolute bottom-12 right-10 pointer-events-none opacity-15">
        <Star className="w-32 h-32 text-[#084274]" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="giggle-tag mb-4 mx-auto w-fit">
            <div className="giggle-dot bg-[#e3a044]" />
            <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">Partenariat Institutionnel & Culturel</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#084274] leading-[1.15] mb-5">
            L'Institut Français d'El Jadida :{' '}
            <span className="text-[#e3a044] block sm:inline font-bold">
              Un Partenaire d'Excellence
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#084274]/80 leading-relaxed">
            Pour ouvrir les horizons de nos élèves et certifier officiellement leur maîtrise de la langue, notre établissement est fier de collaborer étroitement avec l’<strong>Institut Français d'El Jadida</strong>. Un partenariat prestigieux décliné en 4 dimensions concrètes :
          </p>
        </motion.div>

        {/* 4 DUPLICATED MAGNIFICENT CARDS WITH THE LOGO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-16">
          {partnerAxes.map((axis, index) => {
            const Icon = axis.icon;
            return (
              <motion.div
                key={axis.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className="group relative bg-white p-6 sm:p-7 border-2 border-[#084274]/15 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Accent top line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#084274] via-[#e3a044] to-[#084274] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Partner Logo Card Container (The exact uploaded logo) */}
                  <div className="mb-6 bg-[#fbfcfd] p-4 border-2 border-[#004593] shadow-sm flex items-center justify-center relative group-hover:shadow-md transition-shadow">
                    <img
                      src="/assets/partner-institut-francais.svg"
                      alt="Institut Français El Jadida"
                      className="w-full max-h-24 object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#25D366] animate-pulse" />
                  </div>

                  {/* Axis Tag & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#e3a044]">
                      {axis.tag}
                    </span>
                    <span className="px-2 py-0.5 bg-[#feeddb] text-[#084274] text-[10px] font-bold border border-[#084274]/15">
                      {axis.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#084274] mb-3 leading-snug group-hover:text-[#05335b] transition-colors">
                    {axis.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm text-[#084274]/75 leading-relaxed mb-4">
                    {axis.desc}
                  </p>
                </div>

                <div>
                  {/* Key Highlights list */}
                  <div className="space-y-1.5 pt-3 border-t border-[#084274]/10 mb-5">
                    {axis.details.slice(0, 2).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#084274]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e3a044] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveModal(axis.id)}
                    className="w-full py-2.5 px-4 bg-[#feeddb] hover:bg-[#084274] text-[#084274] hover:text-white border border-[#084274]/20 transition-all text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer font-heading"
                  >
                    <span>Détails de la convention</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TRUST BANNER & KEY IMPACT FIGURES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#084274] text-white p-8 sm:p-12 border-2 border-[#084274] shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#e3a044]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="giggle-tag bg-white/10 text-[#feeddb] w-fit">
                <div className="giggle-dot bg-[#e3a044]" />
                <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">Garantie Éducative & Éthique</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                Une École Ouverte sur le Monde et les Cultures
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/85 leading-relaxed">
                Ce partenariat historique avec l’Institut Français d’El Jadida témoigne de l’exigence académique des Marronniers. Dès le primaire, nos élèves expérimentent la langue française comme un formidable vecteur de création, de pensée critique et de citoyenneté éclairée.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#e3a044]" />
                  <span>Convention de partenariat active</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#e3a044]" />
                  <span>Examens passés à El Jadida</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 border border-white/15 backdrop-blur-sm text-center">
                <span className="font-heading text-3xl font-bold text-[#e3a044] block">
                  100%
                </span>
                <span className="text-[11px] text-white/80 font-semibold leading-tight block mt-1">
                  de réussite au DELF Prim
                </span>
              </div>
              <div className="p-4 bg-white/10 border border-white/15 backdrop-blur-sm text-center">
                <span className="font-heading text-3xl font-bold text-white block">
                  15 000+
                </span>
                <span className="text-[11px] text-white/80 font-semibold leading-tight block mt-1">
                  ouvrages accessibles
                </span>
              </div>
              <div className="p-4 bg-white/10 border border-white/15 backdrop-blur-sm text-center">
                <span className="font-heading text-3xl font-bold text-white block">
                  A1.1 → A2
                </span>
                <span className="text-[11px] text-white/80 font-semibold leading-tight block mt-1">
                  niveaux CECRL validés
                </span>
              </div>
              <div className="p-4 bg-white/10 border border-white/15 backdrop-blur-sm text-center">
                <span className="font-heading text-3xl font-bold text-[#e3a044] block">
                  6 / an
                </span>
                <span className="text-[11px] text-white/80 font-semibold leading-tight block mt-1">
                  sorties & pièces théâtrales
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MODAL EN SAVOIR PLUS SUR L'AXE SÉLECTIONNÉ */}
        <AnimatePresence>
          {activeModal !== null && (
            <div
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            >
              {(() => {
                const item = partnerAxes.find((a) => a.id === activeModal);
                if (!item) return null;
                const Icon = item.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative bg-white p-6 sm:p-8 max-w-xl w-full shadow-2xl border-2 border-[#084274]"
                  >
                    <button
                      onClick={() => setActiveModal(null)}
                      className="absolute top-4 right-4 w-9 h-9 bg-[#feeddb] text-[#084274] hover:bg-[#084274] hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                      aria-label="Fermer"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#feeddb] text-[#084274] flex items-center justify-center shrink-0 border border-[#084274]/20">
                        <Icon className="w-6 h-6 text-[#084274]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#e3a044]">
                          {item.tag}
                        </span>
                        <h4 className="font-heading text-xl font-bold text-[#084274]">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    {/* Logo Banner in Modal */}
                    <div className="mb-4 p-3 bg-[#fbfcfd] border border-[#004593] flex items-center justify-center">
                      <img
                        src="/assets/partner-institut-francais.svg"
                        alt="Institut Français El Jadida"
                        className="h-16 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <p className="font-body text-xs sm:text-sm text-[#084274]/80 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="space-y-2 bg-[#feeddb]/40 p-4 border border-[#084274]/15 mb-6">
                      <h5 className="font-heading text-xs font-bold text-[#084274] uppercase tracking-wider">
                        Modalités & Engagements Concrets :
                      </h5>
                      {item.details.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#084274]/85">
                          <CheckCircle2 className="w-4 h-4 text-[#e3a044] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveModal(null)}
                        className="py-2.5 px-6 bg-[#084274] text-white text-xs font-bold hover:bg-[#05335b] transition-colors cursor-pointer font-heading"
                      >
                        Compris
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })()}
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
