/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Pages"À Propos" Enrichies & Multi-Sectionnées
 * 1. Notre Établissement
 * 2. Nos Valeurs Fondatrices
 * 3. Direction & Équipe Pédagogique
 */

import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolInfo';
import {
  Heart,
  Shield,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
  Calendar,
  Phone,
  MapPin,
  Smile,
  BookOpen,
  Award,
  ArrowRight,
  GraduationCap,
  Trees,
  Quote,
  Clock,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions?: () => void;
}

// ==========================================
// 1. NOTRE ÉTABLISSEMENT
// ==========================================
export const AboutEtablissementPage: React.FC<AboutPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="bg-[#feeddb] min-h-screen">
      <PageHeader
        tag="01 — À PROPOS"
        title="Notre"
        highlightedWord="Établissement"
        description="Une institution scolaire privée d'excellence située au Plateau à El Jadida, dédiée à l'épanouissement des tout-petits et aux apprentissages fondamentaux du primaire."
        onNavigate={onNavigate}
        breadcrumbs={[
          { label: 'À Propos' },
          { label: 'Notre Établissement' },
        ]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16">
        
        {/* Section 1: Intro Présentation */}
        <AnimatedSection direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Une École Conçue pour l'Enfant
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#084274] leading-tight">
              Bienvenue aux <strong>Marronniers El Jadida</strong>
            </h2>
            <p className="font-body text-base text-[#084274]/85 leading-relaxed">
              Implanté au cœur du quartier résidentiel et paisible du <strong>Plateau à El Jadida</strong> (16 Lot Al Asdikaa, Rue Beethoven), notre établissement scolaire privé a été spécialement pensé pour offrir aux enfants un cadre protecteur, stimulant et profondément chaleureux.
            </p>
            <p className="font-body text-base text-[#084274]/85 leading-relaxed">
              Nous accompagnons les familles de la <strong>Crèche dès 2 ans</strong> jusqu'à la fin du <strong>Primaire au CE6</strong>. Cette continuité pédagogique évite les ruptures émotionnelles et permet à chaque enfant de bâtir son socle intellectuel dans un environnement stable où chaque enseignant le connaît personnellement.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('inscription')}
                className="cursor-pointer text-xs font-bold py-3.5 px-6 rounded-full bg-[#084274] text-white hover:bg-[#063259] transition-all flex items-center gap-2 shadow-sm font-heading"
              >
                <Calendar className="w-4 h-4 text-[#e3a044]" />
                <span>Prendre Rendez-vous / Visiter</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('locaux')}
                className="cursor-pointer text-xs font-bold py-3.5 px-6 rounded-full bg-white text-[#084274] border border-[#084274]/20 hover:bg-[#feeddb] transition-all flex items-center gap-2 shadow-sm font-heading"
              >
                <Compass className="w-4 h-4 text-[#084274]" />
                <span>Explorer nos 2 Campus</span>
              </motion.button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80"
                alt="Établissement Les Marronniers El Jadida"
                className="w-full h-88 object-cover"
              />
              <div className="p-5 bg-white flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#084274]">
                    Plateau, El Jadida
                  </h4>
                  <p className="text-xs text-[#084274]/70">
                    Rue Beethoven & Ibn Khaldoun
                  </p>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#e3a044]/20 text-[#084274] font-bold text-xs">
                  Crèche → CE6
                </span>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Section 2: Pourquoi "Les Marronniers" ? */}
        <AnimatedSection direction="up" className="mb-24 bg-white rounded-3xl p-8 sm:p-12 border border-[#084274]/15 shadow-md">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-[#e3a044] mb-2">
              <Trees className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Symbole & Identité
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl text-[#084274]">
              Pourquoi « Les Marronniers » ?
            </h3>
            <p className="text-sm sm:text-base text-[#084274]/80 mt-3 leading-relaxed">
              Le marronnier est un arbre majestueux qui puise des racines profondes dans la terre avant de déployer un feuillage dense et protecteur vers le ciel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="p-6 bg-[#feeddb]/40 rounded-2xl border border-[#084274]/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#084274] text-white flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h4 className="font-heading text-base font-bold text-[#084274] mb-2">
                Des Racines Solides
              </h4>
              <p className="text-xs text-[#084274]/75 leading-relaxed">
                Les apprentissages fondamentaux (lire, écrire, compter, raisonner) sont ancrés avec rigueur dès la petite section pour former un socle inébranlable.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="p-6 bg-[#feeddb]/40 rounded-2xl border border-[#084274]/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#084274] text-white flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h4 className="font-heading text-base font-bold text-[#084274] mb-2">
                Un Ombrage Protecteur
              </h4>
              <p className="text-xs text-[#084274]/75 leading-relaxed">
                Comme le feuillage qui abrite des intempéries, notre école offre un cocon bienveillant où chaque enfant grandit en confiance, protégé de toute pression négative.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="p-6 bg-[#feeddb]/40 rounded-2xl border border-[#084274]/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#084274] text-white flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h4 className="font-heading text-base font-bold text-[#084274] mb-2">
                L'Élévation vers l'Avenir
              </h4>
              <p className="text-xs text-[#084274]/75 leading-relaxed">
                Les branches qui s'élancent symbolisent l'ouverture sur le monde : le trilinguisme, l'éveil scientifique, l'art et les ambitions d'excellence au collège.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Section 3: Nos Engagements Fondateurs */}
        <AnimatedSection direction="up" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Notre Promesse
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl text-[#084274] mt-2">
              Les 3 Engagements Fondateurs de l'Établissement
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -6 }} className="bg-white p-7 rounded-2xl border border-[#084274]/15 shadow-sm transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#feeddb] flex items-center justify-center text-xl mb-4 text-[#084274]">
                👶
              </div>
              <h4 className="font-heading text-lg font-bold text-[#084274] mb-2">
                Spécialistes de la Petite Enfance & Primaire
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#084274]/75 leading-relaxed">
                Une infrastructure et une équipe exclusivement vouées aux enfants de 2 à 11 ans. Les rythmes biologiques, le sommeil et le jeu sont respectés sans concession.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="bg-white p-7 rounded-2xl border border-[#084274]/15 shadow-sm transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#feeddb] flex items-center justify-center text-xl mb-4 text-[#084274]">
                🛡️
              </div>
              <h4 className="font-heading text-lg font-bold text-[#084274] mb-2">
                Sécurité Maximale & Locaux Normés
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#084274]/75 leading-relaxed">
                Sol extérieur amortissant anti-choc certifié, mobilier aux normes européennes, matériel didactique soigné et stationnement pratique Rue Beethoven.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="bg-white p-7 rounded-2xl border border-[#084274]/15 shadow-sm transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#feeddb] flex items-center justify-center text-xl mb-4 text-[#084274]">
                🌱
              </div>
              <h4 className="font-heading text-lg font-bold text-[#084274] mb-2">
                Éveil Vivant & Réussite Académique
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#084274]/75 leading-relaxed">
                Laboratoire d'expériences scientifiques, théâtre, club d'échecs, musique et un taux historique de 100% de réussite aux examens officiels du CE6.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Section 4: Lien vers Valeurs & Équipe */}
        <AnimatedSection direction="up" className="bg-gradient-to-r from-[#084274] to-[#0c5696] text-white rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="font-heading text-2xl text-white">
              Découvrez les Femmes et les Hommes de l'École
            </h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Consultez les principes éthiques qui nous guident et rencontrez notre équipe pédagogique dévouée.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('about-valeurs')}
              className="cursor-pointer text-xs font-bold py-3 px-5 rounded-full bg-[#e3a044] text-[#084274] hover:bg-[#d69337] transition-all font-heading flex items-center gap-1.5"
            >
              <span>Nos Valeurs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('about-equipe')}
              className="cursor-pointer text-xs font-bold py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all font-heading flex items-center gap-1.5"
            >
              <span>L'Équipe Pédagogique</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

// ==========================================
// 2. NOS VALEURS
// ==========================================
export const AboutValeursPage: React.FC<AboutPageProps> = ({
  onNavigate,
}) => {
  const valeurs = [
    {
      icon: Heart,
      title: 'Bienveillance Éducative',
      desc: 'Un regard positif posé sur chaque enfant, qui valorise ses efforts, accueille ses émotions et respecte son rythme propre de développement sans comparaison blessante.',
    },
    {
      icon: Shield,
      title: 'Sécurité & Sérénité',
      desc: 'Une vigilance constante sur la protection physique et affective, avec des espaces pensés pour prévenir tout risque et rassurer parents et enfants à chaque heure.',
    },
    {
      icon: Smile,
      title: 'Joie & Plaisir d’Apprendre',
      desc: 'Nous croyons qu’un enfant qui apprend avec enthousiasme retient mieux et grandit confiant. Le sourire et le bien-être sont le moteur de chaque cours.',
    },
    {
      icon: Compass,
      title: 'Autonomie & Responsabilité',
      desc: 'Accompagner l’enfant vers l’indépendance : ranger son matériel, exprimer ses besoins clairement, mener un projet jusqu’au bout et s’auto-évaluer avec fierté.',
    },
    {
      icon: Sparkles,
      title: 'Curiosité & Éveil Sensible',
      desc: 'Nourrir l’appétit naturel d’apprendre par l’expérimentation scientifique, les projets artistiques, le théâtre et l’ouverture sur le monde.',
    },
    {
      icon: BookOpen,
      title: 'Rigueur & Fondamentaux',
      desc: 'Donner des bases solides en français, arabe littéraire, anglais, mathématiques et sciences, pour assurer un passage serein et brillant vers le collège.',
    },
    {
      icon: Users,
      title: 'Alliance avec les Familles',
      desc: 'Une relation de confiance sincère et transparente. L’école et les parents marchent main dans la main à travers un dialogue continu.',
    },
    {
      icon: Award,
      title: 'Respect & Vivre-Ensemble',
      desc: 'Apprendre à écouter les autres, partager les espaces de jeux, coopérer et grandir en citoyens tolérants, polis et responsables.',
    },
  ];

  return (
    <div className="bg-[#feeddb] min-h-screen">
      <PageHeader
        tag="01 — À PROPOS"
        title="Nos"
        highlightedWord="Valeurs"
        description="Les principes éducatifs et humains qui guident chaque journée au sein de notre établissement Les Marronniers El Jadida."
        onNavigate={onNavigate}
        breadcrumbs={[
          { label: 'À Propos', page: 'about-etablissement' },
          { label: 'Nos Valeurs' },
        ]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16">
        
        {/* Section 1: Le Manifeste Éducatif */}
        <AnimatedSection direction="up" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#084274]/15 shadow-md mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
                Manifeste Éthique
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#084274]">
                « Chaque Enfant Est Unique, Chaque Potentiel Est Précieux »
              </h3>
              <p className="text-sm sm:text-base text-[#084274]/80 leading-relaxed">
                Aux Marronniers, nous croyons qu'une éducation réussie est celle qui allie la douceur du cœur à la rigueur de l'esprit. L'intelligence ne s'épanouit pleinement que dans un climat de bienveillance où l'enfant se sent aimé, respecté et encouragé.
              </p>
              <div className="p-4 bg-[#feeddb]/60 rounded-xl border border-[#084274]/10 text-xs text-[#084274]/80 italic">
                « Élever un enfant, c’est lui donner des racines pour grandir et des ailes pour s'envoler. »
              </div>
            </div>

            <div className="lg:col-span-4 text-center">
              <motion.div 
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-24 h-24 rounded-full bg-[#084274] text-[#feeddb] flex items-center justify-center mx-auto mb-4 shadow-md"
              >
                <Heart className="w-12 h-12 text-[#e3a044]" />
              </motion.div>
              <h5 className="font-heading text-base font-bold text-[#084274]">
                La Règle des 3 C
              </h5>
              <p className="text-xs text-[#084274]/70 mt-1">
                Confiance • Curiosité • Coopération
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Section 2: Les 8 Piliers de Valeurs */}
        <AnimatedSection direction="up" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Nos Piliers
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl text-[#084274] mt-2">
              Les 8 Engagements Quotidiens
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, boxShadow: "0 10px 25px -5px rgba(8, 66, 116, 0.1)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 border border-[#084274]/15 shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#feeddb] text-[#084274] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-[#084274] mb-2">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs text-[#084274]/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#084274]/10 text-[10px] font-bold text-[#e3a044] uppercase">
                    Valeur {idx + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Section 3: Navigation */}
        <AnimatedSection direction="up" className="text-center max-w-xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('about-equipe')}
            className="cursor-pointer text-xs font-bold py-3.5 px-8 rounded-full bg-[#084274] text-white hover:bg-[#063259] transition-all font-heading inline-flex items-center gap-2 shadow-md"
          >
            <span>Rencontrer Notre Équipe Pédagogique</span>
            <ArrowRight className="w-4 h-4 text-[#e3a044]" />
          </motion.button>
        </AnimatedSection>

      </div>
    </div>
  );
};

// ==========================================
// 3. NOTRE ÉQUIPE
// ==========================================
export const AboutEquipePage: React.FC<AboutPageProps> = ({
  onNavigate,
}) => {
  const poles = [
    {
      title: 'La Direction Pédagogique',
      desc: 'Une équipe de direction présente sur le terrain, à l’écoute des familles et garante du projet d’excellence de l’école.',
      icon: GraduationCap,
      members: 'Direction Générale, Responsable Pédagogique & Vie Scolaire',
    },
    {
      title: 'Pôle Maternelle & Petite Enfance',
      desc: 'Des éducatrices bienveillantes formées à la petite enfance et à la méthode Montessori, secondées par des auxiliaires dévouées.',
      icon: Heart,
      members: 'Éducatrices Francophones, Arabophones & Aides-Maternelles',
    },
    {
      title: 'Pôle Primaire d’Excellence',
      desc: 'Des professeurs chevronnés spécialistes de chaque discipline (Français, Maths Singapour, Arabe classique, Sciences, Anglais).',
      icon: BookOpen,
      members: 'Professeurs du CP au CE6 certifiés Éducation Nationale',
    },
    {
      title: 'Pôle Activités & Éveil Artistique',
      desc: 'Des intervenants experts pour animer le club d’échecs, le théâtre, les ateliers scientifiques et l’expression corporelle.',
      icon: Sparkles,
      members: 'Maître d’Échecs, Metteur en scène de Théâtre & Coach Sportif',
    },
  ];

  return (
    <div className="bg-[#feeddb] min-h-screen">
      <PageHeader
        tag="01 — À PROPOS"
        title="Notre"
        highlightedWord="Équipe"
        description="Des éducateurs passionnés, des enseignants qualifiés et un personnel bienveillant entièrement dédiés à la réussite et au bonheur de votre enfant."
        onNavigate={onNavigate}
        breadcrumbs={[
          { label: 'À Propos', page: 'about-etablissement' },
          { label: 'Notre Équipe' },
        ]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16">
        
        {/* Mot de la Direction */}
        <AnimatedSection direction="up" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#084274]/15 shadow-md mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
                Mot de la Direction
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#084274]">
                « Une Équipe Soudée, Humaine et Engagée »
              </h3>
              <p className="text-sm sm:text-base text-[#084274]/80 leading-relaxed">
                Chers parents, la force des Marronniers réside dans la qualité humaine et la compétence professionnelle de son équipe. Chacun de nos collaborateurs a été choisi non seulement pour ses diplômes, mais pour sa patience, son empathie et sa passion d'enseigner.
              </p>
              <p className="text-sm sm:text-base text-[#084274]/80 leading-relaxed">
                Notre porte est toujours ouverte. Nous croyons profondément que c’est en dialoguant avec vous, dans la franchise et la bienveillance, que nous offrons le meilleur à votre enfant.
              </p>
            </div>

            <div className="lg:col-span-4 text-center p-6 bg-[#feeddb]/50 rounded-2xl border border-[#084274]/10">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-full bg-[#084274] text-white flex items-center justify-center mx-auto mb-3 font-heading text-2xl font-bold"
              >
                LM
              </motion.div>
              <h5 className="font-heading text-base font-bold text-[#084274]">
                Direction des Marronniers
              </h5>
              <p className="text-xs text-[#084274]/70">
                Plateau, Rue Beethoven — El Jadida
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Les 4 Pôles de Compétences */}
        <AnimatedSection direction="up" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Organisation Pédagogique
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl text-[#084274] mt-2">
              Une Équipe Pluridisciplinaire Complète
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {poles.map((pole, idx) => {
              const Icon = pole.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, boxShadow: "0 10px 25px -5px rgba(8, 66, 116, 0.1)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-7 border border-[#084274]/15 shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#feeddb] text-[#084274] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-[#084274]">
                      {pole.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#084274]/75 leading-relaxed mb-4">
                    {pole.desc}
                  </p>
                  <div className="p-3 bg-[#feeddb]/40 rounded-xl text-xs font-semibold text-[#084274]">
                    {pole.members}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* CTA Inscription / Rencontre */}
        <AnimatedSection direction="up" className="text-center max-w-xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('inscription')}
            className="cursor-pointer text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full bg-[#e3a044] text-[#084274] hover:bg-[#d69337] transition-all font-heading shadow-md inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Prendre Rendez-vous avec l'Équipe</span>
          </motion.button>
        </AnimatedSection>

      </div>
    </div>
  );
};
