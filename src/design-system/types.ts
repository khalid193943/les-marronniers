/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers / Giggle Design System - Type Definitions
 */

import React from 'react';

// Typography Types
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextVariant = 'paragraphXL' | 'paragraph' | 'paragraphM' | 'paragraphS' | 'caption' | 'label';
export type TextTone = 'default' | 'muted' | 'subtle' | 'coral' | 'forest' | 'sun' | 'sky' | 'lavender' | 'inverted' | 'white';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: React.ElementType;
  tone?: TextTone;
  serif?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  children: React.ReactNode;
}

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: React.ElementType;
  tone?: TextTone;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  children: React.ReactNode;
}

// Layout Primitives Types
export type ContainerWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidth;
  centered?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  background?: 'white' | 'cream' | 'coral-soft' | 'forest-soft' | 'sun-soft' | 'sky-soft' | 'forest-dark' | 'ink-dark' | 'transparent';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  containerWidth?: ContainerWidth;
  withDivider?: boolean;
  className?: string;
  children: React.ReactNode;
}

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 12;
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: GridColumns;
  colsSm?: GridColumns;
  colsMd?: GridColumns;
  colsLg?: GridColumns;
  colsXl?: GridColumns;
  gap?: GridGap;
  align?: 'start' | 'center' | 'end' | 'stretch';
  className?: string;
  children: React.ReactNode;
}

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  divider?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  axis?: 'vertical' | 'horizontal';
  className?: string;
}

// Button Types
export type ButtonVariant = 'primary' | 'coral' | 'forest' | 'sun' | 'secondary' | 'outline' | 'ghost' | 'white' | 'link' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pill?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  'aria-label': string;
  className?: string;
  children: React.ReactNode;
}

// Badge Types
export type BadgeTone = 'coral' | 'forest' | 'sun' | 'sky' | 'lavender' | 'ink' | 'outline' | 'white';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  size?: BadgeSize;
  pill?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

// Link Types
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'subtle' | 'coral' | 'forest' | 'white' | 'underline';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
}

// Rich Text Props
export interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: string;
  size?: 'sm' | 'base' | 'lg';
  theme?: 'light' | 'dark' | 'cream';
  className?: string;
  children?: React.ReactNode;
}

// Image Props
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: '1:1' | '4:3' | '16:9' | '21:9' | '3:4' | 'auto';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'coral' | 'forest';
  caption?: string;
  fit?: 'cover' | 'contain' | 'fill' | 'none';
  overlay?: boolean;
  className?: string;
}

