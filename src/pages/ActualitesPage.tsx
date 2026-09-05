/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page Actualités & Événements Scolaires
 * Esthétique Magazine / Bento Grids / Modal de Lecture / Agenda Scolaire
 */

import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionDivider } from '../components/SectionDivider';
import { PageId } from '../types';
import {
  Calendar,
  Sparkles,
  PartyPopper,
  BookOpen,
  ArrowRight,
  Clock,
  Tag,
  Share2,
  CheckCircle2,
  Bell,
  X,
  Eye,
  Bookmark,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';

interface ActualitesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions: () => void;
}

interface Article {
  id: string;
  category: string;
  badge: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  fullContent: string[];
  image: string;
  author: string;
}

export const ActualitesPage: React.FC<ActualitesPageProps> = ({
  onNavigate,
  onOpenAdmissions,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  const articles: Article[] = [
    {
      id: 'inscriptions-2026',
      category: 'admissions',
      badge: 'Inscriptions & Visites',
      date: 'Septembre 2026',
      readTime: '3 min de lecture',
      title: 'Ouverture Officielle des Inscriptions & Visites Privées 2026-2027',
      summary: 'Les admissions pour la Crèche, la Maternelle et le Primaire sont officiellement ouvertes. Découvrez nos créneaux de visite personnalisée avec la direction pédagogique.',
      fullContent: [
        "L’École Les Marronniers El Jadida ouvre officiellement sa campagne d'admission pour l'année scolaire 2026-2027. Afin de garantir un accompagnement individualisé et préserver la quiétude de nos classes, le nombre de places par niveau demeure volontairement limité.",
        "Nous invitons les parents souhaitant inscrire leur enfant en Crèche (dès 2 ans), Maternelle (TPS à GS) ou Primaire (CP au CE6) à réserver un créneau de visite privée. Vous aurez l'opportunité de découvrir nos 6 classes baignées de lumière naturelle, notre laboratoire d'éveil scientifique, notre espace cinéma-théâtre ainsi que notre cour sécurisée avec sol amortissant.",
        "La direction pédagogique prendra le temps d'échanger personnellement avec chaque famille sur les aptitudes, le rythme et le projet d'épanouissement de leur enfant."
      ],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
      author: 'Direction Pédagogique',
    },
    {
      id: 'semaine-science',
      category: 'sciences',
      badge: 'Sciences & Découverte',
      date: '28 Août 2026',
      readTime: '4 min de lecture',
      title: 'Semaine de l’Expérimentation dans Notre Laboratoire d’Éveil Scientifique',
      summary: 'De la germination des plantes à la découverte de la robotique ludique, retour en images sur les expériences passionnantes menées par les élèves du primaire.',
      fullContent: [
        "Durant toute la semaine, notre salle d'éveil scientifique s'est transformée en véritable ruche d'investigation ! Les élèves de Maternelle Grande Section et du Cycle Primaire ont revêtu leurs tabliers pour tester des hypothèses concrètes.",
        "Au programme : observation au microscope des cellules végétales du jardin de l'école, mesure de la densité des liquides, manipulation de circuits électriques simples et défis d'algorithmique sur petits robots éducatifs.",
        "Ces ateliers concrétisent notre pédagogie active : l'enfant comprend durablement ce qu'il a lui-même touché, manipulé et mesuré."
      ],
      image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=1000&q=80',
      author: 'Pôle Sciences & Environnement',
    },
    {
      id: 'tournoi-echecs',
      category: 'reflexion',
      badge: 'Club d’Échecs',
      date: '15 Août 2026',
      readTime: '3 min de lecture',
      title: 'Brillants Résultats de Nos Élèves au Tournoi Régional d’Échecs',
      summary: 'Les membres du Club d’Échecs des Marronniers se sont distingués par leur calme, leur sportivité et leur sens tactique lors de la coupe inter-écoles d’El Jadida.',
      fullContent: [
        "Fierté et enthousiasme aux Marronniers ! Samedi dernier, 12 de nos élèves du Primaire (du CE1 au CE6) ont représenté l'école lors du tournoi d'échecs inter-établissements de la province d'El Jadida.",
        "Grâce à l'entraînement hebdomadaire dispensé par notre animateur d'échecs, nos élèves ont remporté la 1ère place par équipe et deux podiums individuels en catégorie poussins et benjamins.",
        "Au-delà des médailles, c'est le fair-play et la concentration remarquable de nos enfants qui ont suscité l'admiration de tous les arbitres."
      ],
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1000&q=80',
      author: 'Club d’Échecs des Marronniers',
    },
    {
      id: 'theatre-eloquence',
      category: 'arts',
      badge: 'Arts & Théâtre',
      date: '02 Août 2026',
      readTime: '3 min de lecture',
      title: 'Répétitions Trilingues sur les Planches de Notre Espace Théâtre',
      summary: 'Diction en français, poésie en arabe classique et chants en anglais : nos jeunes artistes préparent avec joie les représentations de fin de trimestre.',
      fullContent: [
        "L'Espace Cinéma-Théâtre résonne de voix joyeuses et assurées. Les élèves de CP, CE2 et CE5 peaufinent leurs saynètes dans les trois langues enseignées à l'école.",
        "Le travail théâtral constitue un formidable accélérateur de confiance en soi. Dès 4 ans, les enfants apprennent à articuler, à poser leur regard et à s'exprimer sans retenue devant leurs camarades.",
        "Les familles seront prochainement invitées à assister aux représentations lors d'un après-midi festif."
      ],
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
      author: 'Atelier Expression Scénique',
    },
    {
      id: 'cour-securisee',
      category: 'vie-scolaire',
      badge: 'Vie Scolaire',
      date: '20 Juillet 2026',
      readTime: '2 min de lecture',
      title: 'Nouveaux Équipements de Motricité & Aménagement de la Cour Arborée',
      summary: 'Pour garantir un confort thermique et une sécurité sans compromis, de nouveaux agrès en mousse et un jardin potager pédagogique ont été installés.',
      fullContent: [
        "Pendant les congés d'été, notre équipe technique a finalisé l'embellissement des espaces de récréation du Campus Beethoven et du Campus Ibn Khaldoun.",
        "La cour bénéficie d'un nouveau revêtement de sol amortissant certifié anti-chutes et anti-dérapant. Un potager pédagogique permettra également aux classes maternelles d'étudier le cycle des saisons et les plantes aromatiques marocaines.",
        "Un cadre préservé où il fait bon courir, rire et respirer chaque jour !"
      ],
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
      author: 'Service Logistique & Sécurité',
    },
    {
      id: 'reussite-ce6',
      category: 'admissions',
      badge: 'Résultats Officiels',
      date: '05 Juillet 2026',
      readTime: '2 min de lecture',
      title: '100% de Réussite aux Examens Officiels du CE6 pour la 15ème Année Consécutive',
      summary: 'Une nouvelle fois, l’ensemble de nos élèves de CE6 ont validé avec brio leur passage au collège, avec plus de 80% de mentions Très Bien.',
      fullContent: [
        "C'est avec une immense fierté que l'équipe pédagogique annonce les résultats de la session 2026 des examens officiels du certificat d'études primaires (CE6) : 100% d'admis, dont une écrasante majorité avec les félicitations du jury !",
        "Ce succès perpétuel témoigne de la rigueur de notre encadrement, de la constance des efforts de nos élèves et de la confiance réciproque nouée avec les parents d'élèves.",
        "Nous souhaitons une excellente continuation à nos jeunes lauréats dans leurs futurs collèges !"
      ],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
      author: 'Direction Pédagogique',
    },
  ];

  const filtered = selectedCategory === 'all'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterDone(true);
  };

  return (
    <div className="bg-[#feeddb] min-h-screen">
      <PageHeader
        tag="VIE DE L'ÉTABLISSEMENT & TEMPS FORTS"
        title="Actualités &"
        highlightedWord="Événements"
        description="Plongez au cœur du quotidien des Marronniers : projets de classe, tournois sportifs et intellectuels, sorties culturelles et annonces officielles."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: 'Actualités' }]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20">
        
        {/* Featured Magazine Hero Article */}
        <AnimatedSection direction="up" className="mb-16">
          <div className="bg-[#e6ccb2] border-2 border-[#084274]/15 p-6 sm:p-10 lg:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-[#084274] text-[#feeddb] text-xs font-bold uppercase tracking-wider">
                  À la Une
                </span>
                <span className="text-xs text-[#084274]/70 font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#e3a044]" />
                  Rentrée Scolaire 2026-2027
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#084274] tracking-tight leading-tight">
                Ouverture Officielle des Inscriptions & Visites Privées des 2 Campus
              </h2>

              <p className="font-body text-sm sm:text-base text-[#084274]/85 leading-relaxed">
                Les inscriptions pour la Crèche, la Maternelle et le Primaire sont ouvertes. Venez visiter nos 6 classes baignées de lumière, notre laboratoire de sciences et notre espace cinéma-théâtre lors d'un entretien personnalisé.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveArticle(articles[0])}
                  className="giggle-button-primary text-xs sm:text-sm px-6 py-3.5 font-bold cursor-pointer flex items-center gap-2"
                >
                  <Eye className="w-4 h-4 text-[#e3a044]" />
                  <span>Lire le Communiqué Complet</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenAdmissions}
                  className="giggle-button-secondary text-xs sm:text-sm px-5 py-3.5 font-bold cursor-pointer"
                >
                  <span>Prendre Rendez-vous</span>
                </motion.button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[280px] sm:h-[360px]">
                <div className="absolute inset-0 bg-[#e3a044] transform rotate-2 shadow-md" />
                <div className="absolute inset-0 bg-[#084274] transform -rotate-1 shadow-lg" />
                <div className="relative z-10 w-full h-full overflow-hidden border-2 border-white/40 shadow-2xl">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 border border-[#084274]/15 text-xs text-[#084274] font-bold flex justify-between items-center">
                    <span>Campus Beethoven & Ibn Khaldoun</span>
                    <span className="text-[#e3a044]">Places Limitées</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>

        {/* Category Filters & Articles Grid */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            {[
              { id: 'all', label: 'Toutes les Actualités' },
              { id: 'admissions', label: 'Admissions & Inscriptions' },
              { id: 'sciences', label: 'Sciences & Projets' },
              { id: 'arts', label: 'Arts & Théâtre' },
              { id: 'reflexion', label: 'Club d’Échecs' },
              { id: 'vie-scolaire', label: 'Vie Scolaire & Campus' },
            ].map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer border-2 ${
                  selectedCategory === cat.id
                    ? 'bg-[#084274] text-white border-[#084274] shadow-md scale-105'
                    : 'bg-white text-[#084274] hover:bg-white/80 border-[#084274]/15'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((article, idx) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#e6ccb2] border-2 border-[#084274]/15 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-[#084274]/30 transition-all duration-300 group"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#feeddb] text-[#084274] text-[11px] font-bold shadow-md border border-[#084274]/10">
                          {article.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                        <span>{article.date}</span>
                        <span className="text-white/80">{article.readTime}</span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#084274]/70 block mb-2">
                        Par {article.author}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-[#084274] mb-3 leading-snug group-hover:text-[#e3a044] transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-[#084274]/80 leading-relaxed line-clamp-3">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#084274]/10 mt-4 flex items-center justify-between">
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="text-xs font-bold text-[#084274] group-hover:text-[#e3a044] flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Lire l'article complet</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatedSection>

        {/* Upcoming Events Agenda (Calendrier des Événements) */}
        <AnimatedSection direction="up" className="bg-[#084274] text-[#feeddb] p-8 sm:p-12 lg:p-16 border-2 border-[#084274] shadow-2xl mb-20">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block mb-2">
              À Vos Agendas
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Les Prochains Événements & Dates Clés
            </h2>
            <p className="text-xs sm:text-sm text-[#feeddb]/80 mt-2 font-body">
              Retrouvez les rendez-vous festifs, pédagogiques et réunions parents-professeurs du trimestre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/10 border border-white/15 p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <span className="font-heading text-2xl font-bold text-[#e3a044] block mb-1">15 Septembre</span>
                <h4 className="font-heading text-base font-bold text-white mb-2">Rentrée Officielle des Classes</h4>
                <p className="text-xs text-[#feeddb]/80 leading-relaxed">
                  Accueil échelonné des tout-petits de Crèche et Maternelle, et rentrée générale pour les primaires.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider mt-4">Tous Niveaux</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/10 border border-white/15 p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <span className="font-heading text-2xl font-bold text-[#e3a044] block mb-1">04 Octobre</span>
                <h4 className="font-heading text-base font-bold text-white mb-2">Journée de la Science & de l'Arbre</h4>
                <p className="text-xs text-[#feeddb]/80 leading-relaxed">
                  Plantation de jeunes pousses dans le jardin de l'école et expériences en plein air pour toutes les classes.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider mt-4">Jardin des Marronniers</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/10 border border-white/15 p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <span className="font-heading text-2xl font-bold text-[#e3a044] block mb-1">18 Novembre</span>
                <h4 className="font-heading text-base font-bold text-white mb-2">Célébration de la Fête de l'Indépendance</h4>
                <p className="text-xs text-[#feeddb]/80 leading-relaxed">
                  Spectacle de chants patriotiques, poésie arabe classique et exposition de dessins d'élèves.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider mt-4">Espace Cinéma-Théâtre</span>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Newsletter Subscription Box */}
        <AnimatedSection direction="up" className="bg-[#e6ccb2] border-2 border-[#084274]/20 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl">
          <Bell className="w-10 h-10 text-[#e3a044] mx-auto mb-3" />
          <h3 className="font-heading text-2xl sm:text-3xl text-[#084274] mb-2">
            Restez Informés de la Vie de l'École
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#084274]/80 max-w-md mx-auto mb-6">
            Recevez chaque mois la lettre d’information des Marronniers avec les résumés des projets et les dates importantes.
          </p>
          {newsletterDone ? (
            <div className="p-4 bg-white border-2 border-[#24a974] text-xs font-bold text-[#24a974] max-w-md mx-auto flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Merci ! Vous êtes bien inscrit à la lettre d’information.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Votre adresse email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white border border-[#084274]/20 text-xs sm:text-sm text-[#084274] focus:outline-none focus:border-[#084274]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="giggle-button-primary px-6 py-3 text-xs font-bold shrink-0 cursor-pointer"
              >
                S'Abonner
              </motion.button>
            </form>
          )}
        </AnimatedSection>

      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#feeddb] w-full max-w-3xl border-2 border-[#084274] shadow-2xl overflow-hidden my-8 relative"
            >
              {/* Header Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#084274] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#e3a044] text-[#084274] text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                    {activeArticle.badge}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl text-white font-bold leading-tight">
                    {activeArticle.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-4 font-body text-sm text-[#084274]/90 leading-relaxed">
                <div className="flex items-center justify-between text-xs text-[#084274]/60 pb-3 border-b border-[#084274]/15">
                  <span>Publié par : <strong>{activeArticle.author}</strong></span>
                  <span>{activeArticle.date} • {activeArticle.readTime}</span>
                </div>

                {activeArticle.fullContent.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}

                <div className="pt-6 border-t border-[#084274]/15 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={onOpenAdmissions}
                    className="giggle-button-primary text-xs px-5 py-2.5 font-bold cursor-pointer"
                  >
                    Prendre Rendez-vous de Visite
                  </button>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="giggle-button-secondary text-xs px-5 py-2.5 font-bold cursor-pointer"
                  >
                    Fermer cet Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <SectionDivider variant="white" position="bottom" style="wave1" />
    </div>
  );
};
