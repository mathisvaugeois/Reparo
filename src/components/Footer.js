import footerStyle from '../styles/components/footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(<div className={`${footerStyle.center}`}>
         <div className={`${footerStyle.container}`}> 
            <div>
                <span className={`${footerStyle.titre}`}>A propos de Réparo :</span>
                <ul className={`${footerStyle.column}`}>
                    <li>Qui sommes nous?</li>
                    <li>Nous rejoindre</li>
                    <li>Nos engagements </li>
                    <li></li>

                </ul>
            </div>
            <div>
            <span className={`${footerStyle.titre}`}>Information légales :</span>
                <ul className={`${footerStyle.column}`}>
                    <li>Condition générales d'utilisation</li>
                    <li>Référencement et classement des annonces</li>
                    <li>Condition générales de vente</li>
                    <li>Vie privée / cookies</li>
                    <li>Vos droit et obligation </li>
                    <li></li>

                </ul>
            </div>
            <div>
            <span className={`${footerStyle.titre}`}>Nos solutions Pro :</span>
                <ul className={`${footerStyle.column}`}>
                    <li>Publicité</li>
                    <li>Annuaire des professionnels</li>
                    <li>Autres solutions professionnels</li>
                    <li></li>

                </ul>
            </div>
            <div>
            <span className={`${footerStyle.titre}`}>Foire aux questions :</span>
                <ul className={`${footerStyle.column}`}>
                    <li>Aide</li>
                    <li>Le service de paiement sécurisé</li>
                    <li>Statut de nos service</li>
                    <li></li>

                </ul>
            
            </div>
            
            
        </div>
        </div>



    )
}