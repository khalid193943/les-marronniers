/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Espace d'administration (#admin)
 *
 * Deux espaces :
 *  • Actualités : créer, modifier, supprimer des articles (titre, image, texte…)
 *  • Demandes   : messages de contact et pré-inscriptions reçus
 *
 * Sécurité : le mot de passe ci-dessous est une protection légère côté
 * navigateur. Pour un vrai verrou, activez la protection par mot de passe de
 * votre hébergeur (Netlify → Site settings → Access control). Voir le README.
 */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Lock, Newspaper, Inbox, Plus, Pencil, Trash2, Download, Upload, X, Check,
  Image as ImageIcon, Star, RefreshCw, LogOut, Link2, AlertCircle, Phone, Mail,
} from 'lucide-react';
import {
  NewsPost, getPosts, savePost, deletePost, emptyPost, slugify, formatDate,
  exportPosts, importPosts, resetLocalChanges, getPendingCount, fileToResizedDataUrl,
} from '../lib/newsStore';
import {
  Submission, getSubmissions, markRead, deleteSubmission, exportSubmissionsCsv,
  getNetlifyConfig, saveNetlifyConfig, clearNetlifyConfig, fetchNetlifySubmissions,
} from '../lib/submissionsStore';
import { ADMIN_PASSWORD } from '../data/adminConfig';

/* --------------------------------- styles --------------------------------- */

const field =
  'w-full bg-[#084274]/6 border border-[#084274]/15 px-4 py-2.5 font-body text-[15px] text-[#084274] placeholder:text-[#084274]/40 focus:outline-none focus:border-[#084274]/40 focus:bg-[#084274]/10 transition-colors rounded-lg';
const label = 'block font-body text-xs font-bold text-[#084274]/70 mb-1.5';
const btn =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-bold text-sm px-5 py-2.5 cursor-pointer transition-colors';
const btnPrimary = `${btn} bg-[#084274] text-[#feeddb] hover:bg-[#05335b]`;
const btnGhost = `${btn} bg-[#084274]/8 text-[#084274] hover:bg-[#084274]/15`;

/* -------------------------------- connexion -------------------------------- */

const LoginGate: React.FC<{ onOk: () => void }> = ({ onOk }) => {
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd === ADMIN_PASSWORD) {
      sessionStorage.setItem('marronniers:admin', '1');
      onOk();
    } else {
      setError(true);
      setPwd('');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, rotate: 3, y: 20 }}
        animate={{ opacity: 1, rotate: -1, y: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 13 }}
        className="relative w-full max-w-sm"
      >
        <span aria-hidden="true" className="absolute inset-0 bg-[#e3a044]" style={{ transform: 'rotate(2deg) translate(10px,10px)' }} />
        <div className="relative z-10 bg-[#084274] p-8 shadow-2xl">
          <Lock className="w-8 h-8 text-[#e3a044] mx-auto mb-4" />
          <h1 className="font-heading text-2xl text-[#feeddb] text-center mb-1">Espace administration</h1>
          <p className="font-body text-xs text-[#feeddb]/60 text-center mb-6">Les Marronniers El Jadida</p>
          <input
            type="password"
            value={pwd}
            onChange={(e) => { setPwd(e.target.value); setError(false); }}
            placeholder="Mot de passe"
            autoFocus
            className="w-full bg-[#feeddb]/10 border border-[#feeddb]/25 px-4 py-3 text-[#feeddb] placeholder:text-[#feeddb]/40 rounded-lg focus:outline-none focus:border-[#e3a044] mb-3"
          />
          {error && <p className="font-body text-xs text-[#f0a89a] mb-3 text-center">Mot de passe incorrect.</p>}
          <button type="submit" className="w-full rounded-full bg-[#e3a044] text-[#084274] font-bold py-3 cursor-pointer hover:bg-[#f0b055] transition-colors">
            Se connecter
          </button>
        </div>
      </motion.form>
    </div>
  );
};

/* ------------------------------ éditeur d'article ------------------------------ */

