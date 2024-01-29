import footerStyle from '../styles/components/footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(
         <div id="container"> 
            <p>
                <h3>A propos de Réparo</h3>
                <ul id='aproposlist'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </p>
            <p>
            <h3>Information légales</h3>
                <ul id='infolegal'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </p>
            <p>
            <h3>Nos solutions Pro</h3>
                <ul id='solutionpro'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </p>
            <p>
            <h3>Foire aux questions</h3>
                <ul id='faq'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            
            </p>
            
            
        </div>



    )
}