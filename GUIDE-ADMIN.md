# Guide de l'Espace Administration

L'école gère elle-même les actualités et reçoit les demandes des parents depuis un seul écran.

## Y accéder
Ajoutez `#admin` à l'adresse du site : `https://votre-site.ma/#admin`
(Un lien discret « Administration » se trouve aussi tout en bas du site.)

**Mot de passe par défaut : `marronniers2026`**

> ⚠️ **À faire avant la mise en ligne** : changez ce mot de passe dans le fichier
> `src/data/adminConfig.ts`, puis reconstruisez le site.
> Pour une vraie sécurité, activez en plus la protection par mot de passe de votre
> hébergeur (Netlify → *Site settings → Access control → Password protection*).

---

## 📰 Onglet « Actualités »

### Publier un article
1. Cliquez sur **Nouvel article**.
2. Remplissez : titre, catégorie, date.
3. **Image** : cliquez sur *Choisir une photo* (depuis votre téléphone ou ordinateur), ou collez une adresse d'image. La photo est automatiquement redimensionnée.
4. Écrivez le **résumé** (une ou deux phrases) puis le **texte** — laissez une ligne vide entre deux paragraphes.
5. **Mettre à la une** place l'article en grand en haut de la page Actualités.
6. **Enregistrer**.

L'article apparaît immédiatement sur le site **dans votre navigateur**.

### ⚠️ Rendre l'article visible par tout le monde
Un site statique ne peut pas enregistrer sur le serveur depuis le navigateur. Vos articles sont donc d'abord des **brouillons locaux**. Pour les publier définitivement :

1. Cliquez sur **Exporter (publier)** → un fichier `news.json` se télécharge.
2. Remplacez le fichier `src/data/news.json` du projet par celui-ci.
3. Reconstruisez et redéployez (`npm run build`, puis re-glissez `dist/` sur Netlify).

Un bandeau orange vous rappelle toujours combien d'articles sont encore en brouillon.

> 💡 **Pour publier sans manipuler de fichier**, installez **Decap CMS** (gratuit, s'ajoute
> en 15 min sur Netlify) : vous publiez alors directement depuis le navigateur, sur tous
> les appareils. Demandez à votre développeur, ou voir `decapcms.org`.

### Modifier ou supprimer
Chaque article de la liste a un crayon (modifier) et une corbeille (supprimer).
Le bouton **Annuler les brouillons** remet tout comme dans la dernière version publiée.

---

## 📥 Onglet « Demandes »

Toutes les demandes envoyées par les parents arrivent ici : **messages de contact** et **pré-inscriptions**.

Pour chaque demande : le nom, le **téléphone cliquable** (appel direct), l'email, le prénom de l'enfant, le niveau souhaité et le message.

- **Filtres** : Tout / Pré-inscriptions / Messages.
- **Export Excel** : télécharge toutes les demandes en fichier `.csv` (ouvrable dans Excel).
- **Marquer comme lu** pour suivre ce qui a été traité.

### Voir les demandes de tous les appareils
Par défaut, cet écran affiche les demandes passées par **ce navigateur**. Les demandes sont toujours conservées en sécurité par Netlify.

Pour tout voir au même endroit, cliquez sur **Connexion** et renseignez :
- **Jeton d'accès Netlify** : Netlify → *User settings → Applications → Personal access tokens → New access token*
- **Identifiant du site** : Netlify → *Site settings → General → Site ID*

Puis **Connecter** et **Synchroniser**. Ces informations restent uniquement sur votre appareil.

Vous pouvez aussi simplement consulter l'onglet **Forms** de votre tableau de bord Netlify, et activer les notifications par email (*Site settings → Forms → Form notifications*) pour recevoir chaque demande dans votre boîte mail.

---

## Conseils
- Publiez une actualité par semaine ou par mois : photos de sorties, spectacles, ateliers, résultats. C'est ce qui donne confiance aux parents qui découvrent l'école.
- Une bonne photo vaut mieux qu'un long texte. Gardez le résumé court.
- N'oubliez pas l'autorisation écrite des parents avant de publier une photo d'enfant.
