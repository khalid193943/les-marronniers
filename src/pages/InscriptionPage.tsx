/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page Admissions & Rendez-vous
 * Redessinée dans l'esthétique Ovo Giggle / Éditorial Moderne
 */

import React, { useState } from 'react';
import { TitreAnime } from '../components/motion/Primitives';
import { PageHeader } from '../components/PageHeader';
import { SectionDivider } from '../components/SectionDivider';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolInfo';
import {
  Calendar,
  CheckCircle2,
  FileText,
  Clock,
  Phone,
  ArrowRight,
  Send,
  Building2,
  Sparkles,
  Award,
  ShieldCheck,
  Download,
  HelpCircle,
  MessageCircle,
  MapPin,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';

interface InscriptionPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions: () => void;
}

export const InscriptionPage: React.FC<InscriptionPageProps> = ({
  onNavigate,
}) => {
  const [activeMode, setActiveMode] = useState<'visite' | 'inscription'>('visite');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '4 ans',
    level: 'Maternelle — Moyenne Section (MS)',
    campus: 'Campus Beethoven (Crèche & Maternelle)',
    preferredDate: '',
    timeSlot: '10:00 - 11:00',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleDocCheck = (idx: number) => {
    setCheckedDocs(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const steps = [
    {
      num: '01',
      title: 'Prise de Contact & Rendez-vous',
      tag: 'Étape 1 • 5 minutes',
      desc: 'Formulez votre demande en ligne ou contactez directement le secrétariat pour convenir d’une date de visite avec la direction pédagogique.',
      icon: Calendar,
    },
    {
      num: '02',
      title: 'Visite Guidée des Locaux & Échange',
      tag: 'Étape 2 • En Présentiel',
      desc: 'Découvrez nos 6 classes baignées de lumière, la salle de sciences, le théâtre et la cour arborée. Nous prenons le temps d’échanger sur les besoins de votre enfant.',
      icon: Building2,
    },
    {
      num: '03',
      title: 'Dossier Administratif & Validation',
      tag: 'Étape 3 • Formalités',
      desc: 'Dépôt des pièces d’usage (carnet de santé, acte de naissance, bulletins pour le primaire). Un examen serein du parcours scolaire est réalisé.',
      icon: FileText,
    },
    {
      num: '04',
      title: 'Intégration & Période d’Adaptation',
      tag: 'Étape 4 • Bienvenue',
      desc: 'Accueil personnalisé dès la rentrée. Pour les plus jeunes de la crèche et maternelle, une transition progressive est planifiée avec douceur.',
      icon: Sparkles,
    },
  ];

  const requiredDocuments = [
    { text: 'Extrait d’acte de naissance original ou copie du livret de famille', cat: 'État Civil' },
    { text: 'Carnet de santé avec vaccinations obligatoires à jour', cat: 'Santé' },
    { text: '4 photos d’identité récentes couleur de l’enfant', cat: 'Identité' },
    { text: 'Certificat de scolarité et derniers bulletins de notes (pour les élèves de Primaire)', cat: 'Scolarité' },
    { text: 'Copie de la CIN des deux parents ou des tuteurs légaux', cat: 'Famille' },
    { text: 'Fiche médicale confidentielle complétée (remise par l’établissement)', cat: 'Santé' },
  ];

  return (
    <div className="bg-[#feeddb] min-h-screen">
      <PageHeader
        tag="ADMISSIONS & VISITES PRIVÉES"
        title="Rejoindre les"
        highlightedWord="Marronniers"
        description="Une démarche humaine, transparente et bienveillante pour offrir à votre enfant un parcours d'excellence dès ses premières années à El Jadida."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: 'Inscriptions & Rendez-vous' }]}
      />

      {/* Top Banner Notice */}
      <div className="bg-[#084274] text-white py-4 px-4 border-b border-[#feeddb]/15">
        <div className="max-w-[1536px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e3a044] animate-pulse" />
            <span>Inscriptions Ouvertes pour l'Année Scolaire 2026-2027 • Places Limitées par Classe</span>
          </div>
          <a
            href={`tel:${SCHOOL_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-[#e3a044] hover:underline font-bold text-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Assistance Secrétariat : {SCHOOL_INFO.phone}</span>
          </a>
        </div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20">
        
        {/* Section 1: 4 Steps Workflow in Bento Grid Style */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="giggle-tag mb-4">
              <div className="giggle-dot" />
              <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">Parcours d'Admission</span>
            </div>
            <TitreAnime as="h2" texte="4 Étapes Simples vers l’Excellence" className="font-heading text-3xl sm:text-4xl lg:text-[45px] text-[#084274] tracking-tight leading-tight" />
            <p className="font-body text-base text-[#084274]/80 mt-4 leading-relaxed">
              Nous privilégions le contact direct et l’écoute. Chaque admission commence par une rencontre chaleureuse au sein de nos campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="bg-[#e6ccb2] border-2 border-[#084274]/15 p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-[#084274]/30 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading text-3xl font-black text-[#e3a044]">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-[#084274] group-hover:bg-[#084274] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#084274]/70 block mb-2">
                      {step.tag}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#084274] mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#084274]/80 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Section 2: Form & Interactive Booking Hub */}
        <AnimatedSection direction="up" id="formulaire" className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start mb-20">
          
          {/* Main Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#e6ccb2] border-2 border-[#084274]/15 p-6 sm:p-10 shadow-xl">
            
            {/* Mode Switcher Tabs */}
            <div className="flex border-b-2 border-[#084274]/15 mb-8">
              <button
                type="button"
                onClick={() => setActiveMode('visite')}
                className={`flex-1 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                  activeMode === 'visite'
                    ? 'border-b-4 border-[#e3a044] text-[#084274] -mb-[2px] bg-white/40'
                    : 'text-[#084274]/60 hover:text-[#084274]'
                }`}
              >
                <Calendar className="w-4 h-4 text-[#e3a044]" />
                <span>Prendre Rendez-vous de Visite</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMode('inscription')}
                className={`flex-1 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                  activeMode === 'inscription'
                    ? 'border-b-4 border-[#e3a044] text-[#084274] -mb-[2px] bg-white/40'
                    : 'text-[#084274]/60 hover:text-[#084274]'
                }`}
              >
                <FileText className="w-4 h-4 text-[#e3a044]" />
                <span>Dossier de Préinscription</span>
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-heading text-2xl sm:text-3xl text-[#084274] mb-2">
                {activeMode === 'visite'
                  ? 'Planifier Votre Visite Privée'
                  : 'Formulaire de Préinscription 2026-2027'}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#084274]/80">
                {activeMode === 'visite'
                  ? 'Venez découvrir nos installations, nos classes et rencontrer l’équipe pédagogique lors d’un entretien personnalisé.'
                  : 'Transmettez les informations relatives à votre enfant pour réserver sa place avant l’entretien officiel.'}
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 border-2 border-[#24a974] text-center space-y-4 shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-[#24a974]/15 text-[#24a974] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-[#084274]">
                  Demande Transmise avec Succès !
                </h4>
                <p className="font-body text-sm text-[#084274]/80 max-w-md mx-auto leading-relaxed">
                  Merci <strong>{formData.parentName}</strong>. Notre secrétariat pédagogique a bien reçu votre demande concernant <strong>{formData.childName}</strong> ({formData.level}).
                </p>
                <div className="p-4 bg-[#feeddb] border border-[#084274]/15 text-xs text-[#084274] text-left max-w-md mx-auto space-y-1">
                  <p><strong>Campus sélectionné :</strong> {formData.campus}</p>
                  {formData.preferredDate && <p><strong>Date souhaitée :</strong> {formData.preferredDate} ({formData.timeSlot})</p>}
                  <p><strong>Téléphone de confirmation :</strong> {formData.phone}</p>
                </div>
                <p className="text-xs text-[#084274]/70">
                  Un membre de la direction vous appellera sous 24h pour confirmer le rendez-vous.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="giggle-button-secondary text-xs px-6 py-2.5 font-bold cursor-pointer"
                >
                  Envoyer une autre demande
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Campus Choice */}
                <div>
                  <label className="block text-xs font-bold text-[#084274] mb-1.5 uppercase tracking-wider">
                    Campus Concerné *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'Campus Beethoven (Crèche & Maternelle)', label: 'Campus Beethoven', sub: 'Crèche & Maternelle (2-5 ans)' },
                      { id: 'Campus Ibn Khaldoun (Primaire CP → CE6)', label: 'Campus Ibn Khaldoun', sub: 'Primaire (6-11 ans)' },
                    ].map(camp => (
                      <button
                        key={camp.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, campus: camp.id })}
                        className={`p-3 text-left border-2 transition-all cursor-pointer ${
                          formData.campus === camp.id
                            ? 'bg-white border-[#084274] shadow-sm'
                            : 'bg-white/50 border-[#084274]/20 hover:border-[#084274]/50'
                        }`}
                      >
                        <span className="font-heading font-bold text-xs text-[#084274] block">{camp.label}</span>
                        <span className="text-[11px] text-[#084274]/70">{camp.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Parents info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#084274] mb-1">
                      Nom complet du parent / tuteur *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ex: Dr. Amine Bennani"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#084274]/25 text-xs sm:text-sm text-[#084274] focus:outline-none focus:border-[#084274]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#084274] mb-1">
                      Téléphone portable joignable *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="ex: 06 61 XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#084274]/25 text-xs sm:text-sm text-[#084274] focus:outline-none focus:border-[#084274]"
                    />
                  </div>
                </div>

                {/* Child info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#084274] mb-1">
                      Prénom & Nom de l'enfant *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ex: Yasmine Bennani"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#084274]/25 text-xs sm:text-sm text-[#084274] focus:outline-none focus:border-[#084274]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#084274] mb-1">
                      Niveau Scolaire Souhaité *
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#084274]/25 text-xs sm:text-sm text-[#084274] focus:outline-none focus:border-[#084274]"
                    >
                      <optgroup label="Petite Enfance & Maternelle">
                        <option value="Crèche (2 à 3 ans)">Crèche (2 à 3 ans)</option>
                        <option value="Maternelle — Très Petite Section (TPS)">Maternelle — Très Petite Section (TPS)</option>
                        <option value="Maternelle — Petite Section (PS)">Maternelle — Petite Section (PS)</option>
                        <option value="Maternelle — Moyenne Section (MS)">Maternelle — Moyenne Section (MS)</option>
                        <option value="Maternelle — Grande Section (GS)">Maternelle — Grande Section (GS)</option>
                      </optgroup>
                      <optgroup label="Cycle Primaire">
                        <option value="Primaire — CP (Cours Préparatoire)">Primaire — CP (Cours Préparatoire)</option>
                        <option value="Primaire — CE1">Primaire — CE1</option>
                        <option value="Primaire — CE2">Primaire — CE2</option>
                        <option value="Primaire — CE3">Primaire — CE3</option>
                        <option value="Primaire — CE4">Primaire — CE4</option>
                        <option value="Primaire — CE5">Primaire — CE5</option>
                        <option value="Primaire — CE6 (Examen Officiel)">Primaire — CE6 (Examen Officiel)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Visit specific inputs */}
                {activeMode === 'visite' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/60 p-4 border border-[#084274]/15">
                    <div>
                      <label className="block text-xs font-bold text-[#084274] mb-1">
                        Date Souhaitée de Visite
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#084274]/25 text-xs text-[#084274] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#084274] mb-1">
                        Créneau Horaire Préféré
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#084274]/25 text-xs text-[#084274] focus:outline-none"
                      >
                        <option value="09:00 - 10:00">Matinée (09:00 - 10:00)</option>
                        <option value="10:30 - 11:30">Matinée (10:30 - 11:30)</option>
                        <option value="14:30 - 15:30">Après-midi (14:30 - 15:30)</option>
                        <option value="16:00 - 17:00">Fin d'après-midi (16:00 - 17:00)</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#084274] mb-1">
                    Adresse Email (optionnelle)
                  </label>
                  <input
                    type="email"
                    placeholder="ex: famille.bennani@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#084274]/25 text-xs sm:text-sm text-[#084274] focus:outline-none focus:border-[#084274]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#084274] mb-1">
                    Remarques ou questions particulières
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Précisez ici les particularités de l'enfant, langues parlées à la maison, ou vos questions sur le cursus..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#084274]/25 text-xs sm:text-sm text-[#084274] focus:outline-none focus:border-[#084274]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#084274] hover:bg-[#05335b] text-[#feeddb] font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#e3a044]" />
                  <span>
                    {activeMode === 'visite'
                      ? 'Confirmer Ma Demande de Visite Guidée'
                      : 'Soumettre le Dossier de Préinscription'}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Required Documents Checklist & Tuition Guide (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Document Checklist */}
            <div className="bg-white border-2 border-[#084274]/15 p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#e3a044]" />
                  <h4 className="font-heading text-xl font-bold text-[#084274]">
                    Pièces à Fournir
                  </h4>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#084274]/60 bg-[#feeddb] px-2.5 py-1">
                  Checklist Dossier
                </span>
              </div>
              <p className="font-body text-xs text-[#084274]/80 mb-5 leading-relaxed">
                Cochez les pièces prêtes pour préparer votre dossier lors de votre venue :
              </p>

              <div className="space-y-3">
                {requiredDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    onClick={() => toggleDocCheck(idx)}
                    className={`p-3 border transition-colors cursor-pointer flex items-start gap-3 select-none ${
                      checkedDocs[idx]
                        ? 'bg-[#feeddb]/60 border-[#24a974]/40'
                        : 'bg-[#feeddb]/20 border-[#084274]/10 hover:bg-[#feeddb]/40'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 mt-0.5 rounded-none flex items-center justify-center shrink-0 border ${
                        checkedDocs[idx]
                          ? 'bg-[#24a974] border-[#24a974] text-white'
                          : 'bg-white border-[#084274]/30'
                      }`}
                    >
                      {checkedDocs[idx] && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider block">
                        {doc.cat}
                      </span>
                      <p className="font-body text-xs text-[#084274] font-medium leading-tight">
                        {doc.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tuition & Financial Transparency */}
            <div className="bg-[#084274] text-[#feeddb] p-6 sm:p-8 border-2 border-[#084274] shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#e3a044]" />
                <h4 className="font-heading text-lg font-bold text-white">
                  Transparence Financière & Forfaits
                </h4>
              </div>
              <p className="text-xs text-[#feeddb]/85 leading-relaxed font-body mb-4">
                Nos frais de scolarité incluent l’accès aux 15+ ateliers parascolaires (échecs, théâtre, cinéma, éveil scientifique), le suivi individualisé et l'assurance scolaire.
              </p>
              <div className="space-y-2 border-t border-white/15 pt-4 text-xs">
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-white/80">Frais d'inscription & assurance :</span>
                  <span className="font-bold text-[#e3a044]">Annuels</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-white/80">Scolarité Maternelle :</span>
                  <span className="font-bold text-[#feeddb]">Tarification mensuelle</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-white/80">Scolarité Primaire (CP → CE6) :</span>
                  <span className="font-bold text-[#feeddb]">Tarification mensuelle</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-white/80">Services optionnels :</span>
                  <span className="text-white/70">Cantine équilibrée & Transport sécurisé</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-white/70">Détail communiqué lors de la visite</span>
                <a
                  href="https://wa.me/212623395603"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-xs font-bold shadow-sm hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Poser une question WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>

      <SectionDivider variant="white" position="bottom" style="wave1" />
    </div>
  );
};
