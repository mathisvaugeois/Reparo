

## Titre du projet : Reparo
Description : Reparo est un site d’annonce spécialisé dans la réparation. Ce site regroupe les personnes afin de réparer les objets de chacun. 
Rien ne dure éternellement, les objets cassent, s'abîment ou arrêtent juste de fonctionner. Mais grâce à Reparo on peut les réparer.
Notre objectif: proposer une plateforme simple d’utilisation, que ce soit pour le client ou le réparateur. Le client dépose une annonce avec un titre, une description, une photo, la région ainsi que le prix qu’il veut donner. Une personne voulant proposer ses services (professionnel ou non) peut proposer ses services à ce client. Le client peut ensuite choisir entre toutes les personnes qui l'ont contacté. Une fois choisis, ils peuvent échanger pour donner plus de détails, négocier le prix.

Membres : 
BACK :
Enzo PIERRE : Mise en place du projet et gestion des api
Mathis VAUGEOIS : Dashboard et création de l’annonce 
FRONT :
Eli DESTOMBES : Page d’accueil et header et footer
Oriane FORESTIER : Page avec l’ensemble des annonces et page d’annonce

Technologies : Next.js React Sqlite

Bugs connus : 
 - temps pour charger un page ou les annonces trop long
 - Page “a propos de nous” pas adapté

Fonctionnalités manquantes:
 - Il n’y a pas de messagerie entre différents utilisateurs
 - Upload d’image ne fonctionne pas encore


## Getting Started

First, run the development server:

```bash
npm update
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Migration base de données 

- npx prisma migrate dev --name "nom de la migration"