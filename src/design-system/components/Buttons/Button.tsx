/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers / Giggle Design System - Button Component
 * Supports Coral, Forest, Sun, Secondary, Outline, Ghost, Link, Pill shapes,
 * TV focusable states, and joyful micro-interactions.
 */

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { ButtonProps, IconButtonProps } from '../../types';

const variantClasses = {
  primary:
    'bg-[#FF5A36] text-white hover:bg-[#F0421D] active:bg-[#CA3010] shadow-coral hover:shadow-lg border border-transparent focus-visible:ring-4 focus-visible:ring-[#FF5A36]/40 focus-visible:ring-offset-2',
  coral:
    'bg-[#FF5A36] text-white hover:bg-[#F0421D] active:bg-[#CA3010] shadow-coral hover:shadow-lg border border-transparent focus-visible:ring-4 focus-visible:ring-[#FF5A36]/40 focus-visible:ring-offset-2',
  forest:
    'bg-[#1A5336] text-white hover:bg-[#287555] active:bg-[#1D4A39] shadow-forest hover:shadow-lg border border-transparent focus-visible:ring-4 focus-visible:ring-[#1A5336]/40 focus-visible:ring-offset-2',
  sun:
    'bg-[#FBBF24] text-[#78350F] hover:bg-[#F59E0B] active:bg-[#D97706] shadow-sm hover:shadow-md border border-amber-300 focus-visible:ring-4 focus-visible:ring-[#FBBF24]/40 focus-visible:ring-offset-2',
  secondary:
    'bg-[#F5EFE4] text-[#18221D] hover:bg-[#EADECD] active:bg-[#DDCBAF] border border-[#EADECD] shadow-xs hover:shadow-sm focus-visible:ring-4 focus-visible:ring-[#FF5A36]/30 focus-visible:ring-offset-2',
  white:
    'bg-white text-[#18221D] hover:bg-[#FDFBF7] active:bg-[#F5EFE4] border border-[#EADECD] shadow-sm hover:shadow-md focus-visible:ring-4 focus-visible:ring-[#FF5A36]/30 focus-visible:ring-offset-2',
  outline:
    'bg-transparent text-[#18221D] border-2 border-[#18221D] hover:bg-[#18221D]/5 active:bg-[#18221D]/10 focus-visible:ring-4 focus-visible:ring-[#FF5A36]/40 focus-visible:ring-offset-2',
  ghost:
    'bg-transparent text-[#18221D] hover:bg-[#F5EFE4] active:bg-[#EADECD] border border-transparent focus-visible:ring-4 focus-visible:ring-[#FF5A36]/30 focus-visible:ring-offset-2',
  link:
    'bg-transparent text-[#FF5A36] hover:text-[#CA3010] hover:underline underline-offset-4 p-0 h-auto border-0 shadow-none font-bold focus-visible:ring-2 focus-visible:ring-[#FF5A36] ',
  danger:
    'bg-[#B91C1C] text-white hover:bg-[#991B1B] active:bg-[#7F1D1D] shadow-sm hover:shadow-md border border-transparent focus-visible:ring-4 focus-visible:ring-[#B91C1C]/40 focus-visible:ring-offset-2',
};

const sizeClasses = {
  sm: 'text-xs font-bold px-4 py-2 min-h-[36px] gap-1.5',
  md: 'text-sm font-bold px-5 py-2.5 min-h-[44px] gap-2',
  lg: 'text-base font-bold px-7 py-3.5 min-h-[52px] gap-2.5',
  xl: 'text-lg font-extrabold px-8 py-4 min-h-[60px] gap-3',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'coral',
  size = 'md',
  pill = true,
  icon,
  iconPosition = 'left',
  isLoading = false,
  fullWidth = false,
  disabled = false,
  className = '',
  children,
  id,
  type = 'button',
  onClick,
  ...props
}) => {
  const isLinkVariant = variant === 'link';
  const variantClass = variantClasses[variant] || variantClasses.coral;
  const sizeClass = isLinkVariant ? 'text-sm' : sizeClasses[size] || sizeClasses.md;
  const roundedClass = isLinkVariant ? '' : pill ? '' : '';
  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  const isDisabled = disabled || isLoading;

  return (
    <motion.button
      id={id}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      whileHover={!isDisabled && !isLinkVariant ? { scale: 1.03, y: -1 } : undefined}
      whileTap={!isDisabled && !isLinkVariant ? { scale: 0.97 } : undefined}
      transition={{ duration: 0.18, ease: [0.34, 1.56, 0.64, 1] }}
      className={`inline-flex items-center justify-center select-none font-display font-bold tracking-wide transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${variantClass} ${sizeClass} ${roundedClass} ${widthClass} ${className}`.trim()}
      {...(props as HTMLMotionProps<'button'>)}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-0.5 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {!isLoading && icon && iconPosition === 'left' && (
        <span className="inline-flex shrink-0 items-center justify-center">{icon}</span>
      )}

      {children && <span>{children}</span>}

      {!isLoading && icon && iconPosition === 'right' && (
        <span className="inline-flex shrink-0 items-center justify-center">{icon}</span>
      )}
    </motion.button>
  );
};

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  disabled = false,
  'aria-label': ariaLabel,
  className = '',
  children,
  id,
  type = 'button',
  onClick,
  ...props
}) => {
  const variantClass = variantClasses[variant] || variantClasses.secondary;

  const sizeClass = {
    sm: 'p-2 w-9 h-9 text-xs',
    md: 'p-2.5 w-11 h-11 text-sm',
    lg: 'p-3 w-14 h-14 text-base',
  }[size];

  const roundedClass = '';

  return (
    <motion.button
      id={id}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      whileHover={!disabled ? { scale: 1.08, y: -1 } : undefined}
      whileTap={!disabled ? { scale: 0.94 } : undefined}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center justify-center shrink-0 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variantClass} ${sizeClass} ${roundedClass} ${className}`.trim()}
      {...(props as HTMLMotionProps<'button'>)}
    >
      {children}
    </motion.button>
  );
};

