/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Gestion des actualités.
 *
 * Deux couches :
 *  1. `news.json` — les articles PUBLIÉS, visibles par tous les visiteurs.
 *  2. `localStorage` — la couche de travail de l'administrateur (ajouts,
 *     modifications, suppressions) visible uniquement dans son navigateur.
 *
 * Pour publier définitivement : Admin → Exporter → remplacer src/data/news.json
 * → reconstruire le site. (Voir aussi Decap CMS dans le README pour publier
 * directement en ligne sans manipuler de fichier.)
 */

import seed from '../data/news.json';

export interface NewsPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  /** Format ISO court : 2026-09-01 */
  date: string;
  /** URL d'image ou image encodée (data:image/...) */
  cover: string;
  excerpt: string;
  /** Texte libre, les sauts de ligne créent les paragraphes */
  body: string;
  featured?: boolean;
}

const OVERLAY_KEY = 'marronniers:news:overlay';
const DELETED_KEY = 'marronniers:news:deleted';

/* ------------------------------- utilitaires ------------------------------- */

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);

export const formatDate = (iso: string) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
};

const read = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const write = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    // Quota dépassé : images trop lourdes
    return false;
  }
};

/* --------------------------------- lecture --------------------------------- */

/** Tous les articles visibles, du plus récent au plus ancien. */
export const getPosts = (): NewsPost[] => {
  const published = seed as NewsPost[];
  const overlay = read<NewsPost[]>(OVERLAY_KEY, []);
  const deleted = read<string[]>(DELETED_KEY, []);

  const map = new Map<string, NewsPost>();
  published.forEach((p) => map.set(p.id, p));
  overlay.forEach((p) => map.set(p.id, p)); // l'overlay écrase le publié
  deleted.forEach((id) => map.delete(id));

  return Array.from(map.values()).sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostBySlug = (slug: string): NewsPost | undefined =>
  getPosts().find((p) => p.slug === slug);

/** Nombre de modifications locales non publiées. */
export const getPendingCount = (): number =>
  read<NewsPost[]>(OVERLAY_KEY, []).length + read<string[]>(DELETED_KEY, []).length;

/* -------------------------------- écriture -------------------------------- */

/** Crée ou met à jour un article. Retourne false si le stockage est plein. */
export const savePost = (post: NewsPost): boolean => {
  const overlay = read<NewsPost[]>(OVERLAY_KEY, []);
  const idx = overlay.findIndex((p) => p.id === post.id);
  if (idx >= 0) overlay[idx] = post;
  else overlay.push(post);

  // Si on ré-enregistre un article supprimé, on le réactive
  const deleted = read<string[]>(DELETED_KEY, []).filter((id) => id !== post.id);
  write(DELETED_KEY, deleted);

  return write(OVERLAY_KEY, overlay);
};

export const deletePost = (id: string) => {
  const overlay = read<NewsPost[]>(OVERLAY_KEY, []).filter((p) => p.id !== id);
  write(OVERLAY_KEY, overlay);

  // Si l'article vient du fichier publié, on mémorise la suppression
  const isPublished = (seed as NewsPost[]).some((p) => p.id === id);
  if (isPublished) {
    const deleted = read<string[]>(DELETED_KEY, []);
    if (!deleted.includes(id)) write(DELETED_KEY, [...deleted, id]);
  }
};

/** Annule toutes les modifications locales non publiées. */
export const resetLocalChanges = () => {
  localStorage.removeItem(OVERLAY_KEY);
  localStorage.removeItem(DELETED_KEY);
};

export const emptyPost = (): NewsPost => ({
  id: `post-${Date.now()}`,
  slug: '',
  title: '',
  category: 'Vie scolaire',
  date: new Date().toISOString().slice(0, 10),
  cover: '',
  excerpt: '',
  body: '',
  featured: false,
});

/* ---------------------------- export / import ---------------------------- */

/** Télécharge le fichier news.json prêt à remplacer dans le projet. */
export const exportPosts = () => {
  const data = JSON.stringify(getPosts(), null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'news.json';
  a.click();
  URL.revokeObjectURL(url);
};

/** Remplace la couche locale par le contenu d'un fichier JSON. */
export const importPosts = async (file: File): Promise<boolean> => {
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    if (!Array.isArray(parsed)) return false;
    write(OVERLAY_KEY, parsed);
    write(DELETED_KEY, []);
    return true;
  } catch {
    return false;
  }
};

/* ----------------------------- images (upload) ----------------------------- */

/**
 * Convertit une image en data-URL redimensionnée (max 1200px, JPEG 80%)
 * pour tenir dans le stockage du navigateur.
 */
export const fileToResizedDataUrl = (file: File, maxW = 1200): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Lecture impossible'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Image invalide'));
      img.onload = () => {
        const scale = Math.min(1, maxW / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject(new Error('Canvas indisponible'));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
