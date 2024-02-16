import Annonce from '@/components/Annonce'
import AnnonceStyles from '@/styles/components/annonce.module.css'

export default function AnnoncePage({ params }: { params: { id: string } }){
  // Utilisez l'ID pour récupérer les données spécifiques à cette annonce
  // Vous pouvez appeler une API, interroger une base de données, etc.

  // Exemple d'utilisation fictive de l'ID
  const annonceData = {
    title: `Annonce trouvé dans ${params.id}`,
    content: `Contenu de l'annonce ${params.id}`,
  };
//Faire un for pour le nombres de lignes dans la bdd
//et récupérer tous les ids a chaque fois 
//les afficher dans annonce
  return (
    <div style={{ paddingTop: '75px',paddingLeft: '10px' }}>
      
      <div className={AnnonceStyles.title}>{annonceData.title}</div>
      <Annonce />
      <Annonce />
    </div>
  );
};
//Remplacer par div title 
      //<h1>{annonceData.title}</h1>
      //<p>{annonceData.content}</p>