import AnnonceStyles from '../styles/components/annonce.module.css'

import Link from 'next/link'

export default function AnnonceBis({ id, title, description, metier, ville, prix }){

  console.log("id = ", id)
  return(
    <div>
      <Link href={`/annonce/detail/${id}`} className={AnnonceStyles.roundedRectangle}>
        <div className={AnnonceStyles.imageCarre} id="img"><img src="/pas_photo.png"/></div>
        <div className={AnnonceStyles.content}>
          <div className={AnnonceStyles.titreAnnonce} id="titre"> {title} </div>
          <div className={AnnonceStyles.description} id="desc"> {description} </div>
          <div className={AnnonceStyles.autre} id="metier"> {metier} </div>
          <div className={AnnonceStyles.otherInfo}>
            <div className={AnnonceStyles.autre} id="ville"> {ville} </div>
            <div className={AnnonceStyles.autre} id="prix"> {prix}€</div>
          </div>
        </div>
      </Link>
    </div>
  )
}