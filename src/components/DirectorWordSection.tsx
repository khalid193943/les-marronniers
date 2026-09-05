import React from 'react';
import { TitreAnime } from './motion/Primitives';
import { Quote, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export const DirectorWordSection: React.FC = () => {
  return (
    <section className="bg-[#feeddb] py-24 relative overflow-hidden">
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
            <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">NOTRE VISION PÉDAGOGIQUE</span>
          </div>
          <TitreAnime as="h2" texte="L'excellence naît de la bienveillance." className="font-heading text-4xl sm:text-5xl lg:text-[45px] text-[#084274] tracking-tight mb-6 leading-tight max-w-3xl" />
          <p className="font-body text-base sm:text-lg text-[#084274]/80 leading-relaxed max-w-3xl mx-auto">
            Notre mission n'est pas seulement de transmettre un savoir académique rigoureux, mais de cultiver la curiosité spontanée, la confiance et la fierté d'apprendre chez chaque enfant.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Portrait & Authority Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-5/12"
          >
            <div className="relative group">
              {/* Back subtle offset card */}
              <div className="absolute -inset-3 bg-[#e3a044]/20 transform -rotate-2 rounded-none -z-10 group-hover:-rotate-3 transition-transform duration-500" />
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e6ccb2] rounded-none shadow-2xl border-2 border-[#084274]/15">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                  alt="Direction Pédagogique - École Les Marronniers El Jadida"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Official seal badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 border border-[#084274]/10 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#084274] text-[#feeddb] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#e3a044]" />
                  </div>
                  <div>
                    <p className="font-heading text-sm text-[#084274] font-bold leading-tight">Direction Pédagogique</p>
                    <p className="font-body text-[11px] text-[#084274]/70">Les Marronniers • El Jadida</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Statement & Pillars */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-7/12 text-left"
          >
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#e3a044]">
              <Quote className="w-10 h-10 text-[#e3a044]/40 -mb-4 -ml-2" />
              <p className="font-body text-base sm:text-lg text-[#084274] leading-relaxed mb-6 font-medium">
                « Aux Marronniers, nous croyons fermement qu'un enfant n'apprend véritablement que s'il évolue dans un cadre où il se sent écouté, respecté et encouragé. »
              </p>
              <p className="font-body text-sm sm:text-base text-[#084274]/80 leading-relaxed mb-8">
                Du tout-petit de 2 ans qui découvre sa motricité et son langage, jusqu'à l'élève de CE6 qui affine son raisonnement mathématique et son expression trilingue, nos éducateurs et professeurs accompagnent chaque trajectoire personnelle avec une attention quotidienne.
              </p>
            </div>

            {/* 3 Core commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#084274]/15">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#e3a044] uppercase tracking-wider mb-1">01. Écoute Active</span>
                <span className="text-xs text-[#084274]/80">Suivi individualisé et dialogue permanent avec les familles.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#e3a044] uppercase tracking-wider mb-1">02. Exigence Sereine</span>
                <span className="text-xs text-[#084274]/80">Transmission rigoureuse des savoirs fondamentaux sans stress.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#e3a044] uppercase tracking-wider mb-1">03. Épanouissement</span>
                <span className="text-xs text-[#084274]/80">Théâtre, musique, sciences et sports intégrés aux journées.</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
