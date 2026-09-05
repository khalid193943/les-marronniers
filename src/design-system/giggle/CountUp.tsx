/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Compteur animé : le chiffre monte de 0 à sa valeur
 * quand il entre à l'écran (spring), puis affiche le suffixe.
 */

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion, animate } from 'motion/react';

interface CountUpProps {
  /** Valeur finale numérique (ex: 100, 15, 2) */
  value: number;
  /** Texte avant/après le nombre (ex: suffix="%" ou suffix=" ans") */
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

export const CountUp: React.FC<CountUpProps> = ({
  value,
  prefix = '',
  suffix = '',
  className = '',
  duration = 1.6,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};
