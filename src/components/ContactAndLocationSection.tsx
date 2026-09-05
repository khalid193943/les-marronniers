/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Navigation, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { CampusMaps } from '../design-system/giggle/CampusMaps';

interface ContactAndLocationSectionProps {
  onOpenAdmissions: (location?: string) => void;
}

export const ContactAndLocationSection: React.FC<ContactAndLocationSectionProps> = ({
  onOpenAdmissions,
}) => {
  return (
    <section id="contact-location" className="py-24 bg-white relative overflow-hidden">
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
            <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">NOUS TROUVER & CONTACT</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[45px] text-[#0086d9] tracking-tight mb-6 leading-tight">
            Deux campus, à deux minutes l’un de l’autre
          </h2>
          <p className="font-body text-base sm:text-lg text-[#00558d]/80 leading-relaxed max-w-4xl mx-auto">
            Situés au cœur du quartier résidentiel Plateau, nos campus sécurisés offrent un environnement d'apprentissage calme, verdoyant et facilement accessible pour les familles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Details (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div className="space-y-6 mb-8">
              
              {/* Address Card */}
              <div className="p-6 bg-[#0086d9]/6 border-2 border-[#0086d9]/15 shadow-xs flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#0086d9] text-[#fff7ef] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#e3a044]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#0086d9] mb-1">Nos Campus</h4>
                  <p className="font-body text-sm text-[#00558d]/80 leading-relaxed">
                    16 Lot Al Asdikaa (Rue Beethoven)<br />
                    Quartier Plateau, El Jadida, Maroc
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Ecole+Les+Marronniers+El+Jadida" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e3a044] hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Ouvrir l'Itinéraire GPS</span>
                  </a>
                </div>
              </div>
              
              {/* Phone Card */}
              <div className="p-6 bg-[#0086d9]/6 border-2 border-[#0086d9]/15 shadow-xs flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#0086d9] text-[#fff7ef] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-[#e3a044]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#0086d9] mb-1">Ligne Directe & Inscriptions</h4>
                  <div className="space-y-1">
                    <a href="tel:+212523395603" className="font-body text-sm text-[#0086d9] hover:text-[#e3a044] font-semibold transition-colors block">
                      Fixe : +212 523 395 603
                    </a>
                    <a href="tel:+212623395603" className="font-body text-sm text-[#0086d9] hover:text-[#e3a044] font-semibold transition-colors block">
                      GSM / WhatsApp : +212 623 395 603
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 bg-[#0086d9]/6 border-2 border-[#0086d9]/15 shadow-xs flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#0086d9] text-[#fff7ef] flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-[#e3a044]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#0086d9] mb-1">Horaires d'Accueil des Familles</h4>
                  <p className="font-body text-sm text-[#00558d]/80 leading-relaxed">
                    Lundi – Vendredi : 7h45 – 18h15<br />
                    Samedi : 09h00 - 12h30 (Sur rendez-vous préalable)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenAdmissions('Visite sur Place')}
                className="giggle-button-primary flex-1 text-[15px] py-4 px-6 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-bold cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#e3a044]" />
                <span>Prendre Rendez-vous</span>
              </button>

              <a
                href="https://wa.me/212623395603?text=Bonjour,%20je%20souhaite%20des%20informations%20pour%20une%20inscription%20aux%20Marronniers."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Iframe (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <CampusMaps mapHeight="h-[240px] sm:h-[270px]" className="lg:grid-cols-1" />
          </div>

        </div>
      </div>
    </section>
  );
};
