/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight, Baby, GraduationCap, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface TwoCampusesSectionProps {
  onOpenAdmissions: (location?: string) => void;
}

export const TwoCampusesSection: React.FC<TwoCampusesSectionProps> = ({
  onOpenAdmissions,
}) => {
  return (
    <section id="campuses" className="py-24 bg-[#feeddb] relative overflow-hidden">
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
            <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">ESPACES D'APPRENTISSAGE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[45px] text-[#084274] tracking-tight mb-6 leading-tight">
            Des Environnements Pensés pour Chaque Étape
          </h2>
          <p className="font-body text-base sm:text-lg text-[#084274]/80 leading-relaxed max-w-4xl mx-auto">
            Parce que les besoins d'un enfant évoluent en grandissant, nos infrastructures s'adaptent. Des salles d'éveil chaleureuses pour les maternelles jusqu'aux ateliers interactifs pour les primaires, chaque lieu est conçu pour stimuler la curiosité en toute sécurité.
          </p>
        </motion.div>

        {/* Content Area - 2 Columns Layout with 0 border radius */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Crèche & Maternelle */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#e6ccb2] rounded-none overflow-hidden shadow-xl border-2 border-[#084274]/15 flex flex-col hover:shadow-2xl hover:border-[#084274]/30 transition-all duration-300 group"
          >
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/6a14546f37bdd99338f62c1c_Images%20(3).avif"
                alt="Espace Crèche et Maternelle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#feeddb] text-[#084274] text-xs sm:text-[13px] font-bold rounded-none shadow-md flex items-center gap-2 border border-[#084274]/10">
                  <Baby className="w-4 h-4 text-[#e3a044]" />
                  Crèche & Maternelle (2 à 5 ans)
                </span>
              </div>
            </div>
            
            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-3xl text-[#084274] mb-3">
                  L'Éveil des Tout-Petits
                </h3>
                <p className="font-body text-[15px] sm:text-base text-[#084274]/80 leading-relaxed mb-8">
                  Un univers doux, lumineux et hautement sécurisé : éveil sensoriel, langage, motricité et sociabilisation progressive pour un épanouissement total.
                </p>
                <div className="space-y-3.5 mb-10">
                  {[
                    '6 classes maternelles spacieuses et colorées',
                    'Salle d’éveil scientifique et sensorielle dédiée',
                    'Espace cinéma-théâtre pour l’expression corporelle',
                    'Salle de motricité équipée aux normes de sécurité',
                    'Cour avec jardin arboré et sol anti-choc amortissant',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm font-medium text-[#084274]/90">
                      <CheckCircle2 className="w-5 h-5 text-[#e3a044] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenAdmissions('Crèche & Maternelle')}
                className="giggle-button-primary w-full sm:w-auto shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Visiter cet Espace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Primaire */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#e6ccb2] rounded-none overflow-hidden shadow-xl border-2 border-[#084274]/15 flex flex-col hover:shadow-2xl hover:border-[#084274]/30 transition-all duration-300 group"
          >
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/69c846a1048134d965991ee7_Office.avif"
                alt="Espace Primaire"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#feeddb] text-[#084274] text-xs sm:text-[13px] font-bold rounded-none shadow-md flex items-center gap-2 border border-[#084274]/10">
                  <GraduationCap className="w-4 h-4 text-[#e3a044]" />
                  Primaire (CP au CE6)
                </span>
              </div>
            </div>
            
            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-3xl text-[#084274] mb-3">
                  L'Excellence Académique
                </h3>
                <p className="font-body text-[15px] sm:text-base text-[#084274]/80 leading-relaxed mb-8">
                  Apprentissages fondamentaux solides dans un cadre d'exigence bienveillante préparant idéalement la transition vers le collège.
                </p>
                <div className="space-y-3.5 mb-10">
                  {[
                    'Classes primaires spacieuses, climatisées et lumineuses',
                    'Programme trilingue renforcé (Français, Arabe, Anglais)',
                    'Ateliers d’éveil scientifique et démarche expérimentale',
                    'Club officiel d’échecs et raisonnement stratégique',
                    'Activités sportives régulières et esprit d’équipe',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm font-medium text-[#084274]/90">
                      <CheckCircle2 className="w-5 h-5 text-[#e3a044] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenAdmissions('Primaire')}
                className="giggle-button-primary w-full sm:w-auto shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Visiter le Primaire</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
