import footerStyle from '../styles/components/footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(
         <div className={`${footerStyle.container}`}> 
            <div>
                A propos de Réparo
                <ul className={`${footerStyle.column}`}>
                    <li>Qui sommes nous?</li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </div>
            <div>
            Information légales
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
            Nos solutions Pro
                <ul className={`${footerStyle.column}`}>
                    <li>Publicité</li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </div>
            <div>
            Foire aux questions
                <ul className={`${footerStyle.column}`}>
                    <li>Aide</li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            
            </div>
            
            
        </div>



    )
}