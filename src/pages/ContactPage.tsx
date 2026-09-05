/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page"Contact"
 */

import React, { useState } from 'react';
import { TitreAnime } from '../components/motion/Primitives';
import { PageHeader } from '../components/PageHeader';
import { SectionDivider } from '../components/SectionDivider';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Send,
  CheckCircle2,
  Calendar,
  ExternalLink,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenAdmissions,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Demande de Rendez-vous / Visite',
    level: 'Maternelle',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#feeddb] min-h-screen">
      <PageHeader
        tag="13 — CONTACT & LOCALISATION"
        title="Nous"
        highlightedWord="Contacter"
        description="Prenez rendez-vous avec notre équipe pédagogique et venez visiter nos locaux à El Jadida."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Coordonnées & Accès */}
          <AnimatedSection direction="left" className="lg:col-span-5 space-y-6">
            <div className="bg-[#e6ccb2] p-8 shadow-xl border-2 border-[#084274]/15">
              <div className="giggle-tag mb-3">
                <div className="giggle-dot" />
                <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">Établissement Principal</span>
              </div>
              <TitreAnime as="h2" texte="Les Marronniers El Jadida" className="font-heading text-2xl sm:text-3xl text-[#084274] mb-6 font-bold" />

              <div className="space-y-5 text-xs sm:text-sm text-[#084274]/85">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#084274] text-[#feeddb] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#e3a044]" />
                  </div>
                  <div>
                    <strong className="block text-[#084274] font-heading text-sm">Adresse</strong>
                    <span>16 Lot Al Asdikaa, Rue Beethoven, Plateau</span>
                    <span className="block text-[#084274]/70">El Jadida 24000, Maroc</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#084274] text-[#feeddb] flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-[#e3a044]" />
                  </div>
                  <div>
                    <strong className="block text-[#084274] font-heading text-sm">Téléphone</strong>
                    <a
                      href={`tel:${SCHOOL_INFO.phoneRaw}`}
                      className="text-[#084274] font-bold hover:text-[#e3a044] transition-colors"
                    >
                      {SCHOOL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#084274] text-[#feeddb] flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 text-[#e3a044]" />
                  </div>
                  <div>
                    <strong className="block text-[#084274] font-heading text-sm">Horaires d'Accueil</strong>
                    <span>Lundi — Vendredi : 07h45 — 17h30</span>
                    <span className="block text-[#084274]/70">Samedi : Sur rendez-vous</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#084274] text-[#feeddb] flex items-center justify-center shrink-0 shadow-sm">
                    <Car className="w-5 h-5 text-[#e3a044]" />
                  </div>
                  <div>
                    <strong className="block text-[#084274] font-heading text-sm">Stationnement</strong>
                    <span>Accès pratique & stationnement aisé Rue Beethoven</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-[#084274]/15">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`https://maps.google.com/?q=${encodeURIComponent(SCHOOL_INFO.googleMapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="giggle-button-secondary w-full justify-center py-3 text-xs font-bold flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-[#084274]" />
                  <span>Ouvrir l'Itinéraire Google Maps</span>
                </motion.a>
              </div>
            </div>
          </AnimatedSection>

          {/* Formulaire de Contact */}
          <AnimatedSection direction="right" className="lg:col-span-7 bg-[#e6ccb2] p-8 sm:p-12 shadow-xl border-2 border-[#084274]/15">
            <div className="mb-8">
              <div className="giggle-tag mb-2">
                <div className="giggle-dot" />
                <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">Formulaire en Ligne</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#084274] mt-1 mb-2 font-bold">
                Écrivez-Nous un Message
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#084274]/70">
                Remplissez ce formulaire pour planifier une visite, poser une question ou demander un entretien personnalisé.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 bg-white text-[#084274] text-center border-2 border-[#084274]/20 space-y-3 shadow-lg"
                >
                  <CheckCircle2 className="w-12 h-12 text-[#24a974] mx-auto" />
                  <h4 className="font-heading text-2xl font-bold">Message Bien Envoyé !</h4>
                  <p className="font-body text-xs sm:text-sm text-[#084274]/80 max-w-md mx-auto">
                    Merci <strong>{formData.name}</strong>. Notre équipe vous recontactera sous 24h ouvrées.
                  </p>
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSubmitted(false)}
                      className="giggle-button-secondary text-xs py-2.5 px-6 cursor-pointer"
                    >
                      Envoyer un nouveau message
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#084274] mb-1">
                        Votre Nom & Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ex: Youssef Alami"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-[#084274]/20 bg-white text-xs text-[#084274] focus:outline-none focus:border-[#084274]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#084274] mb-1">
                        Téléphone de contact *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="ex: +212 6 XX XX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-[#084274]/20 bg-white text-xs text-[#084274] focus:outline-none focus:border-[#084274]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#084274] mb-1">
                        Adresse Email
                      </label>
                      <input
                        type="email"
                        placeholder="ex: contact@famille.ma"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-[#084274]/20 bg-white text-xs text-[#084274] focus:outline-none focus:border-[#084274]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#084274] mb-1">
                        Objet de votre demande *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-[#084274]/20 bg-white text-xs text-[#084274] focus:outline-none focus:border-[#084274]"
                      >
                        <option value="Demande de Rendez-vous / Visite">Demande de Rendez-vous / Visite</option>
                        <option value="Inscription Crèche">Inscription Crèche</option>
                        <option value="Inscription Maternelle">Inscription Maternelle</option>
                        <option value="Inscription Primaire">Inscription Primaire</option>
                        <option value="Autre renseignement">Autre renseignement</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#084274] mb-1">
                      Votre Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Écrivez ici votre message, vos questions ou les disponibilités souhaitées pour une visite..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-[#084274]/20 bg-white text-xs text-[#084274] focus:outline-none focus:border-[#084274]"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="giggle-button-primary w-full justify-center py-3.5 text-xs font-bold cursor-pointer flex items-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#e3a044]" />
                    <span>Envoyer ma Demande</span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </AnimatedSection>
        </div>

        {/* Carte / Plan Intégré */}
        <AnimatedSection direction="up" className="bg-[#e6ccb2] overflow-hidden shadow-xl border-2 border-[#084274]/15 p-4 sm:p-6">
          <div className="overflow-hidden h-80 sm:h-96 relative border border-[#084274]/15">
            <iframe
              title="Carte Les Marronniers El Jadida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.5297371428383!2d-8.508!3d33.245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda91d904c63673f%3A0x86b03cb7eefb20c2!2sEl%20Jadida!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 shadow-lg border-2 border-[#084274]/15 max-w-xs">
              <p className="font-heading text-sm font-bold text-[#084274]">
                Les Marronniers El Jadida
              </p>
              <p className="text-[11px] text-[#084274]/70 mt-0.5">
                16 Lot Al Asdikaa, Rue Beethoven, Plateau
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SectionDivider variant="white" position="bottom" style="wave1" />
    </div>
  );
};
