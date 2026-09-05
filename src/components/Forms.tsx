/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Formulaires (Contact + Pré-inscription).
 * Fonctionnent avec Netlify Forms (hébergement statique, réponses par email).
 * États animés : envoi → succès (carte qui se pose) / erreur → fallback WhatsApp.
 * Champs en bleu transparent, honeypot anti-spam, accessibles.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Send, PartyPopper, MessageCircle, Loader2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { DoodleStar } from '../design-system/giggle/Doodles';
import { logSubmission } from '../lib/submissionsStore';

/* ----------------------------- outils communs ----------------------------- */

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');

const fieldCls =
  'w-full bg-[#00558d]/6 border border-[#00558d]/15 px-4 py-3 font-body text-[15px] text-[#00558d] placeholder:text-[#00558d]/40 focus:outline-none focus:border-[#00558d]/40 focus:bg-[#00558d]/10 transition-colors';

const labelCls = 'block font-body text-xs font-bold text-[#00558d]/70 mb-1.5';

type Status = 'idle' | 'sending' | 'success' | 'error';

const SuccessCard: React.FC<{ message: string }> = ({ message }) => (
  <motion.div
    initial={{ opacity: 0, rotate: 4, y: 20 }}
    animate={{ opacity: 1, rotate: -1, y: 0 }}
    transition={{ type: 'spring', stiffness: 60, damping: 12 }}
    className="relative"
  >
    <span
      aria-hidden="true"
      className="absolute inset-0 bg-[#38926c]"
      style={{ transform: 'rotate(2deg) translate(10px, 10px)' }}
    />
    <div className="relative z-10 bg-[#00558d] p-8 text-center shadow-xl">
      <PartyPopper className="w-9 h-9 text-[#e3a044] mx-auto mb-3" />
      <p className="font-heading text-2xl text-[#fff7ef] mb-2">Message envoyé !</p>
      <p className="font-body text-sm text-[#fff7ef]/75">{message}</p>
      <DoodleStar className="absolute top-3 right-3 w-6 text-[#e3a044]/60" />
    </div>
  </motion.div>
);

const ErrorNote: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-[#d95f43]/10 border border-[#d95f43]/30 p-4 text-center"
  >
    <p className="font-body text-sm text-[#00558d] mb-3">
      L’envoi n’a pas fonctionné. Écrivez-nous directement :
    </p>
    <a
      href={SCHOOL_INFO.social.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-bold text-sm px-5 py-2.5"
    >
      <MessageCircle className="w-4 h-4" />
      WhatsApp
    </a>
  </motion.div>
);

const SubmitButton: React.FC<{ status: Status; label: string }> = ({ status, label }) => (
  <button
    type="submit"
    disabled={status === 'sending'}
    className="giggle-button-primary cursor-pointer w-full inline-flex items-center justify-center gap-3 disabled:opacity-70"
  >
    {status === 'sending' ? (
      <Loader2 className="w-4 h-4 animate-spin text-[#e3a044]" />
    ) : (
      <Send className="w-4 h-4 text-[#e3a044]" />
    )}
    <span>{status === 'sending' ? 'Envoi en cours…' : label}</span>
  </button>
);

/* ------------------------------ Formulaire Contact ------------------------------ */

export const ContactForm: React.FC = () => {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...data }),
      });
      logSubmission('contact', data);
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <SuccessCard key="ok" message="Nous vous répondrons très vite. Merci !" />
      ) : (
        <motion.form
          key="form"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          name="contact"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Ne pas remplir : <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="c-nom" className={labelCls}>Votre nom</label>
              <input id="c-nom" name="nom" type="text" required placeholder="Nom et prénom" className={fieldCls} />
            </div>
            <div>
              <label htmlFor="c-tel" className={labelCls}>Téléphone</label>
              <input id="c-tel" name="telephone" type="tel" required placeholder="06 00 00 00 00" className={fieldCls} />
            </div>
          </div>
          <div>
            <label htmlFor="c-email" className={labelCls}>Email (optionnel)</label>
            <input id="c-email" name="email" type="email" placeholder="vous@exemple.com" className={fieldCls} />
          </div>
          <div>
            <label htmlFor="c-msg" className={labelCls}>Votre message</label>
            <textarea id="c-msg" name="message" required rows={4} placeholder="Bonjour, je souhaite…" className={fieldCls} />
          </div>

          {status === 'error' && <ErrorNote />}
          <SubmitButton status={status} label="Envoyer le message" />
        </motion.form>
      )}
    </AnimatePresence>
  );
};

/* -------------------------- Formulaire Pré-inscription -------------------------- */

const NIVEAUX_OPTIONS = [
  'Crèche / TPS (2-3 ans)',
  'Petite Section (PS)',
  'Moyenne Section (MS)',
  'Grande Section (GS)',
  'CP',
  'CE1',
  'CE2',
  'CE3',
  'CE4',
  'CE5',
  'CE6',
];

export const PreInscriptionForm: React.FC = () => {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'pre-inscription', ...data }),
      });
      logSubmission('pre-inscription', data);
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <SuccessCard
          key="ok"
          message="Votre demande de pré-inscription est bien reçue. Le secrétariat vous rappelle rapidement pour fixer votre visite."
        />
      ) : (
        <motion.form
          key="form"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          name="pre-inscription"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-left"
        >
          <input type="hidden" name="form-name" value="pre-inscription" />
          <p className="hidden">
            <label>
              Ne pas remplir : <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="p-parent" className={labelCls}>Nom du parent</label>
              <input id="p-parent" name="parent" type="text" required placeholder="Nom et prénom" className={fieldCls} />
            </div>
            <div>
              <label htmlFor="p-tel" className={labelCls}>Téléphone</label>
              <input id="p-tel" name="telephone" type="tel" required placeholder="06 00 00 00 00" className={fieldCls} />
            </div>
          </div>

          <div>
            <label htmlFor="p-email" className={labelCls}>Email (optionnel)</label>
            <input id="p-email" name="email" type="email" placeholder="vous@exemple.com" className={fieldCls} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-1">
              <label htmlFor="p-enfant" className={labelCls}>Prénom de l’enfant</label>
              <input id="p-enfant" name="enfant" type="text" required placeholder="Prénom" className={fieldCls} />
            </div>
            <div>
              <label htmlFor="p-annee" className={labelCls}>Année de naissance</label>
              <input id="p-annee" name="annee-naissance" type="text" inputMode="numeric" required placeholder="2022" className={fieldCls} />
            </div>
            <div>
              <label htmlFor="p-niveau" className={labelCls}>Niveau souhaité</label>
              <select id="p-niveau" name="niveau" required className={fieldCls} defaultValue="">
                <option value="" disabled>Choisir…</option>
                {NIVEAUX_OPTIONS.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="p-msg" className={labelCls}>Message (optionnel)</label>
            <textarea id="p-msg" name="message" rows={3} placeholder="Une question, une précision…" className={fieldCls} />
          </div>

          {status === 'error' && <ErrorNote />}
          <SubmitButton status={status} label="Envoyer ma pré-inscription" />
          <p className="font-body text-[11px] text-[#00558d]/50 text-center">
            Sans engagement — le secrétariat vous rappelle pour organiser la visite.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
};
