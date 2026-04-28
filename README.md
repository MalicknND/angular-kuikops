# Gestionnaire de Produits - Application Angular

Une application Angular moderne pour gérer une liste de produits avec système de catégories. Cette application permet de créer, consulter, modifier et supprimer des produits.

**Version Angular** : 21.2.8+

---

## 📋 Fonctionnalités

- ✅ **Afficher la liste des produits** avec détails et catégories
- ✅ **Ajouter un nouveau produit** avec sélection de catégorie
- ✅ **Modifier un produit existant** (nom, prix, date, catégorie)
- ✅ **Supprimer un produit** de la liste
- ✅ **Sélectionner une catégorie** lors de l'ajout/modification
- ✅ **Navigation entre les pages** via Angular Router

---

## 🏗️ Architecture

### Structure du Projet

```
src/app/
├── app.ts                          # Composant racine
├── app.routes.ts                   # Configuration du routage
├── app.config.ts                   # Configuration de l'application
├── services/
│   └── produit.ts                  # Service de gestion des produits
├── model/
│   ├── produit.model.ts            # Modèle Produit
│   └── categorie.model.ts          # Modèle Catégorie
├── produits/                       # Composant affichage de la liste
│   ├── produits.ts
│   ├── produits.html
│   └── produits.css
├── add-produit/                    # Composant d'ajout de produit
│   ├── add-produit.ts
│   └── add-produit.html
└── update-produit/                 # Composant de modification de produit
    ├── update-produit.ts
    └── update-produit.html
```

### Modèles de Données

**Produit** :
```typescript
{
  idProduit: number,
  nomProduit: string,
  prixProduit: number,
  dateCreation: Date,
  categorie: CategorieModel
}
```

**Catégorie** :
```typescript
{
  idCat: number,
  nomCat: string
}
```

---

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 20+
- Angular CLI 21+

### Installation

```bash
# Cloner le projet
cd angular-course

# Installer les dépendances
npm install
```

### Serveur de développement

```bash
npm start
```

L'application sera accessible à `http://localhost:4200/`

Elle se rechargera automatiquement à chaque modification du code.

---

## 🛠️ Commandes Disponibles

```bash
# Démarrer le serveur de développement
npm start

# Exécuter les tests unitaires
npm test

# Compiler pour la production
ng build
```

---

## 📱 Utilisation

### 1. Afficher les Produits
- Accédez à la page principale pour voir la liste de tous les produits
- Chaque produit affiche : ID, nom, prix, date de création et catégorie

### 2. Ajouter un Produit
- Cliquez sur le bouton "Ajouter un Produit"
- Remplissez le formulaire avec :
  - ID du produit
  - Nom du produit
  - Prix
  - Date de création
  - Sélectionnez une catégorie
- Cliquez sur "Ajouter"

### 3. Modifier un Produit
- Cliquez sur le bouton "Modifier" du produit à éditer
- Modifiez les informations
- Cliquez sur "Valider"

### 4. Supprimer un Produit
- Cliquez sur le bouton "Supprimer" du produit concerné

---

## 📦 Service (ProduitService)

Le service centralise la gestion des données :

```typescript
// Récupérer tous les produits
produitService.listeProduits()

// Consulter un produit par ID
produitService.consulterProduit(id)

// Ajouter un produit
produitService.ajouterProduit(produit)

// Modifier un produit
produitService.updaterProduit(produit)

// Supprimer un produit
produitService.supprimerProduit(id)

// Récupérer les catégories
produitService.listeCategories()

// Consulter une catégorie
produitService.consulterCategorie(idCat)
```

---

## 🔄 Flux de Navigation

```
Produits (Liste)
    ↓
    ├→ Ajouter un Produit → Add-Produit (Formulaire)
    │       ↓
    │   Validation & Ajout
    │       ↓
    │   Retour à Produits
    │
    └→ Modifier un Produit → Update-Produit (Formulaire)
            ↓
        Validation & Modification
            ↓
        Retour à Produits
```

---

## 📝 Notes de Développement

- L'application utilise **Standalone Components** (Angular 14+)
- Import des modules directement dans les composants
- **FormsModule** pour les formulaires avec `[(ngModel)]`
- **Router** pour la navigation entre pages
- Les données sont stockées localement en mémoire

---

## 🐛 Dépannage

**Erreur de casse dans les propriétés** :
- TypeScript est sensible à la casse
- Assurez-vous que `newIdcat` et `newIdCat` sont cohérents

---

## 📄 Licence

MIT

---

## 👨‍💻 Auteur

Projet de cours Angular

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
