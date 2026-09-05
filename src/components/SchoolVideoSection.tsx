/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Full Width 30s Video Experience Section
 */

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Calendar, Sparkles, ShieldCheck, Award, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';

interface SchoolVideoSectionProps {
  onOpenAdmissions: () => void;
}

export const SchoolVideoSection: React.FC<SchoolVideoSectionProps> = ({ onOpenAdmissions }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 30; // 30 seconds featured immersion

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const current = video.currentTime % duration;
      setCurrentTime(current);
      setProgress((current / duration) * 100);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const formatSeconds = (sec: number) => {
    const s = Math.floor(sec);
    return `0:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0086d9] text-white py-16 sm:py-24 lg:py-32">
      {/* Background Full Width Video Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.05] scale-105"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80"
        >
          {/* High compatibility web video sources */}
          <source
            src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Two_children_in_the_playground_at_school.webm"
            type="video/webm"
          />
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Gradient Overlays for optimal readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00558d] via-[#00558d]/40 to-[#00558d]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,66,116,0.6)_100%)]" />
      </div>

      {/* Foreground Content */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Top Pill with 30s Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full mb-6 shadow-lg"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#e3a044] animate-ping" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#fff7ef]">
              Immersion Vidéo • 30 Secondes au Cœur de l'École
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6"
          >
            Ressentez l'Énergie & la Joie d'Apprendre aux{' '}
            <span className="text-[#ffe08a]">Marronniers</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mb-8 sm:mb-10 font-medium"
          >
            Chaque jour à El Jadida, nos éducateurs et enseignants créent une atmosphère vivante où les enfants manipulent, s'expriment sur scène, s'initient aux échecs et grandissent en toute sérénité.
          </motion.p>

          {/* 3 Key Highlights Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl mb-10"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3.5 flex items-center justify-center gap-2.5 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#ffe08a] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-white">6 Salles Lumineuses</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3.5 flex items-center justify-center gap-2.5 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#ffe08a] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-white">Cour Jardinée & Sol Sécurisé</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3.5 flex items-center justify-center gap-2.5 shadow-sm">
              <Award className="w-4 h-4 text-[#ffe08a] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-white">Ateliers Sciences & Théâtre</span>
            </div>
          </motion.div>

          {/* Video Control Bar & Progress */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-md bg-black/40 backdrop-blur-lg border border-white/25 p-3 sm:p-4 shadow-2xl mb-8"
          >
            {/* Progress Bar */}
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mb-3">
              <div
                className="bg-[#e3a044] h-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-white/90">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#0086d9] flex items-center justify-center transition-all cursor-pointer"
                  aria-label={isPlaying ? 'Mettre en pause' : 'Lire la vidéo'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                <button
                  onClick={handleRestart}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all cursor-pointer text-white/90 hover:text-white"
                  aria-label="Recommencer la vidéo de 30 secondes"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all cursor-pointer text-white/90 hover:text-white"
                  aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              <div className="font-mono text-xs text-[#fff7ef] font-bold">
                <span>{formatSeconds(currentTime)}</span>
                <span className="text-white/50"> / 0:30</span>
              </div>
            </div>
          </motion.div>

          {/* Action CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenAdmissions}
              className="w-full sm:w-auto bg-[#e3a044] hover:bg-[#d59336] text-[#0086d9] font-bold text-base px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2.5 border-none"
            >
              <Calendar className="w-5 h-5" />
              <span>Visiter Notre École en Personne</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
