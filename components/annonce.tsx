import AnnonceStyles from '../styles/components/annonce.module.css'

export default function Annonce(){
    return(
        <div className={AnnonceStyles.roundedRectangle}>
          <div className={AnnonceStyles.imageCarre}> </div>
          <div className={AnnonceStyles.titreAnnonce}> Chaise en bois </div>
          <div className={AnnonceStyles.description}> Ma chaise en bois style victorien c'est caaser sur le dossier je recherche une personne qui serait capable de restorer cette chaise </div>
        </div>
    )
}