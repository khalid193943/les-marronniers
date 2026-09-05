/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers / Giggle Design System - Central Design Tokens
 * Warm, joyful, and clear visual language inspired by the Ovo Giggle aesthetic.
 */

export const colors = {
  // Primary Signature: Coral Orange / Tangerine
  coral: {
    50: '#fff5f2',
    100: '#ffe8e2',
    200: '#ffd4c7',
    300: '#ffb5a1',
    400: '#ff8a6b',
    500: '#FF5A36', // Core Giggle Coral
    600: '#f0421d',
    700: '#ca3010',
    800: '#a62b12',
    900: '#882815',
    950: '#4a1106',
  },
  // Deep Forest / Botanical Evergreen
  forest: {
    50: '#f1f8f4',
    100: '#def0e6',
    200: '#bee1cf',
    300: '#91cbaf',
    400: '#5dae8a',
    500: '#38926c',
    600: '#287555',
    700: '#215d45',
    800: '#1d4a39',
    900: '#1A5336', // Core Forest
    950: '#0b1d16',
  },
  // Sunshine Honey / Warm Mustard
  sun: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#FBBF24', // Core Warm Yellow
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  // Periwinkle Sky / Blue
  sky: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  // Soft Lavender / Creative Violet
  lavender: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
  },
  // Warm Neutral / Vanilla Parchment
  cream: {
    50: '#fdfbf7',
    100: '#FBF9F4', // Base Canvas
    200: '#f5efe4',
    300: '#eadecd',
    400: '#ddcbaf',
    500: '#cbb38f',
    600: '#b79a72',
    700: '#9a7d5b',
    800: '#7d654c',
    900: '#66533f',
    950: '#372b20',
  },
  // Deep Ink / Text
  ink: {
    50: '#f6f7f6',
    100: '#e2e5e3',
    200: '#c4cbce',
    300: '#9ba7a5',
    400: '#6e7e7d',
    500: '#4e5e5c',
    600: '#3c4b4a',
    700: '#2f3d3b',
    800: '#24302f',
    900: '#18221D', // Core Deep Ink
    950: '#0c120f',
  },
  // Status feedback
  status: {
    success: '#15803d',
    warning: '#b45309',
    error: '#b91c1c',
    info: '#1d4ed8',
  },
  white: '#ffffff',
  black: '#000000',
} as const;

