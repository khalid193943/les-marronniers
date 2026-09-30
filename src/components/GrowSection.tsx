/**
 * Les Marronniers — « Grandir aux Marronniers ».
 * Une toise (la règle où l'on marque la taille des enfants) : trois étapes, un marronnier qui grandit,
 * la photo et le texte qui changent. Avance seule, s'arrête dès que le parent choisit une étape.
 */
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { PHOTOS } from '../data/photos';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { GrowingTree, LeafIcon } from './world/Nature';

const STAGES = [
  { key: 'Crèche', ages: 'Les tout-petits', color: '#00A06B', photo: PHOTOS.classeMaternelle, title: 'Se sentir en sécurité, et oser découvrir.', grades: ['Éveil', 'Motricité libre', 'Socialisation'] },
  { key: 'Maternelle', ages: '3 à 6 ans', color: '#E3A044', photo: PHOTOS.peinture ?? PHOTOS.sourires, title: 'Parler, créer, devenir autonome.', grades: ['Petite section', 'Moyenne section', 'Grande section'] },
  { key: 'Primaire', ages: '6 à 11 ans', color: '#0086D9', photo: PHOTOS.lecture, title: 'Des bases solides, et l’envie d’aller plus loin.', grades: ['CP', 'CE1', 'CE2', 'CE3', 'CE4', 'CE5', 'CE6'] },
];

export const GrowSection: React.FC<{ onNavigate: (p: PageId) => void }> = ({ onNavigate }) => {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => { if (!auto || reduce) return; const id = window.setInterval(() => setI((x) => (x + 1) % 3), 5200); return () => window.clearInterval(id); }, [auto, reduce]);
  const st = STAGES[i];
  const focus = SCHOOL_INFO.niveaux[i]?.focus;
  const pick = (k: number) => { setI(k); setAuto(false); };
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="max-w-[760px]">
          <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[#00A06B]"><LeafIcon size={18} /> Grandir aux Marronniers</p>
          <h2 className="mt-5 text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[1] text-[#0B3A5E]">De la crèche au CE6, <span className="italic text-[#0086D9]" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>une seule maison.</span></h2>
          <p className="mt-6 text-[1.15rem] leading-relaxed text-[#0B3A5E]/75 max-w-[56ch]">Un enfant qui entre chez nous à la crèche peut y faire tout son primaire : mêmes repères, même équipe, et un passage d’étape préparé à l’avance.</p>
        </div>

        {/* La toise */}
        <div className="mt-14 relative">
          <div className="relative h-16">
            <div className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 rounded-full bg-[#fff1d6]" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2" aria-hidden>{Array.from({ length: 49 }).map((_, k) => <span key={k} className={`w-px ${k % 8 === 0 ? 'h-7 bg-[#0B3A5E]/35' : 'h-3 bg-[#0B3A5E]/15'}`} />)}</div>
            <motion.div className="absolute left-0 top-1/2 h-3 -translate-y-1/2 rounded-full" animate={{ width: `${[18, 55, 100][i]}%`, backgroundColor: st.color }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} />
          </div>
          <div className="grid grid-cols-3 gap-3 -mt-2" role="tablist" aria-label="Étapes du parcours">
            {STAGES.map((s, k) => (
              <button key={s.key} role="tab" aria-selected={i === k} onClick={() => pick(k)} onMouseEnter={() => pick(k)} className={`text-left rounded-2xl px-5 py-4 transition-all ${i === k ? 'bg-[#0B3A5E] text-white shadow-[0_20px_40px_-20px_rgba(11,58,94,0.6)]' : 'bg-[#fff7ef] text-[#0B3A5E] hover:bg-[#fff1d6]'}`}>
                <span className="flex items-center gap-2"><span className="keep-round w-2.5 h-2.5 rounded-full" style={{ background: s.color }} /><span className="font-heading text-[clamp(1.2rem,2vw,1.7rem)]">{s.key}</span></span>
                <span className={`block text-[13px] font-semibold mt-1 ${i === k ? 'text-white/70' : 'text-[#0B3A5E]/60'}`}>{s.ages}</span>
              </button>
            ))}
          </div>
        </div>

        {/* L'étape choisie */}
        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 rounded-[28px] translate-x-3 translate-y-3 rotate-2" style={{ background: st.color, opacity: 0.9 }} />
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] bg-[#fff1d6]">
              <AnimatePresence mode="sync" initial={false}>
                <motion.img key={st.key} src={st.photo.src} alt={st.photo.alt} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: 0.6 }, scale: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } }} />
              </AnimatePresence>
            </div>
          </div>
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div key={st.key} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.45 }}>
                <p className="text-[13px] font-bold uppercase tracking-[0.16em]" style={{ color: st.color }}>{st.key} · {st.ages}</p>
                <h3 className="mt-3 text-[clamp(1.7rem,2.6vw,2.4rem)] leading-[1.08] text-[#0B3A5E]">{st.title}</h3>
                {focus && <p className="mt-4 text-[1.05rem] leading-relaxed text-[#0B3A5E]/75">{focus}.</p>}
                <ul className="mt-6 flex flex-wrap gap-2">{st.grades.map((g) => <li key={g} className="rounded-full px-3.5 py-1.5 text-[13px] font-semibold bg-[#fff7ef] text-[#0B3A5E] ring-1 ring-[#0B3A5E]/10">{g}</li>)}</ul>
                <button onClick={() => onNavigate('parcours' as PageId)} className="group mt-8 inline-flex items-center gap-2 font-bold text-[#0086D9]">Voir le parcours en détail <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="lg:col-span-3 flex justify-center"><GrowingTree stage={i} className="w-[220px] lg:w-full max-w-[260px]" /></div>
        </div>
      </div>
    </section>
  );
};
