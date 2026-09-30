/**
 * Les Marronniers — Espace administration (design propre).
 * Actualités · Pré-inscriptions · Messages · Réglages. Données : newsStore / submissionsStore.
 */
import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Newspaper, UserPlus, Mail, Settings, LogOut, Plus, Pencil, Trash2, Download, Upload, Search, Phone, MessageCircle, ExternalLink, RotateCcw, Star, RefreshCw, X } from 'lucide-react';
import { ADMIN_PASSWORD } from '../data/adminConfig';
import { getPosts, savePost, deletePost, emptyPost, exportPosts, importPosts, getPendingCount, resetLocalChanges, fileToResizedDataUrl, formatDate, slugify, NewsPost } from '../lib/newsStore';
import { getSubmissions, deleteSubmission, exportSubmissionsCsv, updateSubmission, getNetlifyConfig, saveNetlifyConfig, clearNetlifyConfig, fetchNetlifySubmissions, Submission, SubmissionStatus } from '../lib/submissionsStore';
import { LeafIcon } from '../components/world/Nature';

type Tab = 'bord' | 'actus' | 'inscriptions' | 'messages' | 'reglages';
const SESSION = 'marronniers:admin';
const STATUSES: SubmissionStatus[] = ['nouvelle', 'en cours', 'traitée', 'archivée'];
const TONE: Record<SubmissionStatus, string> = { nouvelle: '#E3A044', 'en cours': '#0086D9', traitée: '#00A06B', archivée: '#94A3B8' };
const field = 'w-full bg-white border border-[#0B3A5E]/15 px-4 h-11 text-[15px] text-[#0B3A5E] focus:outline-none focus:border-[#0086D9]';
const pick = (d: Record<string, string>, keys: string[]) => { const k = Object.keys(d).find((x) => keys.some((y) => x.toLowerCase().includes(y))); return k ? d[k] : ''; };
const who = (s: Submission) => pick(s.data, ['parent', 'nom', 'name']) || 'Sans nom';
const tel = (s: Submission) => pick(s.data, ['tel', 'phone', 'portable']);
const mail = (s: Submission) => pick(s.data, ['mail']);
const when = (iso: string) => new Date(iso).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

const Btn: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { tone?: 'blue' | 'ghost' | 'danger' }> = ({ tone = 'blue', className = '', ...p }) => (
  <button {...p} className={`inline-flex items-center gap-2 h-10 px-4 text-[14px] transition-colors disabled:opacity-50 ${tone === 'blue' ? 'bg-[#0086D9] text-white hover:bg-[#006cb3]' : tone === 'danger' ? 'bg-[#FDECEA] text-[#B42318] hover:bg-[#FAD7D2]' : 'bg-white text-[#0B3A5E] ring-1 ring-[#0B3A5E]/15 hover:ring-[#0B3A5E]/35'} ${className}`} />
);

