/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida — Bibliothèque d'animation
 *
 * Primitives réutilisables construites sur motion/react.
 * Toutes respectent prefers-reduced-motion : si l'utilisateur a demandé
 * moins d'animations, le contenu s'affiche immédiatement, sans mouvement.
 */

import React, { useRef, useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  useReducedMotion,
  type MotionValue,
} from 'motion/react';

const DOUX = [0.22, 1, 0.36, 1] as const;
const RESSORT = { stiffness: 260, damping: 26, mass: 0.7 };

/* ══════════════════════════════════════════════════════════════
   1. Reveal — apparition au défilement, avec flou léger
   Plus riche que le fondu simple : le flou donne de la profondeur.
   ══════════════════════════════════════════════════════════════ */
type Sens = 'haut' | 'bas' | 'gauche' | 'droite' | 'zoom' | 'aucun';

export const Reveal: React.FC<{
  children: React.ReactNode;
  sens?: Sens;
  delai?: number;
  duree?: number;
  distance?: number;
  flou?: boolean;
  className?: string;
  once?: boolean;
}> = ({
  children,
  sens = 'haut',
  delai = 0,
  duree = 0.7,
  distance = 32,
  flou = true,
  className = '',
  once = true,
}) => {
  const reduit = useReducedMotion();

  if (reduit) return <div className={className}>{children}</div>;

  const depart: Record<Sens, Record<string, number>> = {
    haut: { y: distance },
    bas: { y: -distance },
    gauche: { x: -distance },
    droite: { x: distance },
    zoom: { scale: 0.94 },
    aucun: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: flou ? 'blur(6px)' : 'blur(0px)', ...depart[sens] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: duree, delay: delai, ease: DOUX }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ══════════════════════════════════════════════════════════════
   2. TitreAnime — le titre se dévoile mot par mot
   Pour les grands titres de section. Chaque mot monte à son tour.
   ══════════════════════════════════════════════════════════════ */
export const TitreAnime: React.FC<{
  texte: string;
  className?: string;
  delai?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  motCle?: string;
  classeMotCle?: string;
}> = ({ texte, className = '', delai = 0, as = 'h2', motCle, classeMotCle = '' }) => {
  const reduit = useReducedMotion();
  const Balise = as as React.ElementType;
  const mots = texte.split(' ');

  if (reduit) return <Balise className={className}>{texte}</Balise>;

  return (
    <Balise className={className}>
      {mots.map((mot, i) => {
        const estCle = motCle ? mot.replace(/[.,!?]/g, '') === motCle : false;
        return (
          <span
            key={i}
            style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: '105%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: delai + i * 0.055, ease: DOUX }}
              className={estCle ? classeMotCle : ''}
            >
              {mot}
              {i < mots.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        );
      })}
    </Balise>
  );
};

/* ══════════════════════════════════════════════════════════════
   3. Compteur — le chiffre défile jusqu'à sa valeur
   Gère « 100% », « 15+ », « 15 ans » : le suffixe reste fixe.
   ══════════════════════════════════════════════════════════════ */
export const Compteur: React.FC<{
  valeur: string;
  duree?: number;
  className?: string;
}> = ({ valeur, duree = 1.6, className = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const vu = useInView(ref, { once: true, margin: '-40px' });
  const reduit = useReducedMotion();
  const [affiche, setAffiche] = useState('0');

  const correspondance = valeur.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  const avant = correspondance ? correspondance[1] : '';
  const cible = correspondance ? parseFloat(correspondance[2].replace(',', '.')) : 0;
  const apres = correspondance ? correspondance[3] : '';
  const decimales = correspondance && correspondance[2].includes(',') ? 1 : 0;

  useEffect(() => {
    if (!correspondance) {
      setAffiche(valeur);
      return;
    }
    if (reduit || !vu) {
      if (reduit) setAffiche(cible.toFixed(decimales).replace('.', ','));
      return;
    }
    let brut = 0;
    const debut = performance.now();
    const pas = (maintenant: number) => {
      const t = Math.min(1, (maintenant - debut) / (duree * 1000));
      // sortie douce : rapide au début, ralentit à la fin
      const e = 1 - Math.pow(1 - t, 3);
      brut = cible * e;
      setAffiche(brut.toFixed(decimales).replace('.', ','));
      if (t < 1) requestAnimationFrame(pas);
      else setAffiche(cible.toFixed(decimales).replace('.', ','));
    };
    const id = requestAnimationFrame(pas);
    return () => cancelAnimationFrame(id);
  }, [vu, reduit, cible, duree, decimales, valeur, correspondance]);

  return (
    <span ref={ref} className={className}>
      {correspondance ? (
        <>
          {avant}
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{affiche}</span>
          {apres}
        </>
      ) : (
        valeur
      )}
    </span>
  );
};

/* ══════════════════════════════════════════════════════════════
   4. Parallaxe — l'élément bouge plus lentement que la page
   Donne de la profondeur aux images de fond.
   ══════════════════════════════════════════════════════════════ */
export const Parallaxe: React.FC<{
  children: React.ReactNode;
  force?: number;
  className?: string;
}> = ({ children, force = 60, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduit = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const brut = useTransform(scrollYProgress, [0, 1], [-force, force]);
  const y = useSpring(brut, { stiffness: 90, damping: 22, mass: 0.4 });

  if (reduit) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   5. ImageRideau — la photo se dévoile derrière un rideau
   Le voile glisse, l'image dézoome. Plus élégant qu'un fondu.
   ══════════════════════════════════════════════════════════════ */
export const ImageRideau: React.FC<{
  src: string;
  alt: string;
  className?: string;
  classeImage?: string;
  couleurRideau?: string;
  delai?: number;
}> = ({
  src,
  alt,
  className = '',
  classeImage = '',
  couleurRideau = '#084274',
  delai = 0,
}) => {
  const reduit = useReducedMotion();

  if (reduit) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img src={src} alt={alt} className={`w-full h-full object-cover ${classeImage}`} loading="lazy" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover ${classeImage}`}
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.3, delay: delai, ease: DOUX }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 origin-bottom"
        style={{ backgroundColor: couleurRideau }}
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, delay: delai, ease: DOUX }}
      />
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   6. CarteInclinee — la carte suit le curseur en 3D
   Effet discret : quelques degrés suffisent.
   ══════════════════════════════════════════════════════════════ */
export const CarteInclinee: React.FC<{
  children: React.ReactNode;
  className?: string;
  intensite?: number;
}> = ({ children, className = '', intensite = 7 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduit = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [intensite, -intensite]), RESSORT);
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-intensite, intensite]), RESSORT);

  if (reduit) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 900 }}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
};

/* ══════════════════════════════════════════════════════════════
   7. BoutonMagnetique — le bouton s'approche du curseur
   Sur les appels à l'action principaux uniquement.
   ══════════════════════════════════════════════════════════════ */
export const BoutonMagnetique: React.FC<{
  children: React.ReactNode;
  className?: string;
  force?: number;
  onClick?: () => void;
  href?: string;
}> = ({ children, className = '', force = 0.28, onClick, href }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduit = useReducedMotion();
  const x = useSpring(useMotionValue(0), RESSORT);
  const y = useSpring(useMotionValue(0), RESSORT);

  const contenu = href ? (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );

  if (reduit) return contenu;

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: 'inline-block' }}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * force);
        y.set((e.clientY - (r.top + r.height / 2)) * force);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {contenu}
    </motion.div>
  );
};

/* ══════════════════════════════════════════════════════════════
   8. Defile — bande qui défile en boucle, pause au survol
   Pour les logos partenaires ou une galerie de vignettes.
   ══════════════════════════════════════════════════════════════ */
export const Defile: React.FC<{
  children: React.ReactNode;
  duree?: number;
  sens?: 'gauche' | 'droite';
  className?: string;
}> = ({ children, duree = 38, sens = 'gauche', className = '' }) => {
  const reduit = useReducedMotion();

  if (reduit) {
    return <div className={`flex flex-wrap justify-center gap-6 ${className}`}>{children}</div>;
  }

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        maskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)',
      }}
    >
      <motion.div
        className="flex w-max gap-6 hover:[animation-play-state:paused]"
        animate={{ x: sens === 'gauche' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: duree, repeat: Infinity, ease: 'linear' }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   9. BarreProgression — fine barre en haut de page
   Indique où l'on en est dans la lecture.
   ══════════════════════════════════════════════════════════════ */
export const BarreProgression: React.FC<{ couleur?: string }> = ({
  couleur = '#e3a044',
}) => {
  const { scrollYProgress } = useScroll();
  const echelle = useSpring(scrollYProgress, { stiffness: 130, damping: 28, restDelta: 0.001 });
  const reduit = useReducedMotion();

  if (reduit) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
      style={{ scaleX: echelle, backgroundColor: couleur }}
    />
  );
};

/* ══════════════════════════════════════════════════════════════
   10. Cascade — les enfants apparaissent l'un après l'autre
   ══════════════════════════════════════════════════════════════ */
export const Cascade: React.FC<{
  children: React.ReactNode;
  decalage?: number;
  className?: string;
}> = ({ children, decalage = 0.09, className = '' }) => {
  const reduit = useReducedMotion();

  if (reduit) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="cache"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: { transition: { staggerChildren: decalage, delayChildren: 0.05 } },
        cache: {},
      }}
    >
      {children}
    </motion.div>
  );
};

export const CascadeItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const reduit = useReducedMotion();

  if (reduit) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        cache: { opacity: 0, y: 26, filter: 'blur(5px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.62, ease: DOUX },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

/* ══════════════════════════════════════════════════════════════
   11. TraitAnime — un filet qui se dessine
   Sous les sur-titres, ou pour séparer deux blocs.
   ══════════════════════════════════════════════════════════════ */
export const TraitAnime: React.FC<{
  className?: string;
  couleur?: string;
  epaisseur?: number;
  delai?: number;
}> = ({ className = '', couleur = '#e3a044', epaisseur = 2, delai = 0 }) => {
  const reduit = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className={`block origin-left ${className}`}
      style={{ height: epaisseur, backgroundColor: couleur }}
      initial={reduit ? undefined : { scaleX: 0 }}
      whileInView={reduit ? undefined : { scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: delai, ease: DOUX }}
    />
  );
};

/* ══════════════════════════════════════════════════════════════
   12. useProgression — utilitaire pour lier une valeur au défilement
   ══════════════════════════════════════════════════════════════ */
export const useProgression = (
  ref: React.RefObject<HTMLElement | null>
): MotionValue<number> => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  return scrollYProgress;
};
