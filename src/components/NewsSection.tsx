/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { TitreAnime } from './motion/Primitives';
import { Calendar, ArrowRight, ChevronRight, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface NewsSectionProps {
  onNavigate: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onNavigate }) => {
  const featuredNews = {
    id: 'fete-fin-annee',
    title: 'Grand Spectacle de Fin d’Année : « L’Odyssée de la Curiosité »',
    desc: 'Un moment inoubliable orchestré par nos élèves de maternelle et primaire : théâtre, chorale polyphonique et démonstrations scientifiques devant plus de 300 parents réunis.',
    category: 'Événement Phare',
    date: '18 Juin 2026',
    readTime: '3 min de lecture',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
  };

  const secondaryNews = [
    {
      id: 'tournoi-echecs',
      title: 'Tournoi Inter-Écoles d’Échecs d’El Jadida : Nos élèves sur le podium',
      category: 'Compétition',
      date: '28 Mai 2026',
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'semaine-sciences',
      title: 'Semaine de la Science & de l’Écologie : Nos apprentis chercheurs',
      category: 'Pédagogie Active',
      date: '12 Mai 2026',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'rencontre-auteurs',
      title: 'Atelier d’Écriture & Rencontre avec un auteur de littérature jeunesse',
      category: 'Culture & Lecture',
      date: '24 Avril 2026',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="giggle-tag mb-6">
            <div className="giggle-dot" />
            <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">VIE DE L'ÉCOLE</span>
          </div>
          <TitreAnime as="h2" texte="Actualités & Événements" className="font-heading text-4xl sm:text-5xl lg:text-[50px] text-[#084274] tracking-tight mb-6 leading-tight" />
          <p className="font-body text-base sm:text-lg text-[#084274]/80 leading-relaxed max-w-4xl mx-auto">
            Restez informés des derniers événements, des réussites de nos élèves et des temps forts qui rythment l'année scolaire aux Marronniers.
          </p>
        </motion.div>

        {/* Magazine Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Featured News (Left, 8 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 relative group overflow-hidden bg-[#084274] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer min-h-[520px] flex items-end border-2 border-[#084274]/15"
            onClick={onNavigate}
          >
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-[#084274] via-[#084274]/60 to-transparent z-10" />
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            <div className="relative z-20 p-8 sm:p-12 w-full text-white">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#e3a044] text-[#084274] text-xs font-bold uppercase tracking-wider px-3.5 py-1 shadow-xs">
                  {featuredNews.category}
                </span>
                <div className="flex items-center gap-1.5 text-white/90 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-[#feeddb]" />
                  <span>{featuredNews.date}</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-white/75 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#feeddb]" />
                  <span>{featuredNews.readTime}</span>
                </div>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4 group-hover:text-[#feeddb] transition-colors leading-tight">
                {featuredNews.title}
              </h3>

              <p className="font-body text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mb-6">
                {featuredNews.desc}
              </p>

              <div className="inline-flex items-center gap-2.5 text-[#feeddb] font-bold group-hover:translate-x-1.5 transition-transform">
                <span className="text-sm uppercase tracking-wider">Lire l'article complet</span>
                <ArrowRight className="w-4 h-4 text-[#e3a044]" />
              </div>
            </div>
          </motion.div>

          {/* Secondary News Column (Right, 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {secondaryNews.map((item, idx) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-row gap-4 p-4 bg-[#feeddb]/40 hover:bg-[#feeddb] border border-[#084274]/10 hover:border-[#084274]/25 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={onNavigate}
              >
                <div className="w-28 h-28 shrink-0 overflow-hidden bg-[#e6ccb2] relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-[#e3a044] text-[10px] font-bold uppercase tracking-wider mb-1.5 block">
                    {item.category} • {item.date}
                  </span>
                  <h4 className="font-heading text-base sm:text-lg text-[#084274] leading-snug group-hover:text-[#e3a044] transition-colors line-clamp-3">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
            
            <div className="mt-auto pt-4">
              <button 
                onClick={onNavigate}
                className="w-full group flex items-center justify-between bg-[#084274] hover:bg-[#05335b] text-[#feeddb] font-bold text-sm px-6 py-4 transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Consulter Toutes les Actualités</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
