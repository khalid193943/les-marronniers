/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Contact"
 * 50/50 : coordonnées en items bleu transparent + carte Google Maps encadrée façon polaroid.
 */

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { PageHero } from '../design-system/giggle/PageHero';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { ContactForm } from '../components/Forms';
import { SectionDivider as SD2 } from '../components/SectionDivider';
import { DoodleSun } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';

interface ContactPageProps {
  onOpenAdmissions: () => void;
}

const INFOS = [
  { icon: MapPin, label: SCHOOL_INFO.campuses[0].label, value: SCHOOL_INFO.campuses[0].address, href: SCHOOL_INFO.campuses[0].mapsUrl },
  { icon: MapPin, label: SCHOOL_INFO.campuses[1].label, value: SCHOOL_INFO.campuses[1].address, href: SCHOOL_INFO.campuses[1].mapsUrl },
  { icon: Phone, label: 'Téléphone', value: SCHOOL_INFO.phone, href: `tel:${SCHOOL_INFO.phoneRaw}` },
  { icon: Mail, label: 'Email', value: SCHOOL_INFO.email, href: `mailto:${SCHOOL_INFO.email}` },
  { icon: Clock, label: 'Horaires', value: SCHOOL_INFO.hours, href: undefined },
];

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenAdmissions }) => {
  const reduce = useReducedMotion();
  const [campus, setCampus] = useState(0);

  return (
    <div>
      <PageHero
        tag="Contact"
        title="Venez Nous Rencontrer"
        line="Au Plateau, à El Jadida — on vous attend avec plaisir."
      />
      {/* Bandeau 3 informations clés (style référence Giggle) */}
      <section className="bg-[#fff7ef] pb-14 sm:pb-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {[
            { label: 'Téléphone', value: SCHOOL_INFO.phone, href: `tel:${SCHOOL_INFO.phoneRaw}` },
            { label: 'Adresse', value: 'Rue Beethoven, Plateau — El Jadida', href: SCHOOL_INFO.campuses[0].mapsUrl },
            { label: 'Horaires', value: SCHOOL_INFO.hours, href: undefined },
          ].map((info, idx) => {
            const inner = (
              <div className="h-full bg-[#00558d]/8 border border-[#00558d]/12 px-6 py-5 hover:bg-[#00558d]/12 transition-colors">
                <span className="flex items-center gap-2 font-heading text-xl text-[#00558d] mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e3a044]" />
                  {info.label}
                </span>
                <span className="block font-body text-sm text-[#00558d]/75">{info.value}</span>
              </div>
            );
            return (
              <motion.div
                key={idx}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {info.href ? (
                  <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block h-full">
                    {inner}
                  </a>
                ) : inner}
              </motion.div>
            );
          })}
        </div>
      </section>

      <SectionDivider variant="white" position="top" style="wave1" />

      <section className="bg-white py-16 sm:py-24 overflow-hidden relative">
        <DoodleSun className="hidden lg:block absolute top-10 right-[6%] w-11 text-[#e3a044]/50 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">

          {/* Coordonnées */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {INFOS.map((info, idx) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-start gap-4 bg-[#00558d]/6 border border-[#00558d]/10 p-5 hover:bg-[#00558d]/10 transition-colors">
                  <span className="w-11 h-11 shrink-0 rounded-full bg-[#00558d] text-[#e3a044] flex items-center justify-center">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <span className="block font-body text-xs font-bold text-[#00558d]/60 mb-0.5">{info.label}</span>
                    <span className="block font-body text-[15px] font-semibold text-[#00558d]">{info.value}</span>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={idx} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}

            <button onClick={onOpenAdmissions} className="giggle-button-primary cursor-pointer inline-flex items-center justify-center gap-3 mt-4 self-start">
              <Calendar className="w-4 h-4 text-[#e3a044]" />
              <span>Réserver une visite</span>
            </button>
          </motion.div>

          {/* Carte façon polaroid inclinée — sélecteur de campus */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, rotate: 4, y: 24 }}
            whileInView={{ opacity: 1, rotate: 1.5, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 14 }}
            className="relative"
          >
            <span aria-hidden="true" className="absolute inset-0 bg-[#e3a044]" style={{ transform: 'rotate(-2deg) translate(12px, 12px)' }} />
            <div className="relative z-10 bg-white p-3 pb-4 shadow-2xl">
              {/* Onglets campus */}
              <div className="flex gap-2 mb-3">
                {SCHOOL_INFO.campuses.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => setCampus(idx)}
                    className={`flex-1 rounded-lg px-3 py-2 text-xs font-bold transition-colors cursor-pointer ${
                      campus === idx ? 'bg-[#00558d] text-[#fff7ef]' : 'bg-[#00558d]/8 text-[#00558d] hover:bg-[#00558d]/15'
                    }`}
                  >
                    {c.label.replace('Campus ', '')}
                  </button>
                ))}
              </div>
              <iframe
                key={campus}
                title={`Localisation ${SCHOOL_INFO.campuses[campus].label}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(SCHOOL_INFO.campuses[campus].address + ', El Jadida, Maroc')}&output=embed`}
                className="w-full h-[340px] sm:h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <p className="text-center font-heading text-sm text-[#00558d]/70 mt-3">
                {SCHOOL_INFO.campuses[campus].address}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <SD2 variant="cream" position="top" style="wave2" />

      {/* Formulaire de contact */}
      <section className="bg-[#fff7ef] py-16 sm:py-24 overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Écrivez-nous"
            title="Un Message, une Réponse Rapide"
            className="mb-10"
          />
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
