/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Immersion vidéo.
 *
 * Une vidéo, rien d'autre : elle démarre seule, en sourdine et en boucle,
 * sur toute la largeur. Aucun titre ni bloc de texte par-dessus — l'image
 * parle d'elle-même. Seul un bouton de son discret reste accessible.
 *
 * ▸ POUR L'ÉCOLE : remplacez `VIDEO_SRC` par votre vidéo (déposez le
 *   fichier dans `public/` et écrivez par exemple '/video-ecole.mp4').
 */

import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { PHOTOS } from '../data/photos';

const VIDEO_SRC =
  'https://upload.wikimedia.org/wikipedia/commons/b/bd/Two_children_in_the_playground_at_school.webm';

interface SchoolVideoSectionProps {
  onOpenAdmissions: () => void;
}

export const SchoolVideoSection: React.FC<SchoolVideoSectionProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const reduce = useReducedMotion();

  // Démarrage automatique dès que la vidéo est prête (silencieuse : les
  // navigateurs n'autorisent la lecture auto que sans le son).
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    v.play().catch(() => {
      /* Lecture auto refusée par le navigateur : la vidéo reste sur son
         image d'attente, ce qui est un repli acceptable. */
    });
  }, [reduce]);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0086d9]" aria-label="La vie à l’école en vidéo">
      <div className="relative w-full h-[52vh] min-h-[340px] sm:h-[62vh] lg:h-[72vh]">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_SRC}
          poster={PHOTOS.jeuGroupe.src}
          autoPlay={!reduce}
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Voile très léger : garde la vidéo lumineuse tout en l'intégrant
            à la charte, sans jamais masquer ce qui s'y passe. */}
        <div className="absolute inset-0 bg-[#00558d]/12 pointer-events-none" />

        {/* Unique élément d'interface : le son */}
        <button
          onClick={toggleSound}
          aria-label={muted ? 'Activer le son' : 'Couper le son'}
          className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 w-12 h-12 bg-white/90 hover:bg-white text-[#0086d9] flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        >
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    </section>
  );
};
