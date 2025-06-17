# Projet Magensy

Ce projet est un site web d'entreprise développé avec Next.js, TypeScript et Tailwind CSS. Il présente les services de l'entreprise Magensy.

## Table des matières

- [Prérequis](#prérequis)
- [Installation et Lancement en Local](#installation-et-lancement-en-local)
- [Déploiement sur Hostinger (ou autre hébergeur statique)](#déploiement-sur-hostinger-ou-autre-hébergeur-statique)

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

-   **Node.js** (version 18.17.0 ou supérieure - recommandé via nvm)
-   **npm** (Node Package Manager)

### Installation de Node.js avec nvm (recommandé)

Si vous n'avez pas `nvm` (Node Version Manager) installé, vous pouvez l'installer avec :

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Après l'installation de `nvm`, fermez et rouvrez votre terminal, ou exécutez :

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Ensuite, installez et utilisez la version requise de Node.js :

```bash
nvm install 18.17.0
nvm use 18.17.0
```

## Installation et Lancement en Local

Suivez ces étapes pour installer et lancer le projet sur votre machine locale :

1.  **Naviguez vers le dossier du projet :**

    ```bash
    cd Magensy
    ```

2.  **Installez les dépendances :**

    ```bash
    npm install
    ```

3.  **Lancez le serveur de développement :**

    ```bash
    npm run dev
    ```

    Le site sera accessible à l'adresse suivante dans votre navigateur :
    `http://localhost:3000`

## Déploiement sur Hostinger (ou autre hébergeur statique)

Ce projet est configuré pour l'exportation statique avec Next.js (`output: 'export'` dans `next.config.js`), ce qui le rend idéal pour l'hébergement statique comme Hostinger.

1.  **Générez les fichiers de production :**

    ```bash
    cd Magensy
    npm run build
    ```

    Cette commande va créer un dossier `out/` à la racine de votre projet. Ce dossier contient tous les fichiers HTML, CSS, JavaScript et les assets statiques nécessaires.

2.  **Uploadez le contenu du dossier `out/` :**

    -   Connectez-vous à votre compte Hostinger.
    -   Accédez à votre gestionnaire de fichiers.
    -   Uploadez **tout le contenu** du dossier `out/` (et non le dossier `out` lui-même) directement à la racine de votre domaine (généralement `public_html` ou `www`).

    Votre site sera alors accessible via votre nom de domaine.

### Important : Formulaire de contact

Pour le formulaire de contact, ce projet utilise une intégration avec **Google Forms**. Aucune configuration serveur n'est nécessaire pour l'envoi des emails, les données sont directement envoyées au Google Form que vous avez configuré. Assurez-vous d'avoir remplacé les `entry.xxxxxxx` et l'URL d'action du formulaire dans `components/Contact.tsx` par les vôtres, comme expliqué lors du développement. 