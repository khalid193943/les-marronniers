/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Academy Design System - Subtle Motion Foundations
 */

import { type Variants, type Transition } from 'motion/react';

// Transition presets
export const smoothTransition: Transition = {
  duration: 0.35,
  ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier smooth ease
};

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

export const deliberateTransition: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1], // easeOutExpo
};

// Subtle reveal & fade variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: smoothTransition,
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
};

// Stagger Container for lists, grids, badge clusters
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Interactive micro-interaction presets for buttons / cards / chips
export const hoverLiftProps = {
  whileHover: { y: -2, transition: { duration: 0.2 } },
  whileTap: { y: 0, scale: 0.98, transition: { duration: 0.1 } },
};

export const buttonMotionProps = {
  whileHover: { scale: 1.015, transition: { duration: 0.15 } },
  whileTap: { scale: 0.975, transition: { duration: 0.1 } },
};

export const cardMotionProps = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: smoothTransition,
  whileHover: { y: -3, transition: { duration: 0.2 } },
};
