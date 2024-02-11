import AnnonceStyles from '../styles/components/annonce.module.css'
<<<<<<< HEAD

export default function Annonce(){
    return(
        <div className={AnnonceStyles.roundedRectangle}>
          <div className={AnnonceStyles.imageCarre}> </div>
          <div className={AnnonceStyles.titreAnnonce}> Chaise en bois </div>
          <div className={AnnonceStyles.description}> Ma chaise en bois style victorien c'est caaser sur le dossier je recherche une personne qui serait capable de restorer cette chaise </div>
        </div>
    )
=======
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
>>>>>>> e780224c5fe74ef01f48340f22aeeccff5a37cc8
}