/**
 * Les Marronniers — « Venir aux Marronniers » : les deux campus, un plan stylisé, et l'itinéraire en un geste
 * (Google Maps, Waze, Plans). Aucun iframe : rapide, net, et fidèle au design du site.
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation, Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { LeafIcon } from './world/Nature';

const CAMPUS = [
  { ...SCHOOL_INFO.campuses[0], short: 'Crèche & Maternelle', color: '#00A06B', pin: { x: 34, y: 58 } },
  { ...SCHOOL_INFO.campuses[1], short: 'Primaire', color: '#0086D9', pin: { x: 68, y: 38 } },
];
const dir = (c: (typeof CAMPUS)[number]) => {
  const q = encodeURIComponent(`${c.address}, Maroc`);
  return {
    google: `https://www.google.com/maps/dir/?api=1&destination=${q}`,
    waze: (c as any).lat ? `https://waze.com/ul?ll=${(c as any).lat},${(c as any).lng}&navigate=yes` : `https://waze.com/ul?q=${q}&navigate=yes`,
    apple: `https://maps.apple.com/?daddr=${q}`,
  };
};

export const VisitSection: React.FC = () => {
  const [i, setI] = useState(0);
  const c = CAMPUS[i]; const links = dir(c);
  return (
    <section className="relative py-24 lg:py-36 bg-[#fff7ef] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <p className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.16em] text-[#00A06B]"><LeafIcon size={18} /> Venir aux Marronniers</p>
          <h2 className="mt-5 text-[clamp(2.4rem,4.4vw,4.2rem)] leading-[1] text-[#0B3A5E]">Deux campus, <span className="italic text-[#0086D9]">à deux minutes l’un de l’autre.</span></h2>
          <p className="mt-6 text-[1.1rem] leading-relaxed text-[#0B3A5E]/75 max-w-[48ch]">Au cœur du Plateau, quartier résidentiel et calme, avec un stationnement facile pour déposer et reprendre les enfants.</p>
          <div className="mt-10 grid grid-cols-2 gap-3" role="tablist" aria-label="Choisir un campus">
            {CAMPUS.map((k, n) => (
              <button key={k.id} role="tab" aria-selected={i === n} onClick={() => setI(n)} className={`text-left px-5 py-4 transition-all ${i === n ? 'bg-[#0B3A5E] text-white' : 'bg-white text-[#0B3A5E] hover:bg-[#fff1d6]'}`}>
                <span className="flex items-center gap-2"><span className="keep-round w-2.5 h-2.5" style={{ background: k.color }} /><span className="font-heading text-[1.35rem]">{k.short}</span></span>
                <span className={`block text-[13px] mt-1 ${i === n ? 'text-white/70' : 'text-[#0B3A5E]/60'}`}>{k.address.split(',')[0]}</span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="mt-8">
              <p className="flex items-start gap-3 text-[#0B3A5E]"><MapPin size={18} className="mt-0.5 shrink-0" style={{ color: c.color }} />{c.address}</p>
              <p className="mt-2 flex items-center gap-3 text-[#0B3A5E]/75"><Clock size={18} className="shrink-0 text-[#E3A044]" />{SCHOOL_INFO.hoursDetail}</p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <a href={links.google} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-5 bg-[#0086D9] text-white hover:bg-[#006cb3] transition-colors"><Navigation size={16} /> Itinéraire Google Maps</a>
                <a href={links.waze} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-12 px-5 bg-white text-[#0B3A5E] ring-1 ring-[#0B3A5E]/15 hover:ring-[#0B3A5E]/35">Waze</a>
                <a href={links.apple} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-12 px-5 bg-white text-[#0B3A5E] ring-1 ring-[#0B3A5E]/15 hover:ring-[#0B3A5E]/35">Plans</a>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
                <a href={`tel:${SCHOOL_INFO.phoneRaw}`} className="inline-flex items-center gap-2 text-[#0B3A5E] hover:text-[#0086D9]"><Phone size={16} /> {SCHOOL_INFO.phone}</a>
                <a href={SCHOOL_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#0B3A5E] hover:text-[#00A06B]"><MessageCircle size={16} /> WhatsApp</a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Plan stylisé du Plateau */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] bg-[#EAF6FD] overflow-hidden shadow-[0_40px_80px_-40px_rgba(11,58,94,0.35)]">
            <svg viewBox="0 0 100 75" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden>
              <rect width="100" height="75" fill="#EAF6FD" />
              {[[8, 10, 18, 12], [30, 6, 16, 14], [52, 12, 12, 10], [78, 8, 16, 12], [6, 40, 14, 16], [44, 44, 14, 12], [76, 50, 18, 16], [20, 62, 18, 10], [56, 62, 14, 10]].map(([x, y, w, h], k) => <rect key={k} x={x} y={y} width={w} height={h} fill="#FFFFFF" opacity="0.9" />)}
              <circle cx="16" cy="30" r="5" fill="#CDEBD8" /><circle cx="86" cy="36" r="4" fill="#CDEBD8" /><circle cx="48" cy="30" r="3.5" fill="#CDEBD8" />
              <path d="M0 34 C 20 30, 40 40, 60 34 S 90 26, 100 30" stroke="#FFFFFF" strokeWidth="3.2" fill="none" />
              <path d="M26 0 C 30 20, 24 45, 30 75" stroke="#FFFFFF" strokeWidth="2.6" fill="none" />
              <path d="M70 0 C 64 22, 72 46, 66 75" stroke="#FFFFFF" strokeWidth="2.6" fill="none" />
              <motion.path key={i} d="M34 58 C 42 52, 48 44, 56 42 S 64 40, 68 38" stroke="#E3A044" strokeWidth="1.1" strokeDasharray="2 1.6" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4 }} />
            </svg>
            {CAMPUS.map((k, n) => (
              <button key={k.id} onClick={() => setI(n)} className="absolute -translate-x-1/2 -translate-y-full group" style={{ left: `${k.pin.x}%`, top: `${k.pin.y}%` }} aria-label={k.label}>
                <motion.span animate={{ y: i === n ? [0, -8, 0] : 0, scale: i === n ? 1.12 : 1 }} transition={{ duration: 1.6, repeat: i === n ? Infinity : 0 }} className="block">
                  <svg width="46" height="58" viewBox="0 0 46 58" aria-hidden><path d="M23 57 C 23 57, 2 34, 2 22 A 21 21 0 0 1 44 22 C 44 34, 23 57, 23 57 Z" fill={k.color} /><circle cx="23" cy="22" r="9" fill="#fff" /></svg>
                </motion.span>
                <span className={`absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap px-3 py-1 text-[13px] transition-opacity ${i === n ? 'opacity-100 bg-[#0B3A5E] text-white' : 'opacity-0 group-hover:opacity-100 bg-white text-[#0B3A5E]'}`}>{k.short}</span>
              </button>
            ))}
            <span className="absolute right-4 bottom-4 bg-white/90 px-3 py-1.5 text-[12px] tracking-wide text-[#0B3A5E]/70">Plateau · El Jadida</span>
          </div>
        </div>
      </div>
    </section>
  );
};
