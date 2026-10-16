# Magensy

Site vitrine construit avec Next.js, TypeScript et Tailwind CSS. Il regroupe l'accueil, les services, les réalisations, la présentation de l'entreprise et le formulaire de contact.

## Stack

- Next.js 13 avec export HTML statique
- React et TypeScript
- Tailwind CSS
- EmailJS côté navigateur pour le formulaire de contact

## Lancer en local

```bash
npm ci
npm run dev
```

Ouvrir `http://localhost:3000`.

Le formulaire EmailJS attend `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_EMAILJS_SERVICE_ID` et `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`. Ces valeurs sont intégrées au JavaScript client par Next.js; ne jamais y placer une clé secrète serveur. Sans configuration EmailJS, le site peut s'afficher, mais l'envoi du formulaire n'est pas disponible.

## Build statique

```bash
npm run build
```

Avec `output: 'export'`, Next.js génère le site dans `out/` pour un hébergeur statique. La démo GitHub Pages prévue sera publiée sous `/Magensy/`; elle n'est pas encore en ligne.

## Avant déploiement public

- Retirer la page de diagnostic `app/test-env/page.tsx`, qui affiche les identifiants EmailJS publics.
- Préfixer les chemins d'images et les assets avec la base `/Magensy/` sur GitHub Pages.
- Lancer le build de production et vérifier les routes, images, formulaire et liens sur l'URL publiée.
- Ne configurer le formulaire de démo que vers une boîte de test autorisée; ne pas envoyer vers les coordonnées de production.

