/**
 * Les Marronniers — éléments du monde « marronnier » : feuille palmée, marron, arbre qui grandit.
 */
import React, { useEffect } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import Lenis from 'lenis';

/* Feuille de marronnier : sept folioles en éventail */
export const LeafIcon: React.FC<{ color?: string; size?: number; className?: string }> = ({ color = '#2F8F4E', size = 40, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden>
    {[-72, -48, -24, 0, 24, 48, 72].map((a, i) => (
      <ellipse key={i} cx="50" cy="30" rx={i === 3 ? 9 : 8} ry={i === 3 ? 26 : i === 0 || i === 6 ? 16 : 22} fill={color} transform={`rotate(${a} 50 62)`} opacity={0.92} />
    ))}
    <path d="M50 62 L50 96" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/* Marron (le fruit) : brillant, avec son œil clair */
export const ConkerIcon: React.FC<{ size?: number; className?: string }> = ({ size = 26, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-hidden>
    <defs><radialGradient id="ck" cx="35%" cy="30%" r="70%"><stop offset="0" stopColor="#C77A45" /><stop offset="0.55" stopColor="#7A3E1D" /><stop offset="1" stopColor="#4A220E" /></radialGradient></defs>
    <circle cx="20" cy="21" r="16" fill="url(#ck)" />
    <ellipse cx="20" cy="31" rx="9" ry="4.5" fill="#E9CFA9" opacity="0.85" />
    <ellipse cx="14" cy="14" rx="4" ry="2.5" fill="#fff" opacity="0.35" transform="rotate(-30 14 14)" />
  </svg>
);

/* Feuilles qui tombent (et quelques marrons) */
export const FallingLeaves: React.FC<{ n?: number; className?: string }> = ({ n = 12, className = '' }) => {
  const reduce = useReducedMotion();
  if (reduce) return null;
  const colors = ['#2F8F4E', '#7BB661', '#E3A044', '#FFC800', '#A65A2E'];
  const list = Array.from({ length: n }, (_, i) => { const r = (k: number) => ((Math.sin(i * 77.7 + k * 19.1) * 43758.5453) % 1 + 1) % 1; return { left: r(1) * 96, size: 22 + r(2) * 30, t: 15 + r(3) * 12, d: -r(4) * 24, dx: (r(5) - 0.5) * 24, r0: r(6) * 90 - 45, r1: r(7) * 300 - 150, o: 0.35 + r(8) * 0.4, color: colors[i % colors.length], conker: i % 6 === 5 }; });
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      {list.map((f, i) => (
        <span key={i} className="mr-leaf" style={{ left: `${f.left}%`, ['--t' as any]: `${f.t}s`, ['--d' as any]: `${f.d}s`, ['--dx' as any]: `${f.dx}vw`, ['--r0' as any]: `${f.r0}deg`, ['--r1' as any]: `${f.r1}deg`, ['--o' as any]: f.o }}>
          <span>{f.conker ? <ConkerIcon size={f.size * 0.6} /> : <LeafIcon color={f.color} size={f.size} />}</span>
        </span>
      ))}
    </div>
  );
};

/* Le marronnier qui grandit : graine → jeune pousse → arbre */
export const GrowingTree: React.FC<{ stage: number; className?: string }> = ({ stage, className = '' }) => {
  const s = [0.38, 0.68, 1][stage] ?? 1;
  const spring = { type: 'spring' as const, stiffness: 120, damping: 16 };
  return (
    <svg viewBox="0 0 220 240" className={className} aria-hidden>
      <ellipse cx="110" cy="226" rx="86" ry="10" fill="#0B3A5E" opacity="0.08" />
      <motion.g initial={false} animate={{ scale: s }} transition={spring} style={{ transformOrigin: '110px 226px' }}>
        <path d="M104 226 C 106 190, 104 170, 98 150 L 122 150 C 116 172, 114 192, 116 226 Z" fill="#7A3E1D" />
        <path d="M110 170 C 96 160, 84 150, 76 136" stroke="#7A3E1D" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M112 164 C 128 156, 140 146, 148 132" stroke="#7A3E1D" strokeWidth="6" strokeLinecap="round" fill="none" />
        <circle cx="110" cy="98" r="66" fill="#2F8F4E" />
        <circle cx="66" cy="118" r="40" fill="#3FA160" />
        <circle cx="156" cy="116" r="42" fill="#3FA160" />
        <circle cx="110" cy="62" r="40" fill="#4DB26D" />
        {stage >= 2 && [[70, 96], [140, 86], [118, 128], [92, 62]].map(([x, y], i) => (
          <motion.g key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ...spring, delay: 0.2 + i * 0.08 }} style={{ transformOrigin: `${x}px ${y}px` }}>
            <path d={`M${x - 7} ${y + 4} L${x} ${y - 10} L${x + 7} ${y + 4} Z`} fill="#FFF7EF" opacity="0.95" />
            <path d={`M${x - 5} ${y - 2} L${x} ${y - 16} L${x + 5} ${y - 2} Z`} fill="#FFFFFF" />
          </motion.g>
        ))}
      </motion.g>
    </svg>
  );
};

/* Défilement fluide + fil de lecture */
export const SmoothScroll: React.FC = () => {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || window.matchMedia('(pointer: coarse)').matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    let id = 0; const raf = (t: number) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, [reduce]);
  return null;
};
export const ReadingProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div className="fixed inset-x-0 top-0 h-[3px] z-[70] origin-left" style={{ scaleX: x, background: 'linear-gradient(90deg,#2F8F4E,#FFC800,#E3A044,#0086D9)' }} aria-hidden />;
};
