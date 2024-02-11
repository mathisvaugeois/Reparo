import PageAnnonce from '@/components/pageAnnonce'

export default function PageAnnoncePage({ params }: { params: { id: string } }){
  // Utilisez l'ID pour récupérer les données spécifiques à cette annonce
  // Vous pouvez appeler une API, interroger une base de données, etc.

  // Exemple d'utilisation fictive de l'ID
  
//récupérer l'id de la ligne qui a été cliquer 
//récupérer les ids de la bdd de cette ligne
//les afficher dans pageAnnonce
  return (
    <div style={{ paddingTop: '75px',paddingLeft: '10px' }}>      
      <PageAnnonce />
    </div>
  );
};
