/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Contact"
 * 50/50 : coordonnées en items bleu transparent + carte Google Maps encadrée façon polaroid.
 */

import React from 'react';
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

  return (
    <div>
      <PageHero
        tag="Contact"
        title="Venez Nous Rencontrer"
        line="Au Plateau, à El Jadida — on vous attend avec plaisir."
      />
      {/* Bandeau 3 informations clés (style référence Giggle) */}
      <section className="bg-[#feeddb] pb-14 sm:pb-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {[
            { label: 'Téléphone', value: SCHOOL_INFO.phone, href: `tel:${SCHOOL_INFO.phoneRaw}` },
            { label: 'Adresse', value: 'Rue Beethoven, Plateau — El Jadida', href: SCHOOL_INFO.campuses[0].mapsUrl },
            { label: 'Horaires', value: SCHOOL_INFO.hours, href: undefined },
          ].map((info, idx) => {
            const inner = (
              <div className="h-full bg-[#084274]/8 border border-[#084274]/12 px-6 py-5 hover:bg-[#084274]/12 transition-colors">
                <span className="flex items-center gap-2 font-heading text-xl text-[#084274] mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e3a044]" />
                  {info.label}
                </span>
                <span className="block font-body text-sm text-[#084274]/75">{info.value}</span>
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
                <div className="flex items-start gap-4 bg-[#084274]/6 border border-[#084274]/10 p-5 hover:bg-[#084274]/10 transition-colors">
                  <span className="w-11 h-11 shrink-0 rounded-full bg-[#084274] text-[#e3a044] flex items-center justify-center">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <span className="block font-body text-xs font-bold text-[#084274]/60 mb-0.5">{info.label}</span>
                    <span className="block font-body text-[15px] font-semibold text-[#084274]">{info.value}</span>
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

          {/* Carte façon polaroid inclinée */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, rotate: 4, y: 24 }}
            whileInView={{ opacity: 1, rotate: 1.5, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 14 }}
            className="relative"
          >
            <span aria-hidden="true" className="absolute inset-0 bg-[#e3a044]" style={{ transform: 'rotate(-2deg) translate(12px, 12px)' }} />
            <div className="relative z-10 bg-white p-3 pb-4 shadow-2xl">
              <iframe
                title="Localisation Les Marronniers El Jadida"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.5297371428383!2d-8.508!3d33.245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda91d904c63673f%3A0x86b03cb7eefb20c2!2sEl%20Jadida!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
                className="w-full h-[380px] sm:h-[440px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <p className="text-center font-heading text-sm text-[#084274]/70 mt-3">Plateau · El Jadida</p>
            </div>
          </motion.div>
        </div>
      </section>

      <SD2 variant="cream" position="top" style="wave2" />

      {/* Formulaire de contact */}
      <section className="bg-[#feeddb] py-16 sm:py-24 overflow-hidden">
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
