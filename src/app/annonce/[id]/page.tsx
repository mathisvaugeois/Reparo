'use client'
import Annonce from '@/components/Annonce'
import AnnonceBis from '@/components/AnnonceBis'
import AnnonceStyles from '@/styles/components/annonce.module.css'
import { useState, useEffect } from "react"

export default function AnnoncePage({ params }: { params: { id: string } }) {
  const [annonces, setAnnonces] = useState<any[]>([]);

  // Exemple d'utilisation fictive de l'ID
  const annonceData = {
    title: `Annonces trouvées en ${params.id}`,
    content: `Contenu de l'annonce ${params.id}`,
  };

  const searchAnnonces = async () => {
    // e.preventDefault();
    try {
      const region = params.id
      const response = await fetch(`http://localhost:3000/api/annonces/listAnnonces`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ region }),
      });
      const jsonResponse = await response.json();
      setAnnonces(jsonResponse.annonces);
    } catch (err) {
      console.error("Failed to fetch announcements:", err);
    }
  }

  useEffect(() => {
    searchAnnonces(); // on pourra ajouter un effet de chargement plus tard
  }, []);

  return (
    <div style={{ paddingTop: '75px', paddingLeft: '10px', marginBottom: '500px' }}>
      <div className={AnnonceStyles.title}>{annonceData.title}</div>
      {annonces?.length > 0 && (
        <>{annonces.map((annonce) => ( // Map over each result and render it as an AnnounceBis component
          <AnnonceBis
            key={annonce.id}
            id={annonce.id}
            title={annonce.title}
            description={annonce.content}
            metier={annonce.metier}
            ville={annonce.region}
            prix={annonce.price}
            imageUrl={annonce.imageUrl} />
        ))}</>
      )}
      <Annonce />
      <Annonce />
      <Annonce />
      <Annonce />
    </div>
  );
};