/* ------------------------------ Connexion ------------------------------ */
const Login: React.FC<{ onOk: () => void }> = ({ onOk }) => {
  const [pw, setPw] = useState(''); const [err, setErr] = useState(false);
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#fff7ef]">
      <div className="hidden lg:flex flex-col justify-between p-14 bg-[#0B3A5E] text-white relative overflow-hidden">
        <p className="font-heading text-3xl leading-none">LES<br /><span className="text-2xl">Marronniers</span></p>
        <div><p className="font-heading text-[3.4rem] leading-[1]">L’école, <span className="italic text-[#FFC800]">côté coulisses.</span></p><p className="mt-5 text-white/70 max-w-[40ch]">Publiez les actualités, suivez les pré-inscriptions et répondez aux familles, au même endroit.</p></div>
        <LeafIcon size={260} color="#ffffff" className="absolute -right-16 -bottom-16 opacity-[0.06]" />
      </div>
      <form className="flex items-center justify-center p-6" onSubmit={(e) => { e.preventDefault(); if (pw === ADMIN_PASSWORD) { sessionStorage.setItem(SESSION, '1'); onOk(); } else setErr(true); }}>
        <div className="w-full max-w-[380px]">
          <LeafIcon size={40} />
          <h1 className="mt-6 text-[2.4rem] leading-none text-[#0B3A5E]">Administration</h1>
          <p className="mt-3 text-[#0B3A5E]/70">Les Marronniers El Jadida</p>
          <label className="block mt-10 text-[14px] text-[#0B3A5E]">Mot de passe<input type="password" autoFocus className={`${field} mt-2`} value={pw} onChange={(e) => { setPw(e.target.value); setErr(false); }} /></label>
          {err && <p className="mt-3 text-[14px] text-[#B42318]">Mot de passe incorrect.</p>}
          <Btn type="submit" className="mt-6 w-full justify-center h-12">Entrer</Btn>
          <a href="#" className="block mt-6 text-center text-[14px] text-[#0086D9]">← Retour au site</a>
        </div>
      </form>
    </div>
  );
};

