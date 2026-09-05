/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page Espace Parents & Alliance Éducative
 * Esthétique Ovo Giggle / Bento Grids / Menus Cantine / Signalement d'Absence
 */

import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionDivider } from '../components/SectionDivider';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolInfo';
import {
  Users,
  Clock,
  Phone,
  Mail,
  FileText,
  Calendar,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Car,
  Download,
  Send,
  Utensils,
  ShieldCheck,
  Heart,
  Baby,
  GraduationCap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';

interface EspaceParentsProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions: () => void;
}

export const EspaceParentsPage: React.FC<EspaceParentsProps> = ({
  onNavigate,
  onOpenAdmissions,
}) => {
  const [activeTab, setActiveTab] = useState<'services' | 'menus' | 'absences' | 'contact'>('services');

  // Absence form state
  const [childName, setChildName] = useState('');
  const [childClass, setChildClass] = useState('CP');
  const [absenceDate, setAbsenceDate] = useState('');
  const [absenceReason, setAbsenceReason] = useState('');
  const [absenceSent, setAbsenceSent] = useState(false);

  // Weekly Menu (Semaine Type Cantine Saine)
  const weeklyMenu = [
    {
      day: 'Lundi',
      entree: 'Velouté de potiron & carottes bio aux fines herbes',
      plat: 'Filet de poisson blanc en papillote & riz basmati aux petits légumes',
      dessert: 'Compote maison de pommes et poires à la cannelle',
    },
    {
      day: 'Mardi',
      entree: 'Salade marocaine traditionnelle (tomates, concombres & persil)',
      plat: 'Tajine de poulet fermier aux olives & carottes fondantes',
      dessert: 'Orange à la fleur d’oranger & biscuit sablé',
    },
    {
      day: 'Mercredi',
      entree: 'Soupe de lentilles corail & petits croûtons dorés',
      plat: 'Gratin de pâtes complètes aux épinards et béchamel légère',
      dessert: 'Yaourt nature brassé au miel d’oranger',
    },
    {
      day: 'Jeudi',
      entree: 'Betteraves rôties râpées & dés de fromage frais',
      plat: 'Émincé de bœuf braisé & purée maison de pommes de terre à l’huile d’olive',
      dessert: 'Fruits de saison tranchés (pastèque ou clémentines)',
    },
    {
      day: 'Vendredi',
      entree: 'Salade de crudités de saison & graines de sésame',
      plat: 'Couscous royal aux sept légumes traditionnels & pois chiches',
      dessert: 'Raisins frais & dattes medjool de Zagora',
    },
  ];

  const handleAbsenceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAbsenceSent(true);
  };

  return (
    <div className="bg-[#feeddb] min-h-screen">
      <PageHeader
        tag="PORTAIL FAMILLE & ALLIANCE ÉDUCATIVE"
        title="Espace"
        highlightedWord="Parents"
        description="Parce que la réussite d'un enfant repose sur un dialogue constant entre l'école et la famille, retrouvez ici tous vos outils et démarches du quotidien."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: 'Espace Parents' }]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20">
        
        {/* Navigation Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {[
            { id: 'services', label: 'Services & Horaires', icon: Clock },
            { id: 'menus', label: 'Menus de la Cantine Saine', icon: Utensils },
            { id: 'absences', label: 'Signaler une Absence', icon: AlertCircle },
            { id: 'contact', label: 'Prendre Rendez-vous Enseignant', icon: MessageSquare },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer border-2 ${
                  activeTab === tab.id
                    ? 'bg-[#084274] text-white border-[#084274] shadow-md scale-105'
                    : 'bg-white text-[#084274] hover:bg-white/80 border-[#084274]/15'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#e3a044]' : 'text-[#084274]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB CONTENTS WITH ANIMATEPRESENCE */}
        <AnimatePresence mode="wait">
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* 3 Bento Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Horaires et Accueil */}
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#e6ccb2] p-8 border-2 border-[#084274]/15 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#084274] text-[#feeddb] flex items-center justify-center mb-6">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#084274] mb-3">
                      Horaires d'Accueil
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#084274]/80 leading-relaxed mb-6">
                      Le secrétariat et l'équipe de direction sont à votre service pour toutes vos formalités et questions pédagogiques.
                    </p>
                    <div className="space-y-2 text-xs font-semibold text-[#084274] pt-2 border-t border-[#084274]/15">
                      <div className="flex justify-between py-1">
                        <span>Lundi au Vendredi :</span>
                        <span className="font-bold">07h45 — 17h30</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Accueil Périscolaire :</span>
                        <span className="font-bold">Dès 07h45 & jusqu’à 18h00</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Samedi Matin :</span>
                        <span className="font-bold">Sur rendez-vous</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#084274]/10 text-xs text-[#084274]/70">
                    Accueil téléphonique continu durant les heures de cours.
                  </div>
                </motion.div>

                {/* Ligne Directe & Urgences */}
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#e6ccb2] p-8 border-2 border-[#084274]/15 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#084274] text-[#feeddb] flex items-center justify-center mb-6">
                      <Phone className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#084274] mb-3">
                      Ligne Directe Établissement
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#084274]/80 leading-relaxed mb-6">
                      Une ligne téléphonique prioritaire pour joindre l'accueil, signaler un retard ou planifier un entretien.
                    </p>
                    <a
                      href={`tel:${SCHOOL_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 text-base font-heading font-bold text-[#084274] hover:text-[#e3a044] transition-colors p-3 bg-white/70 border border-[#084274]/10 w-full"
                    >
                      <Phone className="w-4 h-4 text-[#e3a044]" />
                      <span>{SCHOOL_INFO.phone}</span>
                    </a>
                    <p className="text-[11px] text-[#084274]/70 mt-3">
                      {SCHOOL_INFO.fullAddress}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#084274]/10 text-xs text-[#084274]/70">
                    Numéro direct pour joindre la vie scolaire.
                  </div>
                </motion.div>

                {/* Accès & Stationnement */}
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#e6ccb2] p-8 border-2 border-[#084274]/15 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#084274] text-[#feeddb] flex items-center justify-center mb-6">
                      <Car className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#084274] mb-3">
                      Dépose & Stationnement
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#084274]/80 leading-relaxed mb-6">
                      Le quartier résidentiel du Plateau bénéficie de voiries calmes et d'aires de stationnement immédiates le long de la Rue Beethoven.
                    </p>
                    <div className="p-3.5 bg-white/70 border border-[#084274]/15 text-xs text-[#084274] font-semibold space-y-1">
                      <p className="text-[#24a974] font-bold">✓ Pas de bouchons chroniques</p>
                      <p>✓ Dépose-minute sécurisée devant l'entrée</p>
                      <p>✓ Agent de sécurité présent aux horaires de rentrée</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#084274]/10 text-xs text-[#084274]/70">
                    Environnement paisible et circulation apaisée.
                  </div>
                </motion.div>

              </div>

              {/* Téléchargements & Documents Utiles */}
              <div className="bg-[#084274] text-[#feeddb] p-8 sm:p-12 border-2 border-[#084274] shadow-2xl">
                <div className="max-w-3xl mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block mb-2">
                    Démarches Administratives
                  </span>
                  <h3 className="font-heading text-3xl font-bold text-white">
                    Documents Pratiques & Téléchargements
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'Règlement Intérieur 2026-2027', desc: 'Droits, devoirs et vie en collectivité', size: 'PDF • 240 Ko' },
                    { title: 'Calendrier des Vacances Scolaires', desc: 'Congés officiels et ponts du ministère', size: 'PDF • 180 Ko' },
                    { title: 'Fiche Médicale d’Urgence', desc: 'Allergies, vaccinations et autorisations', size: 'PDF • 195 Ko' },
                  ].map((doc, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white/10 p-5 border border-white/15 flex flex-col justify-between hover:bg-white/15 transition-all"
                    >
                      <div>
                        <FileText className="w-6 h-6 text-[#e3a044] mb-3" />
                        <h4 className="font-heading text-base font-bold text-white mb-1">{doc.title}</h4>
                        <p className="text-xs text-[#feeddb]/80 mb-4">{doc.desc}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs pt-3 border-t border-white/15">
                        <span className="text-white/60">{doc.size}</span>
                        <button
                          onClick={() => alert(`Téléchargement de : ${doc.title}`)}
                          className="text-[#e3a044] hover:text-white font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Télécharger</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 2: MENUS DE LA CANTINE */}
          {activeTab === 'menus' && (
            <motion.div
              key="menus"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044]">
                  Nutrition Équilibrée & Produits Frais
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl text-[#084274] mt-2 mb-3">
                  Au Menu de la Cantine cette Semaine
                </h2>
                <p className="font-body text-xs sm:text-sm text-[#084274]/80 leading-relaxed">
                  Chaque repas est préparé le matin même à partir d’ingrédients frais locaux, selon un plan nutritionnel validé pour la croissance des enfants.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weeklyMenu.map((m, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#e6ccb2] p-6 border-2 border-[#084274]/15 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-[#084274]/15 mb-4">
                        <span className="font-heading text-xl font-bold text-[#084274]">{m.day}</span>
                        <span className="px-2.5 py-1 bg-[#084274] text-[#feeddb] text-[10px] font-bold uppercase">
                          Menu Équilibré
                        </span>
                      </div>

                      <div className="space-y-4 text-xs font-body">
                        <div>
                          <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider block">Entrée :</span>
                          <p className="text-[#084274] font-semibold mt-0.5">{m.entree}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-[#084274] uppercase tracking-wider block">Plat Chaud :</span>
                          <p className="text-[#084274] font-semibold mt-0.5">{m.plat}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider block">Dessert :</span>
                          <p className="text-[#084274] font-semibold mt-0.5">{m.dessert}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-[#084274]/10 text-[11px] text-[#084274]/70 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#24a974]" />
                      <span>Pain complet & eau minérale à volonté</span>
                    </div>
                  </motion.div>
                ))}

                {/* Charte Nutritionnelle */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#084274] text-[#feeddb] p-6 border-2 border-[#084274] shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <Utensils className="w-8 h-8 text-[#e3a044] mb-3" />
                    <h4 className="font-heading text-lg font-bold text-white mb-2">Notre Charte Santé</h4>
                    <ul className="text-xs text-[#feeddb]/85 space-y-2 mb-4">
                      <li>• Aucun aliment ultra-transformé ou friture excessive</li>
                      <li>• Produits frais achetés auprès de maraîchers de la région</li>
                      <li>• Prise en charge individualisée des allergies (PAI)</li>
                      <li>• Apprentissage de la politesse à table et de la dégustation</li>
                    </ul>
                  </div>
                  <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider">
                    Cuisiné avec amour chaque matin
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: SIGNALER UNE ABSENCE */}
          {activeTab === 'absences' && (
            <motion.div
              key="absences"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto bg-[#e6ccb2] p-8 sm:p-12 border-2 border-[#084274]/20 shadow-xl"
            >
              <div className="text-center mb-8">
                <AlertCircle className="w-10 h-10 text-[#e3a044] mx-auto mb-2" />
                <h3 className="font-heading text-2xl sm:text-3xl text-[#084274]">
                  Signaler une Absence
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#084274]/80 mt-1">
                  Afin de préserver la sécurité de tous, toute absence doit être signalée avant 09h00.
                </p>
              </div>

              {absenceSent ? (
                <div className="p-6 bg-white border-2 border-[#24a974] text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#24a974] mx-auto mb-3" />
                  <h4 className="font-heading text-lg font-bold text-[#084274] mb-1">Absence bien transmise</h4>
                  <p className="text-xs text-[#084274]/80">
                    L'enseignant(e) de <strong>{childName}</strong> ({childClass}) et la vie scolaire ont été immédiatement notifiés.
                  </p>
                  <button
                    onClick={() => {
                      setAbsenceSent(false);
                      setChildName('');
                      setAbsenceReason('');
                    }}
                    className="mt-4 giggle-button-primary px-5 py-2 text-xs font-bold cursor-pointer"
                  >
                    Déclarer une autre absence
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAbsenceSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-[#084274] block mb-1">Nom & Prénom de l’Enfant *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Youssef El Amrani"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#084274]/20 text-[#084274] focus:outline-none focus:border-[#084274]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-[#084274] block mb-1">Classe / Niveau *</label>
                      <select
                        value={childClass}
                        onChange={(e) => setChildClass(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#084274]/20 text-[#084274] focus:outline-none focus:border-[#084274]"
                      >
                        <option value="Crèche">Crèche (2-3 ans)</option>
                        <option value="Petite Section">Petite Section (PS)</option>
                        <option value="Moyenne Section">Moyenne Section (MS)</option>
                        <option value="Grande Section">Grande Section (GS)</option>
                        <option value="CP">CP</option>
                        <option value="CE1">CE1</option>
                        <option value="CE2">CE2</option>
                        <option value="CE3">CE3</option>
                        <option value="CE4">CE4</option>
                        <option value="CE5">CE5</option>
                        <option value="CE6">CE6</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-[#084274] block mb-1">Date ou Période *</label>
                      <input
                        type="date"
                        required
                        value={absenceDate}
                        onChange={(e) => setAbsenceDate(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#084274]/20 text-[#084274] focus:outline-none focus:border-[#084274]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-[#084274] block mb-1">Motif de l'absence</label>
                    <textarea
                      rows={3}
                      placeholder="Raison médicale, déplacement familial, etc."
                      value={absenceReason}
                      onChange={(e) => setAbsenceReason(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#084274]/20 text-[#084274] focus:outline-none focus:border-[#084274]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full giggle-button-primary py-3.5 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <Send className="w-4 h-4 text-[#e3a044]" />
                    <span>Transmettre le Signalement à l'École</span>
                  </button>
                </form>
              )}
            </motion.div>
          )}

          {/* TAB 4: RENDEZ-VOUS ENSEIGNANT */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto bg-[#084274] text-[#feeddb] p-8 sm:p-12 border-2 border-[#084274] shadow-2xl"
            >
              <h3 className="font-heading text-2xl sm:text-3xl text-white mb-3">
                Demande d'Entretien Individuel
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#feeddb]/85 leading-relaxed mb-8">
                Chaque enseignant et la direction reçoivent sur rendez-vous après les cours pour faire le point sur les progrès de votre enfant dans un esprit d'écoute et de collaboration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white/10 border border-white/15">
                  <span className="font-bold text-xs text-[#e3a044] block mb-1">Via le Cahier de Liaison</span>
                  <p className="text-xs text-white/80">Glissez une demande écrite dans le cartable de votre enfant avec vos disponibilités préférées.</p>
                </div>
                <div className="p-4 bg-white/10 border border-white/15">
                  <span className="font-bold text-xs text-[#e3a044] block mb-1">Via le Secrétariat Téléphonique</span>
                  <p className="text-xs text-white/80">Appelez au {SCHOOL_INFO.phone} pour convenir d'une date en accord avec le planning de la maîtresse.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="giggle-button-primary px-6 py-3 text-xs font-bold flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  <Phone className="w-4 h-4 text-[#e3a044]" />
                  <span>Appeler le Secrétariat</span>
                </a>
                <button
                  onClick={onOpenAdmissions}
                  className="giggle-button-secondary px-5 py-3 text-xs font-bold cursor-pointer hover:scale-105"
                >
                  Prendre Rendez-vous de Visite
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <SectionDivider variant="white" position="bottom" style="wave1" />
    </div>
  );
};