const PostEditor: React.FC<{
  post: NewsPost;
  onSave: (p: NewsPost) => void;
  onCancel: () => void;
}> = ({ post, onSave, onCancel }) => {
  const [draft, setDraft] = useState<NewsPost>(post);
  const [uploadError, setUploadError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof NewsPost>(k: K, v: NewsPost[K]) =>
    setDraft((d) => ({ ...d, [k]: v }));

  const handleFile = async (f?: File) => {
    if (!f) return;
    setUploadError('');
    try {
      const url = await fileToResizedDataUrl(f);
      set('cover', url);
    } catch {
      setUploadError('Image illisible. Essayez un JPG ou PNG.');
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...draft, slug: draft.slug || slugify(draft.title) });
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-[#084274]/12 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col gap-5"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-2xl text-[#084274]">
          {post.title ? 'Modifier l’article' : 'Nouvel article'}
        </h3>
        <button type="button" onClick={onCancel} className="w-9 h-9 rounded-full bg-[#084274]/8 text-[#084274] flex items-center justify-center cursor-pointer hover:bg-[#084274]/15" aria-label="Fermer">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div>
        <label className={label} htmlFor="a-title">Titre</label>
        <input id="a-title" className={field} value={draft.title} required
          onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value, slug: slugify(e.target.value) }))}
          placeholder="Ex : Spectacle de fin d’année" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className={label} htmlFor="a-cat">Catégorie</label>
          <select id="a-cat" className={field} value={draft.category} onChange={(e) => set('category', e.target.value)}>
            {['Vie scolaire', 'Inscriptions', 'Nos campus', 'Ateliers', 'Événement', 'Pédagogie'].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="a-date">Date</label>
          <input id="a-date" type="date" className={field} value={draft.date} onChange={(e) => set('date', e.target.value)} />
        </div>
        <div className="flex items-end">
          <button type="button" onClick={() => set('featured', !draft.featured)}
            className={`${draft.featured ? 'bg-[#e3a044] text-[#084274]' : 'bg-[#084274]/8 text-[#084274]'} ${btn} w-full`}>
            <Star className="w-4 h-4" fill={draft.featured ? 'currentColor' : 'none'} />
            {draft.featured ? 'À la une' : 'Mettre à la une'}
          </button>
        </div>
      </div>

      {/* Image */}
      <div>
        <label className={label}>Image de couverture</label>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-full sm:w-56 aspect-[4/3] bg-[#084274]/6 border border-[#084274]/15 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
            {draft.cover ? (
              <img src={draft.cover} alt="" className="w-full h-full object-cover" />
            ) : (
              <ImageIcon className="w-7 h-7 text-[#084274]/30" />
            )}
          </div>
          <div className="flex-1 w-full flex flex-col gap-2.5">
            <button type="button" onClick={() => fileRef.current?.click()} className={btnGhost}>
              <Upload className="w-4 h-4" /> Choisir une photo
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])} />
            <input className={field} value={draft.cover.startsWith('data:') ? '' : draft.cover}
              onChange={(e) => set('cover', e.target.value)}
              placeholder="… ou coller une adresse d’image (https://…)" />
            {draft.cover.startsWith('data:') && (
              <p className="font-body text-[11px] text-[#084274]/60">Photo importée depuis votre appareil.</p>
            )}
            {uploadError && <p className="font-body text-[11px] text-[#d95f43]">{uploadError}</p>}
          </div>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="a-exc">Résumé (une ou deux phrases)</label>
        <textarea id="a-exc" className={field} rows={2} value={draft.excerpt} required
          onChange={(e) => set('excerpt', e.target.value)} placeholder="Ce qui donne envie de lire la suite." />
      </div>

      <div>
        <label className={label} htmlFor="a-body">Texte de l’article</label>
        <textarea id="a-body" className={`${field} font-body leading-relaxed`} rows={10} value={draft.body} required
          onChange={(e) => set('body', e.target.value)}
          placeholder="Écrivez librement. Laissez une ligne vide entre deux paragraphes." />
      </div>

      <div className="flex flex-wrap gap-3 pt-1">
        <button type="submit" className={btnPrimary}><Check className="w-4 h-4" /> Enregistrer</button>
        <button type="button" onClick={onCancel} className={btnGhost}>Annuler</button>
      </div>
    </motion.form>
  );
};

/* ------------------------------ onglet Actualités ------------------------------ */

