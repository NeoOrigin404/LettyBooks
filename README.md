# 📚 LettyBooks – Suivi de lecture & bibliothèque virtuelle

Application mobile-first de suivi de lecture annuelle et de gestion de bibliothèque virtuelle.  
Objectif à moyen terme : devenir une application communautaire.

---

## 🎯 Vision produit

LettyBooks permet à un lecteur de :

- Suivre ses lectures au fil de l’année
- Visualiser un calendrier de lecture enrichi (vignettes)
- Gérer plusieurs bibliothèques personnalisées
- Noter, commenter et dater ses lectures
- Conserver un historique année par année

Inspirations principales :
- **Bookmory** → calendrier de lecture avec vignettes
- **Babelio** → compteur de livres + historique annuel
- **Gleeph** → organisation de la bibliothèque
- **My Booktown** → ambiance, décorations et multi-bibliothèques

---

## ✨ Fonctionnalités prévues (MVP)

### Compte utilisateur
- Création de compte
- Connexion / déconnexion
- Gestion du profil basique

### Bibliothèque
- Ajout de livres via :
  - ISBN
  - Titre
  - Nom d’auteur
- Plusieurs bibliothèques (ex. : « À lire », « Lus », « Favoris », bibliothèques personnalisées)
- Couvertures, notes, commentaires

### Suivi de lecture
- Dates de lecture (début / fin)
- Note (échelle à définir, ex. 1–5 ou 1–10)
- Commentaire personnel
- Compteur de livres de l’année en cours (remise à zéro automatique au 1er janvier)
- Historique consultable par année

### Calendrier de lecture
- Vue calendrier annuelle / mensuelle
- Vignette du livre sur les jours de lecture
- Inspiration visuelle : Bookmory

### Interface
- Design mobile-first, agréable et personnalisable
- Décorations / thèmes (inspiration My Booktown)
- Navigation fluide entre bibliothèques, calendrier et statistiques

---

## 🛠️ Stack technique

| Couche          | Technologie                          |
|-----------------|--------------------------------------|
| Frontend        | React + TypeScript + Vite            |
| Styling         | Tailwind CSS (mobile-first)          |
| Backend         | Node.js + Express.js + TypeScript    |
| Base de données | MySQL                                |
| Authentification| JWT sécurisé (Access 15min + Refresh Token) |
| Déploiement     | Vercel (frontend) + backend à définir|
| Versionning     | GitHub                               |
| Éditeur         | Cursor                               |

---

## 📁 Structure du projet (prévue)

```text
lettybooks/
├── frontend/                 # Application React (Vite + TypeScript)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── styles/
│   └── ...
├── backend/                  # API Express + TypeScript
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── utils/
│   └── ...
├── docs/                     # Documentation complémentaire
├── README.md
├── ChatGPT.md                # Instructions pour l’assistant IA
└── .gitignore
```

---

## 🚀 Installation (à venir)

### Prérequis
- Node.js ≥ 20
- MySQL
- Compte GitHub
- Compte Vercel

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

*(Les commandes exactes seront finalisées lors de l’initialisation du dépôt.)*

---

## 📅 Roadmap indicative

1. **Phase 0** – Initialisation minimale + déploiement Vercel (vérification que tout fonctionne)
2. **Phase 1** – Authentification sécurisée (JWT Access + Refresh)
3. **Phase 2** – Modèles de données & bibliothèque de base (ISBN / titre / auteur)
4. **Phase 3** – Suivi de lecture (dates, notes, commentaires)
5. **Phase 4** – Calendrier de lecture avec vignettes
6. **Phase 5** – Compteur annuel + historique
7. **Phase 6** – Multi-bibliothèques + personnalisation visuelle
8. **Phase 7** – Préparation communautaire (profils publics, partage…)

---

## 🎨 Références visuelles

Les captures d’écran des applications inspirantes sont disponibles dans le dépôt :
- `APPLI BOOKMORY.png`
- `APPLI BABELIO.png` / `APPLI BABELIO 2.png`
- `APPLI GLEEPH.png`
- `APPLI MY BOOKTOWN.jpg`

---

## 👥 Collaboration avec ChatGPT

Ce projet est développé avec l’aide de ChatGPT via :
- Accès au dépôt GitHub
- Génération de fichiers `.patch`

Toutes les consignes de travail pour l’assistant se trouvent dans **`ChatGPT.md`**.

---

## 📄 Licence

À définir (probablement MIT ou licence personnelle en phase de développement).
