// pages/annonce/[id].tsx
import { useRouter } from 'next/router';

const AnnoncePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Utilisez l'ID pour récupérer les données spécifiques à cette annonce
  // Vous pouvez appeler une API, interroger une base de données, etc.

  // Exemple d'utilisation fictive de l'ID
  const annonceData = {
    title: `Annonce ${id}`,
    content: `Contenu de l'annonce ${id}`,
  };

  return (
    <div style={{ paddingTop: '75px' }}>
      <h1>{annonceData.title}</h1>
      <p>{annonceData.content}</p>
      {/* Autres composants de votre page d'annonce */}
    </div>
  );
};

export default AnnoncePage;
