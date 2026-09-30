/**
 * Les Marronniers — Hero.
 * Titre éditorial, photos collées comme dans un carnet (scotch, légère inclinaison, parallaxe à la souris),
 * feuilles de marronnier qui tombent. Preuves concrètes dès le premier écran.
 */
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { CalendarCheck, ArrowRight, MapPin, Clock, Star } from 'lucide-react';
import { PHOTOS } from '../data/photos';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { FallingLeaves, LeafIcon, ConkerIcon } from './world/Nature';

interface HeroProps { onExploreCampuses: () => void; onExploreMaternelle: () => void; onExplorePrimaire: () => void; onOpenAdmissions: () => void; }
const EASE = [0.16, 1, 0.3, 1] as const;

const Snap: React.FC<{ src: string; alt: string; className: string; rot: number; depth: number; mx: any; my: any; caption?: string; tape?: string; delay: number }> = ({ src, alt, className, rot, depth, mx, my, caption, tape = 'left-1/2 -translate-x-1/2 -top-3 rotate-[-4deg]', delay }) => {
  const reduce = useReducedMotion();
  const x = useTransform(mx, (v: number) => v * depth); const y = useTransform(my, (v: number) => v * depth);
  return (
    <motion.figure className={`absolute ${className}`} style={reduce ? { rotate: rot } : { x, y, rotate: rot }} initial={reduce ? false : { opacity: 0, y: 40, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.1, delay, ease: EASE }} whileHover={{ rotate: 0, scale: 1.04, zIndex: 20 }}>
      <div className="bg-white p-2.5 pb-9 rounded-[6px] shadow-[0_30px_60px_-24px_rgba(11,58,94,0.45)]">
        <img src={src} alt={alt} className="w-full aspect-[4/5] object-cover rounded-[3px]" loading="eager" />
        {caption && <figcaption className="absolute left-4 bottom-2 font-heading italic text-[15px] text-[#0B3A5E]">{caption}</figcaption>}
      </div>
      <span className={`mr-tape ${tape}`} aria-hidden />
    </motion.figure>
  );
};

