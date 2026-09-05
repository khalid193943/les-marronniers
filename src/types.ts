/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Types & Site Architecture
 */

export type PageId =
  | 'home'
  | 'about-etablissement'
  | 'about-valeurs'
  | 'about-equipe'
  | 'niveaux'
  | 'niveaux-creche'
  | 'niveaux-maternelle'
  | 'niveaux-primaire'
  | 'pedagogie'
  | 'activites'
  | 'vie-scolaire'
  | 'locaux'
  | 'securite-bien-etre'
  | 'espace-parents'
  | 'inscription'
  | 'actualites'
  | 'galerie'
  | 'faq'
  | 'contact';

export interface PageMeta {
  id: PageId;
  title: string;
  subtitle: string;
  category?: string;
  parent?: PageId;
}
