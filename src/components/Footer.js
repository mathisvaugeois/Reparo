import footerStyle from '../styles/components/footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(<div className={`${footerStyle.center}`}>
         <div className={`${footerStyle.container}`}> 
            <div>
                <span className={`${footerStyle.titre}`}>A propos de Réparo :</span>
                <ul className={`${footerStyle.column}`}>
                    <li><Link href="/contact">Qui sommes nous?</Link></li>
                    <li><Link href="/LoremIpsum">Nous rejoindre</Link></li>
                    <li><Link href="/LoremIpsum">Nos engagements </Link></li>
                    

                </ul>
            </div>
            <div>
            <span className={`${footerStyle.titre}`}>Information légales :</span>
                <ul className={`${footerStyle.column}`}>
                    <li><Link href="/LoremIpsum">Condition générales d'utilisation</Link></li>
                    <li><Link href="/LoremIpsum">Référencement et classement des annonces</Link></li>
                    <li><Link href="/LoremIpsum">Condition générales de vente</Link></li>
                    

                </ul>
            </div>
            <div>
            <span className={`${footerStyle.titre}`}>Nos solutions Pro :</span>
                <ul className={`${footerStyle.column}`}>
                    <li><Link href="/LoremIpsum">Publicité</Link></li>
                    <li><Link href="/LoremIpsum">Annuaire des professionnels</Link></li>
                    <li><Link href="/LoremIpsum">Autres solutions professionnels</Link></li>
                   

                </ul>
            </div>
            <div>
            <span className={`${footerStyle.titre}`}>Foire aux questions :</span>
                <ul className={`${footerStyle.column}`}>
                    <li><Link href="/LoremIpsum">Aide</Link></li>
                    <li><Link href="/LoremIpsum">Le service de paiement sécurisé</Link></li>
                    <li><Link href="/LoremIpsum">Statut de nos service</Link></li>
                    

                </ul>
            
            </div>
            
            
        </div>
        </div>



    )
}