const NewsTab: React.FC = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [editing, setEditing] = useState<NewsPost | null>(null);
  const [pending, setPending] = useState(0);
  const [notice, setNotice] = useState('');
  const importRef = useRef<HTMLInputElement>(null);

  const refresh = () => { setPosts(getPosts()); setPending(getPendingCount()); };
  useEffect(refresh, []);

  const handleSave = (p: NewsPost) => {
    const ok = savePost(p);
    setNotice(ok ? 'Article enregistré.' : 'Stockage plein : utilisez une image plus légère ou une adresse d’image.');
    setEditing(null);
    refresh();
  };

  const handleDelete = (p: NewsPost) => {
    if (!confirm(`Supprimer « ${p.title} » ?`)) return;
    deletePost(p.id);
    setNotice('Article supprimé.');
    refresh();
  };

  const handleImport = async (f?: File) => {
    if (!f) return;
    const ok = await importPosts(f);
    setNotice(ok ? 'Articles importés.' : 'Fichier invalide.');
    refresh();
  };

  if (editing) return <PostEditor post={editing} onSave={handleSave} onCancel={() => setEditing(null)} />;

  return (
    <div className="flex flex-col gap-6">
      {/* Barre d'actions */}
      <div className="flex flex-wrap items-center gap-3">
        <button onClick={() => setEditing(emptyPost())} className={btnPrimary}>
          <Plus className="w-4 h-4" /> Nouvel article
        </button>
        <button onClick={exportPosts} className={btnGhost}>
          <Download className="w-4 h-4" /> Exporter (publier)
        </button>
        <button onClick={() => importRef.current?.click()} className={btnGhost}>
          <Upload className="w-4 h-4" /> Importer
        </button>
        <input ref={importRef} type="file" accept="application/json" className="hidden"
          onChange={(e) => handleImport(e.target.files?.[0])} />
        {pending > 0 && (
          <button onClick={() => { if (confirm('Annuler toutes les modifications non publiées ?')) { resetLocalChanges(); refresh(); } }}
            className={`${btn} bg-[#d95f43]/12 text-[#084274] hover:bg-[#d95f43]/20`}>
            <RefreshCw className="w-4 h-4" /> Annuler les brouillons
          </button>
        )}
      </div>

      {notice && (
        <p className="font-body text-sm text-[#084274] bg-[#38926c]/12 border border-[#38926c]/25 px-4 py-2.5 rounded-lg">{notice}</p>
      )}

      {pending > 0 && (
        <div className="flex items-start gap-3 bg-[#e3a044]/12 border border-[#e3a044]/30 px-4 py-3 rounded-lg">
          <AlertCircle className="w-4.5 h-4.5 text-[#084274] shrink-0 mt-0.5" />
          <p className="font-body text-[13px] text-[#084274] leading-relaxed">
            <strong>{pending} modification{pending > 1 ? 's' : ''} en brouillon.</strong> Elles ne sont visibles que sur cet appareil.
            Pour les publier pour tout le monde : <em>Exporter</em>, puis remplacez le fichier <code className="bg-[#084274]/10 px-1 rounded">src/data/news.json</code> et reconstruisez le site.
          </p>
        </div>
      )}

      {/* Liste des articles */}
      <div className="flex flex-col gap-3">
        {posts.map((p) => (
          <div key={p.id} className="flex items-center gap-4 bg-white border border-[#084274]/12 rounded-xl p-3 sm:p-4">
            <div className="w-20 h-16 sm:w-24 sm:h-18 rounded-lg overflow-hidden bg-[#084274]/8 shrink-0">
              {p.cover && <img src={p.cover} alt="" className="w-full h-full object-cover" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-body text-[10px] font-bold text-[#e3a044]">{p.category}</span>
                {p.featured && <Star className="w-3 h-3 text-[#e3a044]" fill="currentColor" />}
              </div>
              <h4 className="font-heading text-base text-[#084274] truncate">{p.title}</h4>
              <p className="font-body text-[11px] text-[#084274]/55">{formatDate(p.date)}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => setEditing(p)} aria-label="Modifier"
                className="w-9 h-9 rounded-full bg-[#084274]/8 text-[#084274] flex items-center justify-center cursor-pointer hover:bg-[#084274]/15">
                <Pencil className="w-4 h-4" />
              </button>
              <button onClick={() => handleDelete(p)} aria-label="Supprimer"
                className="w-9 h-9 rounded-full bg-[#d95f43]/12 text-[#d95f43] flex items-center justify-center cursor-pointer hover:bg-[#d95f43]/25">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <p className="font-body text-sm text-[#084274]/60 text-center py-10">
            Aucun article pour l’instant. Créez le premier !
          </p>
        )}
      </div>
    </div>
  );
};

/* ------------------------------- onglet Demandes ------------------------------- */

const InboxTab: React.FC = () => {
  const [local, setLocal] = useState<Submission[]>([]);
  const [remote, setRemote] = useState<Submission[]>([]);
  const [filter, setFilter] = useState<'all' | 'contact' | 'pre-inscription'>('all');
  const [cfg, setCfg] = useState(getNetlifyConfig());
  const [showCfg, setShowCfg] = useState(false);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const refresh = () => setLocal(getSubmissions());
  useEffect(refresh, []);

  const sync = async () => {
    setLoading(true);
    setStatus('');
    const res = await fetchNetlifySubmissions();
    setLoading(false);
    if (res.ok === true) {
      setRemote(res.list);
      setStatus(`${res.list.length} demande(s) récupérée(s) depuis Netlify.`);
    } else {
      setStatus(res.error);
    }
  };

  useEffect(() => { if (cfg.token && cfg.siteId) sync(); /* eslint-disable-next-line */ }, []);

  const all = useMemo(() => {
    const seen = new Set(remote.map((r) => r.id));
    return [...remote, ...local.filter((l) => !seen.has(l.id))]
      .filter((s) => filter === 'all' || s.kind === filter)
      .sort((a, b) => (a.receivedAt < b.receivedAt ? 1 : -1));
  }, [local, remote, filter]);

  return (
    <div className="flex flex-col gap-6">
      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        {(['all', 'pre-inscription', 'contact'] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`${btn} ${filter === f ? 'bg-[#084274] text-[#feeddb]' : 'bg-[#084274]/8 text-[#084274] hover:bg-[#084274]/15'}`}>
            {f === 'all' ? 'Tout' : f === 'contact' ? 'Messages' : 'Pré-inscriptions'}
          </button>
        ))}
        <div className="flex-1" />
        <button onClick={sync} disabled={loading} className={btnGhost}>
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Synchroniser
        </button>
        <button onClick={() => exportSubmissionsCsv(all)} className={btnGhost}>
          <Download className="w-4 h-4" /> Export Excel
        </button>
        <button onClick={() => setShowCfg(!showCfg)} className={btnGhost}>
          <Link2 className="w-4 h-4" /> Connexion
        </button>
      </div>

      {status && <p className="font-body text-sm text-[#084274] bg-[#084274]/8 px-4 py-2.5 rounded-lg">{status}</p>}

      {/* Configuration Netlify */}
      <AnimatePresence>
        {showCfg && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden">
            <div className="bg-white border border-[#084274]/12 rounded-2xl p-6 flex flex-col gap-4">
              <div>
                <h4 className="font-heading text-lg text-[#084274] mb-1">Voir les demandes de tous les appareils</h4>
                <p className="font-body text-[13px] text-[#084274]/70 leading-relaxed">
                  Sans connexion, cet écran affiche les demandes envoyées depuis ce navigateur.
                  Pour tout voir, collez un jeton Netlify (<em>User settings → Applications → Personal access tokens</em>)
                  et l’identifiant du site (<em>Site settings → General → Site ID</em>). Ces informations restent sur cet appareil.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={label}>Jeton d’accès Netlify</label>
                  <input className={field} type="password" value={cfg.token}
                    onChange={(e) => setCfg({ ...cfg, token: e.target.value })} placeholder="nfp_…" />
                </div>
                <div>
                  <label className={label}>Identifiant du site</label>
                  <input className={field} value={cfg.siteId}
                    onChange={(e) => setCfg({ ...cfg, siteId: e.target.value })} placeholder="ex : 1a2b3c4d-…" />
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => { saveNetlifyConfig(cfg.token, cfg.siteId); sync(); }} className={btnPrimary}>
                  <Check className="w-4 h-4" /> Connecter
                </button>
                <button onClick={() => { clearNetlifyConfig(); setCfg({ token: '', siteId: '' }); setRemote([]); }} className={btnGhost}>
                  Déconnecter
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Liste des demandes */}
      <div className="flex flex-col gap-3">
        {all.map((s) => {
          const isInscription = s.kind === 'pre-inscription';
          const name = s.data.parent || s.data.nom || 'Sans nom';
          return (
            <motion.div key={s.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              className={`bg-white border rounded-xl p-5 ${s.read ? 'border-[#084274]/10 opacity-75' : 'border-[#084274]/20'}`}>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`font-body text-[10px] font-bold px-2.5 py-1 rounded-full ${isInscription ? 'bg-[#38926c]/15 text-[#1f8a63]' : 'bg-[#5b8fd9]/15 text-[#3f78c4]'}`}>
                  {isInscription ? 'Pré-inscription' : 'Message'}
                </span>
                <span className="font-heading text-lg text-[#084274]">{name}</span>
                <span className="font-body text-[11px] text-[#084274]/50">
                  {new Date(s.receivedAt).toLocaleString('fr-FR')}
                </span>
                {s.remote && <span className="font-body text-[10px] text-[#084274]/40">Netlify</span>}
                <div className="flex-1" />
                {!s.read && !s.remote && (
                  <button onClick={() => { markRead(s.id); refresh(); }} className="font-body text-xs text-[#084274]/60 hover:text-[#084274] cursor-pointer">
                    Marquer comme lu
                  </button>
                )}
                <button onClick={() => { deleteSubmission(s.id); refresh(); }} aria-label="Supprimer"
                  className="w-8 h-8 rounded-full bg-[#d95f43]/10 text-[#d95f43] flex items-center justify-center cursor-pointer hover:bg-[#d95f43]/22">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3">
                {s.data.telephone && (
                  <a href={`tel:${s.data.telephone}`} className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#084274] hover:text-[#e3a044]">
                    <Phone className="w-3.5 h-3.5 text-[#e3a044]" /> {s.data.telephone}
                  </a>
                )}
                {s.data.email && (
                  <a href={`mailto:${s.data.email}`} className="inline-flex items-center gap-2 font-body text-sm text-[#084274] hover:text-[#e3a044]">
                    <Mail className="w-3.5 h-3.5 text-[#e3a044]" /> {s.data.email}
                  </a>
                )}
                {s.data.enfant && (
                  <span className="font-body text-sm text-[#084274]/80">Enfant : <strong>{s.data.enfant}</strong>
                    {s.data['annee-naissance'] ? ` (${s.data['annee-naissance']})` : ''}</span>
                )}
                {s.data.niveau && <span className="font-body text-sm text-[#084274]/80">Niveau : <strong>{s.data.niveau}</strong></span>}
              </div>

              {s.data.message && (
                <p className="font-body text-sm text-[#084274]/75 leading-relaxed bg-[#084274]/5 p-3 rounded-lg whitespace-pre-line">
                  {s.data.message}
                </p>
              )}
            </motion.div>
          );
        })}

        {all.length === 0 && (
          <div className="text-center py-12">
            <Inbox className="w-9 h-9 text-[#084274]/25 mx-auto mb-3" />
            <p className="font-body text-sm text-[#084274]/60">
              Aucune demande pour l’instant. Elles apparaîtront ici dès qu’un parent remplit un formulaire.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

/* --------------------------------- page admin --------------------------------- */

export const AdminPage: React.FC = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('marronniers:admin') === '1');
  const [tab, setTab] = useState<'news' | 'inbox'>('news');

  if (!authed) return <LoginGate onOk={() => setAuthed(true)} />;

  return (
    <div className="bg-[#feeddb] min-h-screen py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl text-[#084274]">Administration</h1>
            <p className="font-body text-sm text-[#084274]/60">Les Marronniers El Jadida</p>
          </div>
          <button onClick={() => { sessionStorage.removeItem('marronniers:admin'); setAuthed(false); }} className={btnGhost}>
            <LogOut className="w-4 h-4" /> Quitter
          </button>
        </header>

        <div className="flex gap-2 mb-8 bg-[#084274]/8 p-1.5 rounded-full w-fit">
          {([['news', 'Actualités', Newspaper], ['inbox', 'Demandes', Inbox]] as const).map(([id, lbl, Icon]) => (
            <button key={id} onClick={() => setTab(id)}
              className={`${btn} ${tab === id ? 'bg-[#084274] text-[#feeddb]' : 'text-[#084274] hover:bg-[#084274]/10'}`}>
              <Icon className="w-4 h-4" /> {lbl}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
            {tab === 'news' ? <NewsTab /> : <InboxTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
