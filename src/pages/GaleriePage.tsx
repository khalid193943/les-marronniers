/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page"Galerie Photos & Immersion"
 * Immersion visuelle : 2 campus, salles lumineuses, laboratoire, cinéma-théâtre, cour arborée & sol amortissant.
 */

import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionDivider } from '../components/SectionDivider';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageId } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  Camera,
  Eye,
  X,
  Compass,
  Building,
  Sparkles,
  Calendar,
  Layers,
  Video,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface GalerieProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions?: () => void;
}

export const GaleriePage: React.FC<GalerieProps> = ({
  onNavigate,
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [lightboxImg, setLightboxImg] = useState<{ src: string; caption: string; campus: string } | null>(null);

  const photos = [
    {
      tag: 'locaux',
      label: 'Campus Beethoven',
      caption: 'Façade et accueil sécurisé du Campus Maternelle & Crèche (Rue Beethoven)',
      campus: 'Campus Beethoven (Crèche & Maternelle)',
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
    },
    {
      tag: 'primaire',
      label: 'Campus Ibn Khaldoun',
      caption: 'Classes spacieuses et studieuses du cycle primaire (CP au CE6)',
      campus: 'Campus Ibn Khaldoun (Primaire)',
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    },
    {
      tag: 'sciences',
      label: 'Salle des Sciences',
      caption: 'Laboratoire d’éveil scientifique : microscopes adaptés, observation et manipulations',
      campus: 'Pôle Scientifique',
      src: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=1000&q=80',
    },
    {
      tag: 'arts',
      label: 'Cinéma & Théâtre',
      caption: 'Espace scénique de 50 places pour les répétitions d’éloquence et représentations',
      campus: 'Pôle Artistique',
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    },
    {
      tag: 'maternelle',
      label: 'Crèche & Pouponnière',
      caption: 'Espace sensoriel douillet, jouets didactiques et motricité libre dès 2 ans',
      campus: 'Espace Petite Enfance',
      src: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=1000&q=80',
    },
    {
      tag: 'corps',
      label: 'Psychomotricité',
      caption: 'Salle équipée de modules en mousse, poutres d’équilibre et agrès sécurisés',
      campus: 'Pôle Corporel',
      src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80',
    },
    {
      tag: 'jardin',
      label: 'Cour & Jardin Sécurisé',
      caption: 'Cour arborée avec sol amortissant haute absorption certifié anti-chute',
      campus: 'Espaces Extérieurs',
      src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    },
    {
      tag: 'reflexion',
      label: 'Club d’Échecs',
      caption: 'Tables d’échecs et ateliers de logique pour stimuler la concentration et l’anticipation',
      campus: 'Pôle Réflexion',
      src: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1000&q=80',
    },
    {
      tag: 'arts',
      label: 'Musique & Chorale',
      caption: 'Éveil aux instruments, travail de la justesse vocale et chants trilingues',
      campus: 'Pôle Musical',
      src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const filtered = selectedTag === 'all'
    ? photos
    : photos.filter((p) => p.tag === selectedTag);

  return (
    <div className="bg-[#feeddb] min-h-screen">
      
      {/* 1. Header */}
      <PageHeader
        tag="11 — VISITE IMMERSIVE"
        title="Galerie"
        highlightedWord="Photos"
        description="Plongez au cœur de notre école : nos 2 campus d'El Jadida, nos 6 salles de classe baignées de lumière, nos pôles d'activités et nos cours arborées."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: 'Galerie' }]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20">
        
        {/* 2. Intro Visuelle & Présentation des Campus */}
        <AnimatedSection direction="up" className="bg-[#e6ccb2] border-2 border-[#084274]/15 p-8 sm:p-12 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="giggle-tag mb-2">
                <div className="giggle-dot" />
                <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">Immersion Réelle</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#084274]">
                Des Espaces Pensés pour la Lumière, la Sérénité et l'Action
              </h3>
              <p className="font-body text-sm sm:text-base text-[#084274]/80 leading-relaxed">
                Nos 2 campus du Plateau (Rue Beethoven et Ibn Khaldoun) ont été conçus comme des havres de paix lumineux. Les enfants y disposent de volumes généreux, de mobilier ergonomique adapté à leur taille et d'équipements de pointe.
              </p>
            </div>
            <div className="lg:col-span-4 text-center">
              <div className="p-6 bg-white border-2 border-[#084274]/20 shadow-md">
                <span className="font-heading text-3xl sm:text-4xl font-black text-[#084274] block">
                  2 Campus
                </span>
                <span className="text-xs text-[#084274]/70 font-bold uppercase tracking-wider block mt-1">
                  Maternelle (Beethoven) & Primaire (Ibn Khaldoun)
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Filtres thématiques */}
        <AnimatedSection direction="up" className="mb-14">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {[
              { id: 'all', label: 'Toutes les photos' },
              { id: 'locaux', label: 'Campus Beethoven' },
              { id: 'primaire', label: 'Campus Ibn Khaldoun' },
              { id: 'maternelle', label: 'Crèche & Pouponnière' },
              { id: 'sciences', label: 'Salle des Sciences' },
              { id: 'arts', label: 'Théâtre & Musique' },
              { id: 'corps', label: 'Psychomotricité' },
              { id: 'jardin', label: 'Cour Arborée & Jeux' },
              { id: 'reflexion', label: 'Club d’Échecs' },
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(item.id)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer border-2 ${
                  selectedTag === item.id
                    ? 'bg-[#084274] text-white border-[#084274] shadow-md scale-105'
                    : 'bg-white text-[#084274] hover:bg-white/80 border-[#084274]/15'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* 4. Grille Photo Interactive */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, idx) => (
                <motion.div
                  key={`${photo.tag}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setLightboxImg({ src: photo.src, caption: photo.caption, campus: photo.campus })}
                  className="group relative overflow-hidden bg-white shadow-lg cursor-pointer hover:shadow-2xl transition-all border-2 border-[#084274]/15"
                >
                  <div className="h-64 sm:h-72 overflow-hidden relative">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#084274]/95 via-[#084274]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
                      <div className="self-end">
                        <span className="w-10 h-10 bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <Eye className="w-5 h-5" />
                        </span>
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-[#e3a044] text-[#084274] font-bold text-[10px] uppercase tracking-wider inline-block mb-2 font-heading">
                          {photo.campus}
                        </span>
                        <p className="text-white text-xs font-semibold leading-relaxed">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white border-t border-[#084274]/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-[#e3a044]">
                        {photo.label}
                      </span>
                      <span className="text-[10px] text-[#084274]/50">
                        Agrandir ↗
                      </span>
                    </div>
                    <p className="text-xs text-[#084274] font-semibold line-clamp-1">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatedSection>

        {/* 5. Lightbox Modal Plein Écran */}
        <AnimatePresence>
          {lightboxImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white overflow-hidden max-w-4xl w-full shadow-2xl border-2 border-[#084274]"
              >
                <button
                  onClick={() => setLightboxImg(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 text-white flex items-center justify-center hover:bg-[#084274] transition-colors cursor-pointer"
                  aria-label="Fermer l'image"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={lightboxImg.src}
                  alt={lightboxImg.caption}
                  className="w-full max-h-[75vh] object-cover"
                />
                <div className="p-6 bg-white">
                  <span className="text-xs font-bold text-[#e3a044] uppercase tracking-wider block mb-1">
                    {lightboxImg.campus}
                  </span>
                  <p className="font-heading text-lg sm:text-xl text-[#084274] font-bold">
                    {lightboxImg.caption}
                  </p>
                  <p className="text-xs text-[#084274]/70 mt-1">
                    École Privée Les Marronniers El Jadida • Plateau
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 6. Call to Action pour Visite Réelle */}
        <AnimatedSection direction="up" className="bg-[#084274] text-[#feeddb] p-8 sm:p-14 text-center border-2 border-[#084274] shadow-2xl">
          <div className="giggle-tag mb-4 bg-white/10 text-[#feeddb] mx-auto w-fit">
            <div className="giggle-dot bg-[#e3a044]" />
            <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">Visite en Personne</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-3">
            Rien ne Vaut une Visite Guidée des Campus
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto mb-8 font-body leading-relaxed">
            Venez vous imprégner de l'ambiance chaleureuse de nos 2 campus, visiter les classes en activité et échanger directement avec notre équipe de direction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('inscription')}
              className="cursor-pointer text-xs sm:text-sm font-bold py-3.5 px-8 bg-[#e3a044] text-[#084274] hover:bg-[#d69337] transition-all font-heading shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Réserver une Visite Privée des Lieux</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('locaux')}
              className="cursor-pointer text-xs sm:text-sm font-bold py-3.5 px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all font-heading flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#e3a044]" />
              <span>Détails Techniques des 2 Campus</span>
            </motion.button>
          </div>
        </AnimatedSection>

      </div>

      <SectionDivider variant="white" position="bottom" style="wave1" />
    </div>
  );
};
