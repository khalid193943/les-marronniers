/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Réception des messages du site.
 *
 * Les formulaires envoient vers Netlify Forms (source officielle, conservée
 * côté serveur). En parallèle, chaque envoi est journalisé ici afin que
 * l'espace admin puisse afficher les demandes sans configuration.
 *
 * L'admin peut aussi connecter l'API Netlify (jeton personnel) pour voir
 * l'intégralité des soumissions, y compris celles envoyées par d'autres
 * appareils. Le jeton reste dans le navigateur de l'administrateur.
 */

export type SubmissionKind = 'contact' | 'pre-inscription';

export interface Submission {
  id: string;
  kind: SubmissionKind;
  receivedAt: string;
  data: Record<string, string>;
  read?: boolean;
  /** true si la donnée vient de l'API Netlify plutôt que du journal local */
  remote?: boolean;
}

const KEY = 'marronniers:submissions';
const TOKEN_KEY = 'marronniers:netlify:token';
const SITE_KEY = 'marronniers:netlify:site';

const read = (): Submission[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Submission[]) : [];
  } catch {
    return [];
  }
};

const write = (list: Submission[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, 300)));
  } catch {
    /* quota : on ignore, Netlify garde la source officielle */
  }
};

/** Journalise un envoi de formulaire. Appelé automatiquement par les formulaires. */
export const logSubmission = (kind: SubmissionKind, data: Record<string, string>) => {
  const clean = { ...data };
  delete clean['form-name'];
  delete clean['bot-field'];
  const entry: Submission = {
    id: `sub-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    kind,
    receivedAt: new Date().toISOString(),
    data: clean,
  };
  write([entry, ...read()]);
};

export const getSubmissions = (): Submission[] =>
  read().sort((a, b) => (a.receivedAt < b.receivedAt ? 1 : -1));

export const markRead = (id: string) => {
  write(read().map((s) => (s.id === id ? { ...s, read: true } : s)));
};

export const deleteSubmission = (id: string) => {
  write(read().filter((s) => s.id !== id));
};

export const clearSubmissions = () => localStorage.removeItem(KEY);

/** Export CSV de toutes les demandes affichées. */
export const exportSubmissionsCsv = (list: Submission[]) => {
  const cols = ['Type', 'Reçu le', 'Nom', 'Téléphone', 'Email', 'Enfant', 'Niveau', 'Message'];
  const cell = (v = '') => `"${String(v).replace(/"/g, '""')}"`;
  const rows = list.map((s) =>
    [
      s.kind === 'contact' ? 'Contact' : 'Pré-inscription',
      new Date(s.receivedAt).toLocaleString('fr-FR'),
      s.data.nom || s.data.parent || '',
      s.data.telephone || '',
      s.data.email || '',
      s.data.enfant || '',
      s.data.niveau || '',
      s.data.message || '',
    ]
      .map(cell)
      .join(';'),
  );
  const csv = ['\uFEFF' + cols.map(cell).join(';'), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `demandes-marronniers-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

/* --------------------------- connexion API Netlify --------------------------- */

export const getNetlifyConfig = () => ({
  token: localStorage.getItem(TOKEN_KEY) || '',
  siteId: localStorage.getItem(SITE_KEY) || '',
});

export const saveNetlifyConfig = (token: string, siteId: string) => {
  localStorage.setItem(TOKEN_KEY, token.trim());
  localStorage.setItem(SITE_KEY, siteId.trim());
};

export const clearNetlifyConfig = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(SITE_KEY);
};

/**
 * Récupère les soumissions depuis l'API Netlify.
 * Retourne un message d'erreur lisible en cas d'échec.
 */
export const fetchNetlifySubmissions = async (): Promise<
  { ok: true; list: Submission[] } | { ok: false; error: string }
> => {
  const { token, siteId } = getNetlifyConfig();
  if (!token || !siteId) return { ok: false, error: 'Connexion Netlify non configurée.' };

  try {
    const res = await fetch(
      `https://api.netlify.com/api/v1/sites/${encodeURIComponent(siteId)}/submissions?per_page=100`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (res.status === 401) return { ok: false, error: 'Jeton refusé. Vérifiez votre token Netlify.' };
    if (res.status === 404) return { ok: false, error: 'Site introuvable. Vérifiez l’identifiant du site.' };
    if (!res.ok) return { ok: false, error: `Erreur Netlify (${res.status}).` };

    const raw = (await res.json()) as Array<{
      id: string;
      form_name: string;
      created_at: string;
      data: Record<string, string>;
    }>;

    const list: Submission[] = raw.map((r) => ({
      id: `netlify-${r.id}`,
      kind: r.form_name === 'pre-inscription' ? 'pre-inscription' : 'contact',
      receivedAt: r.created_at,
      data: r.data || {},
      remote: true,
    }));
    return { ok: true, list };
  } catch {
    return {
      ok: false,
      error: 'Connexion impossible. Vérifiez votre réseau ou consultez le tableau de bord Netlify.',
    };
  }
};
