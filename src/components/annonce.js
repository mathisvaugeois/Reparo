import AnnonceStyles from '../styles/components/annonce.module.css'
import Link from 'next/link'

export default function Annonce(){
  return(
    <div>
      <Link href="/pageAnnonce" className={AnnonceStyles.roundedRectangle}>
        <div className={AnnonceStyles.imageCarre} id="img"><img src="/conquete.jpg"/></div>
        <div className={AnnonceStyles.content}>
          <div className={AnnonceStyles.titreAnnonce} id="titre"> Chaise en bois</div>
          <div className={AnnonceStyles.description} id="desc">
            Ma chaise en bois style victorien est cassée sur le dossier. Je recherche une personne qui serait capable de restaurer cette chaise.
          </div>
          <div className={AnnonceStyles.autre} id="metier"> Ebéniste </div>
          <div className={AnnonceStyles.otherInfo}>
            <div className={AnnonceStyles.autre} id="adr">Nantes</div>
            <div className={AnnonceStyles.autre} id="prix">12,50€</div>
          </div>
        </div>
      </Link>
    </div>
  )
}