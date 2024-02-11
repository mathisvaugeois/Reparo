import PageAnnonceStyles from '../styles/components/pageAnnonce.module.css'

export default function PageAnnonce(){
//centrer tous au milieu de la page 
//voir ce qui est fait avec les gars au niveau proposition et tous et description
//même id que la page annonce sauf peut etre pour la description si on en a une plus longue
  return(
    <div className={PageAnnonceStyles.annonce}>
      <div>c'est la page de l'annonce</div>
      <div className={PageAnnonceStyles.imageRectangle}></div>
      
    </div>
    )
}