export const typography = {
  fontFamilies: {
    display: "var(--font-display), Outfit, system-ui, sans-serif",
    sans: "var(--font-sans), Plus Jakarta Sans, system-ui, sans-serif",
    serif: "var(--font-serif), Outfit, serif",
  },
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  scale: {
    // Headings (Playful, rounded, modern proportions)
    h1: {
      fontSize: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
      lineHeight: 'leading-[1.08]',
      letterSpacing: 'tracking-tight',
      fontWeight: 'font-extrabold',
      fontFamily: 'font-display',
    },
    h2: {
      fontSize: 'text-3xl sm:text-4xl md:text-5xl',
      lineHeight: 'leading-[1.12]',
      letterSpacing: 'tracking-tight',
      fontWeight: 'font-bold',
      fontFamily: 'font-display',
    },
    h3: {
      fontSize: 'text-2xl sm:text-3xl md:text-4xl',
      lineHeight: 'leading-[1.2]',
      letterSpacing: 'tracking-tight',
      fontWeight: 'font-bold',
      fontFamily: 'font-display',
    },
    h4: {
      fontSize: 'text-xl sm:text-2xl md:text-3xl',
      lineHeight: 'leading-[1.25]',
      letterSpacing: 'tracking-tight',
      fontWeight: 'font-semibold',
      fontFamily: 'font-display',
    },
    h5: {
      fontSize: 'text-lg sm:text-xl md:text-2xl',
      lineHeight: 'leading-[1.3]',
      letterSpacing: 'tracking-normal',
      fontWeight: 'font-semibold',
      fontFamily: 'font-display',
    },
    h6: {
      fontSize: 'text-base sm:text-lg md:text-xl',
      lineHeight: 'leading-[1.35]',
      letterSpacing: 'tracking-normal',
      fontWeight: 'font-semibold',
      fontFamily: 'font-sans',
    },
    // Body Text Hierarchy
    paragraphXL: {
      fontSize: 'text-lg sm:text-xl md:text-2xl',
      lineHeight: 'leading-relaxed',
      letterSpacing: 'tracking-normal',
      fontWeight: 'font-normal',
      fontFamily: 'font-sans',
    },
    paragraph: {
      fontSize: 'text-base sm:text-lg',
      lineHeight: 'leading-relaxed',
      letterSpacing: 'tracking-normal',
      fontWeight: 'font-normal',
      fontFamily: 'font-sans',
    },
    paragraphM: {
      fontSize: 'text-sm sm:text-base',
      lineHeight: 'leading-relaxed',
      letterSpacing: 'tracking-normal',
      fontWeight: 'font-normal',
      fontFamily: 'font-sans',
    },
    paragraphS: {
      fontSize: 'text-xs sm:text-sm',
      lineHeight: 'leading-normal',
      letterSpacing: 'tracking-normal',
      fontWeight: 'font-normal',
      fontFamily: 'font-sans',
    },
    caption: {
      fontSize: 'text-xs',
      lineHeight: 'leading-normal',
      letterSpacing: 'tracking-wide',
      fontWeight: 'font-medium',
      fontFamily: 'font-sans',
    },
    label: {
      fontSize: 'text-xs sm:text-sm',
      lineHeight: 'leading-none',
      letterSpacing: 'tracking-wider uppercase',
      fontWeight: 'font-bold',
      fontFamily: 'font-display',
    },
  },
} as const;

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
  40: '160px',
} as const;

export const shadows = {
  xxs: '0 1px 2px 0 rgba(24, 34, 29, 0.03)',
  xs: '0 2px 4px 0 rgba(24, 34, 29, 0.04), 0 1px 2px -1px rgba(24, 34, 29, 0.04)',
  sm: '0 4px 8px -1px rgba(24, 34, 29, 0.06), 0 2px 4px -1px rgba(24, 34, 29, 0.03)',
  md: '0 8px 20px -3px rgba(24, 34, 29, 0.07), 0 4px 8px -2px rgba(24, 34, 29, 0.03)',
  lg: '0 16px 32px -4px rgba(24, 34, 29, 0.08), 0 6px 16px -3px rgba(24, 34, 29, 0.04)',
  xl: '0 24px 48px -6px rgba(24, 34, 29, 0.10), 0 12px 24px -4px rgba(24, 34, 29, 0.05)',
  xxl: '0 32px 64px -12px rgba(24, 34, 29, 0.14), 0 16px 32px -6px rgba(24, 34, 29, 0.06)',
  coral: '0 12px 30px -4px rgba(255, 90, 54, 0.28)',
  forest: '0 12px 30px -4px rgba(26, 83, 54, 0.22)',
} as const;

export const radii = {
  none: '0px',
  sm: '6px',
  md: '12px',
  lg: '18px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '40px',
  full: '9999px',
} as const;

export const borders = {
  width: {
    none: '0px',
    thin: '1px',
    medium: '2px',
    thick: '4px',
  },
  colors: {
    subtle: 'rgba(234, 222, 205, 0.6)',
    medium: 'rgba(218, 200, 175, 0.8)',
    strong: 'rgba(154, 125, 91, 0.8)',
    coral: 'rgba(255, 90, 54, 0.4)',
    forest: 'rgba(26, 83, 54, 0.3)',
  },
} as const;

export const containerWidths = {
  sm: 'max-w-screen-sm',     // 640px
  md: 'max-w-screen-md',     // 768px
  lg: 'max-w-screen-lg',     // 1024px
  xl: 'max-w-screen-xl',     // 1280px
  '2xl': 'max-w-7xl',        // 1440px / 80rem
  full: 'max-w-full',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const transitions = {
  timing: {
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
    deliberate: '600ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