/* ------------------------------ Actualités ------------------------------ */
const NewsTab: React.FC<{ refresh: () => void }> = ({ refresh }) => {
  const [posts, setPosts] = useState(getPosts()); const [q, setQ] = useState(''); const [edit, setEdit] = useState<NewsPost | null>(null);
  const reload = () => { setPosts(getPosts()); refresh(); };
  const list = posts.filter((p) => `${p.title} ${p.category}`.toLowerCase().includes(q.toLowerCase()));
  const pending = getPendingCount();
  return (
    <div>
      <Head title="Actualités" desc="Les articles publiés apparaissent sur la page Actualités et sur l’accueil." actions={<><Btn tone="ghost" onClick={exportPosts}><Download size={15} />Exporter news.json</Btn><label className="inline-flex items-center gap-2 h-10 px-4 text-[14px] bg-white text-[#0B3A5E] ring-1 ring-[#0B3A5E]/15 cursor-pointer"><Upload size={15} />Importer<input type="file" accept="application/json" hidden onChange={async (e) => { const f = e.target.files?.[0]; if (f && (await importPosts(f))) reload(); }} /></label><Btn onClick={() => setEdit(emptyPost())}><Plus size={15} />Nouvel article</Btn></>} />
      {pending > 0 && <div className="mb-6 p-5 bg-[#FFF4DC] text-[#0B3A5E] flex flex-wrap items-center justify-between gap-3"><p className="text-[15px]"><span className="text-[#B7791F]">{pending} modification(s) locale(s).</span> Pour les rendre visibles par tous : « Exporter news.json », remplacez <code>src/data/news.json</code>, puis republiez le site.</p><Btn tone="ghost" onClick={() => { if (confirm('Annuler toutes les modifications locales ?')) { resetLocalChanges(); reload(); } }}><RotateCcw size={15} />Annuler</Btn></div>}
      <div className="relative max-w-sm mb-6"><Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0B3A5E]/40" /><input className={`${field} pl-10`} placeholder="Rechercher un article" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {list.map((p) => (
          <li key={p.id} className="bg-white shadow-[0_20px_40px_-30px_rgba(11,58,94,0.4)] flex flex-col">
            <div className="aspect-[16/9] bg-[#EAF6FD] relative">{p.cover && <img src={p.cover} alt="" className="w-full h-full object-cover" />}{p.featured && <span className="absolute left-3 top-3 inline-flex items-center gap-1 bg-[#FFC800] text-[#0B3A5E] px-2.5 py-1 text-[12px]"><Star size={12} />À la une</span>}</div>
            <div className="p-5 flex-1 flex flex-col"><p className="text-[12px] uppercase tracking-[0.14em] text-[#0086D9]">{p.category} · {formatDate(p.date)}</p><p className="font-heading text-[1.35rem] leading-snug mt-2 text-[#0B3A5E]">{p.title}</p><p className="text-[14px] text-[#0B3A5E]/65 mt-2 line-clamp-2">{p.excerpt}</p>
              <div className="mt-auto pt-5 flex gap-2"><Btn tone="ghost" onClick={() => setEdit({ ...p })}><Pencil size={14} />Modifier</Btn><Btn tone="danger" onClick={() => { if (confirm('Supprimer cet article ?')) { deletePost(p.id); reload(); } }}><Trash2 size={14} /></Btn></div></div>
          </li>
        ))}
      </ul>
      <Drawer open={!!edit} onClose={() => setEdit(null)} title={edit && posts.some((x) => x.id === edit.id) ? 'Modifier l’article' : 'Nouvel article'}>
        {edit && (
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); savePost({ ...edit, slug: edit.slug || slugify(edit.title) }); setEdit(null); reload(); }}>
            <L t="Titre"><input required className={field} value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} /></L>
            <div className="grid grid-cols-2 gap-4"><L t="Catégorie"><input className={field} value={edit.category} onChange={(e) => setEdit({ ...edit, category: e.target.value })} /></L><L t="Date"><input type="date" className={field} value={edit.date} onChange={(e) => setEdit({ ...edit, date: e.target.value })} /></L></div>
            <L t="Photo"><div className="flex items-center gap-4">{edit.cover && <img src={edit.cover} alt="" className="w-24 h-16 object-cover" />}<label className="inline-flex items-center gap-2 h-10 px-4 text-[14px] bg-white ring-1 ring-[#0B3A5E]/15 cursor-pointer"><Upload size={15} />Choisir une photo<input type="file" accept="image/*" hidden onChange={async (e) => { const f = e.target.files?.[0]; if (f) setEdit({ ...edit, cover: await fileToResizedDataUrl(f) }); }} /></label></div><input className={`${field} mt-3`} placeholder="…ou adresse d’une image" value={edit.cover.startsWith('data:') ? '' : edit.cover} onChange={(e) => setEdit({ ...edit, cover: e.target.value })} /></L>
            <L t="Résumé"><textarea required rows={2} className={`${field} h-auto py-3`} value={edit.excerpt} onChange={(e) => setEdit({ ...edit, excerpt: e.target.value })} /></L>
            <L t="Texte (une ligne vide entre deux paragraphes)"><textarea required rows={9} className={`${field} h-auto py-3`} value={edit.body} onChange={(e) => setEdit({ ...edit, body: e.target.value })} /></L>
            <label className="flex items-center gap-2 text-[15px] text-[#0B3A5E]"><input type="checkbox" checked={!!edit.featured} onChange={(e) => setEdit({ ...edit, featured: e.target.checked })} />Mettre à la une</label>
            <div className="flex justify-end gap-2 pt-2"><Btn tone="ghost" type="button" onClick={() => setEdit(null)}>Annuler</Btn><Btn type="submit">Enregistrer</Btn></div>
          </form>
        )}
      </Drawer>
    </div>
  );
};

