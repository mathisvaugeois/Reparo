'use client'
import { useState, useEffect } from "react"
import PageAnnonceStyles from '@/styles/components/pageAnnonce.module.css';
import Link from 'next/link'

export default function Detail({ params }: { params: { id: string } }) {
  const [annonce, setAnnonce] = useState<any>(null);

  // Exemple d'utilisation fictive de l'ID
  const annonceData = {
    title: `Annonce ${params.id}`,
    content: `Contenu de l'annonce ${params.id}`,
  };

  const searchAnnonce = async () => {
    // e.preventDefault();
    try {
      const id = params.id
      console.log(id)
      const response = await fetch(`http://localhost:3000/api/annonces/detail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const jsonResponse = await response.json();
      setAnnonce(jsonResponse.annonce);
      console.log(jsonResponse.message, jsonResponse.annonce)
    } catch (err) {
      console.error("Failed to fetch announcements:", err);
    }
  }

  useEffect(() => {
    searchAnnonce(); // on pourra ajouter un effet de chargement plus tard
  }, []);

  if (annonce && annonce.id != undefined && annonce.title) {
    return (
      <div className={PageAnnonceStyles.annonce}>
        <div className={PageAnnonceStyles.imageRectangle} id="img"><img src="/chaise.jpg" /></div>
        <div className={PageAnnonceStyles.titreAnnonce} id="titre"> {annonce.title} </div>
        <div className={PageAnnonceStyles.autre} id="metier"> {annonce.metier} </div>
        <div className={PageAnnonceStyles.otherInfo}>
          <div className={PageAnnonceStyles.autre} id="adr"> {annonce.region}</div>
          <div className={PageAnnonceStyles.autre} id="prix"> 12€</div>
        </div>
        <div className={PageAnnonceStyles.description} id="desc"> {annonce.content}</div>
        <div className={PageAnnonceStyles.button}>
          <Link href="/annonce/der" className={PageAnnonceStyles.service}>Proposer ses services</Link>
        </div>
        <div className={PageAnnonceStyles.marche}></div>
      </div>
    );
  } else {
    <p> L'annonce est introuvable</p>
  }
};