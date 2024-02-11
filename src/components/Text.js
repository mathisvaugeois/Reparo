import { HeadersAdapter } from 'next/dist/server/web/spec-extension/adapters/headers'
import TextStyle from '../styles/components/text.module.css'
import AnnoncePage from './Annonce'
import Link from 'next/link'

export default function text(){
    return(
        <div className={`${TextStyle.under_carte_texte}`}>
        Sur le site <span><Link href="/">reparo.fr</Link></span>, passez des annonces gratuites et sans commission. 
        Vous pouvez consulter des <span><Link href="/annonce">petites annonces</Link></span> de particuliers et de professionnels partout en France, 
        que vous cherchiez des annonces de réparation de voiture, vélo ou alors faire de la plomberie, éléctricité, peinture 
        ou des réparation en tout genre. 
    </div>
 
    )
}