export const Hero: React.FC<HeroProps> = ({ onExploreMaternelle, onOpenAdmissions }) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const onMove = (e: React.MouseEvent) => { if (!ref.current) return; const r = ref.current.getBoundingClientRect(); mx.set(((e.clientX - r.left) / r.width - 0.5) * 30); my.set(((e.clientY - r.top) / r.height - 0.5) * 30); };
  const rise = (d: number) => (reduce ? {} : { initial: { opacity: 0, y: 36, filter: 'blur(10px)' }, animate: { opacity: 1, y: 0, filter: 'blur(0px)' }, transition: { duration: 1.1, delay: d, ease: EASE } });
  return (
    <section ref={ref} onMouseMove={onMove} className="relative overflow-hidden mr-grain bg-[radial-gradient(70%_60%_at_85%_20%,#e8f4fc_0%,rgba(232,244,252,0)_60%),radial-gradient(60%_60%_at_10%_90%,#fff1d6_0%,rgba(255,241,214,0)_60%),#fff7ef]">
      <FallingLeaves n={12} />
      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 pt-10 pb-16 lg:pt-16 lg:pb-24 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100svh-6rem)]">
        {/* Texte */}
        <div className="lg:col-span-6 relative z-10">
          <motion.p {...rise(0.05)} className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 text-[13px] font-semibold text-[#0B3A5E] ring-1 ring-[#0B3A5E]/10 shadow-sm">
            <LeafIcon size={18} /> Crèche · Maternelle · Primaire — El Jadida
          </motion.p>
          <h1 className="mt-7 text-[#0B3A5E] leading-[0.95] text-[clamp(3rem,6.6vw,6.6rem)]">
            <motion.span {...rise(0.15)} className="block">Où la curiosité</motion.span>
            <motion.span {...rise(0.3)} className="block">apprend à{' '}
              <span className="relative inline-block italic text-[#0086D9]" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}>
                s’épanouir.
                <svg viewBox="0 0 300 30" className="absolute left-0 -bottom-3 w-full h-[0.32em] overflow-visible" aria-hidden preserveAspectRatio="none">
                  <motion.path d="M4 20 C 60 6, 120 26, 180 14 S 270 8, 296 18" fill="none" stroke="#FFC800" strokeWidth="9" strokeLinecap="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 1, ease: EASE }} />
                </svg>
              </span>
            </motion.span>
          </h1>
          <motion.p {...rise(0.5)} className="mt-8 text-[clamp(1.05rem,1.3vw,1.3rem)] leading-relaxed text-[#0B3A5E]/80 max-w-[46ch]">
            Au Plateau d’El Jadida, deux campus à taille humaine où chaque enfant est appelé par son prénom — de la crèche au CE6. <span className="font-semibold text-[#0B3A5E]">{SCHOOL_INFO.slogan}</span>
          </motion.p>
          <motion.div {...rise(0.65)} className="mt-10 flex flex-wrap gap-3">
            <button onClick={onOpenAdmissions} className="group inline-flex items-center gap-2.5 h-14 px-7 rounded-full bg-[#0086D9] text-white font-bold shadow-[0_18px_34px_-16px_rgba(0,134,217,0.8)] hover:bg-[#006cb3] hover:-translate-y-0.5 transition-all"><CalendarCheck size={18} /> Réserver une visite <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
            <button onClick={onExploreMaternelle} className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-white text-[#0B3A5E] font-bold ring-1 ring-[#0B3A5E]/15 hover:ring-[#0B3A5E]/35 hover:-translate-y-0.5 transition-all">Découvrir le parcours</button>
          </motion.div>
          <motion.ul {...rise(0.8)} className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-[14px] font-semibold text-[#0B3A5E]/75">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-[#E24C3D]" />2 campus au Plateau</li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-[#00A06B]" />{SCHOOL_INFO.hours}</li>
            <li><a href={SCHOOL_INFO.social.googleReviews} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#0B3A5E]"><Star size={16} className="text-[#FFC800] fill-[#FFC800]" />Lire les avis Google</a></li>
          </motion.ul>
        </div>
        {/* Carnet de photos */}
        <div className="lg:col-span-6 relative h-[440px] sm:h-[540px] lg:h-[640px]">
          <Snap src={PHOTOS.sourires.src} alt={PHOTOS.sourires.alt} className="left-[4%] top-[6%] w-[46%]" rot={-5} depth={0.9} mx={mx} my={my} caption="les sourires" delay={0.3} />
          <Snap src={PHOTOS.classeAtelier.src} alt={PHOTOS.classeAtelier.alt} className="right-[2%] top-0 w-[40%]" rot={4} depth={1.4} mx={mx} my={my} caption="en classe" tape="right-4 -top-3 rotate-[8deg]" delay={0.45} />
          <Snap src={PHOTOS.echecs.src} alt={PHOTOS.echecs.alt} className="left-[22%] bottom-[2%] w-[38%]" rot={3} depth={1.8} mx={mx} my={my} caption="les échecs" tape="left-3 -top-3 rotate-[-10deg]" delay={0.6} />
          <Snap src={PHOTOS.equitation.src} alt={PHOTOS.equitation.alt} className="right-[6%] bottom-[8%] w-[32%]" rot={-6} depth={1.2} mx={mx} my={my} caption="l’équitation" delay={0.75} />
          <motion.div className="keep-round absolute left-[0%] bottom-[18%] z-30 w-[120px] h-[120px] rounded-full bg-[#FFC800] text-[#0B3A5E] flex flex-col items-center justify-center text-center shadow-[0_20px_40px_-18px_rgba(0,0,0,0.35)] rotate-[-10deg]" initial={reduce ? false : { scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 1.1 }}>
            <span className="font-heading text-[34px] leading-none">15</span><span className="text-[11px] font-bold uppercase tracking-wider leading-tight">ans à<br />El Jadida</span>
          </motion.div>
          <ConkerIcon size={34} className="absolute right-[44%] top-[48%] z-30 rotate-12 drop-shadow" />
        </div>
      </div>
    </section>
  );
};
