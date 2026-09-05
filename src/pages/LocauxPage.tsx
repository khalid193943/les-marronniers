/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page Découvrir les 2 Campus & Visiter en Personne
 * Esthétique Ovo Giggle / Bento Grids / Tilted Layers
 */

import React, { useState } from 'react';
import { TitreAnime } from '../components/motion/Primitives';
import { PageHeader } from '../components/PageHeader';
import { SectionDivider } from '../components/SectionDivider';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolInfo';
import {
  Building2,
  Sparkles,
  Film,
  Activity,
  Trees,
  Shield,
  Car,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Baby,
  GraduationCap,
  MapPin,
  Clock,
  Award,
  Maximize2,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LocauxPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions: () => void;
}

export const LocauxPage: React.FC<LocauxPageProps> = ({
  onNavigate,
  onOpenAdmissions,
}) => {
  const [activeCampus, setActiveCampus] = useState<'beethoven' | 'ibnkhaldoun'>('beethoven');
  const [activeFilter, setActiveFilter] = useState<'all' | 'classes' | 'sciences' | 'scene' | 'jardin'>('all');

  const beethovenFeatures = [
    {
      title: '6 Classes Maternelles Baignées de Lumière',
      desc: 'Grandes baies vitrées orientées pour un ensoleillement naturel constant, aération continue et mobilier ergonomique adapté aux enfants de 2 à 5 ans.',
      tag: 'Classes & Éveil',
      badge: 'Lumière Naturelle',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Salle de Motricité & Modules Mous',
      desc: 'Espace capitonné sécurisé avec parcours psychomoteurs, poutres d’équilibre, tapis amortissants et modules en mousse pour la motricité globale.',
      tag: 'Psychomotricité',
      badge: 'Sol Amortissant',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Cour Jardinée & Espace de Plein Air',
      desc: 'Vaste cour sécurisée avec arbres d’ombrage, jeux éducatifs d’extérieur et revêtement certifié anti-chocs pour courir en toute sérénité.',
      tag: 'Plein Air',
      badge: 'Revêtement Anti-Chute',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Dortoir & Espace Repos Climatise',
      desc: 'Un havre de calme pensé pour la sieste des tout-petits, avec lits individuels confortables, literie hygiénique et surveillance permanente.',
      tag: 'Bien-être & Repos',
      badge: 'Surveillance Continue',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const ibnKhaldounFeatures = [
    {
      title: 'Classes Primaires Équipées & Connectées',
      desc: 'Salles spacieuses et climatisées, équipées de vidéoprojecteurs interactifs et de tableaux propices à l’apprentissage collaboratif.',
      tag: 'Cycle Primaire',
      badge: 'CP au CE6',
      image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Laboratoire d’Éveil Scientifique & Robotique',
      desc: 'Matériel didactique moderne, paillasses d’observation, microscopes adaptés et kits d’expérimentation pour la méthode d’investigation.',
      tag: 'Sciences & Découverte',
      badge: 'Expérimentation Directe',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Espace Cinéma, Théâtre & Spectacles',
      desc: 'Véritable scène intérieure dotée d’un écran géant et d’une acoustique étudiée pour les répétitions de théâtre, le chant et les projections.',
      tag: 'Arts & Scène',
      badge: 'Scène de 50 places',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Club Officiel d’Échecs & Bibliothèque',
      desc: 'Espace calme dédié au raisonnement stratégique et à la lecture trilingue (Français, Arabe, Anglais) avec échiquiers de compétition.',
      tag: 'Stratégie & Lecture',
      badge: 'Club d’Échecs Officiel',
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const currentFeatures = activeCampus === 'beethoven' ? beethovenFeatures : ibnKhaldounFeatures;

  return (
    <div className="bg-[#feeddb] min-h-screen">
      <PageHeader
        tag="INFRASTRUCTURES & VISITE EN PRÉSENTIEL"
        title="Découvrez les"
        highlightedWord="2 Campus"
        description="Deux environnements d'apprentissage pensés sur-mesure au Plateau d'El Jadida pour accueillir vos enfants dans des conditions de confort et de sécurité optimales."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: 'Nos 2 Campus' }]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20">
        
        {/* Campus Switcher Banner (Big Modern Selector) */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#e6ccb2] p-2 border-2 border-[#084274]/15">
            <button
              onClick={() => setActiveCampus('beethoven')}
              className={`p-4 sm:p-6 text-left transition-all cursor-pointer flex items-center gap-4 ${
                activeCampus === 'beethoven'
                  ? 'bg-[#084274] text-white shadow-lg'
                  : 'bg-white/60 text-[#084274] hover:bg-white'
              }`}
            >
              <div className={`w-12 h-12 rounded-none flex items-center justify-center shrink-0 ${
                activeCampus === 'beethoven' ? 'bg-[#e3a044] text-[#084274]' : 'bg-[#084274] text-white'
              }`}>
                <Baby className="w-6 h-6" />
              </div>
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                  activeCampus === 'beethoven' ? 'text-[#e3a044]' : 'text-[#084274]/70'
                }`}>
                  Campus 1 • Petite Enfance
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold leading-tight">
                  Campus Beethoven
                </h3>
                <p className={`text-xs mt-0.5 ${
                  activeCampus === 'beethoven' ? 'text-white/80' : 'text-[#084274]/80'
                }`}>
                  Crèche & Maternelle (2 à 5 ans)
                </p>
              </div>
            </button>

            <button
              onClick={() => setActiveCampus('ibnkhaldoun')}
              className={`p-4 sm:p-6 text-left transition-all cursor-pointer flex items-center gap-4 ${
                activeCampus === 'ibnkhaldoun'
                  ? 'bg-[#084274] text-white shadow-lg'
                  : 'bg-white/60 text-[#084274] hover:bg-white'
              }`}
            >
              <div className={`w-12 h-12 rounded-none flex items-center justify-center shrink-0 ${
                activeCampus === 'ibnkhaldoun' ? 'bg-[#e3a044] text-[#084274]' : 'bg-[#084274] text-white'
              }`}>
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                  activeCampus === 'ibnkhaldoun' ? 'text-[#e3a044]' : 'text-[#084274]/70'
                }`}>
                  Campus 2 • Cycle Primaire
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold leading-tight">
                  Campus Ibn Khaldoun
                </h3>
                <p className={`text-xs mt-0.5 ${
                  activeCampus === 'ibnkhaldoun' ? 'text-white/80' : 'text-[#084274]/80'
                }`}>
                  CP, CE1, CE2, CE3, CE4, CE5, CE6
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Active Campus Overview Card with Photo Layers */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCampus}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#e6ccb2] border-2 border-[#084274]/15 p-6 sm:p-10 lg:p-12 shadow-xl"
            >
              <div className="lg:col-span-6 space-y-5">
                <div className="giggle-tag">
                  <div className="giggle-dot" />
                  <span>
                    {activeCampus === 'beethoven'
                      ? 'PLATEAU EL JADIDA • SECTION PETITE ENFANCE'
                      : 'PLATEAU EL JADIDA • SECTION ÉLÉMENTAIRE'}
                  </span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] text-[#084274] tracking-tight leading-tight">
                  {activeCampus === 'beethoven'
                    ? 'Un Cocon Protecteur Dédié aux Premières Découvertes'
                    : 'Un Environnement Stimulant Préparant la Réussite au Collège'}
                </h2>

                <p className="font-body text-sm sm:text-base text-[#084274]/85 leading-relaxed">
                  {activeCampus === 'beethoven'
                    ? 'Conçu spécifiquement pour respecter les besoins physiologiques et moteurs des jeunes enfants de 2 à 5 ans. Les espaces de plain-pied, la cour protégée et le mobilier adapté permettent un éveil en toute confiance.'
                    : 'Une structure pensée pour le travail intellectuel, l’émulation positive et l’expérimentation concrète. Les élèves y développent leur autonomie, leur raisonnement logique et leurs talents artistiques et sportifs.'}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white/70 border border-[#084274]/10">
                    <span className="font-heading font-bold text-lg text-[#084274] block">
                      {activeCampus === 'beethoven' ? '6 Classes' : '8 Classes'}
                    </span>
                    <span className="text-xs text-[#084274]/70">Luminosité & Aération</span>
                  </div>
                  <div className="p-3 bg-white/70 border border-[#084274]/10">
                    <span className="font-heading font-bold text-lg text-[#084274] block">
                      {activeCampus === 'beethoven' ? 'Cour Arborée' : 'Labo & Théâtre'}
                    </span>
                    <span className="text-xs text-[#084274]/70">Infrastructures Dédiées</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenAdmissions}
                    className="giggle-button-primary cursor-pointer text-xs sm:text-sm px-6 py-3.5 flex items-center gap-2 font-bold hover:scale-105"
                  >
                    <Calendar className="w-4 h-4 text-[#e3a044]" />
                    <span>Planifier une Visite de ce Campus</span>
                  </button>
                  <a
                    href="#galerie-espaces"
                    className="giggle-button-secondary cursor-pointer text-xs sm:text-sm px-5 py-3.5 font-bold flex items-center gap-2"
                  >
                    <span>Explorer les Espaces en Détail</span>
                    <ArrowRight className="w-4 h-4 text-[#e3a044]" />
                  </a>
                </div>
              </div>

              {/* Right: Layered Image Display */}
              <div className="lg:col-span-6 relative">
                <div className="relative w-full h-[320px] sm:h-[420px]">
                  <div className="absolute inset-0 bg-[#e3a044] transform rotate-2 shadow-md" />
                  <div className="absolute inset-0 bg-[#084274] transform -rotate-1 shadow-lg" />
                  <div className="relative z-10 w-full h-full overflow-hidden border-2 border-white/40 shadow-2xl">
                    <img
                      src={
                        activeCampus === 'beethoven'
                          ? 'https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/6a14546f37bdd99338f62c1c_Images%20(3).avif'
                          : 'https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/69c846a1048134d965991ee7_Office.avif'
                      }
                      alt={activeCampus === 'beethoven' ? 'Campus Beethoven El Jadida' : 'Campus Ibn Khaldoun El Jadida'}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 border border-[#084274]/15 shadow-md flex items-center justify-between">
                      <div>
                        <span className="font-heading font-bold text-xs text-[#084274] block">
                          {activeCampus === 'beethoven' ? 'Campus Beethoven' : 'Campus Ibn Khaldoun'}
                        </span>
                        <span className="text-[11px] text-[#084274]/70">Quartier Plateau • El Jadida</span>
                      </div>
                      <span className="px-2.5 py-1 bg-[#084274] text-[#feeddb] text-[10px] font-bold">
                        {activeCampus === 'beethoven' ? 'Crèche & Maternelle' : 'Primaire'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Section 2: Detailed 4-Grid of Specific Facilities */}
        <div id="galerie-espaces" className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044]">
              Visite Guidée des Installations
            </span>
            <TitreAnime as="h2" texte="Chaque Espace a une Vocation Pédagogique" className="font-heading text-3xl sm:text-4xl text-[#084274] mt-2 mb-4" />
            <p className="font-body text-sm sm:text-base text-[#084274]/80 leading-relaxed">
              Explorez les salles spécialisées conçues pour donner le goût de la recherche, de la créativité et de la sociabilisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#e6ccb2] border-2 border-[#084274]/15 overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#084274]/30 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-[#feeddb] text-[#084274] text-xs font-bold shadow-md border border-[#084274]/10">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 bg-[#e3a044] text-[#084274] text-[11px] font-bold shadow-sm inline-block">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#084274] mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#084274]/80 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#084274]/15 flex items-center justify-between text-xs font-semibold text-[#084274]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#24a974]" />
                      <span>Conforme aux normes de sécurité</span>
                    </span>
                    <button
                      onClick={onOpenAdmissions}
                      className="text-[#e3a044] hover:text-[#084274] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Visiter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Normes de Sécurité & Hygiène (Bento Grid) */}
        <div className="bg-[#084274] text-[#feeddb] p-8 sm:p-12 lg:p-16 border-2 border-[#084274] shadow-2xl mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block mb-2">
              Sérénité & Rigueur Absolue
            </span>
            <TitreAnime as="h2" texte="Normes de Sécurité & Bien-être Sanitaire" className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight" />
            <p className="text-sm sm:text-base text-[#feeddb]/80 mt-4 leading-relaxed font-body">
              La sécurité physique, émotionnelle et sanitaire de chaque élève constitue le préalable indissociable à tout apprentissage serein.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 border border-white/15 p-6 flex flex-col justify-between">
              <div>
                <Shield className="w-8 h-8 text-[#e3a044] mb-4" />
                <h4 className="font-heading text-lg font-bold text-white mb-2">Contrôle d'Accès Filtré</h4>
                <p className="text-xs text-[#feeddb]/80 leading-relaxed">
                  Entrées et sorties surveillées en permanence par un agent de sécurité assermenté. Aucun accès extérieur n'est toléré durant les heures de cours.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider mt-4">Badge & Registre Visiteur</span>
            </div>

            <div className="bg-white/10 border border-white/15 p-6 flex flex-col justify-between">
              <div>
                <Activity className="w-8 h-8 text-[#e3a044] mb-4" />
                <h4 className="font-heading text-lg font-bold text-white mb-2">Premiers Secours & Soins</h4>
                <p className="text-xs text-[#feeddb]/80 leading-relaxed">
                  Personnel éducatif formé aux gestes d'urgence pédiatriques. Trousse médicale complète et protocole immédiat de liaison avec les familles.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider mt-4">Équipe Formée & Agréée</span>
            </div>

            <div className="bg-white/10 border border-white/15 p-6 flex flex-col justify-between">
              <div>
                <Sparkles className="w-8 h-8 text-[#e3a044] mb-4" />
                <h4 className="font-heading text-lg font-bold text-white mb-2">Hygiène & Aération Quotidienne</h4>
                <p className="text-xs text-[#feeddb]/80 leading-relaxed">
                  Désinfection minutieuse quotidienne des sanitaires, tables et jouets didactiques. Aération continue des classes et contrôle de la qualité de l'air.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider mt-4">Protocole Sanitaire Strict</span>
            </div>
          </div>
        </div>

        {/* Section 4: Planifier Votre Visite en Personne Callout */}
        <div className="bg-[#e6ccb2] border-2 border-[#084274]/20 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <Calendar className="w-12 h-12 text-[#e3a044] mx-auto mb-4" />
          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#084274] mb-3">
            Rien ne Vaut une Visite en Personne
          </h3>
          <p className="font-body text-sm sm:text-base text-[#084274]/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Venez vous imprégner de l’atmosphère chaleureuse des Marronniers. Nos équipes vous accueillent du lundi au vendredi sur rendez-vous personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAdmissions}
              className="w-full sm:w-auto giggle-button-primary px-8 py-4 text-sm font-bold shadow-lg hover:shadow-xl cursor-pointer"
            >
              Prendre Rendez-vous de Visite Privée
            </button>
            <a
              href={`tel:${SCHOOL_INFO.phoneRaw}`}
              className="w-full sm:w-auto giggle-button-secondary px-6 py-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#e3a044]" />
              <span>Appeler : {SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>

      <SectionDivider variant="white" position="bottom" style="wave1" />
    </div>
  );
};
