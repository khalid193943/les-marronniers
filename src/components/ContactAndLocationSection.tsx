/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Navigation, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

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
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[45px] text-[#084274] tracking-tight mb-6 leading-tight">
            Venez Découvrir Nos Locaux à El Jadida
          </h2>
          <p className="font-body text-base sm:text-lg text-[#084274]/80 leading-relaxed max-w-4xl mx-auto">
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
              <div className="p-6 bg-[#084274]/6 border-2 border-[#084274]/15 shadow-xs flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#084274] text-[#feeddb] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#e3a044]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#084274] mb-1">Nos Campus</h4>
                  <p className="font-body text-sm text-[#084274]/80 leading-relaxed">
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
              <div className="p-6 bg-[#084274]/6 border-2 border-[#084274]/15 shadow-xs flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#084274] text-[#feeddb] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-[#e3a044]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#084274] mb-1">Ligne Directe & Inscriptions</h4>
                  <div className="space-y-1">
                    <a href="tel:+212523395603" className="font-body text-sm text-[#084274] hover:text-[#e3a044] font-semibold transition-colors block">
                      Fixe : +212 523 395 603
                    </a>
                    <a href="tel:+212623395603" className="font-body text-sm text-[#084274] hover:text-[#e3a044] font-semibold transition-colors block">
                      GSM / WhatsApp : +212 623 395 603
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 bg-[#084274]/6 border-2 border-[#084274]/15 shadow-xs flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#084274] text-[#feeddb] flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-[#e3a044]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#084274] mb-1">Horaires d'Accueil des Familles</h4>
                  <p className="font-body text-sm text-[#084274]/80 leading-relaxed">
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
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative h-[420px] lg:h-[520px] w-full overflow-hidden shadow-2xl border-4 border-[#feeddb]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6853245455823!2d-8.5083818!3d33.2406566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda91dff320b33fb%3A0xc6443d3e6db8227b!2sEcole%20Les%20Marronniers!5e0!3m2!1sfr!2sma!4v1709665487654!5m2!1sfr!2sma" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte École Les Marronniers El Jadida"
            />

            {/* Quick Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-xl border border-[#084274]/15 flex items-center gap-2.5 pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-[#e3a044] animate-ping" />
              <span className="text-xs font-bold text-[#084274]">
                École Les Marronniers • Quartier Plateau
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
