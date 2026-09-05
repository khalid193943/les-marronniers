/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Admissions & School Visit Modal (Exact Ovo Giggle Theme)
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Baby, GraduationCap, MapPin, CheckCircle2, Phone, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLocation?: string;
}

export const AdmissionsModal: React.FC<AdmissionsModalProps> = ({
  isOpen,
  onClose,
  defaultLocation,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    targetGrade: 'Maternelle (Petite Section)',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#084274]/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#e6ccb2] max-w-lg w-full p-8 sm:p-10 shadow-2xl border border-[#084274]/10 z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-[#feeddb] text-[#084274] hover:bg-[#084274] hover:text-white transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          {step === 'form' ? (
            <div>
              <div className="text-center mb-6">
                <div className="giggle-tag mb-3">
                  <div className="giggle-dot" />
                  <span>Rentrée Scolaire 2026 — El Jadida</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl text-[#084274]">
                  Planifier une Visite Découverte
                </h3>
                <p className="font-body text-xs text-[#084274]/70 mt-1">
                  Rencontrez notre direction pédagogique et découvrez nos 6 classes lumineuses, notre labo et notre jardin.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#084274] mb-1">
                    Nom & Prénom du Parent *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Ex: Fatima Zahra Alami"
                    className="w-full px-4 py-2.5 bg-[#feeddb]/40 border border-[#084274]/20 text-xs font-medium text-[#084274] focus:outline-none focus:ring-2 focus:ring-[#084274]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#084274] mb-1">
                      Téléphone portable *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+212 6 XX XX XX XX"
                      className="w-full px-4 py-2.5 bg-[#feeddb]/40 border border-[#084274]/20 text-xs font-medium text-[#084274] focus:outline-none focus:ring-2 focus:ring-[#084274]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#084274] mb-1">
                      Prénom de l'Enfant *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      placeholder="Ex: Yasmine"
                      className="w-full px-4 py-2.5 bg-[#feeddb]/40 border border-[#084274]/20 text-xs font-medium text-[#084274] focus:outline-none focus:ring-2 focus:ring-[#084274]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#084274] mb-1">
                    Niveau Souhaité
                  </label>
                  <select
                    value={formData.targetGrade}
                    onChange={(e) => setFormData({ ...formData, targetGrade: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#feeddb]/40 border border-[#084274]/20 text-xs font-medium text-[#084274] focus:outline-none focus:ring-2 focus:ring-[#084274]"
                  >
                    <option value="Crèche">Crèche (tout-petits)</option>
                    <option value="Maternelle (Petite Section)">Maternelle (Petite Section - PS)</option>
                    <option value="Maternelle (Moyenne Section)">Maternelle (Moyenne Section - MS)</option>
                    <option value="Maternelle (Grande Section)">Maternelle (Grande Section - GS)</option>
                    <option value="Primaire (CP)">Primaire (CP)</option>
                    <option value="Primaire (CE1)">Primaire (CE1)</option>
                    <option value="Primaire (CE2)">Primaire (CE2)</option>
                    <option value="Primaire (CE3)">Primaire (CE3)</option>
                    <option value="Primaire (CE4)">Primaire (CE4)</option>
                    <option value="Primaire (CE5)">Primaire (CE5)</option>
                    <option value="Primaire (CE6)">Primaire (CE6)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#084274] mb-1">
                    Précisions ou Questions (Optionnel)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Disponibilités souhaitées pour un rendez-vous à l'école..."
                    className="w-full px-4 py-2 bg-[#feeddb]/40 border border-[#084274]/20 text-xs font-medium text-[#084274] focus:outline-none focus:ring-2 focus:ring-[#084274]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="giggle-button-primary w-full py-3 text-xs cursor-pointer shadow-md"
                  >
                    <Calendar className="w-4 h-4 text-[#e3a044]" />
                    <span>Confirmer la Demande de Rendez-vous</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-[#feeddb] flex items-center justify-center text-3xl mx-auto mb-4">
                🎉
              </div>
              <h4 className="font-heading text-2xl text-[#084274] mb-2">
                Demande transmise avec succès !
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#084274]/80 leading-relaxed mb-6">
                Merci <strong>{formData.parentName}</strong>. Notre direction pédagogique vous contactera au <strong>{formData.phone}</strong> pour convenir de votre date de visite aux Marronniers El Jadida (16 Lot Al Asdikaa, Rue Beethoven).
              </p>
              <button
                onClick={onClose}
                className="giggle-button-primary text-xs py-2.5 px-6 cursor-pointer"
              >
                Fermer la fenêtre
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
