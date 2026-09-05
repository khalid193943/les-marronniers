/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Données officielles vérifiées - Les Marronniers El Jadida
 * Toutes les informations ci-dessous sont strictly conformes aux données publiques confirmées.
 */

export const SCHOOL_INFO = {
  name: "Les Marronniers El Jadida",
  slogan: "Faites le choix de la différence.",
  tagline: "La crèche-maternelle-primaire de référence à El Jadida.",
  shortName: "Les Marronniers",
  type: "Établissement scolaire privé (Crèche, Maternelle & Primaire)",
  address: "16 Lot Al Asdikaa, Rue Beethoven, Plateau",
  city: "El Jadida 24000",
  country: "Maroc",
  fullAddress: "16 Lot Al Asdikaa, Rue Beethoven, Plateau, El Jadida 24000, Maroc",
  phone: "+212 523 395 603",
  phoneRaw: "+212523395603",
  email: "contact@lesmarronniers-eljadida.ma",
  googleMapsQuery: "16 Lot Al Asdikaa Rue Beethoven Plateau El Jadida Maroc",
  hours: "Lun – Ven · 7h45 – 18h15",
  hoursDetail: "Du lundi au vendredi, de 7h45 à 18h15",
  campuses: [
    {
      id: "maternelle",
      label: "Campus Crèche & Maternelle",
      address: "16 Lot Al Asdikaa, Rue Beethoven, Plateau, El Jadida",
      mapsUrl: "https://maps.google.com/?q=Cr%C3%A8che+Maternelle+Les+Marronniers+El+Jadida",
      lat: 33.242974,
      lng: -8.5099555,
    },
    {
      id: "primaire",
      label: "Campus Primaire",
      address: "3 Avenue Varennes, El Jadida",
      mapsUrl: "https://maps.google.com/?q=3+Avenue+Varennes+El+Jadida+Maroc",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/LesMarronniersElJadida/",
    instagram: "https://www.instagram.com/lesmarronnierseljadida/",
    youtube: "https://www.youtube.com/watch?v=ehWUFnrk3NU",
    whatsapp: "https://wa.me/212523395603?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20les%20inscriptions%20aux%20Marronniers.",
    googleReviews: "https://search.google.com/local/reviews?placeid=ChIJ9_PBPNwdqQ0RuWBv2FB5bow",
  },
  niveaux: [
    { id: "creche", label: "Crèche", age: "Dès le plus jeune âge", focus: "Éveil sensoriel, sécurité affective, motricité libre et socialisation précoce" },
    { id: "maternelle", label: "Maternelle", grades: ["Petite Section (PS)", "Moyenne Section (MS)", "Grande Section (GS)"], focus: "Langage, autonomie, motricité, créativité et préparation progressive au primaire" },
    { id: "primaire", label: "Primaire", grades: ["CP", "CE1", "CE2", "CE3", "CE4", "CE5", "CE6"], focus: "Apprentissages fondamentaux (français, mathématiques, sciences, langues), culture générale et réflexion" },
  ],
  infrastructure: [
    { title: "6 Salles de Classe", desc: "Salles spacieuses, lumineuses et ensoleillées, agencées avec du mobilier adapté à la taille des enfants." },
    { title: "Salle d'Éveil Scientifique", desc: "Espace équipé pour la manipulation sensorielle, l'observation du monde vivant et la curiosité d'expérimentation." },
    { title: "Espace Cinéma & Théâtre", desc: "Salle dédiée aux représentations théâtrales, aux projections pédagogiques, au chant et à l'expression orale." },
    { title: "Salle de Psychomotricité", desc: "Environnement d'exploration corporelle sécurisé avec modules mous, parcours d'équilibre et motricité globale." },
    { title: "Grande Cour & Jardin", desc: "Espace extérieur arboré avec jeux adaptés, cour de détente et contact avec la nature." },
    { title: "Revêtement Anti-Choc & Anti-Dérapant", desc: "Sol extérieur amortissant spécialement conçu pour la sécurité des courses et jeux d'enfants." },
    { title: "Matériel Pédagogique Conforme", desc: "Matériel didactique moderne et adapté à la petite enfance, incluant des équipements importés d'Europe." },
    { title: "Stationnement Pratique", desc: "Facilité d'accès et stationnement à proximité immédiate pour la dépose et la reprise sereine des enfants par les parents." },
  ],
  valeurs: [
    { title: "Bienveillance", desc: "Un accueil chaleureux et une écoute attentive au rythme individuel de chaque enfant." },
    { title: "Sécurité & Hygiène", desc: "Des protocoles rigoureux, des revêtements anti-choc et un encadrement permanent pour la tranquillité des familles." },
    { title: "Épanouissement", desc: "Une atmosphère joyeuse où l'enfant aime venir apprendre et se sent en confiance." },
    { title: "Autonomie", desc: "Encourager la prise d'initiative, l'organisation personnelle et la confiance en ses capacités." },
    { title: "Curiosité & Éveil", desc: "Stimuler le désir naturel d'apprendre par l'expérimentation scientifique, artistique et corporelle." },
    { title: "Excellence Pédagogique", desc: "Solidité des apprentissages fondamentaux au primaire (français, maths, sciences, langues)." },
    { title: "Partenariat avec les Familles", desc: "Un dialogue régulier, transparent et constructif entre l'école et les parents." },
  ],
};
