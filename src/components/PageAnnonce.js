import PageAnnonceStyles from '../styles/components/pageAnnonce.module.css';
import Link from 'next/link'

export default function PageAnnonce() {
  return(
    <div className={PageAnnonceStyles.annonce}>
      <div className={PageAnnonceStyles.imageRectangle} id="img"><img src="/chaise.jpg"/></div>
      <div className={PageAnnonceStyles.titreAnnonce} id="titre"> Chaise en bois</div>
      <div className={PageAnnonceStyles.autre} id="metier"> ébéniste </div>
      <div className={PageAnnonceStyles.otherInfo}>
        <div className={PageAnnonceStyles.autre} id="adr"> Nantes</div>
        <div className={PageAnnonceStyles.autre} id="prix"> 12€</div>
      </div>
      <div className={PageAnnonceStyles.description} id="desc"> Ma chaise en bois adorée a besoin d'un peu d'amour et d'attention, et je recherche un artisan talentueux pour lui redonner son éclat d'antan !
        ✅ Ce que je recherche :
        Compétences Artisanales : Je suis à la recherche d'un expert en réparation de meubles en bois qui peut prendre en charge les petits problèmes tels que les pieds vacillants, les joints lâches, ou tout autre souci mineur.
        Attention aux Détails : J'apprécie l'attention portée aux détails et la capacité à restaurer la beauté de ma chaise sans compromis sur son charme d'origine.
        Prix Raisonnable : Un budget raisonnable est important pour moi, et je suis prêt à discuter des coûts avant de confier ma chaise à la réparation.
        Si vous êtes passionné par la restauration de meubles en bois et que vous pensez être la personne idéale pour redonner vie à ma chaise, n'hésitez pas à me contacter avec des détails sur votre expérience et vos tarifs. Je suis impatient de confier ma chaise entre des mains expertes 
        [Coordonnées de contact]
      </div>
      <div className={PageAnnonceStyles.button}>
        <Link href="/annonce/der" className={PageAnnonceStyles.service}>Proposer ses services</Link>
      </div>
      <div className={PageAnnonceStyles.marche}></div>
    </div>
  )
}