/* -------------------- Pré-inscriptions & messages -------------------- */
const Inbox: React.FC<{ kind: Submission['kind']; subs: Submission[]; reload: () => void }> = ({ kind, subs, reload }) => {
  const [status, setStatus] = useState<'toutes' | SubmissionStatus>('toutes'); const [q, setQ] = useState(''); const [open, setOpen] = useState<string | null>(null);
  const mine = subs.filter((s) => s.kind === kind);
  const list = mine.filter((s) => (status === 'toutes' || (s.status || 'nouvelle') === status) && JSON.stringify(s.data).toLowerCase().includes(q.toLowerCase()));
  const cur = mine.find((s) => s.id === open);
  const isIns = kind === 'pre-inscription';
  return (
    <div>
      <Head title={isIns ? 'Pré-inscriptions' : 'Messages'} desc={isIns ? 'Les demandes envoyées depuis la page Inscription. Suivez chaque famille jusqu’à la rentrée.' : 'Les messages envoyés depuis la page Contact.'} actions={<Btn tone="ghost" onClick={() => exportSubmissionsCsv(mine)}><Download size={15} />Exporter CSV</Btn>} />
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {(['toutes', ...STATUSES] as const).map((s) => <button key={s} onClick={() => setStatus(s)} className={`h-9 px-4 text-[14px] capitalize ${status === s ? 'bg-[#0B3A5E] text-white' : 'bg-white text-[#0B3A5E] ring-1 ring-[#0B3A5E]/10'}`}>{s}{s !== 'toutes' && ` · ${mine.filter((x) => (x.status || 'nouvelle') === s).length}`}</button>)}
        <div className="relative ml-auto w-full sm:w-72"><Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0B3A5E]/40" /><input className={`${field} pl-10`} placeholder="Rechercher" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      </div>
      {list.length === 0 ? <Empty>{mine.length ? 'Aucune demande avec ce filtre.' : 'Aucune demande reçue pour l’instant.'}</Empty> : (
        <div className="grid lg:grid-cols-[400px_1fr] gap-5 items-start">
          <ul className="space-y-2">
            {list.map((s) => { const st = s.status || 'nouvelle'; return (
              <li key={s.id}><button onClick={() => { setOpen(s.id); if (!s.read) { updateSubmission(s.id, { read: true }); reload(); } }} className={`w-full text-left p-4 bg-white transition-shadow ${open === s.id ? 'ring-2 ring-[#0086D9]' : 'hover:shadow-[0_14px_30px_-22px_rgba(11,58,94,0.5)]'}`}>
                <span className="flex items-center justify-between gap-3"><span className={`text-[15px] text-[#0B3A5E] ${s.read ? '' : 'font-medium'}`}>{who(s)}</span><span className="text-[12px] px-2 py-0.5 text-white capitalize" style={{ background: TONE[st] }}>{st}</span></span>
                <span className="block text-[13px] text-[#0B3A5E]/55 mt-1">{when(s.receivedAt)}{isIns && pick(s.data, ['niveau', 'classe']) ? ` · ${pick(s.data, ['niveau', 'classe'])}` : ''}{!s.read && ' · non lu'}</span>
              </button></li>
            ); })}
          </ul>
          <AnimatePresence mode="wait">
            {cur ? (
              <motion.article key={cur.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-white p-6 md:p-8 shadow-[0_20px_40px_-30px_rgba(11,58,94,0.4)]">
                <p className="text-[12px] uppercase tracking-[0.14em] text-[#0086D9]">{isIns ? 'Pré-inscription' : 'Message'} · {when(cur.receivedAt)}{cur.remote && ' · Netlify'}</p>
                <h2 className="text-[2rem] leading-tight mt-2 text-[#0B3A5E]">{who(cur)}</h2>
                <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4">{Object.entries(cur.data).map(([k, v]) => <div key={k} className={String(v).length > 60 ? 'sm:col-span-2' : ''}><dt className="text-[12px] uppercase tracking-[0.12em] text-[#0B3A5E]/50">{k.replace(/[-_]/g, ' ')}</dt><dd className="mt-1 text-[15px] text-[#0B3A5E] whitespace-pre-wrap">{v || '—'}</dd></div>)}</dl>
                <div className="mt-8 flex flex-wrap gap-2">
                  {tel(cur) && <a href={`tel:${tel(cur).replace(/\s/g, '')}`} className="inline-flex items-center gap-2 h-10 px-4 text-[14px] bg-[#0086D9] text-white"><Phone size={15} />Appeler</a>}
                  {tel(cur) && <a href={`https://wa.me/${tel(cur).replace(/\D/g, '').replace(/^0/, '212')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-10 px-4 text-[14px] bg-[#00A06B] text-white"><MessageCircle size={15} />WhatsApp</a>}
                  {mail(cur) && <a href={`mailto:${mail(cur)}`} className="inline-flex items-center gap-2 h-10 px-4 text-[14px] bg-white ring-1 ring-[#0B3A5E]/15 text-[#0B3A5E]"><Mail size={15} />E-mail</a>}
                </div>
                <div className="mt-8 pt-6 border-t border-[#0B3A5E]/10 grid sm:grid-cols-[200px_1fr] gap-4">
                  <L t="Statut"><select className={field} value={cur.status || 'nouvelle'} onChange={(e) => { updateSubmission(cur.id, { status: e.target.value as SubmissionStatus }); reload(); }}>{STATUSES.map((s) => <option key={s}>{s}</option>)}</select></L>
                  <L t="Note interne"><input className={field} defaultValue={cur.note || ''} placeholder="Ex. : visite fixée jeudi 10h" onBlur={(e) => { updateSubmission(cur.id, { note: e.target.value }); reload(); }} /></L>
                </div>
                <Btn tone="danger" className="mt-6" onClick={() => { if (confirm('Supprimer cette demande ?')) { deleteSubmission(cur.id); setOpen(null); reload(); } }}><Trash2 size={14} />Supprimer</Btn>
              </motion.article>
            ) : <Empty>Choisissez une demande pour l’ouvrir.</Empty>}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

/* ------------------------------ Réglages ------------------------------ */
const SettingsTab: React.FC<{ onSync: () => void; syncMsg: string }> = ({ onSync, syncMsg }) => {
  const cfg = getNetlifyConfig(); const [token, setToken] = useState(cfg.token || ''); const [site, setSite] = useState(cfg.siteId || '');
  return (
    <div className="max-w-[720px]">
      <Head title="Réglages" desc="Recevez ici les formulaires envoyés depuis n’importe quel appareil (Netlify Forms)." />
      <div className="bg-white p-6 md:p-8 space-y-5">
        <L t="Jeton d’accès Netlify"><input className={field} value={token} onChange={(e) => setToken(e.target.value)} placeholder="nfp_…" /></L>
        <L t="Identifiant du site Netlify"><input className={field} value={site} onChange={(e) => setSite(e.target.value)} /></L>
        <div className="flex flex-wrap gap-2"><Btn onClick={() => { saveNetlifyConfig(token, site); onSync(); }}><RefreshCw size={15} />Enregistrer et synchroniser</Btn><Btn tone="ghost" onClick={() => { clearNetlifyConfig(); setToken(''); setSite(''); }}>Déconnecter</Btn></div>
        {syncMsg && <p className="text-[14px] text-[#0B3A5E]/75">{syncMsg}</p>}
      </div>
      <div className="mt-6 bg-[#FFF4DC] p-6 text-[15px] text-[#0B3A5E]">Mot de passe : modifiez-le dans <code>src/data/adminConfig.ts</code> avant la mise en ligne, et activez la protection par mot de passe de l’hébergeur.</div>
    </div>
  );
};

/* ------------------------------ Éléments ------------------------------ */
const Head: React.FC<{ title: string; desc?: string; actions?: React.ReactNode }> = ({ title, desc, actions }) => (
  <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5 mb-8"><div><h1 className="text-[clamp(2.2rem,3.4vw,3.2rem)] leading-none text-[#0B3A5E]">{title}</h1>{desc && <p className="mt-3 text-[#0B3A5E]/65 max-w-[60ch]">{desc}</p>}</div>{actions && <div className="flex flex-wrap gap-2">{actions}</div>}</div>
);
const L: React.FC<{ t: string; children: React.ReactNode }> = ({ t, children }) => <label className="block text-[13px] uppercase tracking-[0.1em] text-[#0B3A5E]/60"><span className="block mb-2">{t}</span>{children}</label>;
const Empty: React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="bg-white p-10 text-center text-[#0B3A5E]/55"><LeafIcon size={34} className="mx-auto mb-3 opacity-60" />{children}</div>;
const Drawer: React.FC<{ open: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ open, onClose, title, children }) => (
  <AnimatePresence>{open && (
    <motion.div className="fixed inset-0 z-[90] bg-[#0B3A5E]/35 backdrop-blur-sm flex justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.aside className="w-full max-w-[640px] h-full overflow-y-auto bg-[#fff7ef] p-6 md:p-10" initial={{ x: 60 }} animate={{ x: 0 }} exit={{ x: 60 }} transition={{ type: 'spring', stiffness: 260, damping: 30 }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-8"><h2 className="text-[2rem] leading-none text-[#0B3A5E]">{title}</h2><button onClick={onClose} className="w-10 h-10 bg-white flex items-center justify-center" aria-label="Fermer"><X size={18} /></button></div>
        {children}
      </motion.aside>
    </motion.div>
  )}</AnimatePresence>
);

/* ------------------------------ Coquille ------------------------------ */
export const AdminPage: React.FC = () => {
  const [ok, setOk] = useState(() => sessionStorage.getItem(SESSION) === '1');
  const [tab, setTab] = useState<Tab>('bord');
  const [subs, setSubs] = useState<Submission[]>(getSubmissions());
  const [remote, setRemote] = useState<Submission[]>([]);
  const [tick, setTick] = useState(0);
  const [syncMsg, setSyncMsg] = useState('');
  const reload = () => { setSubs(getSubmissions()); setTick((t) => t + 1); };
  const sync = async () => { setSyncMsg('Synchronisation…'); const r = await fetchNetlifySubmissions(); if (r.ok) { setRemote(r.list); setSyncMsg(`${r.list.length} demande(s) récupérée(s) depuis Netlify.`); } else setSyncMsg((r as { error: string }).error); };
  useEffect(() => { if (ok && getNetlifyConfig().token) sync(); }, [ok]);
  const all = useMemo(() => { const ids = new Set(subs.map((s) => s.id)); return [...subs, ...remote.filter((r) => !ids.has(r.id))].sort((a, b) => (a.receivedAt < b.receivedAt ? 1 : -1)); }, [subs, remote, tick]);
  if (!ok) return <Login onOk={() => setOk(true)} />;
  const posts = getPosts();
  const count = (k: Submission['kind'], s?: SubmissionStatus) => all.filter((x) => x.kind === k && (!s || (x.status || 'nouvelle') === s)).length;
  const NAV: { id: Tab; label: string; Icon: any; badge?: number }[] = [
    { id: 'bord', label: 'Tableau de bord', Icon: LayoutGrid },
    { id: 'actus', label: 'Actualités', Icon: Newspaper },
    { id: 'inscriptions', label: 'Pré-inscriptions', Icon: UserPlus, badge: count('pre-inscription', 'nouvelle') },
    { id: 'messages', label: 'Messages', Icon: Mail, badge: all.filter((x) => x.kind === 'contact' && !x.read).length },
    { id: 'reglages', label: 'Réglages', Icon: Settings },
  ];
  return (
    <div className="min-h-screen bg-[#fff7ef] lg:grid lg:grid-cols-[272px_1fr] text-[#0B3A5E]">
      <aside className="bg-white lg:h-screen lg:sticky lg:top-0 p-5 lg:p-7 flex lg:flex-col gap-6 border-b lg:border-b-0 lg:border-r border-[#0B3A5E]/10 overflow-x-auto">
        <div className="shrink-0"><p className="font-heading text-[1.6rem] leading-[0.9] text-[#0086D9]">LES<br /><span className="text-[1.2rem]">Marronniers</span></p><p className="hidden lg:block mt-2 text-[12px] uppercase tracking-[0.16em] text-[#0B3A5E]/45">Administration</p></div>
        <nav className="flex lg:flex-col gap-1">
          {NAV.map((n) => <button key={n.id} onClick={() => setTab(n.id)} className={`flex items-center gap-3 px-3.5 h-11 text-[15px] whitespace-nowrap transition-colors ${tab === n.id ? 'bg-[#0B3A5E] text-white' : 'hover:bg-[#fff7ef]'}`}><n.Icon size={17} />{n.label}{!!n.badge && <span className="ml-auto bg-[#FFC800] text-[#0B3A5E] text-[12px] px-2">{n.badge}</span>}</button>)}
        </nav>
        <div className="hidden lg:block mt-auto space-y-3 text-[14px]"><a href="#" className="flex items-center gap-2 text-[#0B3A5E]/65 hover:text-[#0B3A5E]"><ExternalLink size={15} />Voir le site</a><button onClick={() => { sessionStorage.removeItem(SESSION); setOk(false); }} className="flex items-center gap-2 text-[#B42318]"><LogOut size={15} />Se déconnecter</button></div>
      </aside>
      <main className="p-5 md:p-10 lg:p-14 min-w-0" key={tab}>
        {tab === 'bord' && (
          <div>
            <Head title="Bonjour." desc="L’essentiel de la semaine : nouvelles familles, messages, publications." />
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {[['Nouvelles pré-inscriptions', count('pre-inscription', 'nouvelle'), '#E3A044', 'inscriptions'], ['Messages non lus', all.filter((x) => x.kind === 'contact' && !x.read).length, '#0086D9', 'messages'], ['Articles publiés', posts.length, '#00A06B', 'actus'], ['Familles suivies', count('pre-inscription', 'en cours'), '#E24C3D', 'inscriptions']].map(([l, n, c, t]) => (
                <button key={String(l)} onClick={() => setTab(t as Tab)} className="text-left bg-white p-6 hover:-translate-y-0.5 transition-transform shadow-[0_20px_40px_-32px_rgba(11,58,94,0.5)]"><span className="block w-8 h-1" style={{ background: String(c) }} /><span className="block font-heading text-[3.2rem] leading-none mt-5">{String(n)}</span><span className="block mt-2 text-[15px] text-[#0B3A5E]/70">{String(l)}</span></button>
              ))}
            </div>
            <div className="grid xl:grid-cols-2 gap-5 mt-8">
              {(['pre-inscription', 'contact'] as const).map((k) => (
                <div key={k} className="bg-white p-6"><div className="flex items-center justify-between mb-4"><h2 className="text-[1.6rem] leading-none">{k === 'contact' ? 'Derniers messages' : 'Dernières pré-inscriptions'}</h2><button onClick={() => setTab(k === 'contact' ? 'messages' : 'inscriptions')} className="text-[14px] text-[#0086D9]">Tout voir →</button></div>
                  <ul className="divide-y divide-[#0B3A5E]/8">{all.filter((x) => x.kind === k).slice(0, 5).map((s) => <li key={s.id} className="py-3 flex items-center justify-between gap-4 text-[15px]"><span>{who(s)}<span className="block text-[13px] text-[#0B3A5E]/50">{when(s.receivedAt)}</span></span><span className="text-[12px] px-2 py-0.5 text-white capitalize" style={{ background: TONE[s.status || 'nouvelle'] }}>{s.status || 'nouvelle'}</span></li>)}{!all.some((x) => x.kind === k) && <li className="py-3 text-[#0B3A5E]/50 text-[15px]">Rien pour l’instant.</li>}</ul>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === 'actus' && <NewsTab refresh={reload} />}
        {tab === 'inscriptions' && <Inbox kind="pre-inscription" subs={all} reload={reload} />}
        {tab === 'messages' && <Inbox kind="contact" subs={all} reload={reload} />}
        {tab === 'reglages' && <SettingsTab onSync={sync} syncMsg={syncMsg} />}
      </main>
    </div>
